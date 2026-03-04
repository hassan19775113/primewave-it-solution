import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as Sentry from "@sentry/node";

// Rate limiter settings
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 6; // max requests per window
// Fallback in-memory counters for local/dev use
const ipCounters = new Map<string, { count: number; firstRequestAt: number }>();

// Initialize Sentry if configured
if (process.env.SENTRY_DSN) {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(email: string) {
  // Basic email validation (RFC-compliant validation is complex)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Contact Form API Route
 * 
 * POST /api/contact
 * 
 * Features:
 * - Sendet Kontaktformular-Daten via Resend Email Service
 * - Verwendet Environment Variable für Email-Empfänger (CONTACT_EMAIL)
 * - Fallback zu "hassan19775113@outlook.com" wenn Variable fehlt
 * - Server-side Validierung der Pflichtfelder
 * - HTML-formatierte E-Mails mit Firmenfarben
 * - Ausführliches Error Logging für Debugging
 * - Bilinguale Fehlermeldungen (DE/EN)
 */
export async function POST(request: NextRequest) {
  try {
    console.log("📧 Contact form submitted");
    console.log("🔑 RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

    // Prüfung: Ist Resend API Key konfiguriert?
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is not configured in Environment Variables");
      const payload: any = { error: "E-Mail-Service ist nicht konfiguriert. Bitte kontaktieren Sie uns direkt per E-Mail." };
      if (process.env.NODE_ENV !== 'production') payload.debug = "RESEND_API_KEY missing";
      return NextResponse.json(payload, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name: rawName, email: rawEmail, phone: rawPhone, company: rawCompany, projectType: rawProjectType, message: rawMessage, recaptchaToken } = body || {};

    const name = typeof rawName === "string" ? rawName.trim() : "";
    const email = typeof rawEmail === "string" ? rawEmail.trim() : "";
    const phone = typeof rawPhone === "string" ? rawPhone.trim() : "";
    const company = typeof rawCompany === "string" ? rawCompany.trim() : "";
    const projectType = typeof rawProjectType === "string" ? rawProjectType.trim() : "";
    const message = typeof rawMessage === "string" ? rawMessage.trim() : "";

    console.log("📝 Form data received:", { name: name ? "(redacted)" : "", email: email ? "(redacted)" : "", projectType });

    // Rate limiting (best-effort): use Upstash Redis when configured, otherwise in-memory
    const xff = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const ip = Array.isArray(xff) ? xff[0] : (xff.split(",")[0] || "unknown");

    const useUpstash = !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
    if (useUpstash) {
      try {
        const { Redis } = await import('@upstash/redis');
        const client = new Redis({ url: process.env.UPSTASH_REDIS_REST_URL!, token: process.env.UPSTASH_REDIS_REST_TOKEN! });
        const key = `rl:${ip}`;
        const count = await client.incr(key);
        if (count === 1) {
          await client.expire(key, Math.ceil(RATE_LIMIT_WINDOW_MS / 1000));
        }
        if (count > RATE_LIMIT_MAX) {
          console.warn(`🚫 Rate limit exceeded (redis) for ip=${ip}`);
          return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }, { status: 429 });
        }
      } catch (e) {
        console.warn("⚠️ Upstash error, falling back to in-memory limiter:", e);
        // fall through to in-memory fallback
      }
    }

    // In-memory fallback limiter
    const now = Date.now();
    const counter = ipCounters.get(ip);
    if (!counter || now - counter.firstRequestAt > RATE_LIMIT_WINDOW_MS) {
      ipCounters.set(ip, { count: 1, firstRequestAt: now });
    } else {
      counter.count += 1;
      ipCounters.set(ip, counter);
      if (counter.count > RATE_LIMIT_MAX) {
        console.warn(`🚫 Rate limit exceeded for ip=${ip}`);
        return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }, { status: 429 });
      }
    }

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, Email und Nachricht sind erforderlich" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Ungültige E-Mail-Adresse" }, { status: 400 });
    }

    // Length limits
    if (name.length > 100 || email.length > 254 || phone.length > 50 || company.length > 100 || projectType.length > 50 || message.length > 5000) {
      return NextResponse.json({ error: "Eines oder mehrere Felder überschreiten die erlaubte Länge." }, { status: 400 });
    }

    // Optional: verify reCAPTCHA when configured and token provided
    if (process.env.RECAPTCHA_SECRET_KEY && recaptchaToken) {
      try {
        const resp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${encodeURIComponent(process.env.RECAPTCHA_SECRET_KEY)}&response=${encodeURIComponent(recaptchaToken)}`,
        });
        const recaptchaJson = await resp.json();
        if (!recaptchaJson.success || (recaptchaJson.score !== undefined && recaptchaJson.score < 0.3)) {
          console.warn("⚠️ reCAPTCHA failed:", recaptchaJson);
          return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 429 });
        }
      } catch (e) {
        console.error("⚠️ reCAPTCHA verification error:", e);
        // do not block submission on verify errors; log and continue
      }
    }

    console.log("📧 Sending email via Resend...");

    // Escape user content for safe HTML interpolation
    const escName = escapeHtml(name);
    const escEmail = escapeHtml(email);
    const escPhone = escapeHtml(phone);
    const escCompany = escapeHtml(company);
    const escProjectType = escapeHtml(projectType);
    const escMessage = escapeHtml(message).replaceAll("\n", "<br />");

    // Email senden via Resend
    // Use configured to/from addresses
    const toAddress = process.env.CONTACT_EMAIL || "hassan19775113@outlook.com";
    const fromAddress = process.env.MAIL_FROM || "Primewave IT Solution <no-reply@primewave-it.de>";

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: escEmail,
      subject: `Neue Kontaktanfrage von ${escName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #13294b; border-bottom: 3px solid #265396; padding-bottom: 10px;">
            Neue Kontaktanfrage
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #265396; margin-bottom: 5px;">Kontaktdaten</h3>
            <p><strong>Name:</strong> ${escName}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${escEmail}">${escEmail}</a></p>
            ${escPhone ? `<p><strong>Telefon:</strong> ${escPhone}</p>` : ""}
            ${escCompany ? `<p><strong>Firma:</strong> ${escCompany}</p>` : ""}
            ${escProjectType ? `<p><strong>Projekttyp:</strong> ${escProjectType}</p>` : ""}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #265396; margin-bottom: 5px;">Nachricht</h3>
            <p style="background: #f8f9fa; padding: 15px; border-left: 4px solid #265396;">${escMessage}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>Diese E-Mail wurde über das Kontaktformular auf primewave-it.de gesendet.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      if (process.env.SENTRY_DSN) {
        Sentry.captureException(error, { tags: { context: 'resend_send' }, extra: { email, name } });
      }
      const payload: any = { error: "Fehler beim Senden der E-Mail" };
      if (process.env.NODE_ENV !== 'production') payload.debug = JSON.stringify(error);
      return NextResponse.json(payload, { status: 500 });
    }

    console.log("✅ Email sent successfully:", data);

    return NextResponse.json(
      { success: true, message: "E-Mail erfolgreich gesendet", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Unexpected error:", error);
    if (process.env.SENTRY_DSN) {
      Sentry.captureException(error, { tags: { context: 'contact_form' } });
    }
    const payload: any = { error: "Interner Serverfehler" };
    if (process.env.NODE_ENV !== 'production') payload.debug = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(payload, { status: 500 });
  }
}

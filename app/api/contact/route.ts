import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    console.log("📧 Contact form submitted");
    console.log("🔑 RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is not configured in Environment Variables");
      return NextResponse.json(
        { 
          error: "E-Mail-Service ist nicht konfiguriert. Bitte kontaktieren Sie uns direkt per E-Mail.",
          debug: "RESEND_API_KEY missing"
        },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, phone, company, projectType, message } = body;

    console.log("📝 Form data received:", { name, email, projectType });

    // Validation
    if (!name || !email || !message) {
     
      return NextResponse.json(
        { error: "Name, Email und Nachricht sind erforderlich" },
        { status: 400 }
      );
    }

    console.log("📧 Sending email via Resend...");

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Primewave IT Solution <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "hassan19775113@outlook.com"],
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #13294b; border-bottom: 3px solid #265396; padding-bottom: 10px;">
            Neue Kontaktanfrage
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #265396; margin-bottom: 5px;">Kontaktdaten</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
            ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ""}
            ${projectType ? `<p><strong>Projekttyp:</strong> ${projectType}</p>` : ""}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #265396; margin-bottom: 5px;">Nachricht</h3>
            <p style="background: #f8f9fa; padding: 15px; border-left: 4px solid #265396; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>Diese E-Mail wurde über das Kontaktformular auf primewave-it.de gesendet.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return NextResponse.json(
        { 
          error: "Fehler beim Senden der E-Mail",
          debug: JSON.stringify(error)
        },
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully:", data);

    return NextResponse.json(
      { success: true, message: "E-Mail erfolgreich gesendet", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Unexpected error:", error);
    return NextResponse.json(
      { 
        error: "Interner Serverfehler",
        debug: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

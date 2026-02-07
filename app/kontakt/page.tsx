"use client";

import Link from "next/link";
import Reveal from "../../components/Reveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { useLanguage } from "../../contexts/LanguageContext";

export default function KontaktPage() {
  const { language } = useLanguage();

  const content = {
    de: {
      heroBadge: "Wir sind hier, um zu helfen",
      heroTitle: "Lassen Sie uns Ihre Idee verwirklichen",
      heroDesc: "Kontaktieren Sie uns noch heute für ein kostenfreies Erstgespräch. Wir beraten Sie gerne zu Ihrem Projekt und zeigen, wie wir Sie unterstützen können.",
      
      formTitle: "Kontaktformular",
      formDesc: "Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail",
      emailPlaceholder: "your@email.com",
      phoneLabel: "Telefon",
      phonePlaceholder: "+49 (123) 456789",
      companyLabel: "Unternehmen",
      companyPlaceholder: "Ihr Unternehmen",
      projectLabel: "Projekttyp",
      projectPlaceholder: "-- Bitte wählen --",
      projectOptions: [
        { value: "", label: "-- Bitte wählen --" },
        { value: "website", label: "Website mit React & Next.js" },
        { value: "onlineshop", label: "Onlineshop mit Shopify" },
        { value: "python", label: "Web Application mit Python" },
        { value: "ui-ux", label: "UI/UX Design" },
        { value: "seo", label: "SEO & Wachstum" },
        { value: "other", label: "Sonstiges" }
      ],
      messageLabel: "Ihre Nachricht",
      messagePlaceholder: "Erzählen Sie uns von Ihrem Projekt...",
      submitButton: "Nachricht senden",
      
      infoTitle: "Kontaktinformationen",
      infoDesc: "Haben Sie Fragen? Kontaktieren Sie uns über einen dieser Kanäle.",
      contactItems: [
        {
          title: "E-Mail",
          value: "hello@primewave.de",
          icon: "✉"
        },
        {
          title: "Telefon",
          value: "+49 (123) 456789",
          icon: "☎"
        },
        {
          title: "Adresse",
          value: "Technologiepark 1\n12345 Berlin, Deutschland",
          icon: "📍"
        },
        {
          title: "Öffnungszeiten",
          value: "Mo–Fr 09:00 – 18:00 Uhr\nSa–So geschlossen",
          icon: "🕐"
        }
      ],
      socialTitle: "Social Media",
      
      faqTitle: "Häufig gestellte Fragen",
      faqs: [
        {
          q: "Wie lange dauert ein typisches Projekt?",
          a: "Die Projektdauer variiert je nach Umfang und Anforderungen. Ein simples Website-Projekt dauert 4-8 Wochen, komplexere Anwendungen 3-6 Monate. Im Kick-off definieren wir einen verbindlichen Zeitplan."
        },
        {
          q: "Wie funktioniert der Entwicklungsprozess?",
          a: "Wir arbeiten agil mit regelmäßigen Sprints und Weekly Check-ins. Sie erhalten wöchentliche Updates und haben volle Transparenz über den Fortschritt. Feedback wird direkt in die nächste Phase integriert."
        },
        {
          q: "Welche Budget-Optionen gibt es?",
          a: "Wir bieten flexible Modelle: Fixed-Price für klar definierte Projekte, Time & Material für explorative Projekte und Retainer-Modelle für langfristige Zusammenarbeit. Lassen Sie uns während des Gesprächs Ihre Anforderungen abstecken."
        },
        {
          q: "Werden Wartung und Support angeboten?",
          a: "Ja, nach dem Launch bieten wir verschiedene Support-Pakete an: Basic Support (Bugfixes), Maintenance (regelmäßige Updates) und Growth Support (kontinuierliche Optimierung)."
        },
        {
          q: "Können Sie auch bestehende Seiten überarbeiten?",
          a: "Absolut. Wir können bestehende Websites analysieren, technisch optimieren, zu neueren Technologien migrieren oder komplett überarbeiten – alles ohne Verlust von Rankings."
        }
      ],
      
      ctaTitle: "Bereit zu starten?",
      ctaDesc: "Lassen Sie uns ein kostenfreies Gespräch führen und schauen, wie Sie von unserer Expertise profitieren können.",
      ctaButton: "Termin vereinbaren",
      ctaBack: "Zurück zur Startseite"
    },
    en: {
      heroBadge: "We're Here to Help",
      heroTitle: "Let's Bring Your Idea to Life",
      heroDesc: "Contact us today for a free initial consultation. We're happy to advise you on your project and show how we can support you.",
      
      formTitle: "Contact Form",
      formDesc: "Fill out the form and we'll get back to you within 24 hours.",
      nameLabel: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+49 (123) 456789",
      companyLabel: "Company",
      companyPlaceholder: "Your Company",
      projectLabel: "Project Type",
      projectPlaceholder: "-- Please Choose --",
      projectOptions: [
        { value: "", label: "-- Please Choose --" },
        { value: "website", label: "Website with React & Next.js" },
        { value: "onlineshop", label: "Online Shop with Shopify" },
        { value: "python", label: "Web Application with Python" },
        { value: "ui-ux", label: "UI/UX Design" },
        { value: "seo", label: "SEO & Growth" },
        { value: "other", label: "Other" }
      ],
      messageLabel: "Your Message",
      messagePlaceholder: "Tell us about your project...",
      submitButton: "Send Message",
      
      infoTitle: "Contact Information",
      infoDesc: "Have questions? Contact us through one of these channels.",
      contactItems: [
        {
          title: "Email",
          value: "hello@primewave.de",
          icon: "✉"
        },
        {
          title: "Phone",
          value: "+49 (123) 456789",
          icon: "☎"
        },
        {
          title: "Address",
          value: "Technologiepark 1\n12345 Berlin, Germany",
          icon: "📍"
        },
        {
          title: "Business Hours",
          value: "Mon–Fri 09:00 – 18:00\nSat–Sun Closed",
          icon: "🕐"
        }
      ],
      socialTitle: "Social Media",
      
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "How long does a typical project take?",
          a: "Project duration varies depending on scope and requirements. A simple website project takes 4-8 weeks, more complex applications 3-6 months. We define a binding timeline during kick-off."
        },
        {
          q: "How does the development process work?",
          a: "We work agile with regular sprints and weekly check-ins. You receive weekly updates and have full transparency about progress. Feedback is integrated directly into the next phase."
        },
        {
          q: "What budget options are available?",
          a: "We offer flexible models: Fixed-price for clearly defined projects, time & material for exploratory projects, and retainer models for long-term collaboration. Let's outline your requirements during the call."
        },
        {
          q: "Do you offer maintenance and support?",
          a: "Yes, after launch we offer various support packages: Basic Support (bug fixes), Maintenance (regular updates), and Growth Support (continuous optimization)."
        },
        {
          q: "Can you also revise existing sites?",
          a: "Absolutely. We can analyze existing websites, technically optimize them, migrate to newer technologies, or completely overhaul them – all without loss of rankings."
        }
      ],
      
      ctaTitle: "Ready to Start?",
      ctaDesc: "Let's have a free conversation and see how you can benefit from our expertise.",
      ctaButton: "Schedule Appointment",
      ctaBack: "Back to Home"
    }
  };

  const t = content[language];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-6 space-y-4 text-center" delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-brand-700">
                {t.heroBadge}
              </span>
              <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                <span className="bg-gradient-to-r from-[#13294b] to-[#265396] bg-clip-text text-transparent">
                  {t.heroTitle}
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                {t.heroDesc}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Contact Form */}
              <Reveal className="space-y-6" delay={0}>
                <div>
                  <h2 className="text-3xl font-bold text-[#13294b] md:text-4xl">
                    {t.formTitle}
                  </h2>
                  <p className="mt-2 text-slate-600">
                    {t.formDesc}
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-600">
                      {t.nameLabel} *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t.namePlaceholder}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-600">
                      {t.emailLabel} *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t.emailPlaceholder}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-600">
                      {t.phoneLabel}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder={t.phonePlaceholder}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-600">
                      {t.companyLabel}
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder={t.companyPlaceholder}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="mb-2 block text-sm font-medium text-slate-600">
                      {t.projectLabel} *
                    </label>
                    <select
                      id="project"
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      required
                    >
                      {t.projectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-600">
                      {t.messageLabel} *
                    </label>
                    <textarea
                      id="message"
                      placeholder={t.messagePlaceholder}
                      rows={5}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#13294b] px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-[#265396]"
                  >
                    {t.submitButton}
                  </button>
                </form>
              </Reveal>

              {/* Contact Info */}
              <Reveal className="space-y-8" delay={120}>
                <div>
                  <h2 className="text-3xl font-bold text-[#13294b] md:text-4xl">
                    {t.infoTitle}
                  </h2>
                  <p className="mt-2 text-slate-600">
                    {t.infoDesc}
                  </p>
                </div>

                {t.contactItems.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-700">
                      {item.title}
                    </p>
                    <p className="mt-2 whitespace-pre-line text-slate-700">
                      {item.value}
                    </p>
                  </div>
                ))}

                {/* Social Links */}
                <div className="space-y-3 border-t border-slate-200 pt-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-brand-700">
                    {t.socialTitle}
                  </p>
                  <div className="flex gap-3">
                    {[
                      { name: "LinkedIn", url: "#" },
                      { name: "Twitter", url: "#" },
                      { name: "GitHub", url: "#" }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="inline-block rounded-full border border-brand-200 p-3 text-brand-700 transition hover:bg-brand-50"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-b border-slate-200 bg-white px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16 text-center" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.faqTitle}
              </h2>
            </Reveal>

            <div className="grid gap-6 md:max-w-3xl md:mx-auto">
              {t.faqs.map((faq, idx) => (
                <Reveal
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  delay={idx * 60}
                >
                  <h3 className="font-semibold text-[#13294b]">{faq.q}</h3>
                  <p className="mt-3 text-sm text-slate-600">{faq.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-slate-200 bg-gradient-to-r from-[#13294b] to-[#265396] px-6 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal className="mb-8 space-y-4" delay={0}>
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                {t.ctaTitle}
              </h2>
              <p className="text-lg text-white/90">
                {t.ctaDesc}
              </p>
            </Reveal>

            <Reveal className="flex flex-wrap justify-center gap-4" delay={120}>
              <button className="rounded-full bg-white px-8 py-4 font-semibold text-[#13294b] transition hover:-translate-y-0.5">
                {t.ctaButton}
              </button>
              <Link
                href="/"
                className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white/20"
              >
                {t.ctaBack}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

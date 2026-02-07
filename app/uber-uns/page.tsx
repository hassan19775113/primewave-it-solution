"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { useLanguage } from "../../contexts/LanguageContext";

export default function UberUnsPage() {
  const { language } = useLanguage();

  const content = {
    de: {
      heroBadge: "Über Primewave IT Solution",
      heroTitle: "Wir entwickeln digitale Lösungen, die Ihr Business voranbringen",
      heroDesc: "Primewave IT Solution ist Ihr Partner für moderne Webentwicklung, UI/UX Design und SEO. Mit über 8 Jahren Erfahrung helfen wir Unternehmen, ihre digitale Präsenz zu stärken und messbare Ergebnisse zu erzielen.",
      
      missionTitle: "Unsere Mission",
      missionText1: "Wir glauben daran, dass großartige digitale Erlebnisse kein Luxus sein sollten. Unsere Mission ist es, Unternehmen jeder Größe mit modernsten Web-Technologien auszustatten und ihnen zu helfen, online erfolgreich zu sein.",
      missionText2: "Dabei setzen wir auf transparente Kommunikation, klare Prozesse und messbare Ergebnisse. Kein Marketing-Blabla – nur echte Lösungen, die funktionieren.",
      
      visionTitle: "Unsere Vision",
      visionText1: "Eine digitale Welt, in der Unternehmen nicht nur präsent sind, sondern wirklich verstanden, gefunden und geschätzt werden. Wo Websites nicht nur schön aussehen, sondern auch verkaufen. Wo Design nicht nur Ästhetik ist, sondern echte User-Probleme löst.",
      visionText2: "Wir wollen der bevorzugte Partner für Unternehmen werden, die digitale Exzellenz anstreben.",
      
      valuesTitle: "Unsere Werte",
      values: [
        {
          title: "Qualität vor Speed",
          description: "Wir liefern nur Code und Design, auf die wir stolz sind. Kein Quick & Dirty, sondern nachhaltige Lösungen."
        },
        {
          title: "Transparenz",
          description: "Klare Kommunikation, realistische Timelines und ehrliche Einschätzungen. Keine versteckten Kosten oder überraschenden Verzögerungen."
        },
        {
          title: "Kundenorientierung",
          description: "Ihr Erfolg ist unser Erfolg. Wir hören zu, verstehen Ihre Ziele und entwickeln Lösungen, die wirklich passen."
        },
        {
          title: "Innovation",
          description: "Wir bleiben am Puls der Zeit mit modernen Technologien wie Next.js, React, Python und Best Practices für Performance und SEO."
        },
        {
          title: "Messbare Ergebnisse",
          description: "Schöne Designs sind gut, aber Conversions sind besser. Wir fokussieren uns auf KPIs, die Ihr Business voranbringen."
        },
        {
          title: "Langfristige Partnerschaften",
          description: "Wir suchen keine One-Off-Projekte, sondern langfristige Beziehungen, in denen wir gemeinsam wachsen."
        }
      ],
      
      expertiseTitle: "Unsere Expertise",
      techStackTitle: "Technologie-Stack",
      techStack: [
        "Next.js & React für moderne Web-Apps",
        "TypeScript für sicheren, wartbaren Code",
        "Tailwind CSS für performantes Styling",
        "Python (Django, FastAPI) für Backend-Systeme",
        "Shopify & Headless E-Commerce",
        "PostgreSQL, MongoDB für Datenbanken",
        "Vercel, AWS für Hosting & Deployment"
      ],
      
      servicesTitle: "Services",
      services: [
        "Webdesign & Landing Pages",
        "E-Commerce & Onlineshops",
        "Web Applications mit Python",
        "UI/UX Design & Prototyping",
        "SEO & Performance-Optimierung",
        "Design Systems & Component Libraries",
        "API-Entwicklung & Integrationen"
      ],
      
      stats: [
        { label: "Jahre Erfahrung", value: "8+" },
        { label: "Erfolgreiche Projekte", value: "120+" },
        { label: "Zufriedene Kunden", value: "85+" },
        { label: "Ø Launch-Zeit", value: "6 Wochen" }
      ],
      
      ctaTitle: "Bereit, gemeinsam zu wachsen?",
      ctaDesc: "Lassen Sie uns über Ihr Projekt sprechen und herausfinden, wie wir Ihnen helfen können.",
      ctaButton: "Projekt besprechen",
      ctaBack: "Zurück zur Startseite"
    },
    en: {
      heroBadge: "About Primewave IT Solution",
      heroTitle: "We Build Digital Solutions That Drive Your Business Forward",
      heroDesc: "Primewave IT Solution is your partner for modern web development, UI/UX design, and SEO. With over 8 years of experience, we help companies strengthen their digital presence and achieve measurable results.",
      
      missionTitle: "Our Mission",
      missionText1: "We believe that great digital experiences shouldn't be a luxury. Our mission is to equip businesses of all sizes with cutting-edge web technologies and help them succeed online.",
      missionText2: "We rely on transparent communication, clear processes, and measurable results. No marketing talk – just real solutions that work.",
      
      visionTitle: "Our Vision",
      visionText1: "A digital world where companies aren't just present, but are truly understood, found, and appreciated. Where websites don't just look beautiful, but also convert. Where design isn't just aesthetics, but solves real user problems.",
      visionText2: "We want to become the preferred partner for companies striving for digital excellence.",
      
      valuesTitle: "Our Values",
      values: [
        {
          title: "Quality Over Speed",
          description: "We only deliver code and design we're proud of. No quick & dirty, but sustainable solutions."
        },
        {
          title: "Transparency",
          description: "Clear communication, realistic timelines, and honest assessments. No hidden costs or surprising delays."
        },
        {
          title: "Customer Focus",
          description: "Your success is our success. We listen, understand your goals, and develop solutions that truly fit."
        },
        {
          title: "Innovation",
          description: "We stay ahead with modern technologies like Next.js, React, Python, and best practices for performance and SEO."
        },
        {
          title: "Measurable Results",
          description: "Beautiful designs are good, but conversions are better. We focus on KPIs that drive your business forward."
        },
        {
          title: "Long-term Partnerships",
          description: "We're not looking for one-off projects, but long-term relationships where we grow together."
        }
      ],
      
      expertiseTitle: "Our Expertise",
      techStackTitle: "Technology Stack",
      techStack: [
        "Next.js & React for modern web apps",
        "TypeScript for secure, maintainable code",
        "Tailwind CSS for performant styling",
        "Python (Django, FastAPI) for backend systems",
        "Shopify & Headless E-Commerce",
        "PostgreSQL, MongoDB for databases",
        "Vercel, AWS for hosting & deployment"
      ],
      
      servicesTitle: "Services",
      services: [
        "Web Design & Landing Pages",
        "E-Commerce & Online Shops",
        "Web Applications with Python",
        "UI/UX Design & Prototyping",
        "SEO & Performance Optimization",
        "Design Systems & Component Libraries",
        "API Development & Integrations"
      ],
      
      stats: [
        { label: "Years Experience", value: "8+" },
        { label: "Successful Projects", value: "120+" },
        { label: "Happy Clients", value: "85+" },
        { label: "Avg Launch Time", value: "6 Weeks" }
      ],
      
      ctaTitle: "Ready to Grow Together?",
      ctaDesc: "Let's talk about your project and find out how we can help you.",
      ctaButton: "Discuss Project",
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
            <Reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-brand-700">
              {t.heroBadge}
            </Reveal>
            <Reveal className="mb-6 space-y-6" delay={60}>
              <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                <span className="bg-gradient-to-r from-[#13294b] to-[#265396] bg-clip-text text-transparent">
                  {t.heroTitle}
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                {t.heroDesc}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <Reveal delay={0}>
                <h2 className="mb-6 text-4xl font-bold text-[#13294b]">{t.missionTitle}</h2>
                <p className="mb-4 text-lg leading-relaxed text-slate-600">
                  {t.missionText1}
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                  {t.missionText2}
                </p>
              </Reveal>

              <Reveal delay={120}>
                <h2 className="mb-6 text-4xl font-bold text-[#13294b]">{t.visionTitle}</h2>
                <p className="mb-4 text-lg leading-relaxed text-slate-600">
                  {t.visionText1}
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                  {t.visionText2}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-slate-200 bg-white px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16 text-center" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.valuesTitle}
              </h2>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-3">
              {t.values.map((value, idx) => (
                <Reveal
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  delay={idx * 60}
                >
                  <h3 className="mb-3 text-xl font-semibold text-[#13294b]">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Expertise */}
        <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16 text-center" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.expertiseTitle}
              </h2>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2">
              <Reveal delay={0}>
                <div className="rounded-2xl border border-slate-200 bg-white p-8">
                  <h3 className="mb-4 text-2xl font-bold text-[#13294b]">{t.techStackTitle}</h3>
                  <div className="space-y-3">
                    {t.techStack.map((tech) => (
                      <div key={tech} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                        <span className="text-slate-600">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-2xl border border-slate-200 bg-white p-8">
                  <h3 className="mb-4 text-2xl font-bold text-[#13294b]">{t.servicesTitle}</h3>
                  <div className="space-y-3">
                    {t.services.map((service) => (
                      <div key={service} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                        <span className="text-slate-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-slate-200 bg-gradient-to-r from-[#13294b] to-[#265396] px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-4">
              {t.stats.map((stat) => (
                <Reveal key={stat.label} className="text-center" delay={0}>
                  <p className="text-5xl font-bold text-white md:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/80">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-slate-200 bg-white px-6 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal className="mb-8 space-y-4" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.ctaTitle}
              </h2>
              <p className="text-lg text-slate-600">
                {t.ctaDesc}
              </p>
            </Reveal>

            <Reveal className="flex flex-wrap justify-center gap-4" delay={120}>
              <Link
                href="/kontakt"
                className="rounded-full bg-[#13294b] px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#265396]"
              >
                {t.ctaButton}
              </Link>
              <Link
                href="/"
                className="rounded-full border border-brand-200 px-8 py-4 font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50"
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

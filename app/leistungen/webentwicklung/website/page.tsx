"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../../components/Reveal";
import SiteFooter from "../../../../components/SiteFooter";
import SiteHeader from "../../../../components/SiteHeader";
import { useLanguage } from "../../../../contexts/LanguageContext";

export default function WebsitePage() {
  const { language } = useLanguage();

  const content = {
    de: {
      heroBadge: "Websites & Landing Pages",
      heroTitle: "Websites mit Next.js, die Ihre Besucher in Kunden verwandeln",
      heroDesc:
        "Moderne, blitzschnelle Websites optimiert für SEO und Conversion. Mit Next.js, React und Tailwind bauen wir das perfekte digitale Zuhause für Ihr Branding.",
      ctaPrimary: "Website starten",
      ctaSecondary: "SEO-Paket ansehen",
      benefitsTitle: "Warum Next.js für Ihre Website?",
      benefitsSubtitle: "Next.js ist das Fundament moderner Web-Entwicklung",
      benefits: [
        {
          title: "Blitzschnell laden",
          description:
            "Optimiert für Core Web Vitals – bessere Rankings, höhere Conversion, bessere User Experience"
        },
        {
          title: "Responsive & zukunftssicher",
          description: "Perfekt auf allen Devices, mobil-first und mit modernem Next.js-Stack"
        },
        {
          title: "Built-in SEO",
          description:
            "Technisches SEO, Structured Data und Sitemaps von Anfang an konfiguriert"
        },
        {
          title: "Flexible Content",
          description: "Headless CMS oder statisch – je nachdem, wie viel Flexibilität Sie brauchen"
        },
        {
          title: "Sichere & wartbar",
          description: "Modernes TypeScript, automatisierte Tests und einfache Deployments"
        },
        {
          title: "Analytics ready",
          description: "Tracking, Heatmaps und Conversion-Analysen sind vorkonfiguriert"
        }
      ],
      featuresTitle: "Alle Features, die Sie brauchen",
      features: [
        "Automatisches Sitemap & RSS-Generation",
        "Schema.org Markup für Rich Snippets",
        "Image Optimization & WebP Conversion",
        "Mobile-First & Responsive Design",
        "Dark Mode Support (optional)",
        "Newsletter Sign-up Integration",
        "Social Media Integration",
        "Multi-Language Support",
        "CDN für globale Performance",
        "A/B Testing Setup",
        "Heatmap & Session Recording",
        "Security Headers & HTTPS"
      ],
      techTitle: "Moderner Tech Stack",
      techSubtitle: "Zukunftssicher und battle-tested Technologies",
      techStack: [
        "Next.js 14+",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Headless CMS",
        "PostgreSQL",
        "Vercel",
        "Stripe/Payments",
        "Analytics Tools",
        "SEO Tools"
      ],
      useCasesTitle: "Was wir bauen",
      useCases: [
        {
          title: "Unternehmenswebsite",
          description: "Modernes Branding, Portfolio und Lead-Generierung mit Kontaktformular",
          image:
            "https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Landingpage",
          description:
            "Hochkonvertierend optimiert mit klarem CTA, Social Proof und Video-Integration",
          image:
            "https://images.unsplash.com/photo-1612900506-a1d235f7c0d9?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Blog & Content Hub",
          description:
            "Skalierbare Content-Plattform mit SEO-optimierten Artikeln und Kategorien",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f70db4fb0?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "SaaS Landing",
          description: "Feature-fokussiert mit Pricing, FAQ, Case Studies und Free Trial CTA",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      processTitle: "Unser Website-Entwicklungsprozess",
      processSteps: [
        {
          title: "1. Discovery & Strategy",
          description:
            "Wir analysieren Ihre Zielgruppe, Konkurrenz und definieren KPIs. Design-Workshop zur Festlegung von Look & Feel."
        },
        {
          title: "2. Design & Wireframe",
          description:
            "High-Fidelity Designs in Figma, Responsive-Prototypen und Feedback-Schleifen mit klaren Milestones."
        },
        {
          title: "3. Development & Build",
          description:
            "Sauberer Next.js-Code mit TypeScript, Tailwind CSS und automatisierten Tests. Weekly Deployments auf Vercel."
        },
        {
          title: "4. Launch & Optimization",
          description:
            "SEO-Audit, Performance-Testing, Monitoring-Setup und Post-Launch-Support für kontinuierliche Verbesserung."
        },
        {
          title: "5. Growth & Maintenance",
          description:
            "Analytics-Review, A/B-Testing, regelmäßige Updates und Optimierungen basierend auf User-Feedback."
        }
      ],
      stats: [
        { label: "Websites gebaut", value: "85+" },
        { label: "Ø Lighthouse Score", value: "92" },
        { label: "Conversion Steigerung", value: "+45%" }
      ],
      pricingTitle: "Transparent Pricing",
      pricingSubtitle: "Verschiedene Optionen für verschiedene Anforderungen",
      pricing: [
        {
          name: "Startup",
          price: "€4.999,–",
          desc: "Perfekt für erste Online-Präsenz",
          features: [
            "5 Seiten",
            "Responsive Design",
            "SEO Basis",
            "Kontaktformular",
            "2 Monate Support"
          ]
        },
        {
          name: "Business",
          price: "€9.999,–",
          desc: "Für etablierte Unternehmen",
          features: [
            "15 Seiten",
            "Headless CMS",
            "Advanced SEO",
            "Analytics Setup",
            "Blog Funktionen",
            "6 Monate Support"
          ]
        },
        {
          name: "Enterprise",
          price: "€19.999+",
          desc: "Große Websites mit vielen Features",
          features: [
            "Unbegrenzte Seiten",
            "E-Commerce möglich",
            "API Integration",
            "Custom Features",
            "Internationalisierung",
            "1 Jahr Support"
          ]
        }
      ],
      popular: "Beliebt",
      request: "Anfragen",
      faqTitle: "Häufig gestellte Fragen",
      faqs: [
        {
          q: "Wie lange dauert der Website-Build?",
          a: "Je nach Umfang 4-12 Wochen. Eine einfache Website 4-6 Wochen, komplexere Projekte 8-12 Wochen. Im Kick-off legen wir einen verbindlichen Timeline fest."
        },
        {
          q: "Kann ich die Website später bearbeiten?",
          a: "Ja! Mit unserem Headless CMS können Sie Inhalte selbst pflegen. Wir zeigen Ihnen, wie es funktioniert oder übernehmen Updates gegen Stundenhonorar."
        },
        {
          q: "Ist die Website SEO-optimiert?",
          a: "Absolut. Technisches SEO ist Standard – Sitemaps, Structured Data, Open Graph Tags, Meta-Descriptions. Für inhaltliche SEO empfehlen wir unser SEO-Paket."
        },
        {
          q: "Was kostet der Support nach dem Launch?",
          a: "Verschiedene Optionen: Basis (Bugfixes), Maintenance (monatliche Updates) oder Growth Support. Gerne sprechen wir über Ihre Anforderungen."
        }
      ],
      ctaTitle: "Ready für eine moderne Website?",
      ctaDesc:
        "Lassen Sie uns Ihre Vision in eine hochperformante Website umwandeln. Ein kostenfreies Erstgespräch dauert 30 Minuten.",
      ctaFooterPrimary: "Kostenfreies Erstgespräch",
      ctaFooterSecondary: "Zurück zur Startseite"
    },
    en: {
      heroBadge: "Websites & Landing Pages",
      heroTitle: "Next.js websites that turn visitors into customers",
      heroDesc:
        "Modern, lightning‑fast websites optimized for SEO and conversion. With Next.js, React, and Tailwind we build the perfect digital home for your brand.",
      ctaPrimary: "Start website project",
      ctaSecondary: "View SEO package",
      benefitsTitle: "Why Next.js for your website?",
      benefitsSubtitle: "Next.js is the foundation of modern web development",
      benefits: [
        {
          title: "Lightning fast",
          description:
            "Optimized for Core Web Vitals — better rankings, higher conversion, better user experience"
        },
        {
          title: "Responsive & future‑proof",
          description: "Perfect on all devices, mobile‑first, built with the modern Next.js stack"
        },
        {
          title: "Built‑in SEO",
          description: "Technical SEO, structured data, and sitemaps configured from day one"
        },
        {
          title: "Flexible content",
          description: "Headless CMS or static — depending on how much flexibility you need"
        },
        {
          title: "Secure & maintainable",
          description: "Modern TypeScript, automated tests, and easy deployments"
        },
        {
          title: "Analytics ready",
          description: "Tracking, heatmaps, and conversion analytics are pre‑configured"
        }
      ],
      featuresTitle: "All the features you need",
      features: [
        "Automatic sitemap & RSS generation",
        "Schema.org markup for rich snippets",
        "Image optimization & WebP conversion",
        "Mobile‑first & responsive design",
        "Dark mode support (optional)",
        "Newsletter sign‑up integration",
        "Social media integration",
        "Multi‑language support",
        "CDN for global performance",
        "A/B testing setup",
        "Heatmap & session recording",
        "Security headers & HTTPS"
      ],
      techTitle: "Modern tech stack",
      techSubtitle: "Future‑proof and battle‑tested technologies",
      techStack: [
        "Next.js 14+",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Headless CMS",
        "PostgreSQL",
        "Vercel",
        "Stripe/Payments",
        "Analytics tools",
        "SEO tools"
      ],
      useCasesTitle: "What we build",
      useCases: [
        {
          title: "Corporate website",
          description: "Modern branding, portfolio, and lead generation with contact forms",
          image:
            "https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Landing page",
          description: "High‑converting pages with clear CTA, social proof, and video integration",
          image:
            "https://images.unsplash.com/photo-1612900506-a1d235f7c0d9?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Blog & content hub",
          description: "Scalable content platform with SEO‑optimized articles and categories",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f70db4fb0?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "SaaS landing",
          description: "Feature‑focused with pricing, FAQ, case studies, and free‑trial CTA",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      processTitle: "Our website development process",
      processSteps: [
        {
          title: "1. Discovery & strategy",
          description:
            "We analyze your audience and competitors and define KPIs. Design workshop to set the look & feel."
        },
        {
          title: "2. Design & wireframe",
          description:
            "High‑fidelity Figma designs, responsive prototypes, and feedback loops with clear milestones."
        },
        {
          title: "3. Development & build",
          description:
            "Clean Next.js code with TypeScript, Tailwind CSS, and automated tests. Weekly deployments on Vercel."
        },
        {
          title: "4. Launch & optimization",
          description:
            "SEO audit, performance testing, monitoring setup, and post‑launch support for continuous improvement."
        },
        {
          title: "5. Growth & maintenance",
          description:
            "Analytics reviews, A/B testing, regular updates, and optimization based on user feedback."
        }
      ],
      stats: [
        { label: "Websites built", value: "85+" },
        { label: "Avg. Lighthouse score", value: "92" },
        { label: "Conversion uplift", value: "+45%" }
      ],
      pricingTitle: "Transparent pricing",
      pricingSubtitle: "Different options for different needs",
      pricing: [
        {
          name: "Startup",
          price: "€4,999",
          desc: "Perfect for a first online presence",
          features: [
            "5 pages",
            "Responsive design",
            "Basic SEO",
            "Contact form",
            "2 months support"
          ]
        },
        {
          name: "Business",
          price: "€9,999",
          desc: "For established companies",
          features: [
            "15 pages",
            "Headless CMS",
            "Advanced SEO",
            "Analytics setup",
            "Blog features",
            "6 months support"
          ]
        },
        {
          name: "Enterprise",
          price: "€19,999+",
          desc: "Large websites with many features",
          features: [
            "Unlimited pages",
            "E‑commerce possible",
            "API integration",
            "Custom features",
            "Internationalization",
            "1 year support"
          ]
        }
      ],
      popular: "Popular",
      request: "Request",
      faqTitle: "Frequently asked questions",
      faqs: [
        {
          q: "How long does a website build take?",
          a: "Depending on scope, 4–12 weeks. Simple sites take 4–6 weeks, complex projects 8–12 weeks. We define a clear timeline in kickoff."
        },
        {
          q: "Can I edit the website later?",
          a: "Yes! With a headless CMS you can maintain content yourself. We can train you or handle updates for an hourly rate."
        },
        {
          q: "Is the website SEO‑optimized?",
          a: "Absolutely. Technical SEO is standard — sitemaps, structured data, Open Graph tags, meta descriptions. For content SEO we recommend our SEO package."
        },
        {
          q: "What does support cost after launch?",
          a: "We offer options like basic (bug fixes), maintenance (monthly updates), or growth support. We’ll tailor it to your needs."
        }
      ],
      ctaTitle: "Ready for a modern website?",
      ctaDesc:
        "Let’s turn your vision into a high‑performing website. A free initial call takes 30 minutes.",
      ctaFooterPrimary: "Free initial call",
      ctaFooterSecondary: "Back to home"
    }
  } as const;

  const t = content[language];

  const benefits = t.benefits;
  const features = t.features;
  const techStack = t.techStack;
  const useCases = t.useCases;

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

            <Reveal className="flex flex-wrap gap-4" delay={120}>
              <Link
                href="/kontakt"
                className="rounded-full bg-[#13294b] px-8 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#265396]"
              >
                {t.ctaFooterPrimary}
              </Link>
              <Link
                href="/leistungen/seo"
                className="rounded-full border border-brand-200 px-8 py-3 font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50"
              >
                {t.ctaFooterSecondary}
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="border-b border-slate-200 bg-slate-50 px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16 text-center" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.benefitsTitle}
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                {t.benefitsSubtitle}
              </p>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, idx) => (
                <Reveal
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  delay={idx * 60}
                >
                  <h3 className="mb-3 text-xl font-semibold text-[#13294b]">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-b border-slate-200 bg-white px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16 text-center" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.featuresTitle}
              </h2>
            </Reveal>

            <Reveal
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 md:p-16"
              delay={120}
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                    <span className="font-medium text-slate-900">{feature}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16 text-center" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.techTitle}
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                {t.techSubtitle}
              </p>
            </Reveal>

            <Reveal
              className="rounded-3xl border border-slate-200 bg-white p-10 md:p-16"
              delay={120}
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {techStack.map((tech) => (
                  <div key={tech} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                    <div className="h-3 w-3 rounded-full bg-brand-500" />
                    <span className="font-medium text-slate-900">{tech}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="border-b border-slate-200 bg-white px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16 text-center" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.useCasesTitle}
              </h2>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2">
              {useCases.map((useCase, idx) => (
                <Reveal
                  key={useCase.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  delay={idx * 80}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      alt={useCase.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      height={480}
                      src={useCase.image}
                      width={720}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                    <p className="mt-2 text-slate-200">{useCase.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16 text-center" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.processTitle}
              </h2>
            </Reveal>

            <div className="space-y-6 md:space-y-8">
              {t.processSteps.map((step, idx) => (
                <Reveal
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
                  delay={idx * 80}
                >
                  <h3 className="mb-2 text-2xl font-bold text-[#13294b]">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-slate-200 bg-gradient-to-r from-[#13294b] to-[#265396] px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
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

        {/* Pricing Section */}
        <section className="border-b border-slate-200 bg-white px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16 text-center" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.pricingTitle}
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                {t.pricingSubtitle}
              </p>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-3">
              {t.pricing.map((plan, idx) => (
                <Reveal
                  key={plan.name}
                  className="relative flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1"
                  delay={idx * 80}
                >
                  {idx === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-semibold text-white">
                      {t.popular}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-[#13294b]">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{plan.desc}</p>
                  <p className="mt-6 text-4xl font-bold text-slate-900">{plan.price}</p>
                  <ul className="mt-6 grow space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="h-2 w-2 rounded-full bg-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full rounded-full bg-[#13294b] px-6 py-3 font-semibold text-white transition hover:bg-[#265396]">
                    {t.request}
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 md:py-32">
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
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6"
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
              <Link
                href="/kontakt"
                className="rounded-full bg-white px-8 py-4 font-semibold text-[#13294b] transition hover:-translate-y-0.5"
              >
                {t.ctaPrimary}
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white/20"
              >
                {t.ctaSecondary}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

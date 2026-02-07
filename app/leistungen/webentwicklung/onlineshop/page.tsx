"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../../components/Reveal";
import SiteFooter from "../../../../components/SiteFooter";
import SiteHeader from "../../../../components/SiteHeader";
import { useLanguage } from "../../../../contexts/LanguageContext";

export default function OnlineshopPage() {
  const { language } = useLanguage();

  const content = {
    de: {
      heroBadge: "E-Commerce & Onlineshops",
      heroTitle: "Onlineshops mit Shopify & Next.js, gemacht zum Verkaufen",
      heroDesc:
        "Performante, konversions-fokussierte E-Commerce-Lösungen. Mit Shopify als Backend und Next.js als verdammt schnellem Frontend – der perfekte Stack für E-Commerce.",
      ctaHeroPrimary: "Shop planen",
      ctaHeroSecondary: "SEO für Shop",
      benefitsTitle: "Warum diese Tech-Stack für Ihren Shop?",
      benefitsSubtitle: "Shopify + Next.js = Maximale Performance + Vollständige Kontrolle",
      benefits: [
        {
          title: "Konversions-fokussiert",
          description:
            "Psychologisches Design, optimierte Checkout-Flows und Social Proof erhöhen Ihre Verkaufsrate"
        },
        {
          title: "Shopify-Power",
          description: "Headless Commerce mit Shopify – extrem skalierbar, wartbar und erweiterbar"
        },
        {
          title: "Payment-Integrationen",
          description:
            "Stripe, Paypal, Klarna, Apple Pay – alle wichtigen Zahlungsmethoden sind integriert"
        },
        {
          title: "Mobile-First",
          description:
            "70% des E-Commerce läuft auf Mobile – wir bauen mobil-first und konvertierend"
        },
        {
          title: "Performance",
          description:
            "Schnelle Ladezeiten = höhere Rankings + bessere Konversion + weniger Absprünge"
        },
        {
          title: "Skalierbare Struktur",
          description:
            "Vom Startup mit 100 SKUs zum Enterprise mit 100.000+ Produkten – ausgebaut für Wachstum"
        }
      ],
      featuresTitle: "Alle Shop-Features included",
      features: [
        "Produktspezifische Meta-Tags & Strukturdaten",
        "Kategorien & Filter-Navigation",
        "Wishlist & Vergleich-Features",
        "Inventory-Management Integration",
        "Automated Email Marketing",
        "Advanced Analytics & Attribution",
        "A/B Testing für Layouts",
        "Mobile Wallet Integration",
        "Multi-Currency Support",
        "EU VAT Compliance",
        "Abandoned Cart Recovery",
        "Product Recommendations Engine"
      ],
      techTitle: "E-Commerce Tech Stack",
      techSubtitle: "Marktführende Tools für skalierbare Online-Shops",
      techStack: [
        "Next.js 14+",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Shopify API",
        "Stripe/Payments",
        "PostgreSQL",
        "Vercel",
        "Klaviyo",
        "Segment Analytics"
      ],
      useCasesTitle: "Shop-Arten, die wir bauen",
      useCases: [
        {
          title: "Fashion & Lifestyle",
          description: "Visual-first Shops mit Lookbooks, Size Guides und Trend-Seasonal CMS",
          image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Tech & Electronics",
          description: "Spec-fokussiert mit vergleichenden Tabellen, Reviews und Tech Deep-Dives",
          image:
            "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Food & Beverage",
          description: "Hochwertige Produktfotos, Rezept-Integration, Abonnement-Models",
          image:
            "https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "B2B / Großmengen",
          description: "Custom Pricing, Bulk Orders, API für Partner-Integrationen",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      processTitle: "Shop-Entwicklung step-by-step",
      processSteps: [
        {
          title: "1. Shop-Strategie & Audit",
          description:
            "Wir analysieren Ihren aktuellen Shop (falls vorhanden), Konkurrenz und definieren KPIs wie AOV, Konversionrate und Customer Lifetime Value."
        },
        {
          title: "2. Shopify & CMS Setup",
          description:
            "Shopify-Admin-Konfiguration, Produktdatenstruktur, Kategorien und Collections. Evergreen-CMS für Blog und Landing Pages."
        },
        {
          title: "3. Design & UX für Konversion",
          description:
            "Hochwertige Designs mit Psychology-Fokus: Trust Signals, Social Proof, Urgency-Elements. Mobile-First Prototyping."
        },
        {
          title: "4. Development & Integrationen",
          description:
            "Next.js-Frontend mit Shopify Storefront API, Payment-Gateways, Email-Marketing, Analytics. Full-Stack E-Commerce."
        },
        {
          title: "5. Launch & Optimierung",
          description:
            "Performance-Testing (LCP, CLS, FID), Security Audit, Checkout-Optimierung, A/B Testing Setup, Google Analytics 4."
        },
        {
          title: "6. Growth-Phase",
          description:
            "Continuous A/B Testing, Heatmaps, Conversion-Rate-Optimierung, Email-Funnels, Loyalty-Programs und Upsell-Strategien."
        }
      ],
      stats: [
        { label: "Online-Shops", value: "32+" },
        { label: "Ø Order Growth", value: "+78%" },
        { label: "Cart Abandonment Reduction", value: "-35%" }
      ],
      pricingTitle: "Shop-Pakete",
      pricingSubtitle: "Verschiedene Größen und Anforderungen",
      pricing: [
        {
          name: "Starter Shop",
          price: "€8.999,–",
          desc: "Für Neue E-Commerce",
          features: [
            "bis zu 500 Produkte",
            "Shopify + Next.js",
            "Basic Integrations",
            "1 Payment Gateway",
            "Mobile Optimiert",
            "3 Monate Support"
          ]
        },
        {
          name: "Growth Shop",
          price: "€16.999,–",
          desc: "Für etablierte Shops",
          features: [
            "bis zu 5.000 Produkte",
            "Advanced Integrations",
            "Multi-Payment Options",
            "Email Marketing Setup",
            "A/B Testing",
            "Analytics Dashboard",
            "6 Monate Support"
          ]
        },
        {
          name: "Enterprise Shop",
          price: "€29.999+",
          desc: "Große, komplexe Shops",
          features: [
            "Unbegrenzte Produkte",
            "Custom Features",
            "API Integrationen",
            "Multi-Sprache",
            "B2B Features",
            "Subscription Models",
            "1 Jahr Support"
          ]
        }
      ],
      popular: "Beliebt",
      request: "Anfragen",
      faqTitle: "E-Commerce FAQ",
      faqs: [
        {
          q: "Können Sie meinen bestehenden Shop migrieren?",
          a: "Ja! Wir migrieren von anderen Plattformen zu Shopify + Next.js ohne Daten- oder Ranking-Verlust. SEO-Redirects und 301er sind vorkonfiguriert."
        },
        {
          q: "Wie lange dauert der Shop-Launch?",
          a: "Je nach Umfang 8-16 Wochen. Ein einfacher Shop mit 100-500 Produkten 8-10 Wochen, komplexere mit 5000+ 12-16 Wochen."
        },
        {
          q: "Was kostet Shopify monatlich?",
          a: "Shopify selbst kostet ab €29/Monat (Basic Plan). Komplexere Shops nutzen den Growth Plan (€99/Monat) oder Advanced (€299+)."
        },
        {
          q: "Können Sie Zahlungsgateways integrieren?",
          a: "Ja, wir integrieren Stripe, PayPal, Klarna, Apple Pay, Google Pay und mehr. Die meisten Gateways sind innerhalb von Stunden live."
        },
        {
          q: "Wird der Shop für SEO optimiert?",
          a: "Absolut. Technisches SEO, Produktspezifische Meta-Tags, Strukturdaten, Sitemaps, Breadcrumbs – alles ist vorkonfiguriert für Google Shopping und organische Suche."
        }
      ],
      ctaTitle: "Ready für den Shop-Launch?",
      ctaDesc:
        "Lassen Sie uns Ihren Online-Shop bauen – mit Fokus auf Conversion, Performance und Wachstum.",
      ctaFooterPrimary: "Shop-Kostenvoranschlag",
      ctaFooterSecondary: "Zurück zur Startseite"
    },
    en: {
      heroBadge: "E-Commerce & Online Shops",
      heroTitle: "Shopify & Next.js stores built to sell",
      heroDesc:
        "High‑performance, conversion‑focused commerce. Shopify as the backend and Next.js as a lightning‑fast frontend — the perfect stack for e‑commerce.",
      ctaHeroPrimary: "Plan your shop",
      ctaHeroSecondary: "SEO for shops",
      benefitsTitle: "Why this stack for your shop?",
      benefitsSubtitle: "Shopify + Next.js = Maximum performance + full control",
      benefits: [
        {
          title: "Conversion‑focused",
          description:
            "Psychology‑driven design, optimized checkout flows, and social proof increase sales"
        },
        {
          title: "Shopify power",
          description: "Headless commerce with Shopify — scalable, maintainable, and extensible"
        },
        {
          title: "Payment integrations",
          description:
            "Stripe, PayPal, Klarna, Apple Pay — all key payment methods are supported"
        },
        {
          title: "Mobile‑first",
          description:
            "70% of e‑commerce happens on mobile — we build mobile‑first and conversion‑ready"
        },
        {
          title: "Performance",
          description:
            "Fast load times = higher rankings + better conversion + fewer bounces"
        },
        {
          title: "Scalable structure",
          description:
            "From startups with 100 SKUs to enterprise with 100,000+ products — built for growth"
        }
      ],
      featuresTitle: "All shop features included",
      features: [
        "Product‑specific meta tags & structured data",
        "Category & filter navigation",
        "Wishlist & comparison features",
        "Inventory management integration",
        "Automated email marketing",
        "Advanced analytics & attribution",
        "A/B testing for layouts",
        "Mobile wallet integration",
        "Multi‑currency support",
        "EU VAT compliance",
        "Abandoned cart recovery",
        "Product recommendation engine"
      ],
      techTitle: "E‑commerce tech stack",
      techSubtitle: "Market‑leading tools for scalable online shops",
      techStack: [
        "Next.js 14+",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Shopify API",
        "Stripe/Payments",
        "PostgreSQL",
        "Vercel",
        "Klaviyo",
        "Segment Analytics"
      ],
      useCasesTitle: "Shop types we build",
      useCases: [
        {
          title: "Fashion & lifestyle",
          description: "Visual‑first shops with lookbooks, size guides, and seasonal CMS",
          image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Tech & electronics",
          description: "Spec‑focused with comparison tables, reviews, and deep‑dives",
          image:
            "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Food & beverage",
          description: "Premium product visuals, recipe integration, subscription models",
          image:
            "https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "B2B / bulk",
          description: "Custom pricing, bulk orders, and partner APIs",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      processTitle: "Shop development step‑by‑step",
      processSteps: [
        {
          title: "1. Shop strategy & audit",
          description:
            "We analyze your current shop (if any), competitors, and define KPIs like AOV, conversion rate, and CLV."
        },
        {
          title: "2. Shopify & CMS setup",
          description:
            "Shopify admin configuration, product structure, categories, and collections. Evergreen CMS for blog and landing pages."
        },
        {
          title: "3. Design & UX for conversion",
          description:
            "High‑quality designs with psychology focus: trust signals, social proof, urgency elements. Mobile‑first prototyping."
        },
        {
          title: "4. Development & integrations",
          description:
            "Next.js frontend with Shopify Storefront API, payment gateways, email marketing, analytics. Full‑stack commerce."
        },
        {
          title: "5. Launch & optimization",
          description:
            "Performance testing (LCP, CLS, FID), security audit, checkout optimization, A/B testing setup, GA4."
        },
        {
          title: "6. Growth phase",
          description:
            "Continuous A/B testing, heatmaps, CRO, email funnels, loyalty programs, and upsell strategies."
        }
      ],
      stats: [
        { label: "Online shops", value: "32+" },
        { label: "Avg. order growth", value: "+78%" },
        { label: "Cart abandonment reduction", value: "-35%" }
      ],
      pricingTitle: "Shop packages",
      pricingSubtitle: "Different sizes and requirements",
      pricing: [
        {
          name: "Starter Shop",
          price: "€8,999",
          desc: "For new e‑commerce",
          features: [
            "Up to 500 products",
            "Shopify + Next.js",
            "Basic integrations",
            "1 payment gateway",
            "Mobile optimized",
            "3 months support"
          ]
        },
        {
          name: "Growth Shop",
          price: "€16,999",
          desc: "For established shops",
          features: [
            "Up to 5,000 products",
            "Advanced integrations",
            "Multi‑payment options",
            "Email marketing setup",
            "A/B testing",
            "Analytics dashboard",
            "6 months support"
          ]
        },
        {
          name: "Enterprise Shop",
          price: "€29,999+",
          desc: "Large, complex shops",
          features: [
            "Unlimited products",
            "Custom features",
            "API integrations",
            "Multi‑language",
            "B2B features",
            "Subscription models",
            "1 year support"
          ]
        }
      ],
      popular: "Popular",
      request: "Request",
      faqTitle: "E‑commerce FAQ",
      faqs: [
        {
          q: "Can you migrate my existing shop?",
          a: "Yes! We migrate from other platforms to Shopify + Next.js without data or ranking loss. SEO redirects and 301s are pre‑configured."
        },
        {
          q: "How long does a shop launch take?",
          a: "Depending on scope, 8–16 weeks. Simple shops with 100–500 products take 8–10 weeks, larger ones 12–16 weeks."
        },
        {
          q: "How much does Shopify cost monthly?",
          a: "Shopify starts at €29/month (Basic). More complex shops use Growth (€99/month) or Advanced (€299+)."
        },
        {
          q: "Can you integrate payment gateways?",
          a: "Yes — Stripe, PayPal, Klarna, Apple Pay, Google Pay, and more. Most gateways go live within hours."
        },
        {
          q: "Is the shop SEO‑optimized?",
          a: "Absolutely. Technical SEO, product meta tags, structured data, sitemaps, breadcrumbs — all configured for Google Shopping and organic search."
        }
      ],
      ctaTitle: "Ready for launch?",
      ctaDesc:
        "Let’s build your online shop — focused on conversion, performance, and growth.",
      ctaFooterPrimary: "Get a shop quote",
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
                {t.ctaHeroPrimary}
              </Link>
              <Link
                href="/leistungen/seo"
                className="rounded-full border border-brand-200 px-8 py-3 font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50"
              >
                {t.ctaHeroSecondary}
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
                {t.ctaFooterPrimary}
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white/20"
              >
                {t.ctaFooterSecondary}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

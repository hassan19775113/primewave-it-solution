"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../components/Reveal";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { useLanguage } from "../../../contexts/LanguageContext";

export default function SeoPage() {
  const { language } = useLanguage();

  const content = {
    de: {
      heroBadge: "SEO & Suchmaschinenoptimierung",
      heroTitle: "Sichtbarkeit in Google – nachhaltig und profitable",
      heroDesc: "Nicht gessen, von Nutzern gefunden werden. Wir optimieren deine Website für bessere Rankings, mehr qualifizierte Besucher und echte Geschäftsergebnisse. Ohne Ad-Budgets. Nachhaltig.",
      ctaPrimary: "SEO Audit anfragen",
      ctaSecondary: "Website + SEO kombinieren",
      
      benefitsTitle: "Warum SEO der beste ROI hat",
      benefitsSubtitle: "Mehr qualifizierte Besucher, ohne ständig Ads zu zahlen",
      benefits: [
        {
          title: "Qualifizierte Besucher",
          description: "Menschen, die nach deinen Diensten suchen, finden dich – organisch und kostenlos nach dem ersten Ranking."
        },
        {
          title: "Nachhaltig & kostensparend",
          description: "Anders als Ads: Rankings verstärken sich selbst. Einmal optimiert = langfristig Sichtbarkeit, ohne monatliche Ad-Budgets."
        },
        {
          title: "Glaubwürdigkeit aufbauen",
          description: "Platz 1 in Google = Markenvertrauen. Users klicken auf top 3 – nicht auf Seite 5. SEO ist Teil deiner Brand-Strategie."
        },
        {
          title: "Conversion-fokussiert",
          description: "Wir optimieren nicht nur für Rankings, sondern für echte Anfragen und Käufe. User Intent zählt, nicht nur Klicks."
        },
        {
          title: "Messbar & transparent",
          description: "Jede Entscheidung basiert auf Daten. Wir zeigen klare KPIs: Rankings, Traffic, Konversionrate, ROI."
        },
        {
          title: "Wettbewerbsvorteil",
          description: "Deine Konkurrenten schlafen – oder nicht. Mit priorisierter SEO überholst du sie und dominierst deine Nische."
        }
      ],
      
      featuresTitle: "Unser SEO-Leistungsumfang",
      features: [
        "Keyword Research & Strategie",
        "Technical SEO Audit & Fixes",
        "On-Page Optimierung",
        "Core Web Vitals Verbesserung",
        "Schema Markup & Rich Snippets",
        "Internal Linking Strategie",
        "Content Strategy & Cluster",
        "Backlink Analyse & Aufbau",
        "Local SEO & Google Business",
        "Google Search Console Setup",
        "Competition Analysis",
        "Monthly SEO Reports & Tracking"
      ],
      
      processTitle: "Unser SEO-Prozess",
      processSteps: [
        {
          title: "SEO Audit & Analyse",
          description: "Wir analysieren deine Website, Konkurrenten und Keyword-Chancen. Klare Diagnose statt Vermutungen."
        },
        {
          title: "Strategie & Roadmap",
          description: "Priorisierte Maßnahmen, realistische Timelines. Was bringt Quick Wins? Was ist langfristig relevant?"
        },
        {
          title: "Umsetzung & Optimierung",
          description: "On-Page & Technical SEO, Content-Erstellung, interne Verlinkung, Backlink-Strategie – alles koordiniert."
        },
        {
          title: "Monitoring & Reporting",
          description: "Wöchentlich Rankings tracken, Monthly Reports. Datenbasierte Anpassungen statt Rätselraten."
        },
        {
          title: "Kontinuierliche Verbesserung",
          description: "SEO ist ein Marathon, kein Sprint. Wir optimieren fortlaufend und passen an neue Google Updates an."
        }
      ],
      
      useCasesTitle: "SEO für verschiedene Industrien",
      useCases: [
        {
          title: "Corporate Website",
          description: "Etablierte Unternehmen, die ihre Sichtbarkeit in Suchergebnissen erhöhen und hochwertige Leads generieren möchten.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "E-Commerce & Online Shops",
          description: "Online-Shops, die für produktspezifische Keywords ranken und ihren organischen Umsatz steigern möchten.",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Lokale Services",
          description: "Handwerker, Agenturen, Studios: Ranking für lokale Suchanfragen und Google Maps Sichtbarkeit.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Content & Publishing",
          description: "Blogs, News-Seiten, Magazine: Organic Traffic-Strategie für regelmäßige Leser und Engagement.",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      
      toolsTitle: "Die besten SEO-Tools & Services",
      techStack: [
        "Google Search Console",
        "Google Analytics 4",
        "Semrush / Ahrefs",
        "Screaming Frog SEO Spider",
        "Lighthouse & PageSpeed Insights",
        "Google Keyword Planner",
        "SEMrush / Moz",
        "CanIRank",
        "Yoast / RankMath",
        "Backlink Monitoring Tools"
      ],
      
      stats: [
        { label: "SEO Projekte", value: "47+" },
        { label: "Ø Ranking Verbesserung", value: "+287%" },
        { label: "Traffic Steigerung", value: "+342%" }
      ],
      
      pricingTitle: "SEO-Pakete",
      pricing: [
        {
          name: "SEO Audit",
          price: "€1.999,–",
          desc: "Einmalige Analyse",
          features: [
            "Website Analyse",
            "Keyword Research",
            "Competitor Analyse",
            "30+ Seiten Audit",
            "Actionable Report"
          ]
        },
        {
          name: "SEO Betreuung",
          price: "€3.999/Mo",
          desc: "Laufende Optimierung",
          features: [
            "Alles aus Audit +",
            "Monatliche Strategie",
            "On-Page Optimierung",
            "Backlink Aufbau",
            "Ranking Tracking",
            "Monthly Reporting"
          ],
          popular: true
        },
        {
          name: "SEO + Entwicklung",
          price: "€6.999/Mo",
          desc: "Komplettes Package",
          features: [
            "Alles aus Betreuung +",
            "Website Development",
            "Content Creation",
            "Technical Setup",
            "Full Integration",
            "Quarterly Reviews"
          ]
        }
      ],
      
      faqTitle: "SEO FAQ",
      faqs: [
        {
          q: "Wie lange dauert es, bis ich Rankings sehe?",
          a: "4-12 Wochen für erste Verbesserungen, 3-6 Monate für signifikante Bewegungen. Google braucht Zeit. Aber wenn es läuft, läuft es lange."
        },
        {
          q: "Kostet SEO monatlich?",
          a: "JA – SEO ist ein Marathon, kein Sprint. Wir empfehlen monatliche Betreuung (nicht einmalig). Ranking halten = kontinuierliche Optimierung."
        },
        {
          q: "Können wir Rankings garantieren?",
          a: "Serios? NEIN. Niemand garantiert Rankings. Google ändert Algorithmen ständig. Wir garantieren gute Arbeit, Test & Optimierung – nicht Platz 1."
        },
        {
          q: "Warum nicht einfach Google Ads?",
          a: "Weil SEO günstiger ist. Nach 6 Monaten zahlst du bei Ads noch Klicks, bei SEO läuft es organisch. Ideal: Beides zusammen am Anfang."
        },
        {
          q: "Können wir unsere Website behalten?",
          a: "Ja! Wir optimieren deine existierende Website. Kein Umzug, keine langen Migrationen – wir gehen graduell vor."
        }
      ],
      
      ctaTitle: "Sichtbar in Google werden?",
      ctaDesc: "Starten wir mit einer kostenlosen Analyse. Wir zeigen dir, wo deine Chancen liegen.",
      ctaButton: "SEO Audit starten",
      ctaBack: "Zurück zur Startseite",
      popularBadge: "Beliebt",
      requestButton: "Anfragen"
    },
    en: {
      heroBadge: "SEO & Search Engine Optimization",
      heroTitle: "Visibility in Google – Sustainable and Profitable",
      heroDesc: "Don't be forgotten, get found by users. We optimize your website for better rankings, more qualified visitors, and real business results. No ad budgets. Sustainable.",
      ctaPrimary: "Request SEO Audit",
      ctaSecondary: "Combine Website + SEO",
      
      benefitsTitle: "Why SEO Has the Best ROI",
      benefitsSubtitle: "More qualified visitors without constantly paying for ads",
      benefits: [
        {
          title: "Qualified Visitors",
          description: "People searching for your services find you – organically and free after the first ranking."
        },
        {
          title: "Sustainable & Cost-Saving",
          description: "Unlike ads: Rankings reinforce themselves. Once optimized = long-term visibility without monthly ad budgets."
        },
        {
          title: "Build Credibility",
          description: "Rank 1 in Google = brand trust. Users click on top 3 – not on page 5. SEO is part of your brand strategy."
        },
        {
          title: "Conversion-Focused",
          description: "We optimize not just for rankings, but for real inquiries and sales. User intent counts, not just clicks."
        },
        {
          title: "Measurable & Transparent",
          description: "Every decision based on data. We show clear KPIs: rankings, traffic, conversion rate, ROI."
        },
        {
          title: "Competitive Advantage",
          description: "Your competitors are sleeping – or not. With prioritized SEO you overtake them and dominate your niche."
        }
      ],
      
      featuresTitle: "Our SEO Service Scope",
      features: [
        "Keyword Research & Strategy",
        "Technical SEO Audit & Fixes",
        "On-Page Optimization",
        "Core Web Vitals Improvement",
        "Schema Markup & Rich Snippets",
        "Internal Linking Strategy",
        "Content Strategy & Cluster",
        "Backlink Analysis & Building",
        "Local SEO & Google Business",
        "Google Search Console Setup",
        "Competition Analysis",
        "Monthly SEO Reports & Tracking"
      ],
      
      processTitle: "Our SEO Process",
      processSteps: [
        {
          title: "SEO Audit & Analysis",
          description: "We analyze your website, competitors, and keyword opportunities. Clear diagnosis instead of guesswork."
        },
        {
          title: "Strategy & Roadmap",
          description: "Prioritized actions, realistic timelines. What brings quick wins? What's relevant long-term?"
        },
        {
          title: "Implementation & Optimization",
          description: "On-page & technical SEO, content creation, internal linking, backlink strategy – all coordinated."
        },
        {
          title: "Monitoring & Reporting",
          description: "Weekly ranking tracking, monthly reports. Data-based adjustments instead of guessing."
        },
        {
          title: "Continuous Improvement",
          description: "SEO is a marathon, not a sprint. We continuously optimize and adapt to new Google updates."
        }
      ],
      
      useCasesTitle: "SEO for Different Industries",
      useCases: [
        {
          title: "Corporate Website",
          description: "Established companies looking to increase their search visibility and generate high-quality leads.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "E-Commerce & Online Shops",
          description: "Online shops that want to rank for product-specific keywords and increase organic revenue.",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Local Services",
          description: "Craftsmen, agencies, studios: Ranking for local searches and Google Maps visibility.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Content & Publishing",
          description: "Blogs, news sites, magazines: Organic traffic strategy for regular readers and engagement.",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      
      toolsTitle: "The Best SEO Tools & Services",
      techStack: [
        "Google Search Console",
        "Google Analytics 4",
        "Semrush / Ahrefs",
        "Screaming Frog SEO Spider",
        "Lighthouse & PageSpeed Insights",
        "Google Keyword Planner",
        "SEMrush / Moz",
        "CanIRank",
        "Yoast / RankMath",
        "Backlink Monitoring Tools"
      ],
      
      stats: [
        { label: "SEO Projects", value: "47+" },
        { label: "Avg Ranking Improvement", value: "+287%" },
        { label: "Traffic Increase", value: "+342%" }
      ],
      
      pricingTitle: "SEO Packages",
      pricing: [
        {
          name: "SEO Audit",
          price: "€1.999,–",
          desc: "One-time analysis",
          features: [
            "Website Analysis",
            "Keyword Research",
            "Competitor Analysis",
            "30+ Page Audit",
            "Actionable Report"
          ]
        },
        {
          name: "SEO Management",
          price: "€3.999/Mo",
          desc: "Ongoing optimization",
          features: [
            "Everything from Audit +",
            "Monthly Strategy",
            "On-Page Optimization",
            "Backlink Building",
            "Ranking Tracking",
            "Monthly Reporting"
          ],
          popular: true
        },
        {
          name: "SEO + Development",
          price: "€6.999/Mo",
          desc: "Complete package",
          features: [
            "Everything from Management +",
            "Website Development",
            "Content Creation",
            "Technical Setup",
            "Full Integration",
            "Quarterly Reviews"
          ]
        }
      ],
      
      faqTitle: "SEO FAQ",
      faqs: [
        {
          q: "How long until I see rankings?",
          a: "4-12 weeks for initial improvements, 3-6 months for significant movement. Google takes time. But once it works, it works for long."
        },
        {
          q: "Does SEO cost monthly?",
          a: "YES – SEO is a marathon, not a sprint. We recommend monthly management (not one-time). Maintaining rankings = continuous optimization."
        },
        {
          q: "Can you guarantee rankings?",
          a: "Seriously? NO. Nobody guarantees rankings. Google changes algorithms constantly. We guarantee good work, testing & optimization – not rank 1."
        },
        {
          q: "Why not just use Google Ads?",
          a: "Because SEO is cheaper. After 6 months you're still paying for clicks with Ads, with SEO it runs organically. Ideal: Both together initially."
        },
        {
          q: "Can we keep our existing website?",
          a: "Yes! We optimize your existing website. No migration, no long transitions – we proceed gradually."
        }
      ],
      
      ctaTitle: "Get Visible in Google?",
      ctaDesc: "Let's start with a free analysis. We'll show you where your opportunities lie.",
      ctaButton: "Start SEO Audit",
      ctaBack: "Back to Home",
      popularBadge: "Popular",
      requestButton: "Request"
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

            <Reveal className="flex flex-wrap gap-4" delay={120}>
              <Link
                href="/kontakt"
                className="rounded-full bg-[#13294b] px-8 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#265396]"
              >
                {t.ctaPrimary}
              </Link>
              <Link
                href="/leistungen/webentwicklung/website"
                className="rounded-full border border-brand-200 px-8 py-3 font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50"
              >
                {t.ctaSecondary}
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
              {t.benefits.map((benefit, idx) => (
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
                {t.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                    <span className="font-medium text-slate-900">{feature}</span>
                  </div>
                ))}
              </div>
            </Reveal>
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

        {/* Use Cases Section */}
        <section className="border-b border-slate-200 bg-white px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16 text-center" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.useCasesTitle}
              </h2>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2">
              {t.useCases.map((useCase, idx) => (
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

        {/* Tool Stack Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16 text-center" delay={0}>
              <h2 className="text-4xl font-bold text-[#13294b] md:text-5xl">
                {t.toolsTitle}
              </h2>
            </Reveal>

            <Reveal
              className="rounded-3xl border border-slate-200 bg-white p-10 md:p-16"
              delay={120}
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {t.techStack.map((tool) => (
                  <div key={tool} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                    <span className="font-medium text-slate-900">{tool}</span>
                  </div>
                ))}
              </div>
            </Reveal>
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
            </Reveal>

            <div className="grid gap-8 md:grid-cols-3">
              {t.pricing.map((plan, idx) => (
                <Reveal
                  key={plan.name}
                  className="relative flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1"
                  delay={idx * 80}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-semibold text-white">
                      {t.popularBadge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-[#13294b]">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{plan.desc}</p>
                  <p className="mt-6 text-4xl font-bold text-slate-900">{plan.price}</p>
                  <ul className="mt-6 grow space-y-3">
                    {plan.features.map((feature: string) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="h-2 w-2 rounded-full bg-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full rounded-full bg-[#13294b] px-6 py-3 font-semibold text-white transition hover:bg-[#265396]">
                    {t.requestButton}
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
                {t.ctaButton}
              </Link>
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

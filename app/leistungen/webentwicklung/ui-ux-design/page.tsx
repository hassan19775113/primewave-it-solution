"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../../components/Reveal";
import SiteFooter from "../../../../components/SiteFooter";
import SiteHeader from "../../../../components/SiteHeader";
import { useLanguage } from "../../../../contexts/LanguageContext";

export default function UiUxPage() {
  const { language } = useLanguage();

  const content = {
    de: {
      heroBadge: "UI/UX & Experience Design",
      heroTitle: "Design, das verstanden wird und handelt",
      heroDesc: "Wir design not nur schön – wir designen intelligent. Mit User Research, Design Systems und kontinuierlichen Tests bauen wir Interfaces, die am Ergebnis gemessen werden.",
      ctaPrimary: "Design anfragen",
      ctaSecondary: "Mit Dev kombinieren",
      
      benefitsTitle: "Design mit Forschung, nicht Intuition",
      benefitsSubtitle: "Evidence-based Design für messbar bessere Ergebnisse",
      benefits: [
        {
          title: "Forschung vor Design",
          description: "Wir designen nicht aus dem Bauch – User Research, Interviews und Analytics leiten jede Design-Entscheidung"
        },
        {
          title: "Figma-native Prozesse",
          description: "Kollaboratives Design mit High-Fidelity Prototypen, Komponenten-Libraries und versioniertem Designsystem"
        },
        {
          title: "Accessibility First",
          description: "WCAG 2.1 AA Standard für alle Designs – barrierefreie Interfaces für eine breite Nutzerbasis"
        },
        {
          title: "Design Systems",
          description: "Skalierbare Komponenten, Token, Guidelines – für Konsistenz über zeitliche und räumliche Grenzen"
        },
        {
          title: "Developer Handoff",
          description: "Saubere Specs, Tokens, Assets – Entwicklung wird schneller, einfacher und fehlerfreier"
        },
        {
          title: "Continuous Testing",
          description: "A/B-Tests, Heatmaps, Usability-Sessions – Design-Entscheidungen werden mit echten Nutzer-Daten validiert"
        }
      ],
      
      featuresTitle: "Unser Design-Portfolio",
      features: [
        "User Research & Personas",
        "User Journey Mapping",
        "Wireframing & Prototyping",
        "High-Fidelity UI Design",
        "Design System Creation",
        "Component Library",
        "Design Tokens & Variables",
        "Interactive Prototypes",
        "Usability Testing",
        "Accessibility Audit (WCAG)",
        "Design-to-Dev Handoff",
        "Motion & Microinteractions"
      ],
      
      processTitle: "Unser Design-Prozess",
      processSteps: [
        {
          title: "Discovery Sprint",
          description: "1-2 Wochen: Stakeholder-Interviews, User Research, Competitive Analysis. Outcome: Insights & Design Brief"
        },
        {
          title: "Strategy & Planning",
          description: "2-3 Weeks: Information Architecture, User Journeys, Wireframes. Feedback-Workshops mit Team"
        },
        {
          title: "Design Phases",
          description: "4-8 Wochen: Low-Fi → Mid-Fi → High-Fi Designs. Multiple Iterations mit Feedback-Schleifen"
        },
        {
          title: "Implementation & Support",
          description: "Design-to-Dev Handoff, Verfügbarkeit für Dev-Fragen und Design Reviews während der Umsetzung"
        },
        {
          title: "Testing & Optimization",
          description: "A/B-Tests, Usability Testing, Heatmap-Analysen. Continuous Improvements basierend auf User-Feedback"
        }
      ],
      
      useCasesTitle: "Design, das verschiedene Formen braucht",
      useCases: [
        {
          title: "SaaS Dashboard Design",
          description: "Complex Data Visualization, Workflows und Real-time Updates für Enterprise-Nutzer",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "E-Commerce Redesign",
          description: "Mobile-First Shop-UX, Checkout-Optimierung, Produktglanz und Trust-Signals",
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Mobile App Design",
          description: "Native iOS/Android Design, Micro-interactions, Offline-Funktionen und Performance",
          image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Design System Build",
          description: "Scalable Component Library mit Tokens, Dokumentation und entwickler-freundlichen Exports",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      
      philosophyTitle: "Unsere Design-Philosophie",
      philosophyItems: [
        {
          title: "Research-Led",
          desc: "Jede Design-Entscheidung basiert auf User Research, Daten und echtem Nutzer-Feedback"
        },
        {
          title: "Accessibility",
          desc: "WCAG 2.1 AA Standard & Inclusive Design für alle – nicht nur für irgendwelche Nutzer"
        },
        {
          title: "Scale",
          desc: "Design Systems, Components und Tokens für Konsistenz – auch wenn Teams wachsen"
        },
        {
          title: "Performance",
          desc: "Designs, die schnell laden und flüssig sind – auf allen Devices und Netzwerk-Bedingungen"
        },
        {
          title: "Iterative",
          desc: "Schnelle Iteration und kontinuierliche Verbesserung – nicht perfekt beim Launch, sondern später"
        },
        {
          title: "Results-Driven",
          desc: "Wir messen Erfolg an KPIs – Konversion, Engagement, User Satisfaction – nicht nur Ästhetik"
        }
      ],
      
      stats: [
        { label: "Design Projekte", value: "54+" },
        { label: "Design Systeme", value: "18+" },
        { label: "Ø Usability Score", value: "8.2/10" }
      ],
      
      pricingTitle: "Design-Pakete",
      pricing: [
        {
          name: "UX/UI Refresh",
          price: "€3.999,–",
          desc: "Kleinere Optimierungen",
          features: [
            "Audit & Analyse",
            "Wireframes",
            "UI Improvements",
            "Prototyping",
            "Feedback Rounds"
          ]
        },
        {
          name: "Full Design",
          price: "€9.999,–",
          desc: "Komplettes Redesign",
          features: [
            "User Research",
            "Complete Redesign",
            "High-Fi Mockups",
            "Interactive Prototypes",
            "Design System",
            "Developer Handoff"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "€19.999+",
          desc: "Große, komplexe Systeme",
          features: [
            "Deep Research",
            "Multiple Sprints",
            "Custom Design System",
            "Usability Testing",
            "A/B Test Design",
            "Ongoing Support"
          ]
        }
      ],
      
      faqTitle: "Design FAQ",
      faqs: [
        {
          q: "Sind die Designs prototypeready?",
          a: "Ja! Alle Designs werden als interaktive Figma-Prototypen mit Micro-interactions erstellt. Entwickler können direkt mit den Spezifikationen arbeiten."
        },
        {
          q: "Was ist ein Design System?",
          a: "Ein Satz von wiederverwendbaren Komponenten, Tokens und Richtlinien. Das ermöglicht schnellere Entwicklung, Konsistenz und einfacheres Skalieren über Teams hinweg."
        },
        {
          q: "Wie viele Revisions-Runden?",
          a: "In der Regel 2-3 Feedback-Runden pro Design Phase. Wir sind flexibel – mehr ist möglich, aber mit Langzeitprojekten geplant."
        },
        {
          q: "Arbeitet ihr mit Agenturen zusammen?",
          a: "Ja! Wir können als Design-Partner für andere Agenturen arbeiten, White-Label-Designs liefern oder gemeinsam mit Ihrem Team designen."
        },
        {
          q: "Könnt ihr auch implementieren?",
          a: "Wir designen – die Implementierung kann unser Dev-Team übernehmen oder Sie arbeiten mit Ihrem eigenen Team zusammen. Nahtlose Zusammenarbeit."
        }
      ],
      
      ctaTitle: "Bereit für Research-Led Design?",
      ctaDesc: "Lassen Sie uns Ihre Vision mit Daten und User-Research in ein großartiges Design umwandeln.",
      ctaButton: "Design anfragen",
      ctaBack: "Zurück zur Startseite",
      popularBadge: "Beliebt"
    },
    en: {
      heroBadge: "UI/UX & Experience Design",
      heroTitle: "Design That's Understood and Acts",
      heroDesc: "We don't just design beautifully – we design intelligently. With user research, design systems, and continuous testing, we build interfaces measured by results.",
      ctaPrimary: "Request Design",
      ctaSecondary: "Combine with Dev",
      
      benefitsTitle: "Design with Research, Not Intuition",
      benefitsSubtitle: "Evidence-based design for measurably better results",
      benefits: [
        {
          title: "Research Before Design",
          description: "We don't design from gut feeling – user research, interviews, and analytics guide every design decision"
        },
        {
          title: "Figma-Native Processes",
          description: "Collaborative design with high-fidelity prototypes, component libraries, and versioned design systems"
        },
        {
          title: "Accessibility First",
          description: "WCAG 2.1 AA standard for all designs – accessible interfaces for a broad user base"
        },
        {
          title: "Design Systems",
          description: "Scalable components, tokens, guidelines – for consistency across time and space boundaries"
        },
        {
          title: "Developer Handoff",
          description: "Clean specs, tokens, assets – development becomes faster, easier, and error-free"
        },
        {
          title: "Continuous Testing",
          description: "A/B tests, heatmaps, usability sessions – design decisions validated with real user data"
        }
      ],
      
      featuresTitle: "Our Design Portfolio",
      features: [
        "User Research & Personas",
        "User Journey Mapping",
        "Wireframing & Prototyping",
        "High-Fidelity UI Design",
        "Design System Creation",
        "Component Library",
        "Design Tokens & Variables",
        "Interactive Prototypes",
        "Usability Testing",
        "Accessibility Audit (WCAG)",
        "Design-to-Dev Handoff",
        "Motion & Microinteractions"
      ],
      
      processTitle: "Our Design Process",
      processSteps: [
        {
          title: "Discovery Sprint",
          description: "1-2 weeks: Stakeholder interviews, user research, competitive analysis. Outcome: Insights & design brief"
        },
        {
          title: "Strategy & Planning",
          description: "2-3 weeks: Information architecture, user journeys, wireframes. Feedback workshops with team"
        },
        {
          title: "Design Phases",
          description: "4-8 weeks: Low-Fi → Mid-Fi → High-Fi designs. Multiple iterations with feedback loops"
        },
        {
          title: "Implementation & Support",
          description: "Design-to-dev handoff, availability for dev questions and design reviews during implementation"
        },
        {
          title: "Testing & Optimization",
          description: "A/B tests, usability testing, heatmap analysis. Continuous improvements based on user feedback"
        }
      ],
      
      useCasesTitle: "Design That Takes Different Forms",
      useCases: [
        {
          title: "SaaS Dashboard Design",
          description: "Complex data visualization, workflows, and real-time updates for enterprise users",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "E-Commerce Redesign",
          description: "Mobile-first shop UX, checkout optimization, product brilliance, and trust signals",
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Mobile App Design",
          description: "Native iOS/Android design, micro-interactions, offline functionality, and performance",
          image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Design System Build",
          description: "Scalable component library with tokens, documentation, and developer-friendly exports",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      
      philosophyTitle: "Our Design Philosophy",
      philosophyItems: [
        {
          title: "Research-Led",
          desc: "Every design decision based on user research, data, and real user feedback"
        },
        {
          title: "Accessibility",
          desc: "WCAG 2.1 AA standard & inclusive design for everyone – not just some users"
        },
        {
          title: "Scale",
          desc: "Design systems, components, and tokens for consistency – even as teams grow"
        },
        {
          title: "Performance",
          desc: "Designs that load fast and run smooth – on all devices and network conditions"
        },
        {
          title: "Iterative",
          desc: "Fast iteration and continuous improvement – not perfect at launch, but later"
        },
        {
          title: "Results-Driven",
          desc: "We measure success by KPIs – conversion, engagement, user satisfaction – not just aesthetics"
        }
      ],
      
      stats: [
        { label: "Design Projects", value: "54+" },
        { label: "Design Systems", value: "18+" },
        { label: "Avg Usability Score", value: "8.2/10" }
      ],
      
      pricingTitle: "Design Packages",
      pricing: [
        {
          name: "UX/UI Refresh",
          price: "€3.999,–",
          desc: "Minor optimizations",
          features: [
            "Audit & Analysis",
            "Wireframes",
            "UI Improvements",
            "Prototyping",
            "Feedback Rounds"
          ]
        },
        {
          name: "Full Design",
          price: "€9.999,–",
          desc: "Complete redesign",
          features: [
            "User Research",
            "Complete Redesign",
            "High-Fi Mockups",
            "Interactive Prototypes",
            "Design System",
            "Developer Handoff"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "€19.999+",
          desc: "Large, complex systems",
          features: [
            "Deep Research",
            "Multiple Sprints",
            "Custom Design System",
            "Usability Testing",
            "A/B Test Design",
            "Ongoing Support"
          ]
        }
      ],
      
      faqTitle: "Design FAQ",
      faqs: [
        {
          q: "Are the designs prototype-ready?",
          a: "Yes! All designs are created as interactive Figma prototypes with micro-interactions. Developers can work directly with the specifications."
        },
        {
          q: "What is a design system?",
          a: "A set of reusable components, tokens, and guidelines. This enables faster development, consistency, and easier scaling across teams."
        },
        {
          q: "How many revision rounds?",
          a: "Typically 2-3 feedback rounds per design phase. We're flexible – more is possible, but planned with long-term projects."
        },
        {
          q: "Do you work with agencies?",
          a: "Yes! We can work as design partners for other agencies, deliver white-label designs, or design together with your team."
        },
        {
          q: "Can you also implement?",
          a: "We design – implementation can be handled by our dev team or you can work with your own team. Seamless collaboration."
        }
      ],
      
      ctaTitle: "Ready for Research-Led Design?",
      ctaDesc: "Let us transform your vision with data and user research into a great design.",
      ctaButton: "Request Design",
      ctaBack: "Back to Home",
      popularBadge: "Popular"
    }
  };

  const t = content[language];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50 px-3 py-1.5 text-xs sm:px-4 sm:py-2 uppercase tracking-[0.35em] text-brand-700">
              {t.heroBadge}
            </Reveal>
            <Reveal className="mb-6 space-y-6" delay={60}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#13294b] to-[#265396] bg-clip-text text-transparent">
                  {t.heroTitle}
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                {t.heroDesc}
              </p>
            </Reveal>

            <Reveal className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4" delay={120}>
              <Link
                href="/kontakt"
                className="w-full sm:w-auto rounded-full bg-[#13294b] px-8 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#265396] text-center"
              >
                {t.ctaPrimary}
              </Link>
              <Link
                href="/leistungen/webentwicklung/website"
                className="w-full sm:w-auto rounded-full border border-brand-200 px-8 py-3 font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 text-center"
              >
                {t.ctaSecondary}
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.benefitsTitle}
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                {t.benefitsSubtitle}
              </p>
            </Reveal>

            <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {t.benefits.map((benefit, idx) => (
                <Reveal
                  key={benefit.title}
                  className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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
        <section className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.featuresTitle}
              </h2>
            </Reveal>

            <Reveal
              className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-10 md:p-16"
              delay={120}
            >
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        <section className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.processTitle}
              </h2>
            </Reveal>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {t.processSteps.map((step, idx) => (
                <Reveal
                  key={step.title}
                  className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8"
                  delay={idx * 80}
                >
                  <h3 className="mb-2 text-xl sm:text-2xl font-bold text-[#13294b]">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.useCasesTitle}
              </h2>
            </Reveal>

            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
              {t.useCases.map((useCase, idx) => (
                <Reveal
                  key={useCase.title}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{useCase.title}</h3>
                    <p className="mt-2 text-slate-200">{useCase.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Design Philosophy Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.philosophyTitle}
              </h2>
            </Reveal>

            <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
              {t.philosophyItems.map((item, idx) => (
                <Reveal
                  key={item.title}
                  className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
                  delay={idx * 60}
                >
                  <h3 className="text-xl font-bold text-[#13294b]">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-slate-200 bg-gradient-to-r from-[#13294b] to-[#265396] px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-3">
              {t.stats.map((stat) => (
                <Reveal key={stat.label} className="text-center" delay={0}>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
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
        <section className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.pricingTitle}
              </h2>
            </Reveal>

            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
              {t.pricing.map((plan, idx) => (
                <Reveal
                  key={plan.name}
                  className="relative flex flex-col rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 transition hover:-translate-y-1"
                  delay={idx * 80}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs sm:px-4 font-semibold text-white">
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
                    Anfragen
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.faqTitle}
              </h2>
            </Reveal>

            <div className="grid gap-4 sm:gap-6 md:max-w-3xl md:mx-auto">
              {t.faqs.map((faq, idx) => (
                <Reveal
                  key={faq.q}
                  className="overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
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
        <section className="border-t border-slate-200 bg-gradient-to-r from-[#13294b] to-[#265396] px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal className="mb-6 sm:mb-8 space-y-3 sm:space-y-4" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {t.ctaTitle}
              </h2>
              <p className="text-lg text-white/90">
                {t.ctaDesc}
              </p>
            </Reveal>

            <Reveal className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4" delay={120}>
              <Link
                href="/kontakt"
                className="w-full sm:w-auto rounded-full bg-white px-8 py-3 sm:py-4 font-semibold text-[#13294b] transition hover:-translate-y-0.5 text-center"
              >
                {t.ctaButton}
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto rounded-full border border-white px-8 py-3 sm:py-4 font-semibold text-white transition hover:bg-white/20 text-center"
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

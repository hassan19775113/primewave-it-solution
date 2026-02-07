"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../../components/Reveal";
import SiteFooter from "../../../../components/SiteFooter";
import SiteHeader from "../../../../components/SiteHeader";
import { useLanguage } from "../../../../contexts/LanguageContext";

export default function PythonWebAppsPage() {
  const { language } = useLanguage();

  const content = {
    de: {
      heroBadge: "Python Web Applications",
      heroTitle: "Python Backend für moderne Web-Erlebnisse",
      heroDesc: "Kraftvolle, skalierbare Backend-Systeme mit Python. Von Startups bis Enterprise – wir bauen Web-Anwendungen, die wachsen, wenn euer Business wächst.",
      ctaPrimary: "Python-Projekt starten",
      ctaSecondary: "Tech Stack ansehen",
      
      benefits: [
        {
          title: "Rapid Development",
          description: "Schnelle Prototypen und MVPs mit Python-Frameworks wie Django und FastAPI"
        },
        {
          title: "Data-driven Applications",
          description: "Perfekt für datenintensive Anwendungen, Machine Learning und Business Intelligence"
        },
        {
          title: "Skalierbarkeit",
          description: "Hochperformante Backends mit FastAPI, MongoDB und Cloud-Infrastruktur"
        },
        {
          title: "API-First Architecture",
          description: "RESTful und GraphQL APIs für moderne Frontend-Technologien wie React, Next.js"
        },
        {
          title: "Community & Libraries",
          description: "Riesige Ökosystem mit bewährten Libraries für fast jeden Use-Case"
        },
        {
          title: "Integration & Automation",
          description: "Nahtlose Integrationen mit Third-Party Services, CRM, ERP und Datenquellen"
        }
      ],
      benefitsTitle: "Warum Python für Web-Apps?",
      
      techStackTitle: "Unser Tech Stack",
      techStackDesc: "Enterprise-ready Technologien für professionelle Web-Entwicklung",
      techStack: [
        "Django",
        "FastAPI",
        "Flask",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Celery",
        "Docker",
        "Kubernetes",
        "AWS/GCP",
        "GraphQL",
        "REST APIs"
      ],
      
      useCasesTitle: "Was wir mit Python bauen",
      useCases: [
        {
          title: "Data Analytics Dashboard",
          description: "Interaktive Dashboards zur Visualisierung von Geschäftsdaten in Echtzeit",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "SaaS Anwendung",
          description: "Skalierbare Multi-Tenant SaaS-Plattformen mit Python Backend und moderner UI",
          image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Machine Learning Integration",
          description: "Predictive Analytics und AI-Features in Web-Anwendungen integrieren",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Real-Time Collaboration Tool",
          description: "Live-Datenaktualisierungen und Echtzeit-Kommunikation mit WebSockets",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      
      processTitle: "Unser Python-Entwicklungsprozess",
      processSteps: [
        {
          title: "1. Requirements & Architecture",
          description: "Wir analysieren eure Anforderungen und designen eine skalierbare Architektur mit Python, Datenbanken und APIs."
        },
        {
          title: "2. Agile Backend-Entwicklung",
          description: "Iterative Entwicklung mit Django/FastAPI, Unit Tests und kontinuierliche Integration. Sprints mit regelmäßigen Deployments."
        },
        {
          title: "3. Frontend-Integration",
          description: "RESTful oder GraphQL APIs für eure React/Next.js Frontend. Nahtlose Zusammenarbeit zwischen Backend und Frontend."
        },
        {
          title: "4. Testing & Deployment",
          description: "Vollständige Test-Coverage, Performance-Optimierung und sichere Deployments auf AWS, GCP oder eurer Infrastruktur."
        }
      ],
      
      stats: [
        { label: "Python-Projekte", value: "45+" },
        { label: "Ø API Response Time", value: "<100ms" },
        { label: "Uptime", value: "99.8%" }
      ],
      
      seoTitle: "Python für Best-In-Class SEO",
      seoItems: [
        { title: "SSR & SSG", desc: "Server-Side Rendering für bessere SEO und Performance" },
        { title: "Structured Data", desc: "JSON-LD und Schema.org Markup für Rich Snippets" },
        { title: "Performance", desc: "Caching-Strategien und CDN-Integration für schnelle Ladezeiten" },
        { title: "Monitoring", desc: "Analytics und Performance-Tracking auf Produktionsseite" }
      ],
      
      ctaTitle: "Bereit für euer Python-Projekt?",
      ctaDesc: "Lassen Sie uns gemeinsam eine skalierbare Web-Anwendung bauen, die den Anforderungen eures Business standhält.",
      ctaButton: "Kostenfreies Erstgespräch",
      ctaBack: "Zurück zur Startseite"
    },
    en: {
      heroBadge: "Python Web Applications",
      heroTitle: "Python Backend for Modern Web Experiences",
      heroDesc: "Powerful, scalable backend systems with Python. From startups to enterprise – we build web applications that grow as your business grows.",
      ctaPrimary: "Start Python Project",
      ctaSecondary: "View Tech Stack",
      
      benefits: [
        {
          title: "Rapid Development",
          description: "Fast prototypes and MVPs with Python frameworks like Django and FastAPI"
        },
        {
          title: "Data-driven Applications",
          description: "Perfect for data-intensive applications, machine learning, and business intelligence"
        },
        {
          title: "Scalability",
          description: "High-performance backends with FastAPI, MongoDB, and cloud infrastructure"
        },
        {
          title: "API-First Architecture",
          description: "RESTful and GraphQL APIs for modern frontend technologies like React, Next.js"
        },
        {
          title: "Community & Libraries",
          description: "Huge ecosystem with proven libraries for almost every use case"
        },
        {
          title: "Integration & Automation",
          description: "Seamless integrations with third-party services, CRM, ERP, and data sources"
        }
      ],
      benefitsTitle: "Why Python for Web Apps?",
      
      techStackTitle: "Our Tech Stack",
      techStackDesc: "Enterprise-ready technologies for professional web development",
      techStack: [
        "Django",
        "FastAPI",
        "Flask",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Celery",
        "Docker",
        "Kubernetes",
        "AWS/GCP",
        "GraphQL",
        "REST APIs"
      ],
      
      useCasesTitle: "What We Build with Python",
      useCases: [
        {
          title: "Data Analytics Dashboard",
          description: "Interactive dashboards for visualizing business data in real-time",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "SaaS Application",
          description: "Scalable multi-tenant SaaS platforms with Python backend and modern UI",
          image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Machine Learning Integration",
          description: "Integrate predictive analytics and AI features into web applications",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Real-Time Collaboration Tool",
          description: "Live data updates and real-time communication with WebSockets",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      
      processTitle: "Our Python Development Process",
      processSteps: [
        {
          title: "1. Requirements & Architecture",
          description: "We analyze your requirements and design a scalable architecture with Python, databases, and APIs."
        },
        {
          title: "2. Agile Backend Development",
          description: "Iterative development with Django/FastAPI, unit tests, and continuous integration. Sprints with regular deployments."
        },
        {
          title: "3. Frontend Integration",
          description: "RESTful or GraphQL APIs for your React/Next.js frontend. Seamless collaboration between backend and frontend."
        },
        {
          title: "4. Testing & Deployment",
          description: "Complete test coverage, performance optimization, and secure deployments on AWS, GCP, or your infrastructure."
        }
      ],
      
      stats: [
        { label: "Python Projects", value: "45+" },
        { label: "Avg API Response Time", value: "<100ms" },
        { label: "Uptime", value: "99.8%" }
      ],
      
      seoTitle: "Python for Best-in-Class SEO",
      seoItems: [
        { title: "SSR & SSG", desc: "Server-side rendering for better SEO and performance" },
        { title: "Structured Data", desc: "JSON-LD and Schema.org markup for rich snippets" },
        { title: "Performance", desc: "Caching strategies and CDN integration for fast loading times" },
        { title: "Monitoring", desc: "Analytics and performance tracking in production" }
      ],
      
      ctaTitle: "Ready for Your Python Project?",
      ctaDesc: "Let's build a scalable web application together that meets the demands of your business.",
      ctaButton: "Free Consultation",
      ctaBack: "Back to Home"
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
              <a
                href="/kontakt"
                className="w-full sm:w-auto rounded-full bg-[#13294b] px-8 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#265396] text-center"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#leistungen"
                className="w-full sm:w-auto rounded-full border border-brand-200 px-8 py-3 font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 text-center"
              >
                {t.ctaSecondary}
              </a>
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

        {/* Tech Stack Section */}
        <section id="leistungen" className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.techStackTitle}
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                {t.techStackDesc}
              </p>
            </Reveal>

            <Reveal
              className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-10 md:p-16"
              delay={120}
            >
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {t.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-3 rounded-lg sm:rounded-xl bg-white p-3 sm:p-4 shadow-sm"
                  >
                    <div className="h-3 w-3 rounded-full bg-brand-500" />
                    <span className="font-medium text-slate-900">{tech}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
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

        {/* Process Section */}
        <section className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
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
                  className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 md:p-8"
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

        {/* SEO Section */}
        <section className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-10 sm:mb-12 text-center" delay={0}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#13294b]">
                {t.seoTitle}
              </h2>
            </Reveal>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              {t.seoItems.map((item) => (
                <Reveal
                  key={item.title}
                  className="rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
                  delay={0}
                >
                  <h3 className="font-semibold text-[#13294b]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal className="mb-6 sm:mb-8 space-y-3 sm:space-y-4" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.ctaTitle}
              </h2>
              <p className="text-lg text-slate-600">
                {t.ctaDesc}
              </p>
            </Reveal>

            <Reveal className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4" delay={120}>
              <a
                href="/kontakt"
                className="w-full sm:w-auto rounded-full bg-[#13294b] px-8 py-3 sm:py-4 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#265396] text-center"
              >
                {t.ctaButton}
              </a>
              <Link
                href="/"
                className="w-full sm:w-auto rounded-full border border-brand-200 px-8 py-3 sm:py-4 font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 text-center"
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

"use client";

import Link from "next/link";
import Reveal from "../../components/Reveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { useLanguage } from "../../contexts/LanguageContext";

export default function TechnologienPage() {
  const { language } = useLanguage();

  const content = {
    de: {
      heroBadge: "Technologien & Tools",
      heroTitle: "Modernste Technologien für Ihr digitales Projekt",
      heroDesc:
        "Wir arbeiten mit den besten Tools und Frameworks der Branche. Von React und Next.js über Python bis zu Shopify – unsere Tech-Stack ist auf Performance, Skalierbarkeit und Developer Experience optimiert.",
      servicesTitle: "Unsere Services",
      servicesSubtitle: "Maßgeschneiderte Lösungen mit modernen Technologien",
      ctaTitle: "Bereit für moderne Technologie?",
      ctaDesc:
        "Lassen Sie uns gemeinsam Ihr Projekt mit den besten Tools und Frameworks umsetzen.",
      ctaPrimary: "Projekt besprechen",
      ctaSecondary: "Zurück zur Startseite",
      services: [
        {
          title: "Webdesign & Landing Pages",
          description: "Moderne, schnelle Websites mit Next.js und React",
          link: "/leistungen/webentwicklung/website",
          techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
        },
        {
          title: "E-Commerce & Onlineshops",
          description: "Shopify-basierte Shops mit Headless Frontend",
          link: "/leistungen/webentwicklung/onlineshop",
          techs: ["Shopify", "Next.js", "Stripe", "PostgreSQL"]
        },
        {
          title: "Web Applications",
          description: "Backend-Systeme mit Python",
          link: "/leistungen/webentwicklung/python-web-apps",
          techs: ["Python", "Django", "FastAPI", "PostgreSQL", "MongoDB"]
        },
        {
          title: "UI/UX Design",
          description: "User Research, Prototyping, Design Systems",
          link: "/leistungen/webentwicklung/ui-ux-design",
          techs: ["Figma", "Adobe XD", "Design Systems"]
        },
        {
          title: "SEO & Performance",
          description: "Technisches SEO, Content-Strategie, Analytics",
          link: "/leistungen/seo",
          techs: ["Google Analytics", "Semrush", "Search Console"]
        }
      ],
      categories: [
        {
          category: "Frontend Frameworks",
          items: [
            { name: "Next.js", description: "React Framework für Production", key: "nextjs" },
            { name: "React", description: "UI Library für moderne Web-Apps", key: "react" },
            { name: "TypeScript", description: "Typsicheres JavaScript", key: "typescript" },
            { name: "Tailwind CSS", description: "Utility-First CSS Framework", key: "tailwind" }
          ]
        },
        {
          category: "Backend & Datenbanken",
          items: [
            { name: "Python", description: "Django, FastAPI, Flask", key: "python" },
            { name: "Node.js", description: "JavaScript Runtime", key: "node" },
            { name: "PostgreSQL", description: "Relationale Datenbank", key: "postgres" },
            { name: "MongoDB", description: "NoSQL Datenbank", key: "mongo" }
          ]
        },
        {
          category: "E-Commerce",
          items: [
            { name: "Shopify", description: "E-Commerce Platform", key: "shopify" },
            { name: "Stripe", description: "Payment Processing", key: "stripe" }
          ]
        },
        {
          category: "Design & Prototyping",
          items: [
            { name: "Figma", description: "UI/UX Design Tool", key: "figma" },
            { name: "Adobe XD", description: "Design & Prototyping", key: "xd" }
          ]
        },
        {
          category: "DevOps & Hosting",
          items: [
            { name: "Vercel", description: "Deployment Platform", key: "vercel" },
            { name: "Docker", description: "Containerization", key: "docker" },
            { name: "AWS", description: "Cloud Infrastructure", key: "aws" },
            { name: "Git", description: "Version Control", key: "git" }
          ]
        },
        {
          category: "SEO & Analytics",
          items: [
            { name: "Google Analytics", description: "Web Analytics", key: "ga" },
            { name: "Semrush", description: "SEO Tools", key: "semrush" },
            { name: "Google Search Console", description: "Search Performance", key: "gsc" }
          ]
        }
      ]
    },
    en: {
      heroBadge: "Technologies & Tools",
      heroTitle: "Modern technologies for your digital project",
      heroDesc:
        "We work with the best tools and frameworks in the industry. From React and Next.js to Python and Shopify — our tech stack is optimized for performance, scalability, and developer experience.",
      servicesTitle: "Our Services",
      servicesSubtitle: "Tailored solutions with modern technologies",
      ctaTitle: "Ready for modern technology?",
      ctaDesc:
        "Let’s build your project together with the best tools and frameworks.",
      ctaPrimary: "Discuss project",
      ctaSecondary: "Back to home",
      services: [
        {
          title: "Web Design & Landing Pages",
          description: "Modern, fast websites with Next.js and React",
          link: "/leistungen/webentwicklung/website",
          techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
        },
        {
          title: "E-Commerce & Online Shops",
          description: "Shopify-based shops with headless frontend",
          link: "/leistungen/webentwicklung/onlineshop",
          techs: ["Shopify", "Next.js", "Stripe", "PostgreSQL"]
        },
        {
          title: "Web Applications",
          description: "Backend systems with Python",
          link: "/leistungen/webentwicklung/python-web-apps",
          techs: ["Python", "Django", "FastAPI", "PostgreSQL", "MongoDB"]
        },
        {
          title: "UI/UX Design",
          description: "User research, prototyping, design systems",
          link: "/leistungen/webentwicklung/ui-ux-design",
          techs: ["Figma", "Adobe XD", "Design Systems"]
        },
        {
          title: "SEO & Performance",
          description: "Technical SEO, content strategy, analytics",
          link: "/leistungen/seo",
          techs: ["Google Analytics", "Semrush", "Search Console"]
        }
      ],
      categories: [
        {
          category: "Frontend Frameworks",
          items: [
            { name: "Next.js", description: "React framework for production", key: "nextjs" },
            { name: "React", description: "UI library for modern web apps", key: "react" },
            { name: "TypeScript", description: "Type-safe JavaScript", key: "typescript" },
            { name: "Tailwind CSS", description: "Utility-first CSS framework", key: "tailwind" }
          ]
        },
        {
          category: "Backend & Databases",
          items: [
            { name: "Python", description: "Django, FastAPI, Flask", key: "python" },
            { name: "Node.js", description: "JavaScript runtime", key: "node" },
            { name: "PostgreSQL", description: "Relational database", key: "postgres" },
            { name: "MongoDB", description: "NoSQL database", key: "mongo" }
          ]
        },
        {
          category: "E-Commerce",
          items: [
            { name: "Shopify", description: "E-commerce platform", key: "shopify" },
            { name: "Stripe", description: "Payment processing", key: "stripe" }
          ]
        },
        {
          category: "Design & Prototyping",
          items: [
            { name: "Figma", description: "UI/UX design tool", key: "figma" },
            { name: "Adobe XD", description: "Design & prototyping", key: "xd" }
          ]
        },
        {
          category: "DevOps & Hosting",
          items: [
            { name: "Vercel", description: "Deployment platform", key: "vercel" },
            { name: "Docker", description: "Containerization", key: "docker" },
            { name: "AWS", description: "Cloud infrastructure", key: "aws" },
            { name: "Git", description: "Version control", key: "git" }
          ]
        },
        {
          category: "SEO & Analytics",
          items: [
            { name: "Google Analytics", description: "Web analytics", key: "ga" },
            { name: "Semrush", description: "SEO tools", key: "semrush" },
            { name: "Google Search Console", description: "Search performance", key: "gsc" }
          ]
        }
      ]
    }
  } as const;

  const t = content[language];

  const technologies = t.categories.map((category) => ({
    category: category.category,
    items: category.items.map((item) => ({
      name: item.name,
      description: item.description,
      icon: iconMap[item.key]
    }))
  }));

  const services = t.services;

  const hero = t;

  const cta = t;

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#13294b] to-[#265396] px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white backdrop-blur">
              {hero.heroBadge}
            </Reveal>
            <Reveal className="mb-4 sm:mb-6 space-y-4 sm:space-y-6" delay={60}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                {hero.heroTitle}
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-white/90">
                {hero.heroDesc}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services Overview */}
        <section className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-8 sm:mb-12 md:mb-16 text-center" delay={0}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#13294b]">
                {t.servicesTitle}
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600">
                {t.servicesSubtitle}
              </p>
            </Reveal>

            <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, idx) => (
                <Reveal
                  key={service.title}
                  className="group rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6 transition hover:-translate-y-1 hover:shadow-lg"
                  delay={idx * 60}
                >
                  <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-[#13294b]">
                    {service.title}
                  </h3>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base text-slate-600">{service.description}</p>
                  <div className="mb-3 sm:mb-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {service.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-brand-100 px-2 sm:px-3 py-0.5 sm:py-1 text-[0.65rem] sm:text-xs font-medium text-brand-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                  >
                    {language === "de" ? "Mehr erfahren" : "Learn more"}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        {technologies.map((category, catIdx) => (
          <section
            key={category.category}
            className={`border-b border-slate-200 px-4 sm:px-6 py-12 sm:py-16 md:py-20 ${
              catIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white'
            }`}
          >
            <div className="mx-auto max-w-6xl">
              <Reveal className="mb-6 sm:mb-8 md:mb-12" delay={0}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#13294b]">
                  {category.category}
                </h2>
              </Reveal>

              <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4">
                {category.items.map((tech, idx) => (
                  <Reveal
                    key={tech.name}
                    className="group rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 md:p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
                    delay={idx * 60}
                  >
                    <div className="mb-2 sm:mb-3 md:mb-4 flex justify-center">{tech.icon}</div>
                    <h3 className="mb-1 sm:mb-2 text-base sm:text-lg md:text-xl font-bold text-[#13294b]">
                      {tech.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">{tech.description}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="border-t border-slate-200 bg-gradient-to-r from-[#13294b] to-[#265396] px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal className="mb-6 sm:mb-8 space-y-3 sm:space-y-4" delay={0}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {cta.ctaTitle}
              </h2>
              <p className="text-base sm:text-lg text-white/90">
                {cta.ctaDesc}
              </p>
            </Reveal>

            <Reveal className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4" delay={120}>
              <Link
                href="/kontakt"
                className="w-full sm:w-auto rounded-full bg-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-[#13294b] transition hover:-translate-y-0.5"
              >
                {cta.ctaPrimary}
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto rounded-full border border-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition hover:bg-white/20"
              >
                {cta.ctaSecondary}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

const iconMap: Record<string, JSX.Element> = {
  nextjs: (
    <svg className="h-12 w-12" viewBox="0 0 180 180" fill="none">
      <mask id="mask0_408_134" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0_408_134)">
        <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  react: (
    <svg className="h-12 w-12" viewBox="0 0 256 228" fill="#61DAFB">
      <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"/>
    </svg>
  ),
  typescript: (
    <svg className="h-12 w-12" viewBox="0 0 256 256" fill="none">
      <rect width="256" height="256" rx="28" fill="#3178C6" />
      <path d="M56.612 128.85h33.903v94.65H128.4v-94.65h33.903v-33.275H56.612v33.275zm156.115-33.275h-63.903v33.275h30.451v61.375c0 16.947 13.737 30.684 30.684 30.684h2.768c16.947 0 30.684-13.737 30.684-30.684v-61.375h-30.684v61.375h-2.768v-61.375z" fill="white" />
    </svg>
  ),
  tailwind: (
    <svg className="h-12 w-12" viewBox="0 0 256 154" fill="none">
      <defs>
        <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient">
          <stop stopColor="#2298BD" offset="0%" />
          <stop stopColor="#0ED7B5" offset="100%" />
        </linearGradient>
      </defs>
      <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)" />
    </svg>
  ),
  python: (
    <svg className="h-12 w-12" viewBox="0 0 256 255" fill="none">
      <defs>
        <linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="pythonOriginal0">
          <stop stopColor="#387EB8" offset="0%" />
          <stop stopColor="#366994" offset="100%" />
        </linearGradient>
        <linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="pythonOriginal1">
          <stop stopColor="#FFE052" offset="0%" />
          <stop stopColor="#FFC331" offset="100%" />
        </linearGradient>
      </defs>
      <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072ZM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13Z" fill="url(#pythonOriginal0)" />
      <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897Zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13Z" fill="url(#pythonOriginal1)" />
    </svg>
  ),
  node: (
    <svg className="h-12 w-12" viewBox="0 0 256 289" fill="none">
      <path d="M128 288.464c-3.975 0-7.685-1.06-11.131-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.590 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346c0-7.95 4.24-15.37 11.13-19.61L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 63.735c6.89 4.24 11.13 11.66 11.13 19.61v122.17c0 7.95-4.24 15.37-11.13 19.345l-105.74 61.217c-3.18 1.59-6.89 2.385-10.865 2.385zm31.272-96.614c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.337 0-21.467 18.02-34.186 48.232-34.186 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.062-19.345 36.306-53.002 36.306z" fill="#539E43" />
    </svg>
  ),
  postgres: (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#336791] text-2xl font-bold text-white">PG</div>
  ),
  mongo: (
    <svg className="h-12 w-12" viewBox="0 0 256 549" fill="none">
      <path d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l-.428-.64c-1.917 1.5-2.987 2.133-2.987 2.133l-.854-.853 2.56-48.593 2.987 1.707s-9.373 40.062-9.373 50.076c0 1.5 2.56 5.545 4.261 7.78l7.834 26.234 1.917-8.096 6.84-15.991-.64-.214-2.346 1.5 3.84-3.84-1.7-1.28z" fill="#10AA50" />
      <path d="M128.536 520.846s20.452-17.701 24.713-20.688c4.261-2.987 7.247-5.974 9.164-8.744-.853-1.28-1.279-2.773-1.279-3.84 0-5.546 2.347-7.247 5.973-10.88 2.774-2.346 8.32-7.672 6.188-15.991l-2.773-6.188c-1.493-10.88-7.034-27.094-44.363-84.965-1.92-3.413-4.261-7.247-6.614-11.094l-.427-.64C115.966 351.607 105.1 331.58 93.793 311.128l-.64-1.067c-5.759-9.802-11.732-19.818-17.065-28.802-1.704-2.56-3.195-4.9-4.686-7.033-.854-1.28-1.28-1.92-1.493-2.347 0 0-15.351-22.723-17.905-74.186 0-10.667 17.905-24.713 21.532-26.63l1.066 53.283 1.28-.853-2.346-52.003c.64 0 .853.213 1.28.213 21.318 4.9 47.765 29.613 47.765 29.613s.426.427.64.64c26.447 27.52 49.169 63.134 66.86 102.557.853 1.494 1.493 2.774 2.347 4.474 9.586 21.106 16.619 44.33 20.026 67.34v.64c4.474 22.938 4.474 44.577 2.347 62.704v1.28c-3.194 27.308-11.092 44.577-13.438 47.564l-2.773 2.986z" fill="#B8C4C2" />
      <path d="M128.536 520.846s20.452-17.701 24.713-20.688c4.261-2.987 7.247-5.974 9.164-8.744-.853-1.28-1.279-2.773-1.279-3.84 0-5.546 2.347-7.247 5.973-10.88 2.774-2.346 8.32-7.672 6.188-15.991l-2.773-6.188c-1.493-10.88-7.034-27.094-44.363-84.965-1.92-3.413-4.261-7.247-6.614-11.094l-.427-.64C115.966 351.607 105.1 331.58 93.793 311.128l-.64-1.067c-5.759-9.802-11.732-19.818-17.065-28.802-1.704-2.56-3.195-4.9-4.686-7.033-.854-1.28-1.28-1.92-1.493-2.347 0 0-15.351-22.723-17.905-74.186 0-10.667 17.905-24.713 21.532-26.63l1.066 53.283 1.28-.853-2.346-52.003c.64 0 .853.213 1.28.213 21.318 4.9 47.765 29.613 47.765 29.613s.426.427.64.64c26.447 27.52 49.169 63.134 66.86 102.557.853 1.494 1.493 2.774 2.347 4.474 9.586 21.106 16.619 44.33 20.026 67.34v.64c4.474 22.938 4.474 44.577 2.347 62.704v1.28c-3.194 27.308-11.092 44.577-13.438 47.564l-2.773 2.986z" fill="url(#paint0_linear)" />
      <path d="M91.02 112.452c-30.68 52.217-21.532 93.923-18.972 104.59 1.28 6.188 2.987 10.88 2.987 10.88.213.427.427.854.64 1.28a950.98 950.98 0 0 1 4.474 6.827c5.12 8.957 11.306 19.186 17.065 28.802.426.64.426.853.64 1.066 11.307 20.453 22.173 40.48 25.373 46.665l.427.64c2.346 3.84 4.686 7.674 6.613 11.094 37.33 57.87 42.87 74.085 44.364 84.965l2.773 6.188c2.133 8.32-3.2 13.646-6.187 15.991-3.627 3.627-5.76 5.12-5.76 10.88 0 1.28.213 2.774 1.066 3.84 7.461-5.972 22.724-17.917 27.734-22.937 8.106-7.887 15.564-22.298 18.124-34.883 7.46-37.543-.854-76.97-13.011-113.921-15.351-47.091-42.23-86.945-64.31-115.533-5.76-7.674-27.948-37.33-27.948-37.33-2.987 5.333-5.76 10.88-8.533 16.632-.64 1.493-1.28 3.2-1.92 4.9-.64 1.28-1.067 2.773-1.28 3.84-.426 1.92-.64 3.84-.426 5.973 0 3.2 1.066 6.614 3.413 9.387z" fill="#12924F" />
      <defs>
        <linearGradient id="paint0_linear" x1="70.786" y1="226.107" x2="185.456" y2="141.936" gradientUnits="userSpaceOnUse">
          <stop offset=".231" stopColor="#999875" />
          <stop offset=".563" stopColor="#9B9977" />
          <stop offset=".683" stopColor="#A09F7E" />
          <stop offset=".768" stopColor="#A9A889" />
          <stop offset=".837" stopColor="#B7B69A" />
          <stop offset=".896" stopColor="#C9C7B0" />
          <stop offset=".948" stopColor="#DFDDC9" />
          <stop offset=".994" stopColor="#F8F6E8" />
        </linearGradient>
      </defs>
    </svg>
  ),
  shopify: (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#96BF48] text-2xl font-bold text-white">S</div>
  ),
  stripe: (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#635BFF] text-2xl font-bold text-white">$</div>
  ),
  figma: (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#F24E1E] via-[#A259FF] to-[#0ACF83] text-2xl font-bold text-white">F</div>
  ),
  xd: (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF61F6] text-2xl font-bold text-white">Xd</div>
  ),
  vercel: (
    <svg className="h-12 w-12" viewBox="0 0 256 222" fill="none">
      <path d="M128 0L256 221.705H0z" fill="#000" />
    </svg>
  ),
  docker: (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2496ED] text-2xl font-bold text-white">🐋</div>
  ),
  aws: (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#232F3E] text-xl font-bold text-[#FF9900]">AWS</div>
  ),
  git: (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F05032] text-2xl font-bold text-white">Git</div>
  ),
  ga: (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F9AB00] text-2xl font-bold text-white">GA</div>
  ),
  semrush: (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF642D] text-2xl font-bold text-white">Sr</div>
  ),
  gsc: (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#458CF5] text-2xl font-bold text-white">GSC</div>
  )
};

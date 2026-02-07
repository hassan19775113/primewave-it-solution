"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("home.service1.title"),
      description: t("home.service1.desc"),
      highlights: [
        t("home.service1.hl1"),
        t("home.service1.hl2"),
        t("home.service1.hl3")
      ],
      href: "/leistungen/webentwicklung/website",
      cta: t("home.service1.cta")
    },
    {
      title: t("home.service2.title"),
      description: t("home.service2.desc"),
      highlights: [
        t("home.service2.hl1"),
        t("home.service2.hl2"),
        t("home.service2.hl3")
      ],
      href: "/leistungen/webentwicklung/onlineshop",
      cta: t("home.service2.cta")
    },
    {
      title: t("home.service3.title"),
      description: t("home.service3.desc"),
      highlights: [
        t("home.service3.hl1"),
        t("home.service3.hl2"),
        t("home.service3.hl3")
      ],
      href: "/leistungen/webentwicklung/python-web-apps",
      cta: t("home.service3.cta")
    },
    {
      title: t("home.service4.title"),
      description: t("home.service4.desc"),
      highlights: [
        t("home.service4.hl1"),
        t("home.service4.hl2"),
        t("home.service4.hl3")
      ],
      href: "/leistungen/webentwicklung/ui-ux-design",
      cta: t("home.service4.cta")
    },
    {
      title: t("home.service5.title"),
      description: t("home.service5.desc"),
      highlights: [
        t("home.service5.hl1"),
        t("home.service5.hl2"),
        t("home.service5.hl3")
      ],
      href: "/leistungen/seo",
      cta: t("home.service5.cta")
    }
  ];

  const stats = [
    { label: t("home.stats.exp"), value: "8+" },
    { label: t("home.stats.projects"), value: "120+" },
    { label: t("home.stats.launch"), value: t("home.stats.launchValue") }
  ];

  const logos = ["NABU Jewelery", "De La Rosa"];

  const processSteps = [
    {
      title: t("home.process.step1.title"),
      description: t("home.process.step1.desc")
    },
    {
      title: t("home.process.step2.title"),
      description: t("home.process.step2.desc")
    },
    {
      title: t("home.process.step3.title"),
      description: t("home.process.step3.desc")
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-300/60 blur-[160px]" />
        <div className="absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-sky-200/70 blur-[180px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-200/50 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.3)_1px,transparent_0)] [background-size:28px_28px]" />
      </div>

      <SiteHeader />

      <main>
        <section id="hero" className="relative h-[600px] overflow-hidden sm:h-[650px] md:h-[700px]">
          {/* Hero Background Image */}
          <div className="absolute inset-0">
            <Image
              alt={t("home.hero.imageAlt")}
              className="h-full w-full object-cover"
              fill
              priority
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
          </div>

          {/* Badges/Trust Icons - Top Right */}
          <div className="absolute right-4 top-20 z-10 hidden gap-2 sm:flex sm:gap-4 sm:right-6 md:right-12 md:top-32">
            <div className="rounded-lg bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg backdrop-blur-sm">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-900">NABU Jewelery</p>
            </div>
            <div className="rounded-lg bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg backdrop-blur-sm">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-900">De La Rosa</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 sm:px-6">
            <Reveal className="max-w-3xl space-y-5 sm:space-y-6" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white backdrop-blur-md font-semibold shadow-lg">
                {t("home.hero.badge")}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight text-white drop-shadow-2xl">
                {t("home.hero.title")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/95 max-w-2xl drop-shadow-lg">
                {t("home.hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                <Link
                  href="/kontakt"
                  className="text-center rounded-full bg-white px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#13294b] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  {t("home.hero.cta1")}
                </Link>
                <Link
                  href="#leistungen"
                  className="text-center rounded-full border-2 border-white bg-white/5 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 hover:shadow-lg"
                >
                  {t("home.hero.cta2")}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-100/70 py-8 sm:py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
            <Reveal className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-slate-500" delay={0}>
              {t("home.trust")}
            </Reveal>
            <Reveal className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600" delay={120}>
              {logos.map((logo) => (
                <span key={logo} className="rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2">
                  {logo}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 px-4 sm:px-6 md:grid-cols-2">
            <Reveal className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md" delay={0}>
              <div className="relative h-48 sm:h-64 overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  alt={t("home.highlight1.imageAlt")}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  height={520}
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
                  width={720}
                />
              </div>
              <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold text-[#13294b]">
                {t("home.highlight1.title")}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {t("home.highlight1.desc")}
              </p>
            </Reveal>
            <Reveal className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md" delay={120}>
              <div className="relative h-48 sm:h-64 overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  alt={t("home.highlight2.imageAlt")}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  height={520}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
                  width={720}
                />
              </div>
              <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold text-[#13294b]">
                {t("home.highlight2.title")}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {t("home.highlight2.desc")}
              </p>
            </Reveal>
          </div>
        </section>

        <section id="leistungen" className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
              <Reveal className="" delay={0}>
                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-brand-700">
                  {t("home.services.kicker")}
                </p>
                <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#13294b]">
                  {t("home.services.heading")}
                </h2>
                <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                  {t("home.services.desc")}
                </p>
              </Reveal>
              <Reveal delay={120}>
                <a
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-600"
                  href="/kontakt"
                >
                  {t("home.services.ctaLink")}
                </a>
              </Reveal>
            </div>

            <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service) => (
                <Reveal
                  key={service.title}
                  className="group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-md"
                  delay={120}
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-sky-50 text-brand-700 motion-safe:animate-float">
                    ✦
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#13294b]">{service.title}</h3>
                    <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                  </div>
                  <ul className="mt-6 space-y-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                    {service.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <Link
                    className="mt-6 inline-flex items-center text-sm font-semibold text-brand-700"
                    href={service.href}
                  >
                    {service.cta} →
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="prozess" className="border-t border-slate-200 bg-slate-100/60 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
              <Reveal delay={0}>
                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-brand-700">
                  {t("home.process.kicker")}
                </p>
                <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#13294b]">
                  {t("home.process.title")}
                </h2>
                <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                  {t("home.process.desc")}
                </p>
              </Reveal>
            </div>

            <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <Reveal
                  key={step.title}
                  className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm"
                  delay={index * 80}
                >
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-slate-500">
                    {t("home.process.step")} {index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[#13294b]">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 sm:gap-10 px-4 sm:px-6 md:grid-cols-[1fr_0.9fr]">
            <Reveal delay={0}>
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-brand-700">
                {t("home.contact.kicker")}
              </p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#13294b]">
                {t("home.contact.title")}
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                {t("home.contact.desc")}
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-600">
                <p>📍 {t("home.contact.location")}</p>
                <p>✉️ {t("home.contact.email")}</p>
                <p>☎️ {t("home.contact.phone")}</p>
              </div>
            </Reveal>
            <Reveal className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-1 shadow-glow" delay={120}>
              <div className="rounded-[22px] border border-slate-200 bg-white p-8">
                <h3 className="text-xl font-semibold text-[#13294b]">{t("home.form.title")}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {t("home.form.desc")}
                </p>
                <form className="mt-6 space-y-4">
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none"
                    placeholder={t("home.form.name")}
                    type="text"
                  />
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none"
                    placeholder={t("home.form.email")}
                    type="email"
                  />
                  <textarea
                    className="h-28 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none"
                    placeholder={t("home.form.message")}
                  />
                  <button
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#13294b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#265396]"
                    type="button"
                  >
                    {t("home.form.submit")}
                  </button>
                </form>
                <p className="mt-4 text-xs text-slate-500">
                  {t("home.form.consent")}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

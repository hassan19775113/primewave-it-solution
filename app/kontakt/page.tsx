"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../locales";

export default function KontaktPage() {
  const { language } = useLanguage();

  // Load reCAPTCHA script when site key is present
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) return;

    const existing = document.querySelector(`script[data-recaptcha="primewave"]`);
    if (existing) return;

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.setAttribute('data-recaptcha', 'primewave');
    document.body.appendChild(script);

    return () => {
      // keep script for subsequent navigations; don't remove
    };
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      // If reCAPTCHA site key is configured, attempt to get a token and include it
      let recaptchaToken: string | undefined;
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (siteKey && (window as any).grecaptcha) {
        try {
          await (window as any).grecaptcha.ready();
          recaptchaToken = await (window as any).grecaptcha.execute(siteKey, { action: 'contact' });
        } catch (err) {
          // If reCAPTCHA fails, continue without token (server may enforce)
          console.warn('reCAPTCHA execution failed', err);
        }
      }

      const payload = { ...formData, recaptchaToken };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: t.successMessage
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          message: ""
        });
      } else {
        setStatus({
          type: "error",
          message: t.errorMessage
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: t.errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Get translations for current language
  const t = translations[language].contact;

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-6 space-y-3 sm:space-y-4 text-center" delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-brand-700">
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-white/80 text-sm text-[#13294b]"
                  title="Kontakt"
                >
                  📞
                </span>
                {t.heroBadge}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#13294b] to-[#265396] bg-clip-text text-transparent">
                  {t.heroTitle}
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-slate-600">
                {t.heroDesc}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2">
              {/* Contact Form */}
              <Reveal className="space-y-4 sm:space-y-6" delay={0}>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#13294b]">
                    {t.formTitle}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-slate-600">
                    {t.formDesc}
                  </p>
                </div>

                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  {/* Success/Error Messages */}
                  {status.type && (
                    <div
                      className={`rounded-lg border p-4 ${
                        status.type === "success"
                          ? "border-green-200 bg-green-50 text-green-700"
                          : "border-red-200 bg-red-50 text-red-700"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-600">
                      {t.nameLabel} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-600">
                      {t.emailLabel} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-600">
                      {t.phoneLabel}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.phonePlaceholder}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-600">
                      {t.companyLabel}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.companyPlaceholder}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="mb-2 block text-sm font-medium text-slate-600">
                      {t.projectLabel} *
                    </label>
                    <select
                      id="project"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      required
                      disabled={isLoading}
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
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.messagePlaceholder}
                      rows={5}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      required
                      disabled={isLoading}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-full bg-[#13294b] px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-[#265396] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isLoading ? t.sendingButton : t.submitButton}
                  </button>
                </form>
              </Reveal>

              {/* Contact Info */}
              <Reveal className="space-y-6 sm:space-y-8" delay={120}>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#13294b]">
                    {t.infoTitle}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-slate-600">
                    {t.infoDesc}
                  </p>
                </div>

                {t.contactItems.map((item) => (
                  <div 
                    key={item.title} 
                    className="flex gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-slate-200 bg-white/60 px-3 sm:px-4 py-3 sm:py-4 shadow-sm"
                    role="region"
                    aria-label={item.ariaLabel}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-lg sm:text-xl text-[#13294b]"
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-brand-700">
                        {item.title}
                      </p>
                      <p className="mt-2 whitespace-pre-line text-slate-700">
                        {item.value}
                      </p>
                    </div>
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
                        className="inline-block rounded-full border border-brand-200 p-3 text-brand-700 transition hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                        aria-label={`${social.name} profile`}
                        target="_blank"
                        rel="noopener noreferrer"
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
        <section className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-10 sm:mb-12 md:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.faqTitle}
              </h2>
            </Reveal>

            <div className="grid gap-4 sm:gap-6 md:max-w-3xl md:mx-auto">
              {t.faqs.map((faq, idx) => (
                <Reveal
                  key={faq.q}
                  className="overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6"
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
        <section className="border-t border-slate-200 bg-gradient-to-r from-[#13294b] to-[#265396] px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal className="mb-6 sm:mb-8 space-y-3 sm:space-y-4" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {t.ctaTitle}
              </h2>
              <p className="text-base sm:text-lg text-white/90">
                {t.ctaDesc}
              </p>
            </Reveal>

            <Reveal className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4" delay={120}>
              <button 
                className="w-full sm:w-auto rounded-full bg-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#13294b] transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#13294b]"
                aria-label={t.ctaButton}
              >
                {t.ctaButton}
              </button>
              <Link
                href="/"
                className="w-full sm:w-auto text-center rounded-full border border-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#13294b]"
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

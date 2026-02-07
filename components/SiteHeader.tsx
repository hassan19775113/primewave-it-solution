"use client";

import Link from "next/link";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { useLanguage } from "../contexts/LanguageContext";

export default function SiteHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/", label: t("nav.home") },
    {
      label: t("nav.webdev"),
      submenu: [
        { href: "/leistungen/webentwicklung/website", label: t("nav.webdesign") },
        { href: "/leistungen/webentwicklung/onlineshop", label: t("nav.onlineshop") },
        { href: "/leistungen/webentwicklung/python-web-apps", label: t("nav.webapp") },
        { href: "/leistungen/webentwicklung/ui-ux-design", label: t("nav.uiux") },
        { href: "/leistungen/seo", label: t("nav.seo") }
      ]
    },
    { href: "/technologien", label: t("nav.technologies") },
    { href: "/uber-uns", label: t("nav.about") },
    { href: "/kontakt", label: t("nav.contact") }
  ];

  const hasSubmenu = (
    item: (typeof navItems)[number]
  ): item is { label: string; submenu: { href: string; label: string }[] } =>
    "submenu" in item;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link className="flex items-center gap-3" href="/">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#13294b] to-[#265396] text-lg font-bold text-white shadow-md">
            PW
          </div>
          <div>
            <p className="text-base font-bold uppercase tracking-[0.2em] text-[#13294b]">Primewave</p>
            <p className="text-sm font-medium text-slate-600">IT Solution</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-base text-slate-600 md:flex">
          {navItems.map((item) => {
            if (hasSubmenu(item)) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 py-2 transition hover:text-slate-900">
                    {item.label}
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full w-64 pt-2">
                      <div className="rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            className="block px-4 py-2 text-base text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                            href={subItem.href}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                className="transition hover:text-slate-900"
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
            <button
              onClick={() => setLanguage(language === "de" ? "en" : "de")}
              className="flex items-center gap-2 text-sm font-semibold transition hover:text-slate-900"
              aria-label="Sprache wechseln"
            >
              <MdLanguage className="text-lg" aria-hidden />
              <span>{language === "de" ? "DE" : "EN"}</span>
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>
        <Link
          className="rounded-full bg-[#13294b] px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-[#265396]"
          href="/kontakt"
        >
          {language === "de" ? "Projekt starten" : "Start Project"}
        </Link>
      </div>
    </header>
  );
}

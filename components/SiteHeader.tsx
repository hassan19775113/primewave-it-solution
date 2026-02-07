"use client";

import Link from "next/link";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";

export default function SiteHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link className="flex items-center gap-2 sm:gap-3" href="/">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#13294b] to-[#265396] text-base sm:text-lg font-bold text-white shadow-md">
            PW
          </div>
          <div>
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-[#13294b]">Primewave</p>
            <p className="text-xs sm:text-sm font-medium text-slate-600">IT Solution</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-base text-slate-600 lg:flex">
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
          
          {/* Language Switcher - Desktop */}
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

        {/* Mobile & Tablet Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher - Mobile */}
          <button
            onClick={() => setLanguage(language === "de" ? "en" : "de")}
            className="flex lg:hidden items-center gap-1 text-sm font-semibold transition hover:text-slate-900"
            aria-label="Sprache wechseln"
          >
            <MdLanguage className="text-xl" aria-hidden />
            <span className="text-xs">{language === "de" ? "DE" : "EN"}</span>
          </button>

          {/* CTA Button - Hidden on small mobile */}
          <Link
            className="hidden sm:block rounded-full bg-[#13294b] px-4 lg:px-5 py-2 text-xs lg:text-sm font-semibold text-white shadow-glow transition hover:bg-[#265396]"
            href="/kontakt"
          >
            {language === "de" ? "Projekt starten" : "Start Project"}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-4 space-y-1">
            {navItems.map((item) => {
              if (hasSubmenu(item)) {
                return (
                  <div key={item.label} className="space-y-1">
                    <button 
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between py-3 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition"
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            className="block py-2 px-3 text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition"
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  className="block py-3 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition"
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {/* CTA in Mobile Menu */}
            <div className="pt-4 sm:hidden">
              <Link
                className="block w-full text-center rounded-full bg-[#13294b] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#265396]"
                href="/kontakt"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "de" ? "Projekt starten" : "Start Project"}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

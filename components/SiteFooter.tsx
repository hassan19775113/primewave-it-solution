"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function SiteFooter() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-slate-500 md:flex-row">
        <p>© 2026 Primewave IT Solution. {t("footer.rights")}</p>
        <div className="flex gap-6">
          <Link href="/impressum" className="hover:text-slate-900 transition">
            {t("footer.imprint")}
          </Link>
          <Link href="/datenschutz" className="hover:text-slate-900 transition">
            {t("footer.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

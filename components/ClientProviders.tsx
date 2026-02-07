"use client";

import { LanguageProvider } from "../contexts/LanguageContext";
import { StructuredData } from "./StructuredData";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData />
      <LanguageProvider>{children}</LanguageProvider>
    </>
  );
}

"use client";

import { LanguageProvider } from "../contexts/LanguageContext";
import { StructuredData } from "./StructuredData";
import { DirectionSetter } from "./DirectionSetter";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData />
      <LanguageProvider>
        <DirectionSetter />
        {children}
      </LanguageProvider>
    </>
  );
}

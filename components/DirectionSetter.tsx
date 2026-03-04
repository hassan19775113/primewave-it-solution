"use client";

import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function DirectionSetter() {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    const html = document.documentElement;
    const direction = isRTL() ? "rtl" : "ltr";
    
    html.setAttribute("dir", direction);
    html.setAttribute("lang", language);
    
    // Add RTL-specific CSS class for easier styling
    if (isRTL()) {
      html.classList.add("rtl");
    } else {
      html.classList.remove("rtl");
    }
  }, [language, isRTL]);

  return null;
}

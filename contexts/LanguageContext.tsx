"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.webdev": "Webentwicklung",
    "nav.webdesign": "Webdesign",
    "nav.onlineshop": "Onlineshop",
    "nav.webapp": "Web Application mit Python",
    "nav.uiux": "UI/UX Design",
    "nav.seo": "SEO",
    "nav.technologies": "Technologien",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    
    // Homepage Hero
    "home.hero.badge": "Digitalagentur aus Deutschland",
    "home.hero.title": "Ihre Vision. Unsere Expertise. Gemeinsam digital erfolgreich.",
    "home.hero.description": "Wir entwickeln moderne Websites, leistungsstarke E-Commerce-Lösungen und maßgeschneiderte Web-Anwendungen – mit neuesten Technologien, klarem Design und messbaren Ergebnissen.",
    "home.hero.cta1": "Kostenlose Beratung",
    "home.hero.cta2": "Leistungen entdecken",
    "home.hero.imageAlt": "IT-Projekt Hintergrund",
    
    // Services Section
    "home.services.title": "Unsere Leistungen",
    "home.services.subtitle": "Maßgeschneiderte digitale Lösungen für Ihr Unternehmen",
    
    "home.service1.title": "Webdesign & Landing Pages",
    "home.service1.desc": "Moderne, schnelle Websites mit Next.js und React. Performance-optimiert, SEO-ready und pixelgenau umgesetzt.",
    "home.service1.cta": "Mehr erfahren",
    "home.service1.hl1": "Next.js",
    "home.service1.hl2": "Responsive",
    "home.service1.hl3": "Core Web Vitals",
    
    "home.service2.title": "E-Commerce & Onlineshops",
    "home.service2.desc": "Shopify-basierte Shops mit Headless Frontend. Conversion-optimiert und skalierbar für Ihr Wachstum.",
    "home.service2.cta": "Mehr erfahren",
    "home.service2.hl1": "Shopify",
    "home.service2.hl2": "Checkout",
    "home.service2.hl3": "Produkt-SEO",
    
    "home.service3.title": "Web Applications",
    "home.service3.desc": "Backend-Systeme mit Python (Django/FastAPI). Sichere APIs und Datenbank-Architekturen für komplexe Anforderungen.",
    "home.service3.cta": "Mehr erfahren",
    "home.service3.hl1": "Django",
    "home.service3.hl2": "FastAPI",
    "home.service3.hl3": "Data & APIs",
    
    "home.service4.title": "UI/UX Design",
    "home.service4.desc": "User Research, Prototyping und Design Systems. Interfaces, die Nutzer lieben und Conversions steigern.",
    "home.service4.cta": "Mehr erfahren",
    "home.service4.hl1": "User Research",
    "home.service4.hl2": "Prototyping",
    "home.service4.hl3": "Designsystem",
    
    "home.service5.title": "SEO & Performance",
    "home.service5.desc": "Technisches SEO, Content-Strategie und Core Web Vitals. Mehr Sichtbarkeit und bessere Rankings.",
    "home.service5.cta": "Mehr erfahren",
    "home.service5.hl1": "OnPage",
    "home.service5.hl2": "Technisch",
    "home.service5.hl3": "Local SEO",

    // Homepage Trust & Highlights
    "home.trust": "Vertrauen von Teams, die wachsen wollen",
    "home.highlight1.title": "Elegante Markenauftritte",
    "home.highlight1.desc": "Wir entwickeln Websites, die Premium wirken und gleichzeitig messbar performen.",
    "home.highlight1.imageAlt": "Branding und Webdesign",
    "home.highlight2.title": "Fokus auf Ergebnisse",
    "home.highlight2.desc": "Von der Idee bis zum Launch – klare Prozesse und schnelle Umsetzung.",
    "home.highlight2.imageAlt": "Team bei der Arbeit",

    // Services Overview (Homepage)
    "home.services.kicker": "Leistungen",
    "home.services.heading": "Lösungen für starke digitale Auftritte",
    "home.services.desc": "Von der ersten Idee bis zum Livegang begleiten wir dich mit einem klaren Prozess und messbaren Ergebnissen.",
    "home.services.ctaLink": "Projekt besprechen →",

    // Process Section
    "home.process.kicker": "Ablauf",
    "home.process.title": "Klarer Prozess, messbare Ergebnisse",
    "home.process.desc": "Wir kombinieren Strategie, Design und Engineering – und sorgen für einen Launch, der nicht nur gut aussieht, sondern performt.",
    "home.process.step": "Schritt",
    "home.process.step1.title": "Kickoff & Klarheit",
    "home.process.step1.desc": "Wir definieren Ziele, Zielgruppe und Differenzierung – damit jede Seite Wirkung zeigt.",
    "home.process.step2.title": "Design & Prototyp",
    "home.process.step2.desc": "Interaktive Entwürfe, klare UX-Flows und Feedback-Schleifen sichern schnelle Entscheidungen.",
    "home.process.step3.title": "Build & Launch",
    "home.process.step3.desc": "Sauberer Code, Performance-Optimierung und ein Launch, der messbar Ergebnisse liefert.",

    // Contact Section
    "home.contact.kicker": "Kontakt",
    "home.contact.title": "Bereit für den nächsten digitalen Schritt?",
    "home.contact.desc": "Erzähl uns von deinem Projekt – wir melden uns innerhalb von 24 Stunden mit einem klaren Fahrplan und ehrlichem Feedback.",
    "home.contact.location": "Hannover · Garbsen · Remote",
    "home.contact.email": "hassan19775113@outlook.com",
    "home.contact.phone": "+49 173 4946526",

    // Contact Form
    "home.form.title": "Projektanfrage",
    "home.form.desc": "Schick uns eine kurze Nachricht – wir antworten persönlich.",
    "home.form.name": "Name & Unternehmen",
    "home.form.email": "E-Mail-Adresse",
    "home.form.message": "Projektbeschreibung",
    "home.form.submit": "Anfrage senden",
    "home.form.consent": "Mit dem Absenden stimmst du der Kontaktaufnahme zu.",

    // Stats
    "home.stats.exp": "Jahre Erfahrung",
    "home.stats.projects": "Erfolgreiche Projekte",
    "home.stats.launch": "Ø Launch-Zeit",
    "home.stats.launchValue": "6 Wochen",
    
    // Why Choose Us
    "home.why.title": "Warum Primewave?",
    "home.why.subtitle": "Ihr Partner für digitale Exzellenz",
    
    "home.why1.title": "Moderne Technologien",
    "home.why1.desc": "Next.js, React, Python – wir setzen auf bewährte, zukunftssichere Tech-Stacks.",
    
    "home.why2.title": "Performance First",
    "home.why2.desc": "Schnelle Ladezeiten, optimierte Core Web Vitals und erstklassige Nutzererfahrung.",
    
    "home.why3.title": "SEO-optimiert",
    "home.why3.desc": "Technisches SEO von Anfang an – für bessere Rankings und mehr organischen Traffic.",
    
    "home.why4.title": "Transparent & Fair",
    "home.why4.desc": "Klare Kommunikation, faire Preise und ehrliche Beratung ohne versteckte Kosten.",
    
    "home.why5.title": "Messbare Ergebnisse",
    "home.why5.desc": "Conversion-Tracking, Analytics-Setup und datenbasierte Optimierungen.",
    
    "home.why6.title": "Langfristige Partnerschaft",
    "home.why6.desc": "Wir begleiten Sie auch nach dem Launch – mit Support, Wartung und Weiterentwicklung.",
    
    // CTA Section
    "home.cta.title": "Bereit für Ihr digitales Projekt?",
    "home.cta.description": "Lassen Sie uns in einem kostenlosen Erstgespräch über Ihre Ziele sprechen. Wir entwickeln gemeinsam die perfekte Lösung für Ihr Unternehmen.",
    "home.cta.button": "Jetzt Projekt starten",
    
    // Footer
    "footer.company": "Unternehmen",
    "footer.services": "Leistungen",
    "footer.legal": "Rechtliches",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.rights": "Alle Rechte vorbehalten.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.webdev": "Web Development",
    "nav.webdesign": "Web Design",
    "nav.onlineshop": "Online Shop",
    "nav.webapp": "Web Application with Python",
    "nav.uiux": "UI/UX Design",
    "nav.seo": "SEO",
    "nav.technologies": "Technologies",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    
    // Homepage Hero
    "home.hero.badge": "Digital Agency from Germany",
    "home.hero.title": "Your Vision. Our Expertise. Digital Success Together.",
    "home.hero.description": "We develop modern websites, powerful e-commerce solutions, and custom web applications – using cutting-edge technologies, clear design, and measurable results.",
    "home.hero.cta1": "Free Consultation",
    "home.hero.cta2": "Discover Services",
    "home.hero.imageAlt": "IT project background",
    
    // Services Section
    "home.services.title": "Our Services",
    "home.services.subtitle": "Tailored digital solutions for your business",
    
    "home.service1.title": "Web Design & Landing Pages",
    "home.service1.desc": "Modern, fast websites with Next.js and React. Performance-optimized, SEO-ready, and pixel-perfect implementation.",
    "home.service1.cta": "Learn More",
    "home.service1.hl1": "Next.js",
    "home.service1.hl2": "Responsive",
    "home.service1.hl3": "Core Web Vitals",
    
    "home.service2.title": "E-Commerce & Online Shops",
    "home.service2.desc": "Shopify-based shops with headless frontend. Conversion-optimized and scalable for your growth.",
    "home.service2.cta": "Learn More",
    "home.service2.hl1": "Shopify",
    "home.service2.hl2": "Checkout",
    "home.service2.hl3": "Product SEO",
    
    "home.service3.title": "Web Applications",
    "home.service3.desc": "Backend systems with Python (Django/FastAPI). Secure APIs and database architectures for complex requirements.",
    "home.service3.cta": "Learn More",
    "home.service3.hl1": "Django",
    "home.service3.hl2": "FastAPI",
    "home.service3.hl3": "Data & APIs",
    
    "home.service4.title": "UI/UX Design",
    "home.service4.desc": "User research, prototyping, and design systems. Interfaces that users love and that increase conversions.",
    "home.service4.cta": "Learn More",
    "home.service4.hl1": "User Research",
    "home.service4.hl2": "Prototyping",
    "home.service4.hl3": "Design System",
    
    "home.service5.title": "SEO & Performance",
    "home.service5.desc": "Technical SEO, content strategy, and Core Web Vitals. More visibility and better rankings.",
    "home.service5.cta": "Learn More",
    "home.service5.hl1": "On-page",
    "home.service5.hl2": "Technical",
    "home.service5.hl3": "Local SEO",

    // Homepage Trust & Highlights
    "home.trust": "Trusted by teams that want to grow",
    "home.highlight1.title": "Elegant brand presence",
    "home.highlight1.desc": "We build websites that feel premium and deliver measurable performance.",
    "home.highlight1.imageAlt": "Branding and web design",
    "home.highlight2.title": "Focus on results",
    "home.highlight2.desc": "From idea to launch – clear processes and fast execution.",
    "home.highlight2.imageAlt": "Team at work",

    // Services Overview (Homepage)
    "home.services.kicker": "Services",
    "home.services.heading": "Solutions for strong digital presences",
    "home.services.desc": "From the first idea to go-live, we guide you with a clear process and measurable results.",
    "home.services.ctaLink": "Discuss your project →",

    // Process Section
    "home.process.kicker": "Process",
    "home.process.title": "Clear process, measurable results",
    "home.process.desc": "We combine strategy, design, and engineering – and deliver a launch that not only looks great but performs.",
    "home.process.step": "Step",
    "home.process.step1.title": "Kickoff & clarity",
    "home.process.step1.desc": "We define goals, audience, and differentiation – so every page drives impact.",
    "home.process.step2.title": "Design & prototype",
    "home.process.step2.desc": "Interactive drafts, clear UX flows, and feedback loops enable fast decisions.",
    "home.process.step3.title": "Build & launch",
    "home.process.step3.desc": "Clean code, performance optimization, and a launch that delivers measurable results.",

    // Contact Section
    "home.contact.kicker": "Contact",
    "home.contact.title": "Ready for the next digital step?",
    "home.contact.desc": "Tell us about your project — we’ll get back within 24 hours with a clear roadmap and honest feedback.",
    "home.contact.location": "Hanover · Garbsen · Remote",
    "home.contact.email": "hassan19775113@outlook.com",
    "home.contact.phone": "+49 173 4946526",

    // Contact Form
    "home.form.title": "Project inquiry",
    "home.form.desc": "Send us a brief message — we’ll reply personally.",
    "home.form.name": "Name & company",
    "home.form.email": "Email address",
    "home.form.message": "Project description",
    "home.form.submit": "Send inquiry",
    "home.form.consent": "By sending, you agree to be contacted.",

    // Stats
    "home.stats.exp": "Years of experience",
    "home.stats.projects": "Successful projects",
    "home.stats.launch": "Avg. launch time",
    "home.stats.launchValue": "6 weeks",
    
    // Why Choose Us
    "home.why.title": "Why Primewave?",
    "home.why.subtitle": "Your partner for digital excellence",
    
    "home.why1.title": "Modern Technologies",
    "home.why1.desc": "Next.js, React, Python – we rely on proven, future-proof tech stacks.",
    
    "home.why2.title": "Performance First",
    "home.why2.desc": "Fast loading times, optimized Core Web Vitals, and first-class user experience.",
    
    "home.why3.title": "SEO-Optimized",
    "home.why3.desc": "Technical SEO from the start – for better rankings and more organic traffic.",
    
    "home.why4.title": "Transparent & Fair",
    "home.why4.desc": "Clear communication, fair prices, and honest consulting without hidden costs.",
    
    "home.why5.title": "Measurable Results",
    "home.why5.desc": "Conversion tracking, analytics setup, and data-driven optimizations.",
    
    "home.why6.title": "Long-term Partnership",
    "home.why6.desc": "We support you even after launch – with support, maintenance, and further development.",
    
    // CTA Section
    "home.cta.title": "Ready for Your Digital Project?",
    "home.cta.description": "Let's talk about your goals in a free initial consultation. Together, we'll develop the perfect solution for your business.",
    "home.cta.button": "Start Your Project Now",
    
    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.legal": "Legal",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy",
    "footer.rights": "All rights reserved.",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en" | "ar" | "ku";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: () => boolean;
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
  },
  ar: {
    // Navigation
    "nav.home": "الصفحة الرئيسية",
    "nav.webdev": "تطوير الويب",
    "nav.webdesign": "تصميم الويب",
    "nav.onlineshop": "متجر إلكتروني",
    "nav.webapp": "تطبيق ويب مع Python",
    "nav.uiux": "تصميم UI/UX",
    "nav.seo": "SEO",
    "nav.technologies": "التقنيات",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    
    // Homepage Hero
    "home.hero.badge": "وكالة رقمية من ألمانيا",
    "home.hero.title": "رؤيتك. خبرتنا. نجاح رقمي معاً.",
    "home.hero.description": "نطور مواقع ويب حديثة، وحلول تجارة إلكترونية قوية، وتطبيقات ويب مخصصة - باستخدام أحدث التقنيات والتصميم الواضح والنتائج القابلة للقياس.",
    "home.hero.cta1": "استشارة مجانية",
    "home.hero.cta2": "اكتشف الخدمات",
    "home.hero.imageAlt": "خلفية مشروع تكنولوجيا المعلومات",
    
    // Services Section
    "home.services.title": "خدماتنا",
    "home.services.subtitle": "حلول رقمية مخصصة لعملك",
    
    "home.service1.title": "تصميم الويب والصفحات المقصودة",
    "home.service1.desc": "مواقع ويب حديثة وسريعة مع Next.js و React. محسّنة للأداء، جاهزة لـ SEO، ومُنفّذة بدقة البكسل.",
    "home.service1.cta": "اعرف المزيد",
    "home.service1.hl1": "Next.js",
    "home.service1.hl2": "متجاوب",
    "home.service1.hl3": "Core Web Vitals",
    
    "home.service2.title": "التجارة الإلكترونية والمتاجر عبر الإنترنت",
    "home.service2.desc": "متاجر قائمة على Shopify مع واجهة أمامية منفصلة. محسّنة للتحويل وقابلة للتوسع لنموك.",
    "home.service2.cta": "اعرف المزيد",
    "home.service2.hl1": "Shopify",
    "home.service2.hl2": "الدفع",
    "home.service2.hl3": "SEO المنتج",
    
    "home.service3.title": "تطبيقات الويب",
    "home.service3.desc": "أنظمة خلفية مع Python (Django/FastAPI). واجهات برمجة تطبيقات آمنة وبنيات قواعد بيانات للمتطلبات المعقدة.",
    "home.service3.cta": "اعرف المزيد",
    "home.service3.hl1": "Django",
    "home.service3.hl2": "FastAPI",
    "home.service3.hl3": "البيانات والـ APIs",
    
    "home.service4.title": "تصميم UI/UX",
    "home.service4.desc": "بحث المستخدم، النماذج الأولية، وأنظمة التصميم. واجهات يحبها المستخدمون وتزيد من التحويلات.",
    "home.service4.cta": "اعرف المزيد",
    "home.service4.hl1": "بحث المستخدم",
    "home.service4.hl2": "النماذج الأولية",
    "home.service4.hl3": "نظام التصميم",
    
    "home.service5.title": "SEO والأداء",
    "home.service5.desc": "SEO التقني، استراتيجية المحتوى، و Core Web Vitals. المزيد من الرؤية وترتيب أفضل.",
    "home.service5.cta": "اعرف المزيد",
    "home.service5.hl1": "على الصفحة",
    "home.service5.hl2": "تقني",
    "home.service5.hl3": "SEO محلي",

    // Homepage Trust & Highlights
    "home.trust": "موثوق به من قبل الفرق التي تريد النمو",
    "home.highlight1.title": "حضور العلامة التجارية الأنيق",
    "home.highlight1.desc": "نبني مواقع ويب تبدو متميزة وتقدم أداءً قابلاً للقياس.",
    "home.highlight1.imageAlt": "العلامة التجارية وتصميم الويب",
    "home.highlight2.title": "التركيز على النتائج",
    "home.highlight2.desc": "من الفكرة إلى الإطلاق - عمليات واضحة وتنفيذ سريع.",
    "home.highlight2.imageAlt": "الفريق في العمل",

    // Services Overview (Homepage)
    "home.services.kicker": "الخدمات",
    "home.services.heading": "حلول لحضور رقمي قوي",
    "home.services.desc": "من الفكرة الأولى إلى الإطلاق، نرشدك بعملية واضحة ونتائج قابلة للقياس.",
    "home.services.ctaLink": "ناقش مشروعك ←",

    // Process Section
    "home.process.kicker": "العملية",
    "home.process.title": "عملية واضحة، نتائج قابلة للقياس",
    "home.process.desc": "نجمع بين الاستراتيجية والتصميم والهندسة - ونقدم إطلاقاً لا يبدو رائعاً فحسب، بل يؤدي أيضاً.",
    "home.process.step": "الخطوة",
    "home.process.step1.title": "البداية والوضوح",
    "home.process.step1.desc": "نحدد الأهداف والجمهور والتمايز - حتى تُظهر كل صفحة تأثيراً.",
    "home.process.step2.title": "التصميم والنموذج الأولي",
    "home.process.step2.desc": "مسودات تفاعلية، تدفقات UX واضحة، وحلقات ملاحظات تمكّن من اتخاذ قرارات سريعة.",
    "home.process.step3.title": "البناء والإطلاق",
    "home.process.step3.desc": "كود نظيف، تحسين الأداء، وإطلاق يقدم نتائج قابلة للقياس.",

    // Contact Section
    "home.contact.kicker": "اتصل",
    "home.contact.title": "هل أنت مستعد للخطوة الرقمية التالية؟",
    "home.contact.desc": "أخبرنا عن مشروعك - سنعود إليك خلال 24 ساعة بخارطة طريق واضحة وملاحظات صادقة.",
    "home.contact.location": "هانوفر · غاربسن · عن بعد",
    "home.contact.email": "hassan19775113@outlook.com",
    "home.contact.phone": "+49 173 4946526",

    // Contact Form
    "home.form.title": "استفسار المشروع",
    "home.form.desc": "أرسل لنا رسالة موجزة - سنرد شخصياً.",
    "home.form.name": "الاسم والشركة",
    "home.form.email": "عنوان البريد الإلكتروني",
    "home.form.message": "وصف المشروع",
    "home.form.submit": "إرسال الاستفسار",
    "home.form.consent": "بالإرسال، توافق على الاتصال بك.",

    // Stats
    "home.stats.exp": "سنوات من الخبرة",
    "home.stats.projects": "مشاريع ناجحة",
    "home.stats.launch": "متوسط وقت الإطلاق",
    "home.stats.launchValue": "6 أسابيع",
    
    // Why Choose Us
    "home.why.title": "لماذا Primewave؟",
    "home.why.subtitle": "شريكك للتميز الرقمي",
    
    "home.why1.title": "تقنيات حديثة",
    "home.why1.desc": "Next.js، React، Python - نعتمد على مجموعات تقنية مثبتة ومستقبلية.",
    
    "home.why2.title": "الأداء أولاً",
    "home.why2.desc": "أوقات تحميل سريعة، Core Web Vitals محسّنة، وتجربة مستخدم من الدرجة الأولى.",
    
    "home.why3.title": "محسّن لـ SEO",
    "home.why3.desc": "SEO التقني من البداية - لترتيب أفضل والمزيد من حركة المرور العضوية.",
    
    "home.why4.title": "شفاف وعادل",
    "home.why4.desc": "تواصل واضح، أسعار عادلة، واستشارة صادقة بدون تكاليف خفية.",
    
    "home.why5.title": "نتائج قابلة للقياس",
    "home.why5.desc": "تتبع التحويل، إعداد التحليلات، والتحسينات المستندة إلى البيانات.",
    
    "home.why6.title": "شراكة طويلة الأمد",
    "home.why6.desc": "ندعمك حتى بعد الإطلاق - مع الدعم والصيانة والتطوير المستمر.",
    
    // CTA Section
    "home.cta.title": "هل أنت مستعد لمشروعك الرقمي؟",
    "home.cta.description": "دعنا نتحدث عن أهدافك في استشارة أولية مجانية. معاً، سنطور الحل المثالي لعملك.",
    "home.cta.button": "ابدأ مشروعك الآن",
    
    // Footer
    "footer.company": "الشركة",
    "footer.services": "الخدمات",
    "footer.legal": "قانوني",
    "footer.imprint": "بيانات النشر",
    "footer.privacy": "الخصوصية",
    "footer.rights": "جميع الحقوق محفوظة.",
  },
  ku: {
    // Navigation
    "nav.home": "سەرەتا",
    "nav.webdev": "گەشەپێدانی وێب",
    "nav.webdesign": "دیزاینی وێب",
    "nav.onlineshop": "فرۆشگای ئۆنلاین",
    "nav.webapp": "بەرنامەی وێب لەگەڵ Python",
    "nav.uiux": "دیزاینی UI/UX",
    "nav.seo": "SEO",
    "nav.technologies": "تەکنەلۆژیاکان",
    "nav.about": "دەربارەمان",
    "nav.contact": "پەیوەندی",
    
    // Homepage Hero
    "home.hero.badge": "ئەنجومەنی دیجیتاڵ لە ئەڵمانیا",
    "home.hero.title": "دیدگاکەت. شارەزاییمان. سەرکەوتنی دیجیتاڵی پێکەوە.",
    "home.hero.description": "ئێمە ماڵپەڕی نوێ، چارەسەری بەهێزی بازرگانی ئەلیکترۆنی، و بەرنامەی وێبی تایبەت گەشە پێدەدەین - بە بەکارهێنانی نوێترین تەکنەلۆژیاکان و دیزاینی ڕوون و ئەنجامی پێوان.",
    "home.hero.cta1": "ڕاوێژکاریی بەخۆڕایی",
    "home.hero.cta2": "خزمەتگوزارییەکان بزانە",
    "home.hero.imageAlt": "پاشبنەمای پڕۆژەی IT",
    
    // Services Section
    "home.services.title": "خزمەتگوزارییەکانمان",
    "home.services.subtitle": "چارەسەری دیجیتاڵی تایبەت بۆ بازرگانیەکەت",
    
    "home.service1.title": "دیزاینی وێب و لاپەڕەکانی فڕینە",
    "home.service1.desc": "ماڵپەڕی نوێ و خێرا لەگەڵ Next.js و React. باشکراو بۆ کارایی، ئامادەی SEO، و جێبەجێکراوی بە وردی پیکسەل.",
    "home.service1.cta": "زیاتر بزانە",
    "home.service1.hl1": "Next.js",
    "home.service1.hl2": "وەڵامدەرەوە",
    "home.service1.hl3": "Core Web Vitals",
    
    "home.service2.title": "بازرگانی ئەلیکترۆنی و فرۆشگای ئۆنلاین",
    "home.service2.desc": "فرۆشگاکانی پشتبەستوو بە Shopify لەگەڵ کەڵەکی پێشەوە جیاکراوە. باشکراو بۆ گۆڕین و پەرەپێدانی بۆ گەشەکردنت.",
    "home.service2.cta": "زیاتر بزانە",
    "home.service2.hl1": "Shopify",
    "home.service2.hl2": "پارەدان",
    "home.service2.hl3": "SEO ی بەرهەم",
    
    "home.service3.title": "بەرنامەکانی وێب",
    "home.service3.desc": "سیستەمی پشتەوە لەگەڵ Python (Django/FastAPI). APIـی سەلامەت و تەلارسازیی بنکەی دراوە بۆ پێداویستیە ئاڵۆزەکان.",
    "home.service3.cta": "زیاتر بزانە",
    "home.service3.hl1": "Django",
    "home.service3.hl2": "FastAPI",
    "home.service3.hl3": "دراوە و APIـەکان",
    
    "home.service4.title": "دیزاینی UI/UX",
    "home.service4.desc": "لێکۆڵینەوەی بەکارهێنەر، نموونەی سەرەتایی، و سیستەمی دیزاین. ڕووکارەکان کە بەکارهێنەران حەزیان لێیە و گۆڕان زیاد دەکەن.",
    "home.service4.cta": "زیاتر بزانە",
    "home.service4.hl1": "لێکۆڵینەوەی بەکارهێنەر",
    "home.service4.hl2": "نموونەسازی",
    "home.service4.hl3": "سیستەمی دیزاین",
    
    "home.service5.title": "SEO و کارایی",
    "home.service5.desc": "SEO ی تەکنیکی، ستراتیژی ناوەڕۆک، و Core Web Vitals. بینینی زیاتر و پلەبەندی باشتر.",
    "home.service5.cta": "زیاتر بزانە",
    "home.service5.hl1": "لەسەر لاپەڕە",
    "home.service5.hl2": "تەکنیکی",
    "home.service5.hl3": "SEO ی ناوچەیی",

    // Homepage Trust & Highlights
    "home.trust": "متمانەپێکراو لەلایەن تیمەکانەوە کە دەیانەوێت گەشە بکەن",
    "home.highlight1.title": "ئامادەبوونی مارکای جوان",
    "home.highlight1.desc": "ئێمە ماڵپەڕەکان دروست دەکەین کە وەک پرێمیۆم دەردەکەون و کاراییەکی پێوانی دەبەخشن.",
    "home.highlight1.imageAlt": "مارکە و دیزاینی وێب",
    "home.highlight2.title": "سەرنج لەسەر ئەنجام",
    "home.highlight2.desc": "لە بیرۆکەوە بۆ دەستپێکردن - پرۆسەی ڕوون و جێبەجێکردنی خێرا.",
    "home.highlight2.imageAlt": "تیم لە کار",

    // Services Overview (Homepage)
    "home.services.kicker": "خزمەتگوزارییەکان",
    "home.services.heading": "چارەسەر بۆ ئامادەبوونی دیجیتاڵی بەهێز",
    "home.services.desc": "لە بیرۆکەی یەکەمەوە تا بردنە ژیان، ئێمە ڕێنماییت دەکەین بە پرۆسەیەکی ڕوون و ئەنجامی پێوان.",
    "home.services.ctaLink": "پڕۆژەکەت باس بکە ←",

    // Process Section
    "home.process.kicker": "پرۆسە",
    "home.process.title": "پرۆسەی ڕوون، ئەنجامی پێوان",
    "home.process.desc": "ئێمە ستراتیژی و دیزاین و ئەندازیاری تێکەڵ دەکەین - و دەستپێکردنێک دەگەیەنین کە نەک تەنها جوان دەردەکەوێت، بەڵکو کارایی هەیە.",
    "home.process.step": "هەنگاو",
    "home.process.step1.title": "دەستپێکردن و ڕوونی",
    "home.process.step1.desc": "ئێمە ئامانج و بینەر و جیاوازی پێناسە دەکەین - بۆ ئەوەی هەر لاپەڕەیەک کاریگەری نیشان بدات.",
    "home.process.step2.title": "دیزاین و نموونە",
    "home.process.step2.desc": "ڕەشنووسی کارلێککەر، ڕەوتی UX ڕوون، و خولی فیدباک ڕێگە بە بڕیارە خێراکان دەدەن.",
    "home.process.step3.title": "بنیاتنان و دەستپێکردن",
    "home.process.step3.desc": "کۆدی پاک، باشکردنی کارایی، و دەستپێکردنێک کە ئەنجامی پێوان دەبەخشێت.",

    // Contact Section
    "home.contact.kicker": "پەیوەندی",
    "home.contact.title": "ئامادەیت بۆ هەنگاوی دیجیتاڵی داهاتوو؟",
    "home.contact.desc": "باسی پڕۆژەکەت بۆمان بکە - ئێمە لە ماوەی 24 کاتژمێر وەڵامت دەدەینەوە لەگەڵ نەخشەی ڕێگای ڕوون و فیدباکی ڕاستگۆیانە.",
    "home.contact.location": "هانۆڤەر · گاربسن · دوور",
    "home.contact.email": "hassan19775113@outlook.com",
    "home.contact.phone": "+49 173 4946526",

    // Contact Form
    "home.form.title": "پرسیاری پڕۆژە",
    "home.form.desc": "پەیامێکی کورتمان بۆ بنێرە - ئێمە بە تایبەت وەڵام دەدەینەوە.",
    "home.form.name": "ناو و کۆمپانیا",
    "home.form.email": "ناونیشانی ئیمەیڵ",
    "home.form.message": "وەسفی پڕۆژە",
    "home.form.submit": "پرسیار بنێرە",
    "home.form.consent": "بە ناردن، ڕازیت بە پەیوەندیکردن.",

    // Stats
    "home.stats.exp": "ساڵی ئەزموون",
    "home.stats.projects": "پڕۆژەی سەرکەوتوو",
    "home.stats.launch": "کاتی دەستپێکردنی ناوەند",
    "home.stats.launchValue": "6 هەفتە",
    
    // Why Choose Us
    "home.why.title": "بۆچی Primewave؟",
    "home.why.subtitle": "هاوبەشەکەت بۆ باشی دیجیتاڵ",
    
    "home.why1.title": "تەکنەلۆژیای نوێ",
    "home.why1.desc": "Next.js، React، Python - ئێمە پشت بە کۆمەڵە تەکنیکیی سەلمێنراو و داهاتووپێکراو دەبەستین.",
    
    "home.why2.title": "کارایی یەکەم",
    "home.why2.desc": "کاتی بارکردنی خێرا، Core Web Vitals باشکراو، و ئەزموونی بەکارهێنەری پلەی یەکەم.",
    
    "home.why3.title": "باشکراو بۆ SEO",
    "home.why3.desc": "SEO ی تەکنیکی لە سەرەتاوە - بۆ پلەبەندی باشتر و هاتووچۆی ئۆرگانیکی زیاتر.",
    
    "home.why4.title": "ڕوون و دادپەروەرانە",
    "home.why4.desc": "پەیوەندی ڕوون، نرخی دادپەروەرانە، و ڕاوێژکاری ڕاستگۆیانە بەبێ تێچووی شاراوە.",
    
    "home.why5.title": "ئەنجامی پێوان",
    "home.why5.desc": "شوێنکەوتنی گۆڕین، ڕێکخستنی شیکاری، و باشکردنی پشتبەستوو بە دراوە.",
    
    "home.why6.title": "هاوبەشی درێژخایەن",
    "home.why6.desc": "ئێمە پشتگیریت دەکەین تەنانەت لە دوای دەستپێکردنیش - لەگەڵ پشتگیری و چاککردنەوە و گەشەپێدانی بەردەوام.",
    
    // CTA Section
    "home.cta.title": "ئامادەیت بۆ پڕۆژەی دیجیتاڵەکەت؟",
    "home.cta.description": "با لەبارەی ئامانجەکانت بدوێین لە ڕاوێژکاریی سەرەتایی بەخۆڕایی. پێکەوە، چارەسەری تەواو گەشە پێدەدەین بۆ بازرگانیەکەت.",
    "home.cta.button": "ئێستا پڕۆژەکەت دەست پێبکە",
    
    // Footer
    "footer.company": "کۆمپانیا",
    "footer.services": "خزمەتگوزارییەکان",
    "footer.legal": "یاسایی",
    "footer.imprint": "زانیاری بڵاوکردنەوە",
    "footer.privacy": "تایبەتمەندی",
    "footer.rights": "هەموو مافەکان پارێزراون.",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de");

  const t = (key: string): string => {
    const langTranslations = translations[language] as Record<string, string>;
    return langTranslations[key] || translations["en"][key as keyof typeof translations.en] || key;
  };

  const isRTL = (): boolean => {
    return language === "ar" || language === "ku";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
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

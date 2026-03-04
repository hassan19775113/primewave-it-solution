"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../../components/Reveal";
import SiteFooter from "../../../../components/SiteFooter";
import SiteHeader from "../../../../components/SiteHeader";
import { useLanguage } from "../../../../contexts/LanguageContext";

export default function OnlineshopPage() {
  const { language } = useLanguage();

  const content = {
    de: {
      heroBadge: "E-Commerce & Onlineshops",
      heroTitle: "Onlineshops mit Shopify & Next.js, gemacht zum Verkaufen",
      heroDesc:
        "Performante, konversions-fokussierte E-Commerce-Lösungen. Mit Shopify als Backend und Next.js als verdammt schnellem Frontend – der perfekte Stack für E-Commerce.",
      ctaHeroPrimary: "Shop planen",
      ctaHeroSecondary: "SEO für Shop",
      benefitsTitle: "Warum diese Tech-Stack für Ihren Shop?",
      benefitsSubtitle: "Shopify + Next.js = Maximale Performance + Vollständige Kontrolle",
      benefits: [
        {
          title: "Konversions-fokussiert",
          description:
            "Psychologisches Design, optimierte Checkout-Flows und Social Proof erhöhen Ihre Verkaufsrate"
        },
        {
          title: "Shopify-Power",
          description: "Headless Commerce mit Shopify – extrem skalierbar, wartbar und erweiterbar"
        },
        {
          title: "Payment-Integrationen",
          description:
            "Stripe, Paypal, Klarna, Apple Pay – alle wichtigen Zahlungsmethoden sind integriert"
        },
        {
          title: "Mobile-First",
          description:
            "70% des E-Commerce läuft auf Mobile – wir bauen mobil-first und konvertierend"
        },
        {
          title: "Performance",
          description:
            "Schnelle Ladezeiten = höhere Rankings + bessere Konversion + weniger Absprünge"
        },
        {
          title: "Skalierbare Struktur",
          description:
            "Vom Startup mit 100 SKUs zum Enterprise mit 100.000+ Produkten – ausgebaut für Wachstum"
        }
      ],
      featuresTitle: "Alle Shop-Features included",
      features: [
        "Produktspezifische Meta-Tags & Strukturdaten",
        "Kategorien & Filter-Navigation",
        "Wishlist & Vergleich-Features",
        "Inventory-Management Integration",
        "Automated Email Marketing",
        "Advanced Analytics & Attribution",
        "A/B Testing für Layouts",
        "Mobile Wallet Integration",
        "Multi-Currency Support",
        "EU VAT Compliance",
        "Abandoned Cart Recovery",
        "Product Recommendations Engine"
      ],
      techTitle: "E-Commerce Tech Stack",
      techSubtitle: "Marktführende Tools für skalierbare Online-Shops",
      techStack: [
        "Next.js 14+",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Shopify API",
        "Stripe/Payments",
        "PostgreSQL",
        "Vercel",
        "Klaviyo",
        "Segment Analytics"
      ],
      useCasesTitle: "Shop-Arten, die wir bauen",
      useCases: [
        {
          title: "Fashion & Lifestyle",
          description: "Visual-first Shops mit Lookbooks, Size Guides und Trend-Seasonal CMS",
          image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Tech & Electronics",
          description: "Spec-fokussiert mit vergleichenden Tabellen, Reviews und Tech Deep-Dives",
          image:
            "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Food & Beverage",
          description: "Hochwertige Produktfotos, Rezept-Integration, Abonnement-Models",
          image:
            "https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "B2B / Großmengen",
          description: "Custom Pricing, Bulk Orders, API für Partner-Integrationen",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      processTitle: "Shop-Entwicklung step-by-step",
      processSteps: [
        {
          title: "1. Shop-Strategie & Audit",
          description:
            "Wir analysieren Ihren aktuellen Shop (falls vorhanden), Konkurrenz und definieren KPIs wie AOV, Konversionrate und Customer Lifetime Value."
        },
        {
          title: "2. Shopify & CMS Setup",
          description:
            "Shopify-Admin-Konfiguration, Produktdatenstruktur, Kategorien und Collections. Evergreen-CMS für Blog und Landing Pages."
        },
        {
          title: "3. Design & UX für Konversion",
          description:
            "Hochwertige Designs mit Psychology-Fokus: Trust Signals, Social Proof, Urgency-Elements. Mobile-First Prototyping."
        },
        {
          title: "4. Development & Integrationen",
          description:
            "Next.js-Frontend mit Shopify Storefront API, Payment-Gateways, Email-Marketing, Analytics. Full-Stack E-Commerce."
        },
        {
          title: "5. Launch & Optimierung",
          description:
            "Performance-Testing (LCP, CLS, FID), Security Audit, Checkout-Optimierung, A/B Testing Setup, Google Analytics 4."
        },
        {
          title: "6. Growth-Phase",
          description:
            "Continuous A/B Testing, Heatmaps, Conversion-Rate-Optimierung, Email-Funnels, Loyalty-Programs und Upsell-Strategien."
        }
      ],
      stats: [
        { label: "Online-Shops", value: "32+" },
        { label: "Ø Order Growth", value: "+78%" },
        { label: "Cart Abandonment Reduction", value: "-35%" }
      ],
      pricingTitle: "Shop-Pakete",
      pricingSubtitle: "Verschiedene Größen und Anforderungen",
      pricing: [
        {
          name: "Starter Shop",
          price: "€8.999,–",
          desc: "Für Neue E-Commerce",
          features: [
            "bis zu 500 Produkte",
            "Shopify + Next.js",
            "Basic Integrations",
            "1 Payment Gateway",
            "Mobile Optimiert",
            "3 Monate Support"
          ]
        },
        {
          name: "Growth Shop",
          price: "€16.999,–",
          desc: "Für etablierte Shops",
          features: [
            "bis zu 5.000 Produkte",
            "Advanced Integrations",
            "Multi-Payment Options",
            "Email Marketing Setup",
            "A/B Testing",
            "Analytics Dashboard",
            "6 Monate Support"
          ]
        },
        {
          name: "Enterprise Shop",
          price: "€29.999+",
          desc: "Große, komplexe Shops",
          features: [
            "Unbegrenzte Produkte",
            "Custom Features",
            "API Integrationen",
            "Multi-Sprache",
            "B2B Features",
            "Subscription Models",
            "1 Jahr Support"
          ]
        }
      ],
      popular: "Beliebt",
      request: "Anfragen",
      faqTitle: "E-Commerce FAQ",
      faqs: [
        {
          q: "Können Sie meinen bestehenden Shop migrieren?",
          a: "Ja! Wir migrieren von anderen Plattformen zu Shopify + Next.js ohne Daten- oder Ranking-Verlust. SEO-Redirects und 301er sind vorkonfiguriert."
        },
        {
          q: "Wie lange dauert der Shop-Launch?",
          a: "Je nach Umfang 8-16 Wochen. Ein einfacher Shop mit 100-500 Produkten 8-10 Wochen, komplexere mit 5000+ 12-16 Wochen."
        },
        {
          q: "Was kostet Shopify monatlich?",
          a: "Shopify selbst kostet ab €29/Monat (Basic Plan). Komplexere Shops nutzen den Growth Plan (€99/Monat) oder Advanced (€299+)."
        },
        {
          q: "Können Sie Zahlungsgateways integrieren?",
          a: "Ja, wir integrieren Stripe, PayPal, Klarna, Apple Pay, Google Pay und mehr. Die meisten Gateways sind innerhalb von Stunden live."
        },
        {
          q: "Wird der Shop für SEO optimiert?",
          a: "Absolut. Technisches SEO, Produktspezifische Meta-Tags, Strukturdaten, Sitemaps, Breadcrumbs – alles ist vorkonfiguriert für Google Shopping und organische Suche."
        }
      ],
      ctaTitle: "Ready für den Shop-Launch?",
      ctaDesc:
        "Lassen Sie uns Ihren Online-Shop bauen – mit Fokus auf Conversion, Performance und Wachstum.",
      ctaFooterPrimary: "Shop-Kostenvoranschlag",
      ctaFooterSecondary: "Zurück zur Startseite"
    },
    en: {
      heroBadge: "E-Commerce & Online Shops",
      heroTitle: "Shopify & Next.js stores built to sell",
      heroDesc:
        "High‑performance, conversion‑focused commerce. Shopify as the backend and Next.js as a lightning‑fast frontend — the perfect stack for e‑commerce.",
      ctaHeroPrimary: "Plan your shop",
      ctaHeroSecondary: "SEO for shops",
      benefitsTitle: "Why this stack for your shop?",
      benefitsSubtitle: "Shopify + Next.js = Maximum performance + full control",
      benefits: [
        {
          title: "Conversion‑focused",
          description:
            "Psychology‑driven design, optimized checkout flows, and social proof increase sales"
        },
        {
          title: "Shopify power",
          description: "Headless commerce with Shopify — scalable, maintainable, and extensible"
        },
        {
          title: "Payment integrations",
          description:
            "Stripe, PayPal, Klarna, Apple Pay — all key payment methods are supported"
        },
        {
          title: "Mobile‑first",
          description:
            "70% of e‑commerce happens on mobile — we build mobile‑first and conversion‑ready"
        },
        {
          title: "Performance",
          description:
            "Fast load times = higher rankings + better conversion + fewer bounces"
        },
        {
          title: "Scalable structure",
          description:
            "From startups with 100 SKUs to enterprise with 100,000+ products — built for growth"
        }
      ],
      featuresTitle: "All shop features included",
      features: [
        "Product‑specific meta tags & structured data",
        "Category & filter navigation",
        "Wishlist & comparison features",
        "Inventory management integration",
        "Automated email marketing",
        "Advanced analytics & attribution",
        "A/B testing for layouts",
        "Mobile wallet integration",
        "Multi‑currency support",
        "EU VAT compliance",
        "Abandoned cart recovery",
        "Product recommendation engine"
      ],
      techTitle: "E‑commerce tech stack",
      techSubtitle: "Market‑leading tools for scalable online shops",
      techStack: [
        "Next.js 14+",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Shopify API",
        "Stripe/Payments",
        "PostgreSQL",
        "Vercel",
        "Klaviyo",
        "Segment Analytics"
      ],
      useCasesTitle: "Shop types we build",
      useCases: [
        {
          title: "Fashion & lifestyle",
          description: "Visual‑first shops with lookbooks, size guides, and seasonal CMS",
          image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Tech & electronics",
          description: "Spec‑focused with comparison tables, reviews, and deep‑dives",
          image:
            "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Food & beverage",
          description: "Premium product visuals, recipe integration, subscription models",
          image:
            "https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "B2B / bulk",
          description: "Custom pricing, bulk orders, and partner APIs",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        }
      ],
      processTitle: "Shop development step‑by‑step",
      processSteps: [
        {
          title: "1. Shop strategy & audit",
          description:
            "We analyze your current shop (if any), competitors, and define KPIs like AOV, conversion rate, and CLV."
        },
        {
          title: "2. Shopify & CMS setup",
          description:
            "Shopify admin configuration, product structure, categories, and collections. Evergreen CMS for blog and landing pages."
        },
        {
          title: "3. Design & UX for conversion",
          description:
            "High‑quality designs with psychology focus: trust signals, social proof, urgency elements. Mobile‑first prototyping."
        },
        {
          title: "4. Development & integrations",
          description:
            "Next.js frontend with Shopify Storefront API, payment gateways, email marketing, analytics. Full‑stack commerce."
        },
        {
          title: "5. Launch & optimization",
          description:
            "Performance testing (LCP, CLS, FID), security audit, checkout optimization, A/B testing setup, GA4."
        },
        {
          title: "6. Growth phase",
          description:
            "Continuous A/B testing, heatmaps, CRO, email funnels, loyalty programs, and upsell strategies."
        }
      ],
      stats: [
        { label: "Online shops", value: "32+" },
        { label: "Avg. order growth", value: "+78%" },
        { label: "Cart abandonment reduction", value: "-35%" }
      ],
      pricingTitle: "Shop packages",
      pricingSubtitle: "Different sizes and requirements",
      pricing: [
        {
          name: "Starter Shop",
          price: "€8,999",
          desc: "For new e‑commerce",
          features: [
            "Up to 500 products",
            "Shopify + Next.js",
            "Basic integrations",
            "1 payment gateway",
            "Mobile optimized",
            "3 months support"
          ]
        },
        {
          name: "Growth Shop",
          price: "€16,999",
          desc: "For established shops",
          features: [
            "Up to 5,000 products",
            "Advanced integrations",
            "Multi‑payment options",
            "Email marketing setup",
            "A/B testing",
            "Analytics dashboard",
            "6 months support"
          ]
        },
        {
          name: "Enterprise Shop",
          price: "€29,999+",
          desc: "Large, complex shops",
          features: [
            "Unlimited products",
            "Custom features",
            "API integrations",
            "Multi‑language",
            "B2B features",
            "Subscription models",
            "1 year support"
          ]
        }
      ],
      popular: "Popular",
      request: "Request",
      faqTitle: "E‑commerce FAQ",
      faqs: [
        {
          q: "Can you migrate my existing shop?",
          a: "Yes! We migrate from other platforms to Shopify + Next.js without data or ranking loss. SEO redirects and 301s are pre‑configured."
        },
        {
          q: "How long does a shop launch take?",
          a: "Depending on scope, 8–16 weeks. Simple shops with 100–500 products take 8–10 weeks, larger ones 12–16 weeks."
        },
        {
          q: "How much does Shopify cost monthly?",
          a: "Shopify starts at €29/month (Basic). More complex shops use Growth (€99/month) or Advanced (€299+)."
        },
        {
          q: "Can you integrate payment gateways?",
          a: "Yes — Stripe, PayPal, Klarna, Apple Pay, Google Pay, and more. Most gateways go live within hours."
        },
        {
          q: "Is the shop SEO‑optimized?",
          a: "Absolutely. Technical SEO, product meta tags, structured data, sitemaps, breadcrumbs — all configured for Google Shopping and organic search."
        }
      ],
      ctaTitle: "Ready for launch?",
      ctaDesc:
        "Let’s build your online shop — focused on conversion, performance, and growth.",
      ctaFooterPrimary: "Get a shop quote",
      ctaFooterSecondary: "Back to home"
    },
    ar: {
      heroBadge: "التجارة الإلكترونية والمتاجر",
      heroTitle: "متاجر Shopify و Next.js مبنية للبيع",
      heroDesc: "حلول تجارة عالية الأداء تركز على التحويل. Shopify كخلفية و Next.js كواجهة فائقة السرعة — المجموعة المثالية للتجارة الإلكترونية.",
      ctaHeroPrimary: "خطط لمتجرك",
      ctaHeroSecondary: "SEO للمتاجر",
      benefitsTitle: "لماذا هذه المجموعة لمتجرك؟",
      benefitsSubtitle: "Shopify + Next.js = أقصى أداء + تحكم كامل",
      benefits: [
        { title: "التركيز على التحويل", description: "تصميم يحركه علم النفس، تدفقات دفع محسنة، والدليل الاجتماعي يزيد المبيعات" },
        { title: "قوة Shopify", description: "تجارة بلا رأس مع Shopify — قابلة للتوسع وقابلة للصيانة وقابلة للتمديد" },
        { title: "تكاملات الدفع", description: "Stripe، PayPal، Klarna، Apple Pay — كل طرق الدفع الرئيسية مدعومة" },
        { title: "الأولوية للجوال", description: "70% من التجارة الإلكترونية على الجوال — نبني بالجوال أولاً ونحول" },
        { title: "الأداء", description: "أوقات تحميل سريعة = ترتيب أعلى + تحويل أفضل + معدل ارتداد أقل" },
        { title: "بنية قابلة للتوسع", description: "من شركة ناشئة مع 100 SKU إلى مؤسسة مع 100,000+ منتج — مبني للنمو" }
      ],
      featuresTitle: "جميع ميزات المتجر المشمولة",
      features: [
        "علامات meta خاصة بالمنتج وبيانات منظمة",
        "التصفح بالفئات والفلاتر",
        "ميزات قائمة الرغبات والمقارنة",
        "تكامل إدارة المخزون",
        "التسويق الآلي عبر البريد الإلكتروني",
        "تحليلات متقدمة وإسناد",
        "اختبار A/B للتخطيطات",
        "تكامل المحفظة الجوالة",
        "دعم متعدد العملات",
        "الامتثال لضريبة القيمة المضافة الأوروبية",
        "استعادة عربة المشتريات المهجورة",
        "محرك توصيات المنتجات"
      ],
      techTitle: "مجموعة أدوات التجارة الإلكترونية",
      techSubtitle: "أدوات رائدة في السوق للمتاجر القابلة للتوسع",
      techStack: ["Next.js 14+", "React 18", "TypeScript", "Tailwind CSS", "Shopify API", "Stripe/Payments", "PostgreSQL", "Vercel", "Klaviyo", "Segment Analytics"],
      useCasesTitle: "أنواع المتاجر التي نبنيها",
      useCases: [
        { title: "الموضة ونمط الحياة", description: "متاجر بصرية أولاً مع كتب الأزياء، أدلة المقاسات، ونظام إدارة المحتوى الموسمي", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop" },
        { title: "التكنولوجيا والإلكترونيات", description: "التركيز على المواصفات مع جداول المقارنة، المراجعات، والتحليل التقني العميق", image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?q=80&w=1400&auto=format&fit=crop" },
        { title: "الأغذية والمشروبات", description: "صور منتجات عالية الجودة، تكامل الوصفات، نماذج الاشتراك", image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=1400&auto=format&fit=crop" },
        { title: "B2B / الجملة", description: "تسعير مخصص، طلبات الجملة، API لتكاملات الشركاء", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop" }
      ],
      processTitle: "تطوير المتجر خطوة بخطوة",
      processSteps: [
        { title: "1. استراتيجية ومراجعة المتجر", description: "نقوم بتحليل متجرك الحالي (إن وجد)، المنافسة، ونحدد مؤشرات الأداء الرئيسية مثل AOV، معدل التحويل، وقيمة عمر العميل." },
        { title: "2. إعداد Shopify و CMS", description: "تكوين إدارة Shopify، بنية بيانات المنتج، الفئات والمجموعات. نظام إدارة المحتوى للمدونة والصفحات المقصودة." },
        { title: "3. التصميم وتجربة المستخدم للتحويل", description: "تصاميم عالية الجودة مع التركيز على علم النفس: إشارات الثقة، الدليل الاجتماعي، عناصر الإلحاح. نماذج أولية للجوال أولاً." },
        { title: "4. التطوير والتكاملات", description: "واجهة Next.js مع Shopify Storefront API، بوابات الدفع، التسويق عبر البريد الإلكتروني، التحليلات. تجارة إلكترونية كاملة." },
        { title: "5. الإطلاق والتحسين", description: "اختبار الأداء (LCP, CLS, FID)، مراجعة الأمان، تحسين الدفع، إعداد اختبار A/B، Google Analytics 4." },
        { title: "6. مرحلة النمو", description: "اختبار A/B المستمر، خرائط الحرارة، تحسين معدل التحويل، قنوات البريد الإلكتروني، برامج الولاء واستراتيجيات البيع الإضافي." }
      ],
      stats: [{ label: "متاجر عبر الإنترنت", value: "32+" }, { label: "متوسط نمو الطلبات", value: "+78%" }, { label: "تقليل التخلي عن السلة", value: "-35%" }],
      pricingTitle: "حزم المتجر",
      pricingSubtitle: "أحجام ومتطلبات مختلفة",
      pricing: [
        { name: "متجر المبتدئين", price: "€8.999,–", desc: "للتجارة الإلكترونية الجديدة", features: ["حتى 500 منتج", "Shopify + Next.js", "تكاملات أساسية", "بوابة دفع واحدة", "محسّن للجوال", "3 أشهر دعم"] },
        { name: "متجر النمو", price: "€16.999,–", desc: "للمتاجر القائمة", features: ["حتى 5,000 منتج", "تكاملات متقدمة", "خيارات دفع متعددة", "إعداد التسويق عبر البريد الإلكتروني", "اختبار A/B", "لوحة التحليلات", "6 أشهر دعم"] },
        { name: "متجر المؤسسة", price: "€29.999+", desc: "متاجر كبيرة ومعقدة", features: ["منتجات غير محدودة", "ميزات مخصصة", "تكاملات API", "متعدد اللغات", "ميزات B2B", "نماذج الاشتراك", "سنة واحدة دعم"] }
      ],
      popular: "شائع",
      request: "طلب",
      faqTitle: "أسئلة التجارة الإلكترونية الشائعة",
      faqs: [
        { q: "هل يمكنك ترحيل متجري الحالي؟", a: "نعم! نحن نرحل من منصات أخرى إلى Shopify + Next.js دون فقدان البيانات أو الترتيب. إعادة توجيه SEO و 301 محددة مسبقاً." },
        { q: "كم من الوقت يستغرق إطلاق المتجر؟", a: "اعتماداً على النطاق، 8-16 أسبوعاً. المتاجر البسيطة مع 100-500 منتج تستغرق 8-10 أسابيع، والأكبر 12-16 أسبوعاً." },
        { q: "كم تكلفة Shopify شهرياً؟", a: "يبدأ Shopify من €29/شهر (الأساسي). المتاجر الأكثر تعقيداً تستخدم النمو (€99/شهر) أو المتقدم (€299+)." },
        { q: "هل يمكنك تكامل بوابات الدفع؟", a: "نعم — Stripe، PayPal، Klarna، Apple Pay، Google Pay، وأكثر. معظم البوابات تعمل في غضون ساعات." },
        { q: "هل المتجر محسّن لـ SEO؟", a: "بالتأكيد. SEO التقني، علامات meta للمنتجات، بيانات منظمة، خرائط الموقع، التنقل التفصيلي — كل شيء مكوّن لـ Google Shopping والبحث العضوي." }
      ],
      ctaTitle: "هل أنت مستعد للإطلاق؟",
      ctaDesc: "دعنا نبني متجرك عبر الإنترنت — بالتركيز على التحويل والأداء والنمو.",
      ctaFooterPrimary: "احصل على عرض أسعار المتجر",
      ctaFooterSecondary: "العودة إلى الصفحة الرئيسية"
    },
    ku: {
      heroBadge: "بازرگانی ئەلیکترۆنی و فرۆشگاکان",
      heroTitle: "فرۆشگای Shopify و Next.js بۆ فرۆشتن دروستکراو",
      heroDesc: "چارەسەرەکانی بازرگانی بەرز-ئاستی لەگەڵ تێپەڕاندنی دڵنیایی. Shopify وەک Backend و Next.js وەک Frontend ی زۆر خێرا — کۆمەڵەی تەواو بۆ بازرگانی ئەلیکترۆنی.",
      ctaHeroPrimary: "پلانی فرۆشگاکەت",
      ctaHeroSecondary: "SEO بۆ فرۆشگا",
      benefitsTitle: "بۆچی ئەم کۆمەڵەیە بۆ فرۆشگاکەت؟",
      benefitsSubtitle: "Shopify + Next.js = کارایی زۆر + کۆنترۆڵی تەواو",
      benefits: [
        { title: "تێپەڕاندنی دڵنیایی", description: "دیزاینی دەروونی، ڕێڕەوی پارەدانی باشکراو، و بەڵگەی کۆمەڵایەتی فرۆشتن زیاد دەکات" },
        { title: "هێزی Shopify", description: "بازرگانی بێسەر لەگەڵ Shopify — گەورەبوون، چاکردنەوە و فراوانکردن" },
        { title: "یەکگرتنی پارەدان", description: "Stripe، PayPal، Klarna، Apple Pay — هەموو ڕێگەی پارەدانی سەرەکی پشتگیری کراون" },
        { title: "یەکەمی مۆبایل", description: "70% لە بازرگانی ئەلیکترۆنی لەسەر مۆبایل — ئێمە یەکەم مۆبایل دروست دەکەین و دەگۆڕین" },
        { title: "کارایی", description: "کاتی بارکردنی خێرا = پلەی بەرزتر + گۆڕینی باشتر + ڕێژەی جێهێشتنی کەمتر" },
        { title: "پێکهاتەی گەورەکراو", description: "لە Startup لەگەڵ 100 SKU بۆ Enterprise لەگەڵ 100,000+ بەرهەم — دروستکراو بۆ گەشەکردن" }
      ],
      featuresTitle: "هەموو تایبەتمەندییەکانی فرۆشگا لەخۆگرتووە",
      features: [
        "تاگی meta ی تایبەت بە بەرهەم و داتای ڕێکخراو",
        "گەڕان بە پۆلەکان و فلتەر",
        "تایبەتمەندیی لیستی خواستەکان و بەراورد",
        "یەکگرتنی بەڕێوەبردنی کۆگا",
        "بازاڕگەری خۆکار بە ئیمەیڵ",
        "شیکاری پێشکەوتوو و دیاریکردن",
        "تاقیکردنەوەی A/B بۆ شێواز",
        "یەکگرتنی جزدانی مۆبایل",
        "پشتگیری چەند دراوەیەک",
        "ڕێکەوتنی باجی نرخی زیادکراوی ئەورووپا",
        "گەڕاندنەوەی سەبەتە وازهێنراوەکان",
        "مەکینەی پێشنیاری بەرهەم"
      ],
      techTitle: "کۆمەڵەی ئامرازی بازرگانی ئەلیکترۆنی",
      techSubtitle: "ئامرازی سەرکەوتوو لە بازاڕ بۆ فرۆشگای گەورەکراو",
      techStack: ["Next.js 14+", "React 18", "TypeScript", "Tailwind CSS", "Shopify API", "Stripe/Payments", "PostgreSQL", "Vercel", "Klaviyo", "Segment Analytics"],
      useCasesTitle: "جۆری فرۆشگایانی کە ئێمە دروست دەکەین",
      useCases: [
        { title: "مۆد و شێوازی ژیان", description: "فرۆشگای بینینی یەکەم لەگەڵ کتێبی سەیرکردن، ڕێنمایی قەبارە، و CMS ی وەرزی", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop" },
        { title: "تەکنەلۆژیا و ئەلیکترۆنیات", description: "تێپەڕینی تایبەتمەندی لەگەڵ خشتەی بەراورد، پێداچوونەوە، و تێپەڕینی تەکنیکی قووڵ", image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?q=80&w=1400&auto=format&fit=crop" },
        { title: "خواردن و خواردنەوە", description: "وێنەی بەرزی بەرهەم، یەکگرتنی ڕێچکە، مۆدێلی بەشداریکردن", image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=1400&auto=format&fit=crop" },
        { title: "B2B / کۆمەڵ", description: "نرخدانانی تایبەت، داواکاری کۆمەڵ، API بۆ یەکگرتنی هاوبەشەکان", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop" }
      ],
      processTitle: "گەشەپێدانی فرۆشگا هەنگاو بە هەنگاو",
      processSteps: [
        { title: "1. ستراتیژی و پێداچوونەوەی فرۆشگا", description: "ئێمە فرۆشگا ئێستاکەت شی دەکەینەوە (ئەگەر هەبێت)، ڕکابەری و دیاریکردنی KPI وەک AOV، ڕێژەی گۆڕین، و نرخی تەمەنی کارەباری." },
        { title: "2. پێکهاتەی Shopify و CMS", description: "شێوازی بەڕێوەبردنی Shopify، پێکهاتەی داتای بەرهەم، پۆلەکان و کۆمەڵەکان. CMS بۆ بلۆگ و لاپەڕەی فڕینە." },
        { title: "3. دیزاین و UX بۆ گۆڕین", description: "دیزاینی بەرز لەگەڵ تێپەڕینی دەروونی: نیشانەی متمانە، بەڵگەی کۆمەڵایەتی، هەنگاوی پەلە. نموونەی یەکەمی مۆبایل." },
        { title: "4. گەشەپێدان و یەکگرتنەکان", description: "Frontend ی Next.js لەگەڵ Shopify Storefront API، دەرگای پارەدان، بازاڕگەری ئیمەیڵ، شیکاری. بازرگانی ئەلیکترۆنی تەواو." },
        { title: "5. دەستپێکردن و باشکردن", description: "تاقیکردنەوەی کارایی (LCP, CLS, FID)، پێداچوونەوەی پاراستن، باشکردنی پارەدان، شێوازی تاقیکردنەوەی A/B، Google Analytics 4." },
        { title: "6. قۆناغی گەشەکردن", description: "تاقیکردنەوەی A/B ی بەردەوام، نەخشەی گەرما، باشکردنی ڕێژەی گۆڕین، کەناڵی ئیمەیڵ، بەرنامەی دڵسۆزی و ستراتیژیی فرۆشتنی زیادە." }
      ],
      stats: [{ label: "فرۆشگای سەرهێڵ", value: "32+" }, { label: "ناوەندی گەشەی داواکاری", value: "+78%" }, { label: "کەمکردنەوەی جێهێشتنی سەبەتە", value: "-35%" }],
      pricingTitle: "پاکێجی فرۆشگا",
      pricingSubtitle: "قەبارە و پێداویستیی جیاواز",
      pricing: [
        { name: "فرۆشگای دەستپێک", price: "€8.999,–", desc: "بۆ بازرگانی ئەلیکترۆنی نوێ", features: ["تا 500 بەرهەم", "Shopify + Next.js", "یەکگرتنی بنەڕەتی", "دەرگای پارەدانی یەک", "باشکراو بۆ مۆبایل", "3 مانگ پشتگیری"] },
        { name: "فرۆشگای گەشەکردن", price: "€16.999,–", desc: "بۆ فرۆشگای دامەزراو", features: ["تا 5,000 بەرهەم", "یەکگرتنی پێشکەوتوو", "هەڵبژاردەی پارەدانی چەند جۆر", "شێوازی بازاڕگەری ئیمەیڵ", "تاقیکردنەوەی A/B", "داشبۆردی شیکاری", "6 مانگ پشتگیری"] },
        { name: "فرۆشگای دامەزراوە", price: "€29.999+", desc: "فرۆشگای گەورە و ئاڵۆز", features: ["بەرهەمی سنووردار نەکراو", "تایبەتمەندیی تایبەت", "یەکگرتنی API", "چەند زمان", "تایبەتمەندیی B2B", "مۆدێلی بەشداریکردن", "یەک ساڵ پشتگیری"] }
      ],
      popular: "بەناوبانگ",
      request: "داواکاری",
      faqTitle: "پرسیارە باوەکانی بازرگانی ئەلیکترۆنی",
      faqs: [
        { q: "دەتوانیت فرۆشگا ئێستاکەم بگوێزیتەوە؟", a: "بەڵێ! ئێمە لە پلاتفۆرمەکانی تر بۆ Shopify + Next.js دەگوێزینەوە بەبێ لەدەستدانی داتا یان پلە. ڕاستکردنەوەی SEO و 301 پێشوەخت شێوازکراون." },
        { q: "چەندە کات دەوێت بۆ دەستپێکردنی فرۆشگا؟", a: "بەپێی مەودا، 8-16 هەفتە. فرۆشگای ساکار لەگەڵ 100-500 بەرهەم 8-10 هەفتە دەوێت، و گەورەتر 12-16 هەفتە." },
        { q: "Shopify مانگانە چەند دەبێت؟", a: "Shopify لە €29/مانگ دەستپێدەکات (بنەڕەتی). فرۆشگای ئاڵۆزتر گەشەکردن (€99/مانگ) یان پێشکەوتوو (€299+) بەکاردەهێنن." },
        { q: "دەتوانیت دەرگای پارەدان یەکبگرێتەوە؟", a: "بەڵێ — Stripe، PayPal، Klarna، Apple Pay، Google Pay، و زیاتر. زۆربەی دەرگاکان لە ماوەی کاتژمێرێکدا کار دەکەن." },
        { q: "ئایا فرۆشگاکە باشکراوە بۆ SEO؟", a: "بەدڵنیاییەوە. SEO ی تەکنیکی، تاگی meta ی بەرهەم، داتای ڕێکخراو، نەخشەی ماڵپەڕ، گەڕانی وردەکاری — هەموو شتێک شێوازکراو بۆ Google Shopping و گەڕانی ئۆرگانیک." }
      ],
      ctaTitle: "ئامادەیت بۆ دەستپێکردن؟",
      ctaDesc: "با فرۆشگای سەرهێڵت دروست بکەین — تێپەڕینی دڵنیایی، کارایی و گەشەکردن.",
      ctaFooterPrimary: "بەدەستهێنانی نرخی فرۆشگا",
      ctaFooterSecondary: "گەڕانەوە بۆ سەرەتا"
    }
  } as const;

  const t = content[language as keyof typeof content];

  const benefits = t.benefits;
  const features = t.features;
  const techStack = t.techStack;
  const useCases = t.useCases;

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50 px-3 py-1.5 text-xs sm:px-4 sm:py-2 uppercase tracking-[0.35em] text-brand-700">
              {t.heroBadge}
            </Reveal>
            <Reveal className="mb-6 space-y-6" delay={60}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#13294b] to-[#265396] bg-clip-text text-transparent">
                  {t.heroTitle}
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                {t.heroDesc}
              </p>
            </Reveal>

            <Reveal className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4" delay={120}>
              <Link
                href="/kontakt"
                className="w-full sm:w-auto rounded-full bg-[#13294b] px-8 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#265396] text-center"
              >
                {t.ctaHeroPrimary}
              </Link>
              <Link
                href="/leistungen/seo"
                className="w-full sm:w-auto rounded-full border border-brand-200 px-8 py-3 font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 text-center"
              >
                {t.ctaHeroSecondary}
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.benefitsTitle}
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                {t.benefitsSubtitle}
              </p>
            </Reveal>

            <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, idx) => (
                <Reveal
                  key={benefit.title}
                  className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  delay={idx * 60}
                >
                  <h3 className="mb-3 text-xl font-semibold text-[#13294b]">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.featuresTitle}
              </h2>
            </Reveal>

            <Reveal
              className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-10 md:p-16"
              delay={120}
            >
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                    <span className="font-medium text-slate-900">{feature}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.techTitle}
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                {t.techSubtitle}
              </p>
            </Reveal>

            <Reveal
              className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 md:p-16"
              delay={120}
            >
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {techStack.map((tech) => (
                  <div key={tech} className="flex items-center gap-3 rounded-lg sm:rounded-xl bg-slate-50 p-3 sm:p-4">
                    <div className="h-3 w-3 rounded-full bg-brand-500" />
                    <span className="font-medium text-slate-900">{tech}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.useCasesTitle}
              </h2>
            </Reveal>

            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
              {useCases.map((useCase, idx) => (
                <Reveal
                  key={useCase.title}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  delay={idx * 80}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      alt={useCase.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      height={480}
                      src={useCase.image}
                      width={720}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{useCase.title}</h3>
                    <p className="mt-2 text-slate-200">{useCase.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.processTitle}
              </h2>
            </Reveal>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {t.processSteps.map((step, idx) => (
                <Reveal
                  key={step.title}
                  className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8"
                  delay={idx * 80}
                >
                  <h3 className="mb-2 text-xl sm:text-2xl font-bold text-[#13294b]">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-slate-200 bg-gradient-to-r from-[#13294b] to-[#265396] px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-3">
              {t.stats.map((stat) => (
                <Reveal key={stat.label} className="text-center" delay={0}>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/80">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.pricingTitle}
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                {t.pricingSubtitle}
              </p>
            </Reveal>

            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
              {t.pricing.map((plan, idx) => (
                <Reveal
                  key={plan.name}
                  className="relative flex flex-col rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 transition hover:-translate-y-1"
                  delay={idx * 80}
                >
                  {idx === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs sm:px-4 font-semibold text-white">
                      {t.popular}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-[#13294b]">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{plan.desc}</p>
                  <p className="mt-6 text-4xl font-bold text-slate-900">{plan.price}</p>
                  <ul className="mt-6 grow space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="h-2 w-2 rounded-full bg-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full rounded-full bg-[#13294b] px-6 py-3 font-semibold text-white transition hover:bg-[#265396]">
                    {t.request}
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 sm:mb-16 text-center" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
                {t.faqTitle}
              </h2>
            </Reveal>

            <div className="grid gap-4 sm:gap-6 md:max-w-3xl md:mx-auto">
              {t.faqs.map((faq, idx) => (
                <Reveal
                  key={faq.q}
                  className="overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
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
        <section className="border-t border-slate-200 bg-gradient-to-r from-[#13294b] to-[#265396] px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal className="mb-6 sm:mb-8 space-y-3 sm:space-y-4" delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {t.ctaTitle}
              </h2>
              <p className="text-lg text-white/90">
                {t.ctaDesc}
              </p>
            </Reveal>

            <Reveal className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4" delay={120}>
              <Link
                href="/kontakt"
                className="w-full sm:w-auto rounded-full bg-white px-8 py-3 sm:py-4 font-semibold text-[#13294b] transition hover:-translate-y-0.5 text-center"
              >
                {t.ctaFooterPrimary}
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto rounded-full border border-white px-8 py-3 sm:py-4 font-semibold text-white transition hover:bg-white/20 text-center"
              >
                {t.ctaFooterSecondary}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { useLanguage } from "../../contexts/LanguageContext";

export default function UberUnsPage() {
  const { language } = useLanguage();

  const content = {
    de: {
      heroBadge: "Über Primewave IT Solution",
      heroTitle: "Wir entwickeln digitale Lösungen, die Ihr Business voranbringen",
      heroDesc: "Primewave IT Solution ist Ihr Partner für moderne Webentwicklung, UI/UX Design und SEO. Mit über 8 Jahren Erfahrung helfen wir Unternehmen, ihre digitale Präsenz zu stärken und messbare Ergebnisse zu erzielen.",
      
      missionTitle: "Unsere Mission",
      missionText1: "Wir glauben daran, dass großartige digitale Erlebnisse kein Luxus sein sollten. Unsere Mission ist es, Unternehmen jeder Größe mit modernsten Web-Technologien auszustatten und ihnen zu helfen, online erfolgreich zu sein.",
      missionText2: "Dabei setzen wir auf transparente Kommunikation, klare Prozesse und messbare Ergebnisse. Kein Marketing-Blabla – nur echte Lösungen, die funktionieren.",
      
      visionTitle: "Unsere Vision",
      visionText1: "Eine digitale Welt, in der Unternehmen nicht nur präsent sind, sondern wirklich verstanden, gefunden und geschätzt werden. Wo Websites nicht nur schön aussehen, sondern auch verkaufen. Wo Design nicht nur Ästhetik ist, sondern echte User-Probleme löst.",
      visionText2: "Wir wollen der bevorzugte Partner für Unternehmen werden, die digitale Exzellenz anstreben.",
      
      valuesTitle: "Unsere Werte",
      values: [
        {
          title: "Qualität vor Speed",
          description: "Wir liefern nur Code und Design, auf die wir stolz sind. Kein Quick & Dirty, sondern nachhaltige Lösungen."
        },
        {
          title: "Transparenz",
          description: "Klare Kommunikation, realistische Timelines und ehrliche Einschätzungen. Keine versteckten Kosten oder überraschenden Verzögerungen."
        },
        {
          title: "Kundenorientierung",
          description: "Ihr Erfolg ist unser Erfolg. Wir hören zu, verstehen Ihre Ziele und entwickeln Lösungen, die wirklich passen."
        },
        {
          title: "Innovation",
          description: "Wir bleiben am Puls der Zeit mit modernen Technologien wie Next.js, React, Python und Best Practices für Performance und SEO."
        },
        {
          title: "Messbare Ergebnisse",
          description: "Schöne Designs sind gut, aber Conversions sind besser. Wir fokussieren uns auf KPIs, die Ihr Business voranbringen."
        },
        {
          title: "Langfristige Partnerschaften",
          description: "Wir suchen keine One-Off-Projekte, sondern langfristige Beziehungen, in denen wir gemeinsam wachsen."
        }
      ],
      
      expertiseTitle: "Unsere Expertise",
      techStackTitle: "Technologie-Stack",
      techStack: [
        "Next.js & React für moderne Web-Apps",
        "TypeScript für sicheren, wartbaren Code",
        "Tailwind CSS für performantes Styling",
        "Python (Django, FastAPI) für Backend-Systeme",
        "Shopify & Headless E-Commerce",
        "PostgreSQL, MongoDB für Datenbanken",
        "Vercel, AWS für Hosting & Deployment"
      ],
      
      servicesTitle: "Services",
      services: [
        "Webdesign & Landing Pages",
        "E-Commerce & Onlineshops",
        "Web Applications mit Python",
        "UI/UX Design & Prototyping",
        "SEO & Performance-Optimierung",
        "Design Systems & Component Libraries",
        "API-Entwicklung & Integrationen"
      ],
      
      stats: [
        { label: "Jahre Erfahrung", value: "8+" },
        { label: "Erfolgreiche Projekte", value: "120+" },
        { label: "Zufriedene Kunden", value: "85+" },
        { label: "Ø Launch-Zeit", value: "6 Wochen" }
      ],
      
      ctaTitle: "Bereit, gemeinsam zu wachsen?",
      ctaDesc: "Lassen Sie uns über Ihr Projekt sprechen und herausfinden, wie wir Ihnen helfen können.",
      ctaButton: "Projekt besprechen",
      ctaBack: "Zurück zur Startseite"
    },
    en: {
      heroBadge: "About Primewave IT Solution",
      heroTitle: "We Build Digital Solutions That Drive Your Business Forward",
      heroDesc: "Primewave IT Solution is your partner for modern web development, UI/UX design, and SEO. With over 8 years of experience, we help companies strengthen their digital presence and achieve measurable results.",
      
      missionTitle: "Our Mission",
      missionText1: "We believe that great digital experiences shouldn't be a luxury. Our mission is to equip businesses of all sizes with cutting-edge web technologies and help them succeed online.",
      missionText2: "We rely on transparent communication, clear processes, and measurable results. No marketing talk – just real solutions that work.",
      
      visionTitle: "Our Vision",
      visionText1: "A digital world where companies aren't just present, but are truly understood, found, and appreciated. Where websites don't just look beautiful, but also convert. Where design isn't just aesthetics, but solves real user problems.",
      visionText2: "We want to become the preferred partner for companies striving for digital excellence.",
      
      valuesTitle: "Our Values",
      values: [
        {
          title: "Quality Over Speed",
          description: "We only deliver code and design we're proud of. No quick & dirty, but sustainable solutions."
        },
        {
          title: "Transparency",
          description: "Clear communication, realistic timelines, and honest assessments. No hidden costs or surprising delays."
        },
        {
          title: "Customer Focus",
          description: "Your success is our success. We listen, understand your goals, and develop solutions that truly fit."
        },
        {
          title: "Innovation",
          description: "We stay ahead with modern technologies like Next.js, React, Python, and best practices for performance and SEO."
        },
        {
          title: "Measurable Results",
          description: "Beautiful designs are good, but conversions are better. We focus on KPIs that drive your business forward."
        },
        {
          title: "Long-term Partnerships",
          description: "We're not looking for one-off projects, but long-term relationships where we grow together."
        }
      ],
      
      expertiseTitle: "Our Expertise",
      techStackTitle: "Technology Stack",
      techStack: [
        "Next.js & React for modern web apps",
        "TypeScript for secure, maintainable code",
        "Tailwind CSS for performant styling",
        "Python (Django, FastAPI) for backend systems",
        "Shopify & Headless E-Commerce",
        "PostgreSQL, MongoDB for databases",
        "Vercel, AWS for hosting & deployment"
      ],
      
      servicesTitle: "Services",
      services: [
        "Web Design & Landing Pages",
        "E-Commerce & Online Shops",
        "Web Applications with Python",
        "UI/UX Design & Prototyping",
        "SEO & Performance Optimization",
        "Design Systems & Component Libraries",
        "API Development & Integrations"
      ],
      
      stats: [
        { label: "Years Experience", value: "8+" },
        { label: "Successful Projects", value: "120+" },
        { label: "Happy Clients", value: "85+" },
        { label: "Avg Launch Time", value: "6 Weeks" }
      ],
      
      ctaTitle: "Ready to Grow Together?",
      ctaDesc: "Let's talk about your project and find out how we can help you.",
      ctaButton: "Discuss Project",
      ctaBack: "Back to Home"
    },
    ar: {
      heroBadge: "حول Primewave IT Solution",
      heroTitle: "نبني حلولاً رقمية تدفع عملك إلى الأمام",
      heroDesc: "Primewave IT Solution هو شريكك لتطوير الويب الحديث، وتصميم UI/UX، و SEO. مع أكثر من 8 سنوات من الخبرة، نساعد الشركات على تعزيز وجودها الرقمي وتحقيق نتائج قابلة للقياس.",
      
      missionTitle: "مهمتنا",
      missionText1: "نؤمن بأن التجارب الرقمية الرائعة لا ينبغي أن تكون رفاهية. مهمتنا هي تزويد الشركات من جميع الأحجام بأحدث تقنيات الويب ومساعدتها على النجاح عبر الإنترنت.",
      missionText2: "نعتمد على التواصل الشفاف، والعمليات الواضحة، والنتائج القابلة للقياس. لا حديث تسويقي - فقط حلول حقيقية تعمل.",
      
      visionTitle: "رؤيتنا",
      visionText1: "عالم رقمي حيث لا تكون الشركات موجودة فحسب، بل يتم فهمها والعثور عليها وتقديرها حقاً. حيث لا تبدو مواقع الويب جميلة فحسب، بل تحول أيضاً. حيث لا يكون التصميم مجرد جماليات، بل يحل مشاكل المستخدم الحقيقية.",
      visionText2: "نريد أن نصبح الشريك المفضل للشركات التي تسعى للتميز الرقمي.",
      
      valuesTitle: "قيمنا",
      values: [
        {
          title: "الجودة قبل السرعة",
          description: "نقدم فقط الكود والتصميم الذي نفتخر به. لا حلول سريعة ومتسخة، بل حلول مستدامة."
        },
        {
          title: "الشفافية",
          description: "تواصل واضح، جداول زمنية واقعية، وتقييمات صادقة. لا تكاليف خفية أو تأخيرات مفاجئة."
        },
        {
          title: "التركيز على العميل",
          description: "نجاحك هو نجاحنا. نستمع، نفهم أهدافك، ونطور حلولاً مناسبة حقاً."
        },
        {
          title: "الابتكار",
          description: "نبقى في الطليعة مع تقنيات حديثة مثل Next.js و React و Python وأفضل الممارسات للأداء و SEO."
        },
        {
          title: "نتائج قابلة للقياس",
          description: "التصميمات الجميلة جيدة، لكن التحويلات أفضل. نركز على مؤشرات الأداء الرئيسية التي تدفع عملك إلى الأمام."
        },
        {
          title: "شراكات طويلة الأمد",
          description: "لا نبحث عن مشاريع لمرة واحدة، بل علاقات طويلة الأمد ننمو فيها معاً."
        }
      ],
      
      expertiseTitle: "خبرتنا",
      techStackTitle: "مجموعة التكنولوجيا",
      techStack: [
        "Next.js و React لتطبيقات الويب الحديثة",
        "TypeScript لكود آمن وقابل للصيانة",
        "Tailwind CSS لتنسيق عالي الأداء",
        "Python (Django, FastAPI) لأنظمة الباك إند",
        "Shopify والتجارة الإلكترونية Headless",
        "PostgreSQL و MongoDB لقواعد البيانات",
        "Vercel و AWS للاستضافة والنشر"
      ],
      
      servicesTitle: "الخدمات",
      services: [
        "تصميم الويب والصفحات المقصودة",
        "التجارة الإلكترونية والمتاجر عبر الإنترنت",
        "تطبيقات الويب مع Python",
        "تصميم UI/UX والنماذج الأولية",
        "SEO وتحسين الأداء",
        "أنظمة التصميم ومكتبات المكونات",
        "تطوير API والتكاملات"
      ],
      
      stats: [
        { label: "سنوات الخبرة", value: "8+" },
        { label: "مشاريع ناجحة", value: "120+" },
        { label: "عملاء راضون", value: "85+" },
        { label: "متوسط وقت الإطلاق", value: "6 أسابيع" }
      ],
      
      ctaTitle: "هل أنت مستعد للنمو معاً؟",
      ctaDesc: "دعنا نتحدث عن مشروعك ونكتشف كيف يمكننا مساعدتك.",
      ctaButton: "ناقش المشروع",
      ctaBack: "العودة إلى الصفحة الرئيسية"
    },
    ku: {
      heroBadge: "دەربارەی Primewave IT Solution",
      heroTitle: "ئێمە چارەسەری دیجیتاڵ دروست دەکەین کە بازرگانیەکەت بەرەو پێش دەبات",
      heroDesc: "Primewave IT Solution هاوبەشەکەتە بۆ گەشەپێدانی وێبی نوێ، دیزاینی UI/UX، و SEO. لەگەڵ زیاتر لە 8 ساڵ ئەزموون، ئێمە یارمەتی کۆمپانیاکان دەدەین بۆ بەهێزکردنی ئامادەبوونی دیجیتاڵیان و گەیشتن بە ئەنجامی پێوان.",
      
      missionTitle: "ئەرکەکەمان",
      missionText1: "ئێمە باوەڕمان وایە کە ئەزموونە دیجیتاڵە گەورەکان نابێت لوکس بن. ئەرکەکەمان ئەوەیە کە بازرگانییەکانی هەموو قەبارەیەک بە نوێترین تەکنەلۆژیاکانی وێب چەکدار بکەین و یارمەتیان بدەین بۆ سەرکەوتن لە ئۆنلاین.",
      missionText2: "ئێمە پشت بە پەیوەندی ڕوون و پرۆسەی ڕوون و ئەنجامی پێوان دەبەستین. هیچ قسەی مارکێتینگ نییە - تەنها چارەسەری ڕاستەقینە کە کاردەکەن.",
      
      visionTitle: "دیدگامان",
      visionText1: "جیهانێکی دیجیتاڵ کە کۆمپانیاکان نەک تەنها ئامادەن، بەڵکو بەڕاستی تێدەگەن و دەدۆزرێنەوە و پێزانین دەکرێن. کە ماڵپەڕەکان نەک تەنها جوان دەردەکەون، بەڵکو گۆڕینیش دەکەن. کە دیزاین نەک تەنها جوانکاری بێت، بەڵکو کێشەی ڕاستەقینەی بەکارهێنەر چارەسەر بکات.",
      visionText2: "ئێمە دەمانەوێت ببینە هاوبەشی پەسەندکراو بۆ کۆمپانیاکان کە هەوڵدەدەن بۆ باشی دیجیتاڵ.",
      
      valuesTitle: "بەهاکانمان",
      values: [
        {
          title: "کوالێتی پێش خێرایی",
          description: "ئێمە تەنها ئەو کۆد و دیزاینە دەگەیەنین کە شانازی پێوە دەکەین. هیچ چارەسەری خێرا و پیس نییە، بەڵکو چارەسەری بەردەوام."
        },
        {
          title: "ڕوونی",
          description: "پەیوەندی ڕوون، کاتی ڕاستەقینە، و هەڵسەنگاندنی ڕاستگۆیانە. هیچ تێچووی شاراوە یان دواکەوتنی سەرسوڕهێنەر نییە."
        },
        {
          title: "سەرنج لەسەر کڕیار",
          description: "سەرکەوتنت سەرکەوتنمانە. ئێمە گوێدەگرین، ئامانجەکانت تێدەگەین، و چارەسەر گەشە پێدەدەین کە بەڕاستی گونجاون."
        },
        {
          title: "نوێکاری",
          description: "ئێمە لە پێشەوە دەمێنینەوە لەگەڵ تەکنەلۆژیای نوێ وەک Next.js و React و Python و باشترین پراکتیسەکان بۆ کارایی و SEO."
        },
        {
          title: "ئەنجامی پێوان",
          description: "دیزاینە جوانەکان باشن، بەڵام گۆڕینەکان باشترن. ئێمە سەرنج دەدەین بە KPIـەکان کە بازرگانیەکەت بەرەو پێش دەبەن."
        },
        {
          title: "هاوبەشی درێژخایەن",
          description: "ئێمە بەدوای پڕۆژەی یەک جار نین، بەڵکو پەیوەندیی درێژخایەن کە پێکەوە گەشە دەکەین."
        }
      ],
      
      expertiseTitle: "شارەزاییمان",
      techStackTitle: "کۆمەڵەی تەکنەلۆژیا",
      techStack: [
        "Next.js و React بۆ بەرنامەکانی وێبی نوێ",
        "TypeScript بۆ کۆدی سەلامەت و چاککردنەوەی",
        "Tailwind CSS بۆ ستایلی کاراوە",
        "Python (Django, FastAPI) بۆ سیستەمی پشتەوە",
        "Shopify و بازرگانی ئەلیکترۆنیی Headless",
        "PostgreSQL و MongoDB بۆ بنکەی دراوە",
        "Vercel و AWS بۆ میوانداری و بڵاوکردنەوە"
      ],
      
      servicesTitle: "خزمەتگوزارییەکان",
      services: [
        "دیزاینی وێب و لاپەڕەکانی فڕینە",
        "بازرگانی ئەلیکترۆنی و فرۆشگای ئۆنلاین",
        "بەرنامەکانی وێب لەگەڵ Python",
        "دیزاینی UI/UX و نموونەسازی",
        "SEO و باشکردنی کارایی",
        "سیستەمی دیزاین و کتێبخانەی پێکهاتە",
        "گەشەپێدانی API و یەکگرتن"
      ],
      
      stats: [
        { label: "ساڵی ئەزموون", value: "8+" },
        { label: "پڕۆژەی سەرکەوتوو", value: "120+" },
        { label: "کڕیاری کەیفخۆش", value: "85+" },
        { label: "کاتی ناوەندی دەستپێکردن", value: "6 هەفتە" }
      ],
      
      ctaTitle: "ئامادەیت بۆ گەشەکردنی پێکەوە؟",
      ctaDesc: "با لەبارەی پڕۆژەکەت بدوێین و بزانین چۆن دەتوانین یارمەتیت بدەین.",
      ctaButton: "پڕۆژە باس بکە",
      ctaBack: "گەڕانەوە بۆ سەرەتا"
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50 px-3 sm:px-4 py-1.5 sm:py-2 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.35em] text-brand-700">
              {t.heroBadge}
            </Reveal>
            <Reveal className="mb-4 sm:mb-6 space-y-4 sm:space-y-6" delay={60}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#13294b] to-[#265396] bg-clip-text text-transparent">
                  {t.heroTitle}
                </span>
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
                {t.heroDesc}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:gap-8 md:gap-12 md:grid-cols-2">
              <Reveal delay={0}>
                <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#13294b]">{t.missionTitle}</h2>
                <p className="mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed text-slate-600">
                  {t.missionText1}
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                  {t.missionText2}
                </p>
              </Reveal>

              <Reveal delay={120}>
                <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#13294b]">{t.visionTitle}</h2>
                <p className="mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed text-slate-600">
                  {t.visionText1}
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                  {t.visionText2}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-8 sm:mb-12 md:mb-16 text-center" delay={0}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#13294b]">
                {t.valuesTitle}
              </h2>
            </Reveal>

            <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {t.values.map((value, idx) => (
                <Reveal
                  key={value.title}
                  className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6"
                  delay={idx * 60}
                >
                  <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#13294b]">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">{value.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Expertise */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-8 sm:mb-12 md:mb-16 text-center" delay={0}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#13294b]">
                {t.expertiseTitle}
              </h2>
            </Reveal>

            <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
              <Reveal delay={0}>
                <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8">
                  <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-[#13294b]">{t.techStackTitle}</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {t.techStack.map((tech) => (
                      <div key={tech} className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                        <span className="text-sm sm:text-base text-slate-600">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8">
                  <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-[#13294b]">{t.servicesTitle}</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {t.services.map((service) => (
                      <div key={service} className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                        <span className="text-sm sm:text-base text-slate-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-slate-200 bg-gradient-to-r from-[#13294b] to-[#265396] px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4">
              {t.stats.map((stat) => (
                <Reveal key={stat.label} className="text-center" delay={0}>
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-slate-200 bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal className="mb-6 sm:mb-8 space-y-3 sm:space-y-4" delay={0}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#13294b]">
                {t.ctaTitle}
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                {t.ctaDesc}
              </p>
            </Reveal>

            <Reveal className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4" delay={120}>
              <Link
                href="/kontakt"
                className="w-full sm:w-auto rounded-full bg-[#13294b] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#265396]"
              >
                {t.ctaButton}
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto rounded-full border border-brand-200 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50"
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

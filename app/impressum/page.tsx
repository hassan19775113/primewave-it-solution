"use client";

import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { useLanguage } from "../../contexts/LanguageContext";

const content = {
  de: {
    title: "Impressum",
    section1: {
      title: "Angaben gemäß § 5 TMG",
      company: "Primewave IT Solution",
      address1: "Musterstraße 123",
      address2: "12345 Musterstadt",
      country: "Deutschland"
    },
    section2: {
      title: "Kontakt",
      phone: "Telefon: +49 (0) 123 456789",
      email: "E-Mail: info@primewave-it.de"
    },
    section3: {
      title: "Umsatzsteuer-ID",
      desc: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:",
      number: "DE123456789"
    },
    section4: {
      title: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
      name: "Max Mustermann",
      address1: "Musterstraße 123",
      address2: "12345 Musterstadt"
    },
    section5: {
      title: "EU-Streitschlichtung",
      text1: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
      text2: "Unsere E-Mail-Adresse finden Sie oben im Impressum."
    },
    section6: {
      title: "Verbraucherstreitbeilegung/Universalschlichtungsstelle",
      text: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
    },
    section7: {
      title: "Haftung für Inhalte",
      text1: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      text2: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."
    },
    section8: {
      title: "Haftung für Links",
      text1: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
      text2: "Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."
    },
    section9: {
      title: "Urheberrecht",
      text1: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
      text2: "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."
    },
    backButton: "Zurück zur Startseite"
  },
  en: {
    title: "Legal Notice",
    section1: {
      title: "Information according to § 5 TMG",
      company: "Primewave IT Solution",
      address1: "Musterstraße 123",
      address2: "12345 Musterstadt",
      country: "Germany"
    },
    section2: {
      title: "Contact",
      phone: "Phone: +49 (0) 123 456789",
      email: "Email: info@primewave-it.de"
    },
    section3: {
      title: "VAT ID",
      desc: "VAT identification number according to § 27 a VAT Tax Act:",
      number: "DE123456789"
    },
    section4: {
      title: "Responsible for content according to § 55 Abs. 2 RStV",
      name: "Max Mustermann",
      address1: "Musterstraße 123",
      address2: "12345 Musterstadt"
    },
    section5: {
      title: "EU Dispute Resolution",
      text1: "The European Commission provides a platform for online dispute resolution (ODR):",
      text2: "You can find our email address above in the legal notice."
    },
    section6: {
      title: "Consumer Dispute Resolution/Universal Arbitration Board",
      text: "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board."
    },
    section7: {
      title: "Liability for Content",
      text1: "As a service provider, we are responsible for our own content on these pages in accordance with § 7 para.1 TMG under general law. According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
      text2: "Obligations to remove or block the use of information in accordance with general laws remain unaffected by this. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. If we become aware of such legal violations, we will remove this content immediately."
    },
    section8: {
      title: "Liability for Links",
      text1: "Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.",
      text2: "The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is unreasonable without concrete evidence of a legal violation. If we become aware of legal violations, we will remove such links immediately."
    },
    section9: {
      title: "Copyright",
      text1: "The content and works created by the site operators on these pages are subject to German copyright law. The duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.",
      text2: "Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of legal violations, we will remove such content immediately."
    },
    backButton: "Back to Homepage"
  },
  ar: {
    title: "بيانات النشر",
    section1: { title: "معلومات وفقاً لـ § 5 TMG", company: "Primewave IT Solution", address1: "Musterstraße 123", address2: "12345 Musterstadt", country: "ألمانيا" },
    section2: { title: "اتصل", phone: "الهاتف: +49 (0) 123 456789", email: "البريد الإلكتروني: info@primewave-it.de" },
    section3: { title: "معرف ضريبة القيمة المضافة", desc: "رقم تعريف ضريبة القيمة المضافة وفقاً لـ § 27 a قانون ضريبة القيمة المضافة:", number: "DE123456789" },
    section4: { title: "المسؤول عن المحتوى وفقاً لـ § 55 Abs. 2 RStV", name: "Max Mustermann", address1: "Musterstraße 123", address2: "12345 Musterstadt" },
    section5: { title: "حل نزاعات الاتحاد الأوروبي", text1: "توفر المفوضية الأوروبية منصة لحل النزاعات عبر الإنترنت (ODR):", text2: "يمكنك العثور على عنوان بريدنا الإلكتروني أعلاه في بيانات النشر." },
    section6: { title: "حل نزاعات المستهلك", text: "نحن لسنا راغبين ولا ملزمين بالمشاركة في إجراءات حل النزاعات أمام مجلس تحكيم المستهلك." },
    section7: { title: "المسؤولية عن المحتوى", text1: "بصفتنا مزود خدمة، نحن مسؤولون عن محتوانا الخاص على هذه الصفحات.", text2: "تبقى الالتزامات بإزالة أو حظر استخدام المعلومات غير متأثرة بهذا." },
    section8: { title: "المسؤولية عن الروابط", text1: "يحتوي عرضنا على روابط لمواقع ويب خارجية تابعة لأطراف ثالثة ليس لدينا أي تأثير على محتواها.", text2: "تم فحص الصفحات المرتبطة بحثاً عن انتهاكات قانونية محتملة في وقت الربط." },
    section9: { title: "حقوق النشر", text1: "يخضع المحتوى والأعمال التي أنشأها مشغلو الموقع على هذه الصفحات لقانون حقوق النشر الألماني.", text2: "بقدر ما لم يتم إنشاء المحتوى على هذا الموقع من قبل المشغل، يتم احترام حقوق النشر للأطراف الثالثة." },
    backButton: "العودة إلى الصفحة الرئيسية"
  },
  ku: {
    title: "زانیاری بڵاوکردنەوە",
    section1: { title: "زانیاری بەپێی § 5 TMG", company: "Primewave IT Solution", address1: "Musterstraße 123", address2: "12345 Musterstadt", country: "ئەڵمانیا" },
    section2: { title: "پەیوەندی", phone: "تەلەفۆن: +49 (0) 123 456789", email: "ئیمەیڵ: info@primewave-it.de" },
    section3: { title: "ناسنامەی VAT", desc: "ژمارەی ناسنامەی VAT بەپێی § 27 a یاسای باجی VAT:", number: "DE123456789" },
    section4: { title: "بەرپرسیار بۆ ناوەڕۆک بەپێی § 55 Abs. 2 RStV", name: "Max Mustermann", address1: "Musterstraße 123", address2: "12345 Musterstadt" },
    section5: { title: "چارەسەری ناکۆکی یەکێتی ئەورووپا", text1: "کۆمسیۆنی ئەورووپی سەکۆیەک دابین دەکات بۆ چارەسەری ناکۆکی سەرهێڵ:", text2: "دەتوانیت ناونیشانی ئیمەیڵمان لە سەرەوە لە زانیاری بڵاوکردنەوەدا بدۆزیتەوە." },
    section6: { title: "چارەسەری ناکۆکی بەکاربەر", text: "ئێمە نە ئامادەین و نە پابەندین بە بەشداریکردن لە پرۆسەی چارەسەری ناکۆکی بەردەم دەستەی دادوەری بەکاربەر." },
    section7: { title: "بەرپرسیاریەتی بۆ ناوەڕۆک", text1: "وەک دابینکەری خزمەتگوزاری، ئێمە بەرپرسیارین بۆ ناوەڕۆکی خۆمان لەسەر ئەم لاپەڕانە.", text2: "پابەندبوونەکان بۆ لابردن یان بلۆککردنی بەکارهێنانی زانیاری بە یاسا گشتییەکان دەمێنێتەوە." },
    section8: { title: "بەرپرسیاریەتی بۆ بەستەرەکان", text1: "پێشکەشکردنەکەمان بەستەری ماڵپەڕی دەرەکی لایەنی سێیەم لەخۆدەگرێت کە هیچ کاریگەریمان لەسەر ناوەڕۆکیان نییە.", text2: "لاپەڕە بەستراوەکان پشکنرا بۆ پێشێلکاریی یاسایی ئەگەری لە کاتی بەستنەوەدا." },
    section9: { title: "مافی لەبەرگرتنەوە", text1: "ناوەڕۆک و کارەکان کە لەلایەن بەڕێوەبەرانی ماڵپەڕەوە دروست کراون لەسەر ئەم لاپەڕانە بەژێر یاسای مافی لەبەرگرتنەوەی ئەڵمانین.", text2: "بەو ڕادەیەی کە ناوەڕۆک لەسەر ئەم ماڵپەڕە لەلایەن بەڕێوەبەرەوە دروست نەکرابێت، ڕێز بۆ مافەکانی لەبەرگرتنەوەی لایەنی سێیەم دەگیرێت." },
    backButton: "گەڕانەوە بۆ سەرەتا"
  }
};

export default function ImpressumPage() {
  const { language } = useLanguage();
  const t = content[language as keyof typeof content];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294b]">
          {t.title}
        </h1>

        <div className="space-y-6 sm:space-y-8 text-slate-700">
          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section1.title}
            </h2>
            <p className="mb-2 font-medium">{t.section1.company}</p>
            <p>{t.section1.address1}</p>
            <p>{t.section1.address2}</p>
            <p>{t.section1.country}</p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section2.title}
            </h2>
            <p className="text-sm sm:text-base">{t.section2.phone}</p>
            <p className="text-sm sm:text-base">{t.section2.email}</p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section3.title}
            </h2>
            <p className="text-sm sm:text-base">
              {t.section3.desc}
            </p>
            <p className="text-sm sm:text-base">{t.section3.number}</p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section4.title}
            </h2>
            <p>{t.section4.name}</p>
            <p>{t.section4.address1}</p>
            <p>{t.section4.address2}</p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section5.title}
            </h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section5.text1}
            </p>
            <p className="mb-3 sm:mb-4 break-words">
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-brand-600 hover:text-brand-700 underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-sm sm:text-base">{t.section5.text2}</p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section6.title}
            </h2>
            <p className="text-sm sm:text-base">
              {t.section6.text}
            </p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section7.title}
            </h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section7.text1}
            </p>
            <p className="text-sm sm:text-base">
              {t.section7.text2}
            </p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section8.title}
            </h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section8.text1}
            </p>
            <p className="text-sm sm:text-base">
              {t.section8.text2}
            </p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section9.title}
            </h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section9.text1}
            </p>
            <p className="text-sm sm:text-base">
              {t.section9.text2}
            </p>
          </section>
        </div>

        <div className="mt-8 sm:mt-12">
          <Link
            href="/"
            className="inline-flex w-full sm:w-auto rounded-full border border-brand-200 px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-50 justify-center"
          >
            {t.backButton}
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

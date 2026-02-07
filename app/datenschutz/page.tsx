"use client";

import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { useLanguage } from "../../contexts/LanguageContext";

const content = {
  de: {
    title: "Datenschutzerklärung",
    section1: {
      title: "1. Datenschutz auf einen Blick",
      subtitle: "Allgemeine Hinweise",
      text: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung."
    },
    section2: {
      title: "2. Datenerfassung auf dieser Website",
      q1: {
        title: "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
        text: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt 'Hinweis zur verantwortlichen Stelle' in dieser Datenschutzerklärung entnehmen."
      },
      q2: {
        title: "Wie erfassen wir Ihre Daten?",
        text1: "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
        text2: "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten."
      },
      q3: {
        title: "Wofür nutzen wir Ihre Daten?",
        text: "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden."
      },
      q4: {
        title: "Welche Rechte haben Sie bezüglich Ihrer Daten?",
        text1: "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
        text2: "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden."
      }
    },
    section3: {
      title: "3. Hosting",
      text: "Wir hosten die Inhalte unserer Website bei folgendem Anbieter:",
      subtitle: "Externes Hosting",
      text1: "Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.",
      text2: "Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).",
      text3: "Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen."
    },
    section4: {
      title: "4. Allgemeine Hinweise und Pflichtinformationen",
      subtitle: "Datenschutz",
      text1: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
      text2: "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.",
      text3: "Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich."
    },
    section5: {
      title: "5. Hinweis zur verantwortlichen Stelle",
      text1: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
      company: "Primewave IT Solution",
      address1: "Musterstraße 123",
      address2: "12345 Musterstadt",
      phone: "Telefon: +49 (0) 123 456789",
      email: "E-Mail: info@primewave-it.de",
      text2: "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet."
    },
    section6: {
      title: "6. Speicherdauer",
      text: "Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe."
    },
    section7: {
      title: "7. Kontaktformular",
      text1: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
      text2: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.",
      text3: "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt."
    },
    section8: {
      title: "8. Anfrage per E-Mail, Telefon oder Telefax",
      text1: "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
      text2: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.",
      text3: "Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt."
    },
    section9: {
      title: "9. SSL- bzw. TLS-Verschlüsselung",
      text1: "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 'http://' auf 'https://' wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
      text2: "Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden."
    },
    section10: {
      title: "10. Ihre Rechte",
      text: "Sie haben nach der DSGVO verschiedene Rechte. Nähere Informationen ergeben sich aus Art. 15 bis 21 DSGVO:",
      rights: [
        "Recht auf Auskunft (Art. 15 DSGVO)",
        "Recht auf Berichtigung (Art. 16 DSGVO)",
        "Recht auf Löschung (Art. 17 DSGVO)",
        "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
        "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
        "Widerspruchsrecht (Art. 21 DSGVO)",
        "Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)"
      ]
    },
    backButton: "Zurück zur Startseite"
  },
  en: {
    title: "Privacy Policy",
    section1: {
      title: "1. Privacy at a Glance",
      subtitle: "General Information",
      text: "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified. For detailed information on data protection, please refer to our privacy policy listed below this text."
    },
    section2: {
      title: "2. Data Collection on This Website",
      q1: {
        title: "Who is responsible for data collection on this website?",
        text: "Data processing on this website is carried out by the website operator. You can find the operator's contact details in the section 'Information about the responsible party' in this privacy policy."
      },
      q2: {
        title: "How do we collect your data?",
        text1: "Your data is collected, on the one hand, by you providing it to us. This may be data that you enter in a contact form, for example.",
        text2: "Other data is collected automatically or with your consent when you visit the website by our IT systems. This is mainly technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website."
      },
      q3: {
        title: "What do we use your data for?",
        text: "Some of the data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior."
      },
      q4: {
        title: "What rights do you have regarding your data?",
        text1: "You have the right at any time to receive information free of charge about the origin, recipient, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to file a complaint with the competent supervisory authority.",
        text2: "For this and other questions regarding data protection, you can contact us at any time."
      }
    },
    section3: {
      title: "3. Hosting",
      text: "We host the content of our website with the following provider:",
      subtitle: "External Hosting",
      text1: "This website is hosted externally. The personal data collected on this website is stored on the servers of the host(s). This may include IP addresses, contact requests, meta and communication data, contract data, contact data, names, website accesses, and other data generated via a website.",
      text2: "External hosting is carried out for the purpose of contract fulfillment towards our potential and existing customers (Art. 6 Para. 1 lit. b GDPR) and in the interest of secure, fast, and efficient provision of our online offer by a professional provider (Art. 6 Para. 1 lit. f GDPR).",
      text3: "Our host(s) will only process your data to the extent necessary to fulfill their service obligations and follow our instructions regarding this data."
    },
    section4: {
      title: "4. General Information and Mandatory Information",
      subtitle: "Data Protection",
      text1: "The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.",
      text2: "When you use this website, various personal data is collected. Personal data is data by which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.",
      text3: "We would like to point out that data transmission over the Internet (e.g., when communicating by email) may have security vulnerabilities. Complete protection of data from access by third parties is not possible."
    },
    section5: {
      title: "5. Information about the Responsible Party",
      text1: "The responsible party for data processing on this website is:",
      company: "Primewave IT Solution",
      address1: "Musterstraße 123",
      address2: "12345 Musterstadt",
      phone: "Phone: +49 (0) 123 456789",
      email: "Email: info@primewave-it.de",
      text2: "The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data (e.g., names, email addresses, etc.)."
    },
    section6: {
      title: "6. Storage Duration",
      text: "Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you make a legitimate request for deletion or revoke consent for data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial retention periods); in the latter case, deletion will take place after these reasons cease to apply."
    },
    section7: {
      title: "7. Contact Form",
      text1: "If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.",
      text2: "The processing of this data is based on Art. 6 Para. 1 lit. b GDPR if your inquiry is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries directed to us (Art. 6 Para. 1 lit. f GDPR) or on your consent (Art. 6 Para. 1 lit. a GDPR) if this was requested.",
      text3: "The data you enter in the contact form will remain with us until you request deletion, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after completion of your inquiry). Mandatory legal provisions – especially retention periods – remain unaffected."
    },
    section8: {
      title: "8. Inquiry by Email, Phone, or Fax",
      text1: "If you contact us by email, phone, or fax, your inquiry, including all resulting personal data (name, inquiry), will be stored and processed by us for the purpose of handling your request. We do not pass on this data without your consent.",
      text2: "The processing of this data is based on Art. 6 Para. 1 lit. b GDPR if your inquiry is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries directed to us (Art. 6 Para. 1 lit. f GDPR) or on your consent (Art. 6 Para. 1 lit. a GDPR) if this was requested.",
      text3: "The data sent to us via contact requests will remain with us until you request deletion, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after completion of your request). Mandatory legal provisions – especially legal retention periods – remain unaffected."
    },
    section9: {
      title: "9. SSL or TLS Encryption",
      text1: "For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from 'http://' to 'https://' and by the lock symbol in your browser line.",
      text2: "When SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties."
    },
    section10: {
      title: "10. Your Rights",
      text: "Under the GDPR, you have various rights. More detailed information can be found in Art. 15 to 21 GDPR:",
      rights: [
        "Right to information (Art. 15 GDPR)",
        "Right to rectification (Art. 16 GDPR)",
        "Right to erasure (Art. 17 GDPR)",
        "Right to restriction of processing (Art. 18 GDPR)",
        "Right to data portability (Art. 20 GDPR)",
        "Right to object (Art. 21 GDPR)",
        "Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)"
      ]
    },
    backButton: "Back to Homepage"
  }
};

export default function DatenschutzPage() {
  const { language } = useLanguage();
  const t = content[language];

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
            <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#13294b]">
              {t.section1.subtitle}
            </h3>
            <p className="mb-4">
              {t.section1.text}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[#13294b]">
              {t.section2.title}
            </h2>
            <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#13294b]">
              {t.section2.q1.title}
            </h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section2.q1.text}
            </p>

            <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#13294b]">
              {t.section2.q2.title}
            </h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section2.q2.text1}
            </p>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section2.q2.text2}
            </p>

            <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#13294b]">
              {t.section2.q3.title}
            </h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section2.q3.text}
            </p>

            <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#13294b]">
              {t.section2.q4.title}
            </h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section2.q4.text1}
            </p>
            <p className="text-sm sm:text-base">
              {t.section2.q4.text2}
            </p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section3.title}
            </h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section3.text}
            </p>
            <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#13294b]">
              {t.section3.subtitle}
            </h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section3.text1}
            </p>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section3.text2}
            </p>
            <p className="text-sm sm:text-base">
              {t.section3.text3}
            </p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section4.title}
            </h2>
            <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#13294b]">
              {t.section4.subtitle}
            </h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section4.text1}
            </p>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section4.text2}
            </p>
            <p className="text-sm sm:text-base">
              {t.section4.text3}
            </p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section5.title}
            </h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section5.text1}
            </p>
            <p className="mb-2 text-sm sm:text-base">{t.section5.company}</p>
            <p className="text-sm sm:text-base">{t.section5.address1}</p>
            <p className="text-sm sm:text-base">{t.section5.address2}</p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base">{t.section5.phone}</p>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">{t.section5.email}</p>
            <p className="text-sm sm:text-base">
              {t.section5.text2}
            </p>
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
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section7.text2}
            </p>
            <p className="text-sm sm:text-base">
              {t.section7.text3}
            </p>
          </section>

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section8.title}
            </h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section8.text1}
            </p>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section8.text2}
            </p>
            <p className="text-sm sm:text-base">
              {t.section8.text3}
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

          <section>
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-[#13294b]">
              {t.section10.title}
            </h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              {t.section10.text}
            </p>
            <ul className="mb-3 sm:mb-4 ml-4 sm:ml-6 list-disc space-y-1.5 sm:space-y-2">
              {t.section10.rights.map((right, idx) => (
                <li key={idx} className="text-sm sm:text-base">{right}</li>
              ))}
            </ul>
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

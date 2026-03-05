# 🤖 KI-Chatbot Implementierungsplan
## Primewave IT Solution

---

## 📋 1. Anforderungsanalyse & Ziele

### Hauptzweck des Chatbots

- [ ] **Lead-Generierung** - Kontaktdaten sammeln, Projektanfragen qualifizieren
- [ ] **Customer Support** - FAQ beantworten, 24/7 Verfügbarkeit
- [ ] **Sales Assistant** - Produktberatung, Preisauskunft
- [ ] **Mehrsprachigkeit** - DE/EN/AR/KU Support (wichtig für unsere 4-Sprachen-Website!)

### Erwartete Features

- ✅ Natürliche Konversation über unsere Services (SEO, Webentwicklung, UI/UX)
- ✅ Weiterleitung komplexer Anfragen an echte Mitarbeiter
- ✅ Integration mit Kontaktformular
- ✅ Terminvereinbarung
- ✅ Analytics (welche Fragen werden gestellt?)

---

## 🛠️ 2. Technologie-Optionen

### Option A: OpenAI GPT Integration ⭐ (Empfohlen)

**Vorteile:**
- ✅ Beste Sprachqualität
- ✅ Mehrsprachig out-of-the-box
- ✅ Anpassbar durch Custom Instructions
- ✅ Kontext über unsere Services

**Tech-Stack:**
```
Frontend:  React Component mit Streaming
Backend:   Next.js API Route (/api/chat)
KI:        OpenAI GPT-4o-mini (günstig) oder GPT-4
Kosten:    ~$0.15-0.60 pro 1000 Nachrichten
```

**Geschätzte monatliche Kosten:**
- GPT-4o-mini: €20-50/Monat (500-1000 Chats)
- GPT-4: €100-200/Monat (bessere Qualität)

---

### Option B: Open-Source Lösung (Llama, Mistral)

**Vorteile:**
- ✅ Keine API-Kosten
- ✅ Volle Kontrolle über Daten
- ❌ Komplexere Infrastruktur (eigener Server/GPU)
- ❌ Qualität etwas niedriger als GPT-4

**Tech-Stack:**
```
Backend:   Python FastAPI + Ollama/llama.cpp
Frontend:  React Component
Hosting:   VPS oder Cloud GPU (€50-150/Monat)
```

---

### Option C: Fertige SaaS-Lösung

**Anbieter:**
- **Tawk.to** - Kostenlos, einfach, begrenzte KI-Features
- **Crisp** - €25/Monat, gute Automation
- **Intercom** - €99+/Monat, Enterprise-Features
- **Drift** - €2500+/Jahr, Sales-fokussiert

**Vorteile:**
- ✅ Schnell integrierbar (1 Tag)
- ✅ Support-Dashboard inklusive
- ❌ Monatliche Kosten
- ❌ Weniger Anpassungsmöglichkeiten

---

## 🏗️ 3. Empfohlene Architektur (OpenAI)

```
┌─────────────────────────────────────────────────────┐
│  Frontend (React Component)                         │
│  - Chat-Widget (floating button rechts unten)       │
│  - Message History mit Scroll                       │
│  - Typing Indicator & Animations                    │
│  - Multilingual UI (DE/EN/AR/KU)                    │
│  - RTL Support für AR/KU                            │
└─────────────────┬───────────────────────────────────┘
                  │
                  │ POST /api/chat
                  │ { messages, language }
                  ↓
┌─────────────────────────────────────────────────────┐
│  Next.js API Route (/app/api/chat/route.ts)        │
│  - Rate Limiting (10 req/min pro IP)               │
│  - Context Injection (Firmeninfos)                 │
│  - Language Detection & Switching                  │
│  - Error Handling & Logging                        │
└─────────────────┬───────────────────────────────────┘
                  │
                  │ OpenAI API Call
                  │ with System Prompt
                  ↓
┌─────────────────────────────────────────────────────┐
│  OpenAI GPT-4o-mini                                 │
│  - System Prompt mit Firmenkontext                  │
│  - Function Calling für:                            │
│    • Kontaktformular öffnen                         │
│    • Termin vereinbaren                             │
│    • Email an Team senden                           │
└─────────────────────────────────────────────────────┘
```

---

## 📝 4. Implementierungsschritte

### Phase 1: Setup & Grundfunktion (2-3 Tage)

**Tag 1: Backend Setup**
1. OpenAI API Key besorgen (https://platform.openai.com/)
2. Environment Variable `.env.local` einrichten:
   ```
   OPENAI_API_KEY=sk-...
   ```
3. OpenAI SDK installieren:
   ```bash
   npm install openai
   ```
4. API Route erstellen: `app/api/chat/route.ts`
5. System Prompt mit Firmeninfos erstellen

**Tag 2: Frontend Component**
6. ChatBot Component erstellen: `components/ChatBot/ChatBot.tsx`
7. Chat-UI mit Tailwind CSS
8. Message History & State Management
9. API-Integration (fetch zu /api/chat)

**Tag 3: Testing & Debugging**
10. Erste Tests mit echten Fragen
11. Error Handling verbessern
12. Loading States & UX

---

### Phase 2: Features & Integration (3-4 Tage)

**Tag 4: Mehrsprachigkeit**
13. Automatische Spracherkennung aus LanguageContext
14. System Prompts für alle 4 Sprachen (DE/EN/AR/KU)
15. UI-Texte übersetzen

**Tag 5: Lead Capture**
16. Function Calling für Kontaktformular
17. Email-Benachrichtigung bei Anfragen (mit Resend oder Nodemailer)
18. Lead-Daten in Datenbank speichern (optional)

**Tag 6: Sicherheit & Performance**
19. Rate Limiting implementieren
20. Input Validation
21. Response Caching für häufige Fragen
22. Token-Limits überwachen

**Tag 7: Advanced Features**
23. Chat-History speichern (localStorage)
24. Session Management
25. "Zurück zu vorheriger Frage" Feature

---

### Phase 3: Design & UX (2 Tage)

**Tag 8: Visuelles Design**
26. Chat-Widget Design passend zum Branding (#13294b, #265396)
27. Smooth Animations (Framer Motion)
28. Custom Avatar/Icon
29. Sound Notifications (optional)

**Tag 9: Mobile & Accessibility**
30. Mobile Optimierung (Touch-friendly)
31. RTL-Support für Arabisch/Kurdisch
32. Keyboard Navigation
33. Screen Reader Support

---

### Phase 4: Testing & Launch (1-2 Tage)

**Tag 10: QA Testing**
34. Testing in allen 4 Sprachen
35. Edge Cases testen (lange Nachrichten, errors, etc.)
36. Verschiedene Devices & Browser

**Tag 11: Analytics & Launch**
37. Tracking Setup (welche Fragen werden gestellt?)
38. A/B Testing verschiedener System Prompts
39. Dokumentation für Team
40. Production Deployment

---

## 📁 5. Dateistruktur

```
primewave-it-solution/
├── components/
│   └── ChatBot/
│       ├── ChatBot.tsx              # Haupt-Component mit State
│       ├── ChatMessage.tsx          # Einzelne Nachricht (User/Bot)
│       ├── ChatInput.tsx            # Input-Feld mit Send-Button
│       ├── ChatHeader.tsx           # Header mit Minimize/Close
│       ├── ChatWindow.tsx           # Message Container
│       ├── FloatingButton.tsx       # Floating Chat Button
│       └── useChatBot.ts            # Custom Hook für Logic
│
├── app/api/
│   └── chat/
│       └── route.ts                 # OpenAI API Integration
│
├── lib/
│   ├── openai.ts                    # OpenAI Client Setup
│   ├── chatPrompts.ts               # System Prompts (4 Sprachen)
│   └── rateLimit.ts                 # Rate Limiting Logic
│
├── contexts/
│   └── ChatContext.tsx              # Global Chat State (optional)
│
├── types/
│   └── chat.ts                      # TypeScript Interfaces
│
└── .env.local
    └── OPENAI_API_KEY=sk-...
```

---

## 💬 6. System Prompt Beispiele

### Deutsch
```typescript
const systemPromptDE = `Du bist der KI-Assistent von Primewave IT Solution.

ÜBER UNS:
- Firma: Primewave IT Solution
- Standort: Deutschland
- Erfahrung: 8+ Jahre in Web-Development

UNSERE SERVICES:
1. SEO & Online-Marketing
   - Technisches SEO
   - Content-SEO
   - Local SEO
   - Google Ads

2. Webentwicklung
   - Next.js & React Websites
   - E-Commerce (Shopify + Next.js)
   - Python Web-Apps
   - Progressive Web Apps (PWA)

3. UI/UX Design
   - User Research
   - Figma Design
   - Design Systems
   - Usability Testing

DEINE AUFGABEN:
✅ Beantworte Fragen zu unseren Services
✅ Qualifiziere Leads (Budget, Timeline, konkrete Anforderungen)
✅ Bei echtem Interesse: Frage nach Email für persönliches Angebot
✅ Weise auf relevante Service-Seiten hin
✅ Erkläre technische Konzepte einfach

WICHTIGE REGELN:
❌ Nenne KEINE konkreten Preise (nur Preisspannen: "ab €X")
❌ Mache keine Versprechen über Timelines ohne Details
❌ Sei nicht zu verkaufsaggressiv
✅ Sei professionell aber freundlich
✅ Nutze maximal 2-3 Sätze pro Antwort
✅ Bei komplexen Fragen: Schlage Beratungsgespräch vor

KONTAKT-TRIGGER:
Wenn User sagt: "Ich möchte ein Angebot", "Kontakt aufnehmen", "Projekt besprechen"
→ Antworte: "Gerne! Ich leite Sie zu unserem Kontaktformular weiter."
→ Nutze function "openContactForm"

BEISPIEL-KONVERSATION:
User: "Was kostet eine Website?"
Bot: "Die Kosten variieren je nach Umfang. Eine einfache Website startet ab €4.999, komplexere Projekte bei €9.999+. Wofür genau interessieren Sie sich?"

User: "Ich brauche einen Onlineshop"
Bot: "Perfekt! Wir entwickeln Onlineshops mit Shopify + Next.js. Wie viele Produkte planen Sie, und haben Sie bereits ein Design?"
`;
```

### English
```typescript
const systemPromptEN = `You are the AI assistant for Primewave IT Solution.

ABOUT US:
- Company: Primewave IT Solution
- Location: Germany
- Experience: 8+ years in web development

OUR SERVICES:
1. SEO & Online Marketing
2. Web Development (Next.js, React, Python)
3. UI/UX Design
4. E-Commerce Solutions

YOUR TASKS:
✅ Answer questions about our services
✅ Qualify leads (budget, timeline, requirements)
✅ When there's genuine interest: Ask for email to send a quote
✅ Point to relevant service pages
✅ Explain technical concepts simply

RULES:
❌ Don't mention specific prices (only ranges: "starting from €X")
❌ Don't promise timelines without details
❌ Don't be too sales-aggressive
✅ Be professional but friendly
✅ Keep responses to 2-3 sentences max
✅ For complex questions: Suggest a consultation call

CONTACT TRIGGERS:
When user says: "I want a quote", "Contact", "Discuss project"
→ Reply: "Great! I'll direct you to our contact form."
→ Use function "openContactForm"
`;
```

### عربي (Arabic)
```typescript
const systemPromptAR = `أنت المساعد الذكي لشركة Primewave IT Solution.

عن الشركة:
- الاسم: Primewave IT Solution
- الموقع: ألمانيا
- الخبرة: أكثر من 8 سنوات في تطوير الويب

خدماتنا:
1. SEO والتسويق الرقمي
2. تطوير المواقع (Next.js، React، Python)
3. تصميم UI/UX
4. حلول التجارة الإلكترونية

مهامك:
✅ أجب عن الأسئلة حول خدماتنا
✅ تأهيل العملاء المحتملين (الميزانية، الجدول الزمني)
✅ عند الاهتمام الحقيقي: اطلب البريد الإلكتروني لإرسال عرض
✅ كن محترفاً ودوداً
✅ استخدم 2-3 جمل كحد أقصى للإجابة

قواعد:
❌ لا تذكر أسعاراً محددة
✅ اقترح مكالمة استشارية للأسئلة المعقدة
`;
```

### کوردی (Kurdish)
```typescript
const systemPromptKU = `تۆ یاریدەدەری AI ی کۆمپانیای Primewave IT Solution یت.

دەربارەی ئێمە:
- ناو: Primewave IT Solution
- شوێن: ئەڵمانیا
- ئەزموون: ٨+ ساڵ لە گەشەپێدانی وێب

خزمەتگوزاریەکانمان:
1. SEO و مارکێتینگی دیجیتاڵ
2. گەشەپێدانی وێب (Next.js، React، Python)
3. دیزاینی UI/UX
4. چارەسەرەکانی بازرگانی ئەلیکترۆنی

ئەرکەکانت:
✅ وەڵامی پرسیارەکان بدەوە
✅ پشکنینی کڕیارە ئەگەرییەکان
✅ پیشەیی و دۆستانە بە
✅ بەکارهێنانی 2-3 ڕستە بۆ هەر وەڵامێک

یاساکان:
❌ نرخی دیاریکراو مەڵێ
✅ پێشنیاری گفتوگۆی ڕاوێژکاری بکە
`;
```

---

## 🎨 7. UI/UX Design Spezifikationen

### Floating Button
```tsx
Position: Fixed bottom-right (20px vom Rand)
Size: 60px × 60px
Colors: 
  - Background: #265396 (Brand Blue)
  - Icon: White
  - Hover: #13294b (Dark Blue)
Animation: Pulse effect mit box-shadow
Badge: Notification Badge für neue Messages
```

### Chat Window
```tsx
Size: 
  - Desktop: 400px × 600px
  - Mobile: Fullscreen
Position: Bottom-right corner
Border-radius: 16px
Shadow: 0 10px 40px rgba(0,0,0,0.15)
```

### Messages
```tsx
User Messages:
  - Background: #265396
  - Text: White
  - Align: Right
  - Border-radius: 18px 18px 4px 18px

Bot Messages:
  - Background: #f1f5f9
  - Text: #1e293b
  - Align: Left
  - Border-radius: 18px 18px 18px 4px

Timestamp: Small gray text below
Avatar: Bot icon für Bot-Messages
```

### Animations
```tsx
Message appear: Slide-in from bottom + fade
Typing indicator: 3 bouncing dots
Button hover: Scale(1.05) + shadow
Window open/close: Slide + fade
```

---

## 📊 8. Analytics & Tracking

### Metriken zu tracken:
- ✅ Anzahl Chats pro Tag/Woche/Monat
- ✅ Durchschnittliche Nachrichten pro Chat
- ✅ Häufigste Fragen/Themen
- ✅ Conversion Rate (Chat → Lead)
- ✅ Sprachen-Verteilung
- ✅ Abbruchrate (wann User abspringt)
- ✅ Response Zeit (API Latency)

### Tools:
- **Google Analytics 4** - Custom Events
- **Vercel Analytics** - Performance
- **Eigene DB** - Chat-Logs (optional, DSGVO beachten!)

### Events Beispiele:
```typescript
// Chat gestartet
gtag('event', 'chat_started', {
  language: 'de'
});

// Lead generiert
gtag('event', 'chat_lead', {
  source: 'chatbot',
  language: 'de'
});

// FAQ beantwortet
gtag('event', 'chat_faq', {
  question_category: 'pricing'
});
```

---

## 💰 9. Kosten-Übersicht

### Option A: OpenAI (Empfohlen)

**Einmalig:**
- Entwicklung: Intern (deine Zeit)
- Keine Setup-Gebühren

**Monatlich:**
- GPT-4o-mini: €20-50 (für ~1000 Chats)
- GPT-4: €100-200 (bessere Qualität)
- Hosting: €0 (in Next.js/Vercel inkludiert)

**Jährlich:**
- ~€240-600 (GPT-4o-mini)
- ~€1.200-2.400 (GPT-4)

---

### Option B: Open-Source

**Einmalig:**
- Server Setup: 2-3 Tage Extra-Arbeit
- GPU-Server: einmalig €0

**Monatlich:**
- VPS mit GPU: €80-150
- Oder Cloud GPU: €100-300 (AWS/GCP)

**Jährlich:**
- ~€960-3.600

---

### Option C: SaaS

**Monatlich:**
- Tawk.to: €0 (begrenzt)
- Crisp: €25
- Intercom: €99+
- Drift: €200+

**Jährlich:**
- €0-2.400+

---

## 🚀 10. Empfohlene Roadmap

### Woche 1: MVP (Minimum Viable Product)
**Ziel:** Funktionierender Chatbot auf Deutsch

- [ ] OpenAI API Setup
- [ ] Basis-Component mit Chat-UI
- [ ] API Route mit System Prompt
- [ ] Floating Button
- [ ] Testing mit 10 Standard-Fragen

**Deliverable:** Chatbot live auf Website (nur DE)

---

### Woche 2: Mehrsprachigkeit
**Ziel:** Alle 4 Sprachen Support

- [ ] EN/AR/KU System Prompts
- [ ] Automatische Sprach-Detection
- [ ] UI-Texte übersetzen
- [ ] RTL-Support für AR/KU
- [ ] Testing in allen Sprachen

**Deliverable:** Multi-lingual Chatbot

---

### Woche 3: Lead-Generierung
**Ziel:** Email-Erfassung & Notifications

- [ ] Contact Form Integration
- [ ] Function Calling für Lead-Capture
- [ ] Email-Benachrichtigungen
- [ ] Chat-History Speicherung
- [ ] Analytics Integration

**Deliverable:** Lead-generierende Features

---

### Woche 4: Optimierung
**Ziel:** Performance & User Experience

- [ ] A/B Testing verschiedener Prompts
- [ ] Response-Zeit optimieren
- [ ] Caching für häufige Fragen
- [ ] Mobile UX verbessern
- [ ] Dokumentation

**Deliverable:** Produktions-reifer Chatbot

---

## ✅ 11. Checkliste vor Launch

### Technical
- [ ] OpenAI API Key in Production (.env)
- [ ] Rate Limiting aktiv (verhindert Missbrauch)
- [ ] Error Handling für API-Ausfälle
- [ ] Loading States & Error Messages
- [ ] Browser-Kompatibilität (Chrome, Safari, Firefox)
- [ ] Mobile Responsive

### Content
- [ ] System Prompts für alle 4 Sprachen finalisiert
- [ ] FAQ-Datenbank aufgebaut (20+ häufige Fragen)
- [ ] Fallback-Antworten für unbekannte Fragen
- [ ] Kontakt-Trigger definiert
- [ ] Legal Disclaimer (KI-Assistent, keine rechtsverbindliche Beratung)

### UX/Design
- [ ] Chat-Window Design passt zu Website-Branding
- [ ] Animationen smooth & nicht störend
- [ ] Chat-History funktioniert
- [ ] Copy-Paste von Code/Links möglich
- [ ] Emoji-Support (optional)

### Legal/Privacy
- [ ] DSGVO-konform (keine PII ohne Consent speichern)
- [ ] Cookie-Banner Update (wenn Chat-History in Cookies)
- [ ] Datenschutzerklärung Update
- [ ] Impressum: KI-Chatbot erwähnen

### Analytics
- [ ] Google Analytics Events eingerichtet
- [ ] Vercel Analytics für Performance
- [ ] Error Logging (z.B. Sentry)
- [ ] Dashboard für Chat-Statistiken

---

## 🔧 12. Technische Anforderungen

### Dependencies zu installieren:
```bash
npm install openai              # OpenAI SDK
npm install @vercel/analytics   # Analytics (falls Vercel)
npm install framer-motion       # Animations
npm install react-hot-toast     # Notifications
npm install @headlessui/react   # UI Components
npm install lucide-react        # Icons
```

### Environment Variables (.env.local):
```bash
OPENAI_API_KEY=sk-proj-...your-key...
NEXT_PUBLIC_CHATBOT_ENABLED=true
CHATBOT_RATE_LIMIT=10
RESEND_API_KEY=re_...your-key...  # Für Email-Notifications
```

### TypeScript Types:
```typescript
// types/chat.ts
export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  language?: 'de' | 'en' | 'ar' | 'ku';
}

export interface ChatSession {
  id: string;
  messages: Message[];
  language: 'de' | 'en' | 'ar' | 'ku';
  createdAt: Date;
  leadCaptured?: boolean;
}
```

---

## 📞 13. Support & Maintenance

### Nach Launch:
**Monat 1-2: Intensive Überwachung**
- Täglich: Chat-Logs durchsehen
- Wöchentlich: Häufigste Fragen analysieren
- Prompt Optimierungen basierend auf echten Konversationen
- Bug-Fixes

**Ab Monat 3: Routinebetrieb**
- Wöchentlich: Analytics Review
- Monatlich: Prompt Updates
- Quarterly: A/B Testing neuer Features

### Wartungsaufwand:
- **0-2h/Woche:** Monitoring & kleine Anpassungen
- **4-6h/Quartal:** Größere Updates & Optimierungen

---

## 🎯 14. Erfolgs-Metriken (KPIs)

### Ziele definieren:

**Monat 1-3:**
- [ ] 100+ Chat-Sessions
- [ ] 20+ Leads generiert
- [ ] 4.5+ User Satisfaction (1-5)
- [ ] <3% Error Rate

**Monat 4-6:**
- [ ] 300+ Chat-Sessions
- [ ] 60+ Leads
- [ ] 30% Chat → Lead Conversion
- [ ] <5 Sek. Avg Response Time

**Jahr 1:**
- [ ] 2000+ Chat-Sessions
- [ ] 400+ qualifizierte Leads
- [ ] 15+ neue Projekte aus Chatbot
- [ ] ROI: 3-5x (Leads → Projekte)

---

## 🔐 15. Sicherheit & Datenschutz

### DSGVO-Compliance:
- ✅ **Keine PII speichern** ohne explizite Zustimmung
- ✅ **Chat-History** nur im Browser (localStorage), nicht Server
- ✅ **IP-Adressen** nur für Rate-Limiting, nicht langfristig speichern
- ✅ **OpenAI:** Nutze Zero Data Retention Policy
- ✅ **Cookie-Banner** updaten wenn nötig

### OpenAI Data Retention:
```typescript
// In API Route - Data not used for training
const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: messages,
  // OpenAI nutzt Daten NICHT für Training
  // https://platform.openai.com/docs/models/default-usage-policies-by-endpoint
});
```

### Rate Limiting:
```typescript
// lib/rateLimit.ts
const limits = new Map<string, number[]>();

export function rateLimit(ip: string, limit = 10, window = 60000) {
  const now = Date.now();
  const timestamps = limits.get(ip) || [];
  
  // Alte Requests entfernen
  const recent = timestamps.filter(t => now - t < window);
  
  if (recent.length >= limit) {
    throw new Error('Rate limit exceeded');
  }
  
  recent.push(now);
  limits.set(ip, recent);
}
```

---

## 🚦 16. Nächste Schritte - Entscheidungen

### Bitte entscheiden:

1. **Technologie-Wahl:**
   - [ ] Option A: OpenAI GPT-4o-mini (empfohlen)
   - [ ] Option B: Open-Source (Llama/Mistral)
   - [ ] Option C: SaaS-Lösung (Tawk.to/Crisp)

2. **Budget:**
   - Monatlich: €____
   - Einmalig: €____

3. **Zeitrahmen:**
   - Wann soll Launch sein? __________
   - Wie viele Stunden/Woche? __________

4. **Features Priorität:**
   - [ ] **Must-Have:** Basis-Chat in DE/EN
   - [ ] **Should-Have:** AR/KU Support
   - [ ] **Could-Have:** Lead-Capture mit Email
   - [ ] **Nice-to-Have:** Terminbuchung

5. **OpenAI API:**
   - Hast du bereits einen Account? Ja/Nein
   - API Key vorhanden? Ja/Nein

---

## 📚 17. Ressourcen & Links

### Dokumentation:
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [React Chat UI Patterns](https://ui.shadcn.com/)

### Inspiration:
- [Intercom Chatbot](https://www.intercom.com/)
- [ChatGPT UI](https://chat.openai.com/)
- [Vercel AI Chatbot Template](https://vercel.com/templates/next.js/ai-chatbot)

### Tools:
- [Figma Chat UI Kit](https://www.figma.com/community/file/1234567890)
- [Framer Motion Animations](https://www.framer.com/motion/)
- [React Hot Toast](https://react-hot-toast.com/)

---

## 📋 18. FAQ - Häufige Fragen

**Q: Wie teuer ist OpenAI wirklich?**
A: GPT-4o-mini kostet ~$0.15 pro 1M Input-Tokens. Ein typischer Chat (10 Nachrichten) = ~2000 Tokens = $0.0003. Also: 1000 Chats ≈ $0.30. Sehr günstig!

**Q: Kann der Bot auch Termine buchen?**
A: Ja! Mit Function Calling kann er Calendly/Google Calendar integrieren. Braucht aber Extra-Entwicklung.

**Q: Was passiert wenn OpenAI ausfällt?**
A: Wir zeigen Fallback-Message: "Der Chat ist momentan nicht verfügbar. Bitte nutze unser Kontaktformular."

**Q: Speichert ihr meine Chat-Daten?**
A: Nur im Browser (localStorage). Server speichert nichts dauerhaft (DSGVO).

**Q: Kann der Bot auch auf Social Media antworten?**
A: Nein, nur auf der Website. Aber technisch möglich (mit extra API-Integration).

---

**Bereit zum Start? Gib mir Bescheid welche Option du wählst! 🚀**

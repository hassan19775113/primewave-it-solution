# Primewave IT Solution – Modern Business Website

Professionelle Business-Website für IT-Dienstleistungen, entwickelt mit Next.js 14 (App Router), React 18, TypeScript und Tailwind CSS. Vollständig bilingual (Deutsch/Englisch) mit funktionierendem Kontaktformular.

## ✨ Features

- 🌐 **Bilingual**: Vollständige Unterstützung für Deutsch und Englisch
- 📧 **Funktionierendes Kontaktformular**: Integration mit Resend für E-Mail-Versand
- ⚡ **Performance**: Server-Side Rendering mit Next.js 14
- 🎨 **Modernes Design**: Responsive Design mit Tailwind CSS
- 🔍 **SEO-Optimiert**: Statisch generierte Seiten für beste Performance
- 📱 **Mobile-First**: Vollständig responsive für alle Displaygrößen (320px - 1440px+)
- 🍔 **Mobile Navigation**: Hamburger-Menu mit smooth Animationen
- ✨ **Animated Dropdown**: 800ms Top-to-Bottom Animation für Webentwicklung-Menu
- 🎭 **Smooth Animations**: Optimierte Hover-Effekte und Transitions
- 🌈 **Glassmorphism**: Moderne backdrop-blur Effekte im Design

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **E-Mail**: Resend
- **Deployment**: Vercel

## 📄 Seiten

- **Home**: Übersichtsseite mit Services
- **Leistungen**:
  - Website-Entwicklung
  - UI/UX Design
  - Python Web Apps
  - Online Shop
  - SEO & Growth
- **Technologien**: Tech-Stack-Übersicht
- **Über uns**: Firmeninfo
- **Kontakt**: Funktionierendes Kontaktformular
- **Impressum & Datenschutz**: Rechtliche Seiten

## 🚀 Lokale Entwicklung

### Voraussetzungen

- Node.js 18+ installiert
- npm oder yarn Package Manager

### Installation

1. Repository klonen:
```bash
git clone https://github.com/hassan19775113/primewave-it-solution.git
cd primewave-it-solution
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Environment Variables einrichten:
```bash
# .env.example nach .env.local kopieren
cp .env.example .env.local
```

4. Resend API Key konfigurieren:
   - Gehe zu [Resend](https://resend.com) und erstelle einen kostenlosen Account
   - Erstelle einen neuen API Key
   - Füge den Key in `.env.local` ein:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   CONTACT_EMAIL=deine@email.de
   ```

5. Dev-Server starten:
```bash
npm run dev
```

6. Im Browser öffnen:
```
http://localhost:3000
```

## ⚙️ Environment Variables

Das Projekt benötigt folgende Environment Variables:

| Variable | Beschreibung | Beispiel | Erforderlich |
|----------|--------------|----------|--------------|
| `RESEND_API_KEY` | API Key von Resend für E-Mail-Versand | `re_xxx...` | Ja |
| `CONTACT_EMAIL` | Empfänger-Adresse für Kontaktformular | `info@firma.de` | Nein* |

*Fallback: `hassan19775113@outlook.com`

### Für Vercel Deployment:
1. Gehe zu Projekt-Settings → Environment Variables
2. Füge `RESEND_API_KEY` und `CONTACT_EMAIL` hinzu
3. Wähle alle Environments (Production, Preview, Development)
4. Redeploy das Projekt

## 📧 E-Mail-Konfiguration

### Resend Setup (Empfohlen für Production)

1. **Account erstellen**: [resend.com/signup](https://resend.com/signup)
2. **Domain verifizieren** (optional, für Production):
   - Gehe zu Domains → Add Domain
   - Füge deine Domain hinzu und folge den DNS-Anweisungen
3. **API Key erstellen**:
   - Settings → API Keys → Create API Key
   - Kopiere den Key in `.env.local`
4. **Sender-Adresse** in `app/api/contact/route.ts` anpassen:
   ```typescript
   from: "Primewave <kontakt@deine-domain.de>"
   ```

**Wichtig**: Im Development kannst du `onboarding@resend.dev` nutzen (100 E-Mails/Tag gratis).

### Alternative: EmailJS (Client-Side)

Falls du keine Server-Side-Lösung willst, kannst du auch EmailJS verwenden:
- Keine Environment Variables nötig
- Funktioniert komplett im Browser
- 200 E-Mails/Monat gratis

## 🌐 Deployment auf Vercel

### Automatisches Deployment

1. **Repository zu GitHub pushen** (bereits erledigt ✓)

2. **Vercel Account**: [vercel.com/signup](https://vercel.com/signup)

3. **Neues Projekt**: 
   - Click "Add New Project"
   - Import `hassan19775113/primewave-it-solution`

4. **Environment Variables in Vercel setzen**:
   - Settings → Environment Variables
   - Füge hinzu:
     - `RESEND_API_KEY` = Dein Resend API Key
     - `CONTACT_EMAIL` = Deine Empfänger-E-Mail
   - Environments: Production, Preview, Development

5. **Deploy**: 
   - Click "Deploy"
   - Fertig in ~2 Minuten! 🎉

### Manuelles Deployment

```bash
# Vercel CLI installieren
npm install -g vercel

# Deployment starten
vercel

# Production Deployment
vercel --prod
```

## 🔧 Build & Scripts

```bash
# Development Server
npm run dev

# Production Build
npm run build

# Production Server lokal testen
npm run start

# Linting
npm run lint
```

## 🌍 Sprachunterstützung

Die Website unterstützt vollständig **Deutsch** und **Englisch**:

- Sprachwechsel über Globe-Icon im Header
- State-Management via React Context
- Alle Seiten vollständig übersetzt
- SEO-freundliche URLs (keine /de/ oder /en/ Prefixes)

### Sprache ändern (Entwickler)

Die Übersetzungen befinden sich direkt in den Page-Komponenten als `content`-Objekte:

```typescript
const content = {
  de: {
    title: "Deutscher Titel",
    // ...
  },
  en: {
    title: "English Title",
    // ...
  }
};
```

## 📁 Projektstruktur

```
primewave-it-solution/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   └── contact/          # Kontaktformular API
│   ├── leistungen/           # Service-Seiten
│   ├── kontakt/              # Kontakt-Seite
│   ├── uber-uns/             # Über-uns-Seite
│   ├── impressum/            # Impressum
│   ├── datenschutz/          # Datenschutz
│   └── page.tsx              # Homepage
├── components/               # React Components
│   ├── SiteHeader.tsx        # Navigation
│   ├── SiteFooter.tsx        # Footer
│   ├── Reveal.tsx            # Animation Component
│   └── ClientProviders.tsx   # Context Providers
├── contexts/                 # React Contexts
│   └── LanguageContext.tsx   # Sprachverwaltung
├── public/                   # Statische Assets
└── .env.example              # Environment Variables Template
```

## 🎨 Styling

- **Tailwind CSS**: Utility-First CSS Framework
- **Custom Colors**: Brand-Farben in `tailwind.config.ts`
- **Responsive**: Mobile-First-Ansatz
- **Dark Mode**: Vorbereitet (aktuell nicht aktiv)

## 📈 Performance

Die Website ist für maximale Performance optimiert:

- ✅ Server-Side Rendering (SSR)
- ✅ Statisch generierte Seiten
- ✅ Optimierte Images (Next.js Image)
- ✅ Code-Splitting
- ✅ Tree-Shaking
- ✅ ~87 KB First Load JS

## 🤝 Contributing

Contributions sind willkommen! Bitte erstelle einen Pull Request oder öffne ein Issue.

## 📚 Dokumentation

Für detaillierte Entwicklungs-Dokumentation, siehe [ENTWICKLUNG.md](ENTWICKLUNG.md):
- Vollständige Feature-Übersicht
- Deployment-Anleitung
- Konfigurationsdetails
- Code-Struktur und Kommentare
- Testing-Prozeduren
- Bekannte Probleme und Lösungen
- Changelog

## 📝 License

© 2024 Primewave IT Solution. Alle Rechte vorbehalten.

## 📝 Lizenz

Privates Projekt - Alle Rechte vorbehalten.

## 📞 Kontakt

**Primewave IT Solution**
- 🌐 Website: [In Production]
- 📧 E-Mail: info@primewave-it.de
- 💼 GitHub: [@hassan19775113](https://github.com/hassan19775113)

---

**Entwickelt mit ❤️ und Next.js**

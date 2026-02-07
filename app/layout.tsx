import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { ClientProviders } from "../components/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://primewave-it-solution.vercel.app"),
  title: {
    default: "Primewave IT Solution | Webdesign, Webentwicklung & Web Applications",
    template: "%s | Primewave IT Solution"
  },
  description:
    "Primewave IT Solution gestaltet moderne Websites und maßgeschneiderte Web-Applications für Unternehmen. Webdesign, SEO, E-Commerce & Python Apps.",
  keywords: [
    "Webdesign",
    "Webentwicklung",
    "Web Applications",
    "Next.js Entwicklung",
    "E-Commerce",
    "SEO",
    "Webagentur",
    "IT Agentur"
  ],
  authors: [{ name: "Primewave IT Solution" }],
  creator: "Primewave IT Solution",
  publisher: "Primewave IT Solution",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://primewave-it-solution.vercel.app",
    siteName: "Primewave IT Solution",
    title: "Primewave IT Solution | Webdesign & Webentwicklung",
    description: "Moderne Websites und Web-Applications für Ihr Unternehmen",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Primewave IT Solution"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Primewave IT Solution | Webdesign & Webentwicklung",
    description: "Moderne Websites und Web-Applications für Ihr Unternehmen",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&h=630&auto=format&fit=crop"
    ]
  },
  alternates: {
    canonical: "https://primewave-it-solution.vercel.app"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}

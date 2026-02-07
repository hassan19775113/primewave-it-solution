import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "../components/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Primewave IT Solution | Webdesign & Web Applications",
  description:
    "Primewave IT Solution gestaltet moderne Websites und maßgeschneiderte Web-Applications für Unternehmen, die sichtbar wachsen wollen."
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

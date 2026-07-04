import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/projects";
import { LanguageProvider } from "@/components/LanguageProvider";
import { NavBar } from "@/components/NavBar";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Cambia por tu dominio real (o define NEXT_PUBLIC_SITE_URL en el deploy).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tudominio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.role.es}`,
  description: profile.intro.es,
  openGraph: {
    title: `${profile.name} — ${profile.role.es}`,
    description: profile.intro.es,
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role.es}`,
    description: profile.intro.es,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geist.variable} ${jetbrains.variable}`}>
      <body className="relative min-h-screen antialiased">
        <LanguageProvider>
          <NavBar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

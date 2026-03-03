import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://florinluca.ro"),
  title: {
    default: "Smoooth SRL — Operare & administrare pensiuni",
    template: "%s | Smoooth SRL",
  },
  description:
    "Smoooth SRL operează și administrează pensiuni/vile turistice: standardizare, digitalizare, livrare premium pentru leisure și corporate. Pilot 30–60 zile + KPI clari.",
  applicationName: "Smoooth SRL",
  authors: [{ name: "Smoooth SRL" }],
  creator: "Smoooth SRL",
  publisher: "Smoooth SRL",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://florinluca.ro/",
    siteName: "Smoooth SRL",
    title: "Smoooth SRL — Operare & administrare pensiuni",
    description:
      "Operare modernă pentru locații turistice: procese, digitalizare, experiență premium și creștere măsurabilă. Pilot 30–60 zile + KPI clari.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Smoooth SRL — operare & administrare pensiuni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smoooth SRL — Operare & administrare pensiuni",
    description:
      "Operare modernă pentru locații turistice: procese, digitalizare, experiență premium și creștere măsurabilă.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`bg-neutral-950 text-neutral-50 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

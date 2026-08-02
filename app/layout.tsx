import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { site } from "@/content/site";

import "./globals.css";

// Self-hosted by next/font — no external request, no layout shift.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // next-themes sets the class before paint; suppress the expected
      // server/client mismatch on <html> only.
      suppressHydrationWarning
      // Opts smooth scrolling out of route transitions, keeping it for
      // in-page TOC anchors only.
      data-scroll-behavior="smooth"
      className={`${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            <Header />
            <main>{children}</main>
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}

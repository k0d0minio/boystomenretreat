import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Oswald — condensed display face for the rugged, confident headline voice.
const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boystomenretreat.com"),
  title: {
    default: "Boys To Men Retreat — Ericeira, Portugal",
    template: "%s | Boys To Men Retreat",
  },
  description:
    "A 4 day / 4 night retreat in Ericeira, Portugal guiding young men (9–16) through challenge, adventure and self-discovery — surfing, skateboarding, beach challenges, cold plunges and campfire circles.",
  keywords: [
    "boys retreat",
    "rite of passage",
    "Ericeira",
    "Portugal",
    "surf camp",
    "young men",
    "adventure retreat",
  ],
  openGraph: {
    title: "Boys To Men Retreat — Ericeira, Portugal",
    description:
      "Guiding young men through challenge, adventure and self-discovery in Ericeira, Portugal.",
    type: "website",
    locale: "en",
    // Share image is generated from the brand mark by app/opengraph-image.tsx.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}

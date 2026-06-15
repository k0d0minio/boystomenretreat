import type { Metadata, Viewport } from "next";
import { Geist, Oswald } from "next/font/google";
import "./globals.css";

import { brand } from "@/lib/brand";
import { site } from "@/lib/content";
import { JsonLd } from "@/components/json-ld";
import {
  SITE_TITLE,
  buildMetadata,
  organizationLd,
  siteUrl,
  websiteLd,
} from "@/lib/seo";
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
  metadataBase: new URL(siteUrl),
  // Site-wide complete openGraph/twitter/canonical + the home defaults.
  ...buildMetadata({ path: "/" }),
  // Title template applies to every nested page title.
  title: {
    default: SITE_TITLE,
    template: `%s | ${site.shortName} Retreat`,
  },
  applicationName: site.name,
  keywords: [
    "boys retreat",
    "rite of passage",
    "Ericeira",
    "Portugal",
    "surf camp",
    "young men",
    "adventure retreat",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "travel",
  formatDetection: { telephone: true, email: true, address: false },
  appleWebApp: {
    capable: true,
    title: site.shortName,
    statusBarStyle: "default",
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
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: brand.forest },
    { media: "(prefers-color-scheme: dark)", color: brand.night },
  ],
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
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <ThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}

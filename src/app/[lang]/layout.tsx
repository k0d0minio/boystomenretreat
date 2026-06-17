import type { Metadata, Viewport } from "next";
import { Geist, Oswald } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

import { brand } from "@/lib/brand";
import { site } from "@/lib/site";
import { hasLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
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

/** Pre-render every locale at build time. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    // Site-wide complete openGraph/twitter/canonical + the home defaults.
    ...buildMetadata({ lang, dict, path: "/" }),
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
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: brand.ocean },
    { media: "(prefers-color-scheme: dark)", color: brand.abyss },
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const locale: Locale = lang;
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organizationLd(dict), websiteLd(locale)]} />
        <ThemeProvider>
          <SiteHeader lang={locale} nav={dict.nav} header={dict.header} />
          <main className="flex-1">{children}</main>
          <SiteFooter
            lang={locale}
            footer={dict.footer}
            tagline={dict.meta.tagline}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

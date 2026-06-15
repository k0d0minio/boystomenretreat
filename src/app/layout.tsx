import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
    images: [
      {
        url: "/img/surfer-sunset-peace-sign.jpeg",
        width: 1000,
        height: 667,
        alt: "A surfer at sunset throwing a peace sign off the coast of Ericeira",
      },
    ],
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
      className={`${geistSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

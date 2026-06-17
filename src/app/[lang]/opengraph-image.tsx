import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { brand } from "@/lib/brand";
import { brandLogoDataUri } from "@/lib/og-logo";
import { site } from "@/lib/site";
import { defaultLocale, hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

// Social / Open Graph share card. The brand logo on the deep-sea night
// background, with the wordmark and a localized tagline + location.
export const alt = `${site.name} — ${site.location}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(hasLocale(lang) ? lang : defaultLocale);
  const oswald = await readFile(join(process.cwd(), "assets/Oswald-Bold.woff"));
  const logo = await brandLogoDataUri(brand.seafoam);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: brand.abyss,
          color: brand.seafoam,
          fontFamily: "Oswald",
          fontWeight: 700,
        }}
      >
        {/* Brand logo */}
        <img src={logo} width={272} height={300} alt="" />
        {/* Wordmark */}
        <div
          style={{
            marginTop: 32,
            fontSize: 72,
            letterSpacing: 14,
            textTransform: "uppercase",
          }}
        >
          {site.shortName}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "rgba(237, 243, 245, 0.7)",
          }}
        >
          {`${dict.og.homeTagline} — ${site.location}`}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Oswald", data: oswald, style: "normal", weight: 700 }],
    },
  );
}

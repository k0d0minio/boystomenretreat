import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { WAVE_PATH, brand } from "@/lib/brand";
import { site } from "@/lib/site";
import { defaultLocale, hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

// Social / Open Graph share card. The brand mark on the campfire-night
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
          background: brand.night,
          color: brand.oatmeal,
          fontFamily: "Oswald",
          fontWeight: 700,
        }}
      >
        {/* Monogram */}
        <div style={{ fontSize: 168, letterSpacing: 8, lineHeight: 1 }}>BTM</div>
        <svg width={300} height={92} viewBox="11 29 26 8" fill="none" style={{ marginTop: -8 }}>
          <path
            d={WAVE_PATH}
            stroke={brand.ember}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Wordmark */}
        <div
          style={{
            marginTop: 44,
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
            color: "rgba(245, 243, 240, 0.7)",
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

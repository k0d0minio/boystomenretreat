import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { WAVE_PATH, brand } from "@/lib/brand";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/seo";

/** Standard 1.91:1 social card dimensions, shared by every share image. */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const displayDomain = siteUrl.replace(/^https?:\/\//, "");

type ShareCardArgs = {
  /** Small ember eyebrow above the title, e.g. "ABOUT". */
  eyebrow: string;
  /** Large headline (rendered uppercase). */
  title: string;
  /** Optional supporting line under the title. */
  subtitle?: string;
};

/**
 * Title-forward interior-page share card, matching the home brand card
 * (BTM monogram + wave on the night background) but leading with the page
 * title. Flexbox only (Satori), concrete brand hexes (no oklch), single
 * Oswald weight (the only vendored face).
 */
export async function renderShareCard({
  eyebrow,
  title,
  subtitle,
}: ShareCardArgs) {
  const oswald = await readFile(join(process.cwd(), "assets/Oswald-Bold.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: brand.night,
          color: brand.oatmeal,
          fontFamily: "Oswald",
          fontWeight: 700,
        }}
      >
        {/* Brand mark: small monogram + ember wave underline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 44, letterSpacing: 6, lineHeight: 1 }}>
            BTM
          </div>
          <svg
            width={130}
            height={40}
            viewBox="11 29 26 8"
            fill="none"
            style={{ marginTop: 4 }}
          >
            <path
              d={WAVE_PATH}
              stroke={brand.ember}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Eyebrow + title + optional subtitle */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 10,
              textTransform: "uppercase",
              color: brand.ember,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                marginTop: 24,
                fontSize: 34,
                lineHeight: 1.25,
                color: "rgba(245, 243, 240, 0.72)",
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* Footer: domain + location */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(245, 243, 240, 0.7)",
          }}
        >
          <span>{displayDomain}</span>
          <span>{site.location}</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [{ name: "Oswald", data: oswald, style: "normal", weight: 700 }],
    },
  );
}

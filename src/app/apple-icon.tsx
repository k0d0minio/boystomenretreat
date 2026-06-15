import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { WAVE_PATH, brand } from "@/lib/brand";

// Apple touch icon (iOS home screen). The full monogram — letters + wave — on an
// ocean tile with generous padding, sized for the 180px home-screen slot.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
          background: brand.ocean,
          color: brand.seafoam,
        }}
      >
        <div
          style={{
            fontFamily: "Oswald",
            fontWeight: 700,
            fontSize: 96,
            letterSpacing: 2,
            lineHeight: 1,
          }}
        >
          BTM
        </div>
        <svg
          width={112}
          height={34}
          viewBox="11 29 26 8"
          fill="none"
          style={{ marginTop: 6 }}
        >
          <path
            d={WAVE_PATH}
            stroke={brand.seafoam}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Oswald", data: oswald, style: "normal", weight: 700 }],
    },
  );
}

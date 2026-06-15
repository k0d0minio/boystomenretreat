import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { brand } from "@/lib/brand";

// Favicon (browser tab). Generated from the BTM monogram so the tab icon matches
// the on-site mark. Kept minimal — just the letters on a forest tile — for legibility
// at 32px, where a wave underline would only add noise.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const oswald = await readFile(join(process.cwd(), "assets/Oswald-Bold.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brand.forest,
          color: brand.oatmeal,
          borderRadius: 6,
          fontFamily: "Oswald",
          fontWeight: 700,
          fontSize: 19,
          letterSpacing: 0.5,
        }}
      >
        BTM
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Oswald", data: oswald, style: "normal", weight: 700 }],
    },
  );
}

import { ImageResponse } from "next/og";

import { brand } from "@/lib/brand";
import { brandLogoDataUri } from "@/lib/og-logo";

// Apple touch icon (iOS home screen). The brand logo on an ocean tile with
// generous padding, sized for the 180px home-screen slot.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const logo = await brandLogoDataUri(brand.seafoam);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brand.ocean,
        }}
      >
        <img src={logo} width={140} height={140} alt="" />
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

import { brand } from "@/lib/brand";
import { brandLogoDataUri } from "@/lib/og-logo";

// Favicon (browser tab). The brand logo on an ocean tile so the tab icon matches
// the on-site mark.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 6,
        }}
      >
        <img src={logo} width={26} height={26} alt="" />
      </div>
    ),
    size,
  );
}

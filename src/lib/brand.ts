/**
 * Shared geometry + colors for the Boys To Men "BTM" monogram mark.
 *
 * The on-site mark ({@link "@/components/brand-logo".BrandMark}) draws everything in
 * `currentColor` so it adapts to light, dark and the hero overlay automatically.
 * The standalone metadata images (favicon / apple-icon / OG card) can't inherit a
 * theme, so they use the concrete brand hexes below — kept here so both stay in sync.
 */

/** Square viewBox the monogram is authored against. */
export const MARK_VIEWBOX = "0 0 48 48";

/**
 * The breaking-wave underline beneath the letters — a 4-bump ripple from x13→x35,
 * centered on the 48-unit viewBox. Reused by the ImageResponse routes so the
 * generated icons match the on-site mark exactly.
 */
export const WAVE_PATH = "M13 33 q2.75 -3 5.5 0 t5.5 0 t5.5 0";

/** Brand palette (approx. hex of the OKLCH tokens in globals.css), for raster images. */
export const brand = {
  ocean: "#22607E", // deep Atlantic blue — primary
  seafoam: "#EDF3F5", // pale sea mist / foam — light surfaces / glyphs on dark
  navy: "#1A2F3D", // deep navy — text on light
  coral: "#E0734D", // warm coral — accent
  abyss: "#0F2733", // deep sea navy — dark backgrounds
} as const;

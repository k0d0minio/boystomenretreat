/**
 * Shared colors for the Boys To Men brand.
 *
 * The on-site mark ({@link "@/components/brand-logo".BrandMark}) renders the logo in
 * `currentColor` so it adapts to light and dark automatically. The standalone metadata
 * images (favicon / apple-icon / OG card) can't inherit a theme, so they recolour the
 * logo to the concrete brand hexes below.
 */

/** Brand palette (approx. hex of the OKLCH tokens in globals.css), for raster images. */
export const brand = {
  ocean: "#22607E", // deep Atlantic blue — primary
  seafoam: "#EDF3F5", // pale sea mist / foam — light surfaces / glyphs on dark
  navy: "#1A2F3D", // deep navy — text on light
  coral: "#E0734D", // warm coral — accent
  abyss: "#0F2733", // deep sea navy — dark backgrounds
} as const;

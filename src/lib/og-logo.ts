import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Reads the brand logo from `/public/logo.svg`, recolours its `currentColor`
 * strokes to a concrete hex, and returns a base64 data URI.
 *
 * The on-site mark inherits its colour from the theme, but Satori (`next/og`)
 * images can't inherit a theme — so the metadata images embed the logo as an
 * `<img>` recoloured to a concrete brand hex. Keeps `/public/logo.svg` the
 * single source of truth for the artwork.
 */
export async function brandLogoDataUri(color: string) {
  const svg = await readFile(join(process.cwd(), "public/logo.svg"), "utf8");
  const recoloured = svg.replaceAll("currentColor", color);
  return `data:image/svg+xml;base64,${Buffer.from(recoloured).toString("base64")}`;
}

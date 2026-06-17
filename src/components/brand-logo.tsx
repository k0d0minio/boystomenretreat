/**
 * BrandMark — the Boys To Men "Surf Skate Retreat" logo.
 *
 * Renders `/public/logo.svg` as a CSS mask filled with `currentColor`, so the single
 * mark adapts to light mode, dark mode, and any surrounding text colour automatically
 * (the SVG itself is authored in `currentColor`). Using a mask — rather than an inline
 * `<svg>` or an `<img>` — keeps `/public/logo.svg` the single source of truth while
 * still letting the glyph inherit the theme foreground. Pass a size via `className`
 * (e.g. `size-9`).
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Boys to Men — Surf Skate Retreat"
      className={className}
      style={{
        display: "inline-block",
        backgroundColor: "currentColor",
        maskImage: "url(/logo.svg)",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
        WebkitMaskImage: "url(/logo.svg)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
      }}
    />
  );
}

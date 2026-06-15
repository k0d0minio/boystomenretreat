import { MARK_VIEWBOX, WAVE_PATH } from "@/lib/brand";

/**
 * BrandMark — the simplified "BTM" monogram logo.
 *
 * A condensed monogram (Oswald display face) over a breaking-wave underline, inside a
 * squared-off badge. Everything is drawn in `currentColor`, so the single mark renders
 * correctly in light mode, dark mode, and white over the dark hero photo — it inherits
 * the surrounding text color. Pass a size via `className` (e.g. `size-9`).
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Squared-off badge — matches the rugged 0.25rem radius language. */}
      <rect
        x="2.25"
        y="2.25"
        width="43.5"
        height="43.5"
        rx="5"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* BTM monogram in the condensed display face. */}
      <text
        x="24"
        y="25"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-display), 'Oswald', sans-serif"
        fontWeight={700}
        fontSize="17"
        letterSpacing="0.5"
      >
        BTM
      </text>
      {/* Breaking-wave underline. */}
      <path
        d={WAVE_PATH}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

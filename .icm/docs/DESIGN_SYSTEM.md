# Boys To Men Retreat — Design System

The visual language for the Boys To Men Retreat site. The system is **token-driven**:
colours, type and radius are defined once as CSS variables in
[`src/app/globals.css`](../../src/app/globals.css) and flow through the shadcn/ui primitives into
every section. **Change values at the token layer — never hardcode colours in components.**

## Brand mood

A grounded, masculine **rite of passage** — surfing, skating, cold plunges and campfire
circles on the Atlantic coast of Ericeira. The design should feel:

- **Rugged & earthy** — natural, tactile, weathered; never corporate, cute or bubbly.
- **Grounded & confident** — quiet authority, not hype.
- **Reassuring to parents, adventurous to boys** — warm and trustworthy, with energy.

The palette expresses this through **deep Atlantic blue**, **sea-mist & sand**, a warm
**coral** accent (against the cool water), and **teal & navy** text. Light mode reads as
bright coastal daylight; dark mode as the deep sea at night.

The *tone* is reinforced by four deliberate choices, not colour alone:

- **Squared-off geometry** — `--radius` is a tight `0.25rem`; corners are nearly square, not
  soft. Cards, tiles and panels are constructed with visible **solid borders**, not soft rings
  or drop-shadows.
- **Film-grain texture** — a subtle fixed grain overlay (`body::after` in `globals.css`) gives
  every surface an analog, tactile finish instead of a flat digital one.
- **Calm motion** — no hover-scale, hover-lift or glowing blurs. Reveals are quiet fades.
- **Uppercase display type** — headlines and the wordmark are set in uppercase condensed
  Oswald for an outdoor-signage / field-guide feel.

## Colour tokens

All colours are OKLCH. Each semantic token has a light and a dark value; components reference
the **semantic name** (e.g. `bg-primary`, `text-muted-foreground`), never a raw colour.

| Token | Role | Light | Dark |
| --- | --- | --- | --- |
| `background` / `foreground` | Page base / body text | pale sea mist / deep navy | Atlantic navy depths / pale seafoam |
| `card` / `card-foreground` | Raised surfaces (solid border, no shadow) | light foam / navy | lifted navy / seafoam |
| `primary` / `primary-foreground` | Deep Atlantic blue — primary brand, links, figures | ocean blue / foam | lifted aqua-cyan / near-black |
| `accent` / `accent-foreground` | **Coral — conversion CTAs, eyebrows, highlights** | warm coral / foam | glowing coral / near-black |
| `secondary` / `secondary-foreground` | Aqua / shallow water — soft fills, emoji chips, badges | soft aqua / deep teal | deep teal / seafoam |
| `muted` / `muted-foreground` | Subtle fills / secondary text | pale tidal blue-grey / slate blue | deep sea-grey / warm light blue |
| `border` / `input` | Lines, dividers, fields (visible, oceanic) | soft sea-glass border | translucent white 12–14% |
| `ring` | Focus outline | = primary | = primary |
| `destructive` | Errors | red | red |
| `chart-1…5` | Decorative ramp (gallery tiles, gradients) | ocean · teal · coral · warm-sand · deep-navy | same hues, dark-tuned |

**Accent discipline:** coral is the single attention colour. Use it for the **primary
conversion CTA** ("Book a place", "Reserve a place", "Join the next retreat") and section
eyebrows. Don't spread it across body UI, or it stops meaning "act here".

## Typography

| Role | Font | Usage |
| --- | --- | --- |
| Display / headings | **Oswald** (condensed, variable) via `--font-display` | `h1`–`h3`, stat figures, card titles — applied with `.font-heading` |
| Body | **Geist** via `--font-sans` | default for all running text (set on `html`) |

Fonts are loaded with `next/font/google` in [`src/app/layout.tsx`](../../src/app/layout.tsx) and
exposed as CSS variables; the `@theme` block in `globals.css` maps `--font-heading` →
`--font-display`.

### Type utilities (in `globals.css`)

- **`.font-heading`** — condensed display face at weight 600. Pair with Tailwind size/weight
  utilities (`text-4xl font-bold tracking-tight`) on headings. **Major headings (`h1`/`h2`) and
  the brand wordmark are set `uppercase`** for the outdoor-signage feel; card titles (`h3`) stay
  sentence case for readability.
- **`.eyebrow`** — uppercase, letter-spaced (`0.2em`), coral-coloured kicker label placed
  above a section heading (e.g. *The mission*, *The experience*, *On the coast*). This is the
  signature rugged/editorial detail; every major section uses one.
- **`.text-balance`** — balanced wrapping for headings and short paragraphs.

### Section heading pattern

```tsx
<p className="eyebrow">The mission</p>
<h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
  {heading}
</h2>
<p className="mt-4 text-lg text-muted-foreground text-balance">{subheading}</p>
```

## Radius & spacing

- `--radius: 0.25rem` base (squared, rugged); the `--radius-sm…4xl` scale in `@theme` derives
  from it. Buttons use `rounded-lg`, cards `rounded-xl`, feature panels `rounded-2xl`/
  `rounded-3xl` — all read as near-square at this small base radius.
- Surfaces are framed with **solid `border border-border`**, not soft rings or drop-shadows.
- Sections use a consistent vertical rhythm: `py-20 sm:py-28`, content capped at `max-w-6xl`
  (narrower for prose), separated by `border-t border-border`. Alternating sections use
  `bg-card` to create banding.

## Components

- **Buttons** ([`src/components/ui/button.tsx`](../../src/components/ui/button.tsx)) — variants:
  `default` (ocean blue), **`accent`** (coral, for conversion CTAs), `outline`, `secondary`,
  `ghost`, `link`. Use `accent` for the one main action in a view; `default`/`outline` for
  everything else.
- **Cards, badges, sheet, accordion, nav** — standard shadcn/ui primitives, fully token-driven;
  they restyle automatically with the tokens above.
- **Theme toggle** ([`src/components/theme-toggle.tsx`](../../src/components/theme-toggle.tsx)) —
  light/dark switch in the header, powered by `next-themes`
  ([`theme-provider.tsx`](../../src/components/theme-provider.tsx)) with `attribute="class"`,
  `defaultTheme="light"` and system-preference fallback.

## Extending the system

1. **Re-colour the brand** — edit the `:root` and `.dark` blocks in `globals.css`. Everything
   downstream updates.
2. **Add a colour role** — add the variable to both `:root`/`.dark` and map it in the `@theme`
   block so a Tailwind utility (`bg-…`) is generated.
3. **New section** — follow the heading pattern above, reuse the `Reveal` motion wrapper and
   the shadcn primitives, and reach for the coral accent only for the primary action.

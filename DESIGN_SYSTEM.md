# Boys To Men Retreat — Design System

The visual language for the Boys To Men Retreat site. The system is **token-driven**:
colours, type and radius are defined once as CSS variables in
[`src/app/globals.css`](src/app/globals.css) and flow through the shadcn/ui primitives into
every section. **Change values at the token layer — never hardcode colours in components.**

## Brand mood

A grounded, masculine **rite of passage** — surfing, skating, cold plunges and campfire
circles on the Atlantic coast of Ericeira. The design should feel:

- **Rugged & earthy** — natural, tactile, strong; never corporate or cute.
- **Grounded & confident** — quiet authority, not hype.
- **Reassuring to parents, adventurous to boys** — warm and trustworthy, with energy.

The palette expresses this through **deep Atlantic navy**, **warm sand**, an **ember /
terracotta** accent (campfire), and **warm charcoal** text. Light mode reads as warm coastal
daylight; dark mode as dusk around the fire.

## Colour tokens

All colours are OKLCH. Each semantic token has a light and a dark value; components reference
the **semantic name** (e.g. `bg-primary`, `text-muted-foreground`), never a raw colour.

| Token | Role | Light | Dark |
| --- | --- | --- | --- |
| `background` / `foreground` | Page base / body text | warm off-white / woodsmoke charcoal | deep night-blue / warm off-white |
| `card` / `card-foreground` | Raised surfaces | near-white warm / charcoal | lifted night-blue / off-white |
| `primary` / `primary-foreground` | Atlantic navy — primary brand, links, stat figures | deep navy / warm white | lifted ocean blue / near-black |
| `accent` / `accent-foreground` | **Ember/terracotta — conversion CTAs, eyebrows, highlights** | terracotta / white | glowing ember / near-black |
| `secondary` / `secondary-foreground` | Warm sand — soft fills, emoji chips, badges | sand / deep brown | muted blue-gray / off-white |
| `muted` / `muted-foreground` | Subtle fills / secondary text | light sand / warm stone gray | dark blue-gray / warm light gray |
| `border` / `input` | Lines, dividers, fields | sand border | translucent white 10–15% |
| `ring` | Focus outline | = primary | = primary |
| `destructive` | Errors | red | red |
| `chart-1…5` | Decorative ramp (gallery tiles, gradients) | navy · teal · ember · gold · deep-navy | same hues, dark-tuned |

**Accent discipline:** ember is the single attention colour. Use it for the **primary
conversion CTA** ("Book a place", "Reserve a place", "Join the next retreat") and section
eyebrows. Don't spread it across body UI, or it stops meaning "act here".

## Typography

| Role | Font | Usage |
| --- | --- | --- |
| Display / headings | **Oswald** (condensed, variable) via `--font-display` | `h1`–`h3`, stat figures, card titles — applied with `.font-heading` |
| Body | **Geist** via `--font-sans` | default for all running text (set on `html`) |

Fonts are loaded with `next/font/google` in [`src/app/layout.tsx`](src/app/layout.tsx) and
exposed as CSS variables; the `@theme` block in `globals.css` maps `--font-heading` →
`--font-display`.

### Type utilities (in `globals.css`)

- **`.font-heading`** — condensed display face at weight 600. Pair with Tailwind size/weight
  utilities (`text-4xl font-bold tracking-tight`) on headings.
- **`.eyebrow`** — uppercase, letter-spaced (`0.2em`), ember-coloured kicker label placed
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

- `--radius: 0.75rem` base; the `--radius-sm…4xl` scale in `@theme` derives from it. Buttons
  use `rounded-lg`, cards `rounded-xl`, feature panels `rounded-2xl`/`rounded-3xl`.
- Sections use a consistent vertical rhythm: `py-20 sm:py-28`, content capped at `max-w-6xl`
  (narrower for prose), separated by `border-t border-border`. Alternating sections use
  `bg-card` to create banding.

## Components

- **Buttons** ([`src/components/ui/button.tsx`](src/components/ui/button.tsx)) — variants:
  `default` (navy), **`accent`** (ember, for conversion CTAs), `outline`, `secondary`,
  `ghost`, `link`. Use `accent` for the one main action in a view; `default`/`outline` for
  everything else.
- **Cards, badges, sheet, accordion, nav** — standard shadcn/ui primitives, fully token-driven;
  they restyle automatically with the tokens above.
- **Theme toggle** ([`src/components/theme-toggle.tsx`](src/components/theme-toggle.tsx)) —
  light/dark switch in the header, powered by `next-themes`
  ([`theme-provider.tsx`](src/components/theme-provider.tsx)) with `attribute="class"`,
  `defaultTheme="light"` and system-preference fallback.

## Extending the system

1. **Re-colour the brand** — edit the `:root` and `.dark` blocks in `globals.css`. Everything
   downstream updates.
2. **Add a colour role** — add the variable to both `:root`/`.dark` and map it in the `@theme`
   block so a Tailwind utility (`bg-…`) is generated.
3. **New section** — follow the heading pattern above, reuse the `Reveal` motion wrapper and
   the shadcn primitives, and reach for the ember accent only for the primary action.

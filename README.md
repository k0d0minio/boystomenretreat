# Boys To Men Retreat

A modern, mobile-friendly redesign of [boystomenretreat.com](https://www.boystomenretreat.com) —
a 4 day / 4 night retreat in Ericeira, Portugal guiding young men (9–16) through
challenge, adventure and self-discovery.

This is a **first-pass redesign**: it preserves all of the original copy and
information while applying up-to-date design principles. The brand identity and
voice will be refined later.

## Stack

- **[Next.js](https://nextjs.org)** (App Router) + TypeScript
- **[shadcn/ui](https://ui.shadcn.com)** + Tailwind CSS v4 as the base layer
- **[Motion](https://motion.dev)** (Framer Motion) for minimal scroll/entrance animation
- **[lucide-react](https://lucide.dev)** icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

| Path | Purpose |
| --- | --- |
| `src/lib/content.ts` | Single source of truth for all site copy & data |
| `src/app/page.tsx` | Home page — composes the landing sections |
| `src/app/about/page.tsx` | Founder's story |
| `src/app/privacy/page.tsx` | Privacy policy |
| `src/components/sections/*` | Landing page sections (hero, why, included, schedule, etc.) |
| `src/components/site-header.tsx` / `site-footer.tsx` | Shared nav & footer |
| `src/components/motion/reveal.tsx` | Reusable scroll-reveal animation wrapper |
| `src/components/ui/*` | shadcn/ui primitives |

## Notes for later iterations

- **Photography**: the gallery currently uses styled placeholder tiles. Drop real
  retreat imagery in and swap the placeholders in `src/components/sections/gallery.tsx`.
- **Brand**: colors live as CSS variables in `src/app/globals.css` (an ocean/sand
  placeholder palette) and the display font is set in `src/app/layout.tsx`.
- **Content**: edit `src/lib/content.ts` to update any copy in one place.

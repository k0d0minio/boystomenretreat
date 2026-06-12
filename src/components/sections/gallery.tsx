import { Camera } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { gallery } from "@/lib/content";

const toneClasses: Record<string, string> = {
  ocean: "from-primary to-primary/50",
  sand: "from-accent to-accent/50",
  deep: "from-chart-5 to-primary/70",
};

export function Gallery() {
  return (
    <section className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">On the coast</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {gallery.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">{gallery.subheading}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {gallery.tiles.map((tile, i) => (
            <Reveal
              key={tile.label}
              delay={(i % 4) * 0.06}
              className={cn(i % 5 === 0 ? "col-span-2 row-span-2" : "")}
            >
              <div
                className={cn(
                  "group relative flex h-full min-h-40 items-end overflow-hidden rounded-2xl bg-gradient-to-br p-4 sm:min-h-48",
                  toneClasses[tile.tone],
                )}
              >
                <Camera className="absolute right-3 top-3 size-5 text-white/60 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative text-sm font-semibold text-white drop-shadow-sm">{tile.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Photography placeholders — real retreat imagery to be added.
        </p>
      </div>
    </section>
  );
}

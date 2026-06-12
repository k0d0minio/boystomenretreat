import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { included } from "@/lib/content";

export function Included() {
  return (
    <section id="included" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The experience</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {included.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">{included.subheading}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {included.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.06}>
              <Card className="group h-full overflow-hidden border-border/70 transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-2xl transition-transform group-hover:scale-110">
                    {item.emoji}
                  </span>
                  <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

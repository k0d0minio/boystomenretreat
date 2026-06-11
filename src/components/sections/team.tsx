import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/lib/content";

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {team.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">{team.subheading}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <Card className="h-full border-border/70">
                <CardContent className="flex h-full flex-col p-6">
                  <span className="flex size-14 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                    {member.initials}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

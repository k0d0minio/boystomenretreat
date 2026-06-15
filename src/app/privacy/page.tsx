import { privacy } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Boys To Men Retreat handles the information you share with us.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight">{privacy.heading}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{privacy.updated}</p>
      <div className="mt-8 space-y-5">
        {privacy.body.map((paragraph, i) => (
          <p key={i} className="text-lg leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

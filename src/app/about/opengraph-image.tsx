import { site } from "@/lib/content";
import { OG_CONTENT_TYPE, OG_SIZE, renderShareCard } from "@/lib/og-card";

export const alt = `${site.name} — Message from the founder`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderShareCard({
    eyebrow: "About",
    title: "Message from the founder",
    subtitle: "The story and intention behind the retreat.",
  });
}

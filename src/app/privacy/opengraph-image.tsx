import { site } from "@/lib/content";
import { OG_CONTENT_TYPE, OG_SIZE, renderShareCard } from "@/lib/og-card";

export const alt = `${site.name} — Privacy Policy`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderShareCard({
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle: "How we handle the information you share with us.",
  });
}

/**
 * Renders structured data as a JSON-LD script tag. Pass a single schema.org
 * object or an array of them (a top-level array in one ld+json script is valid
 * and accepted by crawlers). Builders live in {@link "@/lib/seo"}.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is build-time/server-rendered content, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

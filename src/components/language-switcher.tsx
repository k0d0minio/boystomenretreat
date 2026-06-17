"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  hasLocale,
  localeNames,
  locales,
  type Locale,
} from "@/lib/i18n/config";

/**
 * Language switcher — swaps the leading `/[lang]` segment of the current path
 * and navigates, preserving the rest of the path and any anchor. Built on the
 * shadcn Select so it matches the rest of the UI and stays fully keyboard- and
 * screen-reader accessible. The trigger shows a compact locale code; the menu
 * lists the native language names.
 */
export function LanguageSwitcher({
  lang,
  label,
  className,
}: {
  lang: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: string) {
    const segments = pathname.split("/");
    if (segments[1] && hasLocale(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push((segments.join("/") || `/${next}`) + hash);
  }

  return (
    <Select value={lang} onValueChange={switchTo}>
      <SelectTrigger
        size="sm"
        aria-label={`${label}: ${localeNames[lang]}`}
        className={cn(
          "gap-1.5 border-0 bg-transparent px-2 font-medium text-muted-foreground shadow-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 data-[state=open]:bg-muted data-[state=open]:text-foreground",
          className,
        )}
      >
        <Globe className="size-4" aria-hidden />
        <SelectValue>{lang.toUpperCase()}</SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        {locales.map((l) => (
          <SelectItem key={l} value={l}>
            {localeNames[l]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

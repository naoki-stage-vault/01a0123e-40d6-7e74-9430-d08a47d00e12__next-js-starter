import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

/**
 * §2.4 search-input — pill field with leading icon.
 * Light surface: rgba(0,0,0,0.08); dark surface: rgba(255,255,255,0.16).
 */
export function SearchInput({
  dark = false,
  placeholder = "Buscar",
  className,
}: {
  /** Use the dark-surface variant (rgba(255,255,255,0.16)). */
  dark?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <Search
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2",
          dark ? "text-white-72" : "text-ink-secondary"
        )}
      />
      <Input
        aria-label={placeholder}
        placeholder={placeholder}
        className={cn("pl-11", dark && "bg-white/16 text-canvas placeholder:text-white-72")}
      />
    </div>
  );
}

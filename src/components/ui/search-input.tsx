import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * {component.search-input} — El search de accessories.
 * Fondo canvas, texto ink en {typography.body} (17px), 1px border
 * rgba(0,0,0,0.08), rounded {rounded.pill}, padding 12px × 20px,
 * height 44px. Icono guía 14px en tono muted.
 * El pill del search empareja la gramática de los CTA.
 */
export function SearchInput({
  className,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <div className={cn("relative w-full", className)}>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-muted-48"
        viewBox="0 0 14 14"
        fill="none"
      >
        <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10.5 10.5L13 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <input
        type="search"
        className={cn(
          "h-11 w-full rounded-pill border border-black/[0.08] bg-canvas py-3 pl-[52px] pr-5 font-text text-body text-ink placeholder:text-ink-muted-48",
          "outline-none transition-shadow focus-visible:border-transparent",
          className,
        )}
        {...props}
      />
    </div>
  );
}

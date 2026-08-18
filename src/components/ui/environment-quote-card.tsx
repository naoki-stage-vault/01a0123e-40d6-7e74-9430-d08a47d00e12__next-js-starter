import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * {component.environment-quote-card} — Hero de superficie oscura.
 * Backdrop fotográfico con fallback {colors.surface-tile-1}, headline
 * blanco centrado en {typography.display-lg}, {component.button-primary}.
 * Padding {spacing.section} (80px).
 */
export function EnvironmentQuoteCard({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div"> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "bg-surface-tile-1 text-on-dark flex flex-col items-center justify-center px-6 py-section text-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

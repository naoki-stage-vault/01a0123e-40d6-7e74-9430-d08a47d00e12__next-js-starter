import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * {component.floating-sticky-bar} — Barra flotante inferior del buy page.
 * Parchment al 80% + backdrop blur, height 64px, padding 12px × 32px.
 * Izquierda: total en {typography.body}. Derecha: {component.button-primary}.
 */
export function FloatingStickyBar({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div"> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "bg-canvas-parchment/80 text-ink backdrop-blur-md h-16 w-full px-8 py-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

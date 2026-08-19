import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * {component.sub-nav-frosted} — Nav de superficie que se pega bajo la
 * global nav. Fondo parchment al 80% + backdrop blur (frosted glass),
 * height 52px. Categoría en {typography.tagline} (21px/600).
 */
export function SubNavFrosted({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div"> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "bg-canvas-parchment/80 text-ink backdrop-blur-md h-[52px] w-full px-5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

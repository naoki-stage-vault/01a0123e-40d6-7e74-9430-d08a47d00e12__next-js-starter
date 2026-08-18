import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * {component.store-utility-card} — Card de grid (store/accessories).
 * Fondo canvas, 1px border {colors.hairline}, rounded {rounded.lg} (18px),
 * padding {spacing.lg} (24px). SIN shadow: el render de producto lleva el
 * shadow del sistema, la card nunca.
 */
export function StoreUtilityCard({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div"> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "bg-canvas text-ink rounded-lg border border-hairline p-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

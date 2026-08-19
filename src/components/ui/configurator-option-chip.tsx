import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * {component.configurator-option-chip} — Celda tappable pill del buy page.
 * Fondo canvas, texto ink en {typography.caption}, rounded {rounded.pill},
 * padding 12px × 16px.
 */
export function ConfiguratorOptionChip({
  className,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(
        "bg-canvas text-ink font-text text-caption rounded-pill px-4 py-3",
        className,
      )}
      {...props}
    />
  );
}

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * {component.configurator-option-chip-selected} — Estado seleccionado.
 * El border sube a 2px solid {colors.primary-focus}. Misma forma/contenido.
 */
export function ConfiguratorOptionChipSelected({
  className,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(
        "bg-canvas text-ink font-text text-caption rounded-pill px-4 py-3 border-2 border-primary-focus",
        className,
      )}
      {...props}
    />
  );
}

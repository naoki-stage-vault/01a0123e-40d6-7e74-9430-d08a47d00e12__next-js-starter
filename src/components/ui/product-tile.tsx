import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/*
 * Product tiles — {component.product-tile-*}.
 * Tiles full-bleed, sin radio (rounded.none), el cambio de superficie
 * ES el separador de secciones. Padding vertical {spacing.section} (80px),
 * que baja a 48px en phone (<= 734px según el spec).
 */

type TileProps = ComponentPropsWithoutRef<"section"> & { className?: string };

/** {component.product-tile-light} — canvas blanco, texto ink. */
export function ProductTileLight({ className, ...props }: TileProps) {
  return (
    <section
      className={cn(
        "bg-canvas text-ink px-0 py-section md:py-xxl",
        className,
      )}
      {...props}
    />
  );
}

/** {component.product-tile-parchment} — canvas #f5f5f7. */
export function ProductTileParchment({ className, ...props }: TileProps) {
  return (
    <section
      className={cn(
        "bg-canvas-parchment text-ink px-0 py-section md:py-xxl",
        className,
      )}
      {...props}
    />
  );
}

/** {component.product-tile-dark} — surface-tile-1 (#272729), texto on-dark. */
export function ProductTileDark({ className, ...props }: TileProps) {
  return (
    <section
      className={cn(
        "bg-surface-tile-1 text-on-dark px-0 py-section md:py-xxl",
        className,
      )}
      {...props}
    />
  );
}

/** {component.product-tile-dark-2} — surface-tile-2 (#2a2a2c). */
export function ProductTileDark2({ className, ...props }: TileProps) {
  return (
    <section
      className={cn(
        "bg-surface-tile-2 text-on-dark px-0 py-section md:py-xxl",
        className,
      )}
      {...props}
    />
  );
}

/** {component.product-tile-dark-3} — surface-tile-3 (#252527). */
export function ProductTileDark3({ className, ...props }: TileProps) {
  return (
    <section
      className={cn(
        "bg-surface-tile-3 text-on-dark px-0 py-section md:py-xxl",
        className,
      )}
      {...props}
    />
  );
}

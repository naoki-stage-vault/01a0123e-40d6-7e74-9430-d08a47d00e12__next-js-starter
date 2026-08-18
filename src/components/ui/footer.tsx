import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * {component.footer} — Parchment, texto ink-muted-80. Columnas de links en
 * {typography.dense-link} (17px / 2.41 — el leading relajado hace
 * escaneables las columnas densas), cabeceras en {typography.caption-strong},
 * fila legal en {typography.fine-print} con ink-muted-48. Padding 64px.
 */
export function Footer({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"footer"> & { children: ReactNode }) {
  return (
    <footer
      className={cn(
        "bg-canvas-parchment text-ink-muted-80 w-full px-6 py-16",
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
}

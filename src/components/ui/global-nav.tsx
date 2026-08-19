import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * {component.global-nav} — Nav ultra-fina negra, 44px.
 * Fondo {colors.surface-black} (el único negro puro del sistema), texto
 * on-dark en {typography.nav-link} (12px/400/-0.12px). En <= 833px
 * colapsa a hamburger: el spec usa ~834px, así que `lg:` (833px+).
 */
export function GlobalNav({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"nav"> & { children: ReactNode }) {
  return (
    <nav
      className={cn(
        "bg-surface-black text-on-dark font-text text-nav-link h-11 w-full px-5",
        className,
      )}
      {...props}
    >
      {children}
    </nav>
  );
}

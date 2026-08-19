"use client";

import { useState } from "react";
import { GlobalNav } from "@/components/ui/global-nav";
import { SubNavFrosted } from "@/components/ui/sub-nav-frosted";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Componentes", href: "#componentes" },
  { label: "Spec", href: "#spec" },
  { label: "Cómo se usa", href: "#como-se-usa" },
  { label: "Descargar", href: "#descargar" },
] as const;

/**
 * Cabecera: {component.global-nav} (negra, 44px) + {component.sub-nav-frosted}
 * (52px, parchment + blur). En <= 833px la global nav colapsa a hamburger
 * (spec: ~834px); los links pasan a un tray.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <GlobalNav>
        <div className="mx-auto flex h-11 max-w-[1440px] items-center justify-between">
          {/* Marca */}
          <a href="#top" className="flex items-center gap-2 text-on-dark">
            <span
              aria-hidden="true"
              className="flex size-5 items-center justify-center rounded-full bg-primary text-[9px] font-semibold text-on-primary"
            >
              DS
            </span>
            <span className="hidden font-semibold sm:inline">Design System</span>
          </a>

          {/* Links desktop — visible >= 834px */}
          <div className="hidden items-center gap-5 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-on-dark/80 transition-colors hover:text-on-dark"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Acciones derecha */}
          <div className="flex items-center gap-2">
            <Button variant="dark-utility" className="hidden sm:inline-flex">
              <svg
                aria-hidden="true"
                className="size-3.5"
                viewBox="0 0 14 14"
                fill="none"
              >
                <circle
                  cx="6.5"
                  cy="6.5"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10.5 10.5L13 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="ml-1.5">Buscar</span>
            </Button>
            <Button variant="dark-utility" className="hidden sm:inline-flex">
              <svg
                aria-hidden="true"
                className="size-3.5"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 4.5h8l-.8 7.2a1 1 0 0 1-1 .9H4.8a1 1 0 0 1-1-.9L3 4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="M5 5V3.6a2 2 0 0 1 4 0V5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
              <span className="ml-1.5">Bolsa</span>
            </Button>
            {/* Hamburguesa — solo <= 833px */}
            <button
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex size-8 items-center justify-center text-on-dark lg:hidden"
            >
              <svg
                aria-hidden="true"
                className="size-5"
                viewBox="0 0 20 20"
                fill="none"
              >
                {open ? (
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 6h14M3 10h14M3 14h14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Tray móvil */}
        <div
          className={cn(
            "overflow-hidden bg-surface-black transition-[max-height] duration-200 lg:hidden",
            open ? "max-h-48" : "max-h-0",
          )}
        >
          <nav className="flex flex-col gap-1 px-5 py-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-on-dark"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </GlobalNav>

      <SubNavFrosted>
        <div className="mx-auto flex h-[52px] max-w-[1440px] items-center justify-between">
          <span className="font-display font-semibold text-tagline">
            Apple Design System
          </span>
          <Button
            variant="primary"
            href="#descargar"
            className="px-5 py-2 text-caption"
          >
            Descargar
          </Button>
        </div>
      </SubNavFrosted>
    </header>
  );
}

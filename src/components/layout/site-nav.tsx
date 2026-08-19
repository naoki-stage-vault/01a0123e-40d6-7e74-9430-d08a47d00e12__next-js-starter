"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DESIGN_MD_URL } from "@/components/design-system/button-primary";

const LINKS = [
  { href: "#componentes", label: "Componentes" },
  { href: "#como-se-usa", label: "Cómo se usa" },
];

/**
 * Site navigation. §4.2 collapsing strategy: full nav ≥834px, hamburger
 * below 834px (at the 833 breakpoint and down). The download action in the
 * nav stays a text link so the primary button remains the only
 * highest-hierarchy element on the page.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-canvas">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-[17px] font-semibold tracking-[-0.28px] text-ink"
        >
          Apple Design System
        </a>

        {/* Full nav — ≥834px (lg) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[17px] text-ink-secondary transition-transform duration-300 ease-out active:scale-95"
            >
              {link.label}
            </a>
          ))}
          <a
            href={DESIGN_MD_URL}
            className="text-[17px] text-action-blue transition-transform duration-300 ease-out active:scale-95"
          >
            Descargar design.md
          </a>
        </nav>

        {/* Hamburger — <834px */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-pill text-ink transition-transform duration-300 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-action-blue/35 lg:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "flex flex-col gap-4 border-t border-black/8 bg-canvas px-6 py-4 lg:hidden"
            )}
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[17px] text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={DESIGN_MD_URL}
              onClick={() => setOpen(false)}
              className="text-[17px] text-action-blue"
            >
              Descargar design.md
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

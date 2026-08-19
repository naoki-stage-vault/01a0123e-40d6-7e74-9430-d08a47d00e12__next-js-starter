import { DESIGN_MD_URL } from "@/components/design-system/button-primary";

/**
 * §2.5 footer — ink surface, caption 12px in white-72, hairline
 * separators, links active in action-blue. No hover documented.
 */
export function Footer() {
  return (
    <footer className="bg-ink px-6 py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white-72">
          © 2025 — Design system extraído de apple.com, listo para tu IA.
        </p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={DESIGN_MD_URL}
            className="text-xs text-white-72 transition-colors duration-300 ease-out active:text-action-blue"
          >
            Descargar design.md
          </a>
        </nav>
      </div>
    </footer>
  );
}

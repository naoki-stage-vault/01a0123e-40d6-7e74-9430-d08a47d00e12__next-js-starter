import { Footer as FooterChrome } from "@/components/ui/footer";
import { DenseLink, CaptionStrong, FinePrint } from "@/components/ui/typography";

const COLUMNS = [
  {
    title: "Design system",
    links: [
      { label: "Componentes en vivo", href: "#componentes" },
      { label: "El spec completo", href: "#spec" },
      { label: "Descargar design.md", href: "/DESIGN-apple.md" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "DESIGN-apple.md", href: "/DESIGN-apple.md" },
      { label: "Tokens YAML", href: "/DESIGN-apple.md" },
      { label: "Do's & Don'ts", href: "/DESIGN-apple.md" },
    ],
  },
  {
    title: "Notas",
    links: [
      { label: "Breakpoints 480–1440px", href: "/DESIGN-apple.md" },
      { label: "Una sola sombra", href: "/DESIGN-apple.md" },
      { label: "Action Blue #0066cc", href: "/DESIGN-apple.md" },
    ],
  },
] as const;

/**
 * {component.footer} — Parchment, columnas en {typography.dense-link}
 * (17px / 2.41, el leading relajado que hace escaneables las columnas),
 * cabeceras en caption-strong, fila legal en fine-print ink-muted-48.
 */
export function SiteFooter() {
  return (
    <FooterChrome>
      <div className="mx-auto max-w-[980px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <CaptionStrong className="text-ink-muted-80">
                {col.title}
              </CaptionStrong>
              <ul className="mt-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <DenseLink
                      href={link.href}
                      className="text-ink-muted-80 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </DenseLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 border-t border-hairline pt-6">
          <FinePrint className="text-ink-muted-48">
            Design system extraído de apple.com con fines educativos. Apple,
            SF Pro y el logo de Apple son marcas de Apple Inc. Este archivo no
            está afiliado ni respaldado por Apple.
          </FinePrint>
        </div>
      </div>
    </FooterChrome>
  );
}

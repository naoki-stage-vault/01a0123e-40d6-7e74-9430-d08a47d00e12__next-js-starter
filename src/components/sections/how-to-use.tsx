import { DisplayMd, Body } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductTileLight } from "@/components/ui/product-tile";
import { StoreUtilityCard } from "@/components/ui/store-utility-card";
import { Reveal } from "@/components/ui/reveal";

type Step = {
  n: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Descarga design.md",
    body: "Un solo archivo, YAML + Markdown, con cada token referenciado: color, tipografía, spacing, radios, la sombra única y todos los componentes.",
    cta: { label: "Descargar", href: "/DESIGN-apple.md" },
  },
  {
    n: "02",
    title: "Pégalo en tu IA de código",
    body: "Pásalo como contexto (p.ej. en las instructions de tu agente). Los refs {token.refs} hacen que el spec sea ejecutable, no decorativo.",
  },
  {
    n: "03",
    title: "Pide el rediseño contra el spec",
    body: "Pídele a tu IA que rediseñe tu proyecto usando ese archivo como fuente de verdad: los tokens mandan, no los estilos inventados.",
    cta: { label: "Ver el spec", href: "#spec" },
  },
] satisfies Step[];

/**
 * Cómo se usa — 3 pasos en {component.store-utility-card} (canvas +
 * hairline + rounded.lg) sobre tile blanco. Número como Badge pill;
 * sin sombras en las cards (la sombra es solo para producto).
 */
export function HowToUse() {
  return (
    <ProductTileLight id="como-se-usa">
      <div className="mx-auto max-w-[1440px] px-6">
        <Reveal className="flex flex-col items-center text-center">
          <Badge variant="secondary">Workflow</Badge>
          <DisplayMd className="mt-4">Cómo se usa</DisplayMd>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1} className="h-full">
              <StoreUtilityCard className="flex h-full flex-col items-start">
                <Badge variant="secondary">{step.n}</Badge>
                <h3 className="mt-5 font-display text-display-md font-semibold text-balance">
                  {step.title}
                </h3>
                <Body className="mt-3 flex-1 text-ink-muted-80">{step.body}</Body>
                {step.cta ? (
                  <Button
                    variant={step.n === "01" ? "primary" : "secondary-pill"}
                    href={step.cta.href}
                    download={step.n === "01" ? "DESIGN-apple.md" : undefined}
                    className="mt-6"
                  >
                    {step.cta.label}
                  </Button>
                ) : null}
              </StoreUtilityCard>
            </Reveal>
          ))}
        </div>
      </div>
    </ProductTileLight>
  );
}

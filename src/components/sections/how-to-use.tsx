import { DisplayMd, Body, Caption } from "@/components/ui/typography";
import { ProductTileParchment } from "@/components/ui/product-tile";
import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  {
    n: "01",
    title: "Descarga design.md",
    body: "Un solo archivo, YAML + Markdown, con cada token referenciado: color, tipografía, spacing, radios, la sombra única y todos los componentes.",
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
  },
] as const;

/**
 * Cómo se usa — 3 pasos sobre {component.product-tile-parchment}.
 * Sin cards ni sombras: el número actúa de cabecera; superficie y tipografía
 * hacen el trabajo (regla 7 del iteration guide).
 */
export function HowToUse() {
  return (
    <ProductTileParchment id="como-se-usa">
      <div className="mx-auto flex max-w-[980px] flex-col items-center px-6">
        <Reveal>
          <DisplayMd className="text-center text-balance">
            Cómo se usa
          </DisplayMd>
        </Reveal>
        <div className="mt-14 grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <Caption className="font-semibold text-primary">
                  {step.n}
                </Caption>
                <h3 className="mt-3 font-display text-display-md font-semibold text-balance">
                  {step.title}
                </h3>
                <Body className="mt-3 text-ink-muted-80">{step.body}</Body>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </ProductTileParchment>
  );
}

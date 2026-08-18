import { HeroDisplay } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { Badge } from "@/components/ui/badge";
import { ProductTileLight } from "@/components/ui/product-tile";
import { DeviceMock } from "@/components/ui/product-render";
import { Reveal } from "@/components/ui/reveal";

/**
 * Hero — superficie clara (product-tile-light).
 * Headline en {typography.hero-display} (56px) que se colapsa según el
 * spec: 40px a <=1068px, 34px a <=640px, 28px a <=419px.
 * CTA principal en {component.button-primary} (pill). El device-mock
 * demuestra la ÚNICA sombra del sistema sobre imagen de producto.
 */
export function Hero() {
  return (
    <ProductTileLight id="top">
      <div className="mx-auto flex max-w-[980px] flex-col items-center px-6 text-center">
        <Reveal>
          <Badge variant="outline" className="uppercase tracking-[0.14em]">
            Design system · YAML/Markdown · apple.com
          </Badge>
        </Reveal>
        <Reveal delay={0.08}>
          <HeroDisplay className="mt-6 max-sm:text-[34px] max-sm:tracking-[-0.374px] max-[419px]:text-[28px] max-[419px]:tracking-[-0.28px] max-xl:text-[40px] max-xl:tracking-0">
            Un design system de Apple, listo para tu IA.
          </HeroDisplay>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-[560px] font-text text-body text-ink-muted-80">
            Un solo archivo con tokens de color, tipografía, spacing, radios,
            componentes y reglas responsive — copiado literalmente de
            apple.com. Pégalo en el contexto de tu IA y redeséñalo todo.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button variant="primary" href="/DESIGN-apple.md" download="DESIGN-apple.md">
              Descargar design.md
            </Button>
            <TextLink href="#componentes">Ver componentes en vivo</TextLink>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <DeviceMock className="mt-16 max-w-xl" />
        </Reveal>
      </div>
    </ProductTileLight>
  );
}

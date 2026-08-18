import { DisplayLg, Tagline, MicroLegal } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductTileDark3 } from "@/components/ui/product-tile";
import { Reveal } from "@/components/ui/reveal";

/**
 * CTA final — {component.product-tile-dark-3} (#252527, el fondo del stack).
 * El botón de descarga del .md es el ÚNICO elemento con máxima jerarquía
 * visual de toda la página: button-store-hero (Action Blue, pill, 18px/300).
 */
export function FinalCta() {
  return (
    <ProductTileDark3 id="descargar">
      <div className="mx-auto flex max-w-[980px] flex-col items-center px-6 text-center">
        <Reveal>
          <Tagline className="text-body-muted">Listo para tu agente</Tagline>
        </Reveal>
        <Reveal delay={0.08}>
          <DisplayLg className="mt-3 text-balance">
            Lleva el idioma de Apple a tu proyecto.
          </DisplayLg>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-[520px] font-text text-body text-body-muted">
            Un archivo. Tu IA de código como intérprete. Tu interfaz rediseñada
            contra un spec real, sin inventar un solo token.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Badge variant="sky">Markdown + YAML</Badge>
            <Badge variant="sky">~570 líneas</Badge>
            <Badge variant="sky">Sin dependencias</Badge>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <Button
            variant="store-hero"
            href="/DESIGN-apple.md"
            download="DESIGN-apple.md"
            className="mt-10"
          >
            Descargar DESIGN-apple.md
          </Button>
        </Reveal>
        <Reveal delay={0.36}>
          <MicroLegal className="mt-6 text-body-muted">
            Do&apos;s &amp; Don&apos;ts incluidos: un solo acento, una sola
            sombra, body a 17px.
          </MicroLegal>
        </Reveal>
      </div>
    </ProductTileDark3>
  );
}

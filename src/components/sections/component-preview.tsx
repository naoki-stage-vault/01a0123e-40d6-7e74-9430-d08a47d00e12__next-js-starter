import { DisplayMd, Caption, BodyStrong } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextLink } from "@/components/ui/text-link";
import { SearchInput } from "@/components/ui/search-input";
import { ConfiguratorOptionChip } from "@/components/ui/configurator-option-chip";
import { ProductTileParchment } from "@/components/ui/product-tile";
import { StoreUtilityCard } from "@/components/ui/store-utility-card";
import { FloatingStickyBar } from "@/components/ui/floating-sticky-bar";
import { DeviceMock } from "@/components/ui/product-render";
import { Reveal } from "@/components/ui/reveal";
import {
  componentRefs as refs,
  shadowToken,
} from "@/lib/design-data";

const DEMOS = [
  {
    key: "button",
    name: "CTA primario",
    token: refs.buttonPrimary,
    render: (
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" href="/DESIGN-apple.md" download="DESIGN-apple.md">
          Descargar
        </Button>
        <Button variant="secondary-pill" href="#spec">
          Ver spec
        </Button>
      </div>
    ),
  },
  {
    key: "search",
    name: "Búsqueda",
    token: refs.searchInput,
    render: <SearchInput placeholder="Buscar accesorios…" aria-label="Buscar" />,
  },
  {
    key: "chips",
    name: "Configurador",
    token: refs.configuratorChip,
    render: (
      <div className="flex flex-wrap gap-2.5">
        <ConfiguratorOptionChip>Estuche · $49</ConfiguratorOptionChip>
        <ConfiguratorOptionChip>Cable · $29</ConfiguratorOptionChip>
      </div>
    ),
  },
  {
    key: "utility",
    name: "Utilidades",
    token: refs.buttonDarkUtility,
    render: (
      <div className="flex flex-wrap gap-2.5">
        <Button variant="dark-utility">Sign In</Button>
        <Button variant="pearl-capsule">Añadir</Button>
      </div>
    ),
  },
] as const;

/**
 * Componentes — galería de {component.store-utility-card} sobre parchment:
 * imagen 1:1 (rounded.sm) + shadow de producto arriba, nombre en
 * body-strong, ref de token, y el componente real como demo.
 * Grid 4 -> 2 -> 1 columnas (estrategia del spec). Abajo, una demo de
 * {component.floating-sticky-bar}.
 */
export function ComponentPreview() {
  return (
    <ProductTileParchment id="componentes">
      <div className="mx-auto max-w-[1440px] px-6">
        <Reveal className="flex flex-col items-center text-center">
          <Badge variant="secondary">Componentes en vivo</Badge>
          <DisplayMd className="mt-4">Tu spec, ya renderizado.</DisplayMd>
          <Caption className="mt-3 max-w-[560px] text-ink-muted-48">
            Cada card es {refs.storeUtilityCard} (canvas, hairline, rounded.lg)
            con el render de producto reposando y la sombra única del sistema.
          </Caption>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {DEMOS.map((demo, i) => (
            <Reveal key={demo.key} delay={i * 0.08} className="h-full">
              <StoreUtilityCard className="flex h-full flex-col">
                <DeviceMock square />
                <div className="mt-5 flex flex-col gap-1">
                  <BodyStrong>{demo.name}</BodyStrong>
                  <Caption className="font-mono text-[13px] text-ink-muted-48">
                    {demo.token}
                  </Caption>
                </div>
                <div className="mt-5">{demo.render}</div>
              </StoreUtilityCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-6">
          <FloatingStickyBar className="flex items-center justify-between rounded-lg">
            <span className="font-text text-body">Total · $1.299</span>
            <Button variant="primary" className="px-5 py-2 text-caption">
              Añadir a la bolsa
            </Button>
          </FloatingStickyBar>
          <Caption className="mt-2 text-center text-ink-muted-48">
            {refs.floatingStickyBar} · parchment 80% + blur · sombra solo en
            producto ({shadowToken})
          </Caption>
        </Reveal>

        <Reveal delay={0.16} className="mt-10 text-center">
          <TextLink href="#spec">Ver el detalle de todos los tokens →</TextLink>
        </Reveal>
      </div>
    </ProductTileParchment>
  );
}

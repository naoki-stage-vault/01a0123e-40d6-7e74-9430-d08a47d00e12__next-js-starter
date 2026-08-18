import { DisplayLg, Tagline, Caption } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { TextLinkOnDark } from "@/components/ui/text-link-on-dark";
import { SearchInput } from "@/components/ui/search-input";
import { ConfiguratorOptionChip } from "@/components/ui/configurator-option-chip";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DeviceMock } from "@/components/ui/product-render";
import { ProductTileDark, ProductTileLight } from "@/components/ui/product-tile";
import { Reveal } from "@/components/ui/reveal";

/**
 * Preview — componentes del propio design.md renderizados en vivo.
 * Alterna product-tile-dark (surface-tile-1) y product-tile-light:
 * el cambio de superficie es el único separador. Tabs para alternar
 * entre tiles oscuro/claro con los componentes del spec dentro.
 */
export function ComponentPreview() {
  return (
    <section id="componentes">
      <ProductTileDark>
        <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 text-center">
          <Reveal>
            <Tagline className="text-body-muted">Los componentes, en vivo</Tagline>
          </Reveal>
          <Reveal delay={0.08}>
            <DisplayLg className="mt-3">Tu spec, ya renderizado.</DisplayLg>
          </Reveal>

          <Reveal delay={0.16}>
            <Tabs defaultValue="dark" className="mt-10 w-full max-w-3xl">
              <TabsList>
                <TabsTrigger value="dark">Tile oscuro</TabsTrigger>
                <TabsTrigger value="light">Tile claro</TabsTrigger>
              </TabsList>

              <TabsContent value="dark">
                <div className="flex flex-col items-center gap-8">
                  <DeviceMock className="max-w-md" />
                  <div className="flex flex-col items-center gap-5 sm:flex-row">
                    <div className="flex flex-col items-center gap-2">
                      <Button
                        variant="primary"
                        href="/DESIGN-apple.md"
                        download="DESIGN-apple.md"
                      >
                        Descargar
                      </Button>
                      <Caption className="text-body-muted">
                        {`{component.button-primary}`}
                      </Caption>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <TextLinkOnDark href="#como-se-usa">
                        Cómo se usa el spec
                      </TextLinkOnDark>
                      <Caption className="text-body-muted">
                        {`{component.text-link-on-dark}`}
                      </Caption>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="light">
                <div className="flex flex-col items-center gap-8">
                  <div className="flex w-full max-w-xl flex-col items-center gap-5">
                    <div className="w-full">
                      <SearchInput
                        placeholder="Buscar accesorios…"
                        aria-label="Buscar"
                      />
                      <Caption className="mt-2 text-ink-muted-48">
                        {`{component.search-input}`} · pill, 44px, body 17px
                      </Caption>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <ConfiguratorOptionChip>Estuche · $49</ConfiguratorOptionChip>
                      <ConfiguratorOptionChip>Cable · $29</ConfiguratorOptionChip>
                      <Button variant="secondary-pill" href="#descargar">
                        Ver el archivo
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Reveal>

          <Reveal delay={0.24}>
            <Caption className="mt-10 text-body-muted">
              Superficie: {`{component.product-tile-dark}`} · #272729 ↔{" "}
              {`{component.product-tile-light}`} · #ffffff
            </Caption>
          </Reveal>
        </div>
      </ProductTileDark>
    </section>
  );
}

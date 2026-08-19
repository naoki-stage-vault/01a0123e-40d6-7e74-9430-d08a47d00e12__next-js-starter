import { DisplayMd, Caption } from "@/components/ui/typography";
import { ProductTileDark } from "@/components/ui/product-tile";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  colors,
  typography,
  radii,
  spacing,
  breakpoints,
  shadowToken,
} from "@/lib/design-data";

const darkRow = "border-white/10";
const tokenCell = "font-mono text-[13px] text-body-muted";
const useCell = "text-body-muted";
const mono = "whitespace-nowrap font-mono text-[13px]";

/**
 * Spec — "Lo que contiene design.md": los tokens del archivo expuestos en
 * tabs sobre {component.product-tile-dark}. La tabla de colores muestra
 * swatch + token + uso; tipografía y radios usan el token real; responsive
 * la estrategia de colapso.
 */
export function SpecSection() {
  return (
    <ProductTileDark id="spec">
      <div className="mx-auto max-w-[980px] px-6">
        <Reveal className="flex flex-col items-center text-center">
          <Badge variant="sky">Lo que contiene design.md</Badge>
          <DisplayMd className="mt-4 text-on-dark">El spec completo, en vivo.</DisplayMd>
          <Caption className="mt-3 max-w-[560px] text-body-muted">
            Cada fila de estas tablas sale directamente del archivo: token,
            valor y uso. Nada está inventado.
          </Caption>
        </Reveal>

        <Reveal delay={0.1}>
          <Tabs defaultValue="color" className="mt-12">
            <TabsList className="w-full flex-wrap sm:w-auto">
              <TabsTrigger value="color">Color</TabsTrigger>
              <TabsTrigger value="type">Tipografía</TabsTrigger>
              <TabsTrigger value="shape">Formas y espacio</TabsTrigger>
              <TabsTrigger value="responsive">Responsive</TabsTrigger>
            </TabsList>

            <TabsContent value="color">
              <Table>
                <TableHeader>
                  <TableRow className={darkRow}>
                    <TableHead className="text-body-muted">Token</TableHead>
                    <TableHead className="text-body-muted">Color</TableHead>
                    <TableHead className="text-body-muted">Hex</TableHead>
                    <TableHead className="text-body-muted">Uso</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {colors.map((c) => (
                    <TableRow key={c.token} className={darkRow}>
                      <TableCell className={tokenCell}>{c.token}</TableCell>
                      <TableCell>
                        <span className="flex items-center gap-2.5">
                          <span
                            aria-hidden="true"
                            className="size-5 shrink-0 rounded-xs border border-white/20"
                            style={{ backgroundColor: c.value }}
                          />
                          <span className="whitespace-nowrap text-on-dark">
                            {c.name}
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className={mono}>{c.value}</TableCell>
                      <TableCell className={useCell}>{c.use}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="type">
              <Table>
                <TableHeader>
                  <TableRow className={darkRow}>
                    <TableHead className="text-body-muted">Token</TableHead>
                    <TableHead className="text-body-muted">Size</TableHead>
                    <TableHead className="text-body-muted">Peso</TableHead>
                    <TableHead className="text-body-muted">Line-height</TableHead>
                    <TableHead className="text-body-muted">Tracking</TableHead>
                    <TableHead className="text-body-muted">Uso</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {typography.map((t) => (
                    <TableRow key={t.token} className={darkRow}>
                      <TableCell className={tokenCell}>{t.token}</TableCell>
                      <TableCell className="whitespace-nowrap text-on-dark">
                        {t.size}
                      </TableCell>
                      <TableCell className="text-on-dark">{t.weight}</TableCell>
                      <TableCell className="whitespace-nowrap text-on-dark">
                        {t.lineHeight}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-on-dark">
                        {t.tracking}
                      </TableCell>
                      <TableCell className={useCell}>{t.use}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="shape">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <Caption className="font-semibold text-on-dark">Radios</Caption>
                  <Table className="mt-2">
                    <TableBody>
                      {radii.map((r) => (
                        <TableRow key={r.token} className={darkRow}>
                          <TableCell className={tokenCell}>{r.token}</TableCell>
                          <TableCell className="whitespace-nowrap text-on-dark">
                            {r.value}
                          </TableCell>
                          <TableCell className={useCell}>{r.use}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div>
                  <Caption className="font-semibold text-on-dark">Spacing</Caption>
                  <Table className="mt-2">
                    <TableBody>
                      {spacing.map((s) => (
                        <TableRow key={s.token} className={darkRow}>
                          <TableCell className={tokenCell}>{s.token}</TableCell>
                          <TableCell className="whitespace-nowrap text-on-dark">
                            {s.value}
                          </TableCell>
                          <TableCell className={useCell}>{s.use}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Caption className="mt-6 text-body-muted">
                    Sombra única:{" "}
                    <code className="font-mono text-[13px] text-primary-on-dark">
                      {shadowToken}
                    </code>{" "}
                    — solo para renders de producto.
                  </Caption>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="responsive">
              <Table>
                <TableHeader>
                  <TableRow className={darkRow}>
                    <TableHead className="text-body-muted">Nombre</TableHead>
                    <TableHead className="text-body-muted">Ancho</TableHead>
                    <TableHead className="text-body-muted">Cambios clave</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {breakpoints.map((b) => (
                    <TableRow key={b.name} className={darkRow}>
                      <TableCell className="whitespace-nowrap text-on-dark">
                        {b.name}
                      </TableCell>
                      <TableCell className={mono}>{b.width}</TableCell>
                      <TableCell className={useCell}>{b.changes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>
    </ProductTileDark>
  );
}

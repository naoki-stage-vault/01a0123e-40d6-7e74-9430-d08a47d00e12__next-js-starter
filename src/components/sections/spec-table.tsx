import { DisplayMd, Caption } from "@/components/ui/typography";
import { ProductTileLight } from "@/components/ui/product-tile";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Reveal } from "@/components/ui/reveal";

const TYPOGRAPHY_ROWS = [
  { token: "hero-display", size: "56px", weight: "600", lh: "1.07", ls: "-0.28px" },
  { token: "display-lg", size: "40px", weight: "600", lh: "1.10", ls: "0" },
  { token: "display-md", size: "34px", weight: "600", lh: "1.47", ls: "-0.374px" },
  { token: "lead", size: "28px", weight: "400", lh: "1.14", ls: "0.196px" },
  { token: "tagline", size: "21px", weight: "600", lh: "1.19", ls: "0.231px" },
  { token: "body", size: "17px", weight: "400", lh: "1.47", ls: "-0.374px" },
  { token: "caption", size: "14px", weight: "400", lh: "1.43", ls: "-0.224px" },
  { token: "fine-print", size: "12px", weight: "400", lh: "1.0", ls: "-0.12px" },
] as const;

const BREAKPOINT_ROWS = [
  { bp: "≤ 419px", name: "Small phone", change: "Hero 28px · tiles single-column · padding 48px" },
  { bp: "420–640px", name: "Phone", change: "Hero 34px · renders 80% del tile" },
  { bp: "641–734px", name: "Large phone", change: "Padding 48px vertical · fine-print wrap" },
  { bp: "736–833px", name: "Tablet portrait", change: "Nav colapsa a hamburger" },
  { bp: "834–1068px", name: "Tablet landscape", change: "Nav expandida · grids 3→2 cols" },
  { bp: "1069–1440px", name: "Desktop", change: "Layout full · content lock 1440px" },
  { bp: "≥ 1441px", name: "Wide desktop", change: "Contenido fijado a 1440px" },
] as const;

const COLORS_ROWS = [
  { token: "primary", value: "#0066cc", use: "Único acento interactivo" },
  { token: "primary-focus", value: "#0071e3", use: "Anillo de foco" },
  { token: "primary-on-dark", value: "#2997ff", use: "Links en tiles oscuros" },
  { token: "ink", value: "#1d1d1f", use: "Texto y títulos" },
  { token: "canvas", value: "#ffffff", use: "Superficie dominante" },
  { token: "canvas-parchment", value: "#f5f5f7", use: "Alternancia y footer" },
  { token: "surface-tile-1", value: "#272729", use: "Tile oscuro principal" },
  { token: "surface-tile-2", value: "#2a2a2c", use: "Micro-paso claro" },
  { token: "surface-tile-3", value: "#252527", use: "Fondo del stack" },
  { token: "surface-black", value: "#000000", use: "Global nav (único negro puro)" },
] as const;

/**
 * Spec — el contenido de DESIGN-apple.md en vivo, sin descargarlo.
 * Tabs con tokens de color / tipografía / breakpoints; la tabla sigue
 * la gramática del spec (caption-strong + body + hairlines).
 */
export function SpecTable() {
  return (
    <ProductTileLight id="spec">
      <div className="mx-auto flex max-w-[980px] flex-col items-center px-6">
        <Reveal>
          <DisplayMd className="text-center text-balance">
            Lo que hay dentro del archivo
          </DisplayMd>
        </Reveal>
        <Reveal delay={0.1}>
          <Tabs defaultValue="colors" className="mt-10 w-full">
            <TabsList>
              <TabsTrigger value="colors">Color</TabsTrigger>
              <TabsTrigger value="type">Tipografía</TabsTrigger>
              <TabsTrigger value="responsive">Responsive</TabsTrigger>
            </TabsList>

            <TabsContent value="colors">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Token</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Uso</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {COLORS_ROWS.map((r) => (
                    <TableRow key={r.token}>
                      <TableCell className="font-mono text-caption">{`{colors.${r.token}}`}</TableCell>
                      <TableCell className="font-mono text-caption">{r.value}</TableCell>
                      <TableCell>{r.use}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="type">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Token</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Peso</TableHead>
                    <TableHead>LH</TableHead>
                    <TableHead>Tracking</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {TYPOGRAPHY_ROWS.map((r) => (
                    <TableRow key={r.token}>
                      <TableCell className="font-mono text-caption">{`{typography.${r.token}}`}</TableCell>
                      <TableCell>{r.size}</TableCell>
                      <TableCell>{r.weight}</TableCell>
                      <TableCell>{r.lh}</TableCell>
                      <TableCell>{r.ls}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="responsive">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Breakpoint</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Cambios clave</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {BREAKPOINT_ROWS.map((r) => (
                    <TableRow key={r.bp}>
                      <TableCell className="font-mono text-caption">{r.bp}</TableCell>
                      <TableCell>{r.name}</TableCell>
                      <TableCell>{r.change}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </Reveal>
        <Reveal delay={0.18}>
          <Caption className="mt-8 text-ink-muted-48">
            El archivo completo incluye además todos los componentes y la
            sección Do&apos;s &amp; Don&apos;ts — 563 líneas, verbatim.
          </Caption>
        </Reveal>
      </div>
    </ProductTileLight>
  );
}

import { DisplayMd, Caption } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { ProductTileParchment } from "@/components/ui/product-tile";
import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "¿Qué contiene design.md?",
    a: "El análisis completo de apple.com como spec ejecutable: tokens de color (con Action Blue #0066cc como único acento), la escala tipográfica SF Pro (body siempre 17px/400), spacing y radios, la sombra única para producto, todos los componentes y la estrategia responsive con breakpoints exactos (480/640/734/833/1068/1440px).",
  },
  {
    q: "¿Cómo uso los refs {token.refs}?",
    a: "Cada componente y token se referencia por su key YAML: {component.button-primary}, {typography.body}, {colors.primary}… La regla 3 del iteration guide manda: usa refs por todos lados, nunca hex inline. Así tu IA resuelve el sistema entero desde el archivo.",
  },
  {
    q: "¿Por qué hay una sola sombra?",
    a: "rgba(0,0,0,0.22) 3px 5px 30px, aplicada solo a renders de producto reposando sobre una superficie. Nunca a cards, botones ni texto: la elevación de la UI sale del cambio de superficie (claro ↔ oscuro) y del blur de las barras sticky.",
  },
  {
    q: "¿Y el hover?",
    a: "El spec no documenta hover — solo estados Default y Active/Pressed. El micro-interacción system-wide es transform: scale(0.95) en el press de cada botón; el foco de teclado usa Focus Blue #0071e3 (outline 2px).",
  },
  {
    q: "¿SF Pro no es propietario?",
    a: "Sí. Fuera de Apple el spec recomienda system-ui/-apple-system primero (resuelve a SF real en macOS/iOS) e Inter como sustituto open-source en el resto: Inter 600 con font-feature-settings ss03, tracking -0.01em en display y line-height 1.44 en body.",
  },
] as const;

/**
 * FAQ — preguntas respondidas 100% con contenido de DESIGN-apple.md
 * (iteration guide, shadow philosophy, do's & don'ts, font substitutes).
 * {component.product-tile-parchment} + accordion shadcn con hairlines.
 */
export function FaqSection() {
  return (
    <ProductTileParchment id="faq">
      <div className="mx-auto max-w-[980px] px-6">
        <Reveal className="flex flex-col items-center text-center">
          <Badge variant="secondary">Detalles del spec</Badge>
          <DisplayMd className="mt-4">Preguntas frecuentes</DisplayMd>
          <Caption className="mt-3 max-w-[560px] text-ink-muted-48">
            Todo lo que responde esta sección está escrito en design.md —
            iteración, sombra única, hover y sustitutos de fuente.
          </Caption>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12 text-left">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </ProductTileParchment>
  );
}

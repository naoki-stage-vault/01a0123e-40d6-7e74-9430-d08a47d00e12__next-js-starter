import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { ComponentPreview } from "@/components/sections/component-preview";
import { SpecSection } from "@/components/sections/spec-section";
import { HowToUse } from "@/components/sections/how-to-use";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/sections/site-footer";

/**
 * Landing de distribución de DESIGN-apple.md.
 * Ritmo de secciones (spec): claro → parchment → oscuro → claro → parchment
 * → oscuro → parchment. El cambio de superficie es el único separador.
 */
export default function Home() {
  return (
    <main className="flex-1">
      <SiteNav />
      <Hero />
      <ComponentPreview />
      <SpecSection />
      <HowToUse />
      <FaqSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}

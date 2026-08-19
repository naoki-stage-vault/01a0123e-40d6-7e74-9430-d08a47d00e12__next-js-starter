import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { DESIGN_MD_URL } from "@/components/design-system/button-primary";
import { ProductImage } from "@/components/design-system/product-image";

/**
 * §2.2 product-tile-light — full-bleed, zero radius, canvas-parchment
 * surface, ink text, CTA link in action-blue.
 */
export function ProductTileLight({
  className,
  heading = "Light tile, cero radio",
  body = "Superficie canvas-parchment, texto ink e ink-secondary, CTA en action-blue. El único shadow de la página vive en la imagen de producto — nunca en la tarjeta.",
  ctaLabel = "Descargar spec",
}: {
  className?: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
}) {
  return (
    <section
      className={cn(
        "w-full bg-canvas-parchment px-6 py-16 md:px-16 md:py-20",
        className
      )}
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-2">
        <ProductImage tone="light" />
        <div>
          <h3 className="font-display text-[32px] font-semibold leading-[1.125] tracking-[-0.28px] text-ink">
            {heading}
          </h3>
          <p className="mt-4 max-w-md text-[17px] text-ink-secondary">{body}</p>
          <a
            href={DESIGN_MD_URL}
            className={cn(
              buttonVariants({ variant: "link" }),
              "mt-6 justify-start"
            )}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

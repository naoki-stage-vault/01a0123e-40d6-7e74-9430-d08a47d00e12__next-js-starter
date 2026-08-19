import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { DESIGN_MD_URL } from "@/components/design-system/button-primary";
import { ProductImage } from "@/components/design-system/product-image";

/**
 * §2.3 product-tile-dark — full-bleed, zero radius, tile-dark surface,
 * canvas / white-72 text, CTA link in action-blue.
 */
export function ProductTileDark({
  className,
  heading = "Dark tile, misma regla",
  body = "Superficie tile-dark, texto canvas y white-72. Misma anatomía que el light tile: imagen con el shadow del sistema, headline 600 con tracking negativo, body 17/400/1.47.",
  ctaLabel = "Descargar spec",
}: {
  className?: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
}) {
  return (
    <section
      className={cn("w-full bg-tile-dark px-6 py-16 md:px-16 md:py-20", className)}
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-2">
        <div className="md:order-2">
          <ProductImage tone="dark" />
        </div>
        <div className="md:order-1">
          <h3 className="font-display text-[32px] font-semibold leading-[1.125] tracking-[-0.28px] text-canvas">
            {heading}
          </h3>
          <p className="mt-4 max-w-md text-[17px] text-white-72">{body}</p>
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

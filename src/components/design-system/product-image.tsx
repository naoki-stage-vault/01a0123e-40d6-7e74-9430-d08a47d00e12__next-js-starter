import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

/**
 * Product visual. The ONLY element allowed to carry the system shadow
 * (§1.5: 3px 5px 30px rgba(0,0,0,0.22)) and the image radius (§1.4: 24px).
 */
export function ProductImage({
  tone = "light",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label="Imagen de producto"
      className={cn(
        "overflow-hidden rounded-image shadow-product",
        tone === "dark" ? "bg-tile-dark-2" : "bg-canvas",
        className
      )}
    >
      <div className="flex aspect-[4/3] items-center justify-center">
        <div
          className={cn(
            "flex aspect-[9/19] h-3/5 flex-col items-center justify-start rounded-[1.1rem] pt-[10%]",
            tone === "dark"
              ? "border border-white-72/20 bg-tile-dark-3"
              : "border border-ink/10 bg-canvas-parchment"
          )}
        >
          <div className="h-1.5 w-1/3 rounded-full bg-action-blue/30" />
        </div>
      </div>
    </div>
  );
}

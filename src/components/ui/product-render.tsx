import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * ProductRender — la ÚNICA sombra del sistema aplicada a imagen de
 * producto reposando sobre una superficie (rgba(0,0,0,0.22) 3px 5px 30px).
 * Nunca en cards, botones ni texto. El radio es de gramática de imagen
 * (rounded.lg accesorio 1:1, rounded.sm imagen de card).
 */

export function ProductRender({
  className,
  radius = "rounded-lg",
  children,
}: {
  className?: string;
  radius?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn("bg-ink p-2 shadow-product", radius, className)}
      aria-hidden={!children}
    >
      {children}
    </div>
  );
}

/**
 * DeviceMock — render de "producto" abstracto (CSS, sin fotografía real):
 * un cuerpo oscuro con pantalla y mini-UI. Demuestra el shadow del sistema
 * sobre superficie clara u oscura.
 */
export function DeviceMock({
  className,
  square = false,
}: {
  className?: string;
  square?: boolean;
}) {
  return (
    <ProductRender
      className={cn("w-full", square && "aspect-square", className)}
      radius={square ? "rounded-sm" : "rounded-lg"}
    >
      <div
        className={cn(
          "flex w-full flex-col justify-between gap-4 bg-surface-tile-2 p-4 sm:p-6",
          square ? "aspect-square" : "aspect-[16/10]",
        )}
      >
        <div className="flex gap-1.5">
          <span className="size-1.5 rounded-full bg-white/25" />
          <span className="size-1.5 rounded-full bg-white/25" />
          <span className="size-1.5 rounded-full bg-white/25" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-3/4 rounded-full bg-white/20" />
          <div className="h-2 w-1/2 rounded-full bg-white/10" />
          <span className="mt-4 inline-flex rounded-pill bg-primary px-4 py-1.5 font-text text-fine-print text-on-primary">
            Action
          </span>
        </div>
      </div>
    </ProductRender>
  );
}

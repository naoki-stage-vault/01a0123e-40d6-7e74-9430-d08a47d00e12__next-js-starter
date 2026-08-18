import { InteractiveElement, pressable, type ButtonProps } from "./button-base";
import { cn } from "@/lib/utils";

/**
 * {component.button-pearl-capsule} — Botón secundario de product-card.
 * Fondo {colors.surface-pearl}, texto ink-muted-80 en {typography.caption}
 * (14px), border 3px {colors.divider-soft} (anillo suave, no línea dura),
 * rounded {rounded.md} (11px), padding 8px × 14px.
 */
export function ButtonPearlCapsule({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <InteractiveElement
      base={cn(
        pressable,
        "bg-surface-pearl text-ink-muted-80 font-text text-caption rounded-md border-[3px] border-divider-soft px-[14px] py-[8px]",
      )}
      className={className}
      {...props}
    >
      {children}
    </InteractiveElement>
  );
}

import { InteractiveElement, pressable, type ButtonProps } from "./button-base";
import { cn } from "@/lib/utils";

/**
 * {component.button-icon-circular} — Control circular sobre fotografía.
 * 44 × 44px, fondo {colors.surface-chip-translucent} al ~64% de alpha,
 * icono en {colors.ink}, rounded {rounded.full}.
 */
export function ButtonIconCircular({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <InteractiveElement
      base={cn(
        pressable,
        "bg-surface-chip-translucent/64 text-ink rounded-full size-11",
      )}
      className={className}
      {...props}
    >
      {children}
    </InteractiveElement>
  );
}

import { InteractiveElement, pressable, type ButtonProps } from "./button-base";
import { cn } from "@/lib/utils";

/**
 * {component.button-dark-utility} — Acciones de la global nav (Sign In, Bag).
 * Fondo {colors.ink}, texto on-dark en {typography.button-utility} (14px),
 * rounded {rounded.sm} (8px), padding 8px × 15px.
 */
export function ButtonDarkUtility({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <InteractiveElement
      base={cn(
        pressable,
        "bg-ink text-on-dark font-text text-button-utility rounded-sm px-[15px] py-[8px]",
      )}
      className={className}
      {...props}
    >
      {children}
    </InteractiveElement>
  );
}

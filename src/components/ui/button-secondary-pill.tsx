import { InteractiveElement, pressable, type ButtonProps } from "./button-base";
import { cn } from "@/lib/utils";

/**
 * {component.button-secondary-pill} — El segundo CTA cuando hay dos pills.
 * Fondo transparente, texto Action Blue, 1px border Action Blue,
 * rounded {rounded.pill}, padding 11px × 22px. "Ghost pill".
 */
export function ButtonSecondaryPill({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <InteractiveElement
      base={cn(
        pressable,
        "bg-transparent text-primary font-text text-body rounded-pill border border-primary px-[22px] py-[11px]",
      )}
      className={className}
      {...props}
    >
      {children}
    </InteractiveElement>
  );
}

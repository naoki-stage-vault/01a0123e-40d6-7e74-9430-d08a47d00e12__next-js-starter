import { InteractiveElement, pressable, type ButtonProps } from "./button-base";
import { cn } from "@/lib/utils";

/**
 * {component.button-store-hero} — CTA primario grande de store hero.
 * Mismo Action Blue + on-primary que button-primary, pero con
 * {typography.button-large} (18px / 300 — el raro peso 300) y
 * padding 14px × 28px. Uso escaso: solo la landing de store.
 */
export function ButtonStoreHero({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <InteractiveElement
      base={cn(
        pressable,
        "bg-primary text-on-primary font-text text-button-large rounded-pill px-[28px] py-[14px]",
      )}
      className={className}
      {...props}
    >
      {children}
    </InteractiveElement>
  );
}

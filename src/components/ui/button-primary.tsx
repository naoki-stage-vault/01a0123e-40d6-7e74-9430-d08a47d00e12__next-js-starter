import { InteractiveElement, pressable, type ButtonProps } from "./button-base";
import { cn } from "@/lib/utils";

/**
 * {component.button-primary} — La firma de Apple.
 * Action Blue #0066cc, texto on-primary en {typography.body} (17px/400),
 * rounded {rounded.pill}, padding 11px × 22px.
 * El radio pill ES la señal de acción de la marca.
 */
export function ButtonPrimary({ className, children, ...props }: ButtonProps) {
  return (
    <InteractiveElement
      base={cn(
        pressable,
        "bg-primary text-on-primary font-text text-body rounded-pill px-[22px] py-[11px]",
      )}
      className={className}
      {...props}
    >
      {children}
    </InteractiveElement>
  );
}

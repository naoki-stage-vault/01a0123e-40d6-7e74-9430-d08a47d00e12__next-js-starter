import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Base compartida por todos los botones del sistema.
 *
 * - `active:scale-95`: el micro-interacción system-wide documentado
 *   (`transform: scale(0.95)` en el estado Active/Pressed).
 * - El anillo de foco 2px Focus Blue sale del `:focus-visible` global.
 * - Polimórfico: con `href` renderiza <a>, sin él renderiza <button>.
 */

export const pressable =
  "inline-flex items-center justify-center cursor-pointer select-none border-0 transition-transform duration-100 ease-out active:scale-95";

type CommonProps = {
  className?: string;
  children: ReactNode;
};

export type ButtonAsButton = Omit<
  ComponentPropsWithoutRef<"button">,
  "className" | "children"
>;

export type ButtonAsAnchor = Omit<
  ComponentPropsWithoutRef<"a">,
  "className" | "children"
>;

export type ButtonProps = CommonProps & (ButtonAsButton | ButtonAsAnchor);

export function InteractiveElement({
  base,
  className,
  children,
  ...rest
}: ButtonProps & { base: string }) {
  const cls = cn(base, className);
  if ("href" in rest) {
    const { href, ...anchorProps } = rest as ButtonAsAnchor;
    return (
      <a href={href} className={cls} {...anchorProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}

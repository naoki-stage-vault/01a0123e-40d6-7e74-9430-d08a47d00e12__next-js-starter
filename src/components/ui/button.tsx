import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Button — familia {components.button-*} de DESIGN-apple.md expuesta al
 * estilo shadcn/ui. Cada variante mapea 1:1 a un componente del spec
 * (button-primary, button-secondary-pill, button-dark-utility,
 * button-pearl-capsule, button-store-hero, button-icon-circular).
 *
 * Todas comparten el micro-interacción system-wide del spec:
 * `transform: scale(0.95)` en el estado Active/Pressed (active:scale-95).
 * El anillo de foco 2px Focus Blue sale del :focus-visible global.
 * Polimórfico: href -> <a>, asChild -> Slot, si no -> <button>.
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer select-none transition-transform duration-100 ease-out active:scale-95 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-on-primary font-text text-body rounded-pill px-[22px] py-[11px]",
        "secondary-pill":
          "bg-transparent text-primary font-text text-body rounded-pill border border-primary px-[22px] py-[11px]",
        "dark-utility":
          "bg-ink text-on-dark font-text text-button-utility rounded-sm px-[15px] py-[8px]",
        "pearl-capsule":
          "bg-surface-pearl text-ink-muted-80 font-text text-caption rounded-md border-[3px] border-divider-soft px-[14px] py-[8px]",
        "store-hero":
          "bg-primary text-on-primary font-text text-button-large rounded-pill px-[28px] py-[14px]",
        "icon-circular":
          "bg-surface-chip-translucent/64 text-ink rounded-full size-11",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  href?: string;
  asChild?: boolean;
  className?: string;
  children: ReactNode;
};

export type ButtonProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof ButtonBaseProps> &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps>;

export function Button({
  variant,
  href,
  asChild,
  className,
  children,
  ...props
}: ButtonProps) {
  const cls = cn(buttonVariants({ variant }), className);
  if (asChild) {
    return <Slot className={cls}>{children}</Slot>;
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

export { buttonVariants };

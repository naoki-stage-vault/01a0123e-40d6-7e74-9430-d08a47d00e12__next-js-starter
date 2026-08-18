import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Badge (shadcn/ui) adaptado a los tokens del spec.
 * Forma pill ({rounded.pill} — gramática de chips/acción), texto en
 * {typography.fine-print} (12px / 400 / -0.12px). Informacional: nunca
 * lleva sombra.
 */

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 font-text text-fine-print font-normal",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary",
        secondary:
          "bg-surface-pearl text-ink-muted-80 border border-hairline",
        outline: "bg-transparent text-ink-muted-80 border border-hairline",
        dark: "bg-ink text-on-dark",
        sky: "bg-primary-on-dark/15 text-primary-on-dark",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export type BadgeProps = VariantProps<typeof badgeVariants> &
  ComponentPropsWithoutRef<"span">;

export function Badge({ variant, className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { badgeVariants };

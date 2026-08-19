import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Button primitives (shadcn/ui convention) styled from DESIGN-apple.md §2.1.
 * Documented states only: default | active (scale 0.95) | focus-visible.
 * No hover is documented.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-text text-[17px] font-semibold leading-none text-canvas transition-transform duration-300 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-action-blue/35 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /** §2.1 button-primary — action-blue surface, pill. */
        primary: "bg-action-blue text-canvas",
        /** §2.2/2.3 CTA link inside product tiles. */
        link: "bg-transparent px-0 text-action-blue",
      },
      size: {
        /** §2.1 — height 44px, padding-inline 24px. */
        default: "h-11 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

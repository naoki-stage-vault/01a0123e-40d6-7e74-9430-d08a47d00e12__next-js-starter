import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Input primitive (shadcn/ui convention) styled from DESIGN-apple.md §2.4
 * (search-input): pill radius, 17px/400, focus ring only — no hover.
 */
export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-11 w-full rounded-pill bg-black/8 px-4 font-text text-[17px] text-ink transition-colors duration-300 placeholder:text-ink-secondary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-action-blue/35 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

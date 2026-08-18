import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * {component.text-link} — Link en línea en Action Blue sobre superficie clara.
 * {typography.body} (17px / 400 / 1.47). Subrayado según contexto.
 */
export function TextLink({
  className,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={cn("font-text font-normal text-body text-primary underline", className)}
      {...props}
    />
  );
}

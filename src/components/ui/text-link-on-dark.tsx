import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * {component.text-link-on-dark} — Link en línea en Sky Link Blue #2997ff.
 * Solo sobre superficies oscuras: Action Blue desaparecería contra
 * {colors.surface-tile-1}.
 */
export function TextLinkOnDark({
  className,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={cn(
        "font-text font-normal text-body text-primary-on-dark underline",
        className,
      )}
      {...props}
    />
  );
}

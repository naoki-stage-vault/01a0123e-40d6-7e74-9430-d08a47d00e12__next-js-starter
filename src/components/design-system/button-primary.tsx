import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/** Route that serves DESIGN-apple.md as an attachment. */
export const DESIGN_MD_URL = "/design-apple";

/**
 * §2.1 button-primary — the page's single highest-hierarchy action:
 * downloading design.md. Do not style anything else with more prominence.
 */
export function ButtonPrimary({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <a
      href={DESIGN_MD_URL}
      className={cn(buttonVariants({ variant: "primary" }), className)}
    >
      <Download aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
      {label}
    </a>
  );
}

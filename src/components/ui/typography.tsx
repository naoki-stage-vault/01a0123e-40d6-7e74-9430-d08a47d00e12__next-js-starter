import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/*
 * Tipografía — {typography} de DESIGN-apple.md.
 * Cada token se expone como componente React independiente y reutilizable:
 * tamaño, peso, interlineado y tracking salen del token, nunca hardcodeados.
 */

type TypographyProps = ComponentPropsWithoutRef<"p"> & {
  className?: string;
};

/** hero-display — 56px / 600 / 1.07 / -0.28px. Headline de hero. */
export function HeroDisplay({ className, ...props }: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className={cn(
        "font-display font-semibold text-hero-display text-balance",
        className,
      )}
      {...props}
    />
  );
}

/** display-lg — 40px / 600 / 1.1 / 0. Headline de tile de producto. */
export function DisplayLg({ className, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={cn(
        "font-display font-semibold text-display-lg text-balance",
        className,
      )}
      {...props}
    />
  );
}

/** display-md — 34px / 600 / 1.47 / -0.374px. Cabeceras de sección. */
export function DisplayMd({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={cn(
        "font-text font-semibold text-display-md text-balance",
        className,
      )}
      {...props}
    />
  );
}

/** lead — 28px / 400 / 1.14 / 0.196px. Subcopy de tile. */
export function Lead({ className, ...props }: TypographyProps) {
  return (
    <p className={cn("font-display font-normal text-lead", className)} {...props} />
  );
}

/** lead-airy — 24px / 300 / 1.5 / 0. Lead ligero (el raro peso 300). */
export function LeadAiry({ className, ...props }: TypographyProps) {
  return (
    <p className={cn("font-text font-light text-lead-airy", className)} {...props} />
  );
}

/** tagline — 21px / 600 / 1.19 / 0.231px. Tagline de sub-tile / sub-nav. */
export function Tagline({ className, ...props }: TypographyProps) {
  return (
    <p className={cn("font-display font-semibold text-tagline", className)} {...props} />
  );
}

/** body — 17px / 400 / 1.47 / -0.374px. Párrafo por defecto (nunca 16px). */
export function Body({ className, ...props }: TypographyProps) {
  return (
    <p className={cn("font-text font-normal text-body", className)} {...props} />
  );
}

/** body-strong — 17px / 600 / 1.24 / -0.374px. Énfasis en línea. */
export function BodyStrong({ className, ...props }: ComponentPropsWithoutRef<"strong">) {
  return (
    <strong
      className={cn("font-text font-semibold text-body-strong", className)}
      {...props}
    />
  );
}

/** dense-link — 17px / 400 / 2.41 / 0. Columnas de enlaces del footer. */
export function DenseLink({ className, ...props }: ComponentPropsWithoutRef<"a">) {
  return (
    <a className={cn("font-text font-normal text-dense-link", className)} {...props} />
  );
}

/** caption — 14px / 400 / 1.43 / -0.224px. Leyendas y texto de botón. */
export function Caption({ className, ...props }: TypographyProps) {
  return (
    <p className={cn("font-text font-normal text-caption", className)} {...props} />
  );
}

/** caption-strong — 14px / 600 / 1.29 / -0.224px. Encabezados de columna. */
export function CaptionStrong({ className, ...props }: TypographyProps) {
  return (
    <p className={cn("font-text font-semibold text-caption-strong", className)} {...props} />
  );
}

/** button-large — 18px / 300 / 1 / 0. CTA de store hero (peso 300). */
export function ButtonLarge({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn("font-text font-light text-button-large", className)}
      {...props}
    />
  );
}

/** button-utility — 14px / 400 / 1.29 / -0.224px. Labels de utilidad. */
export function ButtonUtility({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn("font-text font-normal text-button-utility", className)}
      {...props}
    />
  );
}

/** fine-print — 12px / 400 / 1 / -0.12px. Cuerpo del footer y legal. */
export function FinePrint({ className, ...props }: TypographyProps) {
  return (
    <p className={cn("font-text font-normal text-fine-print", className)} {...props} />
  );
}

/** micro-legal — 10px / 400 / 1.3 / -0.08px. Descargos legales mínimos. */
export function MicroLegal({ className, ...props }: TypographyProps) {
  return (
    <p className={cn("font-text font-normal text-micro-legal", className)} {...props} />
  );
}

/** nav-link — 12px / 400 / 1 / -0.12px. Items de la global nav. */
export function NavLink({ className, ...props }: ComponentPropsWithoutRef<"a">) {
  return (
    <a className={cn("font-text font-normal text-nav-link", className)} {...props} />
  );
}

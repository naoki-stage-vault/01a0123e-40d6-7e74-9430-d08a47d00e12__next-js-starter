import { cn } from "@/lib/utils";

/**
 * Table (shadcn/ui) adaptado a los tokens del spec.
 * Cabeceras en caption-strong (14px/600), celdas en body (17px/400),
 * separadores hairline. Sin sombras.
 */

export function Table({ className, ...props }: React.ComponentPropsWithoutRef<"table">) {
  return (
    <div className="relative w-full overflow-x-auto">
      <table
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

export function TableHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"thead">) {
  return <thead className={cn("[&_tr]:border-b [&_tr]:border-hairline", className)} {...props} />;
}

export function TableBody({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"tbody">) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
}

export function TableRow({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"tr">) {
  return (
    <tr
      className={cn(
        "border-b border-hairline transition-colors",
        className,
      )}
      {...props}
    />
  );
}

export function TableHead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"th">) {
  return (
    <th
      className={cn(
        "h-10 px-3 text-left align-middle font-text text-caption-strong text-ink-muted-48 first:pl-0 last:pr-0",
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"td">) {
  return (
    <td
      className={cn(
        "px-3 py-3 align-middle font-text text-body text-ink first:pl-0 last:pr-0",
        className,
      )}
      {...props}
    />
  );
}

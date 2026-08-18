"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

/**
 * Tabs (shadcn/ui) adaptado a los tokens del spec.
 * El list pill sobre parchment usa la gramática de chips/acción
 * ({rounded.pill}); el trigger activo sube a canvas (pearl sobre
 * parchment, como {component.button-pearl-capsule}).
 */

export const Tabs = TabsPrimitive.Root;

export function TabsList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-pill bg-canvas-parchment p-1",
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-pill px-5 py-2 font-text text-caption text-ink-muted-80 transition-colors",
        "data-[state=active]:bg-canvas data-[state=active]:text-ink",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn("mt-8 focus-visible:outline-none", className)}
      {...props}
    />
  );
}

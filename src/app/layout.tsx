import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple Design System — spec listo para tu IA",
  description:
    "Design system extraído de Apple.com en un solo archivo design.md: tokens, componentes y reglas responsive listos para pegar en el contexto de tu IA de código.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}

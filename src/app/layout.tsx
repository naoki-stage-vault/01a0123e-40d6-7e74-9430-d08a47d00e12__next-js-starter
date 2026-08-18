import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple Design System — listo para tu IA",
  description:
    "Landing para descargar DESIGN-apple.md: un design system en YAML/Markdown extraído de apple.com, con tokens de color, tipografía, spacing, radios, sombra única y componentes.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-canvas text-ink font-text">
        {children}
      </body>
    </html>
  );
}

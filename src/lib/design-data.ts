/**
 * Datos del spec — espejo literal de DESIGN-apple.md (sección Colores,
 * Tipografía, Shapes, Layout y Responsive). La UI de la landing se
 * construye sobre esto, no sobre valores inventados.
 */

export type ColorEntry = {
  token: string;
  name: string;
  value: string;
  use: string;
};

export const colors: ColorEntry[] = [
  { token: "{colors.primary}", name: "Action Blue", value: "#0066cc", use: "El único acento interactivo: links, CTA pill, foco." },
  { token: "{colors.primary-focus}", name: "Focus Blue", value: "#0071e3", use: "Anillo de foco de teclado (outline 2px)." },
  { token: "{colors.primary-on-dark}", name: "Sky Link Blue", value: "#2997ff", use: "Links en superficies oscuras (solo dark)." },
  { token: "{colors.ink}", name: "Near-Black Ink", value: "#1d1d1f", use: "Headlines, body y relleno de utilidades." },
  { token: "{colors.canvas}", name: "Pure White", value: "#ffffff", use: "Canvas dominante, tiles claros, cards." },
  { token: "{colors.canvas-parchment}", name: "Parchment", value: "#f5f5f7", use: "Tiles claros alternos, footer, sub-nav." },
  { token: "{colors.surface-pearl}", name: "Pearl", value: "#fafafc", use: "Fondo de botones secundarios 'ghost'." },
  { token: "{colors.surface-tile-1}", name: "Tile 1", value: "#272729", use: "Tile oscuro principal del grid de producto." },
  { token: "{colors.surface-tile-2}", name: "Tile 2", value: "#2a2a2c", use: "Micro-step más claro entre tiles oscuros." },
  { token: "{colors.surface-tile-3}", name: "Tile 3", value: "#252527", use: "Micro-step más oscuro, fondo del stack." },
  { token: "{colors.surface-black}", name: "Pure Black", value: "#000000", use: "Global nav y frames de vídeo (único negro puro)." },
  { token: "{colors.ink-muted-80}", name: "Ink Muted 80", value: "#333333", use: "Texto sobre Pearl, subrayados." },
  { token: "{colors.ink-muted-48}", name: "Ink Muted 48", value: "#7a7a7a", use: "Disabled, legal y fine-print." },
  { token: "{colors.hairline}", name: "Hairline", value: "#e0e0e0", use: "Border 1px de cards y chips." },
];

export type TypeEntry = {
  token: string;
  size: string;
  weight: number;
  lineHeight: number;
  tracking: string;
  use: string;
};

export const typography: TypeEntry[] = [
  { token: "hero-display", size: "56px", weight: 600, lineHeight: 1.07, tracking: "-0.28px", use: "Headline de hero; el 'Apple tight'." },
  { token: "display-lg", size: "40px", weight: 600, lineHeight: 1.1, tracking: "0", use: "Headline de cada tile de producto." },
  { token: "display-md", size: "34px", weight: 600, lineHeight: 1.47, tracking: "-0.374px", use: "Cabeceras de sección." },
  { token: "lead", size: "28px", weight: 400, lineHeight: 1.14, tracking: "0.196px", use: "Subcopy de tile." },
  { token: "lead-airy", size: "24px", weight: 300, lineHeight: 1.5, tracking: "0", use: "Leads del environment (peso 300 raro)." },
  { token: "tagline", size: "21px", weight: 600, lineHeight: 1.19, tracking: "0.231px", use: "Tagline de tile; nombre en sub-nav." },
  { token: "body", size: "17px", weight: 400, lineHeight: 1.47, tracking: "-0.374px", use: "Párrafo por defecto (nunca 16px)." },
  { token: "body-strong", size: "17px", weight: 600, lineHeight: 1.24, tracking: "-0.374px", use: "Énfasis inline." },
  { token: "dense-link", size: "17px", weight: 400, lineHeight: 2.41, tracking: "0", use: "Columnas de links del footer." },
  { token: "caption", size: "14px", weight: 400, lineHeight: 1.43, tracking: "-0.224px", use: "Leyendas y texto de botón." },
  { token: "caption-strong", size: "14px", weight: 600, lineHeight: 1.29, tracking: "-0.224px", use: "Cabeceras de columna." },
  { token: "button-large", size: "18px", weight: 300, lineHeight: 1, tracking: "0", use: "CTA de store hero (peso 300)." },
  { token: "button-utility", size: "14px", weight: 400, lineHeight: 1.29, tracking: "-0.224px", use: "Labels de utilidad." },
  { token: "fine-print", size: "12px", weight: 400, lineHeight: 1, tracking: "-0.12px", use: "Legal y cuerpo del footer." },
  { token: "nav-link", size: "12px", weight: 400, lineHeight: 1, tracking: "-0.12px", use: "Items de la global nav." },
];

export type RadiusEntry = { token: string; value: string; use: string };

export const radii: RadiusEntry[] = [
  { token: "{rounded.none}", value: "0px", use: "Tiles full-bleed (sin esquinas)." },
  { token: "{rounded.sm}", value: "8px", use: "Botones utility, imagen de card 1:1." },
  { token: "{rounded.md}", value: "11px", use: "Pearl capsules." },
  { token: "{rounded.lg}", value: "18px", use: "Cards de utilidad (store/accessories)." },
  { token: "{rounded.pill}", value: "9999px", use: "CTA primario, chips, search — la firma." },
];

export const spacing: { token: string; value: string; use: string }[] = [
  { token: "{spacing.xxs}", value: "4px", use: "Ajustes tipográficos finos." },
  { token: "{spacing.xs}", value: "8px", use: "Base unit." },
  { token: "{spacing.sm}", value: "12px", use: "Gaps de botones." },
  { token: "{spacing.md}", value: "17px", use: "Rhythm del body (17px)." },
  { token: "{spacing.lg}", value: "24px", use: "Padding de cards." },
  { token: "{spacing.xl}", value: "32px", use: "Gaps de sección." },
  { token: "{spacing.xxl}", value: "48px", use: "Padding vertical en phone." },
  { token: "{spacing.section}", value: "80px", use: "Padding vertical de tile." },
];

export type BreakpointEntry = {
  name: string;
  width: string;
  changes: string;
};

export const breakpoints: BreakpointEntry[] = [
  { name: "Small phone", width: "≤ 419px", changes: "Hero 28px; tiles 1 col; padding 48px." },
  { name: "Phone", width: "420–640px", changes: "Hero 34px; renders al 80%." },
  { name: "Large phone", width: "641–735px", changes: "Padding 80→48px; fine-print envuelve." },
  { name: "Tablet portrait", width: "736–833px", changes: "Nav colapsa a hamburger." },
  { name: "Tablet landscape", width: "834–1023px", changes: "Grids 3→2 columnas." },
  { name: "Small desktop", width: "1024–1068px", changes: "Hero 40px; tiles 2/3 width." },
  { name: "Desktop", width: "1069–1440px", changes: "Layout completo; 4–5 cols." },
  { name: "Wide desktop", width: "≥ 1441px", changes: "Content lock 1440px." },
];

export const shadowToken = "rgba(0, 0, 0, 0.22) 3px 5px 30px";

export const componentRefs = {
  buttonPrimary: "{component.button-primary}",
  buttonSecondaryPill: "{component.button-secondary-pill}",
  buttonDarkUtility: "{component.button-dark-utility}",
  buttonPearlCapsule: "{component.button-pearl-capsule}",
  buttonStoreHero: "{component.button-store-hero}",
  searchInput: "{component.search-input}",
  productTileLight: "{component.product-tile-light}",
  productTileDark: "{component.product-tile-dark}",
  storeUtilityCard: "{component.store-utility-card}",
  configuratorChip: "{component.configurator-option-chip}",
  globalNav: "{component.global-nav}",
  subNavFrosted: "{component.sub-nav-frosted}",
  floatingStickyBar: "{component.floating-sticky-bar}",
  footer: "{component.footer}",
};

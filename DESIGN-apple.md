---
name: Apple Design System — AI Implementation Spec
version: 1.0.0
source: extracted from apple.com public surfaces
format: YAML + Markdown
audience: AI code-generation agents
license: reference implementation spec; Apple trademarks and product names remain property of Apple Inc.
---

# Apple Design System — AI Implementation Spec

> This document is the **single source of truth** for implementation. Do not
> invent tokens, values, or states beyond it. When in doubt, re-read the
> Do's and Don'ts section at the bottom.

## 1. Tokens

### 1.1 Color

| Token              | Value    | Usage                                             |
| ------------------ | -------- | ------------------------------------------------- |
| action-blue        | `#0066cc`| **The only interactive accent** in the system.    |
| ink                | `#1d1d1f`| Primary text on light surfaces.                   |
| ink-secondary      | `#6e6e73`| Secondary text on light surfaces.                 |
| canvas             | `#ffffff`| Default light surface.                            |
| canvas-parchment   | `#f5f5f7`| Alternate light surface (light tiles, sections).  |
| tile-dark          | `#272729`| Default dark tile surface.                        |
| tile-dark-2        | `#2a2a2c`| Nested dark surface (raised elements on dark).    |
| tile-dark-3        | `#252527`| Deepest dark surface.                             |
| white-72           | rgba(255,255,255,0.72) | Secondary text on dark surfaces.    |
| hairline-light     | rgba(0,0,0,0.08) | Hairline separators on light surfaces.    |
| hairline-dark      | rgba(255,255,255,0.16) | Hairline separators on dark surfaces. |

Rules:

- `action-blue` is used for interactive accents only: CTAs, links, focus rings.
  Never introduce a second accent color.
- `ink` on `canvas` is the default text/surface pairing.

### 1.2 Typography

| Token          | Family        | Weight | Size | Line-height | Tracking     | Usage                       |
| -------------- | ------------- | ------ | ---- | ----------- | ------------ | --------------------------- |
| hero-display   | SF Pro Display| 600    | 56px | 1.05        | -0.374px     | Hero headline (≥734px).     |
| hero-display-sm| SF Pro Display| 600    | 28px | 1.1         | -0.28px      | Hero headline (<640px).     |
| headline       | SF Pro Display| 600    | 32px | 1.125       | -0.28px      | Section headlines.          |
| body           | SF Pro Text   | 400    | 17px | 1.47        | 0            | Default body copy.          |
| caption        | SF Pro Text   | 400    | 12px | 1.33        | 0            | Legal, meta, footer.        |

Rules:

- Headlines: SF Pro Display, **weight 600**, negative tracking between
  **-0.28px and -0.374px**.
- Body: SF Pro Text, **17px / weight 400 / line-height 1.47**.
  **Never 16px. Never weight 500.**
- Responsive ladder for `hero-display`: **56px ≥734px**, **40px 640–733px**,
  **28px <640px** (collapse strategy, see §4).

### 1.3 Spacing

Scale (px): `4 8 12 16 20 24 32 40 48 64 80 96 120 160`

- Section vertical padding: **80px** ≥734px, **48px** <734px.
- Tile padding: **64px** ≥734px, **32px** <734px.

### 1.4 Radius

| Token       | Value | Usage                                  |
| ----------- | ----- | -------------------------------------- |
| pill        | 980px | Buttons, search input.                 |
| image       | 24px  | Product images only.                   |
| zero        | 0     | Tiles and section surfaces. **Never** add radius to tiles. |

### 1.5 Shadow

- **One shadow in the system**:
  `3px 5px 30px rgba(0, 0, 0, 0.22)`
- Reserved **exclusively for product images**. Never on cards, buttons,
  tiles, or text.

### 1.6 Motion

- Active/press state on **every button**: `transform: scale(0.95)`.
- Transition: `300ms ease`.
- **Never document hover states.** Document only `default` and `active`
  (plus `focus-visible` for accessibility).
- Scroll-reveal (page level, not documented on components): subtle fade +
  slide `12–24px`, `500–700ms`, ease-out, triggered once on view.

## 2. Components

### 2.1 button-primary

- Surface: `action-blue`, text: `canvas`, pill radius (980px).
- Label: SF Pro Text **17px / 600**.
- Sizing: height **44px**, padding-inline **24px**.
- States: `default` | `active: scale(0.95)` | `focus-visible: 3px ring action-blue at 35%`.
- **No hover documented.**
- Reserved for the single highest-hierarchy action on a page.

### 2.2 product-tile-light

- Surface: `canvas-parchment`; text: `ink` / `ink-secondary`.
- Layout: full-bleed tile, **zero radius**, padding per §1.3.
- Content: product image (radius 24px, **the** system shadow allowed) →
  headline (600, tracking -0.28px) → body 17/400/1.47 → CTA link in
  `action-blue` (active: scale(0.95)).

### 2.3 product-tile-dark

- Surface: `tile-dark`; nested surfaces `tile-dark-2` / `tile-dark-3`.
- Text: `canvas` / `white-72`.
- Same layout rules as `product-tile-light`; CTA link `action-blue` (active: scale(0.95)).

### 2.4 search-input

- Pill radius (980px), height **44px**, padding-inline **16px**.
- Light surface: background `rgba(0,0,0,0.08)`; dark surface: `rgba(255,255,255,0.16)`.
- Text: SF Pro Text **17px / 400**; placeholder `ink-secondary` (light) / `white-72` (dark).
- States: `default` | `focus-visible: 3px ring action-blue at 35%`.
- **No hover documented.**

### 2.5 footer

- Surface: `ink`; text: `caption` 12px in `white-72`.
- Links: default `white-72`, active `action-blue`. No hover documented.
- Hairline separators: `hairline-dark`.

## 3. Surfaces & Section Rhythm

- Sections are **full-bleed tiles with zero radius**.
- The **only** separator between sections is the alternation of light
  (`canvas` / `canvas-parchment`) and dark (`tile-dark`) surfaces.
- No borders, no shadows, no elevation between sections.

## 4. Responsive

### 4.1 Breakpoints (exact)

| Name | Value  | Target                 |
| ---- | ------ | ---------------------- |
| xs   | 480px  | Small phones           |
| sm   | 640px  | Large phones           |
| md   | 734px  | Small tablets          |
| lg   | 833px  | Large tablets          |
| xl   | 1068px | Laptops                |
| 2xl  | 1440px | Desktops               |

**Do not use any other breakpoint.** These replace Tailwind defaults.

### 4.2 Collapsing strategy

| Element      | ≥1068 | ≥833   | ≥734   | ≥640  | <640  |
| ------------ | ----- | ------ | ------ | ----- | ----- |
| Nav          | full  | full   | hamburger (below 834px) | hamburger | hamburger |
| Preview grid | 5     | 4      | 3      | 2     | 1     |
| hero-display | 56px  | 56px   | 56px   | 40px  | 28px  |
| Section pad  | 80px  | 80px   | 80px   | 48px  | 48px  |

- Nav collapses to a hamburger **below 834px** (at the 833 breakpoint and down).
- Grids collapse **5 → 4 → 3 → 2 → 1** columns.
- Hero display collapses **56px → 40px → 28px**.

## 5. Do's and Don'ts

### Do

- Use `action-blue #0066cc` as the **only** interactive accent.
- Set body copy in SF Pro Text **17px / 400 / 1.47**.
- Use SF Pro Display **600** with negative tracking (-0.28px to -0.374px)
  for headlines.
- Use pill buttons for primary CTAs; `scale(0.95)` on active/press for
  every button.
- Use the single system shadow **only on product images**.
- Build full-bleed, zero-radius tiles; alternate light/dark surfaces as the
  only section separator.
- Use exactly the breakpoints 480 / 640 / 734 / 833 / 1068 / 1440 and the
  collapsing strategy above.
- Document only `default` and `active` states.

### Don't

- Don't introduce a second accent color.
- Don't use 16px body copy or weight 500 anywhere in body text.
- Don't put shadows on cards, buttons, tiles, or text.
- Don't add radius to tiles or section surfaces.
- Don't invent breakpoints or collapse points.
- Don't rely on hover as the only feedback; never document hover.
- Don't give any element more visual hierarchy than the primary download CTA.

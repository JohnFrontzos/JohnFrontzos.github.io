# Frontz Technologies — Design System

## Intent

**Who:** Startup founders and CTOs with 2-10 person teams exploring AI workflows and development. Time-pressed, practical, skeptical of hype. Scanning between tasks.

**Goal:** Understand what Frontz Tech does in 30 seconds, see proof, reach out.

**Feel:** Like a sharp technical co-founder explaining what they can do. Direct, competent, no waste. Builder energy.

## Color Tokens

```css
/* Dark palette */
--dark-bg: #111113;
--dark-surface: #19191c;
--dark-border: rgba(255, 255, 255, 0.08);

/* Light palette */
--light-bg: #f7f7f5;
--light-surface: #ffffff;
--light-border: rgba(0, 0, 0, 0.08);

/* Accent — warm coral */
--accent: #e8573a;
--accent-hover: #d44a2f;
--accent-subtle: rgba(232, 87, 58, 0.08);

/* Hover surfaces */
--dark-surface-hover: #1e1e21;
--light-surface-alt: #eaeae8;

/* Text on dark */
--text-on-dark: #ededeb;
--text-on-dark-secondary: #8b8b8a;
--text-on-dark-muted: #5a5a59;

/* Text on light */
--text-on-light: #1a1a19;
--text-on-light-secondary: #6b6b6a;
--text-on-light-muted: #9a9a99;
```

### Why these colors
- **Dark/light alternating** creates editorial rhythm and section contrast without decoration
- **Coral accent** stands apart from the blue/purple every AI company uses. Says "action" and "build"
- **Warm neutrals** (not pure black/white) feel approachable without being soft

## Typography

- **Font:** Inter (weights 400, 500, 600, 700, 800)
- **Hero:** clamp(2.8rem, 6vw, 4.5rem), weight 800, letter-spacing -0.03em
- **Section titles:** clamp(1.8rem, 3.5vw, 2.4rem), weight 700, letter-spacing -0.02em
- **Card titles:** 1.1–1.25rem, weight 600
- **Body:** 0.9-1.05rem, weight 400
- **Small labels:** 0.75-0.85rem, weight 500-600

### Why Inter
Builder's font. Clean, no personality to fight the content. Lets copy do the talking.

## Depth

- **Flat.** No shadows on cards at rest.
- Borders only: 1px solid with low-alpha colors
- Hover: subtle border color shift, optional translateY(-2px)
- Services grid: 1px gap as visible divider lines

### Why flat
Shadows add visual weight. Startups want speed, not decoration. The content is the interface.

## Surfaces

Two tiers only:
1. **Dark sections:** `--dark-bg` (#111113)
2. **Light sections:** `--light-bg` (#f7f7f5)

Cards sit on the section background. No card elevation. Borders define boundaries.

CTA section uses `--dark-surface` (#19191c) for subtle distinction from regular dark sections.

## Spacing

- **Base unit:** 8px
- **Section padding:** 96px vertical (72px on mobile)
- **Section header margin-bottom:** 56px (40px on mobile)
- **Card internal padding:** 32px
- **Container:** 1100px max, 720px for narrow (story section)
- **Border radius:** 8px (cards/buttons), 12px (large cards/modal)

## Layout Patterns

### Alternating sections
Hero (dark) → Story (light) → Services (dark) → Work (light) → Why (dark) → CTA (dark-surface) → Footer (dark)

### Services grid
2-column CSS grid with 1px gap (acts as divider). Cards have dark-surface background. 4 services with coral uppercase category labels. Hero card (AI-Assisted Development) spans full width across top, 3 cards below in grid. Single-column on mobile.

### Work/project cards
2-column grid, 24px gap. Text-only cards on light bg. Coral uppercase label → title (1.25rem) → description → link. Cards with client logos use solid brand-colored backgrounds (dark variant with `--text-on-dark` tokens) and a right-aligned logo watermark at low opacity. 5th card spans full width.

### Why cards
3-column grid, 32px gap. Border-only cards on dark bg. Punchy headline + description.

## Interactive Elements

### Buttons
- **Primary (coral):** Solid fill, white text. Hover darkens.
- **Ghost:** Transparent, border, muted text. Hover brightens border and text.

### Cards
- Hover: border color shifts slightly, optional translateY(-2px)
- Work cards: link text turns coral, subtle shadow + translateY(-2px)
- Service cards: background lightens slightly

### Modal
- Dark surface background, 1px border
- Slide-in animation (translateY + scale)
- Backdrop: rgba black + 4px blur

### Form
- Labels above inputs (not floating)
- Dark bg inputs, 1px border
- Focus: border turns coral

## Bilingual System

All user-facing text uses `data-en` and `data-el` attributes. JS toggles content on click.

Hero title uses `<br>` tags in data attributes — `updateLanguage()` checks for `<br>` and uses `innerHTML` when present, `textContent` otherwise.

## What NOT to use

- No glassmorphism / backdrop-filter on content (only nav and modal overlay)
- No gradient text, gradient backgrounds, or gradient borders
- No shimmer/glow effects
- No emoji as icons
- No shadows at rest (only on hover for work cards)
- No parallax or floating shapes
- No decorative pseudo-elements

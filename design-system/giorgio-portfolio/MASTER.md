# Design System Master Architecture: Giorgio Portfolio

> **Query:** `robotics engineering industrial minimal`  
> **Dials:** Variance: 8 (Bold / Asymmetric / Bento Grids), Motion: 5 (Standard Tactile), Density: 4 (Standard Engineering Grid)  
> **Project Target:** `Giorgio Portfolio` (Personal Robotics & AI Engineering Showcase)

---

## 1. Executive Summary & Design Vision

**Style Direction:** *Tactile Industrial Grid / Tactical Carbon Robotics*  
**Core Thesis:** Bridge physical hardware engineering (STM32, KiCad, CAN bus) with intelligent autonomous software (ROS2, SLAM, PyTorch). The interface communicates absolute technical authority, real-world hardware precision, and zero-fluff engineering depth.

### Design Dial Settings
- **Variance (8/10):** Asymmetric bento grids, technical readout cards, high-impact telemetry badges, bold monospaced display typography.
- **Motion (5/10):** Purposeful 60fps micro-interactions (`0.28s cubic-bezier(0.4, 0, 0.2, 1)`), smooth card hover lifts, ambient glow illumination.
- **Density (4/10):** Standard balanced spatial rhythm, structured padding, touch targets ≥ 44px.

---

## 2. Color Palette & Token System

### Semantic CSS Tokens

```css
:root {
  /* Surface & Canvas */
  --color-background:            #0b0d10; /* Tactical Carbon Obsidian Dark */
  --color-surface:               rgba(245, 158, 11, 0.05); /* Glass surface with warm amber hint */
  --color-surface-hover:         rgba(245, 158, 11, 0.12); /* Interactive surface state */
  --color-border:                rgba(245, 158, 11, 0.18); /* Industrial grid stroke */
  --color-border-hover:          rgba(245, 158, 11, 0.45); /* Highlighted active stroke */

  /* Text & Telemetry Readouts */
  --color-foreground:            #f3f4f6; /* High-contrast readable gray-white */
  --color-text-sub:              rgba(243, 244, 246, 0.72); /* Body copy & detailed text */
  --color-text-muted:            rgba(243, 244, 246, 0.45); /* Secondary tags & metadata */

  /* Primary & Secondary Accents */
  --color-primary:               #f59e0b; /* Silicon Amber Gold — Hardware & Firmware */
  --color-primary-glow:          rgba(245, 158, 11, 0.22); /* Ambient amber focal glow */
  --color-secondary:             #06b6d4; /* Laser Cyan — ROS2, SLAM & Perception */
  --color-secondary-glow:        rgba(6, 182, 212, 0.25); /* Ambient cyan accent glow */

  /* Utility & Focus */
  --color-ring:                  #06b6d4; /* Keyboard focus indicator (2px outline) */
  --color-destructive:           #ef4444; /* High-priority warning / error state */
}
```

---

## 3. Typography & Hierarchy

### Typography Pairing Strategy
- **Headings, Section Titles & Telemetry:** `Roboto Mono` (Monospaced, precise, engineering authority)
- **Body UI & Long-form Content:** `Inter` (Humanist sans-serif, high legibility at all font sizes)

### Modular Font Scale
```css
/* Display / Hero Name */
font-family: 'Roboto Mono', monospace;
font-size: clamp(3rem, 5.5vw, 5.2rem);
font-weight: 700;
line-height: 1.1;

/* Section Headline (H2) */
font-family: 'Roboto Mono', monospace;
font-size: clamp(2rem, 3.8vw, 3rem);
font-weight: 700;
line-height: 1.2;

/* Subheading / Card Title (H3) */
font-family: 'Roboto Mono', monospace;
font-size: 1.5rem;
font-weight: 600;
line-height: 1.3;

/* Body UI Text */
font-family: 'Inter', system-ui, sans-serif;
font-size: 1rem;
font-weight: 400;
line-height: 1.65;

/* Badges & Telemetry Labels */
font-family: 'Roboto Mono', monospace;
font-size: 0.875rem;
font-weight: 500;
letter-spacing: 0.05em;
text-transform: uppercase;
```

---

## 4. Spacing Scale & Layout Grid

### Spacing Token Scale
- `--space-xs`: `4px`
- `--space-sm`: `8px`
- `--space-md`: `16px`
- `--space-lg`: `24px`
- `--space-xl`: `32px`
- `--space-2xl`: `48px`
- `--space-3xl`: `64px`

### Layout Architecture
- **Max Grid Width:** `1200px` centered container.
- **Bento Grid Layouts:** 3-column asymmetric layout for feature showcase, collapsing to single-column cards on viewports `< 768px`.
- **Glassmorphism Spec:** `backdrop-filter: blur(18px) saturate(180%)`.

---

## 5. Key Component Specifications

### 1. Hero Engineering Console
- **Title:** Fluid `Roboto Mono` headline with dynamic typing title effect.
- **Glass Console Box:** `rgba(245, 158, 11, 0.05)` backdrop blur panel with amber border.
- **CTA Actions:** Dual button group — Primary Amber button ("View Projects") paired with Secondary Glass outline button ("Download CV").

### 2. Telemetry Skill Cards
- **Structure:** Modular grid cards categorized into *Hardware & Firmware*, *Autonomy & ROS2*, and *AI & Perception*.
- **Visual Cues:** Progress telemetry readouts with percentage values and Phosphor/Lucide vector icons.

### 3. Asymmetric Project Bento Cards
- **Header:** Project status badge (`ACTIVE_REPO`, `FIRMWARE_V2`, `ROS2_NODE`).
- **Body:** Hardware photo preview / real project schematic, tech stack tags (`STM32`, `KiCad`, `PyTorch`), and direct GitHub repository links.

---

## 6. UX & Accessibility Standards

1. **Contrast Ratio Compliance:** High contrast (≥ 4.5:1) between text and dark carbon glass backgrounds.
2. **Keyboard Accessibility:** Explicit cyan focus outline (`outline: 2px solid var(--color-secondary); outline-offset: 2px`) on all focusable targets.
3. **Touch Safety Target:** Minimum interactive region size of `44px × 44px`.
4. **Reduced Motion Support:** `@media (prefers-reduced-motion: reduce)` disables ambient background GIF animations and heavy transforms.

---

## 7. Implementation Checklist

- [x] Update `PRODUCT.md` with schema 1 init standards.
- [x] Update `DESIGN.md` with frontmatter and canonical markdown sections.
- [x] Create `.impeccable/design.json` sidecar.
- [x] Create `design-system/giorgio-portfolio/MASTER.md`.
- [ ] Apply CSS variables & font links in `index.html` and `src/index.css`.

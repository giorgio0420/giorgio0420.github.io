---
name: Giorgio De Santis Portfolio
description: Industrial Minimal Robotics & AI Portfolio Design System
colors:
  primary: "#f59e0b"
  secondary: "#06b6d4"
  neutral-bg: "#0b0d10"
  neutral-surface: "rgba(245, 158, 11, 0.05)"
  neutral-surface-hover: "rgba(245, 158, 11, 0.12)"
  neutral-border: "rgba(245, 158, 11, 0.18)"
  neutral-border-hover: "rgba(245, 158, 11, 0.45)"
  text-primary: "#f3f4f6"
  text-sub: "rgba(243, 244, 246, 0.72)"
  text-muted: "rgba(243, 244, 246, 0.45)"
typography:
  display:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "clamp(3rem, 5.5vw, 5.2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "clamp(2rem, 3.8vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  card-default:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: Giorgio De Santis Portfolio

## Overview

**Creative North Star: "The Tactical Robotics Lab"**

An industrial minimal design system for a Robotics & AI Engineering Portfolio. It reflects physical hardware craftsmanship, low-level firmware engineering (STM32, KiCad, CAN bus), and high-level autonomous intelligence (ROS2, SLAM, PyTorch, Computer Vision).

The aesthetic marries obsidian carbon surfaces with crisp industrial grid structure, glassmorphic paneling, and high-visibility telemetry accents (Silicon Amber Gold and Laser Cyan). Visual hierarchy is driven by monospaced engineering typography for headers and telemetry metrics, paired with Inter for long-form reading.

**Key Characteristics:**
- **Industrial Grid Structure:** Modular, precise alignment with telemetry badges and status indicators.
- **Tactile Carbon Glass:** Dark obsidian background (`#0b0d10`) with translucent glass panels (`rgba(245, 158, 11, 0.05)`).
- **Dual Telemetry Accents:** Silicon Amber (`#f59e0b`) for hardware & firmware; Laser Cyan (`#06b6d4`) for autonomy, SLAM & perception.
- **Engineering Monospace Hierarchy:** `Roboto Mono` headers for technical confidence and scannability.

## Colors

The color system conveys precision, hardware engineering, and high-tech autonomous intelligence without relying on generic tech dark-mode templates.

### Primary
- **Silicon Amber Gold** (`#f59e0b`): Used for primary interactive CTAs, hardware telemetry stats, active indicators, and focal points.

### Secondary
- **Laser Cyan** (`#06b6d4`): Used for secondary CTAs, perception/SLAM telemetry badges, and hover state highlights.

### Neutral
- **Tactile Carbon Dark** (`#0b0d10`): Main application background.
- **Translucent Glass Surface** (`rgba(245, 158, 11, 0.05)`): Background for cards, containers, and section blocks.
- **High-Contrast Text** (`#f3f4f6`): Primary readable text.
- **Sub-Content Text** (`rgba(243, 244, 246, 0.72)`): Secondary text and descriptive copy.
- **Muted Meta** (`rgba(243, 244, 246, 0.45)`): Code snippets, dates, and minor metadata labels.

### Named Rules
**The One Voice Rule.** The primary amber accent is reserved for focal CTAs and key telemetry. It covers ≤10% of any given screen area.

## Typography

**Display Font:** `Roboto Mono` (with `monospace` fallback)  
**Body Font:** `Inter` (with `system-ui, sans-serif` fallback)  
**Label/Mono Font:** `Roboto Mono`

**Character:** Technical, authoritative, and crisp. Headlines act as instrumentation readouts, while body copy provides effortless readability.

### Hierarchy
- **Display** (`700`, `clamp(3rem, 5.5vw, 5.2rem)`, `1.1`): Hero headline and primary name branding.
- **Headline** (`700`, `clamp(2rem, 3.8vw, 3rem)`, `1.2`): Major section titles ("Projects", "Skills", "About").
- **Title** (`600`, `1.5rem`, `1.3`): Card titles, project names, and modal headers.
- **Body** (`400`, `1rem`, `1.65`): Descriptions, about text, and project details.
- **Label** (`500`, `0.875rem`, `1.4`, uppercase): Telemetry badges, tech stack tags, and status cues.

### Named Rules
**The Readout Rule.** All section titles, numerical stats, and technology badges must be typeset in `Roboto Mono` with slight letter-spacing.

## Layout

- **Container:** Max-width 1200px centered with fluid side padding (16px to 32px).
- **Grid System:** 12-column fluid grid for desktop (`1200px`), switching to 2-column or 1-column layouts on mobile viewports (<`600px`).
- **Vertical Rhythm:** 48px to 96px section padding ensuring distinct visual separation without clutter.

## Elevation & Depth

Surfaces rely on subtle glassmorphism (`backdrop-filter: blur(18px)`) with crisp industrial borders (`1px solid rgba(245, 158, 11, 0.18)`).

### Shadow Vocabulary
- **Amber Glow** (`0 0 25px rgba(245, 158, 11, 0.22)`): Active state and hero focal point highlight.
- **Card Hover Lift** (`0 16px 45px rgba(0, 0, 0, 0.5)`): Soft ambient drop-shadow applied during card translation.

### Named Rules
**The Tactile Focus Rule.** Interactive components are flat at rest and display a 2px Laser Cyan focus outline (`:focus-visible`) upon keyboard navigation.

## Shapes

- **Buttons & Chips:** `8px` (`--radius-sm`) for compact, technical precision.
- **Cards & Skill Blocks:** `16px` (`--radius-md`) for smooth glass surfaces.
- **Hero Containers & Dialogs:** `24px` (`--radius-lg`) for major visual bounding boxes.

## Components

### Primary Buttons
- **Shape:** `8px` border radius.
- **Primary:** Background `var(--accent)` (`#f59e0b`), text `var(--bg)` (`#0b0d10`), font `Roboto Mono` 700.
- **Hover:** Background `var(--accent-warm)` (`#06b6d4`), `transform: translateY(-2px)`.

### Project & Telemetry Cards
- **Corner Style:** `16px` (`--radius-md`).
- **Background:** `rgba(245, 158, 11, 0.05)` with `1px solid rgba(245, 158, 11, 0.18)` border.
- **Hover State:** Translate `-4px` vertically, border shifts to `rgba(245, 158, 11, 0.45)`, soft amber glow shadow.

### Tech Stack Badges
- **Style:** Compact monospaced tag with subtle amber tint (`rgba(245, 158, 11, 0.1)`), border `1px solid rgba(245, 158, 11, 0.2)`, text color `#f59e0b`.

## Do's and Don'ts

### Do:
- **Do** use `Roboto Mono` for section headings, stats, badges, and code references.
- **Do** maintain a strict 4.5:1 text-to-background contrast ratio on all glass cards.
- **Do** ensure interactive elements have at least 44×44px hit-target size.

### Don't:
- **Don't** introduce blurry cloud gradients or unanchored decorative fluff.
- **Don't** use standard unstyled primary red or default browser blue.
- **Don't** trigger layout reflow or text jitter during hover transitions.

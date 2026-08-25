# Impeccable Design System: Giorgio De Santis CV & Portfolio

## 1. Visual Identity & Brand Direction
- **Mode:** `Persuade` (Personal Brand & Engineering Showcase Portfolio)
- **Visual Style:** `Silicon Amber & Tactical Carbon` (Industrial Robotics & Tactical Microcontroller Lab with Amber Gold, Carbon Glass, and Laser Cyan accents)
- **Concept:** Bridging low-level hardware/circuits (STM32, KiCad, CAN bus) with high-level intelligence/autonomy (ROS2, SLAM, PyTorch).

---

## 2. Color Palette & Token System

### Base & Backgrounds
- `--bg`: `#0b0d10` (Tactical Carbon Dark)
- `--surface`: `rgba(245, 158, 11, 0.05)` (Glass surface default with warm amber tint)
- `--surface-hover`: `rgba(245, 158, 11, 0.12)` (Glass surface hover state)
- `--border`: `rgba(245, 158, 11, 0.18)` (Industrial amber technical border)
- `--border-hover`: `rgba(245, 158, 11, 0.45)` (Active/hover amber border highlight)

### Text Hierarchy
- `--text`: `#f3f4f6` (High-contrast cool gray-white)
- `--text-sub`: `rgba(243, 244, 246, 0.70)` (Readable sub-content text)
- `--text-muted`: `rgba(243, 244, 246, 0.45)` (Secondary meta tags & cues)

### Accent System
- `--accent`: `#f59e0b` (Amber Gold / Safety Yellow — main hardware, STM32 & robotics accent)
- `--accent-warm`: `#06b6d4` (Laser Cyan — SLAM, LiDAR point clouds & perception accent)
- `--accent-glow`: `rgba(245, 158, 11, 0.22)` (Soft radial amber glow under focal points)
- `--linkedin-blue`: `#0a66c2`
- `--github-dark`: `#1f2937`

---

## 3. Typography & Spacing System

### Typography
- **Headings & Display:** `Outfit` (Weights: 500, 600, 700, 800)
- **Body & UI Controls:** `Inter` (Weights: 400, 500, 600)
- **Fluid Title Scaling:** `clamp(3rem, 5.5vw, 5.2rem)` for Hero Title; `clamp(2rem, 3.8vw, 3rem)` for Section Titles

### Spacing & Grid System
- **Navigation Height:** `--nav-h: 76px`
- **Border Radii:**
  - `--radius-sm`: `8px` (Buttons, tags, pills)
  - `--radius-md`: `16px` (Cards, skill boxes, timeline items)
  - `--radius-lg`: `24px` (Hero console box, main containers)
- **Transitions:** `0.28s cubic-bezier(0.4, 0, 0.2, 1)`

---

## 4. Component Patterns & Rules

### Glassmorphism & Elevation
- Backdrop filter: `blur(18px) saturate(180%)`
- Cards must use soft elevation on hover: `transform: translateY(-4px)`, shadow boost `0 16px 45px rgba(0,0,0,0.5)` with amber glow `0 0 0 1px var(--accent-glow)`.

### Interactive Feedback & Accessibility
- Focus outlines use explicit `--accent` outline-offset for keyboard users (`:focus-visible`).
- Vector icons (`lucide-react`, custom SVGs) exclusively.
- Accessible aria labels on interactive elements.

---

## 5. Anti-Patterns & Hard Rules
1. **No Flat Generic Colors:** Never use plain red (`#ff0000`) or standard browser blue (`#0000ff`).
2. **No Layout Shift on Hover:** Card hover states must scale smoothly without disrupting surrounding layout grids.
3. **No Unanchored Visual Gimmicks:** Every element must serve to communicate concrete technical expertise (ROS2, Embedded, AI, Circuit Design) or personal identity.

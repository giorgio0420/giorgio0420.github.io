# Impeccable Design Profile: Giorgio De Santis CV & Portfolio

## 1. Product Overview & Persona
- **Project Name:** `CVProject` (Personal Portfolio & CV)
- **Target Audience:** Recruiters, research labs, robotics companies, AI startups, and technical collaborators.
- **Identity:** Giorgio De Santis — Robotics Engineer, AI Developer, Embedded Systems Specialist, Hardware Designer.
- **Core Value Prop:** Bridging the gap between hardware engineering (STM32, KiCad, CAN bus) and intelligent software/AI (ROS2, SLAM, PyTorch, Computer Vision).

---

## 2. Tech Stack & Architecture
- **Framework:** React 19 + TypeScript
- **Bundler / Build Tool:** Vite 8
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling:** Custom CSS System with CSS Variables, Glassmorphism, and Fluid Typography (`src/index.css`)
- **Typography:** 
  - Display / Headings: `Outfit` (Weights: 300–800)
  - Body / UI: `Inter` (Weights: 400–600)
- **Icons & Effects:** `lucide-react`, `react-simple-typewriter`

---

## 3. Design System & Tokens

### Color Palette & Theme (Lunar Dark / Space Glass)
- **Primary Background:** `--bg: #08090f` (Deep obsidian dark)
- **Background Image:** `/background.jpg` with fixed attachment and radial dark overlay
- **Cool Accent:** `--accent: #7eb8f7` (Moon blue)
- **Warm Accent:** `--accent-warm: #d4956a` (Lunar rust / copper accent)
- **Glow & Highlights:** `--accent-glow: rgba(126, 184, 247, 0.18)`

### Surfaces & Glassmorphism
- **Surface Default:** `rgba(255, 255, 255, 0.07)` (`--surface`)
- **Surface Hover:** `rgba(255, 255, 255, 0.12)` (`--surface-hover`)
- **Borders:** `1px solid rgba(255, 255, 255, 0.12)` (`--border`)
- **Border Hover:** `rgba(255, 255, 255, 0.30)` (`--border-hover`)
- **Backdrop Blur:** `blur(18px) saturate(180%)`

### Radii & Spacing
- **Border Radius:** `10px` (Small), `18px` (Medium), `28px` (Large)
- **Navbar Height:** `72px`
- **Transitions:** `0.3s cubic-bezier(0.4, 0, 0.2, 1)`

---

## 4. Key Component Structure
- **Navbar:** Sticky glassmorphic header with route highlighting (`src/components/layout/Navbar.tsx`)
- **Hero:** Eye-catching intro with dynamic typing title, photo glass container, and CTA buttons (`src/pages/Home.tsx`)
- **About & Skills:** Statistics counters, glassmorphic skill cards categorized by discipline (`src/pages/Home.tsx`)
- **Projects Grid:** Live GitHub repo fetching for `@giorgio0420` with custom include/exclude filters (`src/pages/Projects.tsx`)
- **Contact:** Glass form with interactive input states and direct social links (`src/pages/Contact.tsx`)

---

## 5. Design Guidelines & Impeccable Standards
1. **Contrast First:** Always ensure text on glass background maintains high legibility via body dark overlays.
2. **Polished Micro-interactions:** Card hover states include soft vertical translation (`translateY(-3px)`), border glow, and smooth shadow expansion.
3. **Responsive Scaling:** Utilize CSS `clamp()` and media query breakpoints at `900px` and `600px` for optimal viewing on desktop, tablet, and mobile devices.

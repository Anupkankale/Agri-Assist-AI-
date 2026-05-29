# AgriAssist AI - Project Instructions

This document defines the specialized "Skills" and engineering standards for the AgriAssist AI frontend.

## 🎨 UISz Skill: Apple Design System (visionOS Style)
All UI components must adhere to the high-fidelity visionOS 2 aesthetic:
- **Glassmorphism:** Use `backdrop-blur-3xl`, semi-transparent backgrounds (`white/5` to `white/12`), and multiple inset shadows to create depth.
- **Pixel-Perfect Spacing:** Follow a strict 8px spacing scale. Ensure vertical and horizontal alignment is balanced (e.g., `items-center` for hero sections).
- **Corner Radii:** Use Apple-standard large radii: `1.5rem` (`apple-xl`) for cards and `full` for interactive capsules.
- **Atmospheric Backgrounds:** Prefer layered radial gradients with deep forest/moss tones over flat colors.
- **Micro-interactions:** Implement subtle scales (`1.02`), rotations (`6deg`), and glow intensifications on hover.

## 🌏 LangSkill: Mandatory Multi-Language Support
Every user-facing string must be localized across three core languages:
1.  **English (EN):** Crisp, professional communication.
2.  **Marathi (MR):** Local language targeting farmers in Maharashtra.
3.  **Hindi (HI):** National language for broader accessibility.

### Implementation Standards:
- **`useL10n` Composable:** All translations must live in `composables/useL10n.ts`.
- **Devanagari Optimization:** Use `Poppins` font for high legibility. Apply increased line-height (`leading-relaxed` or higher) for Marathi/Hindi text to prevent glyph clipping.
- **Direct Punctuation:** Avoid stylistic separators like em-dashes ("—"); use standard periods or sentence breaks for clarity.

## 🛠 Tech Stack Best Practices
- **Nuxt 3 + Tailwind CSS:** Primary framework.
- **Modular Components:** Keep landing page sections in `components/home/`.
- **Scroll Animations:** Use the `v-reveal` directive for all major sections.
- **Accessibility:** Ensure high contrast on glass materials for readability in outdoor field conditions.

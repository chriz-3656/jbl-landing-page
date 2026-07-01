# Premium 3D Cinematic Landing Page - AI Agent Prompt

*This prompt is designed to be fed into an autonomous AI coding agent (like Google Antigravity, Claude Engineer, etc.) to perfectly recreate the JBL Tune 720BT landing page from scratch.*

---

## 🎯 System Instructions & Role
You are an elite frontend developer and 3D web designer. Your goal is to build a world-class, premium, cinematic product landing page for the "JBL Tune 720BT" headphones. The aesthetic must be on par with Apple's product pages—featuring extreme polish, dark luxury design, and fluid scroll-linked 3D animations.

## 🛠️ Tech Stack Requirements
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (using `@theme` and CSS variables)
- **3D Rendering:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations:** GSAP (ScrollTrigger) and Framer Motion
- **Smooth Scrolling:** `lenis` / `@studio-freight/react-lenis`
- **Icons:** `lucide-react` (Note: for GitHub icon, use a native SVG since Lucide removed brand logos).

## 🎨 Design System
- **Colors:**
  - Background: Pure Black (`#000000`)
  - Graphite/Text: `#1A1A1A`
  - Metallic Gray: `#9CA3AF`
  - Soft White: `#F9FAFB`
  - Accent: JBL Orange (`#FF5A00`)
- **Typography:** 
  - `Inter` for body text. 
  - `Syncopate` for all headings (`h1`-`h6`) and the giant background text.
- **Aesthetic Elements:** Heavy use of glassmorphism (`backdrop-blur`), subtle noise filters, radial gradients behind the 3D model, and sleek, minimalist spacing.

## 📦 Critical Setup & Bug Avoidance
- **React 19 vs. Lenis:** Next.js 15 uses React 19, which conflicts with older versions of `react-lenis`. 
  - Install dependencies using `--legacy-peer-deps`.
  - In `SmoothScrollProvider.tsx`, cast children as any: `{children as any}` to avoid TypeScript errors.
  - Create a `.npmrc` file with `legacy-peer-deps=true` so Vercel can build it without ERESOLVE errors.
- **Framer Motion Types:** Explicitly type your variants (e.g. `const textVariant: Variants = {...}`) and import `Variants` from `framer-motion` to satisfy strict production type-checking.

## 📐 Page Structure & Features
1. **Background Layer:** A fixed `z-0` layer containing a subtle radial gradient, an SVG noise texture, and a massive `32vw` "JBL" text (using `Syncopate` font, graphite color, `opacity-80`) positioned dead center.
2. **3D Canvas (`Experience.tsx`):** 
   - A fixed fullscreen canvas.
   - Load the `glb` model. Scale it up by `25x`. 
   - Apply a subtle `Float` (speed 0.8, rotationIntensity 0.1).
   - Use GSAP `useGSAP` with `ScrollTrigger` mapped to the `.main-container`.
   - Animate the model's rotation and position as the user scrolls. When the user reaches the bottom sections (Specs, FAQ, Footer), animate the model's scale to `0` so it disappears and doesn't block the text.
3. **Sections (in `page.tsx`):**
   - **Hero:** "JBL TUNE 720BT", "Pure Bass. Zero Noise." with a pre-order button.
   - **Scroll Story:** Alternating left/right text sections detailing Comfort, Pure Bass Sound, and Noise Cancellation. 
   - **Stats Grid:** A glassmorphism grid showing Battery (76 Hours), BT 5.3, and Multipoint using Lucide icons.
   - **Gallery:** 2 large images highlighting lifestyle and macro details.
   - **Specs Table:** Clean, minimalist rows with hardware details.
   - **Reviews & FAQ:** Grid of reviews and an accordion-style FAQ.
   - **Footer:** Complete corporate footer.
4. **Floating Button:** A sleek, glassmorphic "Source Code" button fixed in the top right corner linking to the GitHub repo.

## 🚀 Execution Steps
1. Bootstrap Next.js.
2. Configure Tailwind v4 tokens in `globals.css` and setup `layout.tsx` with the two Google Fonts.
3. Build the `SmoothScrollProvider`.
4. Build `Experience.tsx` for the 3D model and GSAP scroll logic.
5. Build the massive `page.tsx` layout with Framer Motion text reveal animations for every section. 
6. Add the Vercel deployment `.npmrc` patch.

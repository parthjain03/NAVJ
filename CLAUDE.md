# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Next.js on localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 14 App Router** website for NAVJ & Co., a Chartered Accountancy firm based in New Delhi, India.

### Page → Component pattern

Each route in `src/app/` is a thin "use client" page that:
1. Sets `document.title`
2. Wires up an `IntersectionObserver` for scroll-triggered `.fade-in` animations
3. Renders one or two components from `src/components/`

| Route | Component(s) rendered |
|---|---|
| `/` | `Hero` |
| `/about` | `Legacy` |
| `/partners` | `Leadership` |
| `/services` | `Expertise` |
| `/services/audit`, `/taxation`, `/advisory`, `/international` | Individual service pages (self-contained) |
| `/knowledge` | `Media`, `NewsletterCTA` |
| `/careers`, `/contact`, `/media` | Self-contained pages |

### Styling approach

- **Global CSS** (`src/app/globals.css`) is the primary styling mechanism. Tailwind utilities are imported but used sparingly alongside custom CSS classes.
- **CSS custom properties** defined in `:root`: `--navy`, `--gold`, `--cream`, `--slate`, etc. Always use these variables rather than hardcoding hex values when possible.
- **Fonts**: Three Google fonts loaded via `next/font` — `Cinzel` (display/branding), `Playfair Display` (headings), `Lato` (body). Available as CSS variables `--font-cinzel`, `--font-playfair`, `--font-lato`.
- **styled-jsx** is used inline within components (e.g., `Navbar`) for component-scoped styles.
- Animation pattern: elements start hidden and get a `visible` class when the `IntersectionObserver` fires. The `fade-in` class is the primary animation trigger. Page-specific observer selectors vary (e.g., `.fade-in, .timeline-item`, `.fade-in, .board-feature-card`).

### Layout

`src/app/layout.js` wraps every page with `<DisclaimerModal>`, `<Navbar>`, and `<Footer>`. The `Navbar` is transparent on the homepage hero and becomes opaque (`scrolled` class) on scroll or on any non-home page.

### Static assets

Images are served from `public/images/`. The build output is configured as `standalone` (`next.config.js`).

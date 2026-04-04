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

## About the Project

This is a **Next.js 14 App Router** website for **NAVJ & Co.**, a Chartered Accountancy firm based in New Delhi, India. The firm was founded in 1932 and formally established as NAVJ & Co. in 2015 by CA Adeep Veer Jain (FCA, CMA, LLB, B.Com, DISA), who qualified as a CA in 2000. The website targets potential clients, professionals, and international businesses entering India.

**Planned domain:** `navjco.com`

---

## Writing & Content Rules

- **British English only** throughout all text, metadata, and email content.
- **No em dashes (—) anywhere** — not in visible text, metadata descriptions, alt text, or email templates. Use commas, full stops, or colons instead.
- Tone is formal, institutional, and precise — consistent with a heritage professional services firm.

---

## Architecture

### Page pattern

All pages are **server components** that export `metadata` for SEO. Each page renders a `<FadeInObserver />` client component to handle scroll animations, then its content.

Pages that require interactivity (forms, video embeds, mobile menu toggles) delegate to dedicated client components in `src/components/`.

### Routes

| Route | Component(s) rendered |
|---|---|
| `/` | `Hero` |
| `/about` | `Legacy` + inline culture/philosophy sections |
| `/partners` | `Leadership` |
| `/services` | `Expertise` |
| `/services/taxation` | Self-contained — Income Tax, Corporate Tax, TDS, Tax Planning |
| `/services/gst` | Self-contained — GST Registration, Returns, ITC, Audit, Litigation, Refunds |
| `/services/audit` | Self-contained — 8 audit types |
| `/services/labour-law` | Self-contained — 8 labour law services |
| `/services/advisory` | Self-contained — Corporate Advisory, FEMA Advisory, System Dev, Virtual CFO |
| `/services/international` | Self-contained — FDI, NRI Tax, Transfer Pricing, Cross-Border |
| `/knowledge` | `Media` + `VideoEmbed` (webinars) + articles |
| `/careers` | Self-contained |
| `/contact` | `ContactForm` + office info |
| `/api/contact` | API route — handles contact form via Nodemailer |
| `/sitemap.xml` | Auto-generated from `src/app/sitemap.js` |
| `/robots.txt` | Auto-generated from `src/app/robots.js` |

### Components

| Component | Type | Purpose |
|---|---|---|
| `Navbar.js` | client | Top navigation. Transparent on homepage, opaque on scroll/other pages. Services dropdown on desktop. Collapsible accordion on mobile (Services collapsed by default). |
| `Footer.js` | server | Office address, phone, email, LinkedIn link. |
| `DisclaimerModal.js` | client | ICAI-compliant disclaimer shown on first load. |
| `Hero.js` | server | Homepage hero section. |
| `Legacy.js` | server | Four-generation timeline (1932, 1962, 2000, 2026). |
| `Expertise.js` | client (styled-jsx) | Six service cards linking to service sub-pages. |
| `Leadership.js` | client (styled-jsx) | CA Adeep Veer Jain featured card + partner bios. |
| `Media.js` | server | Featured FIEA podcast iframe + section header. |
| `FadeInObserver.js` | client | Intersection Observer for `.fade-in` animations. Accepts `selectors` prop (default: `'.fade-in'`). |
| `ContactForm.js` | client (styled-jsx) | Contact form — posts to `/api/contact`. Shows loading/success/error states. |
| `VideoEmbed.js` | client | YouTube embed with custom poster/thumbnail. Shows poster with gold play button; swaps to iframe on click. Falls back from `maxresdefault.jpg` to `hqdefault.jpg` on error. |
| `NewsletterCTA.js` | unused — do not use |

### Services page (Expertise.js)

Six practice area cards in order:
1. Taxation — `/services/taxation`
2. GST & Indirect Tax — `/services/gst`
3. Audit & Assurance — `/services/audit`
4. Labour Law — `/services/labour-law`
5. Advisory — `/services/advisory`
6. International Services — `/services/international` (highlighted/usp card)

---

## Styling

- **Global CSS** (`src/app/globals.css`) is the primary mechanism. Tailwind utilities are used sparingly alongside custom CSS classes.
- **CSS custom properties** in `:root`: `--navy`, `--gold`, `--cream`, `--slate`, `--white`, `--text-muted`. Always use these — never hardcode hex values.
- **Fonts** loaded via `next/font/google`:
  - `Cinzel` — display/branding, CSS var `--font-cinzel`
  - `Playfair Display` — headings, CSS var `--font-playfair`
  - `Lato` — body, CSS var `--font-lato`
- **styled-jsx** is used inside client components (`Navbar`, `Expertise`, `Leadership`, `ContactForm`) for component-scoped styles.
- **Animation**: elements start hidden and gain a `visible` class when `FadeInObserver` fires. Primary trigger class is `fade-in`. Some pages pass additional selectors (e.g. `.fade-in, .timeline-item` for About, `.fade-in, .board-feature-card, .board-partner-card` for Partners, `.fade-in, .expertise-card` for Services).
- **Mobile breakpoint**: `768px`. Mobile-specific overrides are grouped at the bottom of `globals.css` under the `@media (max-width: 768px)` block.

---

## SEO & Metadata

- `src/app/layout.js` exports shared `metadata` with `metadataBase: new URL('https://navjco.com')`, default title template, global description, keywords, and Open Graph image (`/images/og-home.png`).
- Each page exports its own `metadata` object with `title`, `description`, and `openGraph` fields. The title uses the template `'%s | NAVJ & Co.'` automatically.
- `src/app/sitemap.js` lists all 13 public routes with priorities.
- `src/app/robots.js` allows all bots, disallows `/api/`, and references the sitemap.
- **Never use `document.title`** in pages — use `export const metadata` instead.

---

## Contact Form

Handled by `src/app/api/contact/route.js` using **Nodemailer**.

Required environment variables in `.env.local`:
```
GMAIL_USER=adeepjain.ca@gmail.com
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx   # Gmail App Password (not regular password)
CONTACT_EMAIL_TO=adeepjain.ca@gmail.com  # Change to domain email when available
```

To get a Gmail App Password: Google Account > Security > 2-Step Verification > App passwords.

The contact form subject dropdown options match the six service areas. Update both `ContactForm.js` and `contact/page.js` if services change.

---

## Knowledge Centre (`/knowledge`)

Three sections:
1. **Media** — FIEA podcast (hardcoded in `Media.js`)
2. **Webinars & Events** — `webinars` array in `knowledge/page.js`. Each entry: `videoId`, optional `poster` (path in `/public/images/`), `tag`, `date`, `title`, `description`. Uses `VideoEmbed` component.
3. **Knowledge Centre articles** — `articles` array in `knowledge/page.js`. Each entry: `category`, `date`, `title`, `excerpt`, optional `link` (URL). Cards with a `link` show a "Read More" button; cards without show "Coming Soon".

To add content: edit the `webinars` or `articles` arrays directly in `knowledge/page.js`.

LinkedIn articles cannot be auto-synced (LinkedIn has no public post API). All content must be added manually.

---

## Static Assets

- Images served from `public/images/`
- `og-home.png` — Open Graph image (1200x630), used for social sharing previews
- `adeep-jain.png` — Partner photo used in `Leadership.js`
- `budget-manthan-2026.jpg` — Custom poster for the Budget 2026 webinar

---

## Key Decisions & History

- All pages were converted from `"use client"` + `document.title` to server components with `export const metadata`. The `FadeInObserver` client component handles the scroll animations that previously lived in each page's `useEffect`.
- Components that use `styled-jsx` (`Expertise`, `Leadership`, `ContactForm`, `Navbar`) must keep `"use client"` — styled-jsx is client-only.
- The `/media` route was removed (it duplicated `/knowledge` content).
- `NewsletterCTA` component exists but is not used anywhere — do not add it back without instruction.
- Taxation was split from a single "Taxation & GST" card into two separate practice areas (Taxation and GST & Indirect Tax) to balance the six-card services grid.
- The `VideoEmbed` component uses a regular `<img>` tag (not `next/image`) for YouTube thumbnails to support `onError` fallback from `maxresdefault.jpg` to `hqdefault.jpg`.

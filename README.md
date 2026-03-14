# Amazon Lucky Draw — Next.js + Bun + Tailwind

Amazon-branded lottery landing page. No TypeScript.

## Stack

| Tool | Version | Role |
|------|---------|------|
| **Bun** | ≥ 1.1 | Runtime & package manager |
| **Next.js** | 15 (App Router) | Framework |
| **React** | 19 | UI |
| **Tailwind CSS** | 3 | Styling |
| **Framer Motion** | 11 | Animations |
| **Lucide React** | 0.395 | Icons |

> ⚠️ Next.js 16 does not exist yet — this uses Next.js 15 (latest stable as of 2026).

---

## Quick Start

```bash
# Requires Bun — https://bun.sh
bun install
bun dev           # http://localhost:3000
bun run build     # production build
bun start         # serve production build
```

---

## Project Structure

```
amazon-lottery-next/
├── app/
│   ├── layout.js          # Root layout + metadata + font links
│   ├── page.js            # Home page — assembles all sections
│   └── globals.css        # Tailwind directives + component classes
├── components/
│   ├── Navbar.jsx         # Fixed nav, scroll shadow, mobile drawer
│   ├── Hero.jsx           # Split hero + stats grid
│   ├── PrizeCard.jsx      # Live countdown timer (client)
│   ├── Ticker.jsx         # Infinite scrolling winners ticker
│   ├── Features.jsx       # 6-card feature grid
│   ├── HowItWorks.jsx     # 4-step process
│   ├── About.jsx          # Story + metrics + reviews
│   ├── CTABanner.jsx      # Full-width orange CTA
│   └── Footer.jsx         # 4-column footer
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Customisation

| What | Where |
|------|-------|
| Amazon color tokens | `tailwind.config.js` → `theme.extend.colors` |
| Fonts | `app/layout.js` (Google Fonts) + `tailwind.config.js` |
| Prize amount & draw date | `components/PrizeCard.jsx` |
| Stats & copy | Data arrays at top of each component |
| Winner ticker items | `components/Ticker.jsx` → `WINS` array |
| Tailwind component styles | `app/globals.css` → `@layer components` |

---

## Notes

- `'use client'` is added only to components that use React hooks or Framer Motion.
- Server components: `Ticker.jsx`, `Footer.jsx`, `layout.js`, `page.js`.
- No TypeScript anywhere — pure `.js` / `.jsx` throughout.
- The `jsconfig.json` path alias `@/` maps to project root (Next.js default).
# aml

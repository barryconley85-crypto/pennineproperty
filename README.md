# Pennine Property Partners — Website

A fully redesigned, production-ready website for **Pennine Property Partners Ltd**, built with React, Vite, TypeScript, Tailwind CSS and Framer Motion.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool & dev server |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility-first styling |
| Framer Motion | 12 | Animations & transitions |
| Lucide React | Latest | Icon library |

---

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

### Installation

```bash
git clone https://github.com/your-org/pennine-property-partners.git
cd pennine-property-partners
npm install
```

### Development

```bash
npm run dev
```

Opens the development server at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
```

Outputs to `dist/`. TypeScript is checked first, then Vite bundles the application.

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally for pre-deployment verification.

---

## Project Structure

```
pennine-property-partners/
├── public/
│   ├── logo.png              # Company logo
│   ├── property1.png         # Manchester skyline hero image
│   └── property2.png         # Professional investment image
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustedBy.tsx
│   │   ├── HowWeHelp.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── SellYourProperty.tsx
│   │   ├── InvestmentOpportunities.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── SuccessStories.tsx
│   │   ├── Testimonials.tsx
│   │   ├── MeetTheTeam.tsx
│   │   ├── FAQ.tsx
│   │   ├── LatestNews.tsx
│   │   ├── CallToAction.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useInView.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/workflows/ci.yml
├── vercel.json
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Brand Colours

| Token | Hex | Usage |
|---|---|---|
| `navy-800` | `#1B2A4A` | Primary brand colour |
| `navy-900` | `#0f1e36` | Dark backgrounds |
| `navy-950` | `#080f1c` | Footer background |
| `gold-400` | `#C9A96E` | Primary accent |
| `gold-500` | `#b8924a` | Hover states |

---

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Vercel will auto-detect the Vite framework and use the settings in `vercel.json`.
4. Deploy — no additional configuration required.

### Manual / Other Platforms

Build with `npm run build`, then serve the `dist/` directory as a static site. All routes should be rewritten to `index.html`.

---

## Contact

| Person | Email | Phone |
|---|---|---|
| Adam | adam@penninepropertypartners.co.uk | +44 (0)7533 849609 |
| Laura | laura@penninepropertypartners.co.uk | +44 (0)7533 849609 |

**Website:** [penninepropertypartners.co.uk](https://www.penninepropertypartners.co.uk)

---

© 2026 Pennine Property Partners Ltd. All rights reserved.

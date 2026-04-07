# Techask — Performance Marketing Agency Website

A modern, high-end single-page website for Techask. Built with React + Vite, content managed via Sanity CMS. Features a sophisticated, monochrome "Schbang-style" aesthetic.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + Vite 8 |
| **Styling** | Vanilla CSS (`src/index.css`) & Tailwind Utility Classes |
| **Animations** | Custom CSS Transitions & Framer Motion |
| **Background FX** | `@paper-design/shaders-react` (WebGL MeshGradients) |
| **CMS Data** | Sanity v3 (Cloud-hosted Headless CMS) |
| **CMS Client** | `@sanity/client` + `@sanity/image-url` |

---

## Cleaned Project Structure

```text
techask/
├── src/                        # React frontend source
│   ├── main.jsx                # App entry point
│   ├── App.jsx                 # Root component — orchestrates the page sections
│   ├── index.css               # Global styles, variables, typography (Sora)
│   │
│   ├── components/             # Lean, verified, and heavily commented components
│   │   ├── Navbar.jsx          # Fixed nav with frosted glass scroll effect
│   │   ├── HeroOld.jsx         # Hero section & seamless Lead Capture Form
│   │   ├── VideoShowcase.jsx   # Video player placeholder section
│   │   ├── Logos.jsx           # Marquee brand scrolling component
│   │   ├── Problem.jsx         # Auto-rotating 3D WebGL Web Carousel
│   │   ├── AboutUs.jsx         # Highly complex scroll-snapping Services Shutter
│   │   ├── Process.jsx         # 4-step Growth Framework (Grid Layout)
│   │   ├── FAQ.jsx             # Expanding Text Accordion (Minimalist)
│   │   ├── Footer.jsx          # Sticky bottom reveal footer
│   │   ├── IntroAnimation.jsx  # Complex Timeline loader & transition
│   │   └── TiltedCard.jsx      # Reusable 3D mouse-tracking card
│   │
│   └── lib/
│       ├── sanityClient.js     # Configured Sanity client instance
│       └── useSanity.js        # React hook to fetch from Sanity cleanly
│
├── techask-studio/             # Sanity CMS Studio (Backend App)
│   ├── sanity.config.js        # Defines Singletons vs Collections
│   └── schemas/                # Document Schemas (faq, problem, etc.)
│
├── .env.local                  # Environment variables
├── vite.config.js              # Vite build config
└── package.json                
```

*Note: All unused experimental files (Prism, obsolete services, redundant CTAs) have been structurally purged to ensure absolute codebase cleanliness.*

---

## Content Management (Sanity)

This website is fully integrated with Sanity CMS.

1. **How it works:** When users visit the site, the React components fetch data from Sanity Cloud using standard GROQ queries.
2. **Fallbacks Engine:** If Sanity fails to load, is empty, or the user is offline, the website uses perfectly designed hardcoded `FALLBACK` data to ensure the site never breaks.
3. **Singletons vs Collections:**
   - **Singleton:** Unique sections that only exist once (Hero, Problem, Footer). Editors cannot create "new" ones, only edit the master record.
   - **Collection:** Repeatable sections (FAQs, Services). Editors can add, delete, and reorder these at will.

---

## Running Locally

To run the frontend:
```bash
npm install
npm run dev
# Views at http://localhost:5173
```

To run the Sanity CMS Studio:
```bash
cd techask-studio
npm run dev
# Views at http://localhost:3333
```

---

## Environment Variables

| Variable | Value | Needed For |
|---|---|---|
| `VITE_SANITY_PROJECT_ID` | `csxo7tuk` | Binding Frontend to CMS |
| `VITE_SANITY_DATASET` | `production` | Targeting the live dataset |
| `SANITY_API_TOKEN` | *[Needs configuration]* | Required for automated data-seeding |

*To modify the automated seed script to auto-fill the CMS with local code defaults, the API token must be configured.*

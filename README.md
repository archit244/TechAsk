# TechAsk - Modern Marketing Agency Landing Page

A high-performance, premium marketing agency website built with React, Vite, and Framer Motion. This project features high-end aesthetics, smooth scroll animations, and a responsive design system.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **CMS (Upcoming)**: [Sanity.io](https://www.sanity.io/)

## 📁 Code Structure

```text
techask/
├── public/                 # Static assets (images, fonts)
│   ├── fonts/              # Custom brand fonts
│   └── ...                 # Optimized image assets
├── src/
│   ├── components/         # Core UI sections
│   │   ├── Navbar.jsx      # Sticky header with transparent logo
│   │   ├── HeroOld.jsx     # High-impact sticky intro section
│   │   ├── StrategyVideo.jsx # Vimeo-powered scroll-reveal video
│   │   ├── Logos.jsx       # Marquee trusted brands strip
│   │   ├── Problem.jsx     # Card-based problem/solution carousel
│   │   ├── Services.jsx    # Services showcase with mobile-first ordering
│   │   ├── Process.jsx     # Step-by-step framework section
│   │   ├── FAQ.jsx         # Questions and answers accordion
│   │   └── Footer.jsx      # Schbang-inspired responsive footer
│   ├── lib/                # Shared utilities (Sanity client setup)
│   ├── App.jsx             # Main application entry and section layout
│   ├── main.jsx            # React mounting point
│   └── index.css           # Global design tokens and tailwind base
├── techask-studio/         # Sanity.io Studio (for managing content)
└── package.json            # Project dependencies and scripts
```

## 🧹 Recent Cleanup

We have performed a full audit and cleanup of the codebase:
- **Removed Unused Components**: Deleted all legacy/experimental components (`AboutUs`, `PartnersGrid`, `VideoShowcase`, etc.) to keep the bundle size small.
- **Optimized Assets**: Purged unused image files from the `public/` directory.
- **Refined Styling**: Cleaned up the global stylesheet and unified the brand color system (`#2563EB`).

## 🛠️ Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Local Dev Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---
*Proudly created in India.*

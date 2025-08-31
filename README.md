# Motion UI Kit

A polished, free-first library of UI micro-interactions built with React, Vite, SCSS, and Framer Motion.
This repository provides a curated set of accessible, animated components you can drop into projects to add motion, polish, and consistent design tokens.

---

## ✨ Features

- 🎨 **Dark Mode First** — modern dark theme by default with seamless switching
- 🌗 **Theme Toggle** — smooth light/dark switch with Heroicons
- 🌀 **Smooth Animations** — powered by Framer Motion with accessibility support
- 📚 **Component Gallery** — live interactive demos + code snippets
- ⚡ **Interactive UI Components** — buttons, cards, modals, toggles, spinners
- 🧩 **Modular SCSS** — organized design system with semantic tokens
- ♿ **Accessibility First** — prefers-reduced-motion support across all components
- 📱 **Responsive Design** — mobile-first with breakpoint system
- 🔄 **Page Transitions** — smooth route animations with AnimatePresence

---

## 🚀 Live Demo

After cloning:

```bash
npm install
npm run dev
```

You'll see:

- **Navigation Bar** with "Free" badge and theme toggle (☀️/🌙)
- **Home Page** with component overview
- **Interactive Component Demos** (with smooth animations)
- **Code Snippets** to copy-paste into your project
- **Theme Switching** with persistent storage
- **Page Transitions** between routes

---

## 📦 Components

### ✅ Free (What’s included)

- Button — hover & press states, accessible props
- Card — content layout, badges, ratings, and actions
- Modal — accessible modal with backdrop, ESC/backdrop close support, and focus handling (demo helpers included)
- Toggle — animated switch with accessible labels
- ThemeToggle — persistent light/dark toggle with Heroicons
- Spinner — multiple sizes for loading states
- CodePreview — live previews with copyable, runnable snippets

This free set is intentionally focused: it shows the value and structure of a design-system-driven motion kit while keeping the API small and easy to adopt.

### 🚀 Pro (Planned)

The README still mentions a Pro roadmap for larger feature sets (advanced components, Storybook-ready documentation, additional token packs). Those items are planned but not required for the initial free release.

---

## 🛠️ Tech Stack

- ⚛️ **React 19** + TypeScript
- ⚡ **Vite 7** for lightning-fast builds
- 🎨 **SCSS** with design-system architecture
- 🌀 **Framer Motion** for smooth animations
- 📦 **Heroicons** for scalable SVG icons
- 🔗 **React Router** for navigation
- 📝 **Prettier** for code formatting

---

## 🎨 Design System

### Semantic Tokens

- **Colors**: `$brand-primary`, `$text-primary`, `$background-primary`
- **Typography**: `$font-family-ui`, `$font-family-code`, size scales
- **Motion**: `$motion-normal`, `$motion-fast`, easing functions
- **Spacing**: Consistent spacing scale with responsive breakpoints

### Accessibility

- **prefers-reduced-motion** support across all animated components
- **ARIA labels** and semantic HTML
- **Keyboard navigation** support
- **Color contrast** compliant themes

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/         # Button with animations
│   ├── Card/           # Card with hover effects
│   ├── Modal/          # Modal with slide transitions
│   ├── Spinner/        # Loading spinner component
│   ├── ThemeToggle/    # Theme switcher
│   └── Navbar/         # Navigation with Free badge
├── pages/              # Route components
├── styles/             # SCSS architecture
│   ├── abstracts/      # Tokens, colors, mixins
│   ├── base/          # Reset, typography
│   └── components/    # Component styles
└── utils/             # Motion utilities, helpers
```

---

### 🔜 Recent Updates

- Added a "Free" badge to the navbar to clearly label free demo components.
- Implemented prefers-reduced-motion across components.
- Centralized SCSS tokens and helper utilities for example pages.
- Added smooth page transitions with AnimatePresence and copy-paste-ready CodePreview snippets.

---

## ✅ Launch checklist (Free release)

These are the small, practical checks I recommend before tagging the initial free release:

1. Functional
   - [x] Dev server runs: `npm install && npm run dev`
   - [x] Production build completes: `npm run build`
   - [x] No TypeScript or lint-blocking errors in main demo pages

2. Docs & Examples
   - [x] CodePreview examples are copy-paste runnable and use helper classes (no inline styles for examples)
   - [x] Modal demo examples use `.modal-content-center`, `.success-icon`, and `.modal-actions`

3. UX & Accessibility
   - [x] prefers-reduced-motion honored
   - [x] Modal supports ESC and backdrop click (docs note)
   - [x] Icon sizing controlled via classes to avoid scaling issues

4. Packaging & Release
   - [x] `package.json` scripts present for `dev`, `build`, `preview`, and `format`
   - [ ] Add a short LICENSE (MIT recommended) if you intend public distribution

If you want, I can open a PR that adds an MIT `LICENSE` file and a minimal `CONTRIBUTING.md` with coding/PR guidelines.

---

## ▶️ Run tests (minimal)

This free release includes a couple of small smoke tests run with Vitest. Keep this simple:

Install deps (if not already):

```bash
npm install
```

Run the tests:

```bash
npm test
```

You should see the two basic smoke tests pass (Button and Modal). No extra setup is required for the free version.

---

> Polished Free React + Framer Motion UI micro-interactions with accessibility-first design system architecture.

## 🙋 Support & Contribution

This project is free to use and experiment with. If you'd like to contribute or report bugs:

- Open an issue with reproduction steps and the page where it occurs.
- Create PRs against `main` for small fixes (formatting, docs, small components).
- For larger changes (new components, refactors), open an issue first to discuss API design.

Thanks for trying the Motion UI Kit — tell me which pages you want tightened visually next and I’ll standardize them.

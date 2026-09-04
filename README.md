# ⚡ Personal Developer Portfolio

A modern, high-performance developer portfolio built with **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**. Designed with an immersive dark aesthetic, glassmorphism UI, smooth micro-interactions, and interactive 3D physics.

---

## ✨ Features

- 🌌 **Interactive Starfield & Cursor Spotlight** — Dynamic HTML5 Canvas particle background with mouse-tracking ambient spotlight.
- 🎴 **3D Tilt & Magnetic Interactions** — Spring-physics 3D tilt cards for project showcases and magnetic physics buttons.
- 🎨 **Sleek Glassmorphism Design System** — Tailored HSL color palettes, cybernetic cyan/violet glow borders, and clean typography.
- 📊 **Animated Counters & Progress Metrics** — Viewport-triggered easing animation for statistics and achievements with decimal precision support.
- 📂 **Multi-Category Project Filtering** — Filter work across Full-Stack, Mobile, and AI/ML domains.
- 📬 **Interactive Contact Form** — Connected via Web3Forms with real-time field validation and toast notifications.
- 🌓 **Theme Support** — Built-in theme switcher with smooth color transitions and persistent state.
- 📱 **Mobile-First & Accessible** — Fully responsive across all breakpoints with clean semantic HTML.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Core Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) + Custom CSS Variables |
| **Animations & Physics** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons & Notifications** | [React Icons](https://react-icons.github.io/react-icons/) · [React Hot Toast](https://react-hot-toast.com/) |
| **Deployment & CI/CD** | [Vercel](https://vercel.com/) · GitHub Actions |

---

## 📁 Project Structure

```
portfolio/
├── public/                     # Static assets (favicons, icons, resume)
├── src/
│   ├── assets/                 # App assets & media
│   ├── components/
│   │   ├── layout/             # Navigation, Footer, ScrollProgress, LoadingScreen
│   │   ├── sections/           # Hero, About, Skills, Projects, Experience, Certifications, Hackathons, Contact
│   │   └── ui/                 # MagneticButton, ProjectCard, AnimatedCounter, ParticleBackground, Spotlight
│   ├── data/
│   │   └── portfolio.ts        # Centralized portfolio data & content configuration
│   ├── hooks/                  # Custom React hooks (useTheme, etc.)
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Global theme tokens, typography & Tailwind layers
│   └── main.tsx                # Entry point
├── .github/workflows/          # CI/CD deployment pipelines
└── vite.config.ts              # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `18.x` or higher
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shiman-tech/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup (Optional):**
   Copy the example environment configuration:
   ```bash
   cp .env.example .env.local
   ```

   Add your [Web3Forms Access Key](https://web3forms.com/) for contact form delivery:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR) |
| `npm run build` | Type-checks with `tsc` and creates an optimized production bundle in `dist/` |
| `npm run preview` | Locally previews the production build output |
| `npm run lint` | Runs ESLint to check for code quality and style issues |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

# Lumière — Photography Agency

A premium, cinematic, and highly-optimized web experience built for an editorial photography agency. Lumière uses scroll-driven sequences, precise typography, and a meticulously crafted minimalist aesthetic to showcase creative work in the best possible light.

## 🌟 Key Features

* **Cinematic Scroll Animations**: Integrates `framer-motion` for fluid, editorial-style animations that feel sophisticated and intentionally paced (including the "Notes from behind the lens" fanning effect).
* **High-End UI/UX**: Designed to feel calm, spacious, and extremely premium. Avoids generic components like rounded cards or harsh gradients in favor of refined spacing and sleek interactions.
* **Fully Responsive**: A tailored mobile experience that degrades gracefully, featuring a full-screen mobile menu overlay and touch-optimized carousels.
* **Performance Optimized**: Implements direct DOM mutations (bypassing expensive React state renders) for high-frequency animations like the Studio metric counters.
* **Auto-playing Testimonial Carousel**: A buttery smooth crossfading carousel that cycles testimonials every 5 seconds, complete with minimal chevron navigation and progress indicators.

## 🛠 Tech Stack

* **React (Vite)** — Fast, modern, and reliable build tool.
* **TypeScript** — For robust, type-safe development.
* **Tailwind CSS** — Utility-first styling for rapid, scalable UI construction.
* **Framer Motion** — Powerful animation library for complex, scroll-linked interactions.
* **Lucide React** — Minimalist icon library.

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or newer recommended) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JagnoorMarok/lumiere.git
   cd lumiere
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components (Navbar, Footer, Modals)
│   ├── HeroSection.tsx  # Landing view with mix-blend text reveal
│   ├── StudioSection.tsx# High-performance animated counters
│   ├── JournalSection.tsx# Scroll-linked fanning animations
│   └── ...
├── types/               # TypeScript interfaces and type definitions
├── index.css            # Global Tailwind imports and base styles
└── App.tsx              # Main orchestrator and layout container
```

## 🎨 Design Philosophy

Lumière is built on a few core aesthetic rules:
- **No Cards**: Content breathes freely without constraining boxes.
- **Cinematic Pacing**: Animations take their time and feel deliberate.
- **Editorial Typography**: Large, serif wordmarks contrast sharply with tracking-widest monospaced utility text.
- **Monochrome & Charcoal**: Relies on a strict color palette centered around deep charcoal (`#111`), muted taupe/green accents, and pure white.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

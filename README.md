# Finnova Web — Next.js

Migración del proyecto original (Vite + React SPA) a **Next.js 14** con App Router.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Radix UI** (Slot)
- **lucide-react**

## Estructura

```
finnova-next/
├── app/
│   ├── globals.css       # Estilos globales + tokens CSS Finnova
│   ├── layout.tsx        # Root layout con metadata SEO
│   ├── page.tsx          # Página principal (/)
│   └── not-found.tsx     # Página 404
├── components/
│   ├── ui/
│   │   └── button.tsx    # Componente Button con variantes hero
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── EuProgramsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ImpactSection.tsx
│   ├── NewsSection.tsx
│   ├── CtaSection.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts          # cn() helper
├── public/
│   └── assets/           # Imágenes estáticas (logo, hero-bg, etc.)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Cambios respecto al original (Vite)

| Original (Vite/SPA) | Next.js |
|---|---|
| `react-router-dom` | Next.js App Router + `not-found.tsx` |
| `import img from "@/assets/..."` | `next/image` con `/public/assets/` |
| `src/main.tsx` + `App.tsx` | `app/layout.tsx` + `app/page.tsx` |
| `vite.config.ts` | `next.config.mjs` |
| Todos los componentes client-side | `"use client"` donde se usa estado/efectos |

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Producción

```bash
npm run build
npm start
```

## Deploy

Optimizado para deploy en **Vercel** — simplemente conecta el repositorio.

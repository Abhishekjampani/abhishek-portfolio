# Abhishek Jampani — Portfolio

Premium personal portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Features

- Dark theme with glassmorphism & gradient accents
- Smooth Framer Motion animations
- Fully responsive (mobile-first)
- SEO optimized metadata
- Single source of truth: `src/data/portfolioData.ts`
- Working contact form (client-side demo)
- Coding profiles, certifications, timeline education
- Animated skill bars & counters

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
abhishek-portfolio/
├── public/
│   └── images/
│       └── profile.png          # Your profile photo
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── CodingProfiles.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts     # ← UPDATE THIS FILE ONLY
│   └── lib/
│       └── utils.ts
├── package.json
└── README.md
```

## Updating Content

Edit **`src/data/portfolioData.ts`** only. All sections read from this file.

To add project screenshots:
1. Place images in `public/images/projects/`
2. Update the `image` field in the corresponding project object.

To enable a real contact form backend, replace the simulated submit in `Contact.tsx` with Formspree, Resend, or your own API route.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons

## License

Personal use — Abhishek Jampani

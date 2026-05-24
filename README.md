# Deepanshu Sharma Portfolio

Premium full-stack developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Three.js/R3F, GSAP-ready stack, and Lenis smooth scrolling.

## Tech
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Shadcn-style reusable UI components
- React Three Fiber / Drei / Three.js
- Lenis smooth scrolling

## Setup
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables
Create `.env.local` if adding real contact/email integration:
```bash
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=no-reply@yourdomain.com
RESEND_API_KEY=your_key_here
```

Current `POST /api/contact` validates data and returns a success response; wire your mail provider in `src/app/api/contact/route.ts`.

## Build
```bash
npm run build
npm run start
```

## Deployment
1. Push repo to GitHub.
2. Import in Vercel.
3. Add environment variables.
4. Deploy.

## Structure
- `src/app`: routing, metadata, SEO, API route
- `src/components/layout`: app shell + navbar
- `src/components/sections`: portfolio sections
- `src/components/effects`: cursor, smooth scroll, palette, loading, 3D bg
- `src/components/ui`: reusable UI primitives
- `src/data`: centralized content
- `src/lib`: utilities


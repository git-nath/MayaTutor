# Maya Tutor Ethiopia

A fast, mobile-first tutoring agency website built with Next.js (App Router) and Tailwind CSS. The site is designed to be statically exported for quick load times and easy hosting.

## Requirements

- Node.js 18+ (recommended)
- npm 9+ (or compatible package manager)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build (Static Export)

1. Build the static site:

```bash
npm run build
```

2. The static output will be generated in the `out/` folder. You can serve it with any static hosting provider.

## Project Structure

```
app/            # App Router pages and global styles
public/         # Static assets
```

## Notes

- The project uses a single Google font (Inter) and lightweight SVG placeholders to keep the bundle minimal.
- Tailwind is configured in `tailwind.config.ts` for custom brand colors.

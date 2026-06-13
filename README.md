# Pure Timepieces Luxury Starter

A premium Next.js starter for rebuilding Pure Timepieces as a luxury animated ecommerce/showroom site.

## Built for

- Luxury watch ecommerce
- Smooth Awwwards-style homepage animations
- Fast product browsing
- Sell/trade lead capture
- Dream-watch sourcing requests
- Future Shopify, Supabase, Sanity, or Stripe integration

## Tech stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS v4
- Motion for React
- GSAP + ScrollTrigger
- React Three Fiber / Drei
- Local product data first
- API route stub for lead submissions
- Supabase and Shopify helper placeholders

## Quick start

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Environment setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

You can leave the values empty while developing the frontend. Add them later when connecting Shopify/Supabase.

## Suggested build order

1. Replace placeholder watch images in `/public/images` with real photos.
2. Edit product data in `src/lib/products.ts`.
3. Polish homepage sections and scroll animations.
4. Connect Shopify product inventory or keep products local temporarily.
5. Connect Supabase for sell/trade and dream-watch leads.
6. Add authentication/admin dashboard later if needed.

## Main routes

- `/` homepage
- `/shop` shop grid
- `/shop/[slug]` product detail
- `/sell-trade` sell/trade form
- `/dream-watch` sourcing request form
- `/about` about
- `/reviews` reviews
- `/faqs` FAQs
- `/contact` contact form

## Notes

The forms currently POST to `/api/leads`, which returns success and logs the payload on the server. Replace this with Supabase insert, email, or CRM integration when ready.

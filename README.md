# Radiomind — Marketing Site + Blog CMS

A production-ready Next.js (App Router) site for **Radiomind**, an AI radiology
imaging/reporting platform — built with TypeScript, Tailwind CSS, React Icons,
and Swiper.js.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To build for production:

```bash
npm run build
npm run start
```

## What's included

**Pages**
- `/` — Home (hero, features, stats, audiences, process, viewer highlight, AI reporting teaser, testimonials, demo CTA, FAQ preview)
- `/about` — Company story, vision/mission, stats, team, testimonials, CTA
- `/contact` — Contact form + details + map placeholder
- `/request-demo` — Demo request form (reuses the shared form component)
- `/policies` — Privacy policy, terms & conditions, cookie policy
- `/faq` — Full FAQ accordion
- `/blog` — Blog index with category filtering
- `/blog/[slug]` — Blog detail page with SEO metadata, JSON-LD, related posts, and recent blogs
- `/dashboard` — Admin overview
- `/dashboard/posts` — Manage all posts (publish/draft toggle, edit, delete)
- `/dashboard/posts/new` and `/dashboard/posts/[id]` — Create/edit posts

**Blog data layer**

Blog posts are stored in `src/content/posts.json`, a simple file-based store
seeded on first run from `src/data/seed-posts.ts` (10 sample posts). All reads
and writes go through `src/lib/posts.ts`, a small service layer — swap that
file's internals for a real database or headless CMS later without touching
any pages or components. The dashboard performs real create/update/delete/
publish-toggle operations through `/api/posts` and `/api/posts/[id]`.

**Reusable components** (`src/components`)
- `ui/` — Button, Container, SectionHeading, Badge, FormField (Input/Textarea/Select), FaqAccordion
- `layout/` — Navbar (with mobile menu), Footer
- `forms/` — ContactForm (shared by Contact and Request Demo, with validation)
- `sections/` — Hero, FeatureShowcase, Stats, Audience, Process, ViewerHighlight, AiReportingTeaser, Testimonials (Swiper), CtaSection, FaqPreview, and About page sections
- `blog/` — BlogCard, BlogList (category filter), BlogImage (generated cover art), RecentBlogs
- `dashboard/` — DashboardLayout, PostsTable, PostForm

**SEO**

Every page exports metadata via `buildMetadata()` in `src/lib/seo.ts` —
unique titles, descriptions, canonical URLs, and Open Graph/Twitter tags. Blog
posts additionally get per-post SEO fields editable from the dashboard, plus
JSON-LD `BlogPosting` structured data.

## Notes for your dev environment

- **Fonts:** This sandbox had no network access to Google Fonts, so the
  theme currently falls back to a system font stack (see `globals.css` and
  `layout.tsx`). If you want the original Inter/Manrope pairing, swap back to
  `next/font/google` once you're running with normal internet access:
  ```tsx
  import { Inter, Manrope } from "next/font/google";
  ```
- **Images:** Hero art, feature illustrations, team avatars, and blog covers
  are all inline SVG placeholders (no external image dependencies). Swap in
  real photography/screenshots by replacing the relevant components in
  `src/components/sections` and `src/components/blog/BlogImage.tsx`.
- **Swiper styles:** Imported per-component (`swiper/css`, `swiper/css/pagination`)
  in `TestimonialsSwiper.tsx`.

## Tech stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · React Icons · Swiper.js

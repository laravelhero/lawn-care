# Obscura Lawn Care — Premium Lawn Care & Landscaping Website

A production-ready, high-converting marketing website for a fictional lawn care &
landscaping company, built with **Astro**, **Tailwind CSS v4**, and **Alpine.js**.
Premium forest-green aesthetic, fully responsive, SEO-optimized with JSON-LD
structured data on every page.

## 🧱 Tech stack

- **Astro 6** — file-based routing, static output, content collections for the blog
- **Tailwind CSS v4** — via `@tailwindcss/vite`; design tokens live in `src/styles/global.css` (`@theme`)
- **Alpine.js** — mobile menu, dropdowns, filter tabs, testimonial slider, multi-step quote form,
  gallery lightbox, before/after sliders (plugins: `collapse`, `intersect`, registered in `src/entrypoint.ts`)
- **Inline SVG icons** — single `src/components/Icon.astro` icon set, no icon fonts
- **@astrojs/sitemap** — auto-generated `sitemap-index.xml`

## 🗂 Project structure

```text
src/
├── components/        # Header, Footer, Icon, ServiceCard, ServiceDetail,
│                      # SectionHeading, PageHero, Testimonials, Faq, LeadForm,
│                      # LocalBusinessSchema (reusable JSON-LD)
├── content/blog/      # Markdown blog posts (content collection)
├── content.config.ts  # Blog collection schema (glob loader)
├── data/site.ts       # Single source of truth: business info, nav, services, testimonials
├── layouts/Layout.astro   # <head> SEO/OG/Twitter meta, fonts, schema, header/footer, reveal-on-scroll
├── styles/global.css  # Tailwind + design system (colors, fonts, components, animations)
└── pages/
    ├── index.astro                 # Home
    ├── about.astro
    ├── services/index.astro        # Services hub (Alpine filter tabs)
    ├── services/{lawn-mowing,landscaping,fertilization,seasonal-cleanups}.astro
    ├── blog/index.astro            # Blog listing
    ├── blog/[slug].astro           # Blog post (renders markdown)
    ├── projects.astro              # Case studies + before/after sliders
    ├── gallery.astro               # Filterable gallery + lightbox
    ├── contact.astro               # Multi-step quote form + map + hours
    ├── privacy.astro / terms.astro
    └── 404.astro
```

## 🎨 Editing content

Most business details (name, phone, address, hours, service area, nav, services,
testimonials, stats) live in **`src/data/site.ts`** — edit once and every page and
schema stays in sync. Service detail pages share **`src/components/ServiceDetail.astro`**
and pass their own copy, pricing, process steps, and FAQs as props.

Blog posts are Markdown files in **`src/content/blog/`** with frontmatter
(`title`, `description`, `pubDate`, `author`, `category`, `readTime`, `image`, `featured`).

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## 🔍 SEO

- Per-page `<title>`, meta description, canonical URL, Open Graph & Twitter tags (set via `Layout` props)
- Reusable `LocalBusiness` JSON-LD on every page, extended per-page with `Service`, `FAQPage`,
  `BlogPosting`, `BreadcrumbList`, etc.
- Semantic heading hierarchy, `robots.txt`, and an auto-generated sitemap

> Before going live, update `site` in `astro.config.mjs`, the values in `src/data/site.ts`,
> and add a real `public/og-image.jpg`.

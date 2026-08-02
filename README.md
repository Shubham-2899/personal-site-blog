# shubhamlatake.com

Personal site and blog. Next.js 16 (App Router), TypeScript, Tailwind v4, MDX.

```bash
npm install
cp .env.example .env.local   # then fill in the values you need
npm run dev                  # http://localhost:3000
```

## Writing a post

Add a file to `content/blog/`. That's the whole workflow.

```mdx
---
title: "Your title"
excerpt: "One or two sentences — shown in the list, RSS and social previews."
date: "2026-08-03"
category: "Engineering"
tags: ["nextjs", "typescript"]
draft: false
---

## First heading

Body copy.
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | |
| `excerpt` | yes | |
| `date` | yes | ISO format |
| `category` | yes | Plain string. No category pages yet — captured so they can be added later without touching existing posts. |
| `slug` | no | Defaults to the filename |
| `updatedDate` | no | Renders as "Updated …" on the post |
| `tags` | no | Rendered as `#tag` |
| `coverImage` | no | Used for social previews |
| `author` | no | Defaults to Shubham Latake |
| `readingTime` | no | Computed from the body unless set |
| `draft` | no | Visible in `npm run dev`, excluded from the list, RSS and sitemap, and 404s in production |
| `featured` | no | Captured but not yet used in the UI |

Frontmatter is validated with zod when the file is read, so a typo **fails the
build** instead of shipping a broken page. Headings (`##`, `###`) become the
table of contents automatically; it renders once a post has three or more.

## Layout

```
app/          routes, sitemap, robots, RSS, OG image, contact API
components/   layout/ ui/ home/ blog/ uses/
content/      site.ts projects.ts experience.ts certifications.ts uses.ts + blog/*.mdx
lib/          blog.ts (the only module that reads the filesystem) mdx.ts format.ts types.ts
```

Components take plain typed props and never touch the filesystem. Swapping MDX
for a headless CMS later means rewriting `lib/blog.ts` and nothing else.

Editing content is a `content/` change, not a component change — projects,
experience, certifications and the `/uses` list are all typed data files.

## Design system

All tokens live in `app/globals.css`. Two themes share one warm neutral ramp
(hue 75–80) with a single terracotta accent; dark mode is a re-mix rather than
an inversion, and raises the accent's lightness so it stays legible on
charcoal. Fonts are IBM Plex Sans + Mono, self-hosted via `next/font`.

Theming is class-based (`next-themes`): it follows the OS preference, the
toggle overrides it, and the choice persists. The toggle renders both icons and
swaps them with CSS, so the right one paints on the first frame.

## Environment

| Variable | Needed for |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, OG tags, sitemap, RSS. Falls back to `http://localhost:3000`. |
| `RESEND_API_KEY` | The contact form. Without it `/api/contact` returns 503 and the UI points people at email. |
| `CONTACT_FROM_EMAIL` | Sender address; must be a domain verified in Resend. Defaults to `onboarding@resend.dev`. |

## Scripts

```bash
npm run dev     # dev server
npm run build   # production build — also validates all post frontmatter
npm run start   # serve the production build
npm run lint    # eslint
```

## Deploying

Push to a Git repo and import it on Vercel. Set the environment variables
above, and point `NEXT_PUBLIC_SITE_URL` at the production domain so canonical
URLs, RSS and the sitemap resolve correctly.

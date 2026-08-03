/**
 * Single source of truth for identity, links and SEO defaults.
 */

export const site = {
  name: "Shubham Latake",
  role: "Full Stack Engineer",
  location: "Pune, India",
  email: "shubhamlatake123@gmail.com",
  github: "https://github.com/Shubham-2899",
  linkedin: "https://www.linkedin.com/in/shubhamlatake/",

  /**
   * Absolute origin, used for canonical URLs, OG tags, sitemap and RSS.
   * Vercel sets NEXT_PUBLIC_SITE_URL per environment; the fallback keeps
   * local dev and previews working.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000",

  title: "Shubham Latake — Full Stack Engineer",
  description:
    "Full stack engineer working in the JavaScript and TypeScript ecosystem — React, Next.js, Node.js and serverless architecture on AWS. Notes on the systems I build.",

  /**
   * Background-removed PNG in public/, square, alpha preserved — the subject
   * sits straight on the page and reads in both themes. Statically imported by
   * components/layout/Avatar.tsx, so replacing the file is enough; the path is
   * kept here as the record of where it lives.
   */
  avatar: "/avatar.png",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/uses", label: "Uses" },
] as const;

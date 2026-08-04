/**
 * Shared content types.
 *
 * Everything under content/ is authored against these, and every component
 * takes them as plain props. No component reads the filesystem — see lib/blog.ts.
 */

export type Project = {
  name: string;
  description: string;
  tags: string[];
  /** Public URL. `null` for internal work that can't be linked. */
  href: string | null;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  /** Human-readable range, e.g. "Feb 2025 – Present". */
  dates: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export type Certification = {
  /** 2–4 characters shown in the badge. */
  initials: string;
  name: string;
  org: string;
  /** Public verification page, where the issuer provides one. */
  href?: string;
};

/** Keys of the icon set in components/uses/UsesIcon.tsx. */
export type UsesIconName =
  | "brackets"
  | "terminal"
  | "hex"
  | "cylinder"
  | "cloud"
  | "stack"
  | "arrow"
  | "spark"
  | "doc"
  | "bubble"
  | "laptop"
  | "triangle"
  | "server";

export type UsesItem = {
  name: string;
  note: string;
  icon: UsesIconName;
  /** OKLCH hue, 0–360. The only place colour varies across the site. */
  hue: number;
};

export type UsesGroup = {
  label: string;
  items: UsesItem[];
};

export type TocEntry = {
  id: string;
  label: string;
  depth: 2 | 3;
};

export type PostFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  date: Date;
  updatedDate?: Date;
  category: string;
  tags: string[];
  coverImage?: string;
  author: string;
  readingTime: string;
  draft: boolean;
  featured: boolean;
};

/** Frontmatter plus everything derived at read time. */
export type Post = PostFrontmatter & {
  /** Raw MDX body, without frontmatter. */
  content: string;
  toc: TocEntry[];
};

/** List-view shape — no body, so listings stay cheap. */
export type PostSummary = Omit<Post, "content" | "toc">;

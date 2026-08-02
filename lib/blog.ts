import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

import GithubSlugger from "github-slugger";
import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";

import type { Post, PostSummary, TocEntry } from "@/lib/types";

/**
 * The only module that touches the filesystem.
 *
 * Every page and component consumes the typed results below, so swapping MDX
 * files for a headless CMS later means rewriting this file and nothing else.
 */

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Validated at read time — a malformed post fails the build rather than
 * shipping broken. `category` is captured from day one but intentionally has no
 * routes or nav yet; adding /blog/[category] later needs no content migration.
 */
const frontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1).optional(),
  excerpt: z.string().min(1),
  // z.coerce.date() turns an unparseable string into an Invalid Date, whose
  // default zod message reads "expected date, received Date". Override it.
  date: z.coerce.date({ error: "Use an ISO date, e.g. 2026-08-03." }),
  updatedDate: z.coerce
    .date({ error: "Use an ISO date, e.g. 2026-08-03." })
    .optional(),
  category: z.string().min(1),
  tags: z.array(z.string()).default([]),
  coverImage: z.string().optional(),
  author: z.string().default("Shubham Latake"),
  readingTime: z.string().optional(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
});

/** Drafts stay visible locally so you can preview, but never ship. */
const includeDrafts = process.env.NODE_ENV === "development";

/**
 * Pull `##` and `###` headings for the table of contents.
 *
 * Uses the same github-slugger instance type rehype-slug uses, so the ids here
 * match the ones rendered into the HTML exactly.
 */
function extractToc(markdown: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const toc: TocEntry[] = [];
  let insideFence = false;

  for (const line of markdown.split("\n")) {
    // Track fenced code blocks so `# comments` inside them are ignored.
    if (/^\s*(```|~~~)/.test(line)) {
      insideFence = !insideFence;
      continue;
    }
    if (insideFence) continue;

    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;

    const label = match[2]
      .replace(/`/g, "")
      .replace(/\*\*/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .trim();

    toc.push({
      id: slugger.slug(label),
      label,
      depth: match[1].length as 2 | 3,
    });
  }

  return toc;
}

async function readPost(filename: string): Promise<Post> {
  const filePath = path.join(POSTS_DIR, filename);
  const raw = await readFile(filePath, "utf8");
  const { data, content } = matter(raw);

  const parsed = frontmatterSchema.safeParse(data);

  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((issue) => `  - ${issue.path.join(".") || "(root)"}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid frontmatter in content/blog/${filename}:\n${issues}`);
  }

  const frontmatter = parsed.data;

  return {
    ...frontmatter,
    slug: frontmatter.slug ?? filename.replace(/\.mdx?$/, ""),
    // Authored value wins; otherwise derive it from the body.
    readingTime: frontmatter.readingTime ?? readingTime(content).text,
    content,
    toc: extractToc(content),
  };
}

async function readAllPosts(): Promise<Post[]> {
  let filenames: string[];

  try {
    filenames = await readdir(POSTS_DIR);
  } catch {
    // No content/blog directory yet — render the empty state instead of failing.
    return [];
  }

  const posts = await Promise.all(
    filenames.filter((name) => /\.mdx?$/.test(name)).map(readPost),
  );

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

/** Newest first, drafts excluded outside development. */
export async function getAllPosts(): Promise<PostSummary[]> {
  const posts = await readAllPosts();

  return posts
    .filter((post) => includeDrafts || !post.draft)
    .map(({ content: _content, toc: _toc, ...summary }) => summary);
}

/** Published posts only — used by RSS and the sitemap, which must never leak drafts. */
export async function getPublishedPosts(): Promise<PostSummary[]> {
  const posts = await readAllPosts();

  return posts
    .filter((post) => !post.draft)
    .map(({ content: _content, toc: _toc, ...summary }) => summary);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await readAllPosts();
  const post = posts.find((candidate) => candidate.slug === slug);

  if (!post) return null;
  if (post.draft && !includeDrafts) return null;

  return post;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}

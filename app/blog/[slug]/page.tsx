import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

import { mdxComponents } from "@/components/blog/MdxComponents";
import { ShareLinks } from "@/components/blog/ShareLinks";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { site } from "@/content/site";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import { mdxOptions } from "@/lib/mdx";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  const url = `${site.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date.toISOString(),
      modifiedTime: post.updatedDate?.toISOString(),
      authors: [post.author],
      tags: post.tags,
      ...(post.coverImage ? { images: [post.coverImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const url = `${site.url}/blog/${post.slug}`;

  // Structured data so search engines read this as an article, not a page.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date.toISOString(),
    dateModified: (post.updatedDate ?? post.date).toISOString(),
    author: { "@type": "Person", name: post.author, url: site.url },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    mainEntityOfPage: url,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        // Content is ours and JSON-serialised — safe to inline.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="mb-5 inline-block font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        ← Back to Blog
      </Link>

      <h1 className="mb-2 text-[22px] font-semibold text-fg">{post.title}</h1>

      <p className="mb-2 font-mono text-[11px] text-muted">
        Published{" "}
        <time dateTime={post.date.toISOString()}>{formatDate(post.date)}</time>
        {post.updatedDate && (
          <>
            {" · Updated "}
            <time dateTime={post.updatedDate.toISOString()}>
              {formatDate(post.updatedDate)}
            </time>
          </>
        )}
        {" · "}
        {post.readingTime}
      </p>

      {post.tags.length > 0 && (
        <ul className="mb-7 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <li key={tag} className="font-mono text-[11px] text-accent">
              #{tag}
            </li>
          ))}
        </ul>
      )}

      <TableOfContents toc={post.toc} />

      <div>
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={mdxOptions}
        />
      </div>

      <ShareLinks title={post.title} url={url} />
    </article>
  );
}

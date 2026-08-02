import Link from "next/link";

import { FadeIn } from "@/components/ui/FadeIn";
import { formatDate } from "@/lib/format";
import type { PostSummary } from "@/lib/types";

/** Text-forward list, consistent with Projects — no thumbnails, no cards. */
export function PostList({ posts }: { posts: PostSummary[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-base leading-[1.7] text-muted">
        No posts yet. First one is in progress &mdash; check back soon.
      </p>
    );
  }

  return (
    <div>
      {posts.map((post, index) => (
        <FadeIn
          key={post.slug}
          index={index}
          className="mb-[26px] border-b border-border pb-[26px] last:mb-0 last:border-b-0"
        >
          <article>
            <h2>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[17px] font-semibold text-fg transition-colors hover:text-accent"
              >
                {post.title}
              </Link>
              {post.draft && (
                <span className="ml-2 font-mono text-[11px] text-accent">
                  draft
                </span>
              )}
            </h2>

            <p className="mt-0.5 mb-2.5 font-mono text-[11px] text-muted">
              <time dateTime={post.date.toISOString()}>
                {formatDate(post.date)}
              </time>{" "}
              · {post.readingTime}
            </p>

            <p className="text-sm leading-[1.6] text-muted">{post.excerpt}</p>

            {post.tags.length > 0 && (
              <ul className="mt-1.5 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <li key={tag} className="font-mono text-[11px] text-accent">
                    #{tag}
                  </li>
                ))}
              </ul>
            )}
          </article>
        </FadeIn>
      ))}
    </div>
  );
}

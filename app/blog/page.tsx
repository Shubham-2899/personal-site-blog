import type { Metadata } from "next";

import { PostList } from "@/components/blog/PostList";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on the systems I build — architecture, TypeScript, and moving legacy infrastructure onto serverless.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <h1 className="mb-2 text-[22px] font-semibold text-fg">Blog</h1>
      <p className="mb-7 text-base leading-[1.7] text-muted">
        Occasional writing about the systems I build and the problems I run
        into.
      </p>

      <PostList posts={posts} />
    </>
  );
}

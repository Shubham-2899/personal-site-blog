import rehypeShiki from "@shikijs/rehype";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/**
 * Shiki emits both palettes as CSS variables per token; globals.css picks the
 * dark set under `.dark`. That keeps highlighting in step with the theme toggle
 * without shipping a second stylesheet or re-highlighting on the client.
 */
export const mdxOptions: MDXRemoteProps["options"] = {
  parseFrontmatter: false,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeShiki,
        {
          themes: { light: "github-light", dark: "github-dark" },
          defaultColor: false,
          // Keeps <pre> free of an inline background so our token colour wins.
          cssVariablePrefix: "--shiki-",
        },
      ],
    ],
  },
};

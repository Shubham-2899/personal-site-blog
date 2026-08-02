import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Prose styling for post bodies. Matches the site type scale: 16/1.7 body,
 * 17px semibold headings, mono for anything code-shaped.
 */
export const mdxComponents: MDXComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-[30px] mb-2.5 scroll-mt-8 text-[17px] font-semibold text-fg"
      {...props}
    />
  ),

  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-6 mb-2 scroll-mt-8 text-[15px] font-semibold text-fg"
      {...props}
    />
  ),

  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-[18px] text-base leading-[1.7]" {...props} />
  ),

  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mb-[18px] list-disc pl-[18px]" {...props} />
  ),

  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="mb-[18px] list-decimal pl-[18px]" {...props} />
  ),

  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="mb-1 text-base leading-[1.7]" {...props} />
  ),

  a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    const className =
      "border-b border-accent text-accent transition-opacity hover:opacity-70";

    return isInternal ? (
      <Link href={href} className={className} {...props} />
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      />
    );
  },

  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mb-[18px] border-l-2 border-border pl-4 text-muted italic"
      {...props}
    />
  ),

  // Inline code only — shiki wraps block code in <pre><code> and is styled in
  // globals.css, so skip the pill treatment there.
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) =>
    className?.includes("language-") ? (
      <code className={className} {...props} />
    ) : (
      <code
        className="rounded bg-pill px-1 py-0.5 font-mono text-[0.875em]"
        {...props}
      />
    ),

  hr: () => <hr className="my-8 border-border" />,

  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="mb-[18px] overflow-x-auto">
      <table className="w-full text-left text-sm" {...props} />
    </div>
  ),

  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border-b border-border py-2 pr-4 font-mono text-[11px] font-normal tracking-[0.06em] text-muted uppercase"
      {...props}
    />
  ),

  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-border py-2 pr-4 align-top" {...props} />
  ),

  img: ({ src, alt = "" }: ComponentPropsWithoutRef<"img">) =>
    typeof src === "string" ? (
      <Image
        src={src}
        alt={alt}
        width={680}
        height={382}
        className="mb-[18px] h-auto w-full rounded"
      />
    ) : null,
};

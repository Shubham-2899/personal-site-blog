import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Accent-coloured inline link. Adds rel/target only for off-site URLs. */
export function ExternalLink({ href, children, className = "" }: Props) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className={`border-b border-accent text-accent transition-opacity hover:opacity-70 ${className}`}
    >
      {children}
    </a>
  );
}

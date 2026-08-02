"use client";

import { useEffect, useState } from "react";

type Props = {
  title: string;
  url: string;
};

const linkClass =
  "border-b border-accent text-accent transition-opacity hover:opacity-70";

export function ShareLinks({ title, url }: Props) {
  const [copied, setCopied] = useState(false);

  // Clear the "Copied" label without leaking a timer across unmounts.
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Clipboard blocked (insecure origin or denied permission) — leave the
      // label alone rather than claiming a copy that didn't happen.
    }
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-5">
      <span className="font-mono text-[11px] text-muted">Share:</span>

      <a
        href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        X
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        LinkedIn
      </a>

      <button
        type="button"
        onClick={copy}
        className={`cursor-pointer bg-transparent ${linkClass}`}
      >
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}

import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border pt-5 font-mono text-xs text-muted">
      {site.name} · {site.location} · {new Date().getFullYear()}
    </footer>
  );
}

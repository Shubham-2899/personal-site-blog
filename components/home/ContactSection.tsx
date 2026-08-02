"use client";

import { type SubmitEvent, useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const linkClass =
  "border-b border-accent text-accent transition-opacity hover:opacity-70";

const fieldClass =
  "rounded border border-border bg-transparent px-2.5 py-[9px] text-sm text-fg placeholder:text-muted";

export function ContactSection() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const body = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(body.error ?? "Something went wrong.");
      }

      setStatus("sent");
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "Something went wrong.");
    }
  }

  return (
    <section className="mt-11">
      <SectionHeading>Contact</SectionHeading>

      <p className="mb-[18px] text-base leading-[1.7]">
        Best reached by email &mdash; happy to talk about roles, collaborations,
        or anything you&rsquo;ve read here.
      </p>

      <div className="mb-5 flex flex-wrap gap-4">
        <a href={`mailto:${site.email}`} className={linkClass}>
          Email
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          LinkedIn
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          GitHub
        </a>
        <button
          type="button"
          onClick={() => setShowForm((open) => !open)}
          aria-expanded={showForm}
          aria-controls="contact-form"
          className={`cursor-pointer bg-transparent ${linkClass}`}
        >
          {showForm ? "Hide form" : "Contact form"}
        </button>
      </div>

      {showForm && (
        <div id="contact-form">
          {status === "sent" ? (
            <p role="status" className="py-2.5 text-sm text-accent">
              Message sent &mdash; thanks, I&rsquo;ll get back to you soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex max-w-[420px] flex-col gap-2.5"
            >
              <label className="sr-only" htmlFor="contact-name">
                Your name
              </label>
              <input
                id="contact-name"
                name="name"
                required
                maxLength={100}
                autoComplete="name"
                placeholder="Your name"
                className={fieldClass}
              />

              <label className="sr-only" htmlFor="contact-email">
                Your email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                placeholder="Your email"
                className={fieldClass}
              />

              {/* Honeypot — hidden from people, irresistible to bots. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute left-[-9999px] h-px w-px opacity-0"
              />

              <label className="sr-only" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                maxLength={5000}
                placeholder="Message"
                className={`${fieldClass} resize-y`}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-fit cursor-pointer rounded bg-accent px-4 py-[9px] font-mono text-[13px] text-bg transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>

              {status === "error" && error && (
                <p role="alert" className="text-sm text-muted">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      )}
    </section>
  );
}

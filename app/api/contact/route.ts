import { Resend } from "resend";
import { z } from "zod";

import { site } from "@/content/site";

/**
 * Contact form endpoint.
 *
 * Validates on the server regardless of what the client sent, then hands off to
 * Resend. Node runtime because the Resend SDK isn't edge-safe.
 */
export const runtime = "nodejs";

// `error` covers the wrong-type/missing case too, so a dropped field reports
// the same friendly copy as an empty one rather than a raw zod message.
const contactSchema = z.object({
  name: z
    .string({ error: "Please add your name." })
    .trim()
    .min(1, "Please add your name.")
    .max(100, "That name is too long."),
  email: z
    .email({ error: "That email address doesn't look right." })
    .max(200, "That email address is too long."),
  message: z
    .string({ error: "Please add a message." })
    .trim()
    .min(10, "Please write a slightly longer message.")
    .max(5000, "That message is too long — try trimming it down."),
  /**
   * Honeypot: bots fill hidden fields, humans don't. Accepted by the schema so
   * a filled value reaches the handler and can be dropped silently — rejecting
   * it here would tell a bot the field matters.
   */
  website: z.string().optional(),
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "Please check your details." },
      { status: 400 },
    );
  }

  const { name, email, message, website } = parsed.data;

  // Honeypot tripped — accept silently so bots don't learn anything.
  if (website) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — email not sent.");
    return Response.json(
      { error: "The contact form isn't configured yet. Please use email." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      // Must be a domain verified in Resend, or onboarding@resend.dev while testing.
      from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to: site.email,
      replyTo: email,
      subject: `Portfolio contact — ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });

    if (error) {
      console.error("[contact] Resend rejected the message:", error);
      return Response.json(
        { error: "Couldn't send that. Please email me directly." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (cause) {
    console.error("[contact] Unexpected failure:", cause);
    return Response.json(
      { error: "Couldn't send that. Please email me directly." },
      { status: 500 },
    );
  }
}

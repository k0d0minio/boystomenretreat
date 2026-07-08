/**
 * Boys To Men Retreat — application email delivery.
 *
 * Server-only. Turns a submitted answers object into a labeled notification
 * email and delivers it to the team inbox (`SYSTEM_RECIPIENT`) via Resend.
 * Field labels are pulled from the English dictionary's step definitions so the
 * team inbox always reads in one language (English) and stays in form order,
 * regardless of the locale the applicant used.
 *
 * This module reads server-only secrets and is imported only by the route
 * handler — never include it in a client component.
 */
import { Resend } from "resend";

import { en } from "@/dictionaries/en";

const steps = en.application.steps;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Default sender — Resend's shared address, which works without a verified
 * domain (delivers to the account owner in test mode). Set `RESEND_FROM` to a
 * verified-domain address for reliable production delivery. */
const DEFAULT_FROM = "Boys To Men Retreat <onboarding@resend.dev>";

export type Answers = Record<string, string>;

type Field = { label: string; value: string };

/** Map each answerable/legal step to a labeled field, in form order. */
function collectFields(answers: Answers): Field[] {
  const fields: Field[] = [];
  for (const step of steps) {
    if (step.kind === "welcome") continue;
    const raw = (answers[step.id] ?? "").trim();
    const value =
      raw || (step.kind === "legal" ? "Not acknowledged" : "—");
    fields.push({ label: step.title, value });
  }
  return fields;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildApplicationEmail(answers: Answers): {
  subject: string;
  html: string;
  text: string;
} {
  const fields = collectFields(answers);

  const name = (answers.name ?? "").trim();
  const who = name || "new enquiry";
  const subject = `New retreat enquiry — ${who}`;

  const text = [
    "New Boys To Men Retreat application",
    "",
    ...fields.map((f) => `${f.label}\n${f.value}\n`),
  ].join("\n");

  const rows = fields
    .map(
      (f) => `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #eee;font-weight:600;vertical-align:top;width:40%;">${escapeHtml(
            f.label,
          )}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #eee;white-space:pre-wrap;">${escapeHtml(
            f.value,
          )}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:640px;margin:0 auto;color:#1a1a1a;">
      <h2 style="font-size:18px;margin:0 0 16px;">New Boys To Men Retreat application</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tbody>${rows}</tbody>
      </table>
    </div>`;

  return { subject, html, text };
}

/**
 * Send a submitted application to the team inbox. Throws on missing
 * configuration or a Resend API error so the caller can return a 5xx.
 */
export async function sendApplicationEmail(answers: Answers) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.SYSTEM_RECIPIENT;

  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
  if (!to) throw new Error("SYSTEM_RECIPIENT is not configured");

  const resend = new Resend(apiKey);
  const { subject, html, text } = buildApplicationEmail(answers);

  const email = (answers.email ?? "").trim();
  const replyTo = EMAIL_RE.test(email) ? email : undefined;

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM ?? DEFAULT_FROM,
    to,
    replyTo,
    subject,
    html,
    text,
  });

  if (error) {
    throw new Error(`Resend failed to send: ${error.message}`);
  }

  return data;
}

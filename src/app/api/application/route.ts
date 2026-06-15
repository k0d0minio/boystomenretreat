/**
 * POST /api/application
 *
 * Receives a submitted Boys To Men Retreat application (the answers object from
 * the client form) and emails it to the team inbox via Resend.
 */
import { sendApplicationEmail, type Answers } from "@/lib/application-email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Fields the form marks as required — mirrors `required: true` in the steps. */
const REQUIRED_IDS = [
  "parentEmail",
  "parentNames",
  "countryTown",
  "occupation",
  "parentPhone",
  "familyStructure",
  "childName",
  "childAge",
  "childDescription",
  "emergencyContact",
  "photoConsent",
  "dateSigned",
];

export async function POST(request: Request) {
  let answers: Answers;
  try {
    answers = (await request.json()) as Answers;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!answers || typeof answers !== "object") {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing = REQUIRED_IDS.filter(
    (id) => !(answers[id] ?? "").toString().trim(),
  );
  if (missing.length > 0) {
    return Response.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(answers.parentEmail.trim())) {
    return Response.json(
      { error: "Invalid parent email address." },
      { status: 400 },
    );
  }

  try {
    await sendApplicationEmail(answers);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Failed to send application email:", err);
    return Response.json(
      { error: "We couldn't send your application. Please try again." },
      { status: 500 },
    );
  }
}

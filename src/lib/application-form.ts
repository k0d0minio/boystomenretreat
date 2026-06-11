/**
 * Boys To Men Retreat — application form definition.
 *
 * Mirrors the original Typeform ("Let us answer your questions") screen-by-screen.
 * The form is rendered as a native stepped experience by
 * `components/application-form`. Submission target is intentionally a no-op for
 * now — see `onSubmit` in the form component.
 */

export type QuestionType =
  | "email"
  | "text"
  | "longtext"
  | "tel"
  | "number"
  | "choice"
  | "date";

/** A screen that captures an answer. */
export type QuestionStep = {
  kind: "question";
  /** Key used in the collected answers object. */
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  /** Options for `choice` questions. */
  options?: string[];
};

/** A read-and-acknowledge legal screen (waiver / release / authorization). */
export type LegalStep = {
  kind: "legal";
  id: string;
  title: string;
  body: string;
};

/** The opening screen. */
export type WelcomeStep = {
  kind: "welcome";
  title: string;
  body: string;
  buttonLabel: string;
  meta?: string;
};

export type Step = WelcomeStep | QuestionStep | LegalStep;

export const applicationIntro = {
  /** Section heading, carried over from the original site. */
  heading: "Let us answer your questions",
  subheading:
    "Trusting someone with your child raises real questions. Start the application below — it takes about 7 minutes, and it's an enquiry, not a commitment.",
};

export const steps: Step[] = [
  {
    kind: "welcome",
    title: "Boys to Men Retreat Application",
    body: "Thank you for your interest in the Boys to Men Retreat in Ericeira, Portugal. We understand that trusting someone else with your child comes with important questions and concerns. This form is an application only and not a direct registration. There are two age groups: boys aged 9–13 and boys aged 13–16. Retreat dates are flexible for both age groups. If you would like to speak directly, you can call Maxim J Rettich for a one-to-one conversation at +34 600 235 207.",
    buttonLabel: "Start Application",
    meta: "Takes 7 minutes",
  },
  {
    kind: "question",
    id: "parentEmail",
    type: "email",
    title: "Parent or guardian email address",
    placeholder: "name@example.com",
    required: true,
  },
  {
    kind: "question",
    id: "parentNames",
    type: "text",
    title: "Parent or guardian name(s)",
    placeholder: "Type your answer here…",
    required: true,
  },
  {
    kind: "question",
    id: "countryTown",
    type: "text",
    title: "Country and town",
    placeholder: "Type your answer here…",
    required: true,
  },
  {
    kind: "question",
    id: "occupation",
    type: "text",
    title: "Occupation",
    placeholder: "Type your answer here…",
    required: true,
  },
  {
    kind: "question",
    id: "parentPhone",
    type: "tel",
    title: "Parent or guardian phone number",
    description: "Once booked, you will be added to a WhatsApp group.",
    placeholder: "+34 600 235 207",
    required: true,
  },
  {
    kind: "question",
    id: "familyStructure",
    type: "longtext",
    title: "What is the current family structure?",
    placeholder: "Type your answer here…",
    required: true,
  },
  {
    kind: "question",
    id: "childName",
    type: "text",
    title: "Child's name",
    placeholder: "Type your answer here…",
    required: true,
  },
  {
    kind: "question",
    id: "childAge",
    type: "number",
    title: "Child's age",
    placeholder: "Type your answer here…",
    required: true,
  },
  {
    kind: "question",
    id: "childDescription",
    type: "longtext",
    title: "Describe your child in a few sentences",
    placeholder: "Type your answer here…",
    required: true,
  },
  {
    kind: "question",
    id: "allergies",
    type: "longtext",
    title: "Allergies",
    placeholder: "Type your answer here…",
  },
  {
    kind: "question",
    id: "medication",
    type: "longtext",
    title: "Medication",
    description:
      "If applicable, please be as specific as possible. We will also discuss this in person in detail.",
    placeholder: "Type your answer here…",
  },
  {
    kind: "question",
    id: "emergencyContact",
    type: "tel",
    title: "Emergency contact number",
    placeholder: "+34 600 235 207",
    required: true,
  },
  {
    kind: "question",
    id: "photoConsent",
    type: "choice",
    title:
      "Do you allow us to use photos of your child on our website and Instagram page?",
    description:
      "We never use photos that show children in vulnerable or emotional moments.",
    options: ["Yes", "No"],
    required: true,
  },
  {
    kind: "legal",
    id: "liabilityWaiver",
    title: "Liability waiver and assumption of risk",
    body: "I, the undersigned parent or legal guardian of the participant named above, understand that participation in the Boys to Men Retreat may include physical, emotional, recreational, outdoor, group, mentoring, fitness, and personal development activities that carry inherent risks, including but not limited to physical injury, emotional stress, accidents during transportation or activities, illness or medical emergencies, and outdoor or environmental hazards. I acknowledge that participation is voluntary and that my child is physically, mentally, and emotionally capable of participating in retreat activities. I knowingly and voluntarily assume all risks associated with participation in the retreat, whether known or unknown.",
  },
  {
    kind: "legal",
    id: "releaseOfLiability",
    title: "Release of liability",
    body: "To the fullest extent permitted by law, I hereby release, waive, discharge, and hold harmless Boys to Men Retreat, including its owners, organizers, coaches, mentors, volunteers, employees, contractors, affiliates, and representatives, from any and all claims, liabilities, demands, damages, losses, costs, or causes of action arising out of or related to participation in the retreat, including those resulting from ordinary negligence. This release applies to personal injury, property damage, emotional distress, illness, accidents, death, and any unforeseen incidents occurring during or related to the retreat.",
  },
  {
    kind: "legal",
    id: "medicalAuthorization",
    title: "Medical authorization",
    body: "I authorize retreat staff and organizers to obtain emergency medical treatment for my child if deemed necessary. I understand that every reasonable effort will be made to contact me in the event of an emergency. I accept full financial responsibility for any medical treatment, transportation, medication, or emergency services provided.",
  },
  {
    kind: "question",
    id: "dateSigned",
    type: "date",
    title: "Date signed",
    required: true,
  },
];

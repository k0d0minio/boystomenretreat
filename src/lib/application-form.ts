/**
 * Boys To Men Retreat — application form *types*.
 *
 * Mirrors the original Typeform ("Let us answer your questions") screen-by-screen.
 * The actual step content is localized and lives in the per-locale dictionaries
 * (`src/dictionaries/*`, under `application.steps`); the form is rendered by
 * `components/application-form`.
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

/** UI chrome strings for the stepped form (localized, passed in as props). */
export type FormUi = {
  /** Primary "OK" advance button. */
  ok: string;
  /** Final submit button. */
  submit: string;
  /** Submit button while a request is in flight. */
  sending: string;
  /** Legal-screen acknowledge button. */
  continueLabel: string;
  /** Hint shown beside the advance button. */
  pressEnter: string;
  /** Hint shown under multi-line inputs. */
  shiftEnter: string;
  /** Date field sub-labels. */
  month: string;
  day: string;
  year: string;
  /** Navigation aria-labels. */
  prevQuestion: string;
  nextQuestion: string;
  /** Validation messages. */
  required: string;
  requiredChoice: string;
  invalidEmail: string;
  invalidAge: string;
  invalidDate: string;
  /** Submission error (network/server). */
  submitError: string;
  /** Success screen. */
  successTitle: string;
  successBody: string;
};

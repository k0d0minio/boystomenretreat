"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUp, Check, CornerDownLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FormUi, QuestionStep, Step } from "@/lib/application-form";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LETTERS = ["A", "B", "C", "D", "E", "F"];

type Answers = Record<string, string>;

/** Validate the active step. Returns an error message, or null when valid. */
function validate(step: Step, answers: Answers, ui: FormUi): string | null {
  if (step.kind !== "question") return null;
  const value = (answers[step.id] ?? "").trim();

  if (!value) {
    if (step.required) {
      return step.type === "choice" ? ui.requiredChoice : ui.required;
    }
    return null; // optional + empty is fine
  }

  switch (step.type) {
    case "email":
      return EMAIL_RE.test(value) ? null : ui.invalidEmail;
    case "number": {
      const n = Number(value);
      if (!Number.isFinite(n) || n <= 0) return ui.invalidAge;
      return null;
    }
    case "date":
      return isCompleteDate(value) ? null : ui.invalidDate;
    default:
      return null;
  }
}

function isCompleteDate(value: string): boolean {
  const [m, d, y] = value.split("/");
  return Boolean(m && d && y && y.length === 4);
}

export function ApplicationForm({ steps, ui }: { steps: Step[]; ui: FormUi }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const step = steps[index];
  const isLast = index === steps.length - 1;
  const progress = submitted ? 100 : (index / (steps.length - 1)) * 100;
  const firstFieldRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const setAnswer = useCallback((id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setError(null);
  }, []);

  const goPrev = useCallback(() => {
    setError(null);
    setDirection(-1);
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const handleSubmit = useCallback(async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      console.error("Application submission failed", err);
      setSubmitError(ui.submitError);
    } finally {
      setSubmitting(false);
    }
  }, [answers, ui.submitError]);

  const goNext = useCallback(() => {
    if (submitting) return; // ignore input while a submission is in flight
    const message = validate(step, answers, ui);
    if (message) {
      setError(message);
      return;
    }
    if (step.kind === "legal") {
      // Continuing past a legal screen records acknowledgement.
      setAnswers((prev) => ({ ...prev, [step.id]: "Acknowledged" }));
    }
    if (isLast) {
      void handleSubmit();
      return;
    }
    setError(null);
    setDirection(1);
    setIndex((i) => Math.min(steps.length - 1, i + 1));
  }, [step, answers, isLast, handleSubmit, submitting, ui, steps.length]);

  // Focus the first field whenever the step changes.
  useEffect(() => {
    if (submitted) return;
    const id = window.setTimeout(() => firstFieldRef.current?.focus(), 60);
    return () => window.clearTimeout(id);
  }, [index, submitted]);

  const selectChoice = useCallback(
    (q: QuestionStep, value: string) => {
      setAnswer(q.id, value);
      setDirection(1);
      window.setTimeout(() => {
        setIndex((i) => Math.min(steps.length - 1, i + 1));
      }, 260);
    },
    [setAnswer, steps.length],
  );

  // Letter-key shortcuts for choice questions (A, B, …).
  useEffect(() => {
    if (submitted || step.kind !== "question" || step.type !== "choice") return;
    const onKey = (e: KeyboardEvent) => {
      const idx = LETTERS.indexOf(e.key.toUpperCase());
      if (idx >= 0 && step.options?.[idx]) {
        e.preventDefault();
        selectChoice(step, step.options[idx]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, submitted, selectChoice]);

  const variants = useMemo(
    () => ({
      enter: (dir: number) => ({
        y: reduceMotion ? 0 : dir > 0 ? 36 : -36,
        opacity: 0,
      }),
      center: { y: 0, opacity: 1 },
      exit: (dir: number) => ({
        y: reduceMotion ? 0 : dir > 0 ? -36 : 36,
        opacity: 0,
      }),
    }),
    [reduceMotion],
  );

  return (
    <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card">
      {/* Progress bar */}
      <div className="absolute inset-x-0 top-0 z-10 h-1 bg-muted">
        <motion.div
          className="h-full bg-primary"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
        />
      </div>

      <div className="relative min-h-[440px] px-6 py-16 sm:px-14 sm:py-20">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          {submitted ? (
            <motion.div
              key="done"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="size-7" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                {ui.successTitle}
              </h3>
              <p className="mt-3 max-w-md text-muted-foreground text-balance">
                {ui.successBody}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
            >
              <StepBody
                step={step}
                steps={steps}
                index={index}
                isLast={isLast}
                answers={answers}
                error={error}
                submitError={submitError}
                submitting={submitting}
                ui={ui}
                fieldRef={firstFieldRef}
                onChange={setAnswer}
                onNext={goNext}
                onSelectChoice={selectChoice}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Up / down navigation, Typeform-style */}
      {!submitted && (
        <div className="absolute bottom-4 right-4 flex overflow-hidden rounded-md border border-border">
          <button
            type="button"
            onClick={goPrev}
            disabled={index === 0}
            aria-label={ui.prevQuestion}
            className="flex size-8 items-center justify-center bg-primary text-primary-foreground transition-colors hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowUp className="size-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={isLast}
            aria-label={ui.nextQuestion}
            className="flex size-8 items-center justify-center border-l border-primary-foreground/20 bg-primary text-primary-foreground transition-colors hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowDown className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}

type StepBodyProps = {
  step: Step;
  steps: Step[];
  index: number;
  isLast: boolean;
  answers: Answers;
  error: string | null;
  submitError: string | null;
  submitting: boolean;
  ui: FormUi;
  fieldRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
  onChange: (id: string, value: string) => void;
  onNext: () => void;
  onSelectChoice: (q: QuestionStep, value: string) => void;
};

function StepBody({
  step,
  steps,
  index,
  isLast,
  answers,
  error,
  submitError,
  submitting,
  ui,
  fieldRef,
  onChange,
  onNext,
  onSelectChoice,
}: StepBodyProps) {
  if (step.kind === "welcome") {
    return (
      <div className="flex flex-col items-center text-center">
        <h3 className="font-heading text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-xl text-muted-foreground text-balance">
          {step.body}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <Button size="lg" onClick={onNext} className="px-6 text-base">
            {step.buttonLabel}
          </Button>
          {step.meta && (
            <span className="text-xs text-muted-foreground">{step.meta}</span>
          )}
        </div>
      </div>
    );
  }

  if (step.kind === "legal") {
    return (
      <div>
        <p className="font-serif text-3xl leading-none text-muted-foreground/50">
          &ldquo;
        </p>
        <h3 className="mt-1 font-heading text-xl font-bold tracking-tight sm:text-2xl">
          {step.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {step.body}
        </p>
        <div className="mt-8">
          <Button size="lg" onClick={onNext} className="px-5">
            {ui.continueLabel}
          </Button>
        </div>
      </div>
    );
  }

  // question
  const number = countableNumber(index, steps);
  return (
    <div>
      <div className="flex items-baseline gap-2 text-primary">
        <span className="text-sm font-semibold tabular-nums">{number}</span>
        <ArrowDown className="size-3.5 -rotate-90" />
      </div>
      <h3 className="mt-1 font-heading text-xl font-semibold tracking-tight text-balance sm:text-2xl">
        {step.title}
        {step.required && <span className="ml-1 text-primary">*</span>}
      </h3>
      {step.description && (
        <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
      )}

      <div className="mt-6">
        <QuestionField
          step={step}
          value={answers[step.id] ?? ""}
          ui={ui}
          fieldRef={fieldRef}
          onChange={(v) => onChange(step.id, v)}
          onNext={onNext}
          onSelectChoice={onSelectChoice}
        />
      </div>

      {(error || submitError) && (
        <p className="mt-3 text-sm text-destructive">{error || submitError}</p>
      )}

      {step.type !== "choice" && (
        <div className="mt-6 flex items-center gap-3">
          <Button
            size="lg"
            onClick={onNext}
            disabled={submitting}
            className="px-5"
          >
            {submitting ? ui.sending : isLast ? ui.submit : ui.ok}
          </Button>
          {!submitting && (
            <span className="hidden items-center gap-1 text-xs text-muted-foreground sm:flex">
              {ui.pressEnter} <kbd className="font-sans font-medium">Enter</kbd>
              <CornerDownLeft className="size-3" />
            </span>
          )}
        </div>
      )}
    </div>
  );
}

type FieldProps = {
  step: QuestionStep;
  value: string;
  ui: FormUi;
  fieldRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
  onChange: (value: string) => void;
  onNext: () => void;
  onSelectChoice: (q: QuestionStep, value: string) => void;
};

const inputClass =
  "w-full border-0 border-b-2 border-border bg-transparent pb-2 text-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

function QuestionField({
  step,
  value,
  ui,
  fieldRef,
  onChange,
  onNext,
  onSelectChoice,
}: FieldProps) {
  if (step.type === "choice") {
    return (
      <div className="flex flex-col gap-3">
        {step.options?.map((option, i) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelectChoice(step, option)}
              className={cn(
                "group/option flex items-center gap-3 rounded-lg border-2 px-4 py-3 text-left transition-colors",
                selected
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/60 hover:bg-muted",
              )}
            >
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded border text-xs font-semibold",
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground group-hover/option:border-primary/60",
                )}
              >
                {selected ? <Check className="size-3.5" /> : LETTERS[i]}
              </span>
              <span className="font-medium">{option}</span>
            </button>
          );
        })}
      </div>
    );
  }

  if (step.type === "date") {
    return (
      <DateField
        value={value}
        ui={ui}
        fieldRef={fieldRef as React.RefObject<HTMLInputElement | null>}
        onChange={onChange}
        onNext={onNext}
      />
    );
  }

  if (step.type === "longtext") {
    return (
      <div>
        <textarea
          ref={fieldRef as React.RefObject<HTMLTextAreaElement | null>}
          value={value}
          rows={2}
          placeholder={step.placeholder}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onNext();
            }
          }}
          className={cn(inputClass, "resize-none")}
        />
        <p className="mt-2 text-xs text-muted-foreground">
          <kbd className="font-sans font-medium">Shift</kbd> +{" "}
          <kbd className="font-sans font-medium">Enter</kbd> {ui.shiftEnter}
        </p>
      </div>
    );
  }

  const inputType =
    step.type === "email" ? "email" : step.type === "tel" ? "tel" : "text";

  return (
    <input
      ref={fieldRef as React.RefObject<HTMLInputElement | null>}
      type={inputType}
      inputMode={
        step.type === "number"
          ? "numeric"
          : step.type === "tel"
            ? "tel"
            : step.type === "email"
              ? "email"
              : undefined
      }
      value={value}
      placeholder={step.placeholder}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          onNext();
        }
      }}
      className={inputClass}
    />
  );
}

type DateFieldProps = {
  value: string;
  ui: FormUi;
  fieldRef: React.RefObject<HTMLInputElement | null>;
  onChange: (value: string) => void;
  onNext: () => void;
};

function DateField({ value, ui, fieldRef, onChange, onNext }: DateFieldProps) {
  const [month, day, year] = value ? value.split("/") : ["", "", ""];

  const update = (m: string, d: string, y: string) => {
    onChange(`${m}/${d}/${y}`);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onNext();
    }
  };

  const cell =
    "w-16 border-b-2 border-border bg-transparent pb-2 text-center text-lg outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary";

  return (
    <div className="flex items-end gap-3">
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">{ui.month}</span>
        <input
          ref={fieldRef}
          value={month ?? ""}
          inputMode="numeric"
          maxLength={2}
          placeholder="MM"
          onChange={(e) =>
            update(e.target.value.replace(/\D/g, ""), day ?? "", year ?? "")
          }
          onKeyDown={onKeyDown}
          className={cell}
        />
      </label>
      <span className="pb-2 text-lg text-muted-foreground">/</span>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">{ui.day}</span>
        <input
          value={day ?? ""}
          inputMode="numeric"
          maxLength={2}
          placeholder="DD"
          onChange={(e) =>
            update(month ?? "", e.target.value.replace(/\D/g, ""), year ?? "")
          }
          onKeyDown={onKeyDown}
          className={cell}
        />
      </label>
      <span className="pb-2 text-lg text-muted-foreground">/</span>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">{ui.year}</span>
        <input
          value={year ?? ""}
          inputMode="numeric"
          maxLength={4}
          placeholder="YYYY"
          onChange={(e) =>
            update(month ?? "", day ?? "", e.target.value.replace(/\D/g, ""))
          }
          onKeyDown={onKeyDown}
          className={cn(cell, "w-20")}
        />
      </label>
    </div>
  );
}

/** Question number among answerable + legal steps (excludes the welcome screen). */
function countableNumber(index: number, steps: Step[]): number {
  let n = 0;
  for (let i = 1; i <= index; i++) {
    if (steps[i].kind !== "welcome") n++;
  }
  return n;
}

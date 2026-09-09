"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react"

import SurveyProgress from "./survey-progress"

type Question = {
  id: number
  section: string
  question: string
  type: "single" | "multi" | "text"
  options?: string[]
  placeholder?: string
}

const questions: Question[] = [
  {
    id: 1,
    section: "Your car-care habits",
    question: "How often do you usually wash your car?",
    type: "single",
    options: [
      "Several times a week",
      "Once a week",
      "Every 2 weeks",
      "Once a month",
      "Only when necessary",
    ],
  },
  {
    id: 2,
    section: "Your car-care habits",
    question: "Where do you usually wash your car?",
    type: "single",
    options: [
      "Car wash",
      "At home",
      "Mobile service",
      "I wash it myself",
      "Other",
    ],
  },
  {
    id: 3,
    section: "Your car-care habits",
    question: "How much do you typically spend on a regular wash?",
    type: "single",
    options: [
      "Below ₦2,000",
      "₦2,000–₦3,999",
      "₦4,000–₦5,999",
      "₦6,000–₦7,999",
      "₦8,000+",
    ],
  },
  {
    id: 4,
    section: "Your experience",
    question: "What is your biggest frustration with car-care services?",
    type: "single",
    options: [
      "Waiting time",
      "Poor quality",
      "Cost",
      "Poor customer service",
      "Damage / mishandling",
      "Trust / security",
      "Distance",
      "Inconvenience",
      "Other",
    ],
  },
  {
    id: 5,
    section: "Your experience",
    question: "How long do you usually wait for your car to be serviced?",
    type: "single",
    options: [
      "Less than 30 minutes",
      "30–60 minutes",
      "1–2 hours",
      "More than 2 hours",
    ],
  },
  {
    id: 6,
    section: "Your experience",
    question: "What do you normally do while waiting?",
    type: "multi",
    options: [
      "Sit and wait",
      "Use my phone",
      "Work",
      "Read",
      "Run errands",
      "Leave and return",
      "Other",
    ],
  },
  {
    id: 7,
    section: "Your experience",
    question:
      "Have you ever had a bad experience with a car wash or detailer?",
    type: "single",
    options: ["Yes", "No"],
  },
  {
    id: 8,
    section: "Your preferences",
    question: "Which services would you be interested in?",
    type: "multi",
    options: [
      "Regular wash",
      "Interior cleaning",
      "Detailing",
      "Buffing / polishing",
      "Tyre care",
      "Battery assistance",
      "Basic maintenance",
      "Mobile car care",
      "Other",
    ],
  },
  {
    id: 9,
    section: "Your preferences",
    question:
      "Would you use a professional car-care service at your home or estate?",
    type: "single",
    options: ["Definitely", "Probably", "Maybe", "No"],
  },
  {
    id: 10,
    section: "Your preferences",
    question:
      "What would make you trust a mobile car-care service?",
    type: "multi",
    options: [
      "Professional uniforms",
      "Trained workers",
      "Transparent pricing",
      "Reviews / recommendations",
      "Being able to monitor the service",
      "Insurance / guarantee",
      "Physical location",
      "Other",
    ],
  },
  {
    id: 11,
    section: "About Fokomo",
    question: "Which part of Fokomo interests you the most?",
    type: "multi",
    options: [
      "Convenience",
      "Saving time",
      "Quality",
      "Pricing",
      "Trust / security",
      "Multiple services",
    ],
  },
  {
    id: 12,
    section: "About Fokomo",
    question: "How would you prefer to pay for Fokomo services?",
    type: "single",
    options: [
      "Pay per service",
      "Monthly subscription",
      "Both",
    ],
  },
  {
    id: 13,
    section: "About Fokomo",
    question: "What is one thing you would want Fokomo to do differently?",
    type: "text",
    placeholder:
      "Tell us what would make the experience better...",
  },
  {
    id: 14,
    section: "About Fokomo",
    question:
      "If Fokomo was available in your estate, would you use it?",
    type: "single",
    options: ["Yes", "Maybe", "No"],
  },
  {
    id: 15,
    section: "Final thoughts",
    question:
      "What would make you choose Fokomo instead of your current car wash?",
    type: "text",
    placeholder:
      "For example: better service, convenience, price, trust...",
  },
  {
    id: 16,
    section: "Final thoughts",
    question:
      "What would make you NOT use Fokomo?",
    type: "text",
    placeholder:
      "Tell us what could stop you from trying it...",
  },
]

export default function SurveyForm() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string | string[]>>(
    {}
  )
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const question = questions[current]
  const answer = answers[question.id]

  function setSingleAnswer(value: string) {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: value,
    }))
  }

  function toggleMultiAnswer(value: string) {
    const currentAnswers = Array.isArray(answer) ? answer : []

    const updated = currentAnswers.includes(value)
      ? currentAnswers.filter((item) => item !== value)
      : [...currentAnswers, value]

    setAnswers((previous) => ({
      ...previous,
      [question.id]: updated,
    }))
  }

  function setTextAnswer(value: string) {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: value,
    }))
  }

  function canContinue() {
    if (!answer) return false

    if (Array.isArray(answer)) {
      return answer.length > 0
    }

    return answer.trim().length > 0
  }

  function next() {
    if (!canContinue()) return

    if (current < questions.length - 1) {
      setCurrent((value) => value + 1)
      return
    }

    submitSurvey()
  }

  function previous() {
    if (current > 0) {
      setCurrent((value) => value - 1)
    }
  }

  function submitSurvey() {
    setLoading(true)

    // Temporary MVP behaviour.
    // Later this becomes a Supabase insert.
    setTimeout(() => {
      console.log("Fokomo survey:", answers)

      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 text-center md:p-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 text-white">
          <CheckCircle2 size={28} />
        </div>

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Survey complete
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Thank you for helping us build Fokomo.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-500">
          Your answers will help us understand what car owners actually
          need and design a better car-care experience around them.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white"
        >
          Back to Fokomo
          <ArrowRight size={16} />
        </a>
      </div>
    )
  }

  return (
    <div>
      <SurveyProgress
        current={current + 1}
        total={questions.length}
      />

      <div className="mt-10 rounded-[2rem] border border-zinc-200 bg-white p-7 md:p-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            {question.section}
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            {question.question}
          </h2>
        </div>

        <div className="mt-10">
          {question.type === "single" && (
            <div className="grid gap-3">
              {question.options?.map((option) => {
                const selected = answer === option

                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => setSingleAnswer(option)}
                    className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left text-sm transition ${
                      selected
                        ? "border-zinc-950 bg-zinc-950 text-white"
                        : "border-zinc-200 hover:border-zinc-400"
                    }`}
                  >
                    <span>{option}</span>

                    <span
                      className={`h-5 w-5 rounded-full border ${
                        selected
                          ? "border-white bg-white"
                          : "border-zinc-300"
                      }`}
                    >
                      {selected && (
                        <span className="mx-auto mt-1 block h-2.5 w-2.5 rounded-full bg-zinc-950" />
                      )}
                    </span>
                  </button>
                )
              })}
            </div>
          )}

          {question.type === "multi" && (
            <div>
              <p className="mb-4 text-sm text-zinc-500">
                Select all that apply.
              </p>

              <div className="grid gap-3">
                {question.options?.map((option) => {
                  const selected =
                    Array.isArray(answer) &&
                    answer.includes(option)

                  return (
                    <button
                      type="button"
                      key={option}
                      onClick={() => toggleMultiAnswer(option)}
                      className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left text-sm transition ${
                        selected
                          ? "border-zinc-950 bg-zinc-950 text-white"
                          : "border-zinc-200 hover:border-zinc-400"
                      }`}
                    >
                      <span>{option}</span>

                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                          selected
                            ? "border-white bg-white text-zinc-950"
                            : "border-zinc-300"
                        }`}
                      >
                        {selected && (
                          <span className="text-xs font-bold">
                            ✓
                          </span>
                        )}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {question.type === "text" && (
            <textarea
              value={typeof answer === "string" ? answer : ""}
              onChange={(e) => setTextAnswer(e.target.value)}
              placeholder={question.placeholder}
              rows={7}
              className="w-full resize-none rounded-2xl border border-zinc-200 p-5 text-sm leading-6 outline-none placeholder:text-zinc-400 focus:border-zinc-950"
            />
          )}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-zinc-200 pt-7">
          <button
            type="button"
            onClick={previous}
            disabled={current === 0}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-semibold disabled:invisible"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <button
            type="button"
            onClick={next}
            disabled={!canContinue() || loading}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />
                Submitting...
              </>
            ) : current === questions.length - 1 ? (
              <>
                Submit survey
                <ArrowRight size={16} />
              </>
            ) : (
              <>
                Continue
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
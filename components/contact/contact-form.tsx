"use client"

import { FormEvent, useState } from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-50 p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-950 text-white">
          <CheckCircle2 className="h-7 w-7" />
        </div>

        <h2 className="mt-6 text-2xl font-semibold text-zinc-950">
          Message received.
        </h2>

        <p className="mt-3 max-w-md leading-7 text-zinc-600">
          Thanks for reaching out to Fokomo. Our team will review your message
          and get back to you.
        </p>

        <button
          onClick={() => setSubmitted(false)}
          className="mt-7 text-sm font-medium text-zinc-950 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-zinc-900">
            Full name
          </label>

          <input
            required
            name="name"
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition focus:border-zinc-900 focus:bg-white"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-zinc-900">
            Phone number
          </label>

          <input
            required
            name="phone"
            type="tel"
            placeholder="080..."
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition focus:border-zinc-900 focus:bg-white"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="text-sm font-medium text-zinc-900">
          What can we help with?
        </label>

        <select
          required
          name="reason"
          className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition focus:border-zinc-900 focus:bg-white"
        >
          <option value="">Select an option</option>
          <option value="booking">I want to book a service</option>
          <option value="mobile">I need mobile car care</option>
          <option value="estate">I want Fokomo in my estate</option>
          <option value="consultation">I need help choosing a service</option>
          <option value="partnership">Partnership / business enquiry</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="mt-6">
        <label className="text-sm font-medium text-zinc-900">
          Message
        </label>

        <textarea
          required
          name="message"
          rows={6}
          placeholder="Tell us what you need..."
          className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition focus:border-zinc-900 focus:bg-white"
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-4 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
        This form currently uses temporary submission handling. We'll connect
        it to the Fokomo backend later.
      </p>
    </form>
  )
}
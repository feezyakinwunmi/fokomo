"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

export default function LocationRequestPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: "",
    phone: "",
    estate: "",
    area: "",
    cars: "",
    message: "",
  })

  function update(
    field: keyof typeof form,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)

    // Temporary MVP.
    // Later this becomes a Supabase insert.
    setTimeout(() => {
      console.log("Fokomo location request:", form)
      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  if (submitted) {
    return (
      <main className="min-h-[70vh] bg-zinc-50 px-5 py-20">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-zinc-200 bg-white p-10 text-center md:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 text-white">
            <CheckCircle2 size={28} />
          </div>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight">
            Thanks for letting us know.
          </h1>

          <p className="mt-5 leading-7 text-zinc-500">
            We’ll keep your estate in mind as Fokomo expands its service
            coverage.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-zinc-50">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Expand Fokomo
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Bring Fokomo
              <span className="block text-zinc-400">
                to your estate.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
              If reliable car care is difficult to access where you live,
              tell us about your community.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-20">
        <form
          onSubmit={submit}
          className="rounded-[2rem] border border-zinc-200 bg-white p-7 md:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field
              label="Your name"
              value={form.name}
              onChange={(value) => update("name", value)}
              placeholder="Full name"
              required
            />

            <Field
              label="Phone / WhatsApp"
              value={form.phone}
              onChange={(value) => update("phone", value)}
              placeholder="080..."
              required
            />

            <Field
              label="Estate / community"
              value={form.estate}
              onChange={(value) => update("estate", value)}
              placeholder="Estate name"
              required
            />

            <Field
              label="Area"
              value={form.area}
              onChange={(value) => update("area", value)}
              placeholder="e.g. Epe"
              required
            />

            <Field
              label="Estimated number of cars"
              value={form.cars}
              onChange={(value) => update("cars", value)}
              placeholder="e.g. 100+"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">
              Anything else?
            </label>

            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell us anything useful about your estate..."
              className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3.5 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-950"
            />
          </div>

          <button
            disabled={loading}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-4 text-sm font-semibold text-white disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 size={17} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Request my estate
                <ArrowRight size={17} />
              </>
            )}
          </button>
        </form>
      </section>
    </main>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  required?: boolean
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-zinc-200 px-4 py-3.5 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-950"
      />
    </div>
  )
}
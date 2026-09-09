"use client"

import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"

import { services } from "@/lib/data"
import VehicleSelector from "./vehicle-selector"
import LocationSelector from "./location-selector"
import DateTimeSelector from "./date-time-selector"
import BookingSummary from "./booking-summary"
import BookingSuccess from "./booking-success"

export default function BookingForm({
  initialService = "",
}: {
  initialService?: string
}) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: initialService,
    vehicle: "",
    estate: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  })

  function updateField(
    field: keyof typeof form,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)

    // Temporary MVP behaviour.
    // Later this will become a Supabase insert.
    setTimeout(() => {
      console.log("Fokomo booking:", form)

      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  if (submitted) {
    return <BookingSuccess />
  }

  const selectedService = services.find(
    (service) => service.slug === form.service
  )

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-zinc-200 bg-white p-6 md:p-9"
      >
        <div className="border-b border-zinc-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Step 1
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Tell us what you need.
          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Choose the service that best describes what your car needs.
          </p>

          <div className="mt-6">
            <select
              required
              value={form.service}
              onChange={(e) => updateField("service", e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-zinc-950"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="border-b border-zinc-200 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Step 2
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            About you
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full name
              </label>

              <input
                required
                value={form.name}
                onChange={(e) =>
                  updateField("name", e.target.value)
                }
                placeholder="Your name"
                className="w-full rounded-xl border border-zinc-200 px-4 py-3.5 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-950"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone / WhatsApp
              </label>

              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
                placeholder="080..."
                className="w-full rounded-xl border border-zinc-200 px-4 py-3.5 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-950"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-zinc-200 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Step 3
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Your car
          </h2>

          <div className="mt-6">
            <VehicleSelector
              value={form.vehicle}
              onChange={(value) =>
                updateField("vehicle", value)
              }
            />
          </div>
        </div>

        <div className="border-b border-zinc-200 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Step 4
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Where should we care for it?
          </h2>

          <div className="mt-6">
            <LocationSelector
              estate={form.estate}
              address={form.address}
              onEstateChange={(value) =>
                updateField("estate", value)
              }
              onAddressChange={(value) =>
                updateField("address", value)
              }
            />
          </div>
        </div>

        <div className="border-b border-zinc-200 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Step 5
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            When works for you?
          </h2>

          <div className="mt-6">
            <DateTimeSelector
              date={form.date}
              time={form.time}
              onDateChange={(value) =>
                updateField("date", value)
              }
              onTimeChange={(value) =>
                updateField("time", value)
              }
            />
          </div>
        </div>

        <div className="py-8">
          <label className="mb-2 block text-sm font-medium">
            Anything else we should know?
          </label>

          <textarea
            value={form.notes}
            onChange={(e) =>
              updateField("notes", e.target.value)
            }
            rows={4}
            placeholder="Optional notes about your car or request..."
            className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3.5 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-950"
          />
        </div>

        <button
          type="submit"
          disabled={
            loading ||
            !form.service ||
            !form.vehicle ||
            !form.estate ||
            !form.date ||
            !form.time
          }
          className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? (
            <>
              <Loader2 size={17} className="animate-spin" />
              Sending request...
            </>
          ) : (
            <>
              Request this service
              <ArrowRight size={17} />
            </>
          )}
        </button>
      </form>

      <div className="lg:sticky lg:top-24 lg:h-fit">
        <BookingSummary
          service={selectedService?.name}
          vehicle={form.vehicle}
          estate={form.estate}
          date={form.date}
          time={form.time}
        />
      </div>
    </div>
  )
}
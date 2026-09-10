
"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import type { FormEvent } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Car,
  Check,
  CheckCircle,
  Clock,
  Droplets,
  Loader2,
  MapPin,
  MapPinHouse,
  MessageSquare,
  Phone,
  Sparkles,
  User,
  Wallet,
  Wrench,
} from "lucide-react"

const services = [
  {
    id: "wash",
    name: "Express Wash",
    icon: Droplets,
    description: "Quick, thorough exterior cleaning",
    price: "₦3,000",
    duration: "15 min",
  },
  {
    id: "detailing",
    name: "Premium Detailing",
    icon: Sparkles,
    description: "Deep cleaning and restoration",
    price: "₦15,000",
    duration: "2–3 hrs",
  },
  {
    id: "interior",
    name: "Interior Care",
    icon: Car,
    description: "Complete interior cleaning",
    price: "₦8,000",
    duration: "1–2 hrs",
  },
  {
    id: "maintenance",
    name: "Basic Maintenance",
    icon: Wrench,
    description: "Tyre, battery & basic vehicle support",
    price: "From ₦5,000",
    duration: "30 min",
  },
  {
    id: "mobile",
    name: "Mobile Car Care",
    icon: MapPinHouse,
    description: "We come to your location",
    price: "Varies",
    duration: "Flexible",
  },
]

const vehicleTypes = [
  "Sedan",
  "SUV",
  "Truck",
  "Van",
  "Coupe",
  "Convertible",
  "Other",
]

const timeSlots = [
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
]

const steps = [
  { number: 1, label: "Service" },
  { number: 2, label: "You" },
  { number: 3, label: "Vehicle" },
  { number: 4, label: "Location" },
  { number: 5, label: "Schedule" },
]

export default function BookingPage() {
  const searchParams = useSearchParams()

  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    vehicle: "",
    estate: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  })

  /*
   * Preselect the service from:
   * /book?service=wash
   */
  useEffect(() => {
    const serviceFromUrl = searchParams.get("service")

    if (
      serviceFromUrl &&
      services.some((service) => service.id === serviceFromUrl)
    ) {
      setForm((current) => ({
        ...current,
        service: serviceFromUrl,
      }))

      setStep(2)
    }
  }, [searchParams])

  function updateField(
    field: keyof typeof form,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const selectedService = services.find(
    (service) => service.id === form.service
  )

  const stepValidation: Record<number, boolean> = {
    1: form.service.trim() !== "",
    2:
      form.name.trim() !== "" &&
      form.phone.trim() !== "",
    3: form.vehicle.trim() !== "",
    4:
      form.estate.trim() !== "" ||
      form.address.trim() !== "",
    5:
      form.date.trim() !== "" &&
      form.time.trim() !== "",
  }

  const isStepValid = stepValidation[step] ?? false

  function goToNextStep() {
    if (!isStepValid) return

    setStep((current) => Math.min(5, current + 1))
  }

  function goToPreviousStep() {
    setStep((current) => Math.max(1, current - 1))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isStepValid || loading) return

    setLoading(true)

    setTimeout(() => {
      console.log("Booking request:", form)

      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  function resetBooking() {
    setForm({
      name: "",
      phone: "",
      service: "",
      vehicle: "",
      estate: "",
      address: "",
      date: "",
      time: "",
      notes: "",
    })

    setStep(1)
    setSubmitted(false)
  }

  const today = new Date().toISOString().split("T")[0]

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="border-b border-white/10 bg-black px-6 pb-16 pt-28 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
              Service request
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Your request is on its way.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              We have received your service request and will confirm the
              details with you.
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl border border-green-200 bg-white p-8 text-center shadow-sm sm:p-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                <CheckCircle
                  size={42}
                  strokeWidth={1.8}
                  className="text-green-600"
                />
              </div>

              <p className="mt-6 text-sm font-medium uppercase tracking-wider text-green-600">
                Request received
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-950">
                Booking request sent
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500">
                We&apos;ll review your request and confirm your preferred
                service, date and time through WhatsApp or a phone call.
              </p>

              <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-gray-50 p-5 text-left">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-gray-500">
                    Service
                  </span>

                  <span className="text-right text-sm font-semibold text-gray-900">
                    {selectedService?.name || "Service request"}
                  </span>
                </div>

                {form.date && (
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <span className="text-sm text-gray-500">
                      Date
                    </span>

                    <span className="text-right text-sm font-medium text-gray-900">
                      {form.date}
                    </span>
                  </div>
                )}

                {form.time && (
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <span className="text-sm text-gray-500">
                      Time
                    </span>

                    <span className="text-right text-sm font-medium text-gray-900">
                      {form.time}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = "/"
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Back to Home
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={resetBooking}
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  Make another request
                </button>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <p className="text-sm text-gray-500">
                  Need help with your request?
                </p>

                <a
                  href="tel:+2348001234567"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:underline"
                >
                  <Phone size={15} />
                  Call us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-black px-6 pb-16 pt-28 text-white sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
              Book a service
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Give your car the care it deserves.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Tell us what your car needs, where you are and when it works
              for you. We&apos;ll take care of the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="px-6 py-10 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
              {/* Main form */}
              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
                {/* Step indicator */}
                <div className="mb-10 overflow-x-auto">
                  <div className="flex min-w-[520px] items-center">
                    {steps.map((item, index) => {
                      const completed = step > item.number
                      const active = step === item.number

                      return (
                        <div
                          key={item.number}
                          className="flex flex-1 items-center"
                        >
                          <button
                            type="button"
                            onClick={() => {
                              if (item.number < step) {
                                setStep(item.number)
                              }
                            }}
                            disabled={item.number > step}
                            className="group flex items-center gap-2 disabled:cursor-default"
                          >
                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition ${
                                active
                                  ? "bg-yellow-400 text-black"
                                  : completed
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gray-100 text-gray-400"
                              }`}
                            >
                              {completed ? (
                                <Check size={15} />
                              ) : (
                                item.number
                              )}
                            </span>

                            <span
                              className={`hidden text-xs font-medium sm:block ${
                                active
                                  ? "text-gray-950"
                                  : completed
                                    ? "text-green-700"
                                    : "text-gray-400"
                              }`}
                            >
                              {item.label}
                            </span>
                          </button>

                          {index < steps.length - 1 && (
                            <div
                              className={`mx-3 h-px flex-1 ${
                                step > item.number
                                  ? "bg-green-200"
                                  : "bg-gray-200"
                              }`}
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <div>
                    <div className="mb-7">
                      <p className="text-sm font-medium text-yellow-600">
                        Step 01
                      </p>

                      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950">
                        Select a service
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        Choose what your car needs.
                      </p>
                    </div>

                    <div className="grid gap-3">
                      {services.map((service) => {
                        const Icon = service.icon
                        const selected =
                          form.service === service.id

                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => {
                              updateField("service", service.id)
                              setStep(2)
                            }}
                            className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                              selected
                                ? "border-yellow-400 bg-yellow-50 ring-2 ring-yellow-400/20"
                                : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            <div
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition ${
                                selected
                                  ? "bg-yellow-400"
                                  : "bg-gray-100 group-hover:bg-gray-200"
                              }`}
                            >
                              <Icon
                                size={20}
                                className={
                                  selected
                                    ? "text-black"
                                    : "text-gray-600"
                                }
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-950">
                                  {service.name}
                                </span>

                                {service.id === "wash" && (
                                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                                    Popular
                                  </span>
                                )}
                              </div>

                              <p className="mt-1 text-sm text-gray-500">
                                {service.description}
                              </p>
                            </div>

                            <ArrowRight
                              size={17}
                              className={`shrink-0 transition ${
                                selected
                                  ? "text-gray-950"
                                  : "text-gray-300 group-hover:text-gray-600"
                              }`}
                            />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div>
                    <div className="mb-7">
                      <p className="text-sm font-medium text-yellow-600">
                        Step 02
                      </p>

                      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950">
                        Tell us about you
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        We need a few details so we can reach you.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          <User
                            size={14}
                            className="mr-1.5 inline"
                          />
                          Full name
                        </label>

                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(event) =>
                            updateField(
                              "name",
                              event.target.value
                            )
                          }
                          placeholder="e.g. John Doe"
                          autoComplete="name"
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          <Phone
                            size={14}
                            className="mr-1.5 inline"
                          />
                          Phone / WhatsApp
                        </label>

                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(event) =>
                            updateField(
                              "phone",
                              event.target.value
                            )
                          }
                          placeholder="e.g. 080 1234 5678"
                          autoComplete="tel"
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                      </div>

                      <div className="rounded-2xl bg-gray-50 p-4">
                        <div className="flex gap-3">
                          <MessageSquare
                            size={17}
                            className="mt-0.5 shrink-0 text-gray-500"
                          />

                          <p className="text-xs leading-5 text-gray-500">
                            We&apos;ll use this number to confirm your
                            booking and communicate any changes to your
                            service request.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div>
                    <div className="mb-7">
                      <p className="text-sm font-medium text-yellow-600">
                        Step 03
                      </p>

                      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950">
                        Your vehicle
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        What type of vehicle are we caring for?
                      </p>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-gray-900">
                        <Car
                          size={14}
                          className="mr-1.5 inline"
                        />
                        Vehicle type
                      </label>

                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {vehicleTypes.map((type) => {
                          const selected = form.vehicle === type

                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                updateField("vehicle", type)
                                setStep(4)
                              }}
                              className={`rounded-xl border px-4 py-4 text-sm font-medium transition ${
                                selected
                                  ? "border-yellow-400 bg-yellow-50 text-gray-950 ring-2 ring-yellow-400/20"
                                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              {type}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4 */}
                {step === 4 && (
                  <div>
                    <div className="mb-7">
                      <p className="text-sm font-medium text-yellow-600">
                        Step 04
                      </p>

                      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950">
                        Where are you?
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        Tell us where your vehicle will be available.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label
                          htmlFor="estate"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          <MapPin
                            size={14}
                            className="mr-1.5 inline"
                          />
                          Estate / Community
                        </label>

                        <input
                          id="estate"
                          type="text"
                          value={form.estate}
                          onChange={(event) =>
                            updateField(
                              "estate",
                              event.target.value
                            )
                          }
                          placeholder="e.g. Magodo Estate"
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-100" />
                        </div>

                        <div className="relative flex justify-center">
                          <span className="bg-white px-3 text-xs text-gray-400">
                            or provide an address
                          </span>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="address"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          Full address
                        </label>

                        <input
                          id="address"
                          type="text"
                          value={form.address}
                          onChange={(event) =>
                            updateField(
                              "address",
                              event.target.value
                            )
                          }
                          placeholder="Street, house number, landmark"
                          autoComplete="street-address"
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                      </div>

                      <div className="rounded-2xl bg-gray-50 p-4">
                        <div className="flex gap-3">
                          <MapPin
                            size={17}
                            className="mt-0.5 shrink-0 text-gray-500"
                          />

                          <p className="text-xs leading-5 text-gray-500">
                            You only need to provide either your estate or
                            your full address. Our team will confirm the
                            exact service location with you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5 */}
                {step === 5 && (
                  <div>
                    <div className="mb-7">
                      <p className="text-sm font-medium text-yellow-600">
                        Step 05
                      </p>

                      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950">
                        Schedule your service
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        Choose your preferred date and time.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="date"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          <Calendar
                            size={14}
                            className="mr-1.5 inline"
                          />
                          Preferred date
                        </label>

                        <input
                          id="date"
                          type="date"
                          min={today}
                          value={form.date}
                          onChange={(event) =>
                            updateField(
                              "date",
                              event.target.value
                            )
                          }
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-950 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-gray-900">
                          <Clock
                            size={14}
                            className="mr-1.5 inline"
                          />
                          Preferred time
                        </label>

                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {timeSlots.map((time) => {
                            const selected = form.time === time

                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() =>
                                  updateField("time", time)
                                }
                                className={`rounded-xl border px-3 py-3 text-sm transition ${
                                  selected
                                    ? "border-yellow-400 bg-yellow-50 font-semibold text-gray-950 ring-2 ring-yellow-400/20"
                                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                                }`}
                              >
                                {time}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="notes"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          <MessageSquare
                            size={14}
                            className="mr-1.5 inline"
                          />
                          Additional notes
                          <span className="ml-1 font-normal text-gray-400">
                            (optional)
                          </span>
                        </label>

                        <textarea
                          id="notes"
                          value={form.notes}
                          onChange={(event) =>
                            updateField(
                              "notes",
                              event.target.value
                            )
                          }
                          rows={4}
                          placeholder="Anything we should know about your vehicle or service request?"
                          className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
                  <button
                    type="button"
                    onClick={goToPreviousStep}
                    disabled={step === 1}
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent"
                  >
                    <ArrowLeft size={15} />
                    Back
                  </button>

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={goToNextStep}
                      disabled={!isStepValid}
                      className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                    >
                      Continue
                      <ArrowRight size={15} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!isStepValid || loading}
                      className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                    >
                      {loading ? (
                        <>
                          <Loader2
                            size={16}
                            className="animate-spin"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Confirm request
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-950">
                      Booking summary
                    </h3>

                    <Wallet
                      size={18}
                      className="text-gray-400"
                    />
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-400">
                        Service
                      </p>

                      <p className="mt-1 font-semibold text-gray-950">
                        {selectedService?.name || "Not selected"}
                      </p>
                    </div>

                    {selectedService && (
                      <>
                        <div className="flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
                          <span className="text-sm text-gray-500">
                            Starting price
                          </span>

                          <span className="text-sm font-semibold text-gray-950">
                            {selectedService.price}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <span className="text-sm text-gray-500">
                            Duration
                          </span>

                          <span className="text-sm font-medium text-gray-950">
                            {selectedService.duration}
                          </span>
                        </div>
                      </>
                    )}

                    {form.vehicle && (
                      <div className="flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
                        <span className="text-sm text-gray-500">
                          Vehicle
                        </span>

                        <span className="text-right text-sm font-medium text-gray-950">
                          {form.vehicle}
                        </span>
                      </div>
                    )}

                    {form.estate && (
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-sm text-gray-500">
                          Location
                        </span>

                        <span className="max-w-[180px] text-right text-sm font-medium text-gray-950">
                          {form.estate}
                        </span>
                      </div>
                    )}

                    {form.date && (
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-gray-500">
                          Date
                        </span>

                        <span className="text-right text-sm font-medium text-gray-950">
                          {form.date}
                        </span>
                      </div>
                    )}

                    {form.time && (
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-gray-500">
                          Time
                        </span>

                        <span className="text-right text-sm font-medium text-gray-950">
                          {form.time}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 rounded-2xl bg-gray-50 p-4">
                    <div className="flex gap-3">
                      <CheckCircle
                        size={16}
                        className="mt-0.5 shrink-0 text-green-600"
                      />

                      <p className="text-xs leading-5 text-gray-500">
                        Final availability and pricing will be confirmed
                        by our team before your service is scheduled.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Help */}
                <div className="rounded-3xl bg-black p-6 text-white">
                  <p className="text-sm font-semibold">
                    Need help?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    If you&apos;re unsure which service your car needs,
                    speak with our team before booking.
                  </p>

                  <a
                    href="tel:+2348001234567"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition hover:text-yellow-300"
                  >
                    <Phone size={15} />
                    Call our team
                  </a>
                </div>

                {/* Experience note */}
                <div className="rounded-3xl border border-gray-200 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50">
                      <Clock
                        size={18}
                        className="text-yellow-600"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-950">
                        Your time matters
                      </p>

                      <p className="text-xs text-gray-500">
                        We&apos;re built around your schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}


"use client"

import { useState } from "react"
import { 
  ArrowRight, 
  Loader2, 
  Calendar, 
  Clock, 
  MapPin, 
  Car, 
  User, 
  Phone,
  MessageSquare,
  CheckCircle,
  Sparkles,
  Droplets,
  CarFront,
  Wrench,
  MapPinHouse,
  Wallet,
} from "lucide-react"

const services = [
  {
    id: "wash",
    name: "Express Wash",
    icon: Droplets,
    description: "Quick, thorough exterior cleaning",
    price: "₦3,000",
    duration: "15 min"
  },
  {
    id: "detailing",
    name: "Premium Detailing",
    icon: Sparkles,
    description: "Deep cleaning and restoration",
    price: "₦15,000",
    duration: "2-3 hrs"
  },
  {
    id: "interior",
    name: "Interior Care",
    icon: CarFront,
    description: "Complete interior cleaning",
    price: "₦8,000",
    duration: "1-2 hrs"
  },
  {
    id: "maintenance",
    name: "Basic Maintenance",
    icon: Wrench,
    description: "Tyre, battery & basic support",
    price: "From ₦5,000",
    duration: "30 min"
  },
  {
    id: "mobile",
    name: "Mobile Service",
    icon: MapPinHouse,
    description: "We come to your location",
    price: "Varies",
    duration: "Flexible"
  }
]

const vehicleTypes = [
  "Sedan", "SUV", "Truck", "Van", "Coupe", "Convertible", "Other"
]

const timeSlots = [
  "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showPrice, setShowPrice] = useState(false)

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

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      console.log("Booking request:", form)
      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-green-900">Booking Request Sent!</h2>
          <p className="mt-3 text-green-700">
            We'll confirm your booking within 24 hours via WhatsApp or phone call.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-green-600">
            <Phone size={16} />
            <span>Need help? Call us at +234 800 123 4567</span>
          </div>
          <button
            onClick={() => window.location.href = "/"}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
          >
            Back to Home
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    )
  }

  const selectedService = services.find(s => s.id === form.service)
  const isStepValid = {
    1: form.service !== "",
    2: form.name !== "" && form.phone !== "",
    3: form.vehicle !== "",
    4: form.estate !== "" || form.address !== "",
    5: form.date !== "" && form.time !== "",
  }[step as keyof typeof step]

  // Show price when service is selected and we're on step 5 or beyond
  const shouldShowPrice = form.service && (step === 5 || step > 5)

  return (
    <main className="bg-gray-50">
    

      {/* Booking Form */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Main Form */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              {/* Step Indicator */}
              <div className="mb-8 flex items-center justify-between">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(i)}
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition ${
                        step === i
                          ? "bg-yellow-400 text-black"
                          : step > i
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                    >
                      {step > i ? <CheckCircle size={14} /> : i}
                    </button>
                    {i < 5 && (
                      <div className={`h-0.5 w-6 ${
                        step > i ? "bg-green-300" : "bg-gray-200"
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold">Select a Service</h2>
                    <p className="text-sm text-gray-500">Choose what your car needs</p>
                  </div>

                  <div className="grid gap-3">
                    {services.map((service) => {
                      const Icon = service.icon
                      const isSelected = form.service === service.id

                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => {
                            updateField("service", service.id)
                            setStep(2)
                          }}
                          className={`flex items-center gap-4 rounded-xl border p-4 text-left transition ${
                            isSelected
                              ? "border-yellow-400 bg-yellow-50 ring-2 ring-yellow-400/20"
                              : "border-gray-200 hover:border-yellow-200 hover:bg-gray-50"
                          }`}
                        >
                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                            isSelected ? "bg-yellow-400" : "bg-gray-100"
                          }`}>
                            <Icon size={20} className={isSelected ? "text-black" : "text-gray-600"} />
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold">{service.name}</span>
                            <p className="text-sm text-gray-500">{service.description}</p>
                          </div>
                          <ArrowRight size={16} className="text-gray-400" />
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Personal Info */}
              {step === 2 && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold">About You</h2>
                    <p className="text-sm text-gray-500">How can we reach you?</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">
                        <User size={14} className="inline mr-1.5" />
                        Full Name
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">
                        <Phone size={14} className="inline mr-1.5" />
                        Phone / WhatsApp
                      </label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="e.g. 080 1234 5678"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Vehicle Info */}
              {step === 3 && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold">Your Vehicle</h2>
                    <p className="text-sm text-gray-500">What type of car do you have?</p>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      <Car size={14} className="inline mr-1.5" />
                      Vehicle Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {vehicleTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            updateField("vehicle", type)
                            setStep(4)
                          }}
                          className={`rounded-xl border p-3 text-sm font-medium transition ${
                            form.vehicle === type
                              ? "border-yellow-400 bg-yellow-50 text-black ring-2 ring-yellow-400/20"
                              : "border-gray-200 hover:border-yellow-200 hover:bg-gray-50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Location */}
              {step === 4 && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold">Location</h2>
                    <p className="text-sm text-gray-500">Where should we come?</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">
                        <MapPin size={14} className="inline mr-1.5" />
                        Estate / Community
                      </label>
                      <input
                        required
                        value={form.estate}
                        onChange={(e) => updateField("estate", e.target.value)}
                        placeholder="e.g. Magodo Estate"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">
                        Address
                      </label>
                      <input
                        required
                        value={form.address}
                        onChange={(e) => updateField("address", e.target.value)}
                        placeholder="e.g. 123, Street name, House number"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Date & Time */}
              {step === 5 && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold">Schedule</h2>
                    <p className="text-sm text-gray-500">When works for you?</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">
                        <Calendar size={14} className="inline mr-1.5" />
                        Date
                      </label>
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={(e) => updateField("date", e.target.value)}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">
                        <Clock size={14} className="inline mr-1.5" />
                        Preferred Time
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => updateField("time", time)}
                            className={`rounded-xl border p-2 text-sm transition ${
                              form.time === time
                                ? "border-yellow-400 bg-yellow-50 text-black ring-2 ring-yellow-400/20"
                                : "border-gray-200 hover:border-yellow-200 hover:bg-gray-50"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notes */}
              <div className="mt-6">
                <label className="mb-1.5 block text-sm font-medium">
                  <MessageSquare size={14} className="inline mr-1.5" />
                  Additional Notes
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                  rows={3}
                  placeholder="Any special requests or details about your car..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
                <button
                  type="button"
                  onClick={() => setStep(Math.max(1, step - 1))}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    step === 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  disabled={step === 1}
                >
                  Back
                </button>

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (isStepValid) setStep(step + 1)
                    }}
                    className={`rounded-lg px-6 py-2 text-sm font-medium transition ${
                      isStepValid
                        ? "bg-yellow-400 text-black hover:bg-yellow-300"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!isStepValid}
                  >
                    Continue
                    <ArrowRight size={15} className="inline ml-1.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid || loading}
                    className="flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-2 text-sm font-medium text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Confirm & Request Service
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold">Booking Summary</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service</span>
                    <span className="font-medium">{selectedService?.name || "Not selected"}</span>
                  </div>
                  
                  {/* Price - Only shown when service is selected and we're on the final step */}
                  {shouldShowPrice && (
                    <div className="flex justify-between border-t border-yellow-200 pt-3">
                      <span className="text-gray-500">Price</span>
                      <span className="font-bold text-yellow-600">{selectedService?.price || "-"}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium">{selectedService?.duration || "-"}</span>
                  </div>
                  {form.vehicle && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Vehicle</span>
                      <span className="font-medium">{form.vehicle}</span>
                    </div>
                  )}
                  {form.estate && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Location</span>
                      <span className="font-medium text-right">{form.estate}</span>
                    </div>
                  )}
                  {form.date && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date</span>
                      <span className="font-medium">{form.date}</span>
                    </div>
                  )}
                  {form.time && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Time</span>
                      <span className="font-medium">{form.time}</span>
                    </div>
                  )}
                </div>
                
                {/* Price Notice - Shows when service is selected but not on final step */}
                {form.service && !shouldShowPrice && (
                  <div className="mt-4 rounded-lg bg-yellow-50 p-3 border border-yellow-200">
                    <div className="flex items-center gap-2 text-xs text-yellow-700">
                      <Wallet size={14} />
                      <span>Price will be shown when you confirm your booking</span>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle size={14} className="text-green-500" />
                    <span>We'll confirm within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h4 className="text-sm font-semibold">Need help?</h4>
                <p className="mt-1 text-xs text-gray-500">
                  Call us or send a message on WhatsApp
                </p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone size={14} className="text-yellow-500" />
                    <span>+234 800 123 4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MessageSquare size={14} className="text-yellow-500" />
                    <span>Available 7am - 6pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  )
}
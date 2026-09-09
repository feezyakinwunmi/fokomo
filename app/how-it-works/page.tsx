import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react"

export const metadata = {
  title: "How It Works | CarPadi",
  description:
    "See how CarPadi makes car care simple, convenient and less time-consuming.",
}

const steps = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Book your service",
    description:
      "Choose the service your car needs and tell us when and where you would like it done.",
    color: "blue",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Choose your experience",
    description:
      "Depending on the service and location, we can care for your car at our location or bring the service closer to you.",
    color: "purple",
  },
  {
    number: "03",
    icon: CarFront,
    title: "We care for your car",
    description:
      "Our professional crew gets to work while you get on with whatever else matters to you.",
    color: "emerald",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Continue your day",
    description:
      "Once your service is complete, you get your car back properly cared for without feeling like you lost your day.",
    color: "amber",
  },
]

const colorMap = {
  blue: "bg-blue-50 text-blue-600",
  purple: "bg-purple-50 text-purple-600",
  emerald: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black pt-32">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <span className="text-xs font-medium text-yellow-400">
                How CarPadi Works
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Car care without
              <span className="block text-yellow-500">
                putting life on pause.
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              We are designing the entire experience around one simple
              principle: your car needs care, but your time matters too.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">How it works</h2>
              <p className="mt-1 text-sm text-gray-600">
                Four simple steps to get your car cared for
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2 text-sm font-medium text-black transition hover:bg-yellow-300"
            >
              Book now
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon
              const colorClasses = colorMap[step.color as keyof typeof colorMap]

              return (
                <div
                  key={step.number}
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${colorClasses}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-2xl font-bold text-gray-200">
                      {step.number}
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      Step {step.number}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                <span className="text-xs font-medium text-yellow-700">
                  The Difference
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                The car gets cared for.
                <span className="block text-yellow-500">
                  You get your time back.
                </span>
              </h2>

              <p className="mt-3 text-sm text-gray-600">
                Instead of making the waiting experience the centre of
                car care, CarPadi is building a service where convenience,
                communication and proper handling are part of the product.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  { icon: Clock, label: "Save time" },
                  { icon: Sparkles, label: "Quality service" },
                  { icon: MapPin, label: "Mobile option" },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-2"
                    >
                      <Icon size={15} className="text-yellow-600" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-xl bg-black p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400">
                  <Clock size={18} className="text-black" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">Your time matters</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    You can relax, work, listen to music, read, handle an
                    errand or simply continue your day while we care for your car.
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-black bg-gradient-to-br from-yellow-200 to-yellow-400"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium">Trusted by car owners</p>
                    <p className="text-xs text-gray-500">Professional care you can count on</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 text-center md:p-12">
            <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Ready to give your car some attention?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-black/80">
              Choose a service and let us take it from there.
            </p>

            <Link
              href="/book"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-900"
            >
              Book a service
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
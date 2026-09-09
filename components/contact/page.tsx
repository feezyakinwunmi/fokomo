import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  MapPin,
  Wrench,
} from "lucide-react"
import ContactForm from "@/components/contact/contact-form"

const contactOptions = [
  {
    icon: CalendarDays,
    title: "Book a service",
    description:
      "Already know what your car needs? Request a service and choose your preferred time.",
    href: "/book",
    label: "Book now",
  },
  {
    icon: Wrench,
    title: "Need a recommendation?",
    description:
      "Not sure which service is right for your vehicle? Talk to us before booking.",
    href: "/consultation",
    label: "Get advice",
  },
  {
    icon: MapPin,
    title: "Bring Fokomo to your estate",
    description:
      "If your community needs better car care, tell us about your estate and location.",
    href: "/locations/request",
    label: "Request your estate",
  },
]

export default function ContactPage() {
  return (
    <div>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Contact Fokomo
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Let's talk about your car.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Whether you want to book a service, ask a question, request
              mobile care, or bring Fokomo to your estate, we're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-3">
            {contactOptions.map((option) => {
              const Icon = option.icon

              return (
                <Link
                  key={option.title}
                  href={option.href}
                  className="group rounded-3xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h2 className="mt-6 text-xl font-semibold text-zinc-950">
                    {option.title}
                  </h2>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-600">
                    {option.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-950">
                    {option.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                Send us a message
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                Tell us what you need.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-zinc-600">
                Give us a little context and the Fokomo team can point you in
                the right direction.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex gap-4">
                  <MessageCircle className="mt-1 h-5 w-5 text-zinc-900" />

                  <div>
                    <h3 className="font-medium text-zinc-950">
                      Customer support
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600">
                      Booking questions, service information, or general
                      enquiries.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-zinc-900" />

                  <div>
                    <h3 className="font-medium text-zinc-950">
                      Pilot location
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600">
                      Currently focused on Epe and surrounding communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl bg-zinc-950 px-8 py-12 text-white sm:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  Quick answer
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Have a question we may have already answered?
                </h2>

                <p className="mt-3 text-zinc-400">
                  Browse the Fokomo FAQ before sending a message.
                </p>
              </div>

              <Link
                href="/faq"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
              >
                View FAQ
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
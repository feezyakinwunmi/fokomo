

import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Wrench,
} from "lucide-react"

export const metadata = {
  title: "Contact Us | CarPadi",
  description:
    "Get in touch with CarPadi for bookings, car-care services, mobile service requests, estate enquiries and support.",
}

const contactOptions = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description:
      "Chat with our team about a service, booking or any question you have.",
    action: "Chat on WhatsApp",
    href: "#",
    className: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Phone,
    title: "Call us",
    description:
      "Speak directly with our team when you need quick assistance.",
    action: "Call CarPadi",
    href: "#",
    className: "bg-blue-50 text-blue-600",
  },
  {
    icon: Mail,
    title: "Email",
    description:
      "Send us a detailed enquiry and our team will get back to you.",
    action: "Send an email",
    href: "mailto:hello@carpadi.com",
    className: "bg-purple-50 text-purple-600",
  },
]

const reasons = [
  {
    icon: CalendarDays,
    title: "Booking help",
    description:
      "Need help choosing a service, changing a booking or finding a suitable time?",
  },
  {
    icon: CarFront,
    title: "Car-care advice",
    description:
      "Not sure what your vehicle needs? Tell us what is going on and we can point you in the right direction.",
  },
  {
    icon: MapPin,
    title: "Estate enquiries",
    description:
      "Want CarPadi to serve your estate or community? We would love to hear from you.",
  },
  {
    icon: Wrench,
    title: "Vehicle support",
    description:
      "For basic vehicle support, tyre issues, battery assistance and other available services.",
  },
]

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black pt-32 text-white sm:pt-36">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-yellow-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              We&apos;re here to help
            </div>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s talk about
              <span className="block text-yellow-400">
                your car.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              Whether you want to book a service, ask a question, request
              mobile car care or bring CarPadi to your estate, our team is
              ready to help.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Book a service
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Send us a message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="bg-gray-50/70 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold text-gray-500">
              GET IN TOUCH
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Choose how you&apos;d like to reach us.
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
              Pick whichever option works best for you. For the fastest
              response about a service or booking, WhatsApp or phone is
              usually the easiest.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactOptions.map((option) => {
              const Icon = option.icon

              return (
                <a
                  key={option.title}
                  href={option.href}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-black/5 sm:p-7"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${option.className}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-black">
                    {option.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {option.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black">
                    {option.action}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section
        id="contact-form"
        className="scroll-mt-20 bg-white py-20 sm:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-gray-500">
              SEND AN ENQUIRY
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Tell us what you need.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
              Have a question before booking? Need help with a service?
              Looking to bring CarPadi into your estate? Send us a message and
              tell us what you have in mind.
            </p>

            <div className="mt-10 space-y-7">
              {reasons.map((reason) => {
                const Icon = reason.icon

                return (
                  <div
                    key={reason.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                      <Icon className="h-5 w-5 text-gray-700" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-black">
                        {reason.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-gray-200 bg-gray-50/70 p-6 sm:p-8 lg:p-10">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black outline-none transition focus:border-black focus:ring-2 focus:ring-black/5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="0800 000 0000"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black outline-none transition focus:border-black focus:ring-2 focus:ring-black/5"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black outline-none transition focus:border-black focus:ring-2 focus:ring-black/5"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  What can we help with?
                </label>

                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black outline-none transition focus:border-black focus:ring-2 focus:ring-black/5"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="booking">
                    Booking or service enquiry
                  </option>
                  <option value="mobile">
                    Mobile car care
                  </option>
                  <option value="vehicle-support">
                    Vehicle support
                  </option>
                  <option value="estate">
                    Estate/community request
                  </option>
                  <option value="subscription">
                    Subscription enquiry
                  </option>
                  <option value="general">
                    General enquiry
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-black focus:ring-2 focus:ring-black/5"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Send enquiry
                <Send className="h-4 w-4" />
              </button>

              <p className="text-center text-xs leading-5 text-gray-400">
                We&apos;ll use your details only to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Location / availability */}
      <section className="bg-gray-50/70 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-black p-8 text-white sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <MapPin className="h-5 w-5" />
              </div>

              <p className="mt-8 text-sm font-medium text-gray-400">
                CURRENT PILOT
              </p>

              <h2 className="mt-2 text-3xl font-semibold">
                Epe, Lagos
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
                CarPadi is currently focused on serving customers and
                communities around Epe as we build and improve the service.
              </p>

              <Link
                href="/locations"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400"
              >
                Explore locations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
                <Clock3 className="h-5 w-5" />
              </div>

              <h2 className="mt-8 text-2xl font-semibold text-black">
                Service availability
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Service times can vary depending on the type of service,
                location and availability of our team. When you request a
                service, we&apos;ll confirm the appropriate time with you.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "One-off car care",
                  "Mobile car care",
                  "Estate/community service",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-gray-800"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estate CTA */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
            <MapPin className="h-6 w-6" />
          </div>

          <h2 className="mt-7 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Want CarPadi in your estate?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            If your estate or community has a need for reliable car care,
            tell us about it. We&apos;re looking for communities where we can
            make professional car care more accessible and convenient.
          </p>

          <Link
            href="/locations/request"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Request your estate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-yellow-400 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold text-black/60">
              READY WHEN YOU ARE
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black">
              Your car needs care. Your time matters too.
            </h2>
          </div>

          <Link
            href="/book"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Book a service
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
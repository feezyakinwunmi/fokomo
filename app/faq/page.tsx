import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const faqs = [
  {
    question: "What services does Fokomo provide?",
    answer:
      "Fokomo provides car washing, detailing, interior care, buffing and polishing, mobile car care, tyre-related assistance, battery assistance, and basic vehicle support. Our services are designed around everyday car-care needs rather than full mechanical repairs.",
  },
  {
    question: "Can Fokomo come to my estate or home?",
    answer:
      "Yes. Mobile car care is one of the ways Fokomo is designed to make car care more convenient. Availability depends on your location, service type, and our current pilot coverage.",
  },
  {
    question: "How long will my car service take?",
    answer:
      "It depends on the service and condition of the vehicle. A regular wash may take around 30–60 minutes, while detailing and deeper interior services can take considerably longer. We provide an estimated duration when you select a service.",
  },
  {
    question: "Do I need to wait while my car is being serviced?",
    answer:
      "Not necessarily. Fokomo is built around giving customers back their time. Depending on the service and location, you can continue working, relax, run an errand, listen to music, or simply leave and return when your car is ready.",
  },
  {
    question: "Can I book ahead?",
    answer:
      "Yes. You can submit a service request in advance and select your preferred date and time. Our team will confirm availability and the final service details.",
  },
  {
    question: "How much does Fokomo cost?",
    answer:
      "Fokomo is currently operating with pilot pricing, so the final price depends on the service, vehicle, location, and condition of the car. We will confirm pricing before the service is carried out.",
  },
  {
    question: "Does Fokomo offer subscriptions?",
    answer:
      "Subscription packages are part of the Fokomo model. They are designed for customers who want regular car care without having to arrange every service from scratch.",
  },
  {
    question: "Can I request a service that isn't listed?",
    answer:
      "Yes. If you have a specific car-care need that isn't listed, you can use our consultation option. We'll review the request and let you know whether Fokomo can help.",
  },
  {
    question: "Is Fokomo a mechanic workshop?",
    answer:
      "No. Fokomo is primarily a car-care business. We provide basic vehicle support and assistance, but we are not positioned as a full mechanical workshop.",
  },
  {
    question: "Where is Fokomo currently available?",
    answer:
      "Fokomo is currently focused on its pilot operations around Epe, Lagos, with plans to expand into more communities as the service grows.",
  },
  {
    question: "How do I request Fokomo in my estate?",
    answer:
      "You can submit an estate request through our locations page. Tell us where your estate is and approximately how many vehicles could benefit from the service.",
  },
  {
    question: "What happens after I submit a booking?",
    answer:
      "Your request is reviewed by the Fokomo team. We then confirm availability, service details, and pricing with you before the service is carried out.",
  },
]

export default function FAQPage() {
  return (
    <div>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Frequently asked questions
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need to know about Fokomo.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              From booking and mobile service to pricing and availability,
              here are answers to the questions customers ask most.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-lg font-medium text-zinc-950">
                  <span>{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-transform duration-300 group-open:rotate-45">
                    <span className="text-xl font-light">+</span>
                  </span>
                </summary>

                <div className="max-w-3xl pb-7 pr-12 text-base leading-7 text-zinc-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                Still have questions?
              </p>

              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                Not sure what your car needs?
              </h2>

              <p className="mt-4 max-w-2xl text-zinc-600">
                Tell us what you're experiencing and we'll help you figure out
                the most appropriate service.
              </p>
            </div>

            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Talk to Fokomo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-12">
            <div className="flex max-w-3xl gap-5">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-zinc-900" />

              <div>
                <h3 className="text-xl font-semibold text-zinc-950">
                  Your time is part of the service.
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Fokomo isn't only about making your car look better. We're
                  building a car-care experience where quality, convenience,
                  transparency, and respect for your time all matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
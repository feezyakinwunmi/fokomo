import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function ConsultationPage() {
  return (
    <div>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Vehicle consultation
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Not sure what your car needs?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Describe the problem, concern, or result you're looking for.
              We'll help you understand which Fokomo service makes the most
              sense.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              "Tell us what you're noticing.",
              "We'll understand the condition and your goal.",
              "We'll recommend the appropriate service.",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-zinc-200 p-7"
              >
                <span className="text-sm font-medium text-zinc-400">
                  0{index + 1}
                </span>

                <p className="mt-8 text-lg font-medium leading-7 text-zinc-950">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10">
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-zinc-900" />

              <div>
                <h2 className="text-xl font-semibold text-zinc-950">
                  Keep it simple.
                </h2>

                <p className="mt-3 leading-7 text-zinc-600">
                  You don't need to know the technical name of the service.
                  Simply tell us what you want fixed, cleaned, improved, or
                  maintained.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Talk to Fokomo
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3.5 text-sm font-medium text-zinc-950 hover:bg-zinc-50"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
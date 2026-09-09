import SurveyForm from "@/components/survey/survey-form"

export const metadata = {
  title: "Fokomo Survey | Help Us Build Better Car Care",
  description:
    "Share your car-care experience and help Fokomo build a better service.",
}

export default function SurveyPage() {
  return (
    <main className="bg-zinc-50">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Fokomo research
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Help us build
              <span className="block text-zinc-500">
                better car care.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              We want to understand how people actually experience car
              care today. This short survey will help us build Fokomo
              around real customer needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-400">
              <span className="rounded-full border border-white/10 px-4 py-2">
                16 questions
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2">
                About 5 minutes
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2">
                Your feedback matters
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-20">
        <SurveyForm />
      </section>
    </main>
  )
}
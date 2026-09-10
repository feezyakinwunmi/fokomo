import SurveyForm from "@/components/survey/survey-form"

export const metadata = {
  title: "Fokomo Survey | Help Us Build Better Car Care",
  description:
    "Share your car-care experience and help Fokomo build a better service.",
}

export default function SurveyPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black pt-32">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <span className="text-xs font-medium text-yellow-400">
                Fokomo Research
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Help us build
              <span className="block text-yellow-500">
                better car care.
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              We want to understand how people actually experience car
              care today. This short survey will help us build Fokomo
              around real customer needs.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
                16 questions
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
                About 5 minutes
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
                Your feedback matters
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Form */}
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8 lg:py-16">
        <SurveyForm />
      </section>
    </main>
  )
}
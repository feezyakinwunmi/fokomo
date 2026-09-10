import { Suspense } from "react"
import BookingPageContent from "./booking-page"

function BookingFallback() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-black px-6 pb-16 pt-28 text-white sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="h-4 w-32 animate-pulse rounded bg-white/10" />

            <div className="mt-5 h-14 max-w-2xl animate-pulse rounded bg-white/10" />

            <div className="mt-5 h-6 max-w-xl animate-pulse rounded bg-white/10" />
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="h-[600px] animate-pulse rounded-3xl bg-white" />

            <div className="h-[400px] animate-pulse rounded-3xl bg-white" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<BookingFallback />}>
      <BookingPageContent />
    </Suspense>
  )
}
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function BookingSuccess() {
  return (
    <div className="mx-auto max-w-xl rounded-[2rem] border border-zinc-200 bg-white p-8 text-center shadow-sm md:p-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 text-white">
        <CheckCircle2 size={28} />
      </div>

      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
        Request received
      </p>

      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        We’ve got your request.
      </h1>

      <p className="mt-5 leading-7 text-zinc-500">
        Fokomo will review your request and contact you to confirm
        availability, timing and pricing.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white"
        >
          Back home
        </Link>

        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-6 py-3.5 text-sm font-semibold"
        >
          Explore services
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
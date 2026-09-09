import Link from "next/link"
import { ArrowLeft } from "lucide-react"

type AuthLayoutProps = {
  children: React.ReactNode
  title: string
  description: string
}

export default function AuthLayout({
  children,
  title,
  description,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm lg:grid-cols-2">
          <div className="hidden bg-zinc-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-zinc-950">
                  F
                </span>

                <span className="font-semibold">Fokomo</span>
              </Link>

              <div className="mt-24 max-w-md">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Car care, simplified
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight">
                  Your car gets cared for. Your time stays yours.
                </h2>

                <p className="mt-6 leading-7 text-zinc-400">
                  Manage your bookings, vehicles, service history and future
                  car-care needs from one place.
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-500">
              Fokomo — Car care without the wait.
            </p>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-950 lg:hidden"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>

            <div className="mx-auto max-w-md">
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
                {title}
              </h1>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {description}
              </p>

              <div className="mt-8">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
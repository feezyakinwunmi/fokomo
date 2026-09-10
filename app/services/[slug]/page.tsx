import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react"

import { getService, services } from "@/lib/data"

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-32">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            All services
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                <span className="text-xs font-medium text-yellow-400">
                  Fokomo Service
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {service.name}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                {service.description}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Duration
                  </p>
                  <div className="mt-1.5 flex items-center gap-2 text-sm text-gray-200">
                    <Clock size={15} />
                    {service.duration}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Pricing
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-yellow-400">
                    {service.priceLabel}
                  </p>
                </div>
              </div>

              {service.mobileAvailable && (
                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-gray-300">
                  <MapPin size={15} />
                  Mobile service available
                </div>
              )}

              <Link
                href={`/account/book?service=${service.slug}`}
                className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
              >
                Book this service
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                <span className="text-xs font-medium text-yellow-700">
                  What's Included
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                A service built around proper care.
              </h2>
            </div>

            <div className="divide-y divide-gray-100 border-y border-gray-100">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 py-4"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-100">
                    <Check size={14} className="text-yellow-600" />
                  </div>

                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-2xl bg-black px-6 py-12 text-center md:px-10 md:py-14">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400">
              <Sparkles size={22} className="text-black" />
            </div>

            <p className="mt-5 text-xs uppercase tracking-wider text-gray-500">
              Ready when you are
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Give your car the care it deserves.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400">
              Book ahead and get back to your day while we take care of the car.
            </p>

            <Link
              href={`/account/book?service=${service.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
            >
              Book {service.name}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
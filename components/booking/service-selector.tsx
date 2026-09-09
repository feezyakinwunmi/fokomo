"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  MapPin,
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
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Link
            href="/services"
            className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            All services
          </Link>

          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Fokomo
              </p>

              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                {service.name}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
                {service.description}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Duration
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <Clock size={16} />
                    {service.duration}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Pricing
                  </p>
                  <p className="mt-2 text-sm">{service.priceLabel}</p>
                </div>
              </div>

              {service.mobileAvailable && (
                <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-6 text-sm text-zinc-300">
                  <MapPin size={16} />
                  Mobile service available
                </div>
              )}

              <Link
                href={`/book?service=${service.slug}`}
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                Book this service
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                What's included
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                A service built around proper care.
              </h2>
            </div>

            <div className="divide-y divide-zinc-200 border-y border-zinc-200">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 py-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100">
                    <Check size={15} />
                  </div>

                  <span className="text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="rounded-[2rem] bg-zinc-950 px-7 py-12 text-center text-white md:px-12 md:py-16">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Ready when you are
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Give your car the care it deserves.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
              Book ahead and get back to your day while we take care of the
              car.
            </p>

            <Link
              href={`/book?service=${service.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950"
            >
              Book {service.name}
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"

import { locations } from "@/lib/data"

export default function LocationsPreview() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Where we operate
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Starting close to home.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-zinc-500">
              Fokomo is starting with communities where access to reliable
              car care can make a real difference. We plan to grow from
              community to community.
            </p>

            <Link
              href="/locations"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Explore locations
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations#${location.slug}`}
                className="group rounded-[2rem] border border-zinc-200 bg-white p-7 transition hover:border-zinc-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                    <MapPin size={20} />
                  </div>

                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                    Pilot location
                  </span>
                </div>

                <div className="mt-10 flex items-end justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {location.name}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      {location.area}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
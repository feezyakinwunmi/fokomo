import Link from "next/link"
import {
  ArrowRight,
  Check,
  MapPin,
  Plus,
  Clock,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react"

export const metadata = {
  title: "Locations | CarPadi",
  description:
    "Find CarPadi car-care services in your community.",
}

// Realistic locations based on the CarPadi business model
const locations = [
  {
    slug: "magodo",
    name: "Magodo",
    area: "Lagos State",
    description: "Our flagship location serving the Magodo community and surrounding estates with premium car care services.",
    services: ["Express Wash", "Premium Detailing", "Interior Care", "Basic Maintenance", "Mobile Service"],
    status: "Active",
    phone: "+234 800 123 4567",
    email: "magodo@carpadi.com",
    hours: "Mon-Sat: 7am - 6pm",
  },
  {
    slug: "lekki",
    name: "Lekki",
    area: "Lagos State",
    description: "Serving the Lekki community with convenient access to quality car care and mobile services.",
    services: ["Express Wash", "Premium Detailing", "Interior Care", "Mobile Service"],
    status: "Coming Soon",
    phone: "+234 800 123 4568",
    email: "lekki@carpadi.com",
    hours: "Mon-Sat: 8am - 6pm",
  },
]

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black pt-32">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <span className="text-xs font-medium text-yellow-400">
                Our Locations
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Car care,
              <span className="block text-yellow-500">
                closer to you.
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              We are starting with communities where customers need better
              access to reliable car care. As CarPadi grows, more locations
              will follow.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                <span className="text-xs font-medium text-yellow-700">
                  Current Locations
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Where CarPadi is available
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Serving communities across Lagos with premium car care
              </p>
            </div>

            <Link
              href="/locations/request"
              className="inline-flex items-center gap-2 rounded-lg border border-yellow-400 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-400/20"
            >
              <Plus size={15} />
              Request your area
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <div
                key={location.slug}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-md hover:-translate-y-0.5"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                    <MapPin size={20} className="text-yellow-600" />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                    location.status === "Active" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {location.status}
                  </span>
                </div>

                {/* Location Info */}
                <div className="mt-5">
                  <h3 className="text-xl font-bold">{location.name}</h3>
                  <p className="text-sm text-gray-500">{location.area}</p>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {location.description}
                  </p>
                </div>

                {/* Services */}
                <div className="mt-5 border-t border-gray-100 pt-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Services Available
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {location.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-lg bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-5 border-t border-gray-100 pt-5">
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={14} className="text-gray-400" />
                      <span>{location.hours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={14} className="text-gray-400" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={14} className="text-gray-400" />
                      <span>{location.email}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/book"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
                >
                  Book in {location.name}
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Location Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 sm:p-10">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-black/10" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full border border-black/10" />

            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-black">
                <Plus size={22} className="text-yellow-400" />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-black">
                  Don't see your estate?
                </h2>
                <p className="mt-1 text-sm text-black/80">
                  Tell us where you live. Your estate could be one of the next
                  communities we serve.
                </p>
              </div>

              <Link
                href="/locations/request"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-900"
              >
                Request your estate
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 rounded-xl bg-white p-6 border border-gray-200">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-yellow-500" />
              <span className="text-sm font-medium">Premium Service</span>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-yellow-500" />
              <span className="text-sm font-medium">Flexible Hours</span>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-yellow-500" />
              <span className="text-sm font-medium">Mobile Service</span>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-3">
              <Check size={18} className="text-yellow-500" />
              <span className="text-sm font-medium">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
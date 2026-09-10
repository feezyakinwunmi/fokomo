import Link from "next/link"
import { 
  ArrowRight, 
  Droplets, 
  Sparkles, 
  CarFront, 
  Wrench,
  MapPin,
  Clock,
  Shield,
  Star
} from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Wash",
    description: "Quick, thorough exterior cleaning that gets your car looking fresh in under 15 minutes.",
    price: "₦3,000",
    time: "15 min",
    href: "/services/wash"
  },
  {
    icon: Sparkles,
    title: "Detailing",
    description: "Deep cleaning and restoration that brings your vehicle back to showroom condition.",
    price: "₦15,000",
    time: "2-3 hrs",
    href: "/services/detailing"
  },
  {
    icon: CarFront,
    title: "Interior Care",
    description: "Meticulous cleaning of every surface inside your vehicle for a fresh, comfortable ride.",
    price: "₦8,000",
    time: "1-2 hrs",
    href: "/services/interior-care"
  },
  {
    icon: Wrench,
    title: "Basic Maintenance",
    description: "Expert assistance for tyres, batteries, jump-starts and everyday vehicle needs.",
    price: "From ₦5,000",
    time: "30 min",
    href: "/services/maintenance"
  }
]

const features = [
  {
    icon: MapPin,
    title: "Mobile Service",
    description: "We come to your location"
  },
  {
    icon: Clock,
    title: "Your Schedule",
    description: "Book when it works for you"
  },
  {
    icon: Shield,
    title: "Trusted Care",
    description: "Professional handling guaranteed"
  },
  {
    icon: Star,
    title: "Quality Service",
    description: "Satisfaction guaranteed"
  }
]

export default function ServiceHero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="max-w-3xl pt-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
            <span className="text-xs font-medium text-yellow-700">
              Our Services
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Car care that respects
            <span className="block text-yellow-500">your time.</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            From everyday washing to deeper detailing and convenient mobile
            services, Fokomo helps you take care of your car without making
            car care take over your day.
          </p>

          <Link
            href="/account/book"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
          >
            Book a service
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-100">
                    <Icon size={16} className="text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{feature.title}</h3>
                    <p className="text-xs text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Services Grid */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Our Services</h2>
            <Link
              href="/services/all"
              className="text-sm font-medium text-yellow-600 hover:text-yellow-700"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                        <Icon size={18} className="text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-xs text-gray-500">{service.description}</p>
                      </div>
                    </div>
                    <ArrowRight 
                      size={15} 
                      className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-gray-700" 
                    />
                  </div>
                  
                  <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-xs text-gray-500">Price</p>
                      <p className="text-sm font-semibold">{service.price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-medium">{service.time}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Mobile Service CTA */}
        <div className="mt-8 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 p-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="text-lg font-bold text-black">Need us to come to you?</h3>
              <p className="text-sm text-black/80">
                Request mobile service at your location
              </p>
            </div>
            <Link
              href="/services/mobile"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-900"
            >
              Explore mobile service
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
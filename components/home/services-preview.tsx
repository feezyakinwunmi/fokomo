import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  CarFront,
  CircleDot,
  Droplets,
  Sparkles,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Express Wash",
    description:
      "Quick and thorough clean under 15 minutes ",
    icon: Droplets,
    href: "/services/wash",
    color: "blue",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    number: "02",
    title: "Premium Detailing",
    description:
      "Exterior and interior deep cleaning that ensures comfort in every drive",
    icon: Sparkles,
    href: "/services/detailing",
    color: "purple",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    number: "03",
    title: "Interior Care",
    description:
      "Interior products that ensure you a comfortable ride everytime.",
    icon: CarFront,
    href: "/services/interior-care",
    color: "emerald",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    number: "04",
    title: "Vehicle Support",
    description:
      "Expert assistance for tyres, batteries, and all your basic vehicle maintenance needs.",
    icon: BatteryCharging,
    href: "/services/vehicle-support",
    color: "amber",
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

const quickLinks = [
  {
    title: "Mobile Service",
    description: "We come to you",
    icon: MapPin,
    href: "/services/mobile",
  },
  {
    title: "Express Booking",
    description: "Same-day available",
    icon: Clock,
    href: "/account/book",
  },
  {
    title: "Expert Advice",
    description: "Free consultation",
    icon: Phone,
    href: "/consultation",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <span className="text-xs font-medium text-yellow-700">
                Our Services
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Beyond the wash,
              <span className="block text-yellow-500">is various car maintenance services </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm text-gray-600">
              Your one shop stop for Functional car care, and exceptional customer experience
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            View all services
            <ArrowRight 
              size={15} 
              className="transition-transform group-hover:translate-x-1" 
            />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.number}
                href={service.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${service.bgColor}`}>
                    <Icon size={20} className={service.iconColor} strokeWidth={1.7} />
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {service.number}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-gray-600">
                    <span>Learn more</span>
                    <ArrowRight 
                      size={14} 
                      className="transition-transform group-hover:translate-x-1" 
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {quickLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                    <Icon size={18} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
                <ArrowRight 
                  size={15} 
                  className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-gray-700" 
                />
              </Link>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-medium text-gray-700">
              4.9/5 (2,000+ reviews)
            </span>
          </div>

          <div className="h-5 w-px bg-gray-300" />

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-gray-500" />
              <span className="text-xs text-gray-600">15-min wash</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CircleDot size={14} className="text-green-500" />
              <span className="text-xs text-gray-600">100% satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
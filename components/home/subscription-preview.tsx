import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  CarFront,
  CircleDot,
  Droplets,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Wash",
    description:
      "Reliable everyday cleaning to keep your vehicle fresh and road-ready.",
    icon: Droplets,
    href: "/services/wash",
  },
  {
    number: "02",
    title: "Detailing",
    description:
      "A deeper level of care for vehicles that need more than a regular wash.",
    icon: Sparkles,
    href: "/services/detailing",
  },
  {
    number: "03",
    title: "Interior care",
    description:
      "Detailed cleaning for the surfaces you spend the most time around.",
    icon: CarFront,
    href: "/services/interior-care",
  },
  {
    number: "04",
    title: "Vehicle support",
    description:
      "Everyday tyre, battery and basic vehicle assistance when you need it.",
    icon: BatteryCharging,
    href: "/services/vehicle-support",
  },
];

export default function ServicesPreview() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              More than just a wash.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              From routine car care to deeper detailing and everyday vehicle
              support, Fokomo gives you one place to take care of your car.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold"
          >
            View all services
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-200 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.number}
                href={service.href}
                className="group bg-white p-7 transition hover:bg-zinc-50 sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs text-zinc-400">
                    {service.number}
                  </span>
                </div>

                <div className="mt-12 flex items-end justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 transition group-hover:bg-zinc-950 group-hover:text-white">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link
            href="/services/mobile-car-care"
            className="group flex items-center justify-between rounded-3xl bg-zinc-950 p-7 text-white sm:p-8"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                Need us there?
              </p>

              <h3 className="mt-3 text-xl font-medium">
                Mobile car care
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                We bring selected services to your location.
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-1">
              <ArrowRight size={17} />
            </div>
          </Link>

          <Link
            href="/consultation"
            className="group flex items-center justify-between rounded-3xl border border-zinc-200 bg-white p-7 sm:p-8"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                Not sure?
              </p>

              <h3 className="mt-3 text-xl font-medium">
                Talk to a Fokomo expert
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Tell us what your vehicle needs.
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 transition-transform group-hover:translate-x-1">
              <ArrowRight size={17} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link"
import {
  ArrowRight,
  Clock3,
  ShieldCheck,
  Users,
  CarFront,
  MapPin,
  Award,
  Target,
  Mail,
  Phone,
} from "lucide-react"

export const metadata = {
  title: "About CarPadi",
  description:
    "Learn about CarPadi and our approach to making car care more convenient, trusted and customer-focused.",
}

const principles = [
  {
    icon: Clock3,
    title: "Your time matters",
    description:
      "Car care should not mean losing half a day sitting around. We design the experience around your schedule.",
    color: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Trust comes first",
    description:
      "Your car is personal. We are building our service around proper handling, transparency and accountability.",
    color: "emerald",
  },
  {
    icon: Users,
    title: "Built around people",
    description:
      "We listen to car owners, understand their frustrations and use those insights to improve the experience.",
    color: "purple",
  },
  {
    icon: CarFront,
    title: "Care, not just cleaning",
    description:
      "CarPadi is more than getting a car looking clean. It is about helping customers properly care for their vehicles.",
    color: "amber",
  },
]

const teamMembers = [
  {
    name: "Chidi Okonkwo",
    role: "Founder & CEO",
    bio: "Passionate about building customer-centric businesses that solve real problems in communities.",
    email: "chidi@carpadi.com",
    phone: "+234 800 123 4567",
  },
  {
    name: "Funke Adeyemi",
    role: "Head of Operations",
    bio: "Experienced in managing service operations and ensuring quality standards across all locations.",
    email: "funke@carpadi.com",
    phone: "+234 800 123 4568",
  },
  {
    name: "Tunde Balogun",
    role: "Lead Technician",
    bio: "Expert in vehicle care with over 10 years of experience in detailing and maintenance.",
    email: "tunde@carpadi.com",
    phone: "+234 800 123 4569",
  },
]

const values = [
  {
    icon: Target,
    title: "Quality",
    description: "We never compromise on the quality of service we provide."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do."
  },
  {
    icon: Users,
    title: "Community",
    description: "We're building a trusted brand that serves its community."
  }
]

const colorMap = {
  blue: "bg-blue-50 text-blue-600",
  emerald: "bg-emerald-50 text-emerald-600",
  purple: "bg-purple-50 text-purple-600",
  amber: "bg-amber-50 text-amber-600",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black pt-32">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <span className="text-xs font-medium text-yellow-400">
                About CarPadi
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Car care should
              <span className="block text-yellow-500">
                fit your life.
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              CarPadi is building a better way for people to care for their
              cars — starting with the communities around us.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                <span className="text-xs font-medium text-yellow-700">
                  Why We Exist
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                We noticed something simple.
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-6 text-gray-600">
              <p>
                Many communities have plenty of cars but limited access to
                reliable car-care services. And when people do find a place
                to wash or care for their car, the experience can involve
                long waits, uncertainty and inconvenience.
              </p>

              <p>
                Your car may need attention, but that does not mean your
                entire day should stop because of it.
              </p>

              <p>
                CarPadi was created around that idea: take proper care of the
                car while respecting the person who owns it.
              </p>

              <div className="rounded-xl bg-yellow-50 p-4 border border-yellow-200">
                <p className="text-sm font-medium text-yellow-900">
                  "The goal is for every customer to leave with two things: a
                  car that has been properly cared for and the feeling that
                  their time was not wasted."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <span className="text-xs font-medium text-yellow-700">
                What Guides Us
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              The CarPadi standard.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon
              const colorClasses = colorMap[item.color as keyof typeof colorMap]

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${colorClasses}`}>
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-base font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                <span className="text-xs font-medium text-yellow-700">
                  Our Team
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                The people behind CarPadi
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Meet the team dedicated to providing you with the best car care experience.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-gray-200 bg-gray-50/50 p-6 transition hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-xl font-bold text-black">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-yellow-600">{member.role}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {member.bio}
                </p>

                <div className="mt-4 space-y-1.5 border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Mail size={13} />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Phone size={13} />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="rounded-xl bg-white p-6 text-center border border-gray-200"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <Icon size={20} className="text-yellow-600" />
                  </div>
                  <h3 className="mt-4 font-semibold">{value.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                <span className="text-xs font-medium text-yellow-400">
                  Our Vision
                </span>
              </div>

              <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                A trusted car-care brand in every community.
              </h2>

              <p className="mt-3 max-w-xl text-sm text-gray-400">
                We are starting locally and intend to grow across Lagos and
                eventually across Nigeria — creating opportunities for
                people while making reliable car care easier to access.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/locations"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
              >
                See our locations
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-yellow-400/30 px-6 py-2.5 text-sm font-medium text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400/10"
              >
                Get in touch
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
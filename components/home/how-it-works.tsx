import Link from "next/link";
import { 
  ArrowRight, 
  CalendarCheck, 
  MapPin, 
  Sparkles, 
  Clock 
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book your service",
    description:
      "Choose what your vehicle needs and pick a time that works for you.",
    icon: CalendarCheck,
    color: "blue",
  },
  {
    number: "02",
    title: "Choose your experience",
    description:
      "Bring your vehicle to us or request a mobile service at your location.",
    icon: MapPin,
    color: "purple",
  },
  {
    number: "03",
    title: "We care for your car",
    description:
      "Our expert team handles your vehicle with professional care and attention.",
    icon: Sparkles,
    color: "emerald",
  },
  {
    number: "04",
    title: "Continue your day",
    description:
      "Spend your time doing what matters while we take care of the car.",
    icon: Clock,
    color: "amber",
  },
];

const colorMap = {
  blue: "bg-blue-50 text-blue-600 border-blue-200",
  purple: "bg-purple-50 text-purple-600 border-purple-200",
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-200",
  amber: "bg-amber-50 text-amber-600 border-amber-200",
};

export default function HowItWorks() {
  return (
    <section className="bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <span className="text-xs font-medium text-yellow-700">
                Simple Process
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Car care without
              <span className="block text-yellow-500">the unnecessary wait.</span>
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Fokomo is designed to make getting your car cared for feel
              simple, predictable and convenient.
            </p>

            <Link
              href="/how-it-works"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              See how Fokomo works
              <ArrowRight 
                size={15} 
                className="transition-transform group-hover:translate-x-1" 
              />
            </Link>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-2 h-[calc(100%-2rem)] w-0.5 bg-gray-200" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = colorMap[step.color as keyof typeof colorMap];

              return (
                <div
                  key={step.number}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white text-xs font-bold">
                    <span className="text-gray-700">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${colorClasses.split(' ')[0]}`}>
                        <Icon size={16} className={colorClasses.split(' ')[1]} />
                      </div>
                      <h3 className="text-base font-semibold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
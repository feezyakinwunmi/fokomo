import {
  Clock3,
  Eye,
  ShieldCheck,
  WalletCards,
  Star,
  ThumbsUp,
} from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "Save your time",
    description:
      "Book ahead or choose mobile service so your car doesn't control your schedule.",
    color: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Trust the process",
    description:
      "Professional staff, clear processes and careful vehicle handling from start to finish.",
    color: "emerald",
  },
  {
    icon: WalletCards,
    title: "Know what to expect",
    description:
      "Straightforward service options and transparent pricing without unnecessary surprises.",
    color: "amber",
  },
  {
    icon: Eye,
    title: "Stay informed",
    description:
      "We want customers to understand what's being done to their vehicle and why.",
    color: "purple",
  },
];

const colorMap = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function WhyFokomo() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
            <span className="text-xs font-medium text-yellow-400">
              Why Choose Us
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            We don't just care for cars.
            <span className="block text-yellow-500">
              We care about the experience.
            </span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            const colorClasses = colorMap[reason.color as keyof typeof colorMap];

            return (
              <div
                key={reason.title}
                className="group rounded-2xl border border-white/5 bg-white/5 p-6 transition hover:border-white/10 hover:bg-white/10"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${colorClasses}`}>
                  <Icon size={20} strokeWidth={1.6} />
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote & Trust Badges */}
        <div className="mt-12 flex flex-col gap-8 rounded-2xl border border-white/5 bg-white/5 p-8 lg:flex-row lg:items-center lg:justify-between">
          <blockquote className="max-w-3xl">
            <p className="text-lg font-medium leading-relaxed text-gray-300 lg:text-xl">
              "The goal is for every customer to leave with two things: a car
              that has been properly cared for and the feeling that their time
              wasn't wasted."
            </p>
          </blockquote>

          <div className="flex shrink-0 flex-col items-center gap-3 lg:items-end">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-300">4.9/5</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ThumbsUp size={14} />
              <span>Trusted by 2,000+ customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
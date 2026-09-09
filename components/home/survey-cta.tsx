import Link from "next/link";
import { ArrowRight, ClipboardList, Clock, Users, Star } from "lucide-react";

export default function SurveyCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-yellow-50/50 p-8 shadow-sm sm:p-10 lg:p-12">
        {/* Decorative Elements */}
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-yellow-200/30" />
        <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full border border-yellow-200/30" />
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-yellow-200/10" />
        
        {/* Small floating dots */}
        <div className="absolute right-20 top-8 h-1.5 w-1.5 rounded-full bg-yellow-300" />
        <div className="absolute right-32 top-16 h-1 w-1 rounded-full bg-yellow-300" />
        <div className="absolute right-12 bottom-12 h-1.5 w-1.5 rounded-full bg-yellow-300" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black">
                <ClipboardList size={19} strokeWidth={1.7} />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-yellow-600">
                Car Owner Survey
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Help us build the kind of
              <span className="block text-yellow-500">car care you actually want.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
              We're speaking with car owners to understand their experiences,
              frustrations and expectations around vehicle care.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Link
                href="/survey"
                className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
              >
                Take the quick survey
                <ArrowRight size={15} />
              </Link>
              
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock size={14} />
                <span>Takes only 3 minutes</span>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="flex shrink-0 flex-wrap gap-6 lg:flex-col lg:gap-3">
            <div className="flex items-center gap-3 rounded-xl bg-white/60 px-4 py-3 backdrop-blur-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-100">
                <Users size={16} className="text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-semibold">500+</p>
                <p className="text-xs text-gray-500">Responses so far</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/60 px-4 py-3 backdrop-blur-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-100">
                <Star size={16} className="text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-semibold">Share your voice</p>
                <p className="text-xs text-gray-500">Help shape our services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-yellow-200/30 pt-6">
          <p className="text-xs text-gray-500">
            <span className="font-medium text-gray-700">100% anonymous</span> • 
            Your feedback matters
          </p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-yellow-200 to-yellow-400"
                  style={{ opacity: 0.8 - i * 0.15 }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">Join 500+ others</span>
          </div>
        </div>
      </div>
    </section>
  );
}
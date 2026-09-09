import Link from "next/link";
import {
  ArrowRight,
  Home,
  MapPin,
  Smartphone,
  Calendar,
  Clock,
  Check,
} from "lucide-react";

export default function MobileService() {
  return (
    <section className="bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Left - Visual */}
            <div className="relative min-h-[380px] overflow-hidden bg-gradient-to-br from-black to-gray-900 lg:min-h-[480px]">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.08),transparent_25%)]" />
              
              {/* Decorative Dots */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full border border-white/10" />
                <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full border border-white/10" />
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
              </div>

              {/* Mobile Icon */}
              <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-black">
                <Smartphone size={18} />
              </div>

              {/* Location Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-yellow-400" />
                    <span className="text-xs text-gray-300">
                      Your location
                    </span>
                  </div>

                  <div className="mt-4 h-px bg-white/5" />

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-base font-medium text-white">
                        We come to you
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        Selected services at your home or office
                      </p>
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400">
                      <ArrowRight size={14} className="text-black" />
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      <span>Flexible dates</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} />
                      <span>Your schedule</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute right-6 top-20 hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Available in your area
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                <span className="text-xs font-medium text-yellow-700">
                  Mobile Service
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Your location.
                <span className="block text-yellow-500">Your schedule.</span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Don't want to drive to a car-care location? For selected
                services, we can bring the experience to your home, estate
                or workplace.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "Request selected services at your location",
                  "Choose a preferred date and time",
                  "Get updates about your booking",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-100">
                      <Check size={11} className="text-yellow-600" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/services/mobile-car-care"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Explore mobile service
                <ArrowRight 
                  size={15} 
                  className="transition-transform group-hover:translate-x-1" 
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
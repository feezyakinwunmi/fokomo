import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  Shield,
  Sparkles,
  Droplets,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-52">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-white" />
      
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-2 lg:px-8 lg:pb-20">
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <span className="text-xs font-medium text-yellow-300">
              Premium Car Wash & Detailing
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Give Your Car the
            <span className="block text-yellow-400">Royal Treatment</span>
          </h1>

          <p className="mt-4 text-base text-gray-300 sm:text-lg">
            Professional car wash and detailing services that leave your vehicle 
            looking showroom ready.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 text-sm font-semibold text-black transition hover:bg-yellow-300"
            >
              Book Now
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-lg border-2 border-yellow-400/50 px-6 text-sm font-semibold text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400/10"
            >
              View Services
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { icon: Droplets, label: "Express Wash", time: "15 min" },
              { icon: Sparkles, label: "Full Detail", time: "2-3 hrs" },
              { icon: Shield, label: "Ceramic Coat", time: "4-6 hrs" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                <item.icon className="mx-auto h-5 w-5 text-yellow-400" />
                <p className="mt-1.5 text-xs font-semibold text-white">{item.label}</p>
                <p className="text-[10px] text-gray-400">{item.time}</p>
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xs text-gray-300">4.9/5 (2,000+ reviews)</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-400/10 to-black/50 backdrop-blur-sm">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop')`,
              }}
            />
            
            {/* Water Spray Effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-4/5">
                <div className="absolute -top-6 left-1/4 flex gap-3">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-0.5 rounded-full bg-yellow-400/60 animate-pulse"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        transform: `rotate(${i * 10 - 20}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute -bottom-3 -left-3 rounded-xl bg-black/80 p-3 shadow-xl backdrop-blur-lg">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400/20">
                <Check className="h-4 w-4 text-yellow-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Eco-Friendly</p>
                <p className="text-[10px] text-gray-400">Biodegradable soap</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-6 rounded-xl bg-black/80 p-3 shadow-xl backdrop-blur-lg">
            <div className="flex items-center gap-2.5">
              <Clock3 className="h-4 w-4 text-yellow-400" />
              <div>
                <p className="text-xs font-semibold text-white">Fast Service</p>
                <p className="text-[10px] text-gray-400">In & out in 15 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Company: [
    { name: "About Fokomo", href: "/about" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ],
  Services: [
    { name: "Car Wash", href: "/services/wash" },
    { name: "Detailing", href: "/services/detailing" },
    { name: "Interior Care", href: "/services/interior-care" },
    { name: "Mobile Car Care", href: "/services/mobile-car-care" },
  ],
  Support: [
    { name: "Book a Service", href: "/book" },
    { name: "Consultation", href: "/consultation" },
    { name: "Survey", href: "/survey" },
    { name: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-20 items-center justify-center rounded-xl bg-transparent text-black">
                <Image
                  src="/logo.png"
                  alt="Fokomo Logo"
                  width={38}
                  height={38}
                  className="h-10 w-20"
                />
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-zinc-400">
              Professional car care designed around your vehicle and your
              time. Wherever you find Fokomo, you should know you can trust
              us with both.
            </p>

            <div className="mt-8 flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
              />

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
              >
                <MessageCircle size={17} />
              </a>

              <a
                href="tel:+2340000000000"
                aria-label="Call Fokomo"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
              >
                <Phone size={17} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {title}
              </p>

              <ul className="mt-6 space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-300 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-9">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-xl font-medium">
                Ready to take care of your car?
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Book a service and get back to your day.
              </p>
            </div>

            <Link
              href="/book"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Book a service
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-7">

          <div className="flex flex-col gap-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Fokomo. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="/privacy" className="transition hover:text-white">
                Privacy
              </Link>

              <Link href="/terms" className="transition hover:text-white">
                Terms
              </Link>
            </div>
          </div>

          {/* Sponsor */}
          <div className="mt-7 flex justify-center">
            <p className="text-xs text-zinc-600">
              Sponsored by{" "}
              <a
                href="https://phantomiretechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-400 transition hover:text-white"
              >
                Phantomire Technologies
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

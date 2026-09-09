"use client";

import Link from "next/link";
import {
  ArrowRight,
  X,
  Phone,
  MapPin,
  ClipboardList,
} from "lucide-react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const navigation = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "How it works",
    href: "/how-it-works",
  },
  {
    name: "About Fokomo",
    href: "/about",
  },
  {
    name: "Locations",
    href: "/locations",
  },
  {
    name: "Survey",
    href: "/survey",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function MobileNav({
  open,
  onClose,
}: MobileNavProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-white lg:hidden">
      <div className="flex h-full flex-col">

        {/* Top */}
        <div className="flex h-20 items-center justify-between border-b border-zinc-200 px-5">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
              <span className="text-sm font-bold">F</span>
            </div>

            <div className="leading-none">
              <span className="block text-[17px] font-semibold">
                Fokomo
              </span>

              <span className="mt-1 block text-[8px] uppercase tracking-[0.25em] text-zinc-400">
                Car Care
              </span>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200"
          >
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-5 py-8">
          <nav className="flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between border-b border-zinc-100 py-5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-zinc-400">
                    0{index + 1}
                  </span>

                  <span className="text-2xl font-medium tracking-tight">
                    {item.name}
                  </span>
                </div>

                <ArrowRight
                  size={19}
                  className="text-zinc-400 transition-transform group-hover:translate-x-1"
                />
              </Link>
            ))}
          </nav>

          {/* Quick actions */}
          <div className="mt-10 grid grid-cols-2 gap-3">
            <Link
              href="/locations"
              onClick={onClose}
              className="rounded-2xl bg-zinc-100 p-5"
            >
              <MapPin size={19} strokeWidth={1.7} />

              <span className="mt-8 block text-sm font-medium">
                Our locations
              </span>
            </Link>

            <Link
              href="/survey"
              onClick={onClose}
              className="rounded-2xl bg-zinc-100 p-5"
            >
              <ClipboardList size={19} strokeWidth={1.7} />

              <span className="mt-8 block text-sm font-medium">
                Take our survey
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-200 p-5">
          <Link
            href="/book"
            onClick={onClose}
            className="flex h-14 items-center justify-center gap-2 rounded-full bg-black text-sm font-medium text-white"
          >
            Book a service
            <ArrowRight size={16} />
          </Link>

          <a
            href="tel:+2340000000000"
            className="mt-3 flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 text-sm font-medium"
          >
            <Phone size={16} />
            Contact Fokomo
          </a>
        </div>
      </div>
    </div>
  );
}
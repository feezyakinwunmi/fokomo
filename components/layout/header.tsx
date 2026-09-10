"use client";

import Link from "next/link";
import { Menu, ArrowRight, Phone, User, LogOut, Settings, Calendar, Car } from "lucide-react";
import { useState } from "react";
import MobileNav from "./mobile-nav";
  import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "How it works", href: "/how-it-works" },
  { name: "About", href: "/about" },
  { name: "Locations", href: "/locations" },

];

// Temporary user state - will be replaced with auth later
const DEMO_USER = {
  isLoggedIn: false, // Set to true to test logged-in state
  name: "John Doe",
  email: "john@example.com"
};

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(DEMO_USER.isLoggedIn);
  const [showDropdown, setShowDropdown] = useState(false);


  if (pathname?.startsWith('/account') || pathname?.startsWith('/book')) {
    return null;
  }
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between rounded-2xl border border-black/10 bg-white/90 px-4 shadow-sm backdrop-blur-xl sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <div className="flex h-10 w-20 items-center justify-center rounded-xl bg-transparent text-black">
               <Image
                  src="/logo2.png"
                  alt="Fokomo Logo"
                  width={38}
                  height={38}
                  className="h-10 w-20"
                />
              </div>

              {/* <div className="leading-none">
                <span className="block text-[17px] font-semibold tracking-tight">
                  Fokomo
                </span>
                <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.25em] text-zinc-400">
                  Car Care
                </span>
              </div> */}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-black"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Phone */}
              <a
                href="/contact"
                className="hidden h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 sm:flex"
              >
                <Phone size={15} strokeWidth={1.8} />
                <span>Contact</span>
              </a>

              {/* Auth Section */}
              {isLoggedIn ? (
                // Logged In - Profile Dropdown
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex h-10 items-center gap-2 rounded-full bg-black px-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                      {DEMO_USER.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="hidden sm:inline">{DEMO_USER.name.split(' ')[0]}</span>
                  </button>

                  {/* Dropdown Menu */}
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-56 rounded-xl border border-zinc-200 bg-white py-2 shadow-lg">
                      <div className="border-b border-zinc-100 px-4 py-3">
                        <p className="text-sm font-semibold text-zinc-900">{DEMO_USER.name}</p>
                        <p className="text-xs text-zinc-500">{DEMO_USER.email}</p>
                      </div>
                      
                      <Link
                        href="/account"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-50"
                        onClick={() => setShowDropdown(false)}
                      >
                        <User size={16} />
                        My Account
                      </Link>
                      
                      <Link
                        href="/bookings"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-50"
                        onClick={() => setShowDropdown(false)}
                      >
                        <Calendar size={16} />
                        My Bookings
                      </Link>
                      
                      <Link
                        href="/vehicles"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-50"
                        onClick={() => setShowDropdown(false)}
                      >
                        <Car size={16} />
                        My Vehicles
                      </Link>
                      
                      <Link
                        href="/settings"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-50"
                        onClick={() => setShowDropdown(false)}
                      >
                        <Settings size={16} />
                        Settings
                      </Link>
                      
                      <div className="border-t border-zinc-100">
                        <button
                          type="button"
                          onClick={() => {
                            setIsLoggedIn(false);
                            setShowDropdown(false);
                          }}
                          className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
                        >
                          <LogOut size={16} />
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Logged Out - Signup & Login
                <div className="flex items-center gap-2">
                  <Link
                    href="/auth/login"
                    className="hidden h-10 items-center rounded-full px-4 text-sm font-medium text-zinc-600 transition hover:text-black sm:flex"
                  >
                    Sign in
                  </Link>
                  
                  <Link
                    href="/auth/signup"
                    className="flex h-10 items-center gap-2 rounded-full bg-yellow-400 px-5 text-sm font-medium text-black transition hover:bg-yellow-300"
                  >
                    <User size={15} />
                    <span className="hidden sm:inline">Sign up</span>
                    <span className="sm:hidden">Sign up</span>
                  </Link>
                </div>
              )}

              {/* Mobile menu */}
              <button
                type="button"
                aria-label="Open navigation"
                onClick={() => setMobileOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 transition hover:bg-zinc-100 lg:hidden"
              >
                <Menu size={19} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
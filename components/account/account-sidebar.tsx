"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  Car,
  CalendarDays,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  Home,
  ChevronRight,
} from "lucide-react"

const navigation = [
  {
    name: "Overview",
    href: "/account",
    icon: LayoutDashboard,
  },
  {
    name: "Bookings",
    href: "/account/bookings",
    icon: CalendarDays,
  },
  {
    name: "My vehicles",
    href: "/account/vehicles",
    icon: Car,
  },
  {
    name: "Profile",
    href: "/account/profile",
    icon: User,
  },
  {
    name: "Notifications",
    href: "/account/notifications",
    icon: Bell,
  },
  {
    name: "Settings",
    href: "/account/settings",
    icon: Settings,
  },
]

export default function AccountSidebar() {
  const pathname = usePathname()

  return (
    <aside className="border-b border-gray-200 bg-white lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r lg:flex lg:flex-col">
      {/* Logo */}
      <div className="border-b border-gray-100 p-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-sm font-bold text-black">
            F
          </div>
          <div>
            <span className="block text-[15px] font-semibold tracking-tight text-gray-900">
              Fokomo
            </span>
            <span className="block text-[8px] font-medium uppercase tracking-[0.25em] text-gray-400">
              Account
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-0.5 p-4">
        {navigation.map((item) => {
          const Icon = item.icon
          const active =
            pathname === item.href ||
            (item.href !== "/account" && pathname.startsWith(item.href))

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "bg-yellow-400 text-black shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`h-4 w-4 ${
                  active ? "text-black" : "text-gray-400 group-hover:text-gray-600"
                }`} />
                {item.name}
              </div>
              {active && (
                <ChevronRight size={14} className="text-black/60" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-gray-100 p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <Home className="h-4 w-4" />
          Back to website
        </Link>
        
        <button
          type="button"
          className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
          onClick={() => {
            // Handle logout
            console.log("Logging out...")
          }}
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  )
}
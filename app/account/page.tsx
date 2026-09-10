import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  Car,
  Clock3,
  Plus,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react"
import AccountSidebar from "@/components/account/account-sidebar"

// Mock user data
const user = {
  name: "Femi",
  email: "femi@gmail.com",
  phone: "+234 800 123 4567",
  location: "Magodo Estate, Lagos",
  memberSince: "January 2026",
}

const bookings = [
  {
    id: "BK-00124",
    service: "Express Wash",
    vehicle: "Toyota Camry 2020",
    date: "18 September 2026",
    time: "10:00 AM",
    status: "Pending confirmation",
    statusColor: "yellow",
    price: "₦3,000",
  },
  {
    id: "BK-00123",
    service: "Premium Detailing",
    vehicle: "Toyota Camry 2020",
    date: "05 September 2026",
    time: "2:00 PM",
    status: "Completed",
    statusColor: "green",
    price: "₦15,000",
  },
]

const stats = [
  {
    icon: CalendarDays,
    label: "Total Bookings",
    value: "12",
    change: "+3 this month",
  },
  {
    icon: Car,
    label: "Vehicles",
    value: "2",
    change: "Toyota Camry, Honda CR-V",
  },
  {
    icon: Clock3,
    label: "Upcoming",
    value: "1",
    change: "Next: 18 Sep 2026",
  },
]

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-gray-50 lg:flex">

      <div className="min-w-0 flex-1">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-12">
          {/* Header */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-black">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    Welcome back, {user.name.split(' ')[0]}
                  </h1>
                  <p className="text-sm text-gray-500">
                    Member since {user.memberSince}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/account/book"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
            >
              <Plus size={16} />
              Book a service
            </Link>
          </div>

          {/* User Info Cards */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-100">
                <Mail size={16} className="text-yellow-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-900">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-100">
                <Phone size={16} className="text-yellow-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm font-medium text-gray-900">{user.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-100">
                <MapPin size={16} className="text-yellow-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm font-medium text-gray-900">{user.location}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                      <Icon size={18} className="text-gray-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">{stat.label}</p>
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </div>
              )
            })}
          </div>

          {/* Bookings Section */}
          <section className="mt-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Your activity</p>
                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Recent bookings
                </h2>
              </div>

              <Link
                href="/account/bookings"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-yellow-600 hover:text-yellow-700"
              >
                View all
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="mt-5 space-y-4">
              {bookings.map((booking) => {
                const statusIcons = {
                  green: <CheckCircle size={14} className="text-green-500" />,
                  yellow: <Clock size={14} className="text-yellow-500" />,
                  red: <XCircle size={14} className="text-red-500" />,
                }
                const statusColors = {
                  green: "bg-green-50 text-green-700 border-green-200",
                  yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
                  red: "bg-red-50 text-red-700 border-red-200",
                }

                return (
                  <div
                    key={booking.id}
                    className="rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-sm"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-semibold text-gray-900">
                            {booking.service}
                          </h3>
                          <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${statusColors[booking.statusColor as keyof typeof statusColors]}`}>
                            {statusIcons[booking.statusColor as keyof typeof statusIcons]}
                            {booking.status}
                          </span>
                        </div>

                        <p className="mt-1.5 text-sm text-gray-500">
                          {booking.vehicle}
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <span>{booking.date}</span>
                          <span className="h-1 w-1 rounded-full bg-gray-300" />
                          <span>{booking.time}</span>
                          <span className="h-1 w-1 rounded-full bg-gray-300" />
                          <span className="font-medium text-gray-900">{booking.price}</span>
                        </div>
                      </div>

                      <Link
                        href={`/account/bookings/${booking.id}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-600"
                      >
                        View details
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )
              })}

              {bookings.length === 0 && (
                <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
                  <CalendarDays size={40} className="mx-auto text-gray-300" />
                  <h3 className="mt-4 font-semibold text-gray-900">No bookings yet</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Book your first service and keep your car in top condition.
                  </p>
                  <Link
                    href="/book"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
                  >
                    <Plus size={15} />
                    Book a service
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Quick Actions */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/account/vehicles"
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                  <Car size={18} className="text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Manage Vehicles</p>
                  <p className="text-xs text-gray-500">Add or edit your vehicles</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-gray-400" />
            </Link>
            
            <Link
              href="/account/settings"
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                  <User size={18} className="text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Account Settings</p>
                  <p className="text-xs text-gray-500">Update your profile</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
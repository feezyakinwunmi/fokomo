"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  MoreHorizontal,
  XCircle,
  Search,
  Filter,
  ChevronDown,
} from "lucide-react"

const bookings = [
  {
    id: "BK-2026-001",
    service: "Express Wash",
    vehicle: "Toyota Camry",
    vehicleType: "Saloon",
    location: "Magodo Estate, Lagos",
    date: "September 12, 2026",
    time: "10:00 AM",
    status: "upcoming",
    price: "₦3,000",
  },
  {
    id: "BK-2026-002",
    service: "Interior Care",
    vehicle: "Toyota Camry",
    vehicleType: "Saloon",
    location: "Magodo Estate, Lagos",
    date: "August 29, 2026",
    time: "11:00 AM",
    status: "completed",
    price: "₦8,000",
  },
  {
    id: "BK-2026-003",
    service: "Mobile Service",
    vehicle: "Toyota Camry",
    vehicleType: "Saloon",
    location: "Magodo Estate, Lagos",
    date: "August 15, 2026",
    time: "2:00 PM",
    status: "completed",
    price: "₦5,000",
  },
  {
    id: "BK-2026-004",
    service: "Premium Detailing",
    vehicle: "Honda Accord",
    vehicleType: "Saloon",
    location: "Magodo Estate, Lagos",
    date: "August 8, 2026",
    time: "9:00 AM",
    status: "cancelled",
    price: "₦15,000",
  },
]

const filters = [
  { label: "All bookings", value: "all", count: 4 },
  { label: "Upcoming", value: "upcoming", count: 1 },
  { label: "Completed", value: "completed", count: 2 },
  { label: "Cancelled", value: "cancelled", count: 1 },
]

function StatusBadge({ status }: { status: string }) {
  if (status === "upcoming") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700 border border-yellow-200">
        <Clock3 size={12} />
        Upcoming
      </span>
    )
  }

  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 border border-green-200">
        <CheckCircle2 size={12} />
        Completed
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 border border-red-200">
      <XCircle size={12} />
      Cancelled
    </span>
  )
}

export default function AccountBookingsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBookings = bookings.filter(booking => {
    // Filter by status
    if (activeFilter !== "all" && booking.status !== activeFilter) {
      return false
    }
    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        booking.service.toLowerCase().includes(query) ||
        booking.vehicle.toLowerCase().includes(query) ||
        booking.id.toLowerCase().includes(query)
      )
    }
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Account
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
              My bookings
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              View and manage your car care bookings.
            </p>
          </div>

          <Link
            href="/account/book"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
          >
            Book a service
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bookings..."
              className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-1 rounded-xl border border-gray-200 bg-white p-1 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition ${
                  activeFilter === filter.value
                    ? "bg-yellow-400 text-black"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {filter.label}
                <span className={`ml-1.5 rounded-full px-2 py-0.5 text-xs ${
                  activeFilter === filter.value
                    ? "bg-black/10 text-black"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <p>{filteredBookings.length} booking{filteredBookings.length !== 1 ? 's' : ''} found</p>
        </div>

        {/* Booking list */}
        <div className="mt-4 space-y-4">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <Link
                key={booking.id}
                href={`/account/bookings/${booking.id}`}
                className="group block rounded-xl border border-gray-200 bg-white p-5 transition hover:border-yellow-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  {/* Main info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-100">
                        <CarFront size={20} className="text-yellow-600" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-base font-semibold text-gray-900">
                            {booking.service}
                          </h2>

                          <StatusBadge status={booking.status} />
                        </div>

                        <p className="mt-0.5 text-xs text-gray-400">
                          {booking.id}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CalendarDays size={14} className="shrink-0 text-gray-400" />
                        {booking.date}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock3 size={14} className="shrink-0 text-gray-400" />
                        {booking.time}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} className="shrink-0 text-gray-400" />
                        {booking.location}
                      </div>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="flex items-center justify-between gap-6 border-t border-gray-100 pt-4 lg:border-t-0 lg:pt-0">
                    <div>
                      <p className="text-xs text-gray-400">
                        {booking.vehicleType}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-gray-900">
                        {booking.vehicle}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-yellow-600">
                        {booking.price}
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            // Empty State
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <CalendarDays size={28} className="text-gray-400" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                No bookings found
              </h3>

              <p className="mx-auto mt-1 max-w-md text-sm text-gray-500">
                {searchQuery 
                  ? "Try adjusting your search or filters to find what you're looking for."
                  : "You haven't made any bookings yet. Book your first service today!"}
              </p>

              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveFilter("all")
                  }}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-yellow-600 hover:text-yellow-700"
                >
                  Clear filters
                  <XCircle size={14} />
                </button>
              ) : (
                <Link
                  href="/book"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
                >
                  Book a service
                  <ArrowRight size={15} />
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Quick Stats */}
        {filteredBookings.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs text-gray-500">Total spent</p>
              <p className="mt-1 text-xl font-bold text-gray-900">₦31,000</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs text-gray-500">Most used service</p>
              <p className="mt-1 text-xl font-bold text-gray-900">Express Wash</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs text-gray-500">Favorite location</p>
              <p className="mt-1 text-xl font-bold text-gray-900">Magodo Estate</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
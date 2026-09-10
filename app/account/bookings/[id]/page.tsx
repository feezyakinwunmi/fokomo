import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CarFront,
  Check,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  XCircle,
  User,
  MessageSquare,
  CreditCard,
  FileText,
} from "lucide-react"
import { notFound } from "next/navigation"

const bookings = {
  "BK-2026-001": {
    id: "BK-2026-001",
    service: "Express Wash",
    description:
      "A professional exterior wash designed to keep your vehicle clean, fresh and properly cared for.",
    vehicle: "Toyota Camry",
    vehicleType: "Saloon",
    plateNumber: "LAG-123-AB",
    location: "Magodo Estate, Lagos",
    address: "123 Magodo Road, Magodo Estate",
    date: "September 12, 2026",
    time: "10:00 AM",
    price: "₦3,000",
    status: "upcoming",
    notes: "Please call when the team is close. Car has a scratch on the passenger side.",
    createdAt: "September 9, 2026",
    phone: "+234 800 123 4567",
  },

  "BK-2026-002": {
    id: "BK-2026-002",
    service: "Interior Care",
    description:
      "A detailed interior cleaning service focused on keeping your vehicle's cabin clean and comfortable.",
    vehicle: "Toyota Camry",
    vehicleType: "Saloon",
    plateNumber: "LAG-123-AB",
    location: "Magodo Estate, Lagos",
    address: "123 Magodo Road, Magodo Estate",
    date: "August 29, 2026",
    time: "11:00 AM",
    price: "₦8,000",
    status: "completed",
    notes: "Regular interior cleaning. Customer requested extra attention to leather seats.",
    createdAt: "August 27, 2026",
    phone: "+234 800 123 4567",
  },

  "BK-2026-003": {
    id: "BK-2026-003",
    service: "Mobile Service",
    description:
      "Convenient car care brought closer to you, depending on service availability and location.",
    vehicle: "Toyota Camry",
    vehicleType: "Saloon",
    plateNumber: "LAG-123-AB",
    location: "Magodo Estate, Lagos",
    address: "123 Magodo Road, Magodo Estate",
    date: "August 15, 2026",
    time: "2:00 PM",
    price: "₦5,000",
    status: "completed",
    notes: "Mobile service request. Customer was very satisfied with the service.",
    createdAt: "August 14, 2026",
    phone: "+234 800 123 4567",
  },

  "BK-2026-004": {
    id: "BK-2026-004",
    service: "Premium Detailing",
    description:
      "A deeper vehicle care service designed to refresh the interior and exterior of your vehicle.",
    vehicle: "Honda Accord",
    vehicleType: "Saloon",
    plateNumber: "LAG-456-CD",
    location: "Magodo Estate, Lagos",
    address: "123 Magodo Road, Magodo Estate",
    date: "August 8, 2026",
    time: "9:00 AM",
    price: "₦15,000",
    status: "cancelled",
    notes: "Booking cancelled by customer due to schedule conflict.",
    createdAt: "August 6, 2026",
    phone: "+234 800 123 4567",
  },
}

type Booking = (typeof bookings)[keyof typeof bookings]

function getStatusContent(status: Booking["status"]) {
  if (status === "completed") {
    return {
      label: "Completed",
      description: "This service has been completed successfully.",
      icon: CheckCircle2,
      classes: "bg-green-50 text-green-700 border-green-200",
    }
  }

  if (status === "cancelled") {
    return {
      label: "Cancelled",
      description: "This booking has been cancelled.",
      icon: XCircle,
      classes: "bg-red-50 text-red-700 border-red-200",
    }
  }

  return {
    label: "Upcoming",
    description: "Your booking is scheduled and awaiting service.",
    icon: Clock3,
    classes: "bg-yellow-50 text-yellow-700 border-yellow-200",
  }
}

function BookingTimeline({ booking }: { booking: Booking }) {
  const isCancelled = booking.status === "cancelled"
  const isCompleted = booking.status === "completed"

  const steps = [
    {
      title: "Booking requested",
      description: `Request submitted on ${booking.createdAt}.`,
      complete: true,
    },
    {
      title: "Booking confirmed",
      description: isCancelled
        ? "This booking was cancelled before service."
        : isCompleted
          ? "The booking was confirmed by the Fokomo team."
          : "Your booking is scheduled for the selected date and time.",
      complete: !isCancelled,
    },
    {
      title: "Service in progress",
      description: isCompleted
        ? "The vehicle service was carried out successfully."
        : "This step will be updated when your service begins.",
      complete: isCompleted,
    },
    {
      title: "Service completed",
      description: isCompleted
        ? "Your vehicle service has been completed. We hope you're satisfied!"
        : "Your booking will be marked complete after service.",
      complete: isCompleted,
    },
  ]

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          Booking progress
        </p>

        <h2 className="mt-1 text-lg font-semibold text-gray-900">
          Service timeline
        </h2>
      </div>

      <div className="mt-7">
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex gap-4">
            {index < steps.length - 1 && (
              <div
                className={`absolute left-[15px] top-8 h-[calc(100%-8px)] w-px ${
                  step.complete ? "bg-yellow-400" : "bg-gray-200"
                }`}
              />
            )}

            <div
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                step.complete
                  ? "border-yellow-400 bg-yellow-400 text-black"
                  : "border-gray-200 bg-white text-gray-300"
              }`}
            >
              {step.complete ? (
                <Check size={15} strokeWidth={2.5} />
              ) : (
                <span className="h-2 w-2 rounded-full bg-gray-200" />
              )}
            </div>

            <div className={`pb-7 ${index === steps.length - 1 ? "pb-0" : ""}`}>
              <p
                className={`text-sm font-semibold ${
                  step.complete ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {step.title}
              </p>

              <p className="mt-1 text-sm leading-5 text-gray-500">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays
  label: string
  value: string
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-100">
        <Icon size={16} className="text-yellow-600" />
      </div>

      <div className="min-w-0">
        <p className="text-xs text-gray-400">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-gray-900">{value}</p>
      </div>
    </div>
  )
}

export default async function BookingDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const booking = bookings[id as keyof typeof bookings]

  if (!booking) {
    notFound()
  }

  const status = getStatusContent(booking.status)
  const StatusIcon = status.icon

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        {/* Back */}
        <Link
          href="/account/bookings"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          <ArrowLeft size={15} />
          Back to bookings
        </Link>

        {/* Header */}
        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Booking {booking.id}
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
              {booking.service}
            </h1>

            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {booking.description}
            </p>
          </div>

          <div
            className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${status.classes}`}
          >
            <StatusIcon size={13} />
            {status.label}
          </div>
        </div>

        {/* Main grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            {/* Booking information */}
            <section className="rounded-xl border border-gray-200 bg-white p-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Booking details
                </p>

                <h2 className="mt-1 text-lg font-semibold text-gray-900">
                  Service information
                </h2>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <DetailRow
                  icon={CalendarDays}
                  label="Date"
                  value={booking.date}
                />

                <DetailRow
                  icon={Clock3}
                  label="Time"
                  value={booking.time}
                />

                <DetailRow
                  icon={MapPin}
                  label="Location"
                  value={booking.location}
                />

                <DetailRow
                  icon={CarFront}
                  label="Vehicle"
                  value={`${booking.vehicle} · ${booking.vehicleType}`}
                />
              </div>

              <div className="mt-6 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2">
                  <FileText size={14} className="text-gray-400" />
                  <p className="text-xs text-gray-400">Service notes</p>
                </div>
                <div className="mt-2 rounded-lg bg-gray-50 p-4">
                  <p className="text-sm leading-6 text-gray-600">
                    {booking.notes}
                  </p>
                </div>
              </div>
            </section>

            {/* Timeline */}
            <BookingTimeline booking={booking} />

            {/* Location */}
            <section className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-100">
                  <MapPin size={18} className="text-yellow-600" />
                </div>

                <div>
                  <h2 className="text-base font-semibold text-gray-900">
                    Service location
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {booking.location}
                  </p>

                  <p className="mt-0.5 text-sm text-gray-600">
                    {booking.address}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Summary */}
            <section className="rounded-xl bg-black p-6 text-white">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Booking summary
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                {booking.service}
              </h2>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm text-gray-400">Vehicle</span>
                  <span className="text-right text-sm text-gray-200">
                    {booking.vehicle}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm text-gray-400">Date</span>
                  <span className="text-right text-sm text-gray-200">
                    {booking.date}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm text-gray-400">Time</span>
                  <span className="text-right text-sm text-gray-200">
                    {booking.time}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 border-t border-white/10 pt-4">
                  <span className="text-sm text-gray-400">Price</span>
                  <span className="text-right text-lg font-bold text-yellow-400">
                    {booking.price}
                  </span>
                </div>
              </div>

              {booking.status === "upcoming" && (
                <div className="mt-6 space-y-3">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
                  >
                    Need help?
                    <ArrowRight size={15} />
                  </Link>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    <XCircle size={15} />
                    Cancel booking
                  </button>
                </div>
              )}
            </section>

            {/* Vehicle */}
            <section className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                  <CarFront size={18} className="text-yellow-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Vehicle</p>
                  <h2 className="text-sm font-semibold text-gray-900">
                    {booking.vehicle}
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-gray-500">Type</span>
                  <span className="text-sm font-medium text-gray-900">
                    {booking.vehicleType}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-sm text-gray-500">Plate number</span>
                  <span className="text-sm font-medium text-gray-900">
                    {booking.plateNumber}
                  </span>
                </div>
              </div>

              <Link
                href="/account/vehicles"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-yellow-600 hover:text-yellow-700"
              >
                Manage vehicles
                <ArrowRight size={14} />
              </Link>
            </section>

            {/* Contact */}
            <section className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-100">
                  <Phone size={18} className="text-yellow-600" />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-gray-900">
                    Contact support
                  </h2>

                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    {booking.phone}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-yellow-600 hover:text-yellow-700"
                  >
                    Get help
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-100">
                  <CreditCard size={18} className="text-yellow-600" />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-gray-900">
                    Payment
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {booking.status === "upcoming" ? "Pay on arrival" : "Paid"}
                  </p>

                  <p className="mt-0.5 text-xs text-gray-400">
                    {booking.status === "upcoming" ? "Cash or transfer accepted" : "Payment completed"}
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ArrowLeft,
  Bell,
  BellRing,
  CalendarDays,
  Check,
  CheckCheck,
  Clock3,
  Info,
  CarFront,
  X,
} from "lucide-react"

type NotificationType =
  | "booking"
  | "reminder"
  | "service"
  | "system"

type Notification = {
  id: number
  type: NotificationType
  title: string
  description: string
  time: string
  unread: boolean
  href?: string
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "booking",
    title: "Booking request received",
    description:
      "Your Car Wash booking request has been received. Our team will confirm the availability shortly.",
    time: "Today, 9:42 AM",
    unread: true,
    href: "/account/bookings/FK-2026-001",
  },
  {
    id: 2,
    type: "reminder",
    title: "Upcoming service reminder",
    description:
      "You have a Car Wash service scheduled for September 12, 2026 at 10:00 AM.",
    time: "Yesterday, 4:20 PM",
    unread: true,
    href: "/account/bookings/FK-2026-001",
  },
  {
    id: 3,
    type: "service",
    title: "Time for your next service?",
    description:
      "Regular car care helps keep your vehicle looking better and makes it easier to spot issues early.",
    time: "September 5, 2026",
    unread: false,
    href: "/book",
  },
  {
    id: 4,
    type: "booking",
    title: "Service completed",
    description:
      "Your Interior Care service has been marked as completed.",
    time: "August 29, 2026",
    unread: false,
    href: "/account/bookings/FK-2026-002",
  },
  {
    id: 5,
    type: "system",
    title: "Welcome to your account",
    description:
      "Your account is ready. Add your vehicles and manage your bookings from one place.",
    time: "September 1, 2026",
    unread: false,
  },
]

const notificationStyles: Record<
  NotificationType,
  {
    icon: typeof Bell
    className: string
  }
> = {
  booking: {
    icon: CalendarDays,
    className: "bg-blue-50 text-blue-600",
  },
  reminder: {
    icon: Clock3,
    className: "bg-amber-50 text-amber-600",
  },
  service: {
    icon: CarFront,
    className: "bg-emerald-50 text-emerald-600",
  },
  system: {
    icon: Info,
    className: "bg-gray-100 text-gray-600",
  },
}

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications)

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length

  function markAsRead(id: number) {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    )
  }

  function markAllAsRead() {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      }))
    )
  }

  function removeNotification(id: number) {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id)
    )
  }

  return (
    <div className="min-h-screen bg-gray-50/70">
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/account"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to account
        </Link>

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
              <BellRing className="h-5 w-5" />
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Notifications
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Stay up to date with your bookings, service reminders and
              important account updates.
            </p>
          </div>

          {unreadCount > 0 && (
            <button
              type="button"
              onClick={markAllAsRead}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <CheckCheck className="h-4 w-4" />
              Mark all as read
            </button>
          )}
        </div>

        {/* Notification count */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">
            {notifications.length}{" "}
            {notifications.length === 1 ? "notification" : "notifications"}
          </p>

          {unreadCount > 0 && (
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
              {unreadCount} unread
            </span>
          )}
        </div>

        {/* Notifications */}
        {notifications.length > 0 ? (
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
            {notifications.map((notification, index) => {
              const style = notificationStyles[notification.type]
              const Icon = style.icon

              return (
                <div
                  key={notification.id}
                  className={`relative flex gap-4 p-5 transition-colors sm:p-6 ${
                    index !== notifications.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  } ${
                    notification.unread
                      ? "bg-white"
                      : "bg-white hover:bg-gray-50/70"
                  }`}
                >
                  {/* Unread indicator */}
                  {notification.unread && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-yellow-400" />
                  )}

                  {/* Icon */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${style.className}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2
                            className={`text-sm ${
                              notification.unread
                                ? "font-semibold text-black"
                                : "font-medium text-gray-800"
                            }`}
                          >
                            {notification.title}
                          </h2>

                          {notification.unread && (
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                          )}
                        </div>

                        <p className="mt-1 text-xs text-gray-400">
                          {notification.time}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeNotification(notification.id)
                        }
                        aria-label="Remove notification"
                        className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 sm:flex"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
                      {notification.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      {notification.href && (
                        <Link
                          href={notification.href}
                          onClick={() => markAsRead(notification.id)}
                          className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-gray-800"
                        >
                          View details
                        </Link>
                      )}

                      {notification.unread && (
                        <button
                          type="button"
                          onClick={() => markAsRead(notification.id)}
                          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50"
                        >
                          <Check className="h-3.5 w-3.5" />
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Mobile remove */}
                  <button
                    type="button"
                    onClick={() => removeNotification(notification.id)}
                    aria-label="Remove notification"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 sm:hidden"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-gray-200 bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
              <Bell className="h-7 w-7" />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-black">
              You&apos;re all caught up
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              There are no notifications to show right now. We&apos;ll let you
              know when there&apos;s something important about your car care.
            </p>

            <Link
              href="/book"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Book a service
            </Link>
          </div>
        )}

        {/* Notification preferences */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-black">
                Notification preferences
              </h2>
              <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500">
                Control how you receive booking updates, reminders and other
                important messages.
              </p>
            </div>

            <Link
              href="/account/settings"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              Manage settings
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </section>

        {/* Info */}
        <div className="mt-6 flex gap-3 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-yellow-700" />

          <p className="text-xs leading-5 text-yellow-900">
            Notification preferences will become fully connected to your
            account once the backend is connected.
          </p>
        </div>
      </main>
    </div>
  )
}
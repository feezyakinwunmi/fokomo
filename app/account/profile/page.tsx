"use client"

import {
  Check,
  Mail,
  Phone,
  User,
  ShieldCheck,
  Pencil,
  CalendarDays,
  Clock,
  MapPin,
  Save,
  X,
} from "lucide-react"
import { useState } from "react"

export default function AccountProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [saved, setSaved] = useState(false)

  const [fullName, setFullName] = useState("John Doe")
  const [email, setEmail] = useState("john@example.com")
  const [phone, setPhone] = useState("+234 800 123 4567")
  const [location, setLocation] = useState("Magodo Estate, Lagos")

  function handleSave() {
    setIsEditing(false)
    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 3000)
  }

  function handleCancel() {
    setIsEditing(false)
    // Reset to original values if needed
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Account
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
              Profile
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your personal information and contact details.
            </p>
          </div>

          {!isEditing && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
            >
              <Pencil size={15} />
              Edit profile
            </button>
          )}
        </div>

        {/* Saved message */}
        {saved && (
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
              <Check size={16} />
            </div>

            <div>
              <p className="text-sm font-medium text-green-900">
                Profile updated
              </p>

              <p className="text-xs text-green-700">
                Your changes have been saved successfully.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px]">
          {/* Profile form */}
          <section className="rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-100 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                  <User size={18} className="text-yellow-600" />
                </div>

                <div>
                  <h2 className="text-base font-semibold text-gray-900">
                    Personal information
                  </h2>

                  <p className="mt-0.5 text-sm text-gray-500">
                    Your basic account details.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 p-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full name
                </label>

                <div className="relative mt-1.5">
                  <User
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={!isEditing}
                    className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 disabled:cursor-default disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>

                <div className="relative mt-1.5">
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEditing}
                    className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 disabled:cursor-default disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <p className="mt-1.5 text-xs text-gray-400">
                  We use this email for important account and booking updates.
                </p>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>

                <div className="relative mt-1.5">
                  <Phone
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={!isEditing}
                    className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 disabled:cursor-default disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <p className="mt-1.5 text-xs text-gray-400">
                  Your phone number may be used by our team when coordinating a service.
                </p>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>

                <div className="relative mt-1.5">
                  <MapPin
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    disabled={!isEditing}
                    placeholder="e.g. Magodo Estate, Lagos"
                    className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 disabled:cursor-default disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <p className="mt-1.5 text-xs text-gray-400">
                  Your location helps us serve you better.
                </p>
              </div>

              {/* Actions */}
              {isEditing && (
                <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    <X size={15} />
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={!fullName.trim() || !email.trim() || !phone.trim()}
                    className="flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Save size={15} />
                    Save changes
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Account Info */}
            <section className="rounded-xl bg-black p-6 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
                <ShieldCheck size={18} className="text-black" />
              </div>

              <h2 className="mt-5 text-base font-semibold">
                Your information
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Your profile helps us provide a smoother booking and service experience.
              </p>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                <div>
                  <p className="text-xs text-gray-500">Member since</p>
                  <p className="mt-1 text-sm font-medium text-gray-200">
                    September 2026
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total bookings</p>
                  <p className="mt-1 text-sm font-medium text-gray-200">
                    12 services
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Saved vehicles</p>
                  <p className="mt-1 text-sm font-medium text-gray-200">
                    2 vehicles
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Preferences */}
            <section className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-100">
                  <Clock size={16} className="text-yellow-600" />
                </div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Contact preferences
                </h2>
              </div>

              <p className="mt-2 text-sm leading-5 text-gray-500">
                Control how CarPadi keeps you informed about your services.
              </p>

              <button
                type="button"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-yellow-600 hover:text-yellow-700"
              >
                Manage notifications
                <Pencil size={13} />
              </button>
            </section>

            {/* Quick Stats */}
            <section className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-100">
                  <CalendarDays size={16} className="text-yellow-600" />
                </div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Recent activity
                </h2>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Last booking</span>
                  <span className="font-medium text-gray-900">Sep 12, 2026</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Next booking</span>
                  <span className="font-medium text-yellow-600">Sep 18, 2026</span>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
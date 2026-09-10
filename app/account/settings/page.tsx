"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Bell,
  CalendarDays,
  ChevronRight,
  Lock,
  Mail,
  MessageSquare,
  ShieldCheck,
  Smartphone,
  Trash2,
  LogOut,
  Check,
  Info,
} from "lucide-react"

export default function SettingsPage() {
  const [bookingUpdates, setBookingUpdates] = useState(true)
  const [serviceReminders, setServiceReminders] = useState(true)
  const [promotions, setPromotions] = useState(false)
  const [whatsappUpdates, setWhatsappUpdates] = useState(true)
  const [saved, setSaved] = useState(false)

  function savePreferences() {
    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-gray-50/70">
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/account"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to account
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Settings
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Manage your account preferences, notifications and security.
          </p>
        </div>

        {/* Preferences */}
        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
          <div className="border-b border-gray-100 px-6 py-6 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <Bell className="h-5 w-5 text-gray-700" />
              </div>

              <div>
                <h2 className="font-semibold text-black">
                  Notification preferences
                </h2>
                <p className="mt-0.5 text-sm text-gray-500">
                  Choose which updates you would like to receive.
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            <PreferenceRow
              icon={CalendarDays}
              title="Booking updates"
              description="Receive updates when your booking status changes."
              enabled={bookingUpdates}
              onChange={setBookingUpdates}
            />

            <PreferenceRow
              icon={Bell}
              title="Service reminders"
              description="Get reminders about upcoming services and routine car care."
              enabled={serviceReminders}
              onChange={setServiceReminders}
            />

            <PreferenceRow
              icon={Mail}
              title="Offers and promotions"
              description="Receive occasional updates about new services and offers."
              enabled={promotions}
              onChange={setPromotions}
            />

            <PreferenceRow
              icon={MessageSquare}
              title="WhatsApp updates"
              description="Receive important booking updates through WhatsApp."
              enabled={whatsappUpdates}
              onChange={setWhatsappUpdates}
            />
          </div>
        </section>

        {/* Save */}
        <div className="mt-4 flex items-center justify-end gap-3">
          {saved && (
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
              <Check className="h-4 w-4" />
              Preferences saved
            </div>
          )}

          <button
            type="button"
            onClick={savePreferences}
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Save preferences
          </button>
        </div>

        {/* Booking preferences */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white">
          <div className="border-b border-gray-100 px-6 py-6 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <CalendarDays className="h-5 w-5 text-gray-700" />
              </div>

              <div>
                <h2 className="font-semibold text-black">
                  Booking preferences
                </h2>
                <p className="mt-0.5 text-sm text-gray-500">
                  Manage how you normally book and receive services.
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            <SettingsLink
              icon={Smartphone}
              title="Contact preferences"
              description="Choose how Fokomo should contact you."
              href="/account/profile"
            />

            <SettingsLink
              icon={CalendarDays}
              title="My vehicles"
              description="Manage the vehicles connected to your account."
              href="/account/vehicles"
            />
          </div>
        </section>

        {/* Security */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white">
          <div className="border-b border-gray-100 px-6 py-6 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <Lock className="h-5 w-5 text-gray-700" />
              </div>

              <div>
                <h2 className="font-semibold text-black">
                  Privacy & security
                </h2>
                <p className="mt-0.5 text-sm text-gray-500">
                  Keep your account information secure.
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            <SettingsLink
              icon={Lock}
              title="Change password"
              description="Update your account password."
              href="/auth/forgot-password"
            />

            <SettingsLink
              icon={ShieldCheck}
              title="Account security"
              description="Security controls will be available when authentication is connected."
              href="#"
            />
          </div>
        </section>

        {/* Account actions */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-red-100 bg-white">
          <div className="border-b border-red-100 px-6 py-6 sm:px-8">
            <h2 className="font-semibold text-black">Account actions</h2>
            <p className="mt-1 text-sm text-gray-500">
              Actions that affect your account.
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            <button
              type="button"
              className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50 sm:px-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <LogOut className="h-5 w-5 text-gray-600" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Sign out
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Sign out of your Fokomo account on this device.
                </p>
              </div>

              <ChevronRight className="h-4 w-4 text-gray-400" />
            </button>

            <button
              type="button"
              className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-red-50/50 sm:px-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                <Trash2 className="h-5 w-5 text-red-500" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium text-red-600">
                  Delete account
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Permanently remove your account and associated information.
                </p>
              </div>

              <ChevronRight className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </section>

        {/* Backend notice */}
        <div className="mt-6 flex gap-3 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-yellow-700" />

          <p className="text-xs leading-5 text-yellow-900">
            Account settings are currently running locally in the interface.
            Authentication, persistent preferences and account deletion will
            be connected when the backend is implemented.
          </p>
        </div>
      </main>
    </div>
  )
}

type PreferenceRowProps = {
  icon: React.ElementType
  title: string
  description: string
  enabled: boolean
  onChange: (value: boolean) => void
}

function PreferenceRow({
  icon: Icon,
  title,
  description,
  enabled,
  onChange,
}: PreferenceRowProps) {
  return (
    <div className="flex items-center gap-4 px-6 py-5 sm:px-8">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100">
        <Icon className="h-5 w-5 text-gray-600" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="mt-1 max-w-xl text-xs leading-5 text-gray-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          enabled ? "bg-black" : "bg-gray-200"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  )
}

type SettingsLinkProps = {
  icon: React.ElementType
  title: string
  description: string
  href: string
}

function SettingsLink({
  icon: Icon,
  title,
  description,
  href,
}: SettingsLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-gray-50 sm:px-8"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100">
        <Icon className="h-5 w-5 text-gray-600" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          {description}
        </p>
      </div>

      <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
    </Link>
  )
}
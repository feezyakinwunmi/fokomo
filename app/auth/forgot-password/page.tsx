"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import { 
  ArrowLeft, 
  CheckCircle, 
  Loader2, 
  Mail,
  Shield,
  Key
} from "lucide-react"

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 900)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-md">
          {/* Back Link */}
          <Link
            href="/auth/login"
            className="group mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to sign in
          </Link>

          {sent ? (
            // Success State
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle size={32} className="text-green-600" />
              </div>

              <h2 className="text-xl font-bold text-green-900">
                Check your email
              </h2>

              <p className="mt-2 text-sm leading-6 text-green-700">
                If an account exists with <strong>{email}</strong>, you'll receive password reset instructions.
              </p>

              <div className="mt-6 rounded-lg bg-green-100/50 p-4">
                <p className="text-xs text-green-700">
                  <span className="font-medium">Didn't receive an email?</span> Check your spam folder or try again.
                </p>
              </div>

              <Link
                href="/auth/login"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
              >
                <ArrowLeft size={15} />
                Back to sign in
              </Link>
            </div>
          ) : (
            // Form State
            <>
              <div className="mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                  <Key size={22} className="text-yellow-600" />
                </div>
                <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
                  Reset your password
                </h1>
                <p className="mt-1.5 text-sm text-gray-500">
                  Enter your email and we'll send instructions to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="relative mt-1.5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="block w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 text-sm font-medium text-black transition hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send reset instructions"
                  )}
                </button>
              </form>

              {/* Trust Badge */}
              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Shield size={14} className="text-green-500" />
                  <span>Secure request</span>
                </div>
                <div className="h-3 w-px bg-gray-200" />
                <div className="flex items-center gap-1.5">
                  <Mail size={14} className="text-green-500" />
                  <span>We'll respond quickly</span>
                </div>
              </div>

              {/* Help Section */}
              <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  <span className="font-medium text-gray-700">Need help?</span>{" "}
                  Contact us at{" "}
                  <a href="mailto:support@Fokomo.com" className="text-yellow-600 hover:text-yellow-700">
                    support@Fokomo.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+2348001234567" className="text-yellow-600 hover:text-yellow-700">
                    +234 800 123 4567
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="relative hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:bg-gradient-to-br from-yellow-400 to-yellow-500 p-12">
        <div className="relative max-w-lg text-center">
          {/* Decorative Elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-black/10" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-black/10" />
          
          <div className="relative">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-black/10">
              <Key size={48} className="text-black" />
            </div>
            
            <h2 className="text-3xl font-bold text-black">
              Don't worry, we've got you
            </h2>
            
            <p className="mt-3 text-black/80">
              Reset your password in just a few clicks. We'll send a secure link to your email.
            </p>

            <div className="mt-8 space-y-3 text-left">
              <div className="flex items-center gap-3 rounded-lg bg-black/5 p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/10">
                  <Mail size={16} className="text-black" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">Check your email</p>
                  <p className="text-xs text-black/70">We'll send a reset link</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-black/5 p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/10">
                  <Shield size={16} className="text-black" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">Secure process</p>
                  <p className="text-xs text-black/70">Your data is protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
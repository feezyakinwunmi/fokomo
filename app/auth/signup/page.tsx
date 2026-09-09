"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import { 
  ArrowRight, 
  Loader2, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  User,
  Phone,
  CheckCircle,
  Car,
  Shield
} from "lucide-react"

export default function SignupPage() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    agreeTerms: false
  })

  function updateField(field: keyof typeof form, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      window.location.href = "/account"
    }, 900)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                <Car size={20} className="text-black" />
              </div>
              <span className="text-xl font-bold">Fokomo</span>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Create your account
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">
              Make booking and managing your car care easier
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <div className="relative mt-1.5">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User size={18} className="text-gray-400" />
                </div>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Your full name"
                  className="block w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <div className="relative mt-1.5">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Phone size={18} className="text-gray-400" />
                </div>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="080 1234 5678"
                  className="block w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>
            </div>

            {/* Email */}
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
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@example.com"
                  className="block w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1.5">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  required
                  minLength={8}
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => updateField("password", e.target.value)}
                  placeholder="At least 8 characters"
                  className="block w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="mt-1.5 text-xs text-gray-400">
                Must be at least 8 characters long
              </p>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                checked={form.agreeTerms}
                onChange={(e) => updateField("agreeTerms", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
              />
              <label className="text-xs leading-5 text-gray-500">
                I agree to CarPadi's{" "}
                <Link href="/terms" className="text-yellow-600 hover:text-yellow-700">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-yellow-600 hover:text-yellow-700">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !form.agreeTerms}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 text-sm font-medium text-black transition hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create account
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-medium text-yellow-600 hover:text-yellow-700 underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </p>

          {/* Trust Badge */}
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <Shield size={14} className="text-green-500" />
              <span>Secure signup</span>
            </div>
            <div className="h-3 w-px bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-green-500" />
              <span>Privacy protected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Info */}
      <div className="relative hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:bg-gradient-to-br from-yellow-400 to-yellow-500 p-12">
        <div className="relative max-w-lg text-center">
          {/* Decorative Elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-black/10" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-black/10" />
          
          <div className="relative">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-black/10">
              <Car size={48} className="text-black" />
            </div>
            
            <h2 className="text-3xl font-bold text-black">
              Join the Fokomo community
            </h2>
            
            <p className="mt-3 text-black/80">
              Create an account to book services, manage your vehicles, and get the best car care experience.
            </p>

            <div className="mt-8 flex justify-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-black">15 min</p>
                <p className="text-sm text-black/70">Express Wash</p>
              </div>
              <div className="w-px bg-black/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-black">4.9</p>
                <p className="text-sm text-black/70">Customer Rating</p>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-yellow-400 bg-gradient-to-br from-gray-200 to-gray-300"
                    style={{ opacity: 0.8 - i * 0.15 }}
                  />
                ))}
              </div>
              <span className="text-sm text-black/70">500+ members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"

import { FormEvent, useState } from "react"
import { 
  CheckCircle, 
  Loader2, 
  Lock, 
  Eye, 
  EyeOff,
  Shield,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function ResetPasswordPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [form, setForm] = useState({
    password: "",
    confirmPassword: ""
  })
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: ""
  })

  function updateField(field: keyof typeof form, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
    // Clear error when user types
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  function validateForm(): boolean {
    const newErrors = { password: "", confirmPassword: "" }
    let isValid = true

    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
      isValid = false
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    if (!validateForm()) return

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 900)
  }

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-green-200 bg-white p-8 shadow-sm text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle size={32} className="text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Password updated
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Your password has been changed successfully.
          </p>

          <div className="mt-6 rounded-lg bg-green-50 p-4 border border-green-200">
            <p className="text-xs text-green-700">
              <span className="font-medium">Tip:</span> Use this new password to sign in to your account.
            </p>
          </div>

          <Link
            href="/auth/login"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
          >
            <ArrowLeft size={15} />
            Sign in
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
              <Lock size={22} className="text-yellow-600" />
            </div>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
              Create a new password
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">
              Choose a strong password for your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                New password
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
                  className={`block w-full rounded-xl border ${
                    errors.password ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-yellow-400"
                  } bg-white py-3 pl-10 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                    errors.password ? "focus:ring-red-400/20" : "focus:ring-yellow-400/20"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>
              )}
              <div className="mt-1.5 flex items-center gap-2">
                <div className={`h-1.5 w-12 rounded-full ${
                  form.password.length >= 8 ? "bg-green-500" : "bg-gray-200"
                }`} />
                <span className="text-xs text-gray-400">
                  {form.password.length >= 8 ? "✓ Strong" : "Minimum 8 characters"}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <div className="relative mt-1.5">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  required
                  minLength={8}
                  type={showConfirmPassword ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={(e) => updateField("confirmPassword", e.target.value)}
                  placeholder="Repeat your password"
                  className={`block w-full rounded-xl border ${
                    errors.confirmPassword ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-yellow-400"
                  } bg-white py-3 pl-10 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                    errors.confirmPassword ? "focus:ring-red-400/20" : "focus:ring-yellow-400/20"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs text-red-500">{errors.confirmPassword}</p>
              )}
              {form.confirmPassword && !errors.confirmPassword && form.password === form.confirmPassword && (
                <p className="mt-1.5 text-xs text-green-500">✓ Passwords match</p>
              )}
            </div>

            {/* Password Requirements */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs font-medium text-gray-700">Password must:</p>
              <ul className="mt-2 space-y-1.5 text-xs text-gray-500">
                <li className="flex items-center gap-2">
                  <span className={form.password.length >= 8 ? "text-green-500" : "text-gray-300"}>
                    {form.password.length >= 8 ? "✓" : "○"}
                  </span>
                  Be at least 8 characters long
                </li>
                <li className="flex items-center gap-2">
                  <span className={/[A-Z]/.test(form.password) ? "text-green-500" : "text-gray-300"}>
                    {/[A-Z]/.test(form.password) ? "✓" : "○"}
                  </span>
                  Contain at least one uppercase letter
                </li>
                <li className="flex items-center gap-2">
                  <span className={/[a-z]/.test(form.password) ? "text-green-500" : "text-gray-300"}>
                    {/[a-z]/.test(form.password) ? "✓" : "○"}
                  </span>
                  Contain at least one lowercase letter
                </li>
                <li className="flex items-center gap-2">
                  <span className={/[0-9]/.test(form.password) ? "text-green-500" : "text-gray-300"}>
                    {/[0-9]/.test(form.password) ? "✓" : "○"}
                  </span>
                  Contain at least one number
                </li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={loading || form.password.length < 8 || form.password !== form.confirmPassword}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 text-sm font-medium text-black transition hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Updating...
                </>
              ) : (
                "Update password"
              )}
            </button>
          </form>

          {/* Trust Badge */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <Shield size={14} className="text-green-500" />
              <span>Secure update</span>
            </div>
            <div className="h-3 w-px bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <Lock size={14} className="text-green-500" />
              <span>Encrypted</span>
            </div>
          </div>
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
              <Lock size={48} className="text-black" />
            </div>
            
            <h2 className="text-3xl font-bold text-black">
              Create a strong password
            </h2>
            
            <p className="mt-3 text-black/80">
              Choose a password that's secure and easy to remember. We'll keep your account safe.
            </p>

            <div className="mt-8 space-y-3 text-left">
              <div className="flex items-center gap-3 rounded-lg bg-black/5 p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/10">
                  <Shield size={16} className="text-black" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">Secure encryption</p>
                  <p className="text-xs text-black/70">Your password is encrypted</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-black/5 p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/10">
                  <CheckCircle size={16} className="text-black" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">Strong password tips</p>
                  <p className="text-xs text-black/70">Use a mix of letters, numbers, and symbols</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
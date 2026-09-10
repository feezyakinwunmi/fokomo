"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Users,
  RefreshCw,
  Loader2,
  AlertCircle,
} from "lucide-react"
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts"

type SheetResponse = {
  Timestamp: string
  Q1_WashFrequency: string
  Q2_WashLocation: string
  Q3_WashSpend: string
  Q4_Frustration: string
  Q5_WaitTime: string
  Q6_WaitingActivity: string
  Q7_BadExperience: string
  Q8_InterestedServices: string
  Q9_HomeServiceInterest: string
  Q10_TrustFactors: string
  Q11_Interests: string
  Q12_PaymentPreference: string
  Q13_DoDifferently: string
  Q14_UseInEstate: string
  Q15_WhyChooseCarPadi: string
  Q16_WhyNotUseCarPadi: string
}

const COLORS = ["#FBBF24", "#F59E0B", "#F97316", "#FB923C", "#EA580C", "#C2410C"]

// Helper: counts how many times each value appears
function countValues(data: SheetResponse[], key: keyof SheetResponse) {
  const counts: Record<string, number> = {}
  data.forEach((row) => {
    const value = row[key] || ""
    if (!value) return
    // Handle multi-select values (comma-separated)
    const values = String(value).split(",").map((v) => v.trim())
    values.forEach((v) => {
      if (v) counts[v] = (counts[v] || 0) + 1
    })
  })
  return Object.entries(counts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
}

export default function SurveyResponsesPage() {
  const [data, setData] = useState<SheetResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  async function loadData() {
    setLoading(true)
    setError("")
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_SURVEY_SCRIPT_URL!)
      const json = await res.json()
      if (json.status === "success") {
        setData(json.responses)
      } else {
        setError(json.message || "Failed to load")
      }
    } catch (err) {
      setError("Could not connect to Google Sheets")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 pt-32 flex items-center justify-center">
        <div className="text-center">
          <Loader2 size={32} className="mx-auto animate-spin text-yellow-500" />
          <p className="mt-3 text-sm text-gray-500">Loading responses...</p>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 pt-32">
        <div className="mx-auto max-w-md px-6 text-center">
          <AlertCircle size={40} className="mx-auto text-red-500" />
          <h1 className="mt-4 text-xl font-bold text-gray-900">Something went wrong</h1>
          <p className="mt-2 text-sm text-gray-500">{error}</p>
          <button
            onClick={loadData}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black"
          >
            <RefreshCw size={15} />
            Try again
          </button>
        </div>
      </main>
    )
  }

  // Build chart data from real responses
  const washFrequency = countValues(data, "Q1_WashFrequency")
  const washLocation = countValues(data, "Q2_WashLocation")
  const frustration = countValues(data, "Q4_Frustration")
  const waitTime = countValues(data, "Q5_WaitTime")
  const interestedServices = countValues(data, "Q8_InterestedServices")
  const homeService = countValues(data, "Q9_HomeServiceInterest")
  const payment = countValues(data, "Q12_PaymentPreference")
  const spend = countValues(data, "Q3_WashSpend")

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link
              href="/survey"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
            >
              <ArrowLeft size={15} />
              Back to survey
            </Link>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Survey Responses
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Live data from your Google Sheet
            </p>
          </div>
          <button
            onClick={loadData}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <RefreshCw size={15} />
            Refresh
          </button>
        </div>

        {/* Stat */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                <Users size={18} className="text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{data.length}</span>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">Total Responses</p>
          </div>
        </div>

        {data.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <Users size={40} className="mx-auto text-gray-300" />
            <h3 className="mt-4 font-semibold text-gray-900">No responses yet</h3>
            <p className="mt-1 text-sm text-gray-500">
              Share your survey link to start collecting responses.
            </p>
          </div>
        ) : (
          <>
            {/* Pie Charts */}
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                { title: "Wash Frequency", data: washFrequency },
                { title: "Where People Wash", data: washLocation },
                { title: "Home Service Interest", data: homeService },
              ].map((chart) => (
                <div key={chart.title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="text-sm font-semibold text-gray-900">{chart.title}</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                      <Pie
                        data={chart.data}
                        cx="50%"
                        cy="50%"
                        innerRadius={45}
                        outerRadius={75}
                        dataKey="value"
                        paddingAngle={2}
                      >
                        {chart.data.map((_, i) => (
                          <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-3 space-y-1.5">
                    {chart.data.map((item, i) => (
                      <div key={item.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: COLORS[i % COLORS.length] }}
                          />
                          <span className="text-gray-600">{item.name}</span>
                        </div>
                        <span className="font-medium text-gray-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bar Charts */}
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-gray-900">Biggest Frustrations</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={frustration} layout="vertical" margin={{ left: 20, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" horizontal={false} />
                    <XAxis type="number" tick={{ fontSize: 11 }} />
                    <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} width={140} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#FBBF24" radius={[0, 6, 6, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-gray-900">Interested Services</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={interestedServices} layout="vertical" margin={{ left: 20, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" horizontal={false} />
                    <XAxis type="number" tick={{ fontSize: 11 }} />
                    <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} width={140} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#FBBF24" radius={[0, 6, 6, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* More charts */}
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                { title: "Wait Time", data: waitTime },
                { title: "Payment Preferences", data: payment },
                { title: "Typical Spend", data: spend },
              ].map((chart) => (
                <div key={chart.title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="text-sm font-semibold text-gray-900">{chart.title}</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={chart.data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                      <XAxis dataKey="name" tick={{ fontSize: 9 }} angle={-15} textAnchor="end" height={50} />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#FBBF24" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
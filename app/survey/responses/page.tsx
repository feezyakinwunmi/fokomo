"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Users,
  RefreshCw,
  Loader2,
  AlertCircle,
  BarChart3,
  Table2,
  ChevronDown,
  ChevronUp,
  X,
  CalendarDays,
  Download,
} from "lucide-react"
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts"

// ─── TYPES ──────────────────────────────────────────────────────────────────
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

// Friendly labels for each question
const questionLabels: Record<string, string> = {
  Q1_WashFrequency: "How often do you wash your car?",
  Q2_WashLocation: "Where do you usually wash your car?",
  Q3_WashSpend: "How much do you spend on a regular wash?",
  Q4_Frustration: "Biggest frustration with car-care",
  Q5_WaitTime: "How long do you usually wait?",
  Q6_WaitingActivity: "What do you do while waiting?",
  Q7_BadExperience: "Ever had a bad experience?",
  Q8_InterestedServices: "Services you're interested in",
  Q9_HomeServiceInterest: "Would you use home/estate service?",
  Q10_TrustFactors: "What builds trust in mobile service?",
  Q11_Interests: "What interests you about CarPadi?",
  Q12_PaymentPreference: "Preferred payment method",
  Q13_DoDifferently: "What should CarPadi do differently?",
  Q14_UseInEstate: "Would you use CarPadi in your estate?",
  Q15_WhyChooseCarPadi: "Why would you choose CarPadi?",
  Q16_WhyNotUseCarPadi: "What would stop you from using CarPadi?",
}

const COLORS = ["#FBBF24", "#F59E0B", "#F97316", "#FB923C", "#EA580C", "#C2410C"]

// ─── HELPERS ────────────────────────────────────────────────────────────────
function countValues(data: SheetResponse[], key: keyof SheetResponse) {
  const counts: Record<string, number> = {}
  data.forEach((row) => {
    const value = row[key] || ""
    if (!value) return
    const values = String(value).split(",").map((v) => v.trim())
    values.forEach((v) => {
      if (v) counts[v] = (counts[v] || 0) + 1
    })
  })
  return Object.entries(counts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
}

function formatTimestamp(ts: string) {
  if (!ts) return "—"
  try {
    const date = new Date(ts)
    return date.toLocaleString("en-NG", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  } catch {
    return ts
  }
}

// ─── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function SurveyResponsesPage() {
  const [data, setData] = useState<SheetResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState<"charts" | "responses">("charts")
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  async function loadData() {
    setLoading(true)
    setError("")
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_SURVEY_SCRIPT_URL!)
      const json = await res.json()
      if (json.status === "success") {
        // Sort newest first
        const sorted = [...json.responses].sort(
          (a, b) => new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime()
        )
        setData(sorted)
      } else {
        setError(json.message || "Failed to load")
      }
    } catch {
      setError("Could not connect to Google Sheets")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  // ─── LOADING STATE ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 pt-32">
        <div className="text-center">
          <Loader2 size={32} className="mx-auto animate-spin text-yellow-500" />
          <p className="mt-3 text-sm text-gray-500">Loading responses...</p>
        </div>
      </main>
    )
  }

  // ─── ERROR STATE ──────────────────────────────────────────────────────────
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

  // ─── BUILD CHART DATA ─────────────────────────────────────────────────────
  const washFrequency = countValues(data, "Q1_WashFrequency")
  const washLocation = countValues(data, "Q2_WashLocation")
  const frustration = countValues(data, "Q4_Frustration")
  const waitTime = countValues(data, "Q5_WaitTime")
  const interestedServices = countValues(data, "Q8_InterestedServices")
  const homeService = countValues(data, "Q9_HomeServiceInterest")
  const payment = countValues(data, "Q12_PaymentPreference")
  const spend = countValues(data, "Q3_WashSpend")

  // Recent responses (last 24 hours)
  const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000
  const recentCount = data.filter(
    (r) => new Date(r.Timestamp).getTime() > oneDayAgo
  ).length

  return (
    <main className="min-h-screen bg-gray-50 pb-16 pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ─── HEADER ────────────────────────────────────────────────────── */}
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

          <div className="flex flex-wrap gap-2">
            <button
              onClick={loadData}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <RefreshCw size={15} />
              Refresh
            </button>
          </div>
        </div>

        {/* ─── STATS ─────────────────────────────────────────────────────── */}
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

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <CalendarDays size={18} className="text-green-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{recentCount}</span>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">Last 24 Hours</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <BarChart3 size={18} className="text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {washFrequency[0]?.value || 0}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">Top Answer</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <Table2 size={18} className="text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">16</span>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">Questions</p>
          </div>
        </div>

        {/* ─── TABS ──────────────────────────────────────────────────────── */}
        <div className="mt-6 flex w-fit gap-1 rounded-xl border border-gray-200 bg-white p-1">
          <button
            type="button"
            onClick={() => setActiveTab("charts")}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
              activeTab === "charts"
                ? "bg-yellow-400 text-black"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <BarChart3 size={15} />
            Charts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("responses")}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
              activeTab === "responses"
                ? "bg-yellow-400 text-black"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <Table2 size={15} />
            Individual Responses ({data.length})
          </button>
        </div>

        {/* ─── EMPTY STATE ───────────────────────────────────────────────── */}
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
            {/* ─── CHARTS TAB ──────────────────────────────────────────── */}
            {activeTab === "charts" && (
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

            {/* ─── RESPONSES TAB ───────────────────────────────────────── */}
            {activeTab === "responses" && (
              <div className="mt-6 space-y-3">
                {data.map((response, index) => {
                  const isExpanded = expandedRow === index

                  return (
                    <div
                      key={index}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-sm"
                    >
                      {/* Row header */}
                      <button
                        type="button"
                        onClick={() => setExpandedRow(isExpanded ? null : index)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      >
                        <div className="flex min-w-0 items-center gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-sm font-bold text-yellow-700">
                            #{data.length - index}
                          </div>

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-sm font-semibold text-gray-900">
                                Response {data.length - index}
                              </p>
                              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">
                                {countAnswers(response)} questions answered
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-gray-500">
                              {formatTimestamp(response.Timestamp)}
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          <span className="hidden text-xs text-gray-400 sm:inline">
                            {isExpanded ? "Collapse" : "View details"}
                          </span>
                          {isExpanded ? (
                            <ChevronUp size={18} className="text-gray-400" />
                          ) : (
                            <ChevronDown size={18} className="text-gray-400" />
                          )}
                        </div>
                      </button>

                      {/* Expanded details */}
                      {isExpanded && (
                        <div className="border-t border-gray-100 bg-gray-50/50 p-5">
                          <div className="grid gap-4 sm:grid-cols-2">
                            {Object.entries(questionLabels).map(([key, label]) => {
                              const value = response[key as keyof SheetResponse]
                              if (!value) return null

                              return (
                                <div
                                  key={key}
                                  className="rounded-lg border border-gray-200 bg-white p-4"
                                >
                                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    {label}
                                  </p>
                                  <p className="mt-1.5 text-sm text-gray-900">
                                    {String(value) || "—"}
                                  </p>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}

// Count how many questions were answered
function countAnswers(response: SheetResponse): number {
  return Object.keys(questionLabels).filter(
    (key) => response[key as keyof SheetResponse]
  ).length
}
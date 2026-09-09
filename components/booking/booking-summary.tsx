import Link from "next/link"
import { ArrowRight, CalendarDays, Car, MapPin, Sparkles } from "lucide-react"

type Props = {
  service?: string
  vehicle?: string
  estate?: string
  date?: string
  time?: string
}

export default function BookingSummary({
  service,
  vehicle,
  estate,
  date,
  time,
}: Props) {
  return (
    <aside className="rounded-[2rem] bg-zinc-950 p-7 text-white">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
        Booking summary
      </p>

      <h2 className="mt-3 text-2xl font-semibold">
        Your service request
      </h2>

      <div className="mt-8 space-y-5">
        <SummaryRow
          icon={<Sparkles size={17} />}
          label="Service"
          value={service || "Not selected"}
        />

        <SummaryRow
          icon={<Car size={17} />}
          label="Vehicle"
          value={vehicle || "Not selected"}
        />

        <SummaryRow
          icon={<MapPin size={17} />}
          label="Location"
          value={estate || "Not provided"}
        />

        <SummaryRow
          icon={<CalendarDays size={17} />}
          label="Preferred time"
          value={
            date && time
              ? `${date} · ${time}`
              : "Not selected"
          }
        />
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="text-sm leading-6 text-zinc-400">
          This request does not require payment now. Our team will confirm
          availability and the final price with you.
        </p>
      </div>
    </aside>
  )
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 text-zinc-500">{icon}</div>

      <div className="min-w-0">
        <p className="text-xs text-zinc-500">{label}</p>
        <p className="mt-1 truncate text-sm text-zinc-200">
          {value}
        </p>
      </div>
    </div>
  )
}
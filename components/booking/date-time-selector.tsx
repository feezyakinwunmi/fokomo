"use client"

type Props = {
  date: string
  time: string
  onDateChange: (value: string) => void
  onTimeChange: (value: string) => void
}

export default function DateTimeSelector({
  date,
  time,
  onDateChange,
  onTimeChange,
}: Props) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Preferred date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-zinc-950"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Preferred time
        </label>

        <select
          value={time}
          onChange={(e) => onTimeChange(e.target.value)}
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-zinc-950"
        >
          <option value="">Select a time</option>
          <option value="8:00 AM">8:00 AM</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="5:00 PM">5:00 PM</option>
        </select>
      </div>
    </div>
  )
}
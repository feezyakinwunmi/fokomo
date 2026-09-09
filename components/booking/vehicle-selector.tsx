"use client"

type Props = {
  value: string
  onChange: (value: string) => void
}

const vehicles = [
  "Saloon",
  "SUV",
  "Crossover",
  "Coupe",
  "Pickup",
  "Van / Bus",
  "Other",
]

export default function VehicleSelector({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium">
        Vehicle type
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-zinc-200 bg-white px-4 py-3.5 pr-10 text-sm outline-none transition focus:border-zinc-950"
        >
          <option value="">Select vehicle type</option>

          {vehicles.map((vehicle) => (
            <option key={vehicle} value={vehicle}>
              {vehicle}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
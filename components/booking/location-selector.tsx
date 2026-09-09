"use client"

type Props = {
  estate: string
  address: string
  onEstateChange: (value: string) => void
  onAddressChange: (value: string) => void
}

export default function LocationSelector({
  estate,
  address,
  onEstateChange,
  onAddressChange,
}: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Estate / location
        </label>

        <input
          value={estate}
          onChange={(e) => onEstateChange(e.target.value)}
          placeholder="e.g. Harmony Estate, Epe"
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Specific address
        </label>

        <textarea
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          placeholder="House number, street or useful directions"
          rows={3}
          className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
        />
      </div>
    </div>
  )
}
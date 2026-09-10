"use client"

import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CarFront,
  Check,
  MoreHorizontal,
  Plus,
  Settings2,
  ShieldCheck,
  Trash2,
  X,
  CalendarDays,
  Clock,
} from "lucide-react"
import { useState } from "react"

type Vehicle = {
  id: string
  name: string
  type: string
  plateNumber: string
  isDefault: boolean
  lastService?: string
}

const initialVehicles: Vehicle[] = [
  {
    id: "vehicle-1",
    name: "Toyota Camry",
    type: "Saloon",
    plateNumber: "LAG-123-AB",
    isDefault: true,
    lastService: "September 12, 2026",
  },
  {
    id: "vehicle-2",
    name: "Honda Accord",
    type: "Saloon",
    plateNumber: "LAG-456-CD",
    isDefault: false,
    lastService: "August 29, 2026",
  },
]

const vehicleTypes = [
  "Saloon",
  "SUV",
  "Crossover",
  "Coupe",
  "Pickup",
  "Van / Bus",
  "Other",
]

export default function AccountVehiclesPage() {
  const [vehicles, setVehicles] = useState(initialVehicles)
  const [showForm, setShowForm] = useState(false)
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const [name, setName] = useState("")
  const [type, setType] = useState("Saloon")
  const [plateNumber, setPlateNumber] = useState("")
  const [isDefault, setIsDefault] = useState(false)

  function resetForm() {
    setName("")
    setType("Saloon")
    setPlateNumber("")
    setIsDefault(false)
    setEditingVehicle(null)
  }

  function openAddForm() {
    resetForm()
    setShowForm(true)
  }

  function openEditForm(vehicle: Vehicle) {
    setEditingVehicle(vehicle)
    setName(vehicle.name)
    setType(vehicle.type)
    setPlateNumber(vehicle.plateNumber)
    setIsDefault(vehicle.isDefault)
    setShowForm(true)
    setOpenMenu(null)
  }

  function closeForm() {
    setShowForm(false)
    resetForm()
  }

  function saveVehicle() {
    if (!name.trim()) return

    const vehicleData = {
      name: name.trim(),
      type,
      plateNumber: plateNumber.trim() || "Not provided",
      isDefault,
    }

    if (editingVehicle) {
      setVehicles((current) =>
        current.map((vehicle) =>
          vehicle.id === editingVehicle.id
            ? {
                ...vehicle,
                ...vehicleData,
              }
            : isDefault
              ? { ...vehicle, isDefault: false }
              : vehicle,
        ),
      )
    } else {
      const newVehicle: Vehicle = {
        id: `vehicle-${Date.now()}`,
        ...vehicleData,
        isDefault: vehicles.length === 0 ? true : isDefault,
        lastService: "No service yet",
      }

      setVehicles((current) =>
        isDefault
          ? [...current.map((vehicle) => ({ ...vehicle, isDefault: false })), newVehicle]
          : [...current, newVehicle],
      )
    }

    closeForm()
  }

  function deleteVehicle(id: string) {
    setVehicles((current) => {
      const remaining = current.filter((vehicle) => vehicle.id !== id)

      if (remaining.length > 0 && !remaining.some((vehicle) => vehicle.isDefault)) {
        remaining[0] = {
          ...remaining[0],
          isDefault: true,
        }
      }

      return remaining
    })

    setOpenMenu(null)
  }

  function makeDefault(id: string) {
    setVehicles((current) =>
      current.map((vehicle) => ({
        ...vehicle,
        isDefault: vehicle.id === id,
      })),
    )

    setOpenMenu(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Account
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
              My vehicles
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Save your vehicles so booking your next service is faster.
            </p>
          </div>

          <button
            type="button"
            onClick={openAddForm}
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
          >
            <Plus size={16} />
            Add vehicle
          </button>
        </div>

        {/* Vehicle list */}
        {vehicles.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition hover:border-yellow-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                      <CarFront size={22} className="text-yellow-600" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-base font-semibold text-gray-900">
                          {vehicle.name}
                        </h2>

                        {vehicle.isDefault && (
                          <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-[11px] font-medium text-yellow-800 border border-yellow-200">
                            Default
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-sm text-gray-500">
                        {vehicle.type}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      type="button"
                      aria-label={`Options for ${vehicle.name}`}
                      onClick={() =>
                        setOpenMenu(
                          openMenu === vehicle.id ? null : vehicle.id,
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                    >
                      <MoreHorizontal size={18} />
                    </button>

                    {openMenu === vehicle.id && (
                      <div className="absolute right-0 top-10 z-20 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg">
                        <button
                          type="button"
                          onClick={() => openEditForm(vehicle)}
                          className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          <Settings2 size={15} />
                          Edit vehicle
                        </button>

                        {!vehicle.isDefault && (
                          <button
                            type="button"
                            onClick={() => makeDefault(vehicle.id)}
                            className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50"
                          >
                            <Check size={15} />
                            Make default
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => deleteVehicle(vehicle.id)}
                          className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                        >
                          <Trash2 size={15} />
                          Remove vehicle
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-gray-100 pt-5">
                  <div>
                    <p className="text-xs text-gray-400">Vehicle type</p>
                    <p className="mt-0.5 text-sm font-medium text-gray-900">
                      {vehicle.type}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Plate number</p>
                    <p className="mt-0.5 text-sm font-medium text-gray-900">
                      {vehicle.plateNumber}
                    </p>
                  </div>
                </div>

                {vehicle.lastService && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
                    <CalendarDays size={13} />
                    <span>Last service: {vehicle.lastService}</span>
                  </div>
                )}

                <Link
                  href="/book"
                  className="mt-5 flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-yellow-50 hover:text-yellow-700 group"
                >
                  Book for this vehicle
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
              <CarFront size={28} className="text-yellow-600" />
            </div>

            <h2 className="mt-4 text-lg font-semibold text-gray-900">
              No vehicles added yet
            </h2>

            <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-gray-500">
              Add your vehicle once and make future Fokomo bookings quicker.
            </p>

            <button
              type="button"
              onClick={openAddForm}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300"
            >
              <Plus size={15} />
              Add your first vehicle
            </button>
          </div>
        )}

        {/* Info */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-100">
              <ShieldCheck size={16} className="text-yellow-600" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Why save your vehicle?
              </h3>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Your saved vehicle information makes future bookings quicker
                and helps the Fokomo team understand what vehicle they are
                caring for.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-6">
          <div 
            className="w-full max-w-lg rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Vehicle
                </p>

                <h2 className="mt-1 text-xl font-semibold text-gray-900">
                  {editingVehicle ? "Edit vehicle" : "Add a vehicle"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Keep your vehicle details available for future bookings.
                </p>
              </div>

              <button
                type="button"
                onClick={closeForm}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-7 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Vehicle name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Toyota Camry"
                  className="mt-1.5 h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Vehicle type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                >
                  {vehicleTypes.map((vehicleType) => (
                    <option key={vehicleType} value={vehicleType}>
                      {vehicleType}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Plate number
                </label>
                <input
                  type="text"
                  value={plateNumber}
                  onChange={(e) => setPlateNumber(e.target.value)}
                  placeholder="e.g. ABC-123-XY"
                  className="mt-1.5 h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm uppercase outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-gray-50 p-4 transition hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                />

                <span>
                  <span className="block text-sm font-medium text-gray-900">
                    Make this my default vehicle
                  </span>
                  <span className="mt-0.5 block text-xs text-gray-500">
                    Use this vehicle automatically when making a booking.
                  </span>
                </span>
              </label>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeForm}
                className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={saveVehicle}
                disabled={!name.trim()}
                className="rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {editingVehicle ? "Save changes" : "Add vehicle"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
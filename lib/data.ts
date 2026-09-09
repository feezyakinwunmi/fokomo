export const services: Service[] = [
  {
    slug: "wash",
    name: "Car Wash",
    shortDescription:
      "A thorough exterior wash that keeps your vehicle clean and presentable.",
    description:
      "Our regular car wash is designed for customers who want reliable, convenient cleaning without spending unnecessary time waiting.",
    icon: "Droplets",
    priceLabel: "Pilot pricing",
    duration: "30–60 mins",
    mobileAvailable: true,
    popular: true,
    features: [
      "Exterior wash",
      "Wheel and tyre cleaning",
      "Exterior drying",
      "Basic finishing",
    ],
  },

  {
    slug: "detailing",
    name: "Car Detailing",
    shortDescription:
      "A deeper clean focused on restoring the look and feel of your vehicle.",
    description:
      "Our detailing service provides a more comprehensive treatment for customers who want their vehicle cleaned beyond a regular wash.",
    icon: "Sparkles",
    priceLabel: "Pilot pricing",
    duration: "2–4 hours",
    mobileAvailable: true,
    features: [
      "Deep exterior cleaning",
      "Interior detailing",
      "Wheel and tyre treatment",
      "Finishing and presentation",
    ],
  },

  {
    slug: "interior-care",
    name: "Interior Care",
    shortDescription:
      "Deep interior cleaning for a cleaner, fresher driving environment.",
    description:
      "Interior Care focuses on the areas you interact with every day, helping keep your cabin clean, comfortable, and properly maintained.",
    icon: "Armchair",
    priceLabel: "Pilot pricing",
    duration: "1–2 hours",
    mobileAvailable: true,
    features: [
      "Interior vacuuming",
      "Dashboard cleaning",
      "Seat and surface cleaning",
      "Interior finishing",
    ],
  },

  {
    slug: "vehicle-support",
    name: "Vehicle Support",
    shortDescription:
      "Basic vehicle assistance when you need help getting back on the road.",
    description:
      "Fokomo provides selected basic vehicle support services for common situations such as battery assistance and tyre-related needs.",
    icon: "Wrench",
    priceLabel: "Based on service",
    duration: "Varies",
    mobileAvailable: true,
    features: [
      "Battery assistance",
      "Battery replacement support",
      "Tyre assistance",
      "Basic vehicle support",
    ],
  },

  {
    slug: "mobile-car-care",
    name: "Mobile Car Care",
    shortDescription:
      "Professional car care brought closer to where you are.",
    description:
      "Mobile Car Care allows eligible customers to request selected Fokomo services at home, in their estate, workplace, or another approved location.",
    icon: "Car",
    priceLabel: "Pilot pricing",
    duration: "Varies",
    mobileAvailable: true,
    popular: true,
    features: [
      "Service at your location",
      "Estate and home support",
      "Convenient scheduling",
      "Reduced waiting time",
    ],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export type FokomoLocation = {
  slug: string
  name: string
  area: string
  status: "active" | "pilot" | "coming-soon"
  description: string
  services: string[]
}

export const locations: FokomoLocation[] = [
  {
    slug: "epe",
    name: "Epe",
    area: "Lagos",
    status: "pilot",
    description:
      "Our initial community focus, serving customers and estates around Epe.",
    services: [
      "Car Wash",
      "Detailing",
      "Interior Care",
      "Mobile Car Care",
      "Vehicle Support",
    ],
  },
]

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug)
}
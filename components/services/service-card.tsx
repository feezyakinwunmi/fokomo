import { Service } from "./types"

export const services: Service[] = [
  {
    slug: "wash",
    name: "Car Wash",
    shortDescription:
      "A proper exterior clean for cars that need to look fresh without taking up your whole day.",
    description:
      "Our regular wash service keeps your vehicle clean, presentable and properly cared for. We focus on careful handling rather than rushing cars through a queue.",
    icon: "Droplets",
    priceLabel: "Pilot pricing",
    duration: "30–60 mins",
    mobileAvailable: true,
    popular: true,
    features: [
      "Exterior body wash",
      "Wheel and tyre cleaning",
      "Careful drying",
      "Glass cleaning",
      "Basic interior touch-up",
    ],
  },

  {
    slug: "detailing",
    name: "Car Detailing",
    shortDescription:
      "A deeper clean for customers who want their vehicle looking and feeling significantly better.",
    description:
      "Our detailing service goes beyond a regular wash. We give greater attention to the exterior and interior surfaces of your vehicle to restore a cleaner, more refined finish.",
    icon: "Sparkles",
    priceLabel: "Pilot pricing",
    duration: "2–4 hours",
    mobileAvailable: true,
    features: [
      "Deep exterior cleaning",
      "Interior deep cleaning",
      "Dashboard and surface care",
      "Wheel and tyre treatment",
      "Detailed finishing",
    ],
  },

  {
    slug: "interior-care",
    name: "Interior Care",
    shortDescription:
      "A focused interior clean for a fresher, more comfortable driving environment.",
    description:
      "Your car interior gets used every day. Our interior care service focuses on the areas you interact with most, helping keep your vehicle clean, comfortable and pleasant.",
    icon: "Armchair",
    priceLabel: "Pilot pricing",
    duration: "1–2 hours",
    mobileAvailable: true,
    features: [
      "Vacuuming",
      "Dashboard cleaning",
      "Seat cleaning",
      "Floor and mat cleaning",
      "Interior surface treatment",
    ],
  },

  {
    slug: "vehicle-support",
    name: "Vehicle Support",
    shortDescription:
      "Basic roadside and vehicle support when your car needs a little help.",
    description:
      "Fokomo provides selected basic vehicle support services without positioning itself as a full mechanical workshop. We help with practical issues that can get you back on the road.",
    icon: "Wrench",
    priceLabel: "Based on service",
    duration: "Varies",
    mobileAvailable: true,
    features: [
      "Jump-start assistance",
      "Battery change assistance",
      "Basic tyre support",
      "Tyre-related assistance",
      "Basic vehicle consultation",
    ],
  },

  {
    slug: "mobile-car-care",
    name: "Mobile Car Care",
    shortDescription:
      "Professional car care brought to your home, estate, workplace or another convenient location.",
    description:
      "Instead of spending your day travelling to a car wash and waiting around, Fokomo can bring selected car-care services closer to you.",
    icon: "MapPin",
    priceLabel: "Pilot pricing",
    duration: "Varies",
    mobileAvailable: true,
    popular: true,
    features: [
      "Service at your location",
      "Estate-friendly scheduling",
      "Reduced waiting time",
      "Professional service process",
      "Convenient booking",
    ],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
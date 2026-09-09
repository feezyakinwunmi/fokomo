import { services } from "@/lib/data"
import ServiceCard from "./service-card"

export default function ServiceGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  )
}
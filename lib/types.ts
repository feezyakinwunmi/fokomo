export type Service = {
  slug: string
  name: string
  shortDescription: string
  description: string
  icon: string
  priceLabel: string
  duration: string
  mobileAvailable: boolean
  popular?: boolean
  features: string[]
}
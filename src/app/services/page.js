import ServicesHero from '@/components/sections/services/ServicesHero'
import ServicesList from '@/components/sections/services/ServicesList'
import ServicesCTA from '@/components/sections/services/ServicesCTA'

export const metadata = {
  title: "Services | Aadam's Whippy Ice Cream Van Hire",
  description: "Ice cream van hire for weddings, corporate events, festivals, birthday parties, school events and private parties. Professional, insured and halal friendly.",
  keywords: "ice cream van hire services, wedding ice cream van, corporate ice cream van, festival catering, birthday party ice cream",
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </main>
  )
}

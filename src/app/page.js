import Hero from '@/components/sections/home/Hero'
import ServicesOverview from '@/components/sections/home/ServicesOverview'
import WhyUs from '@/components/sections/home/WhyUs'
import HowItWorks from '@/components/sections/home/HowItWorks'
import Testimonials from '@/components/sections/home/Testimonials'
import HomeCTA from '@/components/sections/home/HomeCTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <HomeCTA />
    </main>
  )
}

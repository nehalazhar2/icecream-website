import AboutHero from '@/components/sections/about/AboutHero'
import OurStory from '@/components/sections/about/OurStory'
import Values from '@/components/sections/about/Values'
import AboutCTA from '@/components/sections/about/AboutCTA'

export const metadata = {
  title: "About Us | Aadam's Whippy Ice Cream Van Hire",
  description: "Learn the story behind Aadam's Whippy — a family run ice cream van hire business built on quality, community and a genuine love of making people smile.",
  keywords: "ice cream van hire, about us, family business, halal ice cream, event catering",
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <Values />
      <AboutCTA />
    </main>
  )
}

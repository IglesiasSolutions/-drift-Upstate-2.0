import type { Metadata } from 'next'
import { Hero } from '@/components/sections/home/Hero'
import { TrustBar } from '@/components/sections/home/TrustBar'
import { ExperienceIntro } from '@/components/sections/home/ExperienceIntro'
import { ExperienceCards } from '@/components/sections/home/ExperienceCards'
import { Stats } from '@/components/sections/home/Stats'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { InstagramGrid } from '@/components/sections/home/InstagramGrid'
import { AudienceGrid } from '@/components/sections/home/AudienceGrid'
import { VideoSection } from '@/components/sections/home/VideoSection'
import { LocationSection } from '@/components/sections/home/LocationSection'
import { FinalCTA } from '@/components/sections/home/FinalCTA'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} — Cycle Boat Tours in the Adirondacks`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — full-screen cinematic with CTAs */}
      <Hero />

      {/* 2. Trust bar — scrolling marquee of social proof */}
      <TrustBar />

      {/* 3. Experience intro — two-column editorial section */}
      <ExperienceIntro />

      {/* 4. Experience cards — 2×2 grid of tours, dark background */}
      <ExperienceCards />

      {/* 5. Stats — GSAP animated numbers on scroll */}
      <Stats />

      {/* 6. Testimonials — auto-advancing carousel */}
      <Testimonials />

      {/* 7. Instagram grid — 6-photo social proof */}
      <InstagramGrid />

      {/* 8. Audience grid — who we serve */}
      <AudienceGrid />

      {/* 9. Video section — highlight reel with modal player */}
      <VideoSection />

      {/* 10. Location — map + contact info card */}
      <LocationSection />

      {/* 11. Final CTA — sunset background with booking push */}
      <FinalCTA />
    </>
  )
}

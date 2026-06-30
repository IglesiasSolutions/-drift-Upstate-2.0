import type { Metadata } from 'next'
import { Hero } from '@/components/sections/home/Hero'
import { TrustBar } from '@/components/sections/home/TrustBar'
import { ExperienceIntro } from '@/components/sections/home/ExperienceIntro'
import { LakeShowcase } from '@/components/sections/home/LakeShowcase'
import { ExperienceCards } from '@/components/sections/home/ExperienceCards'
import { Stats } from '@/components/sections/home/Stats'
import { ReviewsCarousel } from '@/components/sections/home/ReviewsCarousel'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { InstagramGrid } from '@/components/sections/home/InstagramGrid'
import { AudienceGrid } from '@/components/sections/home/AudienceGrid'
import { VideoSection } from '@/components/sections/home/VideoSection'
import { LocationSection } from '@/components/sections/home/LocationSection'
import { FinalCTA } from '@/components/sections/home/FinalCTA'
import WaveDivider from '@/components/ui/WaveDivider'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} — Cycle Boat Tours in the Adirondacks`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — full-screen cinematic with video background + parallax */}
      <Hero />

      {/* 2. Trust bar — scrolling marquee of social proof */}
      <TrustBar />

      {/* 3. Experience intro — editorial two-column */}
      <ExperienceIntro />

      {/* 4. Lake showcase — draggable before/after morning vs. sunset */}
      <LakeShowcase />

      {/* Wave: drift-mist → drift-navy */}
      <WaveDivider fromColor="#F5EDE0" toColor="#162C1D" />

      {/* 5. Experience cards — all 7 tour types with 3D tilt, navy background */}
      <ExperienceCards />

      {/* Wave: drift-navy → white */}
      <WaveDivider fromColor="#162C1D" toColor="#ffffff" />

      {/* 6. Stats — GSAP animated numbers on scroll */}
      <Stats />

      {/* 7. Google Reviews carousel — verified social proof */}
      <ReviewsCarousel />

      {/* 8. Testimonials — auto-advancing quote carousel */}
      <Testimonials />

      {/* 9. Instagram grid — masonry with lightbox */}
      <InstagramGrid />

      {/* 10. Audience grid — who we serve */}
      <AudienceGrid />

      {/* 11. Video section — highlight reel with modal player */}
      <VideoSection />

      {/* Wave: drift-navy → white (after video section) */}
      <WaveDivider fromColor="#162C1D" toColor="#ffffff" />

      {/* 12. Location — Google Maps + weather widget + contact info */}
      <LocationSection />

      {/* 13. Final CTA — sunset background, booking push */}
      <FinalCTA />
    </>
  )
}

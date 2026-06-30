import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/sections/shared/PageHero'
import { PreFooterCTA } from '@/components/sections/shared/PreFooterCTA'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { ABOUT_HERO, ABOUT_STORY_IMAGE } from '@/lib/media'

export const metadata: Metadata = {
  title: 'About Drift Upstate — The First Cycle Boat in the Adirondacks',
  description:
    "We're the first and only cycle boat tour company in the Adirondacks. Born in Eagle Bay, built for Fourth Lake. Learn our story, meet our team, and discover why guests keep coming back.",
  openGraph: {
    title: 'About Drift Upstate — Eagle Bay, NY',
    description:
      "The first cycle boat tour in the Adirondacks. Our story, our values, and why we love Fourth Lake.",
    images: [{ url: ABOUT_HERO, width: 1920, height: 900 }],
  },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Eagle Bay, NY"
        title="Pedal. Party. Drift."
        subtitle="The first cycle boat experience in the Adirondacks — located in beautiful Eagle Bay Village, New York."
        image={ABOUT_HERO}
        imageAlt="Drift Upstate cycle boat on Fourth Lake at golden hour"
        height="md"
        overlay="heavy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden shadow-lift-lg">
                  <Image
                    src={ABOUT_STORY_IMAGE}
                    alt="Drift Upstate cycle boat — the first in the Adirondacks"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="hidden sm:block absolute -top-5 -left-5 w-20 h-20 border-t-4 border-l-4 border-drift-gold" />
                <div className="hidden sm:block absolute -bottom-5 -right-5 bg-drift-navy text-white p-6 max-w-[200px]">
                  <p className="font-playfair text-3xl font-bold text-drift-gold">500+</p>
                  <p className="font-montserrat text-xs tracking-widest uppercase text-white/60 mt-1">
                    Guests and Counting
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block h-px w-8 bg-drift-gold" />
                  <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                    About Drift Upstate
                  </span>
                </div>
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-drift-navy leading-tight mb-6">
                  Welcome to Drift Upstate Boat Tours
                </h2>
                <div className="space-y-5 text-drift-navy/70 text-lg leading-relaxed mb-8">
                  <p>
                    We are the first cycle boat experience in the Adirondacks! We bring together
                    everything you want on the water: music, movement, relaxation, and unforgettable
                    moments with your crew.
                  </p>
                  <p>
                    Step aboard our cycle boat (pedaling optional) and enjoy a public or private tour.
                    Whether you&apos;re celebrating a birthday, family reunion, bachelor/bachelorette party,
                    or just want to get out on the water — this is your space to vibe, laugh, and
                    create memories.
                  </p>
                  <p>
                    Set in the heart of the Adirondacks, your ride takes you through the most peaceful
                    and scenic waters of the Fulton Chain of Lakes. This isn&apos;t just a boat ride —
                    it&apos;s a whole atmosphere.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" variant="primary">
                    <Link href="/tours">See Our Tours →</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline-navy">
                    <Link href="/crew">Meet the Team</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PreFooterCTA
        headline="This Isn't Just a Boat Ride."
        subheadline="It's a whole atmosphere. Book your spot and experience the Fulton Chain of Lakes the way it was meant to be seen."
        primaryCTA="Book a Tour →"
        secondaryCTA="Meet the Crew"
        secondaryHref="/crew"
      />
    </>
  )
}

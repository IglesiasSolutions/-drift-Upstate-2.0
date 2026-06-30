import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Anchor, Heart, Shield, Sparkles, Star } from 'lucide-react'
import { PageHero } from '@/components/sections/shared/PageHero'
import { PreFooterCTA } from '@/components/sections/shared/PreFooterCTA'
import { SectionHeader } from '@/components/ui/section-header'
import { ScrollReveal, Stagger, StaggerItem } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import {
  ABOUT_HERO,
  ABOUT_STORY_IMAGE,
  ABOUT_TIMELINE_1,
  ABOUT_TIMELINE_2,
  ABOUT_TIMELINE_3,
  ABOUT_TIMELINE_4,
  ABOUT_BOAT_PHOTO,
} from '@/lib/media'

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

const timeline = [
  {
    year: '01',
    title: 'Pedal-Powered Stations',
    description:
      'Fun, interactive pedal stations keep the energy going on the water. Pedaling is always optional — cruise as hard or as easy as you like.',
    image: ABOUT_TIMELINE_1,
    imageAlt: 'Guests pedaling on the Drift Upstate cycle boat',
  },
  {
    year: '02',
    title: 'Center Bar Setup',
    description:
      'Everyone stays connected around the center bar. Bring your drinks, set up your snacks in the built-in cooler, and let the good times flow.',
    image: ABOUT_TIMELINE_2,
    imageAlt: 'Center bar setup on the Drift Upstate cycle boat',
  },
  {
    year: '03',
    title: 'Relaxed Bench Seating',
    description:
      'Bench seating up front for a more relaxed vibe. Prefer to just chill and dance? No problem — this is your space.',
    image: ABOUT_TIMELINE_3,
    imageAlt: 'Guests relaxing on bench seating at the front of the Drift Upstate boat',
  },
  {
    year: '04',
    title: 'Motor-Assisted Cruising',
    description:
      'All boats are equipped with a motor, so you can cruise effortlessly while enjoying the music and the views of the Fulton Chain of Lakes.',
    image: ABOUT_TIMELINE_4,
    imageAlt: 'Drift Upstate cycle boat cruising on Fourth Lake in the Adirondacks',
  },
]

const values = [
  {
    icon: Anchor,
    title: 'Safety First, Always',
    description:
      'Every captain is Coast Guard licensed. Every guest gets a life jacket. Safety is never negotiable — and it never gets in the way of having a great time.',
  },
  {
    icon: Heart,
    title: 'Genuine Hospitality',
    description:
      "This isn't a transaction — it's an experience. We want every person who steps on this boat to leave feeling like they just had one of the best days of their summer.",
  },
  {
    icon: Star,
    title: 'Local to Our Core',
    description:
      "We live here. Our team is from here. The money you spend stays here. We're deeply invested in the Eagle Bay and Adirondacks community — not just as a business, but as neighbors.",
  },
  {
    icon: Shield,
    title: 'Respect for the Lake',
    description:
      "Fourth Lake is our home. We operate with the deepest respect for the environment, the wildlife, and the other people who share this water. Leave it better than we found it.",
  },
  {
    icon: Sparkles,
    title: 'Unforgettable Moments',
    description:
      "We're in the business of memories. Every tour, every crew member, every detail is calibrated toward one outcome: you leave with a story you're still telling years from now.",
  },
]

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

      {/* Origin Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden shadow-lift-lg">
                  <Image
                    src={ABOUT_STORY_IMAGE}
                    alt="Drift Upstate founders at Eagle Bay dock"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-5 -left-5 w-20 h-20 border-t-4 border-l-4 border-drift-gold" />
                <div className="absolute -bottom-5 -right-5 bg-drift-navy text-white p-6 max-w-[200px]">
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
                <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy leading-tight mb-6">
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

      {/* Timeline */}
      <section className="section-padding bg-drift-mist">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="How It Works"
            title="Everything You Need On the Water"
            subtitle="Our signature cycle boat is built for the experience — here's what's included on every tour."
            align="center"
            className="mb-20"
          />

          <div className="space-y-20">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0
              return (
                <ScrollReveal key={item.year} direction="up" delay={0.1}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className="relative aspect-[4/3] overflow-hidden shadow-lift">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className={isEven ? '' : 'lg:order-1'}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-playfair text-5xl font-bold text-drift-gold/20 select-none">
                          {item.year}
                        </span>
                        <div className="flex-1 h-px bg-drift-gold/20" />
                      </div>
                      <h3 className="font-playfair text-3xl text-drift-navy mb-4">{item.title}</h3>
                      <p className="font-inter text-drift-navy/65 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Boat */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block h-px w-8 bg-drift-gold" />
                  <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                    The Experience
                  </span>
                </div>
                <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy leading-tight mb-6">
                  The Location
                </h2>
                <div className="space-y-4 text-drift-navy/70 leading-relaxed mb-8">
                  <p>
                    Set in the heart of the Adirondacks, your ride takes you through the most peaceful
                    and scenic waters of the Fulton Chain of Lakes.
                  </p>
                  <p>
                    All boats are equipped with a motor, so you can cruise effortlessly while enjoying
                    the music and the views. Pedaling is always optional — this is your time to relax.
                  </p>
                  <p>
                    This isn&apos;t just a boat ride. It&apos;s a whole atmosphere.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: '14', label: 'Max Guests' },
                    { value: '90', label: 'Min Tour' },
                    { value: '★ 4.9', label: 'Google Rating' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-playfair text-3xl font-bold text-drift-gold">{stat.value}</p>
                      <p className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/40 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden shadow-lift-lg">
                <Image
                  src={ABOUT_BOAT_PHOTO}
                  alt="The Drift Upstate cycle boat at the Eagle Bay dock"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-drift-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Values"
            subtitle="The principles that guide every tour, every crew member, every decision."
            align="center"
            light
            className="mb-16"
          />
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-white/5 border border-white/10 p-8 hover:border-drift-gold/30 transition-colors duration-300">
                  <v.icon className="w-8 h-8 text-drift-gold mb-5" strokeWidth={1.5} />
                  <h3 className="font-playfair text-xl text-white mb-3">{v.title}</h3>
                  <p className="font-inter text-sm text-white/60 leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
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

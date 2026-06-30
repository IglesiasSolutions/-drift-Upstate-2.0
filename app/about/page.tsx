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
    year: '2021',
    title: 'The Idea',
    description:
      'A founder spots a cycle boat on a trip to the Finger Lakes and has a single thought: "Eagle Bay needs this." Fourth Lake is one of the most beautiful bodies of water in New York. People needed a new way to see it.',
    image: ABOUT_TIMELINE_1,
    imageAlt: 'Planning stage — maps and sketches for Drift Upstate',
  },
  {
    year: '2022',
    title: 'The Boat Arrives',
    description:
      'After months of permits, planning, and preparation — the Drift Upstate cycle boat arrives at the Eagle Bay dock for the first time. The lake was waiting.',
    image: ABOUT_TIMELINE_2,
    imageAlt: 'The Drift Upstate boat arriving at Eagle Bay dock for the first time',
  },
  {
    year: '2023',
    title: 'Opening Day',
    description:
      'Tour #1 sells out in 48 hours. By the end of the first season, we had welcomed hundreds of guests from across New York and beyond — all discovering Fourth Lake for the first time on our boat.',
    image: ABOUT_TIMELINE_3,
    imageAlt: 'Drift Upstate opening day with first guests on Fourth Lake',
  },
  {
    year: '2024+',
    title: 'Growing Every Season',
    description:
      'Repeat guests. New faces every weekend. Word of mouth spreading across the Northeast. We are still the only cycle boat experience in the Adirondacks — and we intend to keep raising the bar.',
    image: ABOUT_TIMELINE_4,
    imageAlt: 'Drift Upstate busy season with fully booked tours on Fourth Lake',
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
        eyebrow="Our Story"
        title="Born on the Lake. Built for the Adirondacks."
        subtitle="The first and only cycle boat tour experience in the Adirondack Mountains."
        image={ABOUT_HERO}
        imageAlt="Aerial view of Drift Upstate cycle boat on Fourth Lake"
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
                    Our Origin
                  </span>
                </div>
                <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy leading-tight mb-6">
                  Why Drift Upstate Exists
                </h2>
                <div className="space-y-5 text-drift-navy/70 text-lg leading-relaxed mb-8">
                  <p>
                    Eagle Bay, New York sits at the heart of one of the most spectacular lake systems
                    in the Adirondacks. Fourth Lake stretches out with a clarity that makes you stop
                    mid-sentence, framed by peaks that turn gold at sunrise and purple at dusk.
                  </p>
                  <p>
                    We looked at this and thought: people should be out there. Not just passing through
                    it or looking at it from shore — but on the water, in the middle of it, with people
                    they love, making the kind of memories that define a summer.
                  </p>
                  <p>
                    Drift Upstate was built to make that happen. We became the first cycle boat tour in
                    the Adirondacks, and we haven't looked back.
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
            eyebrow="The Journey"
            title="How We Got Here"
            subtitle="From a wild idea to the Adirondacks' most talked-about lake experience."
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
                  Meet the Boat
                </h2>
                <div className="space-y-4 text-drift-navy/70 leading-relaxed mb-8">
                  <p>
                    Our custom cycle boat seats up to 14 guests and is purpose-built for the calm,
                    clear waters of Fourth Lake. It&apos;s stable, safe, and genuinely beautiful on the
                    water.
                  </p>
                  <p>
                    Guests pedal at their own pace while the captain handles navigation and safety.
                    There&apos;s a built-in Bluetooth sound system, shade canopy, and cooler space.
                    BYOB is not just allowed — it&apos;s encouraged (cans and soft-sided coolers, please).
                  </p>
                  <p>
                    The boat departs from our dock in Eagle Bay and covers some of the most
                    breathtaking stretches of Fourth Lake during each tour.
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
            eyebrow="What We Believe"
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
        headline="Come See What the Fuss Is About."
        subheadline="Over 500 guests can't be wrong. Book a tour and experience Fourth Lake the way it was meant to be seen."
        primaryCTA="Book a Tour →"
        secondaryCTA="Meet the Crew"
        secondaryHref="/crew"
      />
    </>
  )
}

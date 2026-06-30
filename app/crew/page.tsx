import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Music, Coffee, MapPin, Anchor } from 'lucide-react'
import { PageHero } from '@/components/sections/shared/PageHero'
import { PreFooterCTA } from '@/components/sections/shared/PreFooterCTA'
import { SectionHeader } from '@/components/ui/section-header'
import { ScrollReveal, Stagger, StaggerItem } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { captains, crewMembers, certifications } from '@/data/crew'
import { CREW_HERO } from '@/lib/media'

export const metadata: Metadata = {
  title: 'Meet the Crew — The People Behind Drift Upstate',
  description:
    'Meet the Coast Guard licensed captains and crew who make every Drift Upstate tour unforgettable. Local experts, passionate guides, and genuinely great people.',
  openGraph: {
    title: 'Meet the Crew — Drift Upstate · Eagle Bay, NY',
    description:
      'Our captains and crew are Coast Guard licensed, locally rooted, and genuinely passionate about Fourth Lake. Meet the team.',
    images: [{ url: CREW_HERO, width: 1920, height: 900 }],
  },
}

export default function CrewPage() {
  return (
    <>
      <PageHero
        eyebrow="The Team"
        title="People Who Love This Lake as Much as You Will"
        subtitle="Coast Guard licensed captains. Passionate local crew. All here to make sure you leave with your best lake memory yet."
        image={CREW_HERO}
        imageAlt="Drift Upstate crew group photo at Eagle Bay dock"
        height="md"
        overlay="heavy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Meet the Crew' },
        ]}
      />

      {/* Captains */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Your Captains"
            title="The People at the Helm"
            subtitle="Every tour is led by a Coast Guard licensed captain who knows Fourth Lake by heart."
            align="center"
            className="mb-20"
          />

          <div className="space-y-24">
            {captains.map((captain, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={captain.id}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}
                  >
                    {/* Image */}
                    <ScrollReveal direction={isEven ? 'right' : 'left'}>
                      <div className={isEven ? '' : 'lg:order-2'}>
                        <div className="relative">
                          <div className="relative aspect-[3/4] overflow-hidden shadow-lift-lg">
                            <Image
                              src={captain.image}
                              alt={captain.imageAlt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </div>
                          {isEven ? (
                            <div className="absolute -top-5 -left-5 w-20 h-20 border-t-4 border-l-4 border-drift-gold" />
                          ) : (
                            <div className="absolute -top-5 -right-5 w-20 h-20 border-t-4 border-r-4 border-drift-gold" />
                          )}
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Content */}
                    <ScrollReveal direction={isEven ? 'left' : 'right'} delay={0.2}>
                      <div className={isEven ? '' : 'lg:order-1'}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="block h-px w-8 bg-drift-gold" />
                          <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                            {captain.title} · {captain.yearsOnLake} Years on the Lake
                          </span>
                        </div>
                        <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy mb-4">
                          Captain {captain.name}
                        </h2>
                        <blockquote className="font-playfair text-xl italic text-drift-gold/80 mb-6 leading-relaxed">
                          {captain.quote}
                        </blockquote>
                        <p className="font-inter text-drift-navy/70 leading-relaxed mb-8">
                          {captain.bio}
                        </p>

                        {/* Fun facts */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-drift-mist p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <Music className="w-3.5 h-3.5 text-drift-gold" strokeWidth={1.5} />
                              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                                On-Board Playlist
                              </span>
                            </div>
                            <p className="font-inter text-sm text-drift-navy/70">
                              {captain.funFacts.playlist}
                            </p>
                          </div>
                          <div className="bg-drift-mist p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <Coffee className="w-3.5 h-3.5 text-drift-gold" strokeWidth={1.5} />
                              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                                Morning Coffee
                              </span>
                            </div>
                            <p className="font-inter text-sm text-drift-navy/70">
                              {captain.funFacts.coffee}
                            </p>
                          </div>
                          <div className="bg-drift-mist p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <MapPin className="w-3.5 h-3.5 text-drift-gold" strokeWidth={1.5} />
                              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                                Favorite Trail
                              </span>
                            </div>
                            <p className="font-inter text-sm text-drift-navy/70">
                              {captain.funFacts.trail}
                            </p>
                          </div>
                          <div className="bg-drift-mist p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <Star className="w-3.5 h-3.5 text-drift-gold" strokeWidth={1.5} />
                              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                                Favorite Spot
                              </span>
                            </div>
                            <p className="font-inter text-sm text-drift-navy/70">
                              {captain.funFacts.favoriteSpot}
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Divider between captains */}
                  {i < captains.length - 1 && (
                    <div className="mt-24 border-t border-drift-navy/8" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Crew grid */}
      <section className="section-padding bg-drift-mist">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Full Crew"
            title="The Rest of the Dream Team"
            subtitle="Behind every great tour is a crew that makes it look effortless."
            align="center"
            className="mb-16"
          />

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.08}>
            {crewMembers.map((member) => (
              <StaggerItem key={member.id}>
                <div className="group text-center">
                  <div className="relative aspect-square overflow-hidden mb-5">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-drift-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-playfair text-xl text-drift-navy mb-1">{member.name}</h3>
                  <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-3">
                    {member.role}
                  </p>
                  <p className="font-inter text-sm italic text-drift-navy/55">{member.quote}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-drift-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Safety & Credentials"
            title="You're in Good Hands"
            subtitle="Our entire captain roster holds these certifications — because your safety is non-negotiable."
            align="center"
            light
            className="mb-16"
          />
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {certifications.map((cert) => (
              <StaggerItem key={cert.label}>
                <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 p-8 hover:border-drift-gold/30 transition-colors duration-300">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <Anchor className="w-6 h-6 text-drift-gold mb-3" strokeWidth={1.5} />
                  <p className="font-inter text-sm text-white/70 leading-relaxed">{cert.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Join the crew CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="block h-px w-10 bg-drift-gold" />
              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                Join the Team
              </span>
              <span className="block h-px w-10 bg-drift-gold" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy mb-6">
              We&apos;re Always Looking for Great People
            </h2>
            <p className="font-inter text-lg text-drift-navy/65 leading-relaxed mb-8">
              If you love the water, love people, and think a summer spent on Fourth Lake sounds like
              the best job in New York — we want to hear from you.
            </p>
            <Button asChild size="xl" variant="primary">
              <Link href="/contact?subject=crew">Get in Touch →</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <PreFooterCTA
        headline="Ready to Meet Us in Person?"
        subheadline="The best way to meet the crew is on the water. Book a tour and we'll take care of the rest."
        primaryCTA="Book a Tour →"
        secondaryCTA="View All Tours"
        secondaryHref="/tours"
      />
    </>
  )
}

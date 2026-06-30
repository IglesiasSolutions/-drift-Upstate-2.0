import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Anchor } from 'lucide-react'
import { PageHero } from '@/components/sections/shared/PageHero'
import { PreFooterCTA } from '@/components/sections/shared/PreFooterCTA'
import { SectionHeader } from '@/components/ui/section-header'
import { ScrollReveal, Stagger, StaggerItem } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { teamMembers, teamIntro, certifications } from '@/data/crew'
import { CREW_HERO } from '@/lib/media'

export const metadata: Metadata = {
  title: 'Our Team — Drift Upstate Boat Tours',
  description:
    'Meet the Larrea family — the owned and operated family business behind Drift Upstate Boat Tours on the Fulton chain of lakes.',
  openGraph: {
    title: 'Our Team — Drift Upstate · Eagle Bay, NY',
    description:
      'Meet the Larrea family — the owned and operated family business behind Drift Upstate Boat Tours.',
    images: [{ url: CREW_HERO, width: 1920, height: 900 }],
  },
}

const owners = teamMembers.slice(0, 2)   // Nate + Brittany
const mates  = teamMembers.slice(2)      // Vannalee + Solay

export default function CrewPage() {
  return (
    <>
      <PageHero
        eyebrow="The Team"
        title="Our Team"
        subtitle={teamIntro}
        image={CREW_HERO}
        imageAlt="The Larrea family on the Drift Upstate boat at golden hour"
        height="md"
        overlay="heavy"
        imagePosition="50% 60%"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Team' },
        ]}
      />

      {/* Owners — Nate & Brittany */}
      <section className="section-padding bg-drift-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {owners.map((member, i) => {
              const isEven = i % 2 === 0
              return (
                <ScrollReveal key={member.id} direction="up" delay={0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className="relative aspect-[3/4] overflow-hidden shadow-lift-lg">
                        <Image
                          src={member.image}
                          alt={member.imageAlt}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className={isEven ? '' : 'lg:order-1'}>
                      <h2 className="font-playfair text-3xl md:text-4xl text-white mb-2">
                        {member.name}
                      </h2>
                      <p className="font-montserrat text-sm tracking-widest uppercase text-drift-gold mb-6">
                        {member.role}
                      </p>
                      <p className="font-inter text-white/70 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  {i < owners.length - 1 && (
                    <div className="mt-20 border-t border-white/10" />
                  )}
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mates — Vannalee, Solay & Baby Larrea */}
      <section className="section-padding bg-drift-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="block h-px w-10 bg-drift-gold flex-shrink-0" />
            <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
              First, Second &amp; Third Mate
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {mates.map((member) => (
              <ScrollReveal key={member.id} direction="up" delay={0.1}>
                <div className="relative aspect-square overflow-hidden mb-6 shadow-lift-lg">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-1">
                  {member.name}
                </h3>
                <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-4">
                  {member.role}
                </p>
                <p className="font-inter text-white/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </ScrollReveal>
            ))}

            {/* Third Mate — Coming Soon */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="relative aspect-square mb-6 border-2 border-dashed border-drift-gold/30 flex flex-col items-center justify-center gap-4 bg-white/3">
                <span className="text-5xl">⚓</span>
                <div className="text-center px-4">
                  <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-1">
                    Coming Soon
                  </p>
                  <p className="font-playfair text-lg text-white/60 italic leading-snug">
                    A new crew member<br />is on the way
                  </p>
                </div>
              </div>
              <h3 className="font-playfair text-2xl text-white mb-1">
                Baby Larrea
              </h3>
              <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-4">
                Third Mate · Arriving Soon
              </p>
              <p className="font-inter text-white/70 text-sm leading-relaxed">
                The Larrea crew is growing! The newest member is still getting their sea legs, but we have a feeling they&apos;re going to love it out here on Fourth Lake just as much as the rest of the family.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Safety & Credentials"
            title="You're in Good Hands"
            subtitle="Our entire captain roster holds these certifications — because your safety is non-negotiable."
            align="center"
            className="mb-16"
          />
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {certifications.map((cert) => (
              <StaggerItem key={cert.label}>
                <div className="flex flex-col items-center text-center bg-drift-mist border border-drift-navy/10 p-8 hover:border-drift-gold/40 transition-colors duration-300">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <Anchor className="w-6 h-6 text-drift-gold mb-3" strokeWidth={1.5} />
                  <p className="font-inter text-sm text-drift-navy/70 leading-relaxed">{cert.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Join the crew CTA */}
      <section className="section-padding bg-drift-mist">
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

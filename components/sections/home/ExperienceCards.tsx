'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { SectionHeader } from '@/components/ui/section-header'
import { Stagger, StaggerItem } from '@/components/ui/scroll-reveal'
import TiltCard from '@/components/ui/TiltCard'
import MagneticButton from '@/components/ui/MagneticButton'
import { tours, type TourData } from '@/data/tours'

export function ExperienceCards() {
  return (
    <section
      id="experiences"
      className="section-padding bg-drift-navy"
      aria-label="Our tour experiences"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Choose Your Adventure"
          title="Find Your Perfect Tour."
          subtitle="From peaceful morning cruises to festive evening celebrations — every experience is unforgettable."
          light
        />

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {tours.map((tour) => (
            <StaggerItem key={tour.slug}>
              <TourCard tour={tour} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="text-center mt-14">
          <MagneticButton strength={0.3}>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 font-montserrat text-xs tracking-widest uppercase text-drift-gold hover:text-white transition-colors border border-drift-gold/40 hover:border-white/40 px-10 py-4 hover-gold-glow"
            >
              View All Tours &amp; Pricing <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}

function TourCard({ tour }: { tour: TourData }) {
  return (
    <Link href={`/tours/${tour.slug}`} className="block group" aria-label={`${tour.name} — ${tour.type}`}>
      <TiltCard maxTilt={7} glare className="relative aspect-[4/3] shadow-lift">
        {/* Background image */}
        <Image
          src={tour.cardImage}
          alt={tour.cardImageAlt}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-card-gradient" />

        {/* Gold border reveal on hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-drift-gold/60 transition-all duration-500" />

        {/* Price badge — top right */}
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="glass">{tour.badge}</Badge>
        </div>

        {/* Tour type — top left */}
        <div className="absolute top-4 left-4 z-10">
          <span className="font-montserrat text-xs tracking-widest uppercase text-white/70">
            {tour.type}
          </span>
        </div>

        {/* Content — bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-3.5 h-3.5 text-drift-gold" strokeWidth={1.5} />
            <span className="font-montserrat text-xs text-white/70 tracking-wide">
              {tour.duration}
            </span>
          </div>

          <h3 className="font-playfair text-2xl md:text-3xl text-white mb-2 leading-snug group-hover:text-drift-gold transition-colors duration-300">
            {tour.name}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
            {tour.tagline}
          </p>

          {/* CTA arrow — reveals on hover */}
          <div className="flex items-center gap-2 text-drift-gold font-montserrat text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span>Explore Tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </TiltCard>
    </Link>
  )
}

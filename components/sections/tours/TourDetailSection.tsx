'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Users, CheckCircle, Star, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal, Stagger, StaggerItem } from '@/components/ui/scroll-reveal'
import type { TourData } from '@/data/tours'

interface TourDetailSectionProps {
  tour: TourData
  index: number
}

export function TourDetailSection({ tour, index }: TourDetailSectionProps) {
  const isEven = index % 2 === 0

  return (
    <section
      id={tour.slug}
      className={`section-padding ${isEven ? 'bg-white' : 'bg-drift-mist'}`}
      aria-label={tour.name}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
            isEven ? '' : 'lg:flex-row-reverse'
          }`}
        >
          {/* ── Image column ── */}
          <ScrollReveal direction={isEven ? 'right' : 'left'} delay={0.1}>
            <div className={`${isEven ? '' : 'lg:order-2'}`}>
              <div className="relative">
                {/* Main image */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[4/3] overflow-hidden shadow-lift-lg"
                >
                  <Image
                    src={tour.heroImage}
                    alt={tour.heroImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>

                {/* Floating price badge */}
                <div className="absolute -bottom-5 -right-5 bg-drift-navy text-white p-5 shadow-lift">
                  <p className="font-playfair text-2xl font-bold text-drift-gold">
                    {tour.priceFrom}
                  </p>
                  <p className="font-montserrat text-xs tracking-widest uppercase text-white/60 mt-0.5">
                    {tour.priceNote}
                  </p>
                </div>

                {/* Gold accent */}
                {isEven ? (
                  <div className="absolute -top-5 -left-5 w-20 h-20 border-t-4 border-l-4 border-drift-gold" />
                ) : (
                  <div className="absolute -top-5 -right-5 w-20 h-20 border-t-4 border-r-4 border-drift-gold" />
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Content column ── */}
          <ScrollReveal direction={isEven ? 'left' : 'right'} delay={0.2}>
            <div className={`${isEven ? '' : 'lg:order-1'}`}>
              {/* Type label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="block h-px w-8 bg-drift-gold" />
                <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                  {tour.type}
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy leading-tight mb-4">
                {tour.name}
              </h2>
              <p className="font-playfair italic text-xl text-drift-navy/60 mb-6">
                {tour.headline}
              </p>

              {/* Duration + Capacity */}
              <div className="flex items-center gap-6 mb-7">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-drift-gold" strokeWidth={1.5} />
                  <span className="font-inter text-sm text-drift-navy/70">{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-drift-gold" strokeWidth={1.5} />
                  <span className="font-inter text-sm text-drift-navy/70">{tour.capacity}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-drift-navy/70 text-base leading-relaxed mb-8">
                {tour.detailCopy.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Inclusions preview */}
              <Stagger className="space-y-2.5 mb-8" staggerDelay={0.06}>
                {tour.inclusions.slice(0, 4).map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="w-4 h-4 text-drift-gold mt-0.5 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      <span className="font-inter text-sm text-drift-navy/75">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              {/* Pro tip */}
              {tour.proTip && (
                <div className="flex items-start gap-3 bg-drift-gold/10 border border-drift-gold/25 p-4 mb-8">
                  <Info className="w-4 h-4 text-drift-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <p className="font-inter text-sm text-drift-navy/80 italic">{tour.proTip}</p>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" variant="primary">
                  <Link href={`/book?tour=${tour.slug}`}>{tour.ctaText} →</Link>
                </Button>
                <Button asChild size="lg" variant="outline-navy">
                  <Link href={`/tours/${tour.slug}`}>Full Details</Link>
                </Button>
              </div>

              {/* Testimonial snippet */}
              <div className="mt-8 pt-8 border-t border-drift-navy/10">
                <div className="flex items-start gap-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-drift-gold text-drift-gold" />
                    ))}
                  </div>
                  <div>
                    <p className="font-inter text-sm italic text-drift-navy/70">
                      &ldquo;{tour.testimonialQuote.slice(0, 120)}...&rdquo;
                    </p>
                    <p className="font-montserrat text-xs tracking-wide text-drift-navy/45 mt-1.5">
                      {tour.testimonialAuthor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

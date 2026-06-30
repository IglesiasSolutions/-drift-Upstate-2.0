'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Users, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { SectionHeader } from '@/components/ui/section-header'
import { Stagger, StaggerItem } from '@/components/ui/scroll-reveal'

const tours = [
  {
    id: 'public',
    name: 'The Classic Drift',
    type: 'Public Tour',
    tagline: 'Join fellow adventurers for a scenic cruise on Fourth Lake.',
    duration: '90 min',
    badge: 'From $35 / person',
    href: '/tours/public',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Group enjoying the public cycle boat tour on Fourth Lake',
  },
  {
    id: 'private',
    name: 'Your Boat. Your Moment.',
    type: 'Private Charter',
    tagline: 'Reserve the entire boat for your group — birthdays, proposals, or just because.',
    duration: '90–120 min',
    badge: 'Private · Inquire',
    href: '/tours/private',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Couple on a private charter at golden hour on the Adirondack lake',
  },
  {
    id: 'coffee',
    name: 'Morning on the Lake',
    type: 'Coffee Cruise',
    tagline: 'Start your day the Adirondack way — fresh air, calm water, great coffee.',
    duration: '60 min',
    badge: 'From $30 / person',
    href: '/tours/coffee-cruise',
    image:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Peaceful morning on Fourth Lake with mist rising off the water',
  },
  {
    id: 'ladies',
    name: 'The Girls Are Back in Town.',
    type: 'Ladies Night',
    tagline: 'Bachelorette parties, birthday celebrations, or just a night out on the water.',
    duration: '90 min',
    badge: 'From $45 / person',
    href: '/tours/ladies-night',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Women celebrating on a sunset cruise on Fourth Lake',
  },
]

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
            <StaggerItem key={tour.id}>
              <TourCard tour={tour} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function TourCard({ tour }: { tour: (typeof tours)[0] }) {
  return (
    <Link href={tour.href} className="block group" aria-label={`${tour.name} — ${tour.type}`}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer shadow-lift"
      >
        {/* Background image */}
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-card-gradient" />

        {/* Gold border on hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-drift-gold/60 transition-all duration-300 rounded-sm" />

        {/* Badge — top right */}
        <div className="absolute top-4 right-4">
          <Badge variant="glass">{tour.badge}</Badge>
        </div>

        {/* Tour type badge — top left */}
        <div className="absolute top-4 left-4">
          <span className="font-montserrat text-xs tracking-widest uppercase text-white/70">
            {tour.type}
          </span>
        </div>

        {/* Content — bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
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

          {/* CTA */}
          <div className="flex items-center gap-2 text-drift-gold font-montserrat text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

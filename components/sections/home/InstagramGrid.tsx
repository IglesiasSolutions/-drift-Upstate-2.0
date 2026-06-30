'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { siteConfig } from '@/config/site'

/* Replace these with real Instagram embed URLs or Elfsight widget */
const posts = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1488188840666-e2308741a62f?auto=format&fit=crop&w=600&q=80',
    alt: 'Cycle boat tour group on Fourth Lake at golden hour',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    alt: 'Breathtaking Adirondack mountains reflecting on Fourth Lake',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80',
    alt: 'Aerial view of Fourth Lake with our cycle boat',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
    alt: 'Morning mist rising off the Adirondack lake during a coffee cruise',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    alt: 'Sunset cruise view from the cycle boat on Fourth Lake',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?auto=format&fit=crop&w=600&q=80',
    alt: 'Happy guests celebrating on the private charter',
  },
]

export function InstagramGrid() {
  return (
    <section
      className="section-padding bg-white"
      aria-label="Instagram gallery"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="block h-px w-10 bg-drift-gold" />
              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                Follow the Adventure
              </span>
              <span className="block h-px w-10 bg-drift-gold" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy">
              Life Looks Better From the Water
            </h2>
            <p className="mt-3 text-drift-navy/60 font-inter">
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-drift-gold transition-colors"
              >
                {siteConfig.social.instagramHandle}
              </Link>
              {' '}— Tag us in your adventures
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-1.5">
          {posts.map((post, i) => (
            <a
              key={post.id}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View on Instagram: ${post.alt}`}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-drift-navy/0 group-hover:bg-drift-navy/40 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={1.5} />
                </div>
              </motion.div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mt-10">
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-montserrat text-xs tracking-widest uppercase text-drift-navy hover:text-drift-gold transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              Follow @driftupstate →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

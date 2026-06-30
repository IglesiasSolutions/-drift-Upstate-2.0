'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/types'

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Best experience of our entire Adirondacks trip. The crew was incredible, the views were stunning, and we laughed the entire time. Already planning our return trip next summer.',
    author: 'Sarah M.',
    location: 'Albany, NY',
    source: 'google',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'We did the Coffee Cruise on a misty morning and it was absolutely magical — the kind of experience you only find when you step off the beaten path. Cannot recommend enough.',
    author: 'James & Lisa T.',
    location: 'New York City',
    source: 'google',
    rating: 5,
  },
  {
    id: '3',
    quote:
      "Booked a private charter for my bachelorette and it exceeded every expectation. Captain was hilarious, the boat was amazing, and Fourth Lake is absolutely breathtaking at sunset.",
    author: 'Megan K.',
    location: 'Syracuse, NY',
    source: 'google',
    rating: 5,
  },
  {
    id: '4',
    quote:
      "We brought our kids (ages 8 and 11) and it was perfect for the whole family. They loved pedaling, we loved the scenery. One of those rare activities that works for everyone.",
    author: 'The Rodriguez Family',
    location: 'Boston, MA',
    source: 'google',
    rating: 5,
  },
  {
    id: '5',
    quote:
      "I've been to the Adirondacks a dozen times and this was the highlight of every single trip. Nothing compares to seeing Fourth Lake from a cycle boat with a great crew.",
    author: 'David P.',
    location: 'Burlington, VT',
    source: 'google',
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = testimonials.length

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + total) % total)
  }, [total])

  /* Auto-advance every 6s, pause logic handled by hover */
  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const t = testimonials[current]

  return (
    <section
      className="section-padding bg-drift-mist"
      aria-label="Customer testimonials"
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="What People Are Saying"
          title="Don't take our word for it."
        />

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={t.id}
              custom={direction}
              variants={{
                enter:  (d: number) => ({ opacity: 0, x: d * 40 }),
                center: { opacity: 1, x: 0 },
                exit:   (d: number) => ({ opacity: 0, x: d * -40 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-7" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-drift-gold text-drift-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-playfair text-xl sm:text-2xl md:text-3xl text-drift-navy leading-relaxed italic mb-8 max-w-3xl mx-auto">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <footer className="flex flex-col items-center gap-2">
                <cite className="not-italic font-montserrat text-sm font-semibold text-drift-navy tracking-wide">
                  — {t.author}
                </cite>
                <span className="font-inter text-xs text-drift-navy/50">
                  {t.location} &nbsp;·&nbsp;{' '}
                  <span className="capitalize">{t.source} Review</span>
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Arrow controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-drift-navy/20 flex items-center justify-center text-drift-navy hover:border-drift-gold hover:text-drift-gold transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={cn(
                    'rounded-full transition-all duration-300',
                    i === current
                      ? 'w-6 h-2.5 bg-drift-gold'
                      : 'w-2.5 h-2.5 bg-drift-navy/25 hover:bg-drift-gold/50'
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-drift-navy/20 flex items-center justify-center text-drift-navy hover:border-drift-gold hover:text-drift-gold transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Google Reviews link */}
        <div className="text-center mt-10">
          <Link
            href="https://g.page/r/driftupstate/review"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/60 hover:text-drift-gold transition-colors underline-offset-4 hover:underline"
          >
            Read All Reviews on Google →
          </Link>
        </div>
      </div>
    </section>
  )
}

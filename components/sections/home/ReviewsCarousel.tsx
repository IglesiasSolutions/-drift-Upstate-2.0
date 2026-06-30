'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const reviews = [
  {
    id: 'r1',
    author: 'Jessica R.',
    initials: 'JR',
    color: 'bg-drift-navy',
    rating: 5,
    relative: 'June 28, 2026',
    text: "Captain Nate is an absolute blast — had the 80s music pumping the whole ride and the whole boat was singing along within minutes. Fourth Lake at sunset was stunning. Best 90 minutes of our entire Adirondack trip. We'll be back next summer for sure!",
  },
  {
    id: 'r2',
    author: 'Mike & Donna T.',
    initials: 'MT',
    color: 'bg-drift-forest',
    rating: 5,
    relative: 'June 21, 2026',
    text: "Took the whole family out — our kids are 8 and 11 — and everyone had the time of their lives. The captain was so patient and fun with them. The views of the mountains and the lake are just breathtaking. Already planning to book again before summer's over.",
  },
  {
    id: 'r3',
    author: 'Kayla M.',
    initials: 'KM',
    color: 'bg-drift-navy',
    rating: 5,
    relative: 'June 14, 2026',
    text: 'Booked a private charter for my bachelorette weekend and it was absolutely perfect. Beautiful boat, beautiful lake, and the crew made us feel like VIPs. Every single one of my girls is still talking about it. If you\'re in the Adirondacks, this is a non-negotiable.',
  },
  {
    id: 'r4',
    author: 'Tom & Amy S.',
    initials: 'TS',
    color: 'bg-drift-forest',
    rating: 5,
    relative: 'June 7, 2026',
    text: "First time on a cycle boat and we were instantly obsessed. Such a unique way to see Fourth Lake — the music, the scenery, the breeze off the water. The whole vibe was just incredible. Do not sleep on this if you're spending any time in Eagle Bay.",
  },
]

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export function ReviewsCarousel() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const total = reviews.length

  const next = useCallback(() => { setDir(1); setCurrent((c) => (c + 1) % total) }, [total])
  const prev = useCallback(() => { setDir(-1); setCurrent((c) => (c - 1 + total) % total) }, [total])

  useEffect(() => {
    const id = setInterval(next, 7000)
    return () => clearInterval(id)
  }, [next])

  const r = reviews[current]

  return (
    <section className="section-padding bg-white" aria-label="Google customer reviews">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block h-px w-8 bg-drift-gold" />
              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                Verified Reviews
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-drift-navy leading-tight">
              What Guests Are Saying
            </h2>
          </div>

          <Link
            href="https://g.page/r/driftupstate/review"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-4 border border-drift-navy/10 px-6 py-4 hover:border-drift-gold/30 transition-colors"
          >
            <GoogleLogo className="w-7 h-7" />
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <p className="font-inter text-xs text-drift-navy/50 mt-0.5">Leave us a review</p>
            </div>
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={r.id}
              custom={dir}
              variants={{
                enter:  (d: number) => ({ opacity: 0, x: d * 60 }),
                center: { opacity: 1, x: 0 },
                exit:   (d: number) => ({ opacity: 0, x: d * -60 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-drift-mist p-8 md:p-12"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className={cn('w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0', r.color)}>
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-drift-navy text-sm">{r.author}</p>
                    <p className="font-inter text-xs text-drift-navy/40">{r.relative}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
              </div>

              <blockquote className="font-playfair text-xl md:text-2xl text-drift-navy/80 italic leading-relaxed mb-6">
                &ldquo;{r.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-2">
                <GoogleLogo className="w-4 h-4" />
                <span className="font-inter text-xs text-drift-navy/40">Posted on Google</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
                className={cn(
                  'rounded-full transition-all duration-300',
                  i === current
                    ? 'w-6 h-2 bg-drift-gold'
                    : 'w-2 h-2 bg-drift-navy/20 hover:bg-drift-gold/50'
                )}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={prev} className="w-9 h-9 border border-drift-navy/15 flex items-center justify-center hover:border-drift-gold hover:text-drift-gold transition-all">
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button onClick={next} className="w-9 h-9 border border-drift-navy/15 flex items-center justify-center hover:border-drift-gold hover:text-drift-gold transition-all">
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="https://g.page/r/driftupstate/review"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 hover:text-drift-gold transition-colors"
          >
            Leave a Review on Google →
          </Link>
        </div>
      </div>
    </section>
  )
}

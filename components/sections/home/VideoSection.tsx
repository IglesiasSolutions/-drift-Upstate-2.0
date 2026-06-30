'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

import { VIDEO_THUMBNAIL, VIDEO_HIGHLIGHT_REEL_ID } from '@/lib/media'

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section
      className="section-padding bg-drift-navy relative overflow-hidden"
      aria-label="Watch our highlight reel"
    >
      {/* Background texture — subtle dot grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(201,168,76,0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="block h-px w-10 bg-drift-gold/60" />
              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                See It For Yourself
              </span>
              <span className="block h-px w-10 bg-drift-gold/60" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              See What the Hype Is About.
            </h2>
          </div>
        </ScrollReveal>

        {/* Video Thumbnail */}
        <ScrollReveal direction="up" delay={0.15}>
          <div
            className="relative aspect-video rounded-sm overflow-hidden shadow-lift-lg cursor-pointer group"
            onClick={() => setIsPlaying(true)}
            role="button"
            tabIndex={0}
            aria-label="Play Drift Upstate highlight video"
            onKeyDown={(e) => e.key === 'Enter' && setIsPlaying(true)}
          >
            {/* Thumbnail image */}
            <Image
              src={VIDEO_THUMBNAIL}
              alt="Drone aerial view of Fourth Lake with the Drift Upstate cycle boat — click to play video"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-drift-navy/50 group-hover:bg-drift-navy/40 transition-all duration-300" />

            {/* Headline over thumbnail */}
            <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 text-center">
              <p className="font-playfair text-white text-xl md:text-2xl italic mb-8 opacity-70">
                90 seconds that will convince you to book right now.
              </p>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-drift-gold flex items-center justify-center shadow-lift-lg"
              >
                <Play className="w-8 h-8 text-drift-navy fill-drift-navy ml-1" />
              </motion.div>
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white font-montserrat text-xs tracking-wide px-2.5 py-1 rounded">
              1:30
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_HIGHLIGHT_REEL_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Drift Upstate — Adirondack Cycle Boat Tour Highlight Reel"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full rounded-sm"
              />
              <button
                onClick={() => setIsPlaying(false)}
                aria-label="Close video"
                className="absolute -top-12 right-0 text-white hover:text-drift-gold transition-colors p-2"
              >
                <X className="w-7 h-7" strokeWidth={1.5} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

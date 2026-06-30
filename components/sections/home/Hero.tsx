'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

/* ── Animation variants ───────────────────────────────────────── */
const fadeUp = (delay: number) => ({
  initial:  { opacity: 0, y: 32 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-end overflow-hidden"
      aria-label="Hero — Drift Upstate Boat Tours"
    >
      {/* ── Background Image (replace src with real drone footage still) ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85"
          alt="Fourth Lake, Adirondack Mountains — Eagle Bay, New York"
          fill
          priority
          quality={90}
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
      </div>

      {/* ── Cinematic gradient overlay ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-drift-navy/55 via-drift-navy/20 to-drift-navy/85" />

      {/* ── Subtle animated grain texture overlay ── */}
      <div
        className="absolute inset-0 z-10 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* ── Hero Content — lower third ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 pb-28 md:pb-36 text-center text-white">
        {/* Eyebrow */}
        <motion.div
          {...fadeUp(0.2)}
          className="flex items-center justify-center gap-4 mb-7"
        >
          <span className="block h-px w-10 sm:w-16 bg-drift-gold/80" />
          <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
            {siteConfig.location.city}, {siteConfig.location.stateAbbr} &nbsp;·&nbsp; The {siteConfig.location.region}
          </span>
          <span className="block h-px w-10 sm:w-16 bg-drift-gold/80" />
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.38)}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 text-balance"
        >
          The First Cycle Boat Tour
          <br />
          <em className="italic text-drift-gold/95">in the Adirondacks.</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.54)}
          className="font-inter text-lg sm:text-xl md:text-2xl text-white/75 mb-11 max-w-2xl mx-auto font-light"
        >
          {siteConfig.subTagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.68)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="xl" variant="primary">
            <Link href="/book">Book Your Tour →</Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link href="#experiences">See Experiences ↓</Link>
          </Button>
        </motion.div>

        {/* Trust micro-line */}
        <motion.p
          {...fadeUp(0.82)}
          className="mt-8 font-montserrat text-xs tracking-widest uppercase text-white/45"
        >
          ✓ Easy booking &nbsp;&nbsp;·&nbsp;&nbsp; ✓ Instant confirmation &nbsp;&nbsp;·&nbsp;&nbsp; ✓ Free cancellation
        </motion.p>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce-gentle"
      >
        <ChevronDown className="w-6 h-6 text-drift-gold" strokeWidth={1.5} />
      </motion.div>
    </section>
  )
}

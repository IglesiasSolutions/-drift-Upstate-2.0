'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import MagneticButton from '@/components/ui/MagneticButton'
import { SunsetCountdown } from '@/components/sections/home/SunsetCountdown'
import { siteConfig } from '@/config/site'
import {
  HOME_HERO_BACKGROUND,
  HOME_HERO_VIDEO_MP4,
  HOME_HERO_VIDEO_WEBM,
} from '@/lib/media'

const fadeUp = (delay: number) => ({
  initial:  { opacity: 0, y: 32 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  // Defer video load until after LCP image has painted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src = HOME_HERO_VIDEO_MP4
        videoRef.current.load()
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Cinematic parallax — background moves slower than the scroll
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 28,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-end overflow-hidden"
      aria-label="Hero — Drift Upstate Boat Tours"
    >
      {/* ── Parallax background layer ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 parallax-layer"
        style={{ top: '-15%', bottom: '-15%' }}
      >
        {/* LCP Image — always renders, handles CLS */}
        <Image
          src={HOME_HERO_BACKGROUND}
          alt="Fourth Lake, Adirondack Mountains — Eagle Bay, New York"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Cinematic video (fades in after load, deferred 2s for LCP) */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={HOME_HERO_BACKGROUND}
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 z-[1] w-full h-full object-cover transition-opacity duration-1500 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          <source src={HOME_HERO_VIDEO_WEBM} type="video/webm" />
          <source src={HOME_HERO_VIDEO_MP4} type="video/mp4" />
        </video>
      </div>

      {/* ── Cinematic gradient overlays ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-drift-navy/60 via-drift-navy/10 to-drift-navy/90" />

      {/* Subtle horizontal vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-drift-navy/20 via-transparent to-drift-navy/20" />

      {/* Film grain for cinematic texture */}
      <div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />

      {/* ── Hero Content — lower third ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 pb-24 md:pb-32 text-center text-white">
        {/* Season badge */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 bg-drift-gold/15 border border-drift-gold/30 backdrop-blur-sm px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 bg-drift-gold rounded-full animate-pulse" />
          <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
            {siteConfig.season.year} Season Now Open &nbsp;·&nbsp; {siteConfig.location.city}, {siteConfig.location.stateAbbr}
          </span>
        </motion.div>

        {/* H1 — layered entrance */}
        <motion.h1
          {...fadeUp(0.28)}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 text-balance"
        >
          The First Cycle Boat Tour
          <br />
          <em className="italic text-drift-gold/95">in the Adirondacks.</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.44)}
          className="font-inter text-lg sm:text-xl md:text-2xl text-white/75 mb-10 max-w-2xl mx-auto font-light"
        >
          {siteConfig.subTagline}
        </motion.p>

        {/* CTAs with magnetic attraction */}
        <motion.div
          {...fadeUp(0.58)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <MagneticButton strength={0.35} radius={100}>
            <Button asChild size="xl" variant="primary" className="hover-gold-glow">
              <Link href="/book">Book Your Tour →</Link>
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.25} radius={80}>
            <Button asChild size="xl" variant="outline">
              <Link href="#experiences">See Experiences ↓</Link>
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Trust micro-line */}
        <motion.p
          {...fadeUp(0.70)}
          className="font-montserrat text-xs tracking-widest uppercase text-white/45 mb-8"
        >
          ✓ Easy booking &nbsp;&nbsp;·&nbsp;&nbsp; ✓ Instant confirmation &nbsp;&nbsp;·&nbsp;&nbsp; ✓ Free cancellation (48+ hrs)
        </motion.p>

        {/* Live sunset countdown */}
        <motion.div {...fadeUp(0.80)}>
          <SunsetCountdown />
        </motion.div>
      </div>

      {/* ── Animated scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-drift-gold/70" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}

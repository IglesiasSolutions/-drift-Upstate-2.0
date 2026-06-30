'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarDays, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PromoConfig {
  badge: string
  headline: string
  subheadline: string
  cta: string
  href: string
  expires?: Date
}

function getActivePromo(): PromoConfig {
  const now = new Date()
  const month = now.getMonth()

  if (month >= 5 && month <= 7) {
    return {
      badge: 'Peak Season',
      headline: 'Summer 2026 is filling fast.',
      subheadline: 'July & August weekends are booking out 3 weeks in advance. Lock in your date now.',
      cta: 'Check Availability →',
      href: '/book',
      expires: new Date(now.getFullYear(), 8, 1),
    }
  }
  if (month === 8 || month === 9) {
    return {
      badge: 'Fall Foliage Season',
      headline: 'Fall on Fourth Lake is something else entirely.',
      subheadline: 'September and October bring the Adirondacks to their most spectacular. Limited availability.',
      cta: 'Book Fall Tour →',
      href: '/book',
      expires: new Date(now.getFullYear(), 10, 1),
    }
  }
  if (month >= 10 || month <= 1) {
    return {
      badge: '2026 Season Preview',
      headline: 'Early access: 2026 tours are open for booking.',
      subheadline: "Don't wait for summer — our best slots are taken by guests who plan ahead.",
      cta: 'Reserve Early →',
      href: '/book',
    }
  }
  return {
    badge: 'Now Booking',
    headline: 'The season is almost here.',
    subheadline: 'Spring and early summer slots are filling up. Reserve your date before it disappears.',
    cta: 'Book Now →',
    href: '/book',
  }
}

export function SeasonalPromo() {
  const [dismissed, setDismissed] = useState(true) // start hidden, check localStorage
  const [promo, setPromo] = useState<PromoConfig | null>(null)

  useEffect(() => {
    const key = 'drift-promo-dismissed-2026-v2'
    const isDismissed = localStorage.getItem(key) === 'true'
    if (!isDismissed) {
      setDismissed(false)
      setPromo(getActivePromo())
    }
  }, [])

  function dismiss() {
    setDismissed(true)
    localStorage.setItem('drift-promo-dismissed-2026-v2', 'true')
  }

  if (dismissed || !promo) return null

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-drift-gold/10 border-b border-drift-gold/25 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start md:items-center gap-4 flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Sparkles className="w-4 h-4 text-drift-gold" strokeWidth={1.5} />
              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold whitespace-nowrap">
                {promo.badge}
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 min-w-0">
              <p className="font-playfair text-sm md:text-base text-drift-navy font-semibold truncate">
                {promo.headline}
              </p>
              <span className="hidden md:block text-drift-navy/30">·</span>
              <p className="font-inter text-xs md:text-sm text-drift-navy/65 line-clamp-1">
                {promo.subheadline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href={promo.href}>
              <Button size="sm" variant="primary">
                {promo.cta}
              </Button>
            </Link>
            <button
              onClick={dismiss}
              className="text-drift-navy/40 hover:text-drift-navy transition-colors p-1"
              aria-label="Dismiss promotion"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { siteConfig } from '@/config/site'

interface StatItemProps {
  value: number
  suffix: string
  prefix?: string
  decimals?: number
  label: string
  index: number
}

function StatItem({ value, suffix, prefix = '', decimals = 0, label, index }: StatItemProps) {
  const numRef = useRef<HTMLSpanElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inView = useInView(wrapperRef, { once: true, margin: '-80px 0px' })
  const animated = useRef(false)

  useEffect(() => {
    if (!inView || animated.current || !numRef.current) return
    animated.current = true

    const startVal = { val: 0 }
    gsap.to(startVal, {
      val: value,
      duration: 2,
      delay: index * 0.15,
      ease: 'power2.out',
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.textContent = decimals
            ? startVal.val.toFixed(decimals)
            : Math.round(startVal.val).toString()
        }
      },
    })
  }, [inView, value, decimals, index])

  return (
    <div ref={wrapperRef} className="flex flex-col items-center text-center">
      {/* Decorative top rule */}
      <span className="block w-8 h-0.5 bg-drift-gold mb-6" />

      <p className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-drift-gold leading-none">
        {prefix}
        <span ref={numRef}>{decimals ? value.toFixed(decimals) : '0'}</span>
        {suffix}
      </p>

      <p className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/55 mt-4 max-w-[140px]">
        {label}
      </p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="section-padding-sm bg-white border-y border-drift-navy/8" aria-label="By the numbers">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal direction="none">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {siteConfig.stats.map((stat, i) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={'prefix' in stat ? stat.prefix : ''}
                decimals={'decimals' in stat ? stat.decimals : 0}
                label={stat.label}
                index={i}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

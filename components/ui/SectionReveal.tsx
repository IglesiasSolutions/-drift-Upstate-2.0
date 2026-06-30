'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type RevealVariant =
  | 'fade-up'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'clip-reveal'

interface SectionRevealProps {
  children: React.ReactNode
  variant?: RevealVariant
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

type MotionVariantMap = {
  initial: Record<string, number | string>
  animate: Record<string, number | string>
}

const variants: Record<Exclude<RevealVariant, 'clip-reveal'>, MotionVariantMap> = {
  'fade-up': {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  'fade-left': {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  'fade-right': {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
  },
}

export function SectionReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.7,
  className = '',
  threshold = 0.15,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  const transition = {
    duration,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    delay,
  }

  // Clip-reveal variant: clip content from bottom using overflow hidden + y translate
  if (variant === 'clip-reveal') {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <motion.div
          initial={{ y: '100%' }}
          animate={isInView ? { y: '0%' } : { y: '100%' }}
          transition={transition}
        >
          {children}
        </motion.div>
      </div>
    )
  }

  const { initial, animate } = variants[variant]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type TextRevealTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  as?: TextRevealTag
}

export default function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = 'span',
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const words = text.split(' ')

  return (
    <Tag className={className}>
      {/* Invisible div just for intersection detection */}
      <span ref={ref} aria-hidden="true" style={{ position: 'absolute' }} />
      {words.map((word, i) => (
        <span
          key={i}
          style={{ overflow: 'hidden', display: 'inline-block' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.06,
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

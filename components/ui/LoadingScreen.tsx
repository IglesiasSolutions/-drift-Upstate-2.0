'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('drift-intro-shown')

    if (alreadyShown) {
      setVisible(false)
      return
    }

    const timer = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('drift-intro-shown', '1')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[600] bg-drift-navy flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Center content */}
          <div className="flex flex-col items-center gap-4">
            {/* Wordmark */}
            <motion.p
              className="font-montserrat text-2xl tracking-[0.3em] uppercase text-drift-gold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              DRIFT UPSTATE
            </motion.p>

            {/* Subtitle */}
            <motion.p
              className="font-inter text-xs tracking-widest text-white/40 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Eagle Bay &middot; New York &middot; Since 2023
            </motion.p>

            {/* Gold line */}
            <motion.div
              className="h-px w-48 bg-drift-gold origin-left"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>

          {/* Animated SVG wave at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
            <svg
              viewBox="0 0 1440 120"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              preserveAspectRatio="none"
            >
              {/* Wave layer 1 — slow, subtle */}
              <motion.path
                d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
                fill="rgba(201,168,76,0.06)"
                initial={{ x: 0 }}
                animate={{ x: [0, -30, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Wave layer 2 — medium speed, more opacity */}
              <motion.path
                d="M0,80 C180,40 360,100 540,70 C720,40 900,90 1080,65 C1260,40 1380,80 1440,75 L1440,120 L0,120 Z"
                fill="rgba(255,255,255,0.04)"
                initial={{ x: 0 }}
                animate={{ x: [0, 20, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />

              {/* Wave layer 3 — faster, more transparent */}
              <motion.path
                d="M0,90 C120,70 300,110 480,85 C660,60 840,105 1020,80 C1200,55 1350,95 1440,85 L1440,120 L0,120 Z"
                fill="rgba(201,168,76,0.04)"
                initial={{ x: 0 }}
                animate={{ x: [0, -15, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          // Only show on mobile/tablet, and only above the booking bar (bottom-20 clears it)
          className="fixed bottom-20 right-4 z-40 flex flex-col gap-3 lg:hidden"
          aria-label="Quick contact actions"
        >
          {/* Call button */}
          <Link
            href={siteConfig.contact.phoneHref}
            aria-label={`Call Drift Upstate at ${siteConfig.contact.phone}`}
            className="group flex items-center justify-center w-12 h-12 bg-drift-navy border border-white/20 shadow-lift text-white hover:bg-drift-gold hover:border-drift-gold hover:text-drift-navy transition-all duration-200"
          >
            <Phone className="w-5 h-5" strokeWidth={1.5} />
          </Link>

          {/* Text/SMS button */}
          <Link
            href={`sms:${siteConfig.contact.phone.replace(/\D/g, '')}`}
            aria-label="Send a text message to Drift Upstate"
            className="group flex items-center justify-center w-12 h-12 bg-drift-navy border border-white/20 shadow-lift text-white hover:bg-drift-gold hover:border-drift-gold hover:text-drift-navy transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Anchor } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'drift-announcement-dismissed-2026'

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="bg-drift-gold text-drift-navy relative">
            <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-center gap-3">
              <Anchor className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2} />
              <p className="font-montserrat text-xs tracking-widest uppercase font-semibold">
                <span className="hidden sm:inline">
                  2026 Season Now Open — Limited spots available this summer.&nbsp;
                </span>
                <span className="sm:hidden">2026 Season Now Open.&nbsp;</span>
                <Link
                  href="/book"
                  className="underline underline-offset-2 hover:no-underline font-bold"
                >
                  Book Your Tour →
                </Link>
              </p>
              <button
                onClick={dismiss}
                aria-label="Dismiss announcement"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
              >
                <X className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

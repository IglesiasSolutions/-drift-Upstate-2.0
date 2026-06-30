'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/Logo'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  /* Nav background: transparent only on home + not scrolled */
  const isTransparent = isHomePage && !isScrolled

  return (
    <>
      {/* ── Desktop / Sticky Navigation ── */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isTransparent ? 'rgba(22,44,29,0)' : 'rgba(22,44,29,0.97)',
          backdropFilter: isTransparent ? 'blur(0px)' : 'blur(12px)',
        }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          isScrolled ? 'shadow-lg' : ''
        )}
      >
        <div
          className={cn(
            'max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300',
            isScrolled ? 'py-4' : 'py-6'
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Drift Upstate — Home"
          >
            <Logo variant="nav" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {siteConfig.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-montserrat text-xs tracking-widest uppercase transition-colors duration-200 relative group py-1',
                  pathname === link.href
                    ? 'text-drift-gold'
                    : 'text-white/85 hover:text-white'
                )}
              >
                {link.label}
                {/* Active indicator */}
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 right-0 h-px bg-drift-gold transition-transform duration-200 origin-left',
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button asChild size="default" variant="primary">
              <Link href="/book">Book Now →</Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 -mr-2 hover:text-drift-gold transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Full-Screen Overlay ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-drift-navy flex flex-col"
          >
            {/* Overlay header — logo left, close right */}
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Drift Upstate — Home"
              >
                <Logo variant="nav" />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-drift-gold transition-colors p-2"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" strokeWidth={1.5} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {siteConfig.nav.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'font-playfair text-4xl sm:text-5xl transition-colors duration-200',
                      pathname === link.href
                        ? 'text-drift-gold'
                        : 'text-white hover:text-drift-gold'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile BOOK NOW */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: siteConfig.nav.length * 0.07 + 0.15, duration: 0.4 }}
                className="mt-6 w-72"
              >
                <Button
                  asChild
                  size="lg"
                  variant="primary"
                  className="w-full justify-center"
                >
                  <Link href="/book" onClick={() => setIsMenuOpen(false)}>
                    Book Now →
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Bottom: social handles */}
            <div className="pb-10 flex items-center justify-center gap-8">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-xs tracking-widest uppercase text-white/50 hover:text-drift-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-xs tracking-widest uppercase text-white/50 hover:text-drift-gold transition-colors"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-xs tracking-widest uppercase text-white/50 hover:text-drift-gold transition-colors"
              >
                TikTok
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Fixed Bottom Booking Bar ── */}
      <AnimatePresence>
        {isScrolled && !isMenuOpen && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          >
            <Link href="/book">
              <div className="bg-drift-gold text-drift-navy h-14 flex items-center justify-center gap-2 font-montserrat font-bold tracking-widest uppercase text-sm shadow-lift-lg">
                Book Now — Reserve Your Spot →
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

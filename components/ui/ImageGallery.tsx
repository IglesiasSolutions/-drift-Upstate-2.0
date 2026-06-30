'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  className?: string
}

export function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length]
  )
  const next = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length]
  )

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, prev, next, close])

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <>
      {/* Grid */}
      <div className={`grid gap-3 ${className}`}>
        {images.map((img, i) => (
          <motion.button
            key={i}
            onClick={() => setLightboxIndex(i)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden group cursor-zoom-in"
            style={{
              gridColumn: i === 0 ? 'span 2' : 'span 1',
              aspectRatio: i === 0 ? '16/9' : '4/3',
            }}
            aria-label={`View full size: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-drift-navy/0 group-hover:bg-drift-navy/30 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={1.5} />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
            onClick={close}
          >
            {/* Main image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[85vh] mx-8"
              style={{ aspectRatio: '16/9' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <p className="font-inter text-sm text-white/60 text-center">
                {images[lightboxIndex].alt}
              </p>
              <p className="font-montserrat text-xs text-white/30 text-center mt-1">
                {lightboxIndex + 1} / {images.length}
              </p>
            </div>

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white/70 hover:text-white hover:text-drift-gold transition-colors p-2"
              aria-label="Close gallery"
            >
              <X className="w-7 h-7" strokeWidth={1.5} />
            </button>

            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

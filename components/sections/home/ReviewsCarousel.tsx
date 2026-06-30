'use client'

import Link from 'next/link'
import { Star } from 'lucide-react'

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export function ReviewsCarousel() {
  return (
    <section className="section-padding bg-white" aria-label="Guest reviews">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block h-px w-8 bg-drift-gold" />
          <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
            Guest Reviews
          </span>
          <span className="block h-px w-8 bg-drift-gold" />
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy leading-tight mb-4">
          What Guests Are Saying
        </h2>
        <p className="font-inter text-lg text-drift-navy/60 max-w-xl mx-auto mb-10">
          We&apos;re just getting started — and loving every minute of it. If you&apos;ve been out on the water with us, we&apos;d love to hear from you.
        </p>

        <div className="flex items-center justify-center gap-1 mb-8">
          {[1,2,3,4,5].map((s) => (
            <Star key={s} className="w-6 h-6 fill-[#FBBC05] text-[#FBBC05]" />
          ))}
        </div>

        <Link
          href="https://g.page/r/driftupstate/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-drift-navy/15 px-8 py-4 hover:border-drift-gold hover:text-drift-gold transition-all duration-200 font-montserrat text-xs tracking-widest uppercase text-drift-navy/60"
        >
          <GoogleLogo className="w-5 h-5" />
          Leave a Review on Google →
        </Link>
      </div>
    </section>
  )
}

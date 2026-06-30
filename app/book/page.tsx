import type { Metadata } from 'next'
import { Suspense } from 'react'
import { CheckCircle } from 'lucide-react'
import { BookingFlow } from '@/components/sections/booking/BookingFlow'

export const metadata: Metadata = {
  title: 'Book a Tour — Drift Upstate · Eagle Bay, NY',
  description:
    'Reserve your Drift Upstate cycle boat tour on Fourth Lake. Public tours, private charters, coffee cruises and more. Easy online booking with instant confirmation.',
  openGraph: {
    title: 'Book a Tour — Drift Upstate',
    description:
      'Reserve your cycle boat tour on Fourth Lake in the Adirondacks. Easy online booking, instant confirmation.',
  },
}

const trustItems = [
  'Instant confirmation',
  'Free cancellation (48hr notice)',
  'Secure payment',
  'Real people, real responses',
]

export default function BookPage() {
  return (
    <div className="min-h-screen bg-drift-mist pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="block h-px w-10 bg-drift-gold/70" />
            <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
              Reserve Your Spot
            </span>
            <span className="block h-px w-10 bg-drift-gold/70" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl text-drift-navy mb-4">
            Book Your Tour
          </h1>
          <p className="font-inter text-lg text-drift-navy/60 max-w-xl mx-auto">
            Select your experience, pick your date, and get ready for the best day on the water.
          </p>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-drift-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/50">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Booking flow */}
        <div className="bg-white p-8 md:p-12 shadow-lift">
          <Suspense fallback={
            <div className="flex items-center justify-center py-24">
              <div className="font-inter text-sm text-drift-navy/40">Loading…</div>
            </div>
          }>
            <BookingFlow />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

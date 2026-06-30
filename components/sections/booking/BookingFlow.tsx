'use client'

import { useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, ChevronLeft, ChevronRight, Calendar, Users, User, CreditCard, PartyPopper } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { tours } from '@/data/tours'
import { cn } from '@/lib/utils'

// ─── Types ───────────────────────────────────────────────────────────────────
interface Booking {
  tourSlug: string
  date: string
  time: string
  guests: number
  name: string
  email: string
  phone: string
  specialRequests: string
}

const TIMES = ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM (Sunset)']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

// ─── Calendar helper ─────────────────────────────────────────────────────────
function buildCalendar(year: number, month: number) {
  const first = new Date(year, month, 1).getDay()
  const days = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = Array(first).fill(null)
  for (let d = 1; d <= days; d++) cells.push(d)
  while (cells.length % 7) cells.push(null)
  return cells
}

function toDateStr(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

// ─── Step components ─────────────────────────────────────────────────────────
function StepTour({ booking, update }: { booking: Booking; update: (k: keyof Booking, v: string | number) => void }) {
  return (
    <div>
      <h2 className="font-playfair text-3xl text-drift-navy mb-2">Choose Your Tour</h2>
      <p className="font-inter text-drift-navy/60 mb-8">Select the experience that fits your group best.</p>
      <div className="space-y-4">
        {tours.map((tour) => (
          <button
            key={tour.slug}
            onClick={() => update('tourSlug', tour.slug)}
            className={cn(
              'w-full text-left p-5 border transition-all duration-200',
              booking.tourSlug === tour.slug
                ? 'border-drift-gold bg-drift-gold/5'
                : 'border-drift-navy/15 hover:border-drift-navy/30'
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                    {tour.type}
                  </span>
                  <span className="font-inter text-xs text-drift-navy/40">{tour.badge}</span>
                </div>
                <p className="font-playfair text-xl text-drift-navy">{tour.shortName}</p>
                <p className="font-inter text-sm text-drift-navy/55 mt-1 line-clamp-2">{tour.tagline}</p>
              </div>
              <div className="flex-shrink-0 mt-1">
                <div
                  className={cn(
                    'w-5 h-5 border-2 flex items-center justify-center transition-colors',
                    booking.tourSlug === tour.slug
                      ? 'border-drift-gold bg-drift-gold'
                      : 'border-drift-navy/25'
                  )}
                >
                  {booking.tourSlug === tour.slug && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function StepDate({ booking, update }: { booking: Booking; update: (k: keyof Booking, v: string | number) => void }) {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const cells = buildCalendar(viewYear, viewMonth)

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11) }
    else setViewMonth(m => m - 1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0) }
    else setViewMonth(m => m + 1)
  }

  function isPast(day: number) {
    const d = new Date(viewYear, viewMonth, day)
    d.setHours(0,0,0,0); today.setHours(0,0,0,0)
    return d < today
  }

  return (
    <div>
      <h2 className="font-playfair text-3xl text-drift-navy mb-2">Pick a Date & Time</h2>
      <p className="font-inter text-drift-navy/60 mb-8">Select your preferred date and departure time.</p>

      {/* Calendar */}
      <div className="mb-8">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="p-2 hover:text-drift-gold transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <p className="font-playfair text-lg text-drift-navy">
            {MONTHS[viewMonth]} {viewYear}
          </p>
          <button onClick={nextMonth} className="p-2 hover:text-drift-gold transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map((d) => (
            <div key={d} className="text-center font-montserrat text-xs tracking-widest uppercase text-drift-navy/35 py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, idx) => {
            if (!day) return <div key={idx} />
            const dateStr = toDateStr(viewYear, viewMonth, day)
            const past = isPast(day)
            const selected = booking.date === dateStr
            return (
              <button
                key={idx}
                disabled={past}
                onClick={() => update('date', dateStr)}
                className={cn(
                  'aspect-square flex items-center justify-center text-sm font-inter transition-all',
                  past
                    ? 'text-drift-navy/20 cursor-not-allowed'
                    : selected
                    ? 'bg-drift-navy text-white'
                    : 'hover:bg-drift-gold/10 hover:text-drift-gold text-drift-navy'
                )}
              >
                {day}
              </button>
            )
          })}
        </div>
      </div>

      {/* Time selector */}
      <div>
        <p className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-3">
          Departure Time
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {TIMES.map((t) => (
            <button
              key={t}
              onClick={() => update('time', t)}
              className={cn(
                'py-3 px-4 border text-sm font-inter transition-all duration-200',
                booking.time === t
                  ? 'border-drift-gold bg-drift-gold/5 text-drift-navy'
                  : 'border-drift-navy/15 text-drift-navy/60 hover:border-drift-navy/30'
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function StepGuests({ booking, update }: { booking: Booking; update: (k: keyof Booking, v: string | number) => void }) {
  return (
    <div>
      <h2 className="font-playfair text-3xl text-drift-navy mb-2">Your Information</h2>
      <p className="font-inter text-drift-navy/60 mb-8">Tell us who's coming so we can get everything ready.</p>

      {/* Guest count */}
      <div className="mb-8">
        <p className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-4">
          Number of Guests
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => update('guests', Math.max(1, booking.guests - 1))}
            className="w-10 h-10 border border-drift-navy/20 flex items-center justify-center text-drift-navy hover:border-drift-gold transition-colors"
          >
            –
          </button>
          <span className="font-playfair text-3xl text-drift-navy w-12 text-center">{booking.guests}</span>
          <button
            onClick={() => update('guests', Math.min(14, booking.guests + 1))}
            className="w-10 h-10 border border-drift-navy/20 flex items-center justify-center text-drift-navy hover:border-drift-gold transition-colors"
          >
            +
          </button>
          <span className="font-inter text-sm text-drift-navy/40">
            {booking.guests === 1 ? 'Guest' : 'Guests'} (max 14)
          </span>
        </div>
      </div>

      {/* Contact info */}
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={booking.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Jane Smith"
              className={inputCls}
            />
          </div>
          <div>
            <label className="block font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={booking.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="jane@example.com"
              className={inputCls}
            />
          </div>
        </div>
        <div>
          <label className="block font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={booking.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="(555) 000-0000"
            className={inputCls}
          />
        </div>
        <div>
          <label className="block font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-2">
            Special Requests (optional)
          </label>
          <textarea
            rows={3}
            value={booking.specialRequests}
            onChange={(e) => update('specialRequests', e.target.value)}
            placeholder="Bachelorette decorations, birthday surprises, accessibility needs…"
            className={cn(inputCls, 'resize-none')}
          />
        </div>
      </div>
    </div>
  )
}

function StepPayment({ booking }: { booking: Booking }) {
  const tour = tours.find((t) => t.slug === booking.tourSlug)
  return (
    <div>
      <h2 className="font-playfair text-3xl text-drift-navy mb-2">Review & Pay</h2>
      <p className="font-inter text-drift-navy/60 mb-8">
        Confirm your booking details below. Payment is processed securely.
      </p>

      {/* Summary */}
      <div className="bg-drift-mist p-6 mb-8 space-y-3">
        <h3 className="font-playfair text-lg text-drift-navy mb-4">Booking Summary</h3>
        {[
          { label: 'Tour', value: tour?.name ?? '—' },
          { label: 'Date', value: booking.date || '—' },
          { label: 'Time', value: booking.time || '—' },
          { label: 'Guests', value: `${booking.guests} ${booking.guests === 1 ? 'Guest' : 'Guests'}` },
          { label: 'Name', value: booking.name || '—' },
          { label: 'Email', value: booking.email || '—' },
        ].map((row) => (
          <div key={row.label} className="flex justify-between text-sm">
            <span className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/40">{row.label}</span>
            <span className="font-inter text-drift-navy/80">{row.value}</span>
          </div>
        ))}
        <div className="pt-3 border-t border-drift-navy/10">
          <div className="flex justify-between">
            <span className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/40">Price</span>
            <span className="font-playfair text-xl font-bold text-drift-gold">{tour?.priceFrom ?? '—'}</span>
          </div>
        </div>
      </div>

      {/* Placeholder payment notice */}
      <div className="border border-drift-gold/30 bg-drift-gold/5 p-5 mb-6">
        <div className="flex items-start gap-3">
          <CreditCard className="w-5 h-5 text-drift-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
          <div>
            <p className="font-playfair text-base text-drift-navy mb-1">Secure Payment</p>
            <p className="font-inter text-sm text-drift-navy/65">
              Payment is processed securely. Credit cards, debit cards, and major digital wallets
              accepted. Your information is never stored on our servers.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { label: 'Card Number', placeholder: '1234 5678 9012 3456', type: 'text' },
          { label: 'Name on Card', placeholder: 'Jane Smith', type: 'text' },
        ].map((field) => (
          <div key={field.label}>
            <label className="block font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-2">
              {field.label}
            </label>
            <input type={field.type} placeholder={field.placeholder} className={inputCls} />
          </div>
        ))}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-2">
              Expiry
            </label>
            <input type="text" placeholder="MM / YY" className={inputCls} />
          </div>
          <div>
            <label className="block font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-2">
              CVV
            </label>
            <input type="text" placeholder="123" className={inputCls} />
          </div>
        </div>
      </div>
    </div>
  )
}

function StepConfirmation({ booking }: { booking: Booking }) {
  const tour = tours.find((t) => t.slug === booking.tourSlug)
  return (
    <div className="text-center py-8">
      <div className="w-20 h-20 bg-drift-gold/10 border border-drift-gold/30 flex items-center justify-center mx-auto mb-6">
        <PartyPopper className="w-10 h-10 text-drift-gold" strokeWidth={1.5} />
      </div>
      <h2 className="font-playfair text-4xl text-drift-navy mb-3">You&apos;re Booked!</h2>
      <p className="font-playfair italic text-xl text-drift-navy/60 mb-8">
        Get ready for the best day on the water.
      </p>
      <div className="bg-drift-mist p-6 text-left max-w-md mx-auto mb-8 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/40">Tour</span>
          <span className="font-inter text-drift-navy/80">{tour?.name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/40">Date</span>
          <span className="font-inter text-drift-navy/80">{booking.date}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/40">Time</span>
          <span className="font-inter text-drift-navy/80">{booking.time}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/40">Guests</span>
          <span className="font-inter text-drift-navy/80">{booking.guests}</span>
        </div>
      </div>
      <p className="font-inter text-sm text-drift-navy/55 mb-8 max-w-sm mx-auto">
        A confirmation email has been sent to <strong>{booking.email}</strong>. We&apos;ll also send
        dock directions and a reminder 24 hours before your tour.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild size="lg" variant="primary">
          <Link href="/tours">Explore More Tours</Link>
        </Button>
        <Button asChild size="lg" variant="outline-navy">
          <Link href="/gift-cards">Buy a Gift Card</Link>
        </Button>
      </div>
    </div>
  )
}

// ─── Steps config ─────────────────────────────────────────────────────────────
const STEPS = [
  { id: 'tour',         label: 'Tour',    icon: Calendar },
  { id: 'date',         label: 'Date',    icon: Calendar },
  { id: 'guests',       label: 'Details', icon: User },
  { id: 'payment',      label: 'Payment', icon: CreditCard },
  { id: 'confirmation', label: 'Done',    icon: CheckCircle },
]

// ─── Main component ───────────────────────────────────────────────────────────
export function BookingFlow() {
  const searchParams = useSearchParams()
  const initialTour = searchParams.get('tour') ?? ''

  const [step, setStep] = useState(0)
  const [booking, setBooking] = useState<Booking>({
    tourSlug: initialTour,
    date: '',
    time: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  })

  const update = useCallback((key: keyof Booking, value: string | number) => {
    setBooking((prev) => ({ ...prev, [key]: value }))
  }, [])

  function canAdvance() {
    if (step === 0) return !!booking.tourSlug
    if (step === 1) return !!booking.date && !!booking.time
    if (step === 2) return !!booking.name && !!booking.email && !!booking.phone
    return true
  }

  function next() { if (canAdvance()) setStep((s) => Math.min(s + 1, STEPS.length - 1)) }
  function prev() { setStep((s) => Math.max(s - 1, 0)) }

  const isConfirmation = step === STEPS.length - 1

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      {!isConfirmation && (
        <div className="flex items-center gap-0 mb-12">
          {STEPS.slice(0, -1).map((s, i) => {
            const done = i < step
            const active = i === step
            return (
              <div key={s.id} className="flex items-center flex-1 last:flex-none">
                <div
                  className={cn(
                    'w-8 h-8 flex items-center justify-center text-xs font-montserrat transition-all duration-300',
                    done
                      ? 'bg-drift-gold text-white'
                      : active
                      ? 'bg-drift-navy text-white'
                      : 'bg-drift-navy/10 text-drift-navy/30'
                  )}
                >
                  {done ? '✓' : i + 1}
                </div>
                {i < STEPS.length - 2 && (
                  <div
                    className={cn(
                      'flex-1 h-px transition-all duration-500',
                      done ? 'bg-drift-gold' : 'bg-drift-navy/15'
                    )}
                  />
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Step content */}
      <div className="min-h-[400px]">
        {step === 0 && <StepTour booking={booking} update={update} />}
        {step === 1 && <StepDate booking={booking} update={update} />}
        {step === 2 && <StepGuests booking={booking} update={update} />}
        {step === 3 && <StepPayment booking={booking} />}
        {step === 4 && <StepConfirmation booking={booking} />}
      </div>

      {/* Navigation */}
      {!isConfirmation && (
        <div className="flex items-center justify-between mt-10 pt-8 border-t border-drift-navy/10">
          <Button
            variant="ghost"
            size="default"
            onClick={prev}
            disabled={step === 0}
            className={cn('flex items-center gap-2', step === 0 && 'invisible')}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={step === 3 ? next : next}
            disabled={!canAdvance()}
          >
            {step === 3 ? 'Complete Booking →' : 'Continue →'}
          </Button>
        </div>
      )}
    </div>
  )
}

const inputCls =
  'w-full bg-transparent border border-drift-navy/20 px-4 py-3 font-inter text-sm text-drift-navy placeholder:text-drift-navy/30 focus:outline-none focus:border-drift-gold transition-colors duration-200'

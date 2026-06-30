'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const subjects = [
  'General Question',
  'Book a Public Tour',
  'Private Charter Inquiry',
  'Bachelorette / Birthday Package',
  'Corporate / Group Booking',
  'Gift Cards',
  'Weather / Cancellation',
  'Media / Press',
  'Join the Crew',
  'Other',
]

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const empty: FormState = { name: '', email: '', phone: '', subject: '', message: '' }

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulate async submission — replace with real API call
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-16 h-16 bg-drift-gold/10 border border-drift-gold/30 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-drift-gold" strokeWidth={1.5} />
        </div>
        <h3 className="font-playfair text-3xl text-drift-navy mb-3">Message Sent!</h3>
        <p className="font-inter text-drift-navy/65 max-w-sm leading-relaxed mb-8">
          Thanks for reaching out. A member of our team will be in touch within a few hours.
        </p>
        <Button
          size="default"
          variant="outline-navy"
          onClick={() => { setForm(empty); setSubmitted(false) }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
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
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="jane@example.com"
            className={inputCls}
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-2">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          placeholder="(555) 000-0000"
          className={inputCls}
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-2">
          What Can We Help With? *
        </label>
        <select
          required
          value={form.subject}
          onChange={(e) => update('subject', e.target.value)}
          className={cn(inputCls, 'cursor-pointer appearance-none')}
        >
          <option value="" disabled>Select a topic…</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mb-2">
          Message *
        </label>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell us what you're looking for, when you're planning to come, how many people — whatever helps us help you."
          className={cn(inputCls, 'resize-none')}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Sending…' : 'Send Message →'}
      </Button>

      <p className="font-inter text-xs text-drift-navy/40 text-center">
        We typically respond within a few hours during season. No spam — ever.
      </p>
    </form>
  )
}

const inputCls =
  'w-full bg-transparent border border-drift-navy/20 px-4 py-3 font-inter text-sm text-drift-navy placeholder:text-drift-navy/30 focus:outline-none focus:border-drift-gold transition-colors duration-200'

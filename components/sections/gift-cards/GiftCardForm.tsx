'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface GiftCardFormProps {
  amounts: number[]
}

export function GiftCardForm({ amounts }: GiftCardFormProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [custom, setCustom] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [recipientName, setRecipientName] = useState('')
  const [message, setMessage] = useState('')
  const [senderName, setSenderName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const finalAmount = custom ? parseInt(custom, 10) : selected

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!finalAmount || !recipientEmail || !senderName) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-drift-gold mx-auto mb-4" strokeWidth={1.5} />
        <h4 className="font-playfair text-2xl text-white mb-2">Gift Card Sent!</h4>
        <p className="font-inter text-sm text-white/50 max-w-xs mx-auto">
          Your gift card has been sent to <strong className="text-white">{recipientEmail}</strong>.
          They&apos;ll be on the lake before you know it.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Amount selection */}
      <div>
        <label className="block font-montserrat text-xs tracking-widest uppercase text-white/40 mb-3">
          Gift Amount
        </label>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {amounts.map((amt) => (
            <button
              type="button"
              key={amt}
              onClick={() => { setSelected(amt); setCustom('') }}
              className={cn(
                'py-3 text-sm font-playfair border transition-all duration-200',
                selected === amt && !custom
                  ? 'border-drift-gold bg-drift-gold text-drift-navy font-bold'
                  : 'border-white/15 text-white/60 hover:border-white/30'
              )}
            >
              ${amt}
            </button>
          ))}
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 font-inter text-sm text-white/40">$</span>
          <input
            type="number"
            min="20"
            max="500"
            value={custom}
            onChange={(e) => { setCustom(e.target.value); setSelected(null) }}
            placeholder="Custom amount"
            className={cn(
              inputCls,
              'pl-7',
              custom ? 'border-drift-gold' : ''
            )}
          />
        </div>
      </div>

      {/* Recipient info */}
      <div className="space-y-4">
        <div>
          <label className="block font-montserrat text-xs tracking-widest uppercase text-white/40 mb-2">
            Recipient Name *
          </label>
          <input
            type="text"
            required
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="Their name"
            className={inputCls}
          />
        </div>
        <div>
          <label className="block font-montserrat text-xs tracking-widest uppercase text-white/40 mb-2">
            Recipient Email *
          </label>
          <input
            type="email"
            required
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            placeholder="their@email.com"
            className={inputCls}
          />
        </div>
        <div>
          <label className="block font-montserrat text-xs tracking-widest uppercase text-white/40 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Your name"
            className={inputCls}
          />
        </div>
        <div>
          <label className="block font-montserrat text-xs tracking-widest uppercase text-white/40 mb-2">
            Personal Message (optional)
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Happy birthday! Can't wait to hear about your adventure on the lake…"
            className={cn(inputCls, 'resize-none')}
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="w-full"
        disabled={loading || !finalAmount || !recipientEmail || !senderName}
      >
        {loading ? 'Processing…' : `Send $${finalAmount ?? '—'} Gift Card →`}
      </Button>

      <p className="font-inter text-xs text-white/30 text-center">
        Gift cards are delivered instantly via email. Secure checkout.
      </p>
    </form>
  )
}

const inputCls =
  'w-full bg-transparent border border-white/15 px-4 py-3 font-inter text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-drift-gold transition-colors duration-200'

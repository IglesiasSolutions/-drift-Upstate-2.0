'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    /* TODO: integrate with Mailchimp / Klaviyo / Resend */
    setStatus('submitted')
    setEmail('')
  }

  if (status === 'submitted') {
    return (
      <p className="text-drift-gold font-montserrat text-sm tracking-wide">
        ✓ You&rsquo;re in! We&rsquo;ll be in touch.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3" aria-label="Newsletter signup">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Email address"
        className="h-11 px-4 bg-white/8 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-drift-gold transition-colors rounded-sm"
      />
      <Button type="submit" variant="primary" size="default" className="w-full justify-center">
        Subscribe →
      </Button>
      <p className="text-white/35 text-xs">No spam. Unsubscribe anytime.</p>
    </form>
  )
}

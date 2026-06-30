'use client'

import { useEffect } from 'react'

export function GoFishEmbed() {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (!['resos.gofish.rocks', 'dev-resos.gofish.rocks', 'localhost'].includes(new URL(event.origin).hostname)) return
      const msg = (event.data + '').split('|')
      const id = msg[0]
      const h = parseInt(msg[1])
      const tval = msg[2]
      const iframe = document.getElementById('gofishrocks_embed_' + id) as HTMLIFrameElement | null
      if (!iframe) return
      if (h > 100) { iframe.style.height = h + 'px' }
      if (tval === 'topTo') {
        iframe.scrollIntoView()
      } else if (tval.substr(0, 1) === 'i') {
        const framePos = iframe.getBoundingClientRect().top + window.scrollY
        const offset = parseFloat(tval.substr(1, tval.length - 1)) || 0
        window.scrollTo(0, framePos + offset)
      }
    }

    window.addEventListener('message', handleMessage, false)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div>
      {/* Branded header strip above the GoFish widget */}
      <div className="bg-drift-navy px-8 py-6 flex items-center gap-4 border-b-2 border-drift-gold">
        <span className="block h-px w-8 bg-drift-gold flex-shrink-0" />
        <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
          Secure Booking — Powered by GoFish
        </span>
        <span className="block h-px flex-1 bg-drift-gold/30" />
      </div>

      {/* iframe — CSS filter tones down the light blue without breaking readability */}
      <iframe
        src="https://resos.gofish.rocks/booking-embed/3000300030003000300032003000350038003500?id=0"
        id="gofishrocks_embed_0"
        width="100%"
        style={{
          overflow: 'hidden',
          width: '100%',
          border: 0,
          outline: 0,
          height: '400px',
          display: 'block',
          filter: 'saturate(0.55) brightness(0.97)',
        }}
        title="Drift Upstate Booking"
      />

      {/* Branded footer strip below */}
      <div className="bg-drift-navy px-8 py-4 flex items-center justify-center gap-2 border-t border-white/10">
        <span className="font-montserrat text-xs text-white/40 tracking-wide">
          Questions? Call or text us at{' '}
          <a href="tel:+13154809410" className="text-drift-gold hover:text-drift-gold/80 transition-colors">
            (315) 480-9410
          </a>
        </span>
      </div>
    </div>
  )
}

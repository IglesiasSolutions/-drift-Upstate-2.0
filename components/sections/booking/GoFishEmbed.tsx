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
    <iframe
      src="https://resos.gofish.rocks/booking-embed/3000300030003000300032003000350038003500?id=0"
      width="100%"
      height="400"
      id="gofishrocks_embed_0"
      style={{ overflow: 'hidden', width: '100%', border: 0, outline: 0, height: '400px' }}
    />
  )
}

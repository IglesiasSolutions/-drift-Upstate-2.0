import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-drift-navy flex flex-col items-center justify-center text-white px-6 text-center">
      <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-6">
        404 — Page Not Found
      </p>
      <h1 className="font-playfair text-5xl md:text-7xl text-white mb-6">
        Lost on the Lake?
      </h1>
      <p className="text-white/65 text-lg max-w-md mb-10 font-inter leading-relaxed">
        Looks like this page drifted away. Let&rsquo;s get you back on the water.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="primary" size="lg">
          <Link href="/">Back to Home →</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/book">Book a Tour</Link>
        </Button>
      </div>
    </div>
  )
}

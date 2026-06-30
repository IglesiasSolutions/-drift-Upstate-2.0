import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { HOME_FINALCTA_SUNSET } from '@/lib/media'

interface PreFooterCTAProps {
  headline?: string
  subheadline?: string
  primaryCTA?: string
  primaryHref?: string
  secondaryCTA?: string
  secondaryHref?: string
}

export function PreFooterCTA({
  headline = 'Your Adventure Is Waiting.',
  subheadline = "Spots fill up fast — especially on weekends. Don't miss your moment on the water.",
  primaryCTA = 'Book Now →',
  primaryHref = '/book',
  secondaryCTA = 'View All Tours',
  secondaryHref = '/tours',
}: PreFooterCTAProps) {
  return (
    <section
      className="relative min-h-[520px] flex items-center justify-center overflow-hidden"
      aria-label={headline}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={HOME_FINALCTA_SUNSET}
          alt="Stunning Adirondack sunset over Fourth Lake"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-drift-navy/55 via-drift-navy/50 to-drift-navy/75" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 py-24 text-center text-white">
        <ScrollReveal direction="up">
          <div className="flex items-center justify-center gap-4 mb-7">
            <span className="block h-px w-10 bg-drift-gold/80" />
            <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
              Reserve Your Spot
            </span>
            <span className="block h-px w-10 bg-drift-gold/80" />
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl text-white leading-tight mb-5 text-balance">
            {headline}
          </h2>

          <p className="font-inter text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button asChild size="xl" variant="primary">
              <Link href={primaryHref}>{primaryCTA}</Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href={secondaryHref}>{secondaryCTA}</Link>
            </Button>
          </div>

          <p className="font-montserrat text-xs tracking-widest uppercase text-white/40">
            ✓ Easy online booking &nbsp;·&nbsp; ✓ Instant confirmation &nbsp;·&nbsp; ✓ Free cancellation
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

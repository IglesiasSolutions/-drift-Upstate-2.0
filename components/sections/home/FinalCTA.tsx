import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import MagneticButton from '@/components/ui/MagneticButton'
import { HOME_FINALCTA_SUNSET } from '@/lib/media'

export function FinalCTA() {
  return (
    <section
      className="relative min-h-[560px] flex items-center justify-center overflow-hidden"
      aria-label="Final call to action — Book your tour"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HOME_FINALCTA_SUNSET}
          alt="Stunning sunset over the Adirondack mountains and Fourth Lake"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay — heavier than hero for copy legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-drift-navy/60 via-drift-navy/50 to-drift-navy/75" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-24 text-center text-white">
        <ScrollReveal direction="up">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-7">
            <span className="block h-px w-10 bg-drift-gold/80" />
            <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
              Don&rsquo;t Wait
            </span>
            <span className="block h-px w-10 bg-drift-gold/80" />
          </div>

          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-5 text-balance">
            Your Adventure Is Waiting.
          </h2>

          <p className="font-inter text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            Spots fill up fast — especially on weekends and holidays.
            <br className="hidden sm:block" />
            Don&rsquo;t miss your moment on the water.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <MagneticButton strength={0.35} radius={100}>
              <Button asChild size="xl" variant="primary" className="hover-gold-glow">
                <Link href="/book">Book Now →</Link>
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.25} radius={80}>
              <Button asChild size="xl" variant="outline">
                <Link href="/tours">View All Tours</Link>
              </Button>
            </MagneticButton>
          </div>

          {/* Micro trust */}
          <p className="font-montserrat text-xs tracking-widest uppercase text-white/45">
            ✓ Easy online booking &nbsp;·&nbsp; ✓ Instant confirmation &nbsp;·&nbsp; ✓ Free cancellation (48+ hrs)
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

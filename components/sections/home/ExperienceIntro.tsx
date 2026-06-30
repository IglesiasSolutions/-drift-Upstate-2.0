import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { HOME_INTRO_LIFESTYLE } from '@/lib/media'

export function ExperienceIntro() {
  return (
    <section className="section-padding bg-white" aria-label="Introduction">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Text column ── */}
          <ScrollReveal direction="right" delay={0.1}>
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-7">
                <span className="block h-px w-10 bg-drift-gold" />
                <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                  Eagle Bay, New York
                </span>
              </div>

              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-drift-navy leading-tight mb-7 text-balance">
                You&rsquo;ve never seen the{' '}
                <em className="italic text-drift-gold">Adirondacks</em>
                {' '}like this.
              </h2>

              <div className="space-y-5 text-drift-navy/70 text-lg leading-relaxed">
                <p>
                  Drift Upstate brings something entirely new to Eagle Bay — a cycle boat
                  experience that combines pedal power, fresh Adirondack air, and the beauty of
                  Fourth Lake into one unforgettable adventure.
                </p>
                <p>
                  Whether you&rsquo;re celebrating a milestone, exploring with family, or simply
                  looking for a reason to get out on the water — this is your moment.
                </p>
              </div>

              {/* Stats micro-row */}
              <div className="flex flex-wrap items-center gap-6 mt-10 mb-10">
                {[
                  { value: '90', unit: 'MIN', label: 'Tour Duration' },
                  { value: '#1', unit: '', label: 'Cycle Boat in ADK' },
                  { value: '14', unit: '', label: 'Guests Max' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-playfair text-3xl font-bold text-drift-navy">
                      {stat.value}
                      <span className="text-drift-gold text-xl">{stat.unit}</span>
                    </span>
                    <span className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <Button asChild variant="outline-navy" size="lg">
                <Link href="/tours">Explore Our Tours →</Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* ── Image column ── */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-lift-lg">
                <Image
                  src={HOME_INTRO_LIFESTYLE}
                  alt="Guests enjoying the cycle boat tour on Fourth Lake — Adirondacks, NY"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-drift-navy/40 to-transparent" />
              </div>

              {/* Floating badge card */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white shadow-lift p-5 max-w-[200px]">
                <p className="font-playfair text-2xl font-bold text-drift-navy">
                  First&nbsp;in the&nbsp;ADKs
                </p>
                <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mt-1">
                  Est. 2026
                </p>
              </div>

              {/* Gold accent line */}
              <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-drift-gold" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

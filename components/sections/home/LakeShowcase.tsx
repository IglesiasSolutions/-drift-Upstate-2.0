import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { LAKE_MORNING, LAKE_SUNSET } from '@/lib/media'

export function LakeShowcase() {
  return (
    <section
      className="bg-drift-mist section-padding overflow-hidden"
      aria-label="Fourth Lake experience comparison"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block h-px w-8 bg-drift-gold" />
              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                Any Time of Day
              </span>
              <span className="block h-px w-8 bg-drift-gold" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy mb-4">
              Fourth Lake, From Dawn to Dusk.
            </h2>
            <p className="font-inter text-lg text-drift-navy/60 max-w-2xl mx-auto">
              Drag the slider to see how the Adirondacks transform across the day.
              Every hour on the water tells a different story.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <BeforeAfterSlider
            beforeSrc={LAKE_MORNING}
            afterSrc={LAKE_SUNSET}
            beforeAlt="Fourth Lake at dawn — morning mist rising over the water"
            afterAlt="Fourth Lake at golden hour — blazing Adirondack sunset"
            beforeLabel="Morning Cruise"
            afterLabel="Sunset Charter"
            initialPosition={45}
            className="w-full aspect-[16/7] rounded-sm shadow-lift-lg"
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-0">
            <div className="bg-white p-8 border-r border-drift-navy/10">
              <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-2">Morning Coffee Cruise</p>
              <p className="font-playfair text-xl text-drift-navy mb-2">Quiet. Peaceful. Yours.</p>
              <p className="font-inter text-sm text-drift-navy/60 leading-relaxed">
                The lake before the world wakes up — mist rising off the water, loons calling,
                your coffee going warm in your hands. No crowds. Pure Adirondack morning.
              </p>
            </div>
            <div className="bg-drift-navy p-8">
              <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-2">Sunset Charter</p>
              <p className="font-playfair text-xl text-white mb-2">Golden. Electric. Unforgettable.</p>
              <p className="font-inter text-sm text-white/60 leading-relaxed">
                When the Adirondack sky turns gold, the lake becomes a mirror. Glasses raised,
                music playing, the whole horizon on fire. Some moments you never stop talking about.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

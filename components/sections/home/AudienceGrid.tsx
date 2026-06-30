import { Stagger, StaggerItem } from '@/components/ui/scroll-reveal'
import { SectionHeader } from '@/components/ui/section-header'
import type { AudienceCard } from '@/types'

const audiences: AudienceCard[] = [
  { emoji: '💑', label: 'Couples',              description: 'Romantic escapes on the water' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Families',             description: 'Memories the whole family cherishes' },
  { emoji: '🥂', label: 'Bachelorette Parties', description: 'The lake called — it\'s your time to shine' },
  { emoji: '🎂', label: 'Birthday Parties',     description: 'Celebrate somewhere unforgettable' },
  { emoji: '💼', label: 'Corporate Groups',     description: 'Team building that actually works' },
  { emoji: '☀️', label: 'Vacationers',          description: 'The highlight of your Adirondacks trip' },
  { emoji: '☕', label: 'Coffee Cruisers',      description: 'The most scenic morning cup you\'ll ever have' },
  { emoji: '🌅', label: 'Sunset Seekers',       description: 'Chase the golden hour on Fourth Lake' },
]

export function AudienceGrid() {
  return (
    <section
      className="section-padding bg-drift-mist"
      aria-label="Who we are perfect for"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="For Every Kind of Traveler"
          title="Made for Every Kind of Adventure."
          subtitle="Whether you're celebrating, exploring, or just looking for a perfect morning — there's a tour with your name on it."
        />

        <Stagger
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          staggerDelay={0.07}
        >
          {audiences.map((card) => (
            <StaggerItem key={card.label}>
              <AudienceCard card={card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function AudienceCard({ card }: { card: AudienceCard }) {
  return (
    <div className="group bg-white rounded-sm p-6 text-center shadow-sm hover:shadow-lift transition-all duration-300 hover:-translate-y-1 border-t-2 border-transparent hover:border-drift-gold cursor-default">
      <div
        className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 inline-block"
        role="img"
        aria-label={card.label}
      >
        {card.emoji}
      </div>
      <h3 className="font-playfair text-lg font-semibold text-drift-navy mb-2 leading-snug">
        {card.label}
      </h3>
      <p className="font-inter text-sm text-drift-navy/60 leading-relaxed">
        {card.description}
      </p>
    </div>
  )
}

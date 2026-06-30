import { Anchor, Star, Users, Calendar, Mountain } from 'lucide-react'

const items = [
  { icon: Star,     text: '5-Star Rated on Google' },
  { icon: Anchor,   text: 'First Cycle Boat in the Adirondacks' },
  { icon: Users,    text: 'Family Owned & Operated' },
  { icon: Calendar, text: 'Available 7 Days a Week' },
  { icon: Mountain, text: 'Est. Eagle Bay, NY' },
]

/* Duplicated for seamless marquee loop */
const marqueeItems = [...items, ...items]

export function TrustBar() {
  return (
    <section
      className="bg-drift-mist border-y border-drift-navy/8 overflow-hidden"
      aria-label="Trust indicators"
    >
      <div className="py-5 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-drift-mist to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-drift-mist to-transparent pointer-events-none" />

        {/* Marquee track */}
        <div className="flex marquee-track" aria-hidden="true">
          {marqueeItems.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="flex items-center gap-2.5 px-10 flex-shrink-0 whitespace-nowrap">
                <Icon className="w-4 h-4 text-drift-gold flex-shrink-0" strokeWidth={1.5} />
                <span className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/70 font-medium">
                  {item.text}
                </span>
                <span className="ml-10 w-px h-4 bg-drift-navy/15" />
              </div>
            )
          })}
        </div>

        {/* Screen-reader accessible static version */}
        <ul className="sr-only">
          {items.map((item, i) => (
            <li key={i}>{item.text}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

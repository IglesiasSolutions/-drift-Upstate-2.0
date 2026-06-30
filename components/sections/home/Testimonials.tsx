import Link from 'next/link'
import { Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'

export function Testimonials() {
  return (
    <section className="section-padding bg-drift-mist" aria-label="Customer testimonials">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHeader
          eyebrow="What People Are Saying"
          title="Don't take our word for it."
          subtitle="Our guests say it best. Check out what people are sharing about their experience on Fourth Lake."
          align="center"
          className="mb-10"
        />

        <div className="flex items-center justify-center gap-1 mb-8">
          {[1,2,3,4,5].map((s) => (
            <Star key={s} className="w-6 h-6 fill-drift-gold text-drift-gold" />
          ))}
        </div>

        <Link
          href="https://g.page/r/driftupstate/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-montserrat text-xs tracking-widest uppercase text-drift-navy/60 hover:text-drift-gold transition-colors underline-offset-4 hover:underline"
        >
          Read Reviews on Google →
        </Link>
      </div>
    </section>
  )
}

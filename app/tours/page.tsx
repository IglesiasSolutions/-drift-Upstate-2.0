import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { PageHero } from '@/components/sections/shared/PageHero'
import { TourDetailSection } from '@/components/sections/tours/TourDetailSection'
import { PreFooterCTA } from '@/components/sections/shared/PreFooterCTA'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { tours } from '@/data/tours'
import { TOURS_HERO } from '@/lib/media'

export const metadata: Metadata = {
  title: 'Our Tours — Cycle Boat Experiences · Drift Upstate',
  description:
    'Explore all Drift Upstate cycle boat experiences on Fourth Lake. Public tours, private charters, morning coffee cruises, and ladies night packages. Eagle Bay, Adirondacks.',
  openGraph: {
    title: 'Our Tours — Drift Upstate Cycle Boat · Eagle Bay, NY',
    description:
      'Four unforgettable ways to experience Fourth Lake. Public tours, private charters, coffee cruises & ladies night. Book your Adirondack adventure today.',
    images: [{ url: TOURS_HERO, width: 1920, height: 900 }],
  },
}

// Comparison table data
const comparisonRows = [
  { label: 'Duration',        public: '90 min',     private: '90–120 min',  coffee: '60 min',     ladies: '90 min' },
  { label: 'Capacity',        public: 'Up to 14',   private: 'Full boat',   coffee: 'Max 8',      ladies: 'Up to 14' },
  { label: 'Starting Price',  public: '$35/person',  private: 'Custom',      coffee: '$30/person',  ladies: '$45/person' },
  { label: 'Private Booking', public: '—',           private: '✓',           coffee: '—',           ladies: 'Optional' },
  { label: 'BYOB',            public: '✓',           private: '✓',           coffee: '✓',           ladies: '✓' },
  { label: 'Sunset Option',   public: '✓',           private: '✓',           coffee: '—',           ladies: '✓' },
  { label: 'Custom Playlist', public: '—',           private: '✓',           coffee: '—',           ladies: '✓' },
  { label: 'Decorations',     public: '—',           private: 'Add-on',      coffee: '—',           ladies: 'Add-on' },
]

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Every Tour · Fourth Lake"
        title="Unforgettable Ways to Experience the Water"
        subtitle="Four different experiences. One lake. Zero excuses to stay on shore."
        image={TOURS_HERO}
        imageAlt="Drift Upstate cycle boat on Fourth Lake with Adirondack mountains"
        height="md"
        overlay="heavy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Tours' },
        ]}
      />

      {/* Tour detail sections — alternating layout */}
      {tours.map((tour, i) => (
        <TourDetailSection key={tour.slug} tour={tour} index={i} />
      ))}

      {/* Comparison table */}
      <section className="section-padding bg-drift-navy" aria-label="Tour comparison">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Side by Side"
            title="Find Your Perfect Tour"
            subtitle="Every experience is different. Here's how they compare."
            align="center"
            light
            className="mb-16"
          />

          {/* Mobile: card-per-tour layout */}
          <div className="lg:hidden space-y-8">
            {tours.map((tour) => (
              <div key={tour.slug} className="bg-white/5 border border-white/10 p-6">
                <h3 className="font-playfair text-xl text-drift-gold mb-4">{tour.shortName}</h3>
                <div className="space-y-3">
                  {comparisonRows.map((row) => (
                    <div key={row.label} className="flex justify-between text-sm">
                      <span className="font-montserrat text-xs tracking-widest uppercase text-white/40">
                        {row.label}
                      </span>
                      <span className="font-inter text-white/80">
                        {row[tour.slug as keyof typeof row]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button asChild size="default" variant="primary" className="w-full">
                    <Link href={`/tours/${tour.slug}`}>View {tour.shortName}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: full table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left pb-6 pr-8 w-40" />
                  {tours.map((tour) => (
                    <th key={tour.slug} className="text-center pb-6 px-4">
                      <div className="mb-2">
                        <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                          {tour.type}
                        </span>
                      </div>
                      <div className="font-playfair text-lg text-white leading-tight">
                        {tour.shortName}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? 'bg-white/3' : ''}
                  >
                    <td className="py-4 pr-8 font-montserrat text-xs tracking-widest uppercase text-white/40">
                      {row.label}
                    </td>
                    {tours.map((tour) => (
                      <td key={tour.slug} className="py-4 px-4 text-center">
                        <span className="font-inter text-sm text-white/75">
                          {row[tour.slug as keyof typeof row]}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="pt-8 pr-8" />
                  {tours.map((tour) => (
                    <td key={tour.slug} className="pt-8 px-4 text-center">
                      <Button asChild size="default" variant="primary">
                        <Link href={`/tours/${tour.slug}`}>View Tour →</Link>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-drift-mist py-12 border-b border-drift-navy/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              'Coast Guard Licensed Captains',
              'BYOB on Every Tour',
              'Life Jackets Provided',
              'Easy Online Booking',
            ].map((item) => (
              <div key={item} className="flex flex-col items-center gap-2">
                <CheckCircle className="w-5 h-5 text-drift-gold" strokeWidth={1.5} />
                <span className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/60">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA
        headline="Ready to Get on the Water?"
        subheadline="Pick your tour and reserve your spot. Weekends book out weeks in advance."
        primaryCTA="Book Now →"
        secondaryCTA="Still Have Questions?"
        secondaryHref="/faq"
      />
    </>
  )
}

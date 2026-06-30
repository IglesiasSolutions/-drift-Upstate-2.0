import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, Users, CheckCircle, Star, ArrowRight, Info } from 'lucide-react'
import { PageHero } from '@/components/sections/shared/PageHero'
import { PreFooterCTA } from '@/components/sections/shared/PreFooterCTA'
import { ScrollReveal, Stagger, StaggerItem } from '@/components/ui/scroll-reveal'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { tours, getTourBySlug, getAllTourSlugs } from '@/data/tours'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllTourSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) return {}
  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      images: [{ url: tour.heroImage, width: 1920, height: 900 }],
    },
  }
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) notFound()

  // Other tours for cross-sell
  const otherTours = tours.filter((t) => t.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={tour.type}
        title={tour.name}
        subtitle={tour.headline}
        image={tour.heroImage}
        imageAlt={tour.heroImageAlt}
        height="lg"
        overlay="heavy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Tours', href: '/tours' },
          { label: tour.shortName },
        ]}
      >
        {/* Quick specs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
            <Clock className="w-4 h-4 text-drift-gold" strokeWidth={1.5} />
            <span className="font-inter text-sm text-white">{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
            <Users className="w-4 h-4 text-drift-gold" strokeWidth={1.5} />
            <span className="font-inter text-sm text-white">{tour.capacity}</span>
          </div>
          <div className="bg-drift-gold px-4 py-2">
            <span className="font-playfair text-sm font-bold text-drift-navy">{tour.priceFrom}</span>
          </div>
        </div>
      </PageHero>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left: Description + Inclusions */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <ScrollReveal direction="up">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="block h-px w-8 bg-drift-gold" />
                    <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                      About This Experience
                    </span>
                  </div>
                  <div className="space-y-5 text-drift-navy/70 text-lg leading-relaxed">
                    {tour.detailCopy.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Gallery */}
              <ScrollReveal direction="up" delay={0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="block h-px w-8 bg-drift-gold" />
                    <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                      Gallery
                    </span>
                  </div>
                  <ImageGallery
                    images={tour.gallery}
                    className="grid-cols-3"
                  />
                </div>
              </ScrollReveal>

              {/* What's Included */}
              <ScrollReveal direction="up" delay={0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="block h-px w-8 bg-drift-gold" />
                    <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                      What&apos;s Included
                    </span>
                  </div>
                  <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.05}>
                    {tour.inclusions.map((item) => (
                      <StaggerItem key={item}>
                        <div className="flex items-start gap-3 p-4 bg-drift-mist">
                          <CheckCircle
                            className="w-4 h-4 text-drift-gold mt-0.5 flex-shrink-0"
                            strokeWidth={1.5}
                          />
                          <span className="font-inter text-sm text-drift-navy/75">{item}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </ScrollReveal>

              {/* Perfect For */}
              <ScrollReveal direction="up" delay={0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="block h-px w-8 bg-drift-gold" />
                    <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                      Perfect For
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tour.perfectFor.map((tag) => (
                      <Badge key={tag} variant="navy" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Pro Tip */}
              {tour.proTip && (
                <ScrollReveal direction="up" delay={0.1}>
                  <div className="flex items-start gap-4 bg-drift-gold/10 border border-drift-gold/30 p-5">
                    <Info className="w-5 h-5 text-drift-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-1">
                        Captain&apos;s Tip
                      </p>
                      <p className="font-inter text-sm text-drift-navy/80 leading-relaxed italic">
                        {tour.proTip}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Testimonial */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="border-l-4 border-drift-gold pl-8 py-2">
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-drift-gold text-drift-gold" />
                    ))}
                  </div>
                  <blockquote className="font-playfair text-xl italic text-drift-navy/80 leading-relaxed mb-4">
                    &ldquo;{tour.testimonialQuote}&rdquo;
                  </blockquote>
                  <cite className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/40 not-italic">
                    {tour.testimonialAuthor}
                  </cite>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Sticky booking sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Booking card */}
                <ScrollReveal direction="left" delay={0.2}>
                  <div className="bg-drift-navy p-8">
                    <div className="mb-6">
                      <p className="font-playfair text-3xl font-bold text-drift-gold">
                        {tour.priceFrom}
                      </p>
                      <p className="font-montserrat text-xs tracking-widest uppercase text-white/40 mt-0.5">
                        {tour.priceNote}
                      </p>
                    </div>

                    <div className="space-y-3 mb-7 pb-7 border-b border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="font-inter text-sm text-white/50">Duration</span>
                        <span className="font-inter text-sm text-white">{tour.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-inter text-sm text-white/50">Capacity</span>
                        <span className="font-inter text-sm text-white">{tour.capacity}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-inter text-sm text-white/50">Season</span>
                        <span className="font-inter text-sm text-white">May – October</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button asChild size="lg" variant="primary" className="w-full">
                        <Link href={`/book?tour=${tour.slug}`}>{tour.ctaText} →</Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="w-full">
                        <Link href="/contact">Ask a Question</Link>
                      </Button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-3.5 h-3.5 text-drift-gold" strokeWidth={1.5} />
                        <span className="font-inter text-xs text-white/50">Free cancellation available</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-3.5 h-3.5 text-drift-gold" strokeWidth={1.5} />
                        <span className="font-inter text-xs text-white/50">Instant confirmation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-drift-gold" strokeWidth={1.5} />
                        <span className="font-inter text-xs text-white/50">Secure online booking</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Gift card callout */}
                <ScrollReveal direction="left" delay={0.3}>
                  <div className="border border-drift-gold/30 p-6 text-center">
                    <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-2">
                      Give the Gift of the Lake
                    </p>
                    <p className="font-inter text-sm text-drift-navy/70 mb-4">
                      Gift cards make the perfect present for any Adirondack lover.
                    </p>
                    <Link
                      href="/gift-cards"
                      className="font-montserrat text-xs tracking-widest uppercase text-drift-navy hover:text-drift-gold transition-colors inline-flex items-center gap-2"
                    >
                      Shop Gift Cards <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Tours */}
      <section className="section-padding bg-drift-mist">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <span className="block h-px w-8 bg-drift-gold" />
            <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
              More Experiences
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl text-drift-navy mb-12">
            Explore Other Tours
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherTours.map((t, i) => (
              <ScrollReveal key={t.slug} direction="up" delay={i * 0.1}>
                <Link href={`/tours/${t.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-5">
                    <Image
                      src={t.cardImage}
                      alt={t.cardImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-drift-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="gold" className="text-xs">
                        {t.badge}
                      </Badge>
                    </div>
                  </div>
                  <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-1">
                    {t.type}
                  </p>
                  <h3 className="font-playfair text-xl text-drift-navy group-hover:text-drift-gold transition-colors">
                    {t.shortName}
                  </h3>
                  <p className="font-inter text-sm text-drift-navy/60 mt-2 line-clamp-2">
                    {t.tagline}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA
        headline={`Book ${tour.shortName} Today.`}
        subheadline="Spots fill up fast, especially on summer weekends. Don't let your date pass you by."
        primaryCTA={`${tour.ctaText} →`}
        primaryHref={`/book?tour=${tour.slug}`}
        secondaryCTA="View All Tours"
        secondaryHref="/tours"
      />
    </>
  )
}

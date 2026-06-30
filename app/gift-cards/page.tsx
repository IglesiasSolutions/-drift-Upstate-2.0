import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Gift, CheckCircle, Heart, Star } from 'lucide-react'
import { PageHero } from '@/components/sections/shared/PageHero'
import { PreFooterCTA } from '@/components/sections/shared/PreFooterCTA'
import { ScrollReveal, Stagger, StaggerItem } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { GiftCardForm } from '@/components/sections/gift-cards/GiftCardForm'
import { HOME_FINALCTA_SUNSET } from '@/lib/media'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Gift Cards — Give the Gift of the Lake · Drift Upstate',
  description:
    'Give someone the gift of a Drift Upstate cycle boat tour on Fourth Lake. Gift cards are valid for any tour, any date, all season long. Perfect for any occasion.',
  openGraph: {
    title: 'Drift Upstate Gift Cards — The Perfect Adirondack Gift',
    description:
      'Give the gift of an unforgettable day on Fourth Lake. Drift Upstate gift cards are valid for any tour, any date.',
  },
}

const amounts = [35, 50, 75, 100, 150, 200]

const occasions = [
  { icon: Heart,    label: 'Anniversaries' },
  { icon: Star,     label: 'Birthdays' },
  { icon: Gift,     label: 'Holidays' },
  { icon: CheckCircle, label: 'Just Because' },
]

const features = [
  'Valid for any Drift Upstate tour',
  'Any date during the season (May – October)',
  'No expiration within the current season',
  'Emailed instantly to the recipient',
  'Can be used toward any tour type',
  'Custom personal message included',
]

export default function GiftCardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Gift Cards"
        title="Give the Gift of Fourth Lake"
        subtitle="The best gift you can give an Adirondack lover is a day on the water."
        image={HOME_FINALCTA_SUNSET}
        imageAlt="Stunning sunset over Fourth Lake — perfect Adirondack gift"
        height="md"
        overlay="heavy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gift Cards' },
        ]}
      />

      {/* Main section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Info */}
            <ScrollReveal direction="right">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block h-px w-8 bg-drift-gold" />
                  <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                    The Perfect Gift
                  </span>
                </div>
                <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy leading-tight mb-6">
                  An Experience They&apos;ll Never Forget
                </h2>
                <div className="space-y-4 text-drift-navy/70 leading-relaxed mb-8">
                  <p>
                    Gift cards are the easiest way to share the magic of Drift Upstate with someone
                    you love. They choose the tour, the date, and the time — you just make it
                    possible.
                  </p>
                  <p>
                    Perfect for birthdays, anniversaries, holidays, or any occasion that deserves
                    something truly memorable. Because a day on Fourth Lake with people you love is
                    worth more than anything that comes in a box.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-10">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-4 h-4 text-drift-gold mt-0.5 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      <span className="font-inter text-sm text-drift-navy/70">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Perfect for occasions */}
                <div>
                  <p className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/40 mb-4">
                    Perfect For
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {occasions.map((occ) => (
                      <div
                        key={occ.label}
                        className="flex flex-col items-center gap-2 py-4 bg-drift-mist"
                      >
                        <occ.icon className="w-5 h-5 text-drift-gold" strokeWidth={1.5} />
                        <span className="font-inter text-xs text-drift-navy/60">{occ.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-10 pt-8 border-t border-drift-navy/10">
                  <div className="flex mb-3">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-drift-gold text-drift-gold" />
                    ))}
                  </div>
                  <blockquote className="font-playfair text-lg italic text-drift-navy/70 mb-2">
                    &ldquo;Got a gift card for my mom&apos;s birthday and she said it was the best present
                    she&apos;d gotten in years. The look on her face when she came back from the tour
                    told the whole story.&rdquo;
                  </blockquote>
                  <cite className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/40 not-italic">
                    Kevin R. — Utica, NY
                  </cite>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Purchase form */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-drift-navy p-8 md:p-10">
                <div className="mb-8">
                  <Gift className="w-10 h-10 text-drift-gold mb-4" strokeWidth={1.5} />
                  <h3 className="font-playfair text-2xl text-white mb-2">Purchase a Gift Card</h3>
                  <p className="font-inter text-sm text-white/50">
                    Select an amount, personalize your message, and it&apos;s delivered instantly by email.
                  </p>
                </div>
                <GiftCardForm amounts={amounts} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-drift-mist">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="block h-px w-10 bg-drift-gold" />
              <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                How It Works
              </span>
              <span className="block h-px w-10 bg-drift-gold" />
            </div>
            <h2 className="font-playfair text-4xl text-drift-navy">Simple as It Gets</h2>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {[
              {
                step: '01',
                title: 'Choose an Amount',
                description: 'Select from our preset denominations or enter a custom amount.',
              },
              {
                step: '02',
                title: 'Personalize & Send',
                description:
                  "Add a message and the recipient's email. It arrives instantly with a beautiful digital card.",
              },
              {
                step: '03',
                title: 'They Book Their Tour',
                description:
                  "The recipient uses the gift card code at checkout to book any Drift Upstate tour they'd like.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="text-center">
                  <p className="font-playfair text-6xl font-bold text-drift-gold/20 mb-4">
                    {item.step}
                  </p>
                  <h3 className="font-playfair text-xl text-drift-navy mb-3">{item.title}</h3>
                  <p className="font-inter text-sm text-drift-navy/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Questions */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="font-playfair text-3xl text-drift-navy mb-4">
              Questions About Gift Cards?
            </h2>
            <p className="font-inter text-drift-navy/60 mb-8">
              If you have any questions about our gift cards, redemption, or want to purchase in
              bulk for corporate gifting, get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact">Contact Us →</Link>
              </Button>
              <Button asChild size="lg" variant="outline-navy">
                <Link href="/faq">Read the FAQ</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PreFooterCTA
        headline="Book a Tour for Yourself While You're At It."
        subheadline="Gift cards are for others. But you deserve a day on the water too."
        primaryCTA="Book a Tour →"
        secondaryCTA="View All Tours"
        secondaryHref="/tours"
      />
    </>
  )
}

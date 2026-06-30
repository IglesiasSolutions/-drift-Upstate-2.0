import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { PageHero } from '@/components/sections/shared/PageHero'
import { PreFooterCTA } from '@/components/sections/shared/PreFooterCTA'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ScrollReveal, Stagger, StaggerItem } from '@/components/ui/scroll-reveal'
import { CONTACT_HERO_FALLBACK } from '@/lib/media'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Contact Drift Upstate — Get in Touch',
  description:
    'Contact Drift Upstate for tour bookings, private charters, bachelorette packages, corporate events, and more. Eagle Bay, NY — we respond fast.',
  openGraph: {
    title: 'Contact Drift Upstate — Eagle Bay, NY',
    description:
      "Have a question? Planning something special? We're here to help. Reach out to Drift Upstate.",
  },
}

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    detail: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
    note: 'Available daily during season',
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: siteConfig.contact.email,
    href: siteConfig.contact.emailHref,
    note: 'We reply within a few hours',
  },
  {
    icon: MapPin,
    title: 'Find Us',
    detail: 'Eagle Bay, NY 13331',
    href: siteConfig.location.mapsUrl,
    note: 'Dock address in booking confirmation',
  },
  {
    icon: Clock,
    title: 'Season & Hours',
    detail: `${siteConfig.season.start} – ${siteConfig.season.end}`,
    href: '/faq',
    note: `${siteConfig.season.hours} · ${siteConfig.season.daysOpen}`,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd Love to Hear From You"
        subtitle="Questions, private charters, group bookings, or anything else — we're here."
        image={CONTACT_HERO_FALLBACK}
        imageAlt="Eagle Bay dock at golden morning light"
        height="sm"
        overlay="heavy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* Contact methods */}
      <section className="bg-drift-navy py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {contactMethods.map((method) => (
              <StaggerItem key={method.title}>
                <Link
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-start p-6 bg-white/5 border border-white/10 hover:border-drift-gold/30 transition-all duration-300"
                >
                  <method.icon
                    className="w-6 h-6 text-drift-gold mb-4"
                    strokeWidth={1.5}
                  />
                  <p className="font-montserrat text-xs tracking-widest uppercase text-white/40 mb-1">
                    {method.title}
                  </p>
                  <p className="font-playfair text-lg text-white mb-1 group-hover:text-drift-gold transition-colors">
                    {method.detail}
                  </p>
                  <p className="font-inter text-xs text-white/40">{method.note}</p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <ScrollReveal direction="right">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block h-px w-8 bg-drift-gold" />
                  <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                    Send a Message
                  </span>
                </div>
                <h2 className="font-playfair text-4xl text-drift-navy mb-8">
                  Let&apos;s Start Planning
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Right: Location + social */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-12">
                {/* Location */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="block h-px w-8 bg-drift-gold" />
                    <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                      Getting Here
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl text-drift-navy mb-4">
                    Eagle Bay, New York
                  </h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { from: 'Albany, NY', time: '~2.5 hours via Route 28 North' },
                      { from: 'New York City', time: '~4 hours via I-87 North to Route 28' },
                      { from: 'Syracuse, NY', time: '~2 hours via Route 12 North' },
                    ].map((dir) => (
                      <div key={dir.from} className="flex items-start gap-3">
                        <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mt-1 flex-shrink-0">
                          {dir.from}
                        </span>
                        <span className="font-inter text-sm text-drift-navy/60">{dir.time}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={siteConfig.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-montserrat text-xs tracking-widest uppercase text-drift-navy hover:text-drift-gold transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </Link>
                </div>

                {/* Weather policy */}
                <div className="bg-drift-mist p-6">
                  <h4 className="font-playfair text-xl text-drift-navy mb-3">Weather Policy</h4>
                  <p className="font-inter text-sm text-drift-navy/65 leading-relaxed">
                    We monitor weather closely and will notify you at least 2 hours before your tour
                    if conditions require cancellation. Full refunds are always issued for
                    weather-related cancellations. Light rain? We still sail — it&apos;s part of the
                    Adirondack magic.
                  </p>
                </div>

                {/* Social follow */}
                <div>
                  <p className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/40 mb-4">
                    Follow the Adventure
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-inter text-sm text-drift-navy/60 hover:text-drift-gold transition-colors"
                    >
                      <Instagram className="w-4 h-4" strokeWidth={1.5} />
                      {siteConfig.social.instagramHandle}
                    </Link>
                    <Link
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-inter text-sm text-drift-navy/60 hover:text-drift-gold transition-colors"
                    >
                      <Facebook className="w-4 h-4" strokeWidth={1.5} />
                      Facebook
                    </Link>
                  </div>
                </div>

                {/* Response time card */}
                <div className="flex items-start gap-4 border border-drift-gold/25 bg-drift-gold/5 p-5">
                  <MessageCircle
                    className="w-5 h-5 text-drift-gold flex-shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-playfair text-lg text-drift-navy mb-1">
                      We Respond Fast
                    </p>
                    <p className="font-inter text-sm text-drift-navy/65">
                      During season, we typically reply to messages and emails within a few hours.
                      For urgent booking questions, calling is always the fastest option.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PreFooterCTA
        headline="See You on the Water."
        subheadline="Whether you're booking today or just exploring the idea — we're always here to help."
        primaryCTA="Book a Tour →"
        secondaryCTA="View Our Tours"
        secondaryHref="/tours"
      />
    </>
  )
}

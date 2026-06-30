import Link from 'next/link'
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export function LocationSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-label="Location and contact information"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-stretch">

          {/* ── Map ── */}
          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-3">
            <div className="h-full min-h-[360px] lg:min-h-[480px] rounded-sm overflow-hidden shadow-lift relative">
              {/* Replace this iframe src with your actual Google Maps embed URL */}
              <iframe
                src={`https://maps.google.com/maps?q=Eagle+Bay,+NY&t=k&z=13&ie=UTF8&iwloc=&output=embed`}
                title="Drift Upstate location — Eagle Bay, NY on Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
            </div>
          </ScrollReveal>

          {/* ── Info Card ── */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-2">
            <div className="h-full bg-drift-navy text-white rounded-sm p-8 md:p-10 flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="block h-px w-6 bg-drift-gold" />
                  <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                    Find Us
                  </span>
                </div>

                <h2 className="font-playfair text-3xl text-white mb-8">
                  Where to Find Us
                </h2>

                <ul className="space-y-6">
                  <li>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-drift-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-1">
                          Address
                        </p>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {siteConfig.location.address}
                          <br />
                          {siteConfig.location.lake}, {siteConfig.location.region}
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-drift-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-1">
                          Season & Hours
                        </p>
                        <p className="text-white/80 text-sm">
                          {siteConfig.season.daysOpen}: {siteConfig.season.hours}
                          <br />
                          {siteConfig.season.start} – {siteConfig.season.end}
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-drift-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-1">
                          Call Us
                        </p>
                        <a
                          href={siteConfig.contact.phoneHref}
                          className="text-white/80 text-sm hover:text-white transition-colors"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-drift-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-1">
                          Email
                        </p>
                        <a
                          href={siteConfig.contact.emailHref}
                          className="text-white/80 text-sm hover:text-white transition-colors"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-3">
                <Button asChild size="lg" variant="primary" className="w-full justify-center">
                  <Link href="/book">Book Your Tour →</Link>
                </Button>
                <Link
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-white/60 hover:text-white text-sm font-inter transition-colors mt-1"
                >
                  <Navigation className="w-4 h-4" strokeWidth={1.5} />
                  Get Directions
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

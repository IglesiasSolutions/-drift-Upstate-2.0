import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Terms of Service — Drift Upstate',
  description: 'Terms of service for Drift Upstate cycle boat tours. Eagle Bay, Adirondacks, New York.',
  robots: { index: false },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-px w-8 bg-drift-gold" />
          <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
            Legal
          </span>
        </div>

        <h1 className="font-playfair text-4xl md:text-5xl text-drift-navy mb-3 leading-tight">
          Terms of Service
        </h1>
        <p className="font-inter text-sm text-drift-navy/50 mb-12">
          Effective Date: January 1, {siteConfig.season.year} &nbsp;·&nbsp; Last updated:{' '}
          {siteConfig.season.year}
        </p>

        <div className="prose prose-lg max-w-none text-drift-navy/75 space-y-8">
          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">1. Reservations & Booking</h2>
            <p className="font-inter leading-relaxed">
              All tours are subject to availability. A booking is confirmed only upon receipt of
              payment and a confirmation email from Drift Upstate. We reserve the right to cancel
              or reschedule tours at our discretion due to weather, mechanical issues, or
              insufficient bookings.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">2. Cancellation Policy</h2>
            <p className="font-inter leading-relaxed">
              Cancellations made 48 or more hours before your scheduled tour are eligible for a full
              refund. Cancellations within 48 hours of the tour are non-refundable but may be
              rescheduled based on availability. Tours cancelled by Drift Upstate due to weather or
              safety concerns will receive a full refund or complimentary rescheduling.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">3. Safety & Conduct</h2>
            <p className="font-inter leading-relaxed">
              All guests must follow the instructions of the captain and crew at all times. Life
              jackets must be worn when required by the captain. Guests who are intoxicated to the
              point of being a safety risk may be refused boarding without refund. BYOB is permitted
              (cans and soft-sided coolers only); glass containers are not permitted on the vessel.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">4. Liability Waiver</h2>
            <p className="font-inter leading-relaxed">
              All guests are required to sign a liability waiver prior to boarding. Participation in
              any Drift Upstate tour is at your own risk. Drift Upstate is not responsible for lost
              or damaged personal property. Coast Guard regulations require guests to be sober and
              cooperative with crew instructions.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">5. Age & Health Requirements</h2>
            <p className="font-inter leading-relaxed">
              Guests of all ages are welcome. Children under 13 must be accompanied by a parent or
              guardian. Guests with significant mobility limitations should contact us in advance so
              we can discuss accommodations. Pregnant guests should consult their physician before
              booking.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">6. Photography & Media</h2>
            <p className="font-inter leading-relaxed">
              Drift Upstate may photograph or video tours for marketing purposes. By booking a tour,
              you consent to being photographed or filmed. Individual opt-outs are honored upon
              request — please inform the captain before departure.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">7. Contact</h2>
            <p className="font-inter leading-relaxed">
              Questions about these terms? Contact us at{' '}
              <a
                href={siteConfig.contact.emailHref}
                className="text-drift-gold hover:underline"
              >
                {siteConfig.contact.email}
              </a>{' '}
              or{' '}
              <a
                href={siteConfig.contact.phoneHref}
                className="text-drift-gold hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-drift-navy/10">
          <Link
            href="/"
            className="font-montserrat text-xs tracking-widest uppercase text-drift-navy/50 hover:text-drift-gold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Privacy Policy — Drift Upstate',
  description: 'Privacy policy for Drift Upstate cycle boat tours. Eagle Bay, Adirondacks, New York.',
  robots: { index: false },
}

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="font-inter text-sm text-drift-navy/50 mb-12">
          Effective Date: January 1, {siteConfig.season.year} &nbsp;·&nbsp; Last updated:{' '}
          {siteConfig.season.year}
        </p>

        <div className="prose prose-lg max-w-none text-drift-navy/75 space-y-8">
          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">1. Information We Collect</h2>
            <p className="font-inter leading-relaxed">
              When you book a tour or contact us, we collect information you provide directly — such
              as your name, email address, phone number, and payment information. We also collect
              standard website analytics (pages visited, time on site, referral source) through
              privacy-respecting tools.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">2. How We Use Your Information</h2>
            <p className="font-inter leading-relaxed">
              We use your information to process bookings, send booking confirmations and reminders,
              respond to inquiries, and — with your consent — send seasonal promotions and updates.
              We do not sell, rent, or share your personal information with third parties for their
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">3. Data Security</h2>
            <p className="font-inter leading-relaxed">
              We implement industry-standard security measures to protect your personal information.
              Payment processing is handled by certified third-party processors and we do not store
              full credit card numbers on our servers.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">4. Cookies</h2>
            <p className="font-inter leading-relaxed">
              Our website uses essential cookies required for the site to function, and optional
              analytics cookies to understand how visitors use the site. You can disable optional
              cookies in your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">5. Your Rights</h2>
            <p className="font-inter leading-relaxed">
              You may request access to, correction of, or deletion of your personal information at
              any time by contacting us at{' '}
              <a
                href={siteConfig.contact.emailHref}
                className="text-drift-gold hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              . We will respond to all requests within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-drift-navy mb-3">6. Contact</h2>
            <p className="font-inter leading-relaxed">
              Questions about this privacy policy? Reach us at{' '}
              <a
                href={siteConfig.contact.emailHref}
                className="text-drift-gold hover:underline"
              >
                {siteConfig.contact.email}
              </a>{' '}
              or by phone at{' '}
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

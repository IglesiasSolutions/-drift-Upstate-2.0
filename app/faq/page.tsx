import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, Phone, Mail } from 'lucide-react'
import { PageHero } from '@/components/sections/shared/PageHero'
import { PreFooterCTA } from '@/components/sections/shared/PreFooterCTA'
import { FAQContent } from '@/components/sections/faq/FAQContent'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { TOURS_HERO } from '@/lib/media'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'FAQ — Everything You Need to Know · Drift Upstate',
  description:
    'Answers to all your questions about Drift Upstate cycle boat tours — how it works, what to bring, booking, cancellations, BYOB policy, getting here, and more.',
  openGraph: {
    title: 'Frequently Asked Questions — Drift Upstate',
    description:
      'All your questions about cycle boat tours on Fourth Lake, answered. BYOB, safety, booking, groups, and more.',
  },
}

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Got Questions?"
        title="We've Got Answers."
        subtitle="Everything you need to know before you arrive at the dock."
        image={TOURS_HERO}
        imageAlt="Fourth Lake in the Adirondacks — the home of Drift Upstate"
        height="sm"
        overlay="heavy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      />

      {/* FAQ section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FAQContent />
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-padding bg-drift-mist">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-5">
                <span className="block h-px w-10 bg-drift-gold" />
                <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                  Still Have Questions?
                </span>
                <span className="block h-px w-10 bg-drift-gold" />
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy mb-4">
                We&apos;d Love to Hear From You
              </h2>
              <p className="font-inter text-lg text-drift-navy/65 max-w-2xl mx-auto">
                If you didn&apos;t find what you were looking for, reach out and a member of our team
                will get back to you quickly.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                title: 'Send a Message',
                description: 'Use our contact form and we\'ll reply within a few hours.',
                href: '/contact',
                cta: 'Contact Us',
              },
              {
                icon: Phone,
                title: 'Call Us',
                description: 'Speak directly with a member of our team.',
                href: siteConfig.contact.phoneHref,
                cta: siteConfig.contact.phone,
              },
              {
                icon: Mail,
                title: 'Email Us',
                description: 'Drop us a line and we\'ll reply as soon as possible.',
                href: siteConfig.contact.emailHref,
                cta: siteConfig.contact.email,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} direction="up" delay={0.1}>
                <div className="bg-white border border-drift-navy/10 p-8 text-center hover:border-drift-gold/30 transition-colors duration-300">
                  <item.icon
                    className="w-8 h-8 text-drift-gold mx-auto mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-playfair text-xl text-drift-navy mb-2">{item.title}</h3>
                  <p className="font-inter text-sm text-drift-navy/60 mb-5">{item.description}</p>
                  <Button asChild size="sm" variant="outline-navy">
                    <Link href={item.href}>{item.cta}</Link>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA
        headline="Ready to Stop Planning and Start Going?"
        subheadline="You've done the research. Now it's time to get on the water."
        primaryCTA="Book a Tour →"
        secondaryCTA="View All Tours"
        secondaryHref="/tours"
      />
    </>
  )
}

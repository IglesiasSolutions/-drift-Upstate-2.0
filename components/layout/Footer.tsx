import Link from 'next/link'
import { Instagram, Facebook, Youtube, Music2, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { NewsletterForm } from '@/components/layout/NewsletterForm'

const quickLinks = [
  { href: '/tours', label: 'Our Tours' },
  { href: '/tours/public', label: 'Public Tour' },
  { href: '/tours/private', label: 'Private Charter' },
  { href: '/tours/coffee-cruise', label: 'Coffee Cruise' },
  { href: '/tours/ladies-night', label: 'Ladies Night' },
  { href: '/about', label: 'About Us' },
  { href: '/crew', label: 'Meet the Crew' },
  { href: '/faq', label: 'FAQ' },
  { href: '/gift-cards', label: 'Gift Cards' },
]

const socialLinks = [
  { href: siteConfig.social.instagram, icon: Instagram, label: 'Instagram' },
  { href: siteConfig.social.facebook, icon: Facebook, label: 'Facebook' },
  { href: siteConfig.social.tiktok, icon: Music2, label: 'TikTok' },
  { href: siteConfig.social.youtube, icon: Youtube, label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="bg-drift-navy text-white" aria-label="Site footer">
      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span className="font-playfair text-2xl font-bold text-white">
                DRIFT{' '}
                <span className="text-drift-gold">UPSTATE</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              The First Cycle Boat Tour in the Adirondacks. Family owned, locally operated, and
              built on a love for Eagle Bay and Fourth Lake.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-drift-gold hover:text-drift-gold transition-all duration-200"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-drift-gold/70" strokeWidth={1.5} />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-drift-gold/70" strokeWidth={1.5} />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-drift-gold/70" strokeWidth={1.5} />
                  {siteConfig.location.city}, {siteConfig.location.stateAbbr}
                  <br />
                  {siteConfig.location.lake}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-drift-gold/70" strokeWidth={1.5} />
                <span>
                  {siteConfig.season.hours}
                  <br />
                  {siteConfig.season.start} – {siteConfig.season.end}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h3 className="font-montserrat text-xs tracking-widest uppercase text-drift-gold mb-6">
              Stay in the Loop
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Get seasonal updates, early booking access, and local Adirondack tips.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-inter">
            © {siteConfig.season.year} {siteConfig.fullName} · {siteConfig.location.city},{' '}
            {siteConfig.location.stateAbbr}
          </p>
          <div className="flex items-center gap-6">
            {[
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms' },
              { href: '/sitemap', label: 'Sitemap' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-white/30 text-xs italic">
            Made with ♥ in the Adirondacks
          </p>
        </div>
      </div>
    </footer>
  )
}

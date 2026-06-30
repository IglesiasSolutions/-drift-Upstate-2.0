import type { Metadata, Viewport } from 'next'
import { inter, playfair, montserrat } from '@/lib/fonts'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { FloatingActions } from '@/components/ui/FloatingActions'
import SmoothScroll from '@/components/ui/SmoothScroll'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import LoadingScreen from '@/components/ui/LoadingScreen'
import { siteConfig } from '@/config/site'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Cycle Boat Tours in the Adirondacks`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'cycle boat adirondacks',
    'adirondack boat tours',
    'eagle bay ny boat tours',
    'fourth lake boat tours',
    'things to do in adirondacks',
    'adirondack bachelorette party activities',
    'adirondack family activities',
    'pedal boat tour adirondacks',
    'adirondack lake tours for groups',
  ],
  authors: [{ name: 'Drift Upstate Boat Tours' }],
  creator: 'Drift Upstate',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} — The First Cycle Boat Tour in the Adirondacks`,
    description: siteConfig.description,
    siteName: siteConfig.fullName,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Cycle Boat Tours in the Adirondacks`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#162C1D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}
    >
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TouristAttraction',
              name: siteConfig.fullName,
              description: siteConfig.description,
              url: siteConfig.url,
              telephone: siteConfig.contact.phone,
              logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/images/logo.webp`,
                width: 2000,
                height: 1357,
              },
              image: siteConfig.ogImage,
              address: {
                '@type': 'PostalAddress',
                addressLocality: siteConfig.location.city,
                addressRegion: siteConfig.location.stateAbbr,
                addressCountry: 'US',
              },
              openingHours: 'Mo-Su 08:00-20:00',
              priceRange: '$$',
              hasMap: siteConfig.location.mapsUrl,
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
              },
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Global cinematic loading screen — first visit only */}
        <LoadingScreen />

        {/* Premium custom cursor with gold ripple — desktop only */}
        <CustomCursor />

        {/* Gold scroll progress bar */}
        <ScrollProgress />

        <SmoothScroll>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  )
}

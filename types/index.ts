export interface Tour {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  duration: string
  capacity: string
  price: string
  priceNote?: string
  badge: string
  image: string
  imageAlt: string
  highlights: string[]
  perfectFor?: string[]
  cta: string
  ctaHref: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  location: string
  source: 'google' | 'tripadvisor' | 'facebook'
  rating: number
  date?: string
}

export interface CrewMember {
  id: string
  name: string
  title: string
  bio: string
  quote: string
  image: string
  isCapitain: boolean
  funFacts?: {
    playlist?: string
    coffee?: string
    trail?: string
    favoriteSpot?: string
  }
}

export interface AudienceCard {
  emoji: string
  label: string
  description: string
}

export interface FAQ {
  id: string
  category: string
  question: string
  answer: string
}

export interface Stat {
  value: number
  suffix: string
  prefix?: string
  label: string
  decimals?: number
}

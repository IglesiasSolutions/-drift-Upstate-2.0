export const siteConfig = {
  name: 'Drift Upstate',
  fullName: 'Drift Upstate Boat Tours',
  tagline: 'The First Cycle Boat Tour in the Adirondacks.',
  subTagline: 'Life is better on the water.',
  description:
    'The first cycle boat tour in the Adirondacks. Public tours, private charters, coffee cruises & more. Eagle Bay, NY — book your Fourth Lake adventure today.',
  url: 'https://www.driftupstate.com',
  ogImage: 'https://www.driftupstate.com/og.jpg',

  location: {
    city: 'Eagle Bay',
    state: 'New York',
    stateAbbr: 'NY',
    lake: 'Fourth Lake',
    region: 'Adirondacks',
    address: 'Eagle Bay, New York',
    mapsUrl: 'https://maps.google.com/?q=Eagle+Bay+NY+Fourth+Lake',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23222.75!2d-74.85!3d43.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dac2b6f1234567%3A0xabcdef!2sEagle+Bay%2C+NY!5e0!3m2!1sen!2sus!4v1234567890',
  },

  contact: {
    phone: '(315) 516-8687',
    phoneHref: 'tel:+13155168687',
    email: 'hello@driftupstate.com',
    emailHref: 'mailto:hello@driftupstate.com',
  },

  social: {
    instagram: 'https://instagram.com/driftupstate',
    facebook: 'https://www.facebook.com/profile.php?id=61588718680391',
    tiktok: 'https://tiktok.com/@driftupstate',
    youtube: 'https://youtube.com/@driftupstate',
    instagramHandle: '@driftupstate',
  },

  season: {
    start: 'May',
    end: 'October',
    hours: '8:00 AM – Sunset',
    daysOpen: 'Daily',
    year: '2026',
  },

  stats: [
    { value: 90, suffix: ' MIN', label: 'Tour Duration' },
    { value: 14, suffix: '', label: 'Max Guests Per Tour' },
    { value: 7, suffix: ' Days', label: 'Open Every Week' },
    { value: 1, prefix: '#', suffix: '', label: 'Cycle Boat in the Adirondacks' },
  ],

  nav: [
    { href: '/', label: 'Home' },
    { href: '/tours', label: 'Our Tours' },
    { href: '/about', label: 'About' },
    { href: '/crew', label: 'Meet the Crew' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ],
} as const

export type SiteConfig = typeof siteConfig

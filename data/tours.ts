import {
  TOUR_PUBLIC_HERO, TOUR_PUBLIC_CARD,
  TOUR_PUBLIC_DETAIL_1, TOUR_PUBLIC_DETAIL_2, TOUR_PUBLIC_DETAIL_3,
  TOUR_PRIVATE_HERO, TOUR_PRIVATE_CARD,
  TOUR_PRIVATE_DETAIL_1, TOUR_PRIVATE_DETAIL_2, TOUR_PRIVATE_DETAIL_3,
  TOUR_COFFEE_HERO, TOUR_COFFEE_CARD,
  TOUR_COFFEE_DETAIL_1, TOUR_COFFEE_DETAIL_2, TOUR_COFFEE_DETAIL_3,
  TOUR_LADIES_HERO, TOUR_LADIES_CARD,
  TOUR_LADIES_DETAIL_1, TOUR_LADIES_DETAIL_2, TOUR_LADIES_DETAIL_3,
  TOUR_CORPORATE_HERO, TOUR_CORPORATE_CARD,
  TOUR_CORPORATE_DETAIL_1, TOUR_CORPORATE_DETAIL_2, TOUR_CORPORATE_DETAIL_3,
  TOUR_WEDDING_HERO, TOUR_WEDDING_CARD,
  TOUR_WEDDING_DETAIL_1, TOUR_WEDDING_DETAIL_2, TOUR_WEDDING_DETAIL_3,
  TOUR_FAMILY_HERO, TOUR_FAMILY_CARD,
  TOUR_FAMILY_DETAIL_1, TOUR_FAMILY_DETAIL_2, TOUR_FAMILY_DETAIL_3,
} from '@/lib/media'

export interface TourInclusion {
  text: string
}

export interface TourGalleryImage {
  src: string
  alt: string
}

export interface TourData {
  slug: string
  name: string
  shortName: string
  type: string
  tagline: string
  headline: string
  description: string
  detailCopy: string[]
  duration: string
  capacity: string
  priceFrom: string
  priceNote: string
  badge: string
  cardImage: string
  cardImageAlt: string
  heroImage: string
  heroImageAlt: string
  gallery: TourGalleryImage[]
  inclusions: string[]
  perfectFor: string[]
  ctaText: string
  proTip?: string
  testimonialQuote: string
  testimonialAuthor: string
  metaTitle: string
  metaDescription: string
}

export const tours: TourData[] = [
  {
    slug: 'public',
    name: 'The Classic Drift',
    shortName: 'Public Tour',
    type: 'Public Tour',
    tagline: 'Join fellow adventurers for a scenic 90-minute cruise on Fourth Lake.',
    headline: 'The best 90 minutes on the Adirondacks.',
    description:
      'Hop aboard Drift Upstate\'s flagship public tour and experience Fourth Lake the way it was meant to be experienced — with great people, pedal power, and panoramic Adirondack views that stop you mid-sentence.',
    detailCopy: [
      'Our public tours bring together guests from all walks of life — families exploring the Adirondacks for the first time, couples looking for something different, solo travelers looking to make memories. Everyone leaves with the same result: a smile they can\'t shake for the rest of the day.',
      'Pedal as much or as little as you want. Our certified captain handles navigation, safety, and the perfect playlist while you soak in the scenery. There\'s no experience required — just a willingness to have a great time.',
    ],
    duration: '90 Minutes',
    capacity: 'Up to 14 Passengers',
    priceFrom: 'From $45',
    priceNote: 'per person',
    badge: '90 MIN · From $45',
    cardImage: TOUR_PUBLIC_CARD,
    cardImageAlt: 'Group enjoying the public cycle boat tour on Fourth Lake',
    heroImage: TOUR_PUBLIC_HERO,
    heroImageAlt: 'The Drift Upstate cycle boat full of happy guests on Fourth Lake',
    gallery: [
      { src: TOUR_PUBLIC_DETAIL_1, alt: 'Guests pedaling and laughing on the cycle boat' },
      { src: TOUR_PUBLIC_DETAIL_2, alt: 'Captain at the helm with Fourth Lake behind' },
      { src: TOUR_PUBLIC_DETAIL_3, alt: 'Aerial view of cycle boat on Fourth Lake' },
    ],
    inclusions: [
      'Certified Coast Guard licensed captain on board',
      'Life jackets provided for all guests',
      'BYOB — bring your own beverages (cans only)',
      'Snacks welcome on board',
      'On-board Bluetooth sound system',
      'Departs from Eagle Bay dock',
      'All safety equipment included',
    ],
    perfectFor: ['Families', 'Couples', 'Friend Groups', 'Solo Travelers', 'Vacationers'],
    ctaText: 'Book the Classic Drift',
    proTip: 'Weekend tours sell out 2–3 weeks in advance in July and August. Book early!',
    testimonialQuote:
      'Best experience of our whole Adirondacks trip. We did the public tour not knowing anyone and left feeling like we\'d made lifelong friends. The views are just unreal.',
    testimonialAuthor: 'Sarah M. — Albany, NY · Google Review',
    metaTitle: 'Public Cycle Boat Tour — Classic Drift · Drift Upstate',
    metaDescription:
      'Join Drift Upstate\'s signature public cycle boat tour on Fourth Lake. 90 minutes, up to 14 guests, BYOB. The best way to see the Adirondacks. From $45/person. Book now.',
  },
  {
    slug: 'private',
    name: 'Your Boat. Your Moment.',
    shortName: 'Private Charter',
    type: 'Private Charter',
    tagline: 'Reserve the entire boat exclusively for your group.',
    headline: 'When only the best will do.',
    description:
      'Take complete control of the entire Drift Upstate experience. Private charters give you the whole boat, your own captain, your playlist, and a memory that belongs entirely to your group.',
    detailCopy: [
      'Whether you\'re planning a bachelorette weekend, celebrating a milestone birthday, closing a deal with your team, or simply wanting a private sunset for two — a private charter is the most extraordinary way to experience Eagle Bay and Fourth Lake.',
      'We work with you ahead of time to customize every detail. Decorations, special requests, themed music, timing around the sunset — it\'s your boat, your rules. We just make sure it\'s perfect.',
    ],
    duration: '2 Hours',
    capacity: 'Entire boat for your group',
    priceFrom: 'From $700',
    priceNote: 'full boat exclusive',
    badge: 'PRIVATE · From $700',
    cardImage: TOUR_PRIVATE_CARD,
    cardImageAlt: 'Private group on a sunset charter on Fourth Lake',
    heroImage: TOUR_PRIVATE_HERO,
    heroImageAlt: 'Intimate private charter setting on Fourth Lake at golden hour',
    gallery: [
      { src: TOUR_PRIVATE_DETAIL_1, alt: 'Small group celebrating on private charter' },
      { src: TOUR_PRIVATE_DETAIL_2, alt: 'Decorated boat for a bachelorette party' },
      { src: TOUR_PRIVATE_DETAIL_3, alt: 'Corporate team on a private lake charter' },
    ],
    inclusions: [
      'Entire boat reserved exclusively for your group',
      'Certified captain dedicated to your group only',
      'Custom music playlist — you control the vibe',
      '2-hour exclusive experience on the lake',
      'Decoration packages available on request',
      'BYOB — cans and soft-sided coolers welcome',
      'Available any time of day — including sunset',
    ],
    perfectFor: ['Bachelorette Parties', 'Birthday Celebrations', 'Proposals', 'Anniversary', 'Corporate Teams', 'Family Reunions'],
    ctaText: 'Request a Private Charter',
    proTip: 'Ask about our bachelorette and birthday packages — we handle the decorations so you don\'t have to.',
    testimonialQuote:
      'We booked the private charter for my best friend\'s bachelorette and it was the absolute highlight of the weekend. The captain was amazing, the boat was gorgeous, and Fourth Lake at sunset is something else entirely.',
    testimonialAuthor: 'Megan K. — Syracuse, NY · Google Review',
    metaTitle: 'Private Cycle Boat Charter — Drift Upstate · Eagle Bay, NY',
    metaDescription:
      'Reserve the entire Drift Upstate cycle boat exclusively for your group. Perfect for bachelorettes, birthdays, proposals, and corporate events. Fourth Lake, Eagle Bay NY.',
  },
  {
    slug: 'coffee-cruise',
    name: 'Morning on the Lake',
    shortName: 'Coffee Cruise',
    type: 'Coffee Cruise',
    tagline: 'Start your day the Adirondack way — fresh air, calm water, great coffee.',
    headline: 'The most scenic cup of coffee you\'ll ever have.',
    description:
      'Before the world wakes up, before the crowds arrive, before the noise begins — there\'s a window of pure Adirondack magic that most visitors never find. The Coffee Cruise is your key to that moment.',
    detailCopy: [
      'We set out early, when the mist is still rising off Fourth Lake and the mountains catch the first light of the day. Small group, no rush, just the sound of the water and whatever you decide to put in your thermos.',
      'This is the Adirondacks at their most honest. No performance, no party energy — just the raw, quiet beauty of one of New York\'s most extraordinary natural places, experienced at the pace it deserves.',
    ],
    duration: '45 Minutes',
    capacity: 'Limited to 8 guests',
    priceFrom: 'From $30',
    priceNote: 'per person',
    badge: '45 MIN · From $30',
    cardImage: TOUR_COFFEE_CARD,
    cardImageAlt: 'Peaceful morning coffee cruise on Fourth Lake with mist rising',
    heroImage: TOUR_COFFEE_HERO,
    heroImageAlt: 'Still morning on Fourth Lake with mist and soft golden light',
    gallery: [
      { src: TOUR_COFFEE_DETAIL_1, alt: 'Coffee mug held up against the misty lake backdrop' },
      { src: TOUR_COFFEE_DETAIL_2, alt: 'Early morning golden light breaking over Fourth Lake' },
      { src: TOUR_COFFEE_DETAIL_3, alt: 'Small intimate group on the morning coffee cruise' },
    ],
    inclusions: [
      'Small group maximum — 8 guests for an intimate experience',
      'Morning departure (times vary by season)',
      'Certified captain on board',
      'On-board coffee bar included',
      'Life jackets provided',
      'Perfect morning activity before a busy Adirondacks day',
      'Departs from Eagle Bay dock',
    ],
    perfectFor: ['Early Risers', 'Nature Lovers', 'Photographers', 'Couples', 'Anyone needing a calm reset'],
    ctaText: 'Book the Coffee Cruise',
    proTip: 'Bring a light jacket — mornings on the lake are crisp, even in summer. It\'s part of the charm.',
    testimonialQuote:
      'I did the Coffee Cruise on a Tuesday morning and it reset my entire trip. The mist, the stillness, the coffee in my hand — I will never forget it. Genuinely one of the best mornings of my life.',
    testimonialAuthor: 'James T. — New York City · Google Review',
    metaTitle: 'Morning Coffee Cruise — Drift Upstate · Fourth Lake, Adirondacks',
    metaDescription:
      'Experience Fourth Lake before the crowds arrive. Drift Upstate\'s Coffee Cruise is a peaceful 45-minute morning boat tour. Small group, calm water, big views. Coffee bar included. From $30.',
  },
  {
    slug: 'ladies-night',
    name: 'The Girls Are Back in Town.',
    shortName: 'Ladies Night',
    type: 'Ladies Night / Bachelorette',
    tagline: 'Bachelorette parties, birthday celebrations, and girls\' nights on the water.',
    headline: 'The lake is calling, and it\'s a girls\' night.',
    description:
      'Whether you\'re celebrating a bride-to-be, a milestone birthday, or simply a long overdue girls\' trip to the Adirondacks — Drift Upstate\'s Ladies Night experience is the exclamation point your evening needs.',
    detailCopy: [
      'We do one thing really well: making sure the women on this boat have the absolute time of their lives. Great music, great views, a captain who knows how to read the room, and the kind of evening that shows up on Instagram whether you planned it or not.',
      'Sunset departures are our most popular option for Ladies Night — the light hits the Adirondack peaks just right, the golden reflections on the water are almost impossible to believe, and the energy on the boat is electric.',
    ],
    duration: '90 Minutes',
    capacity: 'Up to 14 guests',
    priceFrom: 'From $45',
    priceNote: 'per person',
    badge: '90 MIN · From $45',
    cardImage: TOUR_LADIES_CARD,
    cardImageAlt: 'Women celebrating on a sunset cruise on Fourth Lake',
    heroImage: TOUR_LADIES_HERO,
    heroImageAlt: 'Joyful group of women on the Ladies Night cycle boat cruise at sunset',
    gallery: [
      { src: TOUR_LADIES_DETAIL_1, alt: 'Bachelorette party on the cycle boat with decorations' },
      { src: TOUR_LADIES_DETAIL_2, alt: 'Group of women toasting at golden hour on the lake' },
      { src: TOUR_LADIES_DETAIL_3, alt: 'Evening celebration on the cycle boat with lights' },
    ],
    inclusions: [
      'Private or semi-private booking options',
      'Certified captain on board',
      'Festive decoration add-ons available',
      'Custom music playlist — your vibe, your rules',
      'BYOB — cans and soft-sided coolers welcome',
      'Sunset departure options available',
      'Bachelorette and birthday packages available',
    ],
    perfectFor: ['Bachelorette Parties', 'Birthday Celebrations', 'Girls\' Trips', 'Ladies\' Night Out', 'Girls\' Weekend'],
    ctaText: 'Book Ladies Night',
    proTip: 'Ask about our bachelorette party packages — sashes, balloons, and custom signs can be arranged ahead of your tour.',
    testimonialQuote:
      'Did this for my bachelorette and I cannot overstate how perfect it was. The captain, the sunset, the lake — all of it was absolutely magical. Every single one of my girls is still talking about it.',
    testimonialAuthor: 'Rachel S. — Saratoga Springs, NY · Google Review',
    metaTitle: 'Ladies Night & Bachelorette Boat Tour — Drift Upstate · Eagle Bay, NY',
    metaDescription:
      'Celebrate on the water with Drift Upstate\'s Ladies Night cycle boat tour. Perfect for bachelorette parties and birthdays on Fourth Lake. From $45/person. Eagle Bay, NY.',
  },

  // ── Corporate Events ───────────────────────────────────────────────────────
  {
    slug: 'corporate',
    name: 'The Corporate Escape',
    shortName: 'Corporate Events',
    type: 'Corporate & Team Events',
    tagline: 'Team building experiences that no conference room could ever replicate.',
    headline: 'Take your team off-site — onto the water.',
    description:
      'The best teams don\'t just work well together — they play well together. Drift Upstate offers private corporate charters that create genuine bonding moments in one of the most beautiful settings in New York State.',
    detailCopy: [
      'There\'s something that happens when you take a team off-site and put them on a boat together. The hierarchy flattens. The usual office dynamics dissolve. What\'s left is a group of people actually connecting — laughing, competing at the pedals, talking about things that never come up in a meeting.',
      'We specialize in corporate groups, from small leadership retreats to full team outings. Everything is private, everything is customizable, and everything is designed to send your team back to work with more energy and better relationships than when they left.',
    ],
    duration: '90 or 120 Minutes',
    capacity: 'Full boat for your team',
    priceFrom: 'Custom Pricing',
    priceNote: 'based on group size & duration',
    badge: 'CORPORATE · Inquire',
    cardImage: TOUR_CORPORATE_CARD,
    cardImageAlt: 'Corporate team enjoying a private boat tour on Fourth Lake',
    heroImage: TOUR_CORPORATE_HERO,
    heroImageAlt: 'Professional team relaxing on a private charter on Fourth Lake',
    gallery: [
      { src: TOUR_CORPORATE_DETAIL_1, alt: 'Team members pedaling and laughing on corporate charter' },
      { src: TOUR_CORPORATE_DETAIL_2, alt: 'Corporate team toasting on the water at golden hour' },
      { src: TOUR_CORPORATE_DETAIL_3, alt: 'Group photo of corporate team on dock before boarding' },
    ],
    inclusions: [
      'Full boat reserved exclusively for your team',
      'Dedicated captain for the duration of your charter',
      'Custom music playlist — you set the vibe',
      'Flexible scheduling including early morning and evening',
      'BYOB — cans and soft-sided coolers welcome',
      'Branded signage and team swag placement available',
      'Corporate invoice billing available on request',
      'Follow-up group photo package optional add-on',
    ],
    perfectFor: ['Team Building', 'Client Entertainment', 'Leadership Retreats', 'Office Parties', 'Sales Team Incentives', 'Company Milestones'],
    ctaText: 'Request Corporate Charter',
    proTip: 'Book 4–6 weeks in advance for weekday corporate outings. Evenings on the lake make exceptional client entertainment — the sunset closes every deal.',
    testimonialQuote:
      'We brought our entire sales team out for a corporate charter and it was the best team-building event we\'ve done in five years. No slides, no forced activities — just a beautiful lake, a great captain, and a team that left closer than they arrived.',
    testimonialAuthor: 'Mark D. — VP Sales, Albany NY · Google Review',
    metaTitle: 'Corporate Team Building Boat Tour — Drift Upstate · Eagle Bay, NY',
    metaDescription:
      'Private corporate charters on Fourth Lake for team building, client entertainment, and company events. Eagle Bay, Adirondacks. Custom pricing for groups.',
  },

  // ── Wedding Charter ─────────────────────────────────────────────────────────
  {
    slug: 'wedding',
    name: 'The Bridal Charter',
    shortName: 'Wedding Charter',
    type: 'Wedding & Engagement',
    tagline: 'The most romantic backdrop in the Adirondacks, reserved just for you.',
    headline: 'Start your forever on the water.',
    description:
      'Fourth Lake at golden hour is one of the most breathtaking settings in New York State. Our Bridal Charter puts you, your partner, and your wedding party in the middle of it — for moments and photographs that nothing else can match.',
    detailCopy: [
      'Whether it\'s an engagement proposal, a bridal party excursion, a post-ceremony celebration, or a honeymoon sunset cruise — the Bridal Charter is your private, perfect moment on the lake. We work with you ahead of time to ensure every detail is exactly right.',
      'Some of our most cherished guest memories began with a ring, a boat, and a sunset over the Adirondacks. We can help you create yours — complete with decorations, flowers, champagne service, and a captain who knows exactly when to create the perfect moment.',
    ],
    duration: '90 or 120 Minutes',
    capacity: 'Up to 14 guests',
    priceFrom: 'From $350',
    priceNote: 'based on duration & add-ons',
    badge: 'WEDDING · From $350',
    cardImage: TOUR_WEDDING_CARD,
    cardImageAlt: 'Romantic couple on private charter at sunset on Fourth Lake',
    heroImage: TOUR_WEDDING_HERO,
    heroImageAlt: 'Couple on the Drift Upstate cycle boat at golden hour on Fourth Lake',
    gallery: [
      { src: TOUR_WEDDING_DETAIL_1, alt: 'Couple on cycle boat with Adirondack mountains behind them' },
      { src: TOUR_WEDDING_DETAIL_2, alt: 'Bridal party celebrating on the water at sunset' },
      { src: TOUR_WEDDING_DETAIL_3, alt: 'Intimate romantic moment on the private charter' },
    ],
    inclusions: [
      'Full private boat exclusively for your group',
      'Experienced captain who coordinates with your vision',
      'Floral decoration packages available',
      'Champagne / sparkling wine service optional add-on',
      'Custom music playlist — your special songs',
      'Sunset departure timing coordinated for you',
      'Coordination with wedding photographers welcome',
      'Proposal surprise coordination available',
    ],
    perfectFor: ['Proposals', 'Engagement Photos', 'Bridal Party Experience', 'Honeymoon Sunset', 'Rehearsal Dinner Follow-up', 'Anniversary Celebration'],
    ctaText: 'Plan Your Bridal Charter',
    proTip: 'If you\'re planning a proposal, tell us in advance. Our captain will help create the perfect moment — including timing the boat position for the light.',
    testimonialQuote:
      'My fiancé proposed on the Drift Upstate boat as the sun was setting behind the mountains. I had no idea. The captain knew and had positioned us perfectly. I said yes, obviously. It was the most beautiful moment of my life.',
    testimonialAuthor: 'Emma L. — Saratoga Springs, NY · Google Review',
    metaTitle: 'Wedding & Engagement Boat Charter — Drift Upstate · Fourth Lake, NY',
    metaDescription:
      'Private bridal charters on Fourth Lake for proposals, engagement photos, bridal parties, and honeymoons. The most romantic backdrop in the Adirondacks.',
  },

  // ── Family Cruise ───────────────────────────────────────────────────────────
  {
    slug: 'family',
    name: 'Family Adventure',
    shortName: 'Family Cruise',
    type: 'Family Experience',
    tagline: 'The lake adventure your whole family will be talking about until next summer.',
    headline: 'The best summer memory your kids will ever make.',
    description:
      'Drift Upstate is genuinely family-friendly — and we mean that. Kids love pedaling, parents love the scenery, and everyone leaves with the kind of shared memory that becomes a family story.',
    detailCopy: [
      'There aren\'t many activities that work equally well for a 7-year-old and a 70-year-old. A cycle boat tour on Fourth Lake is one of them. Kids get to pedal (as much or as little as they want), see the Adirondacks from a completely new perspective, and experience something they\'ve never done before.',
      'Our captains are experienced with families and know how to keep the energy right — engaging the kids, answering every "what\'s that mountain called?" question, and making sure parents get a few peaceful minutes to just look at the view.',
    ],
    duration: '90 Minutes',
    capacity: 'Up to 14 guests',
    priceFrom: 'From $45',
    priceNote: 'per person (kids under 5 free)',
    badge: '90 MIN · From $45/person',
    cardImage: TOUR_FAMILY_CARD,
    cardImageAlt: 'Happy family with kids on cycle boat tour on Fourth Lake',
    heroImage: TOUR_FAMILY_HERO,
    heroImageAlt: 'Family enjoying a cycle boat tour on Fourth Lake with Adirondack mountains',
    gallery: [
      { src: TOUR_FAMILY_DETAIL_1, alt: 'Children pedaling with big smiles on the cycle boat' },
      { src: TOUR_FAMILY_DETAIL_2, alt: 'Multi-generational family together on the lake' },
      { src: TOUR_FAMILY_DETAIL_3, alt: 'Kids looking at Adirondack scenery from the boat' },
    ],
    inclusions: [
      'All ages welcome — kids under 5 ride free',
      'Life jackets sized for children provided',
      'Captain experienced with family groups',
      'Pedaling is optional — rest and soak in the view',
      'BYOB (adults) + kid-friendly snacks welcome',
      'Binoculars on board for wildlife spotting',
      'Perfect complement to any Adirondack family vacation',
      'Departs from Eagle Bay dock',
    ],
    perfectFor: ['Families with Kids', 'Multi-Generational Groups', 'Family Reunions', 'Grandparent Visits', 'Summer Vacation Activity', 'First-Time Adirondack Visitors'],
    ctaText: 'Book Family Adventure',
    proTip: 'Younger kids (5-10) often enjoy the experience most on calmer morning tours. Ask about our family-friendly departures when booking.',
    testimonialQuote:
      'We brought our kids (8 and 11) and both sets of grandparents. Every single person — from the 8-year-old to the 74-year-old grandmother — had the absolute best time. This is the rare activity that truly works for everyone.',
    testimonialAuthor: 'The Henderson Family — Boston, MA · Google Review',
    metaTitle: 'Family Cycle Boat Tour — Drift Upstate · Eagle Bay, Adirondacks',
    metaDescription:
      'Family-friendly cycle boat tours on Fourth Lake in the Adirondacks. All ages welcome, kids under 5 free. Life jackets provided. From $45/person. Eagle Bay, NY.',
  },
]

export function getTourBySlug(slug: string): TourData | undefined {
  return tours.find((t) => t.slug === slug)
}

export function getAllTourSlugs(): string[] {
  return tours.map((t) => t.slug)
}

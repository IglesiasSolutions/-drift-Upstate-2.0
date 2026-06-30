export interface FAQItem {
  id: string
  category: string
  categorySlug: string
  question: string
  answer: string
}

export const faqCategories = [
  { label: 'All Questions', slug: 'all' },
  { label: 'About the Tour', slug: 'about' },
  { label: 'Booking & Cancellation', slug: 'booking' },
  { label: 'Weather & Safety', slug: 'weather' },
  { label: 'BYOB & What to Bring', slug: 'byob' },
  { label: 'Getting Here', slug: 'getting-here' },
  { label: 'Groups & Events', slug: 'groups' },
]

export const faqs: FAQItem[] = [
  // ── ABOUT THE TOUR ────────────────────────────────────────────────────────
  {
    id: 'what-is-cycle-boat',
    category: 'About the Tour',
    categorySlug: 'about',
    question: 'How does a cycle boat work?',
    answer:
      'Think of a cycle boat as a floating patio with pedals. Passengers sit around a center bar area and pedal (or relax — there\'s absolutely no pressure!), while our certified captain steers the boat, handles navigation, and manages safety. There\'s a sound system on board, the views are extraordinary, and the whole experience is unlike anything else in the Adirondacks.',
  },
  {
    id: 'is-pedaling-hard',
    category: 'About the Tour',
    categorySlug: 'about',
    question: 'Is it hard to pedal?',
    answer:
      'Not at all. The pedaling resistance is very light — more like a leisurely spin on a beach cruiser than any kind of workout. Guests of all fitness levels, ages, and abilities enjoy it comfortably, including kids and seniors. You can pedal the whole time or not at all — the boat moves either way.',
  },
  {
    id: 'how-many-people',
    category: 'About the Tour',
    categorySlug: 'about',
    question: 'How many people fit on the boat?',
    answer:
      'Our cycle boat accommodates up to 14 passengers on public and private tours. Our Coffee Cruise is limited to 8 guests for a more intimate experience. All tours include a certified captain who does not count toward the passenger limit.',
  },
  {
    id: 'captain-duties',
    category: 'About the Tour',
    categorySlug: 'about',
    question: 'What does the captain do?',
    answer:
      'Your captain handles all navigation, steering, and safety while you enjoy the ride. They also manage the music system, keep an eye on weather conditions, and generally make sure your experience is as fun and safe as possible. Think of them as part tour guide, part DJ, and part safety professional — all in one.',
  },
  {
    id: 'alcohol-on-board',
    category: 'About the Tour',
    categorySlug: 'about',
    question: 'Can we bring alcohol on the tour?',
    answer:
      'Yes! Drift Upstate is BYOB (bring your own beverages). We ask that all drinks be in cans or served in cups — no glass bottles on the boat for safety reasons. Soft-sided coolers fit easily and are encouraged. Please drink responsibly, and remember that our captain has final say over the safety of all guests at all times.',
  },
  {
    id: 'tour-length',
    category: 'About the Tour',
    categorySlug: 'about',
    question: 'How long are the tours?',
    answer:
      'Public tours and Ladies Night are 90 minutes. Coffee Cruises run 60 minutes. Private charters are available in 90 or 120-minute options. We\'ll let you know the exact route and departure/return times when you book.',
  },

  // ── BOOKING & CANCELLATION ─────────────────────────────────────────────────
  {
    id: 'book-advance',
    category: 'Booking & Cancellation',
    categorySlug: 'booking',
    question: 'How far in advance should I book?',
    answer:
      'Weekend tours during July and August book out 2–3 weeks in advance. We strongly recommend booking as early as possible, especially for Saturday sunset tours and holiday weekends. Weekday availability is generally more flexible. For private charters, we suggest booking at least 2–4 weeks ahead.',
  },
  {
    id: 'cancellation-policy',
    category: 'Booking & Cancellation',
    categorySlug: 'booking',
    question: 'What is your cancellation policy?',
    answer:
      'Full refunds are available for cancellations made at least 48 hours before your scheduled tour. Cancellations made within 48 hours of the tour receive a full credit valid for the current season. We do not offer cash refunds within 48 hours, but we will always work with you to reschedule.',
  },
  {
    id: 'group-discount',
    category: 'Booking & Cancellation',
    categorySlug: 'booking',
    question: 'Do you offer group discounts?',
    answer:
      'We offer special pricing for large groups and repeat guests. For private charter groups and corporate bookings, contact us directly for a custom quote. We\'re always happy to work with groups to make Drift Upstate accessible.',
  },
  {
    id: 'gift-cards',
    category: 'Booking & Cancellation',
    categorySlug: 'booking',
    question: 'Do you sell gift cards?',
    answer:
      'Yes! Drift Upstate gift cards make the perfect gift for any occasion — birthdays, anniversaries, holidays, or just because. Gift cards are valid for any tour and any date throughout the season. Purchase them online on our Gift Cards page.',
  },
  {
    id: 'age-requirement',
    category: 'Booking & Cancellation',
    categorySlug: 'booking',
    question: 'Is there an age requirement?',
    answer:
      'All ages are welcome on public tours and private charters — we love welcoming families with children. Children under 12 are required to wear a life jacket at all times. Ladies Night tours are 21+ (ID required). Coffee Cruise tours welcome guests 18+.',
  },

  // ── WEATHER & SAFETY ────────────────────────────────────────────────────────
  {
    id: 'weather-rain',
    category: 'Weather & Safety',
    categorySlug: 'weather',
    question: 'What happens if it rains?',
    answer:
      'Light rain is not a cancellation — honestly, a rainy Adirondack morning on the lake has its own quiet magic. We cancel tours when there is thunder, lightning, or sustained high winds that would make the experience unsafe. You\'ll receive a text notification at least 2 hours before your tour time if we need to cancel due to weather. Full refunds are always issued for weather cancellations.',
  },
  {
    id: 'safety-standards',
    category: 'Weather & Safety',
    categorySlug: 'weather',
    question: 'Is the tour safe?',
    answer:
      'Absolutely. All captains hold active Coast Guard licenses and are certified in First Aid and CPR. Life jackets are provided for all guests and are required for non-swimmers and all children under 12. The waters of Fourth Lake are calm and well-suited for our tours. Safety briefings are given before every departure.',
  },
  {
    id: 'swim-ability',
    category: 'Weather & Safety',
    categorySlug: 'weather',
    question: 'Do I need to be able to swim?',
    answer:
      'No. Life jackets are available for all guests and required for non-swimmers. Simply let your captain know when boarding and they\'ll get you set up. The boat is stable and not prone to tipping — our guests very rarely end up in the water, but we\'re always prepared.',
  },
  {
    id: 'physical-requirements',
    category: 'Weather & Safety',
    categorySlug: 'weather',
    question: 'Is the tour accessible for guests with limited mobility?',
    answer:
      'We do our best to accommodate guests with mobility limitations. Please contact us before booking so we can discuss your specific needs and ensure we can make the experience safe and comfortable for you. The boat requires navigating a dock and boarding step, so some physical mobility is needed.',
  },

  // ── BYOB & WHAT TO BRING ────────────────────────────────────────────────────
  {
    id: 'what-to-bring',
    category: 'BYOB & What to Bring',
    categorySlug: 'byob',
    question: 'What should I bring on the tour?',
    answer:
      'We recommend: your beverages and snacks (BYOB, cans only, no glass), a soft-sided cooler, sunscreen and sunglasses, a light layer for evening/morning tours, comfortable shoes or sandals with straps (no flip-flops that could slip), and your phone fully charged for photos (the views are worth it). That\'s really it — we handle everything else.',
  },
  {
    id: 'food-on-boat',
    category: 'BYOB & What to Bring',
    categorySlug: 'byob',
    question: 'Can I bring food?',
    answer:
      'Yes! Snacks and light food are welcome on board. We just ask that you be mindful of trash and keep the boat clean for the next guests. For full-meal style picnics, we suggest sticking to easy finger foods.',
  },
  {
    id: 'glass-bottles',
    category: 'BYOB & What to Bring',
    categorySlug: 'byob',
    question: 'Can I bring glass bottles?',
    answer:
      'No glass on the boat, please. Cans and plastic cups are fine. This is a safety policy — broken glass on a boat is genuinely dangerous. If you\'re bringing wine or spirits, decant into plastic cups or cans before boarding.',
  },
  {
    id: 'cooler-size',
    category: 'BYOB & What to Bring',
    categorySlug: 'byob',
    question: 'How big a cooler can I bring?',
    answer:
      'Soft-sided coolers work best and fit under the seating easily. Standard hard coolers (up to medium size) can typically be accommodated but space is limited. Please keep in mind that other guests will also be bringing items on public tours, so the more compact the better.',
  },

  // ── GETTING HERE ────────────────────────────────────────────────────────────
  {
    id: 'how-to-get-here',
    category: 'Getting Here',
    categorySlug: 'getting-here',
    question: 'How do I get to Eagle Bay?',
    answer:
      'Eagle Bay is located in the heart of the Adirondacks in Herkimer County, NY. From Albany: approximately 2.5 hours via Route 28 North through the Adirondacks. From New York City: approximately 4 hours via I-87 North (Adirondack Northway) to Route 28. From Syracuse: approximately 2 hours via Route 12 North. GPS coordinates for the dock will be provided in your booking confirmation.',
  },
  {
    id: 'parking',
    category: 'Getting Here',
    categorySlug: 'getting-here',
    question: 'Where do I park?',
    answer:
      'Parking is available near the dock in Eagle Bay. Specific parking instructions and the exact dock address are included in your booking confirmation email. We recommend arriving 10–15 minutes before your scheduled tour time to park and check in comfortably.',
  },
  {
    id: 'nearby-amenities',
    category: 'Getting Here',
    categorySlug: 'getting-here',
    question: 'What else is there to do in Eagle Bay / Old Forge area?',
    answer:
      'Eagle Bay and the surrounding area (including Old Forge and Inlet) offer incredible hiking, kayaking, swimming, dining, and shopping. The Fulton Chain of Lakes is stunning for exploring by water. We\'re happy to make local recommendations — just ask your captain!',
  },

  // ── GROUPS & EVENTS ─────────────────────────────────────────────────────────
  {
    id: 'private-events',
    category: 'Groups & Events',
    categorySlug: 'groups',
    question: 'Can I host a corporate event or team outing?',
    answer:
      'Absolutely — and it\'s a fantastic choice. Private charters for corporate groups are one of our most popular bookings. Being on the water together creates a naturally relaxed, bonding atmosphere that\'s very difficult to replicate in a conference room. Contact us to discuss custom packages for corporate groups.',
  },
  {
    id: 'bachelorette',
    category: 'Groups & Events',
    categorySlug: 'groups',
    question: 'Do you accommodate bachelorette parties?',
    answer:
      'We absolutely do and we love them. Bachelorette parties are some of our most celebrated tours. We offer decoration packages (balloons, sashes, signs), custom music playlists, and Ladies Night timing options specifically designed to make the event special. Book early — bachelorette weekends fill up quickly in summer.',
  },
  {
    id: 'multiple-boats',
    category: 'Groups & Events',
    categorySlug: 'groups',
    question: 'What if my group is larger than the boat capacity?',
    answer:
      'For groups larger than 14, contact us to discuss options. Depending on scheduling, we may be able to run multiple tours back-to-back or simultaneously. Reach out and we\'ll work with you to find a solution that works for everyone.',
  },
]

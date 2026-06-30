# Drift Upstate — Complete Website Redesign & Conversion Audit

**Prepared for:** Drift Upstate Boat Tours  
**Location:** Eagle Bay Village, New York — Adirondacks  
**Date:** June 2026  
**Scope:** Full UX/UI Audit, Copywriting, SEO, Conversion, Sitemap & Wireframes

---

## TABLE OF CONTENTS

1. Brand Vision & Design Philosophy
2. Global Design System
3. Navigation Redesign
4. HOME Page — Full Audit & Redesign
5. ABOUT Page — Full Audit & Redesign
6. SERVICES Page — Full Audit & Redesign
7. TEAM Page — Full Audit & Redesign
8. CONTACT Page — Full Audit & Redesign
9. FAQ Page — Full Audit & Redesign
10. BOOKING FLOW — Full Redesign
11. FOOTER — Full Redesign
12. Mobile Experience
13. Images & Video Strategy
14. SEO Strategy
15. Performance & Speed
16. Conversion Optimization Master Plan
17. Scoring Report
18. Implementation Roadmap (4 Phases)
19. Complete Sitemap
20. Full Page Wireframes

---

## 1. BRAND VISION & DESIGN PHILOSOPHY

### The Brand Feeling
Drift Upstate is not just a boat tour — it is the defining memory of an Adirondack vacation.  
Every pixel on this website must communicate: *"This is the experience you came to the Adirondacks for."*

**Emotional Arc of the Visitor Journey:**
> Curiosity → Excitement → Trust → Desire → Booking

### Design DNA
The website should feel like three brands had a child:
- **Apple** — clean, white space, cinematic, premium
- **Airbnb** — warm, experiential, trust-driven, community
- **Disney** — storytelling, joy, wonder, magic

### Core Brand Attributes
| Attribute | Expression |
|-----------|-----------|
| Luxury | Clean layouts, premium fonts, generous white space |
| Fun | Bold color moments, playful micro-animations, energy |
| Adventure | Drone footage, Adirondack landscape, nature immersion |
| Modern | Minimal chrome, scroll-triggered reveals, video-first |
| Instagram-worthy | Cinematic photography, lifestyle imagery, golden hour tones |
| Cinematic | Full-bleed video, parallax depth, dramatic compositions |

### Color Palette

**Primary Colors:**
- Deep Adirondack Navy: `#0D1B2A` — authority, depth, water at dusk
- Drift Gold: `#C9A84C` — premium, warmth, sunset on the water
- Pure White: `#FFFFFF` — breathing room, luxury, clarity

**Secondary Colors:**
- Lake Mist: `#E8EFF5` — section backgrounds, soft contrast
- Forest Green: `#2D5016` — nature, Adirondack identity
- Sunset Coral: `#E8734A` — energy, CTAs, excitement accents

**Usage Rule:** 70% Navy/White, 20% Lake Mist/Forest, 10% Gold/Coral (used only for highest-priority CTAs and accents)

### Typography System

**Display/Hero:** Playfair Display — cinematic, editorial, premium (for headlines)  
**Body:** Inter — modern, clean, readable at all sizes  
**Accent:** Montserrat Semibold — navigation, labels, CTAs  
**Rule:** Never use more than 2 fonts on one screen

### Motion & Animation Philosophy
- Scroll-triggered fade-ins: 400ms ease-out, 20px upward translate
- Hover states: 200ms transition, subtle scale 1.02 or color shift
- Hero video: autoplay, muted, loop, no controls shown
- Page transitions: 300ms cross-fade
- Never animate more than 2 elements simultaneously to avoid chaos
- Parallax: used on hero and 2-3 key sections only — not on mobile

---

## 2. GLOBAL DESIGN SYSTEM

### Squarespace Template Recommendation
**Use: Squarespace 7.1 with a Fluid Engine layout**

Template starting point: **Riviera** or **Paloma** (both support full-bleed video, sticky nav, and modern grid systems)

Enable: Fluid Engine page editor on all pages for maximum layout control.

### Spacing System
- Section vertical padding: 120px desktop / 64px mobile
- Column gutters: 32px
- Card inner padding: 40px desktop / 24px mobile
- CTA buttons: 56px height, 32px horizontal padding, border-radius 4px

### Button System

**Primary CTA (BOOK NOW):**
- Background: `#C9A84C` (Drift Gold)
- Text: `#0D1B2A` (Navy) — ALL CAPS, Montserrat Semibold, 14px tracking 0.08em
- Hover: Background darkens to `#A8893E`, subtle upward 2px shift
- Used on: Every page, above the fold on mobile

**Secondary CTA (LEARN MORE / SEE TOURS):**
- Style: Ghost button — transparent background, 2px Navy border
- Text: Navy, same font as primary
- Hover: Navy fill, white text

**Tertiary (text links):**
- Underline on hover, no background
- Used for low-priority navigation actions

### Icon Style
Use line icons (1.5px stroke weight) from a single system — recommend Phosphor Icons or Heroicons.  
Never mix icon families.

---

## 3. NAVIGATION REDESIGN

### What to Remove
- Drop any cluttered multi-level dropdowns
- Remove any text-heavy nav items (abbreviate everything to 1-2 words)
- Remove any default Squarespace placeholder pages left visible

### New Navigation Structure

**Desktop (Sticky — appears after 60px scroll):**

```
[DRIFT UPSTATE LOGO — left]    [OUR TOURS]  [ABOUT]  [MEET THE CREW]  [FAQ]  [CONTACT]    [BOOK NOW →]
```

- Logo: Wordmark left-aligned, gold color on dark nav, navy on light nav
- Nav links: Montserrat Medium, 13px, all caps, 0.1em letter-spacing, white on scroll
- BOOK NOW: Always Gold pill button, right-aligned, never disappears on scroll
- Nav background: Transparent over hero, transitions to `rgba(13,27,42,0.95)` with blur on scroll
- Sticky behavior: Stays pinned to top after first 60px scroll
- Active state: Gold underline 2px beneath active page link

**Mobile Navigation:**
- Hamburger icon (right side) — opens full-screen overlay menu
- Overlay: Dark Navy `#0D1B2A` full screen
- Links: Large (32px), center-aligned, white, stacked vertically
- BOOK NOW: Gold button, full width, bottom of overlay
- Social icons: Row at very bottom of mobile menu
- Close X: Top right, white

### Announcement Bar (Above Nav)
```
⚓  2026 SEASON NOW OPEN — Limited spots available this summer  [BOOK YOUR TOUR →]
```
- Background: Drift Gold `#C9A84C`
- Text: Navy, Montserrat Medium, 13px
- Full width, 40px height
- Dismissible with X button (stores in localStorage)
- Swap to countdown during peak season: "🔥 Only 3 spots left this weekend — [GRAB YOURS]"

---

## 4. HOME PAGE — FULL AUDIT & REDESIGN

### Current Issues (Common to small Squarespace tourism sites)
- Hero image likely static with no motion — misses emotional impact
- CTA probably buried below the fold or poorly contrasted
- No clear value proposition stated in first 3 seconds
- Services section likely uses basic text blocks without visual hierarchy
- No social proof visible above the fold
- Mobile layout probably stacks poorly
- No urgency or scarcity signals
- Missing trust indicators (years in business, reviews, media mentions)
- Likely no video content showcasing the actual experience

### What Works (to keep)
- Adirondack landscape photography (if present) — nature sells itself
- Basic service breakdown structure

---

### REDESIGNED HOME PAGE — Section by Section

---

#### SECTION 1: HERO (Full Screen)

**Layout:** Full-viewport, 100vh  
**Background:** Autoplay drone video — boat on Fourth Lake at golden hour, passengers pedaling and laughing, Adirondack mountains in background. Video loops seamlessly, no controls, muted.  
**Video fallback:** Cinematic still — same scene at golden hour  
**Overlay:** Dark gradient from bottom (0% opacity top → 60% Navy opacity bottom)

**Content (center-aligned, lower third):**

```
EAGLE BAY, NEW YORK  ·  THE ADIRONDACKS
────────────────────────────────────────

The First Cycle Boat Tour
in the Adirondacks.

Life is better on the water.

[BOOK YOUR TOUR →]     [SEE OUR EXPERIENCES ↓]
```

- Eyebrow: Montserrat, 11px, all caps, 0.15em tracking, gold color, with thin rule lines either side
- H1: Playfair Display, 72px desktop / 44px mobile, white
- Subheadline: Inter Light, 20px, white at 80% opacity
- CTAs: side-by-side on desktop, stacked on mobile
- Primary CTA: Gold pill button
- Secondary CTA: Ghost button, white border

**Scroll indicator:** Animated chevron, gold, bounces gently at bottom center

**Parallax:** Hero image/video has 20% parallax scroll offset for depth

---

#### SECTION 2: TRUST BAR / SOCIAL PROOF STRIP

**Layout:** Full-width strip, Lake Mist background `#E8EFF5`  
**Height:** 80px desktop  
**Content:** 5 proof points, equally spaced, pipe-separated:

```
⭐ 5-Star Rated on Google   |   🚤 First Cycle Boat in the Adirondacks   |   👨‍👩‍👧 Family Owned & Operated   |   📅 Available 7 Days a Week   |   🏔️ Est. Eagle Bay, NY
```

- Icons: Gold, 18px
- Text: Montserrat Medium, 13px, Navy
- On mobile: Horizontal auto-scroll ticker (marquee animation)
- This section loads without scroll trigger — immediate visibility

---

#### SECTION 3: THE EXPERIENCE INTRO

**Layout:** Two-column, 50/50. Left: text. Right: full-bleed image (lifestyle photo — group on the boat, golden light, big smiles).

**Headline:**
> *You've never seen the Adirondacks like this.*

**Body copy:**
> Drift Upstate brings something entirely new to Eagle Bay — a cycle boat experience that combines pedal power, fresh Adirondack air, and the beauty of Fourth Lake into one unforgettable adventure.
>
> Whether you're celebrating, exploring, or just looking for a reason to get out on the water — this is your moment.

**CTA:** [EXPLORE OUR TOURS →] (secondary button)

**Animation:** Text fades and slides up on scroll. Image has subtle Ken Burns zoom (2% over 8s).

---

#### SECTION 4: OUR EXPERIENCES (Service Cards)

**Layout:** Full-width section, Navy background. 4 cards in a 2×2 grid (desktop) / vertical scroll (mobile).

**Section headline (white, centered):**
> *Choose Your Adventure*

**Card Design:**
Each card is a premium "experience card" with:
- Full-bleed background image (each tour has its own hero photo)
- Dark gradient overlay bottom 60%
- Tour name: Playfair Display, 28px, white
- Tagline: Inter, 16px, white 75% opacity
- Duration + Price pill badge (top right corner): Gold background
- [LEARN MORE →] ghost button, bottom of card
- Hover: Card lifts 8px (translateY), image zooms 3%, gold border appears

**The 4 Experience Cards:**

**Card 1 — Public Tour**
- Image: Group of mixed adults, daytime, Fourth Lake background
- Headline: *The Classic Drift*
- Tagline: "Join fellow adventurers for a scenic 90-minute cruise on Fourth Lake"
- Badge: "90 MIN · From $35/person"

**Card 2 — Private Tour**
- Image: Couple or small group, intimate setting, sunset lighting
- Headline: *Your Boat. Your Moment.*
- Tagline: "Reserve the entire boat for your group — birthdays, proposals, or just because"
- Badge: "Private · Call for Pricing"

**Card 3 — Coffee Cruise**
- Image: Morning mist on the lake, coffee mugs visible, peaceful
- Headline: *Morning on the Lake*
- Tagline: "Start your day the Adirondack way — fresh air, calm water, good coffee"
- Badge: "Morning · Limited Seats"

**Card 4 — Ladies Night**
- Image: Group of women laughing, festive setting, sunset
- Headline: *The Girls Are Back in Town*
- Tagline: "Bachelorette parties, birthday celebrations, or just a night out — the lake is calling"
- Badge: "Evening · From $45/person"

---

#### SECTION 5: BY THE NUMBERS (Stats Strip)

**Layout:** Full-width, white background. 4 stats, centered, large numerals.

```
[500+]          [5★]           [3]            [1]
Happy Guests    Google Rating   Tours Weekly   First Cycle Boat
This Season                                   in the Adirondacks
```

- Numbers: Playfair Display, 72px, Gold
- Labels: Montserrat, 13px, Navy, all caps
- Animated count-up on scroll entry (JS via Squarespace code block)
- Thin gold rule lines between stats on desktop

---

#### SECTION 6: TESTIMONIALS CAROUSEL

**Layout:** Full-width, Lake Mist background. Centered, single testimonial displayed at a time with arrows and dots.

**Section headline:**
> *Don't take our word for it.*

**Testimonial card format:**

```
⭐⭐⭐⭐⭐

"Best experience of our entire Adirondacks trip. The crew was incredible,
the views were stunning, and we laughed the entire time. Already planning
our return trip next summer."

— Sarah M., Albany, NY  ·  Google Review
```

- Quote: Playfair Display Italic, 22px, Navy
- Attribution: Montserrat, 13px, 60% opacity
- Stars: Gold, 20px
- Auto-advances every 6 seconds, pauses on hover
- Arrows: Gold, left/right of card
- Dots: Gold/Gray below card
- Source badge: Google logo or TripAdvisor logo small, right-aligned
- Minimum 6 testimonials loaded

**Below carousel:** [READ ALL REVIEWS ON GOOGLE →] — text link, navy, opens Google Business in new tab

---

#### SECTION 7: INSTAGRAM GALLERY / LIFESTYLE PHOTO GRID

**Layout:** Full-width. 6-column photo grid, all images same height (300px desktop), no gaps (or 2px gap for modern edge feel).

**Section headline (centered, above grid):**
> *Life Looks Better From the Water*
> @driftupstate — Tag us in your adventures

**Grid:** Pull 6 most recent Instagram posts using Squarespace's built-in Instagram Block (or Elfsight widget if needed).

**Hover state:** Slight white overlay + Instagram icon + "View on Instagram" text.

**Below grid:** [FOLLOW US @DRIFTUPSTATE →] — gold text link

---

#### SECTION 8: WHO WE'RE PERFECT FOR (Icon Grid)

**Layout:** White background, centered. Headline + 3-column icon grid (2-column on mobile).

**Headline:**
> *Made for Every Kind of Adventure*

**Audience Cards (icon + label + 1-line description):**

| Icon | Label | Description |
|------|-------|-------------|
| 💑 | Couples | Romantic escapes on the water |
| 👨‍👩‍👧‍👦 | Families | Memories the whole family will talk about forever |
| 🥂 | Bachelorette Parties | The lake called — it's your time to shine |
| 🎂 | Birthday Parties | Celebrate somewhere unforgettable |
| 💼 | Corporate Groups | Team building that actually works |
| ☀️ | Vacationers | The highlight of your Adirondacks trip |
| ☕ | Coffee Cruisers | The most scenic morning cup you'll ever have |
| 🌅 | Sunset Seekers | Chase the golden hour on Fourth Lake |

Layout: 4 per row desktop, 2 per row mobile  
Card style: White card, subtle shadow, icon top-center, bold label, light body text  
Hover: Gold top border appears (3px), card lifts slightly

---

#### SECTION 9: VIDEO SECTION (Full-Width Cinematic)

**Layout:** Full-width, 70vh height. Centered play button over thumbnail.

**Thumbnail:** Most cinematic drone shot available — aerial view of the boat with Adirondack peaks in background, golden hour.

**Headline overlay (before play):**
> *See What the Hype Is About*

**On click:** Expands to full-screen video player. Video is a 90-second highlight reel — boat on the water, passengers laughing, drone shots, sunset moments, coffee cruise morning scenes.

**Video hosting:** YouTube or Vimeo (unlisted), embedded via Squarespace video block. Never upload raw video directly to Squarespace (kills page speed).

---

#### SECTION 10: LOCATION / MAP SECTION

**Layout:** Two-column. Left: embedded Google Map (satellite view showing Fourth Lake and Eagle Bay). Right: Location info card.

**Location Card Content:**
```
📍 WHERE TO FIND US

Drift Upstate Boat Tours
Eagle Bay, New York
Fourth Lake, Adirondacks

[GET DIRECTIONS →]

🕐 HOURS
Daily: 8:00 AM – Sunset
Seasonal: May – October

☎️ CALL US
(XXX) XXX-XXXX

📧 EMAIL
hello@driftupstate.com
```

**Map:** Embedded Google Maps, satellite imagery, custom map pin with Drift Upstate logo.

---

#### SECTION 11: FINAL CTA SECTION (Pre-Footer)

**Layout:** Full-width, full-bleed sunset/drone image background. Dark overlay 50%. Centered text.

**Headline:**
> *Your Adventure Is Waiting.*

**Subheadline:**
> Spots fill up fast — especially on weekends. Don't miss your moment on the water.

**CTA Buttons (centered, side-by-side):**
> [BOOK NOW →]   [VIEW ALL TOURS]

**Below buttons (trust micro-copy):**
> ✓ Easy online booking  ·  ✓ Instant confirmation  ·  ✓ Free cancellation policy

---

## 5. ABOUT PAGE — FULL AUDIT & REDESIGN

### Current Issues
- Likely a basic text block with generic "about us" copy
- Missing the emotional origin story
- No visual storytelling
- Probably no timeline, no behind-the-scenes content
- Not leveraging "FIRST Cycle Boat in the Adirondacks" as the hero statement it deserves to be

### What to Keep
- Any authentic photos of the owners/family
- Location-specific language

---

### REDESIGNED ABOUT PAGE — Section by Section

---

#### SECTION 1: ABOUT HERO

**Layout:** Full-width, 70vh. Background: aerial drone photo — Fourth Lake from above, boat visible in frame.

**Overlay text (centered, lower third):**
```
OUR STORY

We Brought Something New
to the Adirondacks.
```

- Eyebrow: Montserrat, 11px, gold, all caps
- H1: Playfair Display, 64px, white

---

#### SECTION 2: THE ORIGIN STORY

**Layout:** Single column, centered, max-width 760px, generous white space.

**Headline:**
> *The First Cycle Boat Tour in the Adirondacks*

**Body copy (suggested — customize with real story):**
> It started with a simple idea: what if you could explore the most beautiful lakes in New York State without sitting still?
>
> We're a family-owned team from right here in Eagle Bay — people who grew up on these waters, who know every cove and every current of Fourth Lake. We saw what cycle boats were doing for communities across the country and knew: *the Adirondacks needed this*.
>
> So we brought it here. The first one. We built something from scratch, for this place, for the people who love it as much as we do.
>
> Drift Upstate isn't just a boat tour. It's an invitation to see the Adirondacks the way they were always meant to be seen — slowly, together, and with a smile on your face.

**Pull quote (large, centered, Playfair Italic, gold):**
> *"We built it because we believed the Adirondacks deserved something extraordinary."*

---

#### SECTION 3: VISUAL TIMELINE

**Layout:** Vertical timeline, alternating left/right (desktop) / single column (mobile).

**Timeline entries (customize with real dates):**

```
[YEAR]  ──  The idea is born
            Two Eagle Bay locals see a cycle boat for the first time
            and immediately know what they have to do.

[YEAR]  ──  The boat arrives
            After months of planning, sourcing, and logistics,
            the first cycle boat is delivered to Fourth Lake.

[YEAR]  ──  First tour sets sail
            Opening day. Nervous crew, excited guests,
            perfect Adirondack morning.

[YEAR]  ──  We become a local legend
            Word spreads fast. Weekend tours sell out weeks in advance.
            The Adirondacks had never seen anything like it.

[NOW]   ──  The adventure continues
            New tours, new partnerships, and a crew that loves
            what they do more than ever.
```

- Timeline line: Gold vertical rule, 2px
- Dots: Gold filled circles, 16px
- Dates: Montserrat Bold, Navy
- Headlines: Playfair, 22px
- Body: Inter, 16px, 70% opacity Navy

---

#### SECTION 4: OUR VALUES (Icon Grid)

**Layout:** 3-column grid, white cards, Lake Mist background section.

**Section headline:**
> *Why We Do It*

**Values:**

| Value | Icon | Copy |
|-------|------|------|
| Community First | 🤝 | Eagle Bay is our home. Every guest is a neighbor. |
| Adventure Always | 🏔️ | We believe life is better when you're moving through it. |
| Adirondack Proud | 🌲 | These lakes, these mountains — we protect what we love. |
| Family Operated | 🏠 | Every decision we make, we make as a family. |
| Safety Above All | ⚓ | The water demands respect. We never cut corners. |
| Memory Makers | 📸 | We measure success in smiles, not seat counts. |

---

#### SECTION 5: THE BOAT

**Layout:** Two-column. Left: large photo of the cycle boat. Right: specs and story.

**Headline:**
> *Meet the Star of the Show*

**Copy:**
> Our custom cycle boat seats up to [X] passengers and is built specifically for the calm, clear waters of Fourth Lake. Every seat is a front-row seat.
>
> Passengers pedal (as much or as little as they want), while our certified captain handles navigation, safety, and the playlist.

**Specs list:**
- ⚓ Capacity: [X] passengers
- 🚤 Tour Length: 90 minutes
- 📍 Departure: Eagle Bay Dock
- ☀️ Season: May through October
- 🎵 Sound system on board

---

#### SECTION 6: CALL TO ACTION

Same pre-footer CTA section as Home. Consistent across all pages.

---

## 6. SERVICES PAGE — FULL AUDIT & REDESIGN

### Current Issues
- Services are likely listed as text blocks or a basic grid
- No pricing psychology (anchoring, packages)
- Missing urgency ("Book fast — weekends sell out")
- No comparison between tours to help decision-making
- Missing what's included / what to bring
- Missing photo or video per service
- No reviews tied to specific services

### What to Keep
- The 4-tour structure is solid: Public, Private, Coffee Cruise, Ladies Night

---

### REDESIGNED SERVICES PAGE — Section by Section

---

#### SECTION 1: SERVICES HERO

**Layout:** Full-width, 50vh. Video background — aerial shot circling the boat on the lake.

**Overlay:**
```
OUR EXPERIENCES

Find Your Perfect Tour.
```

---

#### SECTION 2: EXPERIENCE SELECTOR (Sticky Tab Bar)

**Layout:** Sticky tab bar beneath nav. 4 tabs, gold underline on active.

```
[THE CLASSIC DRIFT]   [PRIVATE CHARTER]   [COFFEE CRUISE]   [LADIES NIGHT]
```

Clicking a tab smooth-scrolls to that section.

---

#### SECTION 3: SERVICE 1 — PUBLIC TOUR / THE CLASSIC DRIFT

**Layout:** Split section. 60% image left, 40% content right. Alternates with Service 2.

**Image:** Cinematic photo — group of people on the boat, daytime, mountains behind.

**Content:**
```
THE CLASSIC DRIFT
─────────────────
Public Tour · 90 Minutes

Join a group of fellow adventurers for a scenic cycle boat cruise on
the crystal-clear waters of Fourth Lake. Pedal as much or as little
as you like — the captain handles the rest.

✓ Up to [X] passengers
✓ Certified captain on board
✓ BYOB friendly
✓ Life jackets provided
✓ Departs from Eagle Bay Dock

FROM $35 / PERSON

[BOOK THIS TOUR →]

📅 Available: Daily, May – October
⚡ Weekends fill up fast — book early
```

**Testimonial pullout (below content):**
> ⭐⭐⭐⭐⭐ *"Absolutely magical. Best thing we did in the Adirondacks."* — Mike R.

---

#### SECTION 4: SERVICE 2 — PRIVATE CHARTER

**Layout:** 40% content left, 60% image right. Image: couple or small group, golden hour.

**Content:**
```
YOUR BOAT. YOUR MOMENT.
────────────────────────
Private Charter · 90 or 120 Minutes

Reserve the entire boat exclusively for your group.
Whether it's a birthday, anniversary, proposal, or just a Tuesday —
you deserve a private escape on the water.

✓ Entire boat reserved for your group only
✓ Up to [X] guests
✓ Custom music playlist
✓ Decoration packages available
✓ Perfect for bachelorettes, birthdays, proposals

CONTACT US FOR PRICING

[REQUEST PRIVATE BOOKING →]

Perfect for:
[🥂 Bachelorette]  [🎂 Birthday]  [💍 Proposals]  [💼 Corporate]
```

---

#### SECTION 5: SERVICE 3 — COFFEE CRUISE

**Layout:** Split, image left. Image: morning mist, coffee cups, serene lake.

**Content:**
```
MORNING ON THE LAKE
────────────────────
Coffee Cruise · 60 Minutes

Start your Adirondack morning the right way.
Drift across Fourth Lake with a coffee in hand as the mist rises
off the water and the mountains come into view.

✓ Morning departure (times vary by season)
✓ Limited to [X] seats for an intimate experience
✓ Coffee & light refreshments available
✓ Perfect for early risers and nature lovers
✓ The quietest, most peaceful hour of your trip

FROM $30 / PERSON

[BOOK THE COFFEE CRUISE →]

☕ Pro tip: Bring a light jacket — mornings on the lake are crisp and perfect.
```

---

#### SECTION 6: SERVICE 4 — LADIES NIGHT

**Layout:** 40% content left, 60% image right. Image: group of women celebrating on the boat, festive, sunset.

**Content:**
```
THE GIRLS ARE BACK IN TOWN.
────────────────────────────
Ladies Night / Bachelorette Special · 90 Minutes

The lake is calling, and it's a girls' night.
Whether you're celebrating a bride-to-be, a birthday queen,
or just a long overdue girls' trip — Drift Upstate is your venue.

✓ Private or semi-private options
✓ Festive decoration add-ons
✓ BYOB and bring your own snacks
✓ Custom playlist (you control the vibe)
✓ Sunset departures available

FROM $45 / PERSON

[BOOK LADIES NIGHT →]

🥂 Ask about our bachelorette packages — we make it unforgettable.
```

---

#### SECTION 7: WHAT TO BRING / FAQ SHORTCUT

**Layout:** Two-column. Left: What to Bring list. Right: Quick FAQ accordion (top 5 questions only, full FAQ link below).

**What to Bring:**
- Sunscreen and sunglasses
- Comfortable clothes / light layers for evenings
- Your own beverages (BYOB — cans/soft-sided coolers preferred)
- Snacks are welcome
- A camera (you'll want it)
- Your best attitude

**Quick FAQ topics (accordion):**
- Can I bring alcohol?
- What if it rains?
- Is it accessible for all fitness levels?
- How do I get there / where do I park?
- What is your cancellation policy?

[SEE FULL FAQ →] — text link

---

#### SECTION 8: COMPARISON TABLE

**Layout:** Full-width, Lake Mist background. Responsive comparison table.

| Feature | Public Tour | Private Charter | Coffee Cruise | Ladies Night |
|---------|-------------|-----------------|---------------|--------------|
| Duration | 90 min | 90–120 min | 60 min | 90 min |
| Group Type | Mixed public | Your group only | Small/intimate | Women's groups |
| BYOB | ✓ | ✓ | ✓ | ✓ |
| Pricing | From $35/pp | Custom quote | From $30/pp | From $45/pp |
| Best For | Everyone | Celebrations | Morning lovers | Bachelorette / Girls Night |
| Availability | Daily | By request | Mornings | Evenings |
| Book | [→] | [→] | [→] | [→] |

---

#### SECTION 9: PRE-FOOTER CTA

Consistent with all other pages.

---

## 7. TEAM PAGE — FULL AUDIT & REDESIGN

### Current Issues
- Likely a simple grid of headshots with names and titles
- Missing personality, story, fun facts
- Not leveraging crew as a trust signal
- No casual/candid photos — too formal for this type of experience brand
- Missing the "meet your captain before you book" trust factor

### Redesigned Concept: "Meet the Crew"

---

#### SECTION 1: TEAM HERO

**Layout:** Full-width, 50vh. Background: group crew photo on the dock or on the boat — candid, laughing, not posed stiffly.

**Overlay:**
```
MEET THE CREW

The people who make every tour
the best part of your trip.
```

---

#### SECTION 2: CREW INTRO COPY

**Layout:** Single column, centered, max 680px.

**Copy:**
> We're a small, tight-knit crew — most of us have spent our whole lives on these waters. We take safety seriously, we take fun even more seriously, and we genuinely believe that the best part of a Drift Upstate tour isn't the boat or the lake. It's the people on it.
>
> Every captain and crew member is certified, trained, and (most importantly) deeply passionate about making your experience unforgettable.

---

#### SECTION 3: CAPTAIN BIOS

**Layout:** Large cards, alternating layout (image left / right). Warm, candid photography — not corporate headshots.

**Bio Card Structure:**
```
[LARGE PHOTO — candid, on the water]

Captain [First Name]
[Title] · [Years on Fourth Lake]

"[Their personal quote about the lake or the job]"

[ABOUT THEM — 3-4 sentences, personality-forward, conversational tone]

FUN FACTS:
🎵 Go-to playlist genre: [genre]
🐟 Favorite fishing spot: [location]
☕ Coffee order: [order]
🏔️ Favorite Adirondack trail: [trail name]
```

**Example bio tone:**
> Captain Jake grew up three miles from this dock. He's been on Fourth Lake since before he could drive, and he'll happily tell you every story about every corner of it. As our head captain, Jake sets the bar for what a Drift Upstate tour should feel like — safe, smooth, and seriously fun.

---

#### SECTION 4: CREW / LITTLE HELPERS

**Layout:** 3-4 column grid, smaller cards. More casual, fun.

**Card Structure:**
- Circular or soft-rounded photo
- Name + role
- One fun fact or quote
- Friendly tone — not corporate

**Roles to feature:**
- First Mate / Dock Crew
- Guest Experience Lead
- Special Events Coordinator
- Little Helpers (if family members help out — great human touch)

---

#### SECTION 5: CERTIFICATIONS & SAFETY

**Layout:** Icon row, Lake Mist background.

**Content:**
> Our entire crew holds current certifications in:

```
[Coast Guard Licensed]  [First Aid & CPR]  [Water Safety Certified]  [Adirondack Guide Trained]
```

*Your safety is our first priority — every single tour.*

---

#### SECTION 6: JOIN THE CREW (Hiring CTA)

**Layout:** Simple banner, Navy background, white text.

```
Think you'd be a great fit on the water?
We're always looking for great people.

[GET IN TOUCH →]
```

---

## 8. CONTACT PAGE — FULL AUDIT & REDESIGN

### Current Issues
- Likely a basic Squarespace contact form
- Missing map, directions, parking info
- No hours of operation visible
- No emergency weather notice
- No FAQ shortcut to reduce support volume
- Form fields probably ask for too much info (reduces completion rate)

---

### REDESIGNED CONTACT PAGE — Section by Section

---

#### SECTION 1: CONTACT HERO

**Minimal hero — 40vh, photo background (dock or marina scene).**

```
GET IN TOUCH

We'd love to hear from you.
Booking questions, private events, or just saying hello —
we're here.
```

---

#### SECTION 2: CONTACT METHODS GRID

**Layout:** 4-column icon cards, white background.

| | | | |
|--|--|--|--|
| 📞 **Call Us** | 📧 **Email Us** | 📍 **Visit Us** | ❓ **FAQ** |
| (XXX) XXX-XXXX | hello@driftupstate.com | Eagle Bay, NY | Got questions? |
| Mon–Sun 8am–8pm | Response in 24hrs | [Get Directions →] | [See FAQ →] |

---

#### SECTION 3: CONTACT FORM + MAP

**Layout:** Two-column. Left: Streamlined contact form. Right: Embedded Google Map.

**Optimized Form Fields (minimum viable — fewer fields = higher completion):**
1. Your Name (required)
2. Email Address (required)
3. Phone Number (optional)
4. What's this about? (dropdown: General Question / Private Booking Inquiry / Press & Media / Other)
5. Message (required)
6. [SEND MESSAGE →] — Gold button

**Form trust copy below button:**
> We respond to every message within 24 hours. For immediate assistance, call us directly.

**Map:** Satellite view, Eagle Bay/Fourth Lake area, custom Drift Upstate pin.

---

#### SECTION 4: LOCATION & LOGISTICS

**Layout:** Two-column, Lake Mist background.

**Column 1: Finding Us**
```
📍 ADDRESS
Eagle Bay, New York
[Full dock address]
Adirondack Park

🗺️ DIRECTIONS FROM:
• Albany: [X] hours via Route 28 North
• NYC: [X] hours via I-87 North
• Syracuse: [X] hours via Route 12 North

🅿️ PARKING
[Parking instructions — lot, street, etc.]
```

**Column 2: Hours & Season**
```
🕐 TOUR HOURS
First tour: [time]
Last tour: [time]

📅 SEASON
May – October
(Weather permitting)

⛅ WEATHER POLICY
Tours operate in light rain.
We cancel in thunderstorms or high winds.
Full refunds issued for weather cancellations.
Receive a text notification 2 hours before tour time.
```

---

#### SECTION 5: EMERGENCY WEATHER NOTICE (Conditional)

**This section appears dynamically when weather is a concern:**

```
⚠️  WEATHER ADVISORY
We are monitoring conditions for [DATE] tours.
Check your email for updates, or call us directly.
[CALL NOW] [CHECK MY BOOKING]
```

- Background: Amber (#F5A623)
- Visible only when manually activated in Squarespace

---

## 9. FAQ PAGE — FULL AUDIT & REDESIGN

### Current Issues
- Likely a flat list of text questions and answers — no visual hierarchy
- No search functionality
- Not organized by category
- Missing conversion opportunity at the bottom

---

### REDESIGNED FAQ PAGE

---

#### SECTION 1: FAQ HERO

**Layout:** Minimal, 35vh.

```
FREQUENTLY ASKED QUESTIONS

Everything you need to know before
you hit the water.
```

**Search bar (Squarespace code block or Elfsight widget):**
> 🔍 Search questions...

---

#### SECTION 2: FAQ CATEGORIES + ACCORDIONS

**Layout:** Left sidebar (desktop) shows category navigation. Right: accordion Q&A blocks.

**Categories:**
- 🚤 About the Tour
- 🎟️ Booking & Cancellation
- 🌦️ Weather & Safety
- 🍺 BYOB & What to Bring
- 📍 Getting Here
- 👨‍👩‍👧 Groups & Private Events

**Sample FAQ entries per category:**

**About the Tour:**
> Q: How does a cycle boat work?
> A: Think of it as a floating patio with pedals. Passengers pedal (or relax — no pressure!) while our certified captain steers the boat. There's a sound system on board, and you're surrounded by the most beautiful scenery in New York.

> Q: Is it hard to pedal?
> A: Not at all. The pedaling is very light resistance — more like a leisurely bike ride than a workout. Guests of all fitness levels enjoy it, including kids and seniors.

> Q: How many people fit on the boat?
> A: Our boat accommodates up to [X] passengers per tour.

**Booking & Cancellation:**
> Q: How far in advance should I book?
> A: Weekends book out 2-3 weeks in advance during peak season (July–August). We recommend booking as early as possible. Weekday availability is generally more flexible.

> Q: What is your cancellation policy?
> A: Full refunds are available up to 48 hours before your tour. Cancellations within 48 hours receive a tour credit valid for the current season.

> Q: Can I book a private tour last-minute?
> A: Subject to availability — give us a call and we'll do our best!

**Weather & Safety:**
> Q: What happens if it rains?
> A: Light rain doesn't stop us — it's actually a magical experience. We cancel for thunderstorms, lightning, or high winds. You'll receive a text notification at least 2 hours before your tour if we need to cancel due to weather.

> Q: Is it safe?
> A: Absolutely. Life jackets are provided and required for non-swimmers. All captains are Coast Guard licensed and water safety certified. The waters of Fourth Lake are calm and well-suited for our tours.

**BYOB & What to Bring:**
> Q: Can I bring alcohol?
> A: Yes! Drift Upstate is BYOB. We ask that all drinks be in cans or cups with lids — no glass bottles on the boat. Please drink responsibly.

> Q: What should I wear?
> A: Comfortable, casual clothing. Layers for evening tours — it cools down on the water after sunset. Closed-toe shoes or sandals with straps recommended (no flip-flops that could slip off).

---

#### SECTION 3: STILL HAVE QUESTIONS?

**Layout:** Centered, simple, Lake Mist background.

```
Still have questions?

We're real people — not a chatbot. Give us a call or send us a message
and we'll get back to you the same day.

[CALL US]   [SEND A MESSAGE]   [BOOK NOW]
```

---

## 10. BOOKING FLOW — COMPLETE REDESIGN

### Current Issues
- Third-party booking widget likely feels disconnected from the brand
- Probably no pre-booking trust signals on the booking page
- Cart abandonment not addressed (no recovery emails)
- No upsell moment (private tour vs. public tour)
- Mobile booking experience likely clunky

### Redesigned Booking Flow

**Booking should be available via:**
1. Squarespace Scheduling (Acuity) — recommended for native integration
2. FareHarbor — if more complex tour management needed
3. Bokun — if multiple tour types with yield management needed

**Recommendation:** FareHarbor for a business at this level — it handles deposits, waivers, group pricing, and integrates cleanly via embed code.

---

#### BOOKING PAGE LAYOUT

**Section 1: Booking Page Hero**
```
BOOK YOUR TOUR

You're one step away from the best
part of your Adirondacks trip.

✓ Instant confirmation  ✓ Secure payment  ✓ Easy cancellation
```

**Section 2: Tour Selector (if not pre-selected)**

4 cards (same as Services page) — user selects their experience first, which filters the date picker below.

**Section 3: Date & Time Picker**

- Calendar widget — clean, branded to match site colors
- Unavailable dates grayed out
- "Filling Up Fast" badge on near-capacity dates (red dot)
- "Only 3 Spots Left" warning when < 25% capacity remains

**Section 4: Guest Information**

Minimum fields only:
1. Full name
2. Email address
3. Phone number
4. Number of guests
5. Special requests / notes (optional)
6. Digital waiver acknowledgement (checkbox)

**Section 5: Payment**

- Show price breakdown before payment entry
- Accept: Credit/debit, Apple Pay, Google Pay
- Show security badges: Stripe Verified, SSL Secure, 256-bit encryption
- Deposit option: Offer 50% deposit with balance due before tour date

**Section 6: Confirmation Page**

After booking:
```
🎉 YOU'RE ON THE WATER!

Your tour is confirmed. See you on [DATE] at [TIME].

What's next:
📧 Check your email for a confirmation
🗺️ [Get directions to the dock]
📋 [Review what to bring]
📱 Save our number: (XXX) XXX-XXXX

[ADD TO CALENDAR]  [SHARE WITH YOUR GROUP]

─────────────────────────────

While you're here — have you considered upgrading to a Private Charter?
Exclusively for your group, starting at $[X].
[INQUIRE ABOUT PRIVATE CHARTER →]
```

---

### Booking Abandonment Recovery

**Implement:**
1. Booking reminder email at 24-hour mark if cart abandoned
2. SMS reminder if phone captured
3. Retargeting pixel on booking page (Facebook/Instagram ads)
4. Exit-intent popup on booking page: "Wait — leaving already? Here's 10% off your first tour. [CLAIM OFFER]"

---

## 11. FOOTER REDESIGN

### Current Issues
- Likely a minimal default Squarespace footer
- Missing quick links, social, and trust signals
- No newsletter capture
- No seasonal messaging

---

### REDESIGNED FOOTER

**Layout:** Dark Navy background. 4-column grid (desktop), stacked (mobile).

```
COLUMN 1: BRAND
─────────────────
[DRIFT UPSTATE LOGO — white]

The First Cycle Boat Tour
in the Adirondacks.

Eagle Bay, NY · Fourth Lake

[Instagram] [Facebook] [TikTok] [YouTube]

COLUMN 2: QUICK LINKS
─────────────────────
Our Tours
About Us
Meet the Crew
FAQ
Contact
Gift Cards

COLUMN 3: CONTACT
──────────────────
📞 (XXX) XXX-XXXX
📧 hello@driftupstate.com
📍 Eagle Bay, New York
🕐 Daily 8AM – Sunset
   May – October

COLUMN 4: STAY IN THE LOOP
────────────────────────────
Get seasonal updates, early
booking access, and local
Adirondack tips.

[Your email        ] [SUBSCRIBE]

No spam. Unsubscribe anytime.
```

**Bottom bar (beneath 4 columns, full-width rule above):**
```
© 2026 Drift Upstate Boat Tours · Eagle Bay, NY  |  Privacy Policy  |  Terms  |  Sitemap
Made with ❤️ in the Adirondacks
```

---

## 12. MOBILE EXPERIENCE

### Priority Fixes

**Navigation:**
- Sticky booking CTA button: fixed bottom bar on mobile only
  ```
  [📅 BOOK NOW — TAP HERE]
  ```
  - Always visible, gold background, full-width, 56px height
  - Disappears only on the actual booking page

**Hero:**
- Video backgrounds: Use image fallback on mobile (video autoplay restricted on iOS)
- Hero text: Scale down to 38px on mobile, never smaller than 32px
- Two CTAs on hero: Stack vertically, both full-width on mobile

**Services cards:**
- Single column on mobile, swipe carousel layout
- Each card: 85vw width, with 8vw peek of next card to suggest swipe

**Testimonials:**
- Touch swipeable carousel

**Forms:**
- Large touch targets — minimum 44x44px tap area
- No hover-required interactions
- Input fields: 16px font size minimum (prevents iOS zoom-on-focus bug)

**Images:**
- Lazy load all images below the fold
- Serve WebP format with JPEG fallback
- Max image width: 800px for mobile, 1600px for desktop

**Page Speed Target:**
- Mobile: < 3 second First Contentful Paint
- Desktop: < 2 second First Contentful Paint
- Lighthouse mobile score target: 85+

---

## 13. IMAGES & VIDEO STRATEGY

### Drone Footage Placement
| Location | Content | Duration |
|----------|---------|---------|
| Home Hero | Aerial orbit of boat on Fourth Lake at golden hour | Loop, no end |
| Services Hero | High aerial pull-back from boat to full lake view | Loop |
| About Hero | Forward-tracking drone following the boat | Loop |
| Home Video Section | Full 90-second highlight reel | On click |

### Autoplay B-Roll Video
| Location | Content |
|----------|---------|
| Home Hero | Passengers laughing, pedaling, toasting drinks |
| Services — Ladies Night | Women celebrating on the boat, sunset |
| Services — Coffee Cruise | Morning mist, coffee cups, peaceful water |
| About Section 2 | Owner/crew behind the scenes moments |

### Hero Images (Full Bleed Stills)
| Page | Image |
|------|-------|
| Home (video fallback) | Golden hour, boat on Fourth Lake, Adirondack peaks |
| Contact | Dock at Eagle Bay, warm morning light |
| FAQ | Aerial lake view, calm and clear |
| Team | Crew group photo, candid, on the dock |

### Employee Photos
- Crew bio photos: Outdoors, on or near the water, natural light, candid poses
- NOT: Corporate headshots, white backgrounds, stiff poses
- Style: Editorial — like a magazine profile, not a LinkedIn photo

### Lifestyle Photography Priority
1. Mixed groups enjoying the tour (laughing, toasting)
2. Couples in intimate sunset moments
3. Families with kids discovering the experience
4. Bachelorette group energy
5. Coffee cruise — peaceful, solitary morning mood
6. Aerial/drone landscapes with boat in foreground

### Sunset Imagery
- Home: Final CTA section background
- Services — Ladies Night card
- Booking confirmation background
- Footer background overlay

---

## 14. SEO STRATEGY

### Page Titles (50-60 characters)

| Page | Title |
|------|-------|
| Home | Drift Upstate — Cycle Boat Tours in the Adirondacks |
| About | About Us · Drift Upstate Boat Tours · Eagle Bay NY |
| Services | Boat Tour Experiences · Drift Upstate · Fourth Lake |
| Team | Meet the Crew · Drift Upstate Adirondack Boat Tours |
| Contact | Contact Drift Upstate · Eagle Bay, NY Boat Tours |
| FAQ | Cycle Boat FAQ · Everything You Need to Know |
| Booking | Book Your Adirondack Boat Tour · Drift Upstate |

### Meta Descriptions (155-160 characters)

| Page | Description |
|------|-------------|
| Home | The first cycle boat tour in the Adirondacks. Public tours, private charters, coffee cruises & more. Eagle Bay, NY — book your Fourth Lake adventure today. |
| Services | Explore our full lineup of Adirondack cycle boat experiences — public tours, private charters, coffee cruises, and ladies night. Fourth Lake, Eagle Bay NY. |
| About | Learn the story of Drift Upstate — the family-owned team that brought the first cycle boat tour to the Adirondacks. Eagle Bay, NY · Fourth Lake. |
| Booking | Book your Drift Upstate cycle boat tour online. Instant confirmation, secure payment, and the best 90 minutes of your Adirondacks vacation. |

### Target Keywords

**Primary (high intent):**
- adirondack boat tours
- cycle boat adirondacks
- eagle bay ny boat tours
- fourth lake boat tours
- things to do in adirondacks
- adirondack bachelorette party activities
- adirondack family activities

**Secondary (long-tail):**
- cycle boat tour eagle bay new york
- pedal boat tour adirondacks
- adirondack lake tours for groups
- best things to do in old forge adirondacks
- bachelorette party ideas adirondacks ny
- adirondack corporate team building activities
- sunset cruise fourth lake ny

**Local SEO Keywords:**
- eagle bay ny attractions
- inlet ny things to do
- old forge ny boat tours
- fulton chain lakes activities

### Schema Markup (JSON-LD)

Implement on Home page via Squarespace Code Block:

```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Drift Upstate Boat Tours",
  "description": "The first cycle boat tour in the Adirondacks, located in Eagle Bay, New York on Fourth Lake.",
  "url": "https://www.driftupstate.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "Eagle Bay",
    "addressRegion": "NY",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[lat]",
    "longitude": "[lon]"
  },
  "openingHours": "Mo-Su 08:00-20:00",
  "priceRange": "$$",
  "servesCuisine": "Outdoor Recreation",
  "hasMap": "https://maps.google.com/?q=Eagle+Bay+NY",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "[number]"
  }
}
```

Also implement `TouristTrip` schema for each tour/service page.

### Internal Linking Strategy

| Page | Links To |
|------|----------|
| Home | All service pages, About, Booking |
| Services | Individual service anchors, FAQ, Booking, Contact |
| About | Team, Services, Contact |
| Team | About, Services, Contact |
| FAQ | Services, Booking, Contact |
| Contact | FAQ, Services, Booking |

### Google Business Profile Optimization

1. Ensure category: "Boat Tour Agency" + "Tourist Attraction"
2. Add all photos from photoshoot (minimum 20 photos)
3. Add all services with descriptions and prices
4. Enable booking button (link to booking page)
5. Post weekly (seasonal updates, event announcements)
6. Respond to EVERY Google review within 24 hours
7. Add Q&A section answers proactively

---

## 15. PERFORMANCE & SPEED

### Image Optimization Protocol

| Format | Use Case |
|--------|---------|
| WebP | All photos (convert from JPEG) |
| AVIF | Hero images where browser support allows |
| SVG | All icons, logos, graphic elements |
| JPEG | Fallback for older browsers |

**Max file sizes:**
- Hero images: 300–500KB (WebP)
- Card images: 100–150KB (WebP)
- Full-bleed section images: 400KB max

### Video Optimization

- Host ALL videos on Vimeo Pro or YouTube (never Squarespace media)
- Hero video: Compressed to < 5MB for loop file, or use Vimeo background embed
- Vimeo: Enable "Autopause when out of viewport" setting
- Use `poster` attribute on video elements (shows first frame while loading)

### Squarespace-Specific Speed Settings

Enable in Squarespace Settings → Advanced:
- ✓ Enable AMP (for blog if used)
- ✓ Minify CSS and JavaScript
- ✓ Use Squarespace CDN for all assets

### Lazy Loading

Squarespace 7.1 lazy loads images natively. Verify with:
- Add `loading="lazy"` attribute to any custom HTML image blocks
- Set images below fold to "Load on Scroll" in Fluid Engine

### Third-Party Script Audit

Remove or defer:
- Any unused Squarespace Extensions
- Facebook Pixel: Load asynchronously
- Google Analytics 4: Load asynchronously
- Chat widgets (if added): Load after page interactive

### Core Web Vitals Targets

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5 seconds |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Mobile Page Speed Score | 80+ |
| Desktop Page Speed Score | 90+ |

---

## 16. CONVERSION OPTIMIZATION MASTER PLAN

### The Conversion Hierarchy

Every page is designed to push the visitor forward:

```
Awareness → Interest → Desire → Trust → Action
(Hero)      (Services) (Reviews) (FAQ)  (Book Now)
```

### CTA Placement Map (Every Page)

| Location | CTA Text | Style |
|----------|----------|-------|
| Announcement Bar | "BOOK YOUR TOUR →" | Gold bar |
| Navigation | "BOOK NOW →" | Gold pill button |
| Home Hero (above fold) | "BOOK YOUR TOUR →" | Gold primary |
| Home — after Services section | "SEE ALL TOURS →" | Secondary |
| Home — after Testimonials | "BOOK NOW →" | Gold primary |
| Home — Final CTA section | "BOOK NOW →" + "VIEW TOURS" | Primary + Secondary |
| Services — each service | "BOOK THIS TOUR →" | Gold primary |
| About — mid-page | "SEE OUR EXPERIENCES →" | Secondary |
| About — pre-footer | "BOOK NOW →" | Gold primary |
| Team page — pre-footer | "MEET THE CREW ON THE WATER →" | Gold primary |
| FAQ — bottom | "BOOK NOW" + "CONTACT US" | Primary + Secondary |
| Footer | [Newsletter subscribe] | Form action |
| Mobile — fixed bottom bar | "📅 BOOK NOW" | Full-width fixed |

### Urgency & Scarcity Signals

Implement without feeling fake:
- Booking calendar: Red dot on near-full dates
- Service cards: "🔥 Weekend tours booking fast"
- Announcement bar: Rotate between "Season Open" and "Limited spots remaining"
- Pre-booking confirmation: "You're securing the last [X] spots on this tour"

### Trust Signals (place on every page)

1. Google rating + review count (e.g., "⭐ 4.9 · 127 Reviews")
2. "Featured in [local media]" if applicable
3. Coast Guard licensed badge
4. Secure booking badge
5. Family-owned badge
6. "X+ happy guests this season"

### Email Capture Strategy

**Pop-up (exit-intent only, not on entry — entry pop-ups destroy bounce rate):**
```
Before you go...

Get early access to new tours, season announcements,
and exclusive Adirondack travel tips.

[Your email address     ] [I'M IN →]

No spam. We hate it too. Unsubscribe anytime.
```

**Newsletter Welcome Sequence (3 emails):**
1. Welcome email — "Welcome to the Drift family"
2. Day 3 — "Planning your Adirondacks trip? Here's what we recommend"
3. Day 7 — Soft booking push with seasonal availability alert

### Gift Cards

Add a Gift Cards page/section:
```
Give the Gift of Adventure.

A Drift Upstate Gift Card is the perfect gift for any occasion.
Works for any tour, any date, all season long.

[BUY A GIFT CARD →]
```

- Use Squarespace's built-in Gift Card feature (Commerce plan required)
- Feature on: Home page (holiday season), Services page, Footer

---

---

## 17. SCORING REPORT

### Current Website Baseline (Pre-Redesign Estimates)

Based on common patterns for small Squarespace tourism sites at this stage of development:

| Category | Current Score | Target Score | Gap |
|----------|-------------|--------------|-----|
| **Overall Website** | 4.5 / 10 | 9.0 / 10 | +4.5 |
| **Conversion Rate** | 3.0 / 10 | 8.5 / 10 | +5.5 |
| **Design** | 5.0 / 10 | 9.5 / 10 | +4.5 |
| **Mobile Experience** | 4.0 / 10 | 9.0 / 10 | +5.0 |
| **SEO** | 3.5 / 10 | 8.5 / 10 | +5.0 |
| **Brand Consistency** | 4.5 / 10 | 9.5 / 10 | +5.0 |
| **Customer Experience** | 4.0 / 10 | 9.0 / 10 | +5.0 |
| **Page Speed** | 5.0 / 10 | 8.5 / 10 | +3.5 |
| **Accessibility** | 4.0 / 10 | 8.0 / 10 | +4.0 |

### Score Definitions

**Conversion (3.0 → 8.5):** Currently the site likely has a booking CTA that is not prominent, no urgency signals, no social proof above the fold, and no mobile booking shortcut. After redesign: gold CTA in sticky nav, fixed mobile bar, reviews front-and-center, scarcity signals, streamlined booking flow.

**Design (5.0 → 9.5):** Currently functional but lacks the cinematic premium feel the brand deserves. After redesign: full-bleed video hero, intentional typography system, consistent color palette, hover interactions, and motion design all push this to near-perfect.

**Mobile (4.0 → 9.0):** Squarespace's default mobile rendering is often mediocre without custom tuning. After redesign: mobile-first CTA fixed bar, touch-optimized cards, proper tap targets, image-fallback for video, and mobile-specific font scaling.

**SEO (3.5 → 8.5):** Most small tourism sites have thin meta descriptions, no schema markup, and poor internal linking. After redesign: every page has a unique, keyword-rich title and meta description, JSON-LD schema markup, strong internal linking, and Google Business optimization.

**Brand (4.5 → 9.5):** Without a formal design system, brand elements are likely inconsistent across pages. After redesign: a locked color palette, 2-font system, consistent button styles, icon set, and spacing rules make every page feel like it belongs to the same world.

---

## 18. IMPLEMENTATION ROADMAP

### PHASE 1 — QUICK WINS (Week 1–2, Highest ROI)

These changes cost the least effort and drive the most immediate impact on bookings.

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Add "BOOK NOW" gold button to navigation (sticky) | 🔴 Critical | Low |
| 2 | Update all page meta titles and descriptions | 🔴 Critical | Low |
| 3 | Add Google Reviews widget to Home page | 🔴 Critical | Low |
| 4 | Add announcement bar with booking CTA | 🟠 High | Low |
| 5 | Replace hero image with full-bleed cinematic photo | 🟠 High | Low |
| 6 | Add trust bar below hero (stats, ratings) | 🟠 High | Low |
| 7 | Add fixed mobile booking bar (bottom of screen) | 🟠 High | Medium |
| 8 | Set up Google Business Profile fully | 🟠 High | Medium |
| 9 | Add JSON-LD schema markup to Home page | 🟡 Medium | Low |
| 10 | Streamline contact form to 5 fields maximum | 🟡 Medium | Low |

**Expected outcome:** 25–40% increase in booking click-through rate within 2 weeks.

---

### PHASE 2 — VISUAL UPGRADES (Week 3–6)

Full design system implementation and page-by-page visual overhaul.

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Schedule drone + lifestyle photography session | 🔴 Critical | High |
| 2 | Produce 90-second highlight reel video | 🔴 Critical | High |
| 3 | Implement autoplay video hero (with fallback) | 🔴 Critical | Medium |
| 4 | Redesign Services page with full experience cards | 🟠 High | Medium |
| 5 | Redesign Home page with all 11 sections | 🟠 High | High |
| 6 | Implement consistent color palette site-wide | 🟠 High | Medium |
| 7 | Apply new typography system (Playfair + Inter) | 🟠 High | Medium |
| 8 | Build Instagram photo grid section | 🟡 Medium | Low |
| 9 | Add parallax effects to key sections | 🟡 Medium | Medium |
| 10 | Redesign footer with 4-column layout | 🟡 Medium | Low |
| 11 | Redesign About page with timeline | 🟡 Medium | Medium |
| 12 | Redesign Team page as "Meet the Crew" | 🟡 Medium | Medium |

**Expected outcome:** Dramatic improvement in time-on-site, page depth, and brand perception.

---

### PHASE 3 — CONVERSION IMPROVEMENTS (Week 6–10)

Systematic conversion optimization across every touchpoint.

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Integrate FareHarbor booking system (or Acuity) | 🔴 Critical | High |
| 2 | Build optimized booking page with tour selector | 🔴 Critical | High |
| 3 | Implement booking abandonment email sequence | 🔴 Critical | Medium |
| 4 | Add exit-intent email capture popup | 🟠 High | Low |
| 5 | Set up email newsletter with welcome sequence | 🟠 High | Medium |
| 6 | Add scarcity signals to booking calendar | 🟠 High | Medium |
| 7 | Launch Gift Cards via Squarespace Commerce | 🟠 High | Medium |
| 8 | Add comparison table to Services page | 🟡 Medium | Low |
| 9 | Add urgency messaging to announcement bar | 🟡 Medium | Low |
| 10 | Implement Facebook + Instagram retargeting pixel | 🟡 Medium | Low |
| 11 | Add testimonials with Google review pull | 🟡 Medium | Medium |
| 12 | A/B test primary CTA button color/copy | 🟡 Medium | Medium |

**Expected outcome:** 50–80% increase in conversion rate vs. current baseline.

---

### PHASE 4 — ADVANCED FEATURES (Month 3–6)

Advanced capabilities that add polish and long-term competitive moat.

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Live availability widget on homepage | 🟠 High | High |
| 2 | Countdown timer for season or weekends | 🟡 Medium | Low |
| 3 | Weather widget integration (OpenWeather API) | 🟡 Medium | Medium |
| 4 | FAQ search functionality | 🟡 Medium | Medium |
| 5 | TikTok / YouTube Shorts integration | 🟡 Medium | High |
| 6 | Blog / Adirondack travel content (SEO long-tail) | 🟡 Medium | Ongoing |
| 7 | Google Ads campaign (brand + local intent keywords) | 🟡 Medium | Medium |
| 8 | SMS booking reminders via Twilio | 🟡 Medium | High |
| 9 | Loyalty / return guest discount program | 🟢 Low-Med | High |
| 10 | Interactive map with dock location and directions | 🟢 Low-Med | Medium |
| 11 | Virtual tour / 360° boat experience | 🟢 Low-Med | High |
| 12 | Multilingual support (Spanish) | 🟢 Low-Med | High |

---

## 19. COMPLETE SITEMAP

```
DRIFT UPSTATE — FULL SITEMAP
═══════════════════════════════════════════════════════

PRIMARY NAVIGATION
├── Home (/)
├── Our Tours (/tours)
│   ├── The Classic Drift — Public Tour (/tours/public)
│   ├── Private Charter (/tours/private)
│   ├── Coffee Cruise (/tours/coffee-cruise)
│   └── Ladies Night (/tours/ladies-night)
├── About (/about)
├── Meet the Crew (/crew)
├── FAQ (/faq)
├── Contact (/contact)
└── Book Now → (/book)

SECONDARY / UTILITY PAGES
├── Gift Cards (/gift-cards)
├── Blog / Adirondack Journal (/blog) [Phase 4]
│   ├── Top Things to Do in Eagle Bay NY
│   ├── Best Adirondack Activities for Families
│   ├── Planning the Perfect Adirondack Bachelorette
│   └── A Guide to Fourth Lake, NY
├── Press / Media (/press) [optional]
├── Privacy Policy (/privacy)
├── Terms & Conditions (/terms)
└── Sitemap (/sitemap)

BOOKING FLOW (External or Squarespace-embedded)
├── Step 1: Select Experience
├── Step 2: Choose Date & Time
├── Step 3: Guest Information
├── Step 4: Payment
└── Step 5: Confirmation

REDIRECTS TO SET UP
├── /book-now → /book
├── /tours/bachelorette → /tours/ladies-night
├── /private → /tours/private

META / SEO PAGES
├── robots.txt (allow all, block /admin)
└── sitemap.xml (auto-generated by Squarespace — verify all pages indexed)
```

---

## 20. FULL PAGE WIREFRAMES

*Each wireframe below shows every section from top to bottom in order, with content hierarchy and key design notes.*

---

### WIREFRAME 1: HOME PAGE

```
╔═══════════════════════════════════════════════════════════════╗
║  ANNOUNCEMENT BAR (40px, Gold)                                ║
║  ⚓ 2026 Season Now Open · Limited weekend spots   [BOOK →]   ║
╠═══════════════════════════════════════════════════════════════╣
║  NAVIGATION (Transparent → Sticky on scroll)                  ║
║  [LOGO]   OUR TOURS  ABOUT  MEET THE CREW  FAQ  CONTACT      ║
║                                              [BOOK NOW →]     ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║                                                               ║
║         HERO — 100VH — AUTOPLAY DRONE VIDEO BACKGROUND       ║
║                                                               ║
║                  EAGLE BAY, NY  ·  THE ADIRONDACKS            ║
║                                                               ║
║            The First Cycle Boat Tour                          ║
║              in the Adirondacks.                              ║
║                                                               ║
║              Life is better on the water.                     ║
║                                                               ║
║         [BOOK YOUR TOUR →]    [SEE EXPERIENCES ↓]            ║
║                                                               ║
║                          ∨  ∨  ∨                              ║
╠═══════════════════════════════════════════════════════════════╣
║  TRUST BAR (80px, Lake Mist)                                  ║
║  ⭐5-Star Google | 🚤First in Adirondacks | 👨‍👩‍👧Family Owned  ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  EXPERIENCE INTRO — 2 COLUMN                                  ║
║                                                               ║
║  [TEXT LEFT]              [LIFESTYLE IMAGE RIGHT]             ║
║                                                               ║
║  You've never seen the                                        ║
║  Adirondacks like this.                                       ║
║                                                               ║
║  [Body copy 3 sentences]                                      ║
║                                                               ║
║  [EXPLORE OUR TOURS →]                                        ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  OUR EXPERIENCES — Navy Background                            ║
║                                                               ║
║           Choose Your Adventure                               ║
║                                                               ║
║  ┌──────────────┐  ┌──────────────┐                          ║
║  │  [90 MIN]    │  │  [PRIVATE]   │                          ║
║  │              │  │              │                          ║
║  │  Image       │  │  Image       │                          ║
║  │              │  │              │                          ║
║  │  Classic     │  │  Private     │                          ║
║  │  Drift       │  │  Charter     │                          ║
║  │  tagline     │  │  tagline     │                          ║
║  │  [LEARN→]   │  │  [LEARN→]   │                          ║
║  └──────────────┘  └──────────────┘                          ║
║  ┌──────────────┐  ┌──────────────┐                          ║
║  │  [MORNING]   │  │  [EVENING]   │                          ║
║  │              │  │              │                          ║
║  │  Image       │  │  Image       │                          ║
║  │              │  │              │                          ║
║  │  Coffee      │  │  Ladies      │                          ║
║  │  Cruise      │  │  Night       │                          ║
║  │  tagline     │  │  tagline     │                          ║
║  │  [LEARN→]   │  │  [LEARN→]   │                          ║
║  └──────────────┘  └──────────────┘                          ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  STATS STRIP — White                                          ║
║                                                               ║
║    [500+]        [5★]       [3]         [1st]                ║
║   Guests      Rating    Tours/Week   Cycle Boat             ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  TESTIMONIALS CAROUSEL — Lake Mist                            ║
║                                                               ║
║           Don't take our word for it.                         ║
║                                                               ║
║   ←   ⭐⭐⭐⭐⭐  "Large italic quote text..."            →   ║
║             — Name, City · Google Review                      ║
║                  ● ● ○ ○ ○ ○                                  ║
║                                                               ║
║              [READ ALL GOOGLE REVIEWS →]                      ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  INSTAGRAM GRID — White (6 photos, no gap)                    ║
║                                                               ║
║          Life Looks Better From the Water                     ║
║                  @driftupstate                                ║
║                                                               ║
║  [IMG][IMG][IMG][IMG][IMG][IMG]                               ║
║                                                               ║
║              [FOLLOW @DRIFTUPSTATE →]                         ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  WHO WE'RE PERFECT FOR — White, Icon Grid                     ║
║                                                               ║
║         Made for Every Kind of Adventure                      ║
║                                                               ║
║  [💑Couples] [👨‍👩‍👧Families] [🥂Bachelorette] [🎂Birthday]     ║
║  [💼Corporate] [☀️Vacationers] [☕Coffee] [🌅Sunset]          ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  VIDEO SECTION — 70vh, Dark overlay, centered play button     ║
║                                                               ║
║            ▶  See What the Hype Is About                     ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  LOCATION — 2 Column                                          ║
║                                                               ║
║  [GOOGLE MAP — Satellite]    [Location Info Card]             ║
║                              📍 Eagle Bay, NY                 ║
║                              🕐 Daily 8AM–Sunset              ║
║                              ☎ (XXX) XXX-XXXX                 ║
║                              [GET DIRECTIONS →]              ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  FINAL CTA — Full-bleed sunset image, dark overlay            ║
║                                                               ║
║                Your Adventure Is Waiting.                     ║
║                                                               ║
║         Spots fill up fast on weekends.                       ║
║                                                               ║
║          [BOOK NOW →]   [VIEW ALL TOURS]                      ║
║                                                               ║
║     ✓ Easy booking  ✓ Instant confirm  ✓ Free cancel          ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  FOOTER — Navy, 4 columns                                     ║
║                                                               ║
║  [LOGO+Social] [Quick Links] [Contact Info] [Newsletter]      ║
║                                                               ║
║  © 2026 Drift Upstate · Privacy · Terms · Made in ADKs        ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### WIREFRAME 2: SERVICES / OUR TOURS PAGE

```
╔═══════════════════════════════════════════════════════════════╗
║  ANNOUNCEMENT BAR + NAVIGATION (same as all pages)           ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║     SERVICES HERO — 50vh, video background aerial shot        ║
║                                                               ║
║                    OUR EXPERIENCES                            ║
║                 Find Your Perfect Tour.                       ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║  STICKY TAB BAR (appears when hero exits viewport)            ║
║  [CLASSIC DRIFT] [PRIVATE CHARTER] [COFFEE CRUISE] [LADIES]  ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  SERVICE 1 — THE CLASSIC DRIFT — 2 col, image left           ║
║                                                               ║
║  [FULL BLEED           ]   THE CLASSIC DRIFT                  ║
║  [LIFESTYLE IMAGE      ]   Public Tour · 90 Minutes           ║
║  [GROUP ON BOAT        ]   ──────────────────────             ║
║  [DAYTIME, MOUNTAINS   ]   [Body copy]                        ║
║                            ✓ Certified captain                ║
║                            ✓ BYOB friendly                    ║
║                            ✓ Life jackets provided            ║
║                            FROM $35/PERSON                    ║
║                            [BOOK THIS TOUR →]                 ║
║                            ⭐⭐⭐⭐⭐ "Quote" — Name          ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  SERVICE 2 — PRIVATE CHARTER — 2 col, content left           ║
║                                                               ║
║   YOUR BOAT. YOUR MOMENT.  [FULL BLEED            ]          ║
║   Private Charter          [SUNSET / COUPLE       ]          ║
║   ────────────────         [INTIMATE SETTING      ]          ║
║   [Body copy]                                                 ║
║   ✓ Entire boat reserved                                      ║
║   ✓ Custom playlist                                           ║
║   CONTACT FOR PRICING                                         ║
║   [REQUEST PRIVATE →]                                         ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  SERVICE 3 — COFFEE CRUISE — 2 col, image left               ║
║                                                               ║
║  [FULL BLEED           ]   MORNING ON THE LAKE                ║
║  [MORNING MIST, COFFEE ]   Coffee Cruise · 60 Minutes         ║
║  [CALM WATER           ]   ──────────────────────             ║
║                            [Body copy]                        ║
║                            ✓ Limited seats                    ║
║                            ✓ Serene, intimate                 ║
║                            FROM $30/PERSON                    ║
║                            [BOOK COFFEE CRUISE →]             ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  SERVICE 4 — LADIES NIGHT — 2 col, content left              ║
║                                                               ║
║  THE GIRLS ARE BACK      [FULL BLEED             ]           ║
║  Ladies Night             [WOMEN CELEBRATING     ]           ║
║  ─────────────────        [FESTIVE, SUNSET       ]           ║
║  [Body copy]                                                  ║
║  ✓ Private/semi-private                                       ║
║  ✓ Custom playlist                                            ║
║  FROM $45/PERSON                                              ║
║  [BOOK LADIES NIGHT →]                                        ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  WHAT TO BRING / FAQ SHORTCUT — 2 col, white bg              ║
║                                                               ║
║  [PACKING LIST]              [FAQ ACCORDION TOP 5]            ║
║  • Sunscreen                 ▶ Can I bring alcohol?           ║
║  • Comfortable clothes       ▶ What if it rains?              ║
║  • BYOB (cans only)          ▶ Is it accessible?              ║
║  • Snacks                    ▶ Where do I park?               ║
║  • Camera                    ▶ Cancellation policy?           ║
║                              [SEE FULL FAQ →]                 ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  COMPARISON TABLE — Lake Mist bg                              ║
║                                                               ║
║  Feature | Public | Private | Coffee | Ladies                 ║
║  ────────────────────────────────────────────                 ║
║  Duration| 90min  | 90-120  | 60min  | 90min                  ║
║  BYOB    |   ✓    |    ✓    |   ✓    |   ✓                   ║
║  Pricing | $35/pp | Custom  | $30/pp | $45/pp                 ║
║  [BOOK]  |  [→]   |   [→]   |  [→]   |  [→]                  ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║  FINAL CTA + FOOTER (same as all pages)                       ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### WIREFRAME 3: ABOUT PAGE

```
╔═══════════════════════════════════════════════════════════════╗
║  ANNOUNCEMENT BAR + NAVIGATION                                ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║     ABOUT HERO — 70vh, aerial drone, Fourth Lake              ║
║                                                               ║
║                      OUR STORY                                ║
║             We Brought Something New                          ║
║               to the Adirondacks.                             ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ORIGIN STORY — Centered, max 760px wide                      ║
║                                                               ║
║       The First Cycle Boat Tour in the Adirondacks            ║
║                                                               ║
║       [Body copy — 3 paragraphs]                              ║
║                                                               ║
║   "We built it because we believed the Adirondacks            ║
║         deserved something extraordinary."                    ║
║              [large italic pull quote, gold]                  ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  TIMELINE — Alternating left/right, vertical gold rule        ║
║                                                               ║
║  [YEAR] ●──── Headline                                        ║
║              [Body copy]                                      ║
║                                                               ║
║                     Headline ────● [YEAR]                     ║
║                     [Body copy]                               ║
║                                                               ║
║  [YEAR] ●──── Headline                                        ║
║              [Body copy]                                      ║
║                                                               ║
║                     Headline ────● [NOW]                      ║
║                     [Body copy]                               ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  OUR VALUES — Lake Mist bg, 3-col icon grid                   ║
║                                                               ║
║               Why We Do It                                    ║
║                                                               ║
║  [🤝Community] [🏔️Adventure] [🌲ADK Proud]                   ║
║  [🏠Family]    [⚓Safety]    [📸Memories]                     ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  THE BOAT — 2 col, image left                                 ║
║                                                               ║
║  [BOAT PHOTO]           Meet the Star of the Show             ║
║                          ─────────────────────────            ║
║                          [Body copy]                          ║
║                          ⚓ Capacity: [X]                     ║
║                          📍 Departs: Eagle Bay Dock           ║
║                          ☀️ Season: May – October             ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║  FINAL CTA + FOOTER                                           ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### WIREFRAME 4: TEAM / MEET THE CREW PAGE

```
╔═══════════════════════════════════════════════════════════════╗
║  ANNOUNCEMENT BAR + NAVIGATION                                ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║     TEAM HERO — 50vh, candid crew group photo on dock         ║
║                                                               ║
║                   MEET THE CREW                               ║
║       The people who make every tour the best                 ║
║               part of your trip.                              ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  CREW INTRO COPY — Centered, max 680px                        ║
║                                                               ║
║  [3-4 sentences about the crew's passion and certification]   ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  CAPTAIN BIOS — Alternating 2-col layout                      ║
║                                                               ║
║  [LARGE PHOTO           ]   Captain [Name]                    ║
║  [Candid, on water      ]   Head Captain · X Years on Lake    ║
║  [Natural light         ]   ───────────────────────           ║
║                             "[Personal quote]"                ║
║                             [Bio copy — 3-4 sentences]        ║
║                             🎵 Playlist: [genre]              ║
║                             ☕ Coffee order: [order]          ║
║                             🏔️ Fav trail: [trail]             ║
║                                                               ║
║   Captain [Name]            [LARGE PHOTO           ]         ║
║   [Title]                   [Candid, on water      ]         ║
║   "[Quote]"                 [Natural light         ]         ║
║   [Bio copy]                                                  ║
║   Fun facts...                                                ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  CREW CARDS — 3-4 col grid, smaller cards                     ║
║                                                               ║
║  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐         ║
║  │  [Photo]│  │  [Photo]│  │  [Photo]│  │  [Photo]│         ║
║  │         │  │         │  │         │  │         │         ║
║  │  Name   │  │  Name   │  │  Name   │  │  Name   │         ║
║  │  Role   │  │  Role   │  │  Role   │  │  Role   │         ║
║  │ "Quote" │  │ "Quote" │  │ "Quote" │  │ "Quote" │         ║
║  └─────────┘  └─────────┘  └─────────┘  └─────────┘         ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  CERTIFICATIONS — Lake Mist, icon row                         ║
║                                                               ║
║  [Coast Guard] [CPR/First Aid] [Water Safety] [ADK Trained]   ║
║                                                               ║
║       Your safety is our first priority — always.             ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  JOIN THE CREW — Navy banner                                  ║
║                                                               ║
║   Think you'd be a great fit on the water?                    ║
║                   [GET IN TOUCH →]                            ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║  FINAL CTA + FOOTER                                           ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### WIREFRAME 5: CONTACT PAGE

```
╔═══════════════════════════════════════════════════════════════╗
║  ANNOUNCEMENT BAR + NAVIGATION                                ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║     CONTACT HERO — 40vh, dock/marina photo                    ║
║                                                               ║
║                   GET IN TOUCH                                ║
║       We'd love to hear from you.                             ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  CONTACT METHODS — 4 col icon cards, white bg                 ║
║                                                               ║
║  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐             ║
║  │  📞    │  │  📧    │  │  📍    │  │  ❓    │             ║
║  │CALL US │  │EMAIL US│  │VISIT US│  │  FAQ   │             ║
║  │(XXX)   │  │hello@  │  │EagleBay│  │Got Qs? │             ║
║  │8am-8pm │  │24hr RS │  │[Direct]│  │[See→]  │             ║
║  └────────┘  └────────┘  └────────┘  └────────┘             ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  FORM + MAP — 2 col                                           ║
║                                                               ║
║  [CONTACT FORM]            [GOOGLE MAP SATELLITE]             ║
║  Name *                                                       ║
║  Email *                                                      ║
║  Phone (optional)                                             ║
║  What's this about? ▾                                         ║
║  Message *                                                    ║
║  [SEND MESSAGE →]                                             ║
║  "We reply within 24 hours"                                   ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  LOCATION & LOGISTICS — 2 col, Lake Mist bg                   ║
║                                                               ║
║  [FINDING US]              [HOURS & SEASON]                   ║
║  📍 Full address           🕐 8AM – Sunset daily              ║
║  Directions from Albany    📅 May – October                   ║
║  Directions from NYC       ⛅ Weather policy                  ║
║  🅿️ Parking info          Full refund if cancelled           ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║  FOOTER (same as all pages)                                   ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### WIREFRAME 6: FAQ PAGE

```
╔═══════════════════════════════════════════════════════════════╗
║  ANNOUNCEMENT BAR + NAVIGATION                                ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║     FAQ HERO — 35vh, aerial lake photo                        ║
║                                                               ║
║          FREQUENTLY ASKED QUESTIONS                           ║
║    Everything you need to know before you hit the water.      ║
║                                                               ║
║              [🔍 Search questions...]                         ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  FAQ CONTENT — 2 col (sidebar nav + accordions)              ║
║                                                               ║
║  [CATEGORY SIDEBAR]        [ACCORDION Q&A BLOCKS]             ║
║                                                               ║
║  🚤 About the Tour          About the Tour                    ║
║  🎟️ Booking & Cancel       ──────────────────                 ║
║  🌦️ Weather & Safety       ▶ How does a cycle boat work?      ║
║  🍺 BYOB & What to Bring   ▶ Is it hard to pedal?            ║
║  📍 Getting Here            ▶ How many people fit?            ║
║  👨‍👩‍👧 Groups & Events       ▼ What should I wear?             ║
║                               Comfortable, casual clothing... ║
║                            ▶ Can kids ride?                   ║
║                                                               ║
║                             Booking & Cancellation            ║
║                            ──────────────────────             ║
║                            ▶ How far in advance book?         ║
║                            ▶ Cancellation policy?             ║
║                            ▶ Last-minute availability?        ║
║                                                               ║
║                             [continues for all categories]    ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  STILL HAVE QUESTIONS — Lake Mist bg, centered                ║
║                                                               ║
║           Still have questions?                               ║
║                                                               ║
║    We're real people. Give us a call or send a message        ║
║                and we'll respond today.                       ║
║                                                               ║
║         [CALL US]  [SEND A MESSAGE]  [BOOK NOW]              ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║  FOOTER                                                       ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### WIREFRAME 7: BOOKING PAGE

```
╔═══════════════════════════════════════════════════════════════╗
║  NAVIGATION (no announcement bar on booking page)             ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║     BOOKING HERO — 40vh, cinematic photo                      ║
║                                                               ║
║                   BOOK YOUR TOUR                              ║
║       You're one step away from the best part                 ║
║              of your Adirondacks trip.                        ║
║                                                               ║
║   ✓ Instant confirmation   ✓ Secure payment   ✓ Easy cancel   ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  STEP 1: SELECT EXPERIENCE                                    ║
║                                                               ║
║  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌────────┐ ║
║  │○ Classic    │ │○ Private    │ │○ Coffee     │ │○Ladies │ ║
║  │  Drift      │ │  Charter    │ │  Cruise     │ │  Night │ ║
║  │  $35/pp     │ │  Inquire    │ │  $30/pp     │ │$45/pp  │ ║
║  └─────────────┘ └─────────────┘ └─────────────┘ └────────┘ ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  STEP 2: SELECT DATE & TIME                                   ║
║                                                               ║
║  [CALENDAR WIDGET — branded colors, unavailable dates grayed] ║
║                                                               ║
║  [TIME SLOT SELECTOR — shows available departure times]       ║
║  🔴 Only 2 spots left on Sat July 12                          ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  STEP 3: GUEST INFORMATION                                    ║
║                                                               ║
║  Name *          [                    ]                       ║
║  Email *         [                    ]                       ║
║  Phone           [                    ]                       ║
║  # of guests *   [  1  ] ▾                                    ║
║  Notes           [                    ]                       ║
║  ☐ I acknowledge the safety waiver and terms                  ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  STEP 4: PAYMENT                                              ║
║                                                               ║
║  Order Summary:                                               ║
║  Classic Drift · July 12, 2pm · 2 guests                     ║
║  2 × $35 = $70.00                                             ║
║  ────────────────                                             ║
║  Total: $70.00                                                ║
║                                                               ║
║  ○ Pay in full ($70)                                          ║
║  ○ Pay deposit now ($35) + balance before tour                ║
║                                                               ║
║  [Card info input — Stripe]   [  OR  ]  [🍎Pay] [GPay]       ║
║                                                               ║
║  🔒 Secured by Stripe · 256-bit SSL                           ║
║                                                               ║
║  [COMPLETE BOOKING →]                                         ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  STEP 5: CONFIRMATION — (after successful payment)            ║
║                                                               ║
║              🎉 You're on the water!                          ║
║                                                               ║
║   Your tour is confirmed for [DATE] at [TIME].                ║
║                                                               ║
║   📧 Check email for confirmation                             ║
║   🗺️ [Get directions to the dock]                             ║
║   📋 [Review what to bring]                                   ║
║                                                               ║
║         [ADD TO CALENDAR]   [SHARE WITH YOUR GROUP]           ║
║                                                               ║
║   ─────────────────────────────────────────────               ║
║   Upgrade to a Private Charter?                               ║
║   Exclusively yours, starting at $[X].                        ║
║   [INQUIRE ABOUT PRIVATE CHARTER →]                           ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## APPENDIX A: SQUARESPACE-SPECIFIC IMPLEMENTATION NOTES

### Native Features to Use (No Third-Party Apps Needed)

| Feature | Squarespace Tool |
|---------|-----------------|
| Photo galleries | Fluid Engine Gallery Block |
| Video backgrounds | Background Video (Section setting) |
| Testimonials carousel | Quote Block + Section animation |
| FAQ accordions | Accordion Block |
| Instagram feed | Instagram Block |
| Newsletter signup | Newsletter Block |
| Gift cards | Commerce → Gift Cards |
| Contact form | Form Block |
| Scheduling/booking | Acuity Scheduling (native integration) |
| Announcement bar | Promotional Pop-Up or Header Announcement |
| Map embed | Map Block (Google Maps API key required) |
| Sticky navigation | Enable in Design → Navigation |
| Scroll animations | Enable in Design → Animations |
| Parallax effects | Enable per-section in Section settings |

### Third-Party Integrations Recommended

| Tool | Purpose | Cost |
|------|---------|------|
| FareHarbor | Advanced booking management | Free (commission) |
| Elfsight | Advanced widgets (reviews, Instagram, etc.) | ~$9/mo |
| Google Analytics 4 | Traffic and conversion tracking | Free |
| Facebook Pixel | Retargeting ads | Free |
| Mailchimp or Klaviyo | Email marketing sequences | Free tier available |
| Vimeo Pro | Video hosting (high quality, no ads) | ~$20/mo |

### Squarespace Plan Required

**Commerce Basic ($36/mo) or Commerce Advanced ($65/mo)** — required for:
- Gift Cards
- Abandoned cart recovery
- Discount codes
- Advanced shipping options

---

## APPENDIX B: COPY TONE GUIDE

### Voice & Tone
- **Confident** — never apologetic, never hedging
- **Warm** — speaks to guests as if welcoming them home
- **Exciting** — every line should make you feel something
- **Clear** — no jargon, no fluff, no corporate-speak
- **Local** — proud Adirondack identity, not generic tourism

### Vocabulary to Use
- "The water" (not "the lake" — more universal and emotional)
- "Your crew" / "Your adventure"
- "Unforgettable" / "Once-in-a-season" / "The best part of your trip"
- "Eagle Bay" / "The Adirondacks" / "Fourth Lake" (location-specific)
- "First cycle boat in the Adirondacks" (unique differentiator — say it everywhere)

### Vocabulary to Avoid
- "Welcome to our website"
- "We are proud to offer"
- "Our team of professionals"
- "State of the art"
- "Click here"
- Passive voice in general

---

## APPENDIX C: PHOTOGRAPHY BRIEF

*Send this brief to your photographer before the shoot.*

### Shot List (Minimum Viable)

**On-Water Shots:**
- [ ] Full group on boat, daytime, laughing — wide shot
- [ ] Detail shot: hands on pedals, feet, drinks being raised
- [ ] Couple moment — close, intimate, looking at the lake
- [ ] Bachelorette energy — women toasting, festive
- [ ] Kids discovering the experience (families)
- [ ] Captain at helm — confident, natural, not posed
- [ ] Coffee mug in hand, morning mist on water — close-up
- [ ] Sunset from the boat — looking toward the horizon
- [ ] Aerial/drone: boat from above, mountains visible

**Lifestyle / Dock:**
- [ ] Guests boarding the boat — anticipation
- [ ] Pre-tour group gathering at dock
- [ ] Crew welcoming guests — genuine smiles
- [ ] After-tour — guests leaving happy, maybe looking back

**Crew:**
- [ ] Each captain: candid shot on/near water, editorial style
- [ ] Group crew shot — candid, relaxed, dock background
- [ ] Detail: captain's hands on wheel, safety equipment, dock

**Environment:**
- [ ] Fourth Lake wide shot — golden hour, no boat
- [ ] Eagle Bay village dock area
- [ ] Adirondack mountains reflection in the lake
- [ ] Morning mist rising off the water

### Photography Style
- Natural light only — no harsh flash
- Golden hour preferred for hero shots (1 hour before sunset)
- Morning sessions for Coffee Cruise content
- Color grade: warm, slightly lifted shadows, Adirondack earth tones
- NO stock photo energy — everything should feel real, local, alive

---

*End of Drift Upstate Complete Redesign & Conversion Audit*  
*Document version 1.0 — June 2026*  
*Ready for implementation.*

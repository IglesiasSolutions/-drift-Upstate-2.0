/**
 * DRIFT UPSTATE — Media Asset Registry
 *
 * ── INSTRUCTIONS FOR ASSET REPLACEMENT ────────────────────────────────────
 * 1. Upload real photos/videos to /public/media/ or your CDN
 * 2. Replace the Unsplash URL strings below with your actual paths
 * 3. Each entry has a "REPLACE:" comment describing the exact shot needed
 * 4. Video files go in /public/videos/ (MP4 + WebM for full browser support)
 *
 * Naming convention: PAGE_SECTION_DESCRIPTOR
 */

// ── Unsplash placeholder helper ─────────────────────────────────────────────
const u = (id: string, w = 1920, h = 1080, q = 85) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=${q}`

// ────────────────────────────────────────────────────────────────────────────
// HOME PAGE
// ────────────────────────────────────────────────────────────────────────────

export const HOME_HERO_BACKGROUND = '/hero/hero-background.webp'
// Drift Upstate cycle boat on Fourth Lake at golden hour — Adirondack peaks in background

export const HOME_INTRO_LIFESTYLE = '/gallery/portrait-3.jpeg'
// Drift Upstate koozie + cocktail on boat table — sunset over the lake, on-brand lifestyle detail

export const HOME_FINALCTA_SUNSET = '/gallery/flyer-main.jpeg'
// Dramatic Adirondack sunset — Drift Upstate cycle boat on Fourth Lake, blazing red/orange sky

// ── Hero Video (deferred after LCP image loads) ─────────────────────────────
export const HOME_HERO_VIDEO_MP4 = '/videos/hero-reel.mp4'
// 30-second 720p ad reel — Drift Upstate cycle boat on Fourth Lake

export const HOME_HERO_VIDEO_WEBM = '/videos/hero-reel.webm'
// REPLACE: WebM/VP9 encode of hero reel for Chrome/Firefox (not yet available)

export const HOME_HERO_VIDEO_POSTER = HOME_HERO_BACKGROUND
// REPLACE: Best frame from hero video — shows while video loads

// ────────────────────────────────────────────────────────────────────────────
// TOURS OVERVIEW PAGE
// ────────────────────────────────────────────────────────────────────────────

export const TOURS_HERO = '/favicon/favicon-2.png'
// Drift Upstate cycle boat at golden hour — adults, Fourth Lake, Adirondack peaks

export const TOURS_COMPARISON_BG = '/hero/hero-background.webp'
// Drift Upstate cycle boat on Fourth Lake — wide golden hour establishing shot

// ────────────────────────────────────────────────────────────────────────────
// PUBLIC TOUR — The Classic Drift
// ────────────────────────────────────────────────────────────────────────────

export const TOUR_PUBLIC_HERO = u('photo-1544551763-46a013bb70d5', 1920, 900)
// REPLACE: Full boat of happy mixed-age guests, wide shot, Fourth Lake backdrop, daytime

export const TOUR_PUBLIC_DETAIL_1 = u('photo-1488188840666-e2308741a62f', 800, 600)
// REPLACE: Close-up — guests pedaling together, laughing, genuine energy

export const TOUR_PUBLIC_DETAIL_2 = u('photo-1501854140801-50d01698950b', 800, 600)
// REPLACE: Captain at helm, confident smile, Fourth Lake stretching behind him

export const TOUR_PUBLIC_DETAIL_3 = u('photo-1506905925346-21bda4d32df4', 800, 600)
// REPLACE: Aerial view — cycle boat centered, Adirondack mountains framing the scene

export const TOUR_PUBLIC_CARD = u('photo-1544551763-46a013bb70d5', 800, 600)
// REPLACE: Best hero-style shot for the card — group energy, daytime, vibrant

// ────────────────────────────────────────────────────────────────────────────
// PRIVATE CHARTER — Your Boat. Your Moment.
// ────────────────────────────────────────────────────────────────────────────

export const TOUR_PRIVATE_HERO = u('photo-1533577116850-9cc66cad8a9b', 1920, 900)
// REPLACE: Intimate couple or small group on cycle boat at golden hour, dreamy light

export const TOUR_PRIVATE_DETAIL_1 = u('photo-1523580494863-6f3031224c94', 800, 600)
// REPLACE: Small private group toasting with drinks, boat deck, sunset bg

export const TOUR_PRIVATE_DETAIL_2 = u('photo-1533577116850-9cc66cad8a9b', 800, 600)
// REPLACE: Decorated boat for bachelorette — balloons, sashes, signs, festive energy

export const TOUR_PRIVATE_DETAIL_3 = u('photo-1472213984618-c79aaec7fef0', 800, 600)
// REPLACE: Corporate team on private boat, professional but relaxed, lake in background

export const TOUR_PRIVATE_CARD = u('photo-1533577116850-9cc66cad8a9b', 800, 600)
// REPLACE: Golden hour private charter — intimate, luxurious, aspirational

// ────────────────────────────────────────────────────────────────────────────
// COFFEE CRUISE — Morning on the Lake
// ────────────────────────────────────────────────────────────────────────────

export const TOUR_COFFEE_HERO = u('photo-1470071459604-3b5ec3a7fe05', 1920, 900)
// REPLACE: Still morning — mist on Fourth Lake, couple with coffee mugs, peaceful and quiet

export const TOUR_COFFEE_DETAIL_1 = u('photo-1470071459604-3b5ec3a7fe05', 800, 600)
// REPLACE: Close-up: coffee mug held up, steam rising, lake blurred beautifully in background

export const TOUR_COFFEE_DETAIL_2 = u('photo-1506905925346-21bda4d32df4', 800, 600)
// REPLACE: Early morning golden light over Fourth Lake — mist rising, no crowds, serene

export const TOUR_COFFEE_DETAIL_3 = u('photo-1488188840666-e2308741a62f', 800, 600)
// REPLACE: Small intimate group of 4-6 people, morning glow, relaxed smiles, thermos/coffee

export const TOUR_COFFEE_CARD = u('photo-1470071459604-3b5ec3a7fe05', 800, 600)
// REPLACE: Mist-on-the-lake morning shot — quiet, contemplative, perfect morning vibes

// ────────────────────────────────────────────────────────────────────────────
// LADIES NIGHT / BACHELORETTE
// ────────────────────────────────────────────────────────────────────────────

export const TOUR_LADIES_HERO = u('photo-1523580494863-6f3031224c94', 1920, 900)
// REPLACE: Group of women celebrating on cycle boat — sunset light, festive, pure joy

export const TOUR_LADIES_DETAIL_1 = u('photo-1523580494863-6f3031224c94', 800, 600)
// REPLACE: Bachelorette party on boat — sashes, balloons, everyone laughing

export const TOUR_LADIES_DETAIL_2 = u('photo-1533577116850-9cc66cad8a9b', 800, 600)
// REPLACE: Women toasting with drinks, golden hour backdrop, electric energy

export const TOUR_LADIES_DETAIL_3 = u('photo-1472213984618-c79aaec7fef0', 800, 600)
// REPLACE: Evening/sunset ladies night — fairy lights, women dancing/celebrating on boat

export const TOUR_LADIES_CARD = u('photo-1523580494863-6f3031224c94', 800, 600)
// REPLACE: Best celebration shot — joy, energy, Fourth Lake at sunset

// ────────────────────────────────────────────────────────────────────────────
// CORPORATE EVENTS
// ────────────────────────────────────────────────────────────────────────────

export const TOUR_CORPORATE_HERO = u('photo-1522202176988-66273c2fd55f', 1920, 900)
// REPLACE: Professional team on private charter — relaxed smiles, lake backdrop, team bonding energy

export const TOUR_CORPORATE_DETAIL_1 = u('photo-1522202176988-66273c2fd55f', 800, 600)
// REPLACE: Corporate team on cycle boat — casual attire, laughing, Fourth Lake behind them

export const TOUR_CORPORATE_DETAIL_2 = u('photo-1560250097-0b93528c311a', 800, 600)
// REPLACE: Team celebration toast on the water — drinks raised, golden light

export const TOUR_CORPORATE_DETAIL_3 = u('photo-1507003211169-0a1dd7228f2d', 800, 600)
// REPLACE: Group photo on dock before boarding — professional group, Adirondack setting

export const TOUR_CORPORATE_CARD = u('photo-1522202176988-66273c2fd55f', 800, 600)
// REPLACE: Team energy on the water — corporate but fun, aspirational

// ────────────────────────────────────────────────────────────────────────────
// WEDDING CHARTER
// ────────────────────────────────────────────────────────────────────────────

export const TOUR_WEDDING_HERO = u('photo-1537633552985-df8429e8048b', 1920, 900)
// REPLACE: Couple on private charter at golden hour — romantic, Fourth Lake at its most beautiful

export const TOUR_WEDDING_DETAIL_1 = u('photo-1537633552985-df8429e8048b', 800, 600)
// REPLACE: Bride and groom or engaged couple on cycle boat — Adirondacks backdrop

export const TOUR_WEDDING_DETAIL_2 = u('photo-1583939003579-730e3918a45a', 800, 600)
// REPLACE: Bridal party on the water — bridesmaids, bride, pure celebration

export const TOUR_WEDDING_DETAIL_3 = u('photo-1563729784474-d77dbb933a9e', 800, 600)
// REPLACE: Intimate moment on the boat — couple, soft sunset light, romantic

export const TOUR_WEDDING_CARD = u('photo-1537633552985-df8429e8048b', 800, 600)
// REPLACE: Most romantic shot — couple, golden light, Fourth Lake backdrop

// ────────────────────────────────────────────────────────────────────────────
// FAMILY CRUISE
// ────────────────────────────────────────────────────────────────────────────

export const TOUR_FAMILY_HERO = u('photo-1478720568477-152d9b164e26', 1920, 900)
// REPLACE: Family on cycle boat — parents and kids laughing together, Fourth Lake, daytime

export const TOUR_FAMILY_DETAIL_1 = u('photo-1478720568477-152d9b164e26', 800, 600)
// REPLACE: Kids pedaling excitedly — big smiles, summer energy, parents watching

export const TOUR_FAMILY_DETAIL_2 = u('photo-1488646953014-85cb44e25828', 800, 600)
// REPLACE: Family together on the boat — multigenerational, everyone happy

export const TOUR_FAMILY_DETAIL_3 = u('photo-1506905925346-21bda4d32df4', 800, 600)
// REPLACE: Kids pointing at Adirondack scenery from the boat — wonder and discovery

export const TOUR_FAMILY_CARD = u('photo-1478720568477-152d9b164e26', 800, 600)
// REPLACE: Best family energy shot — joy, togetherness, summer memories

// ────────────────────────────────────────────────────────────────────────────
// ABOUT PAGE
// ────────────────────────────────────────────────────────────────────────────

export const ABOUT_HERO = u('photo-1501854140801-50d01698950b', 1920, 900)
// REPLACE: Aerial drone — forward-tracking shot following cycle boat on Fourth Lake

export const ABOUT_STORY_IMAGE = u('photo-1506905925346-21bda4d32df4', 900, 1125)
// REPLACE: Founders/owners on the dock — casual, authentic, Eagle Bay marina in background

export const ABOUT_TIMELINE_1 = u('photo-1488188840666-e2308741a62f', 600, 400)
// REPLACE: Early planning stage — map/sketches on table, early 2021 feel

export const ABOUT_TIMELINE_2 = u('photo-1544551763-46a013bb70d5', 600, 400)
// REPLACE: The boat arriving at Eagle Bay dock for the very first time

export const ABOUT_TIMELINE_3 = u('photo-1523580494863-6f3031224c94', 600, 400)
// REPLACE: Opening Day tour — crew and first guests on the boat, celebration energy

export const ABOUT_TIMELINE_4 = u('photo-1506905925346-21bda4d32df4', 600, 400)
// REPLACE: Busy peak season — full calendar, packed schedule, smiling guests every day

export const ABOUT_BOAT_PHOTO = u('photo-1544551763-46a013bb70d5', 1000, 700)
// REPLACE: The Drift Upstate cycle boat full frame — clean dock background, definitive hero shot

// ────────────────────────────────────────────────────────────────────────────
// CREW PAGE
// ────────────────────────────────────────────────────────────────────────────

export const CREW_HERO = u('photo-1488188840666-e2308741a62f', 1920, 900)
// REPLACE: Full crew group photo on dock — casual/candid, everyone grinning

export const CREW_CAPTAIN_1 = u('photo-1560250097-0b93528c311a', 600, 750)
// REPLACE: Head Captain portrait — editorial quality, on or near the water, natural light

export const CREW_CAPTAIN_2 = u('photo-1568602471122-7832951cc4c5', 600, 750)
// REPLACE: Second captain — on the boat, confident, Fourth Lake in background

export const CREW_MEMBER_1 = u('photo-1494790108377-be9c29b29330', 400, 400)
// REPLACE: Sarah (Guest Experience Lead) — dock, sunny, genuine smile

export const CREW_MEMBER_2 = u('photo-1507003211169-0a1dd7228f2d', 400, 400)
// REPLACE: Tom (First Mate) — on the water, vibrant energy

export const CREW_MEMBER_3 = u('photo-1438761681033-6461ffad8d80', 400, 400)
// REPLACE: Casey (Events Coordinator) — dock with Adirondack trees in background

export const CREW_MEMBER_4 = u('photo-1500648767791-00dcc994a43e', 400, 400)
// REPLACE: Ryan (Dock Crew) — candid laugh, casual uniform, water behind him

// ────────────────────────────────────────────────────────────────────────────
// SEASONAL PROMOTIONS
// ────────────────────────────────────────────────────────────────────────────

export const SEASONAL_SUMMER_BG = u('photo-1506905925346-21bda4d32df4', 1920, 700)
// REPLACE: Peak summer day on Fourth Lake — full boat, bright sky, quintessential summer

export const SEASONAL_FALL_BG = u('photo-1474552226712-ac0f0961a954', 1920, 700)
// REPLACE: Fall foliage framing Fourth Lake — orange and red Adirondack peaks reflecting on water

export const SEASONAL_SUNSET_BG = u('photo-1472213984618-c79aaec7fef0', 1920, 700)
// REPLACE: Most dramatic sunset captured from cycle boat — reds, oranges, impossible beauty

// ────────────────────────────────────────────────────────────────────────────
// CONTACT PAGE
// ────────────────────────────────────────────────────────────────────────────

export const CONTACT_HERO = u('photo-1533682805518-4b4d4d4d4d4d', 1920, 700)
export const CONTACT_HERO_FALLBACK = u('photo-1506905925346-21bda4d32df4', 1920, 700)
// REPLACE: Eagle Bay dock at golden morning light — peaceful, welcoming, inviting

// ────────────────────────────────────────────────────────────────────────────
// BOOKING PAGE
// ────────────────────────────────────────────────────────────────────────────

export const BOOKING_HERO = u('photo-1544551763-46a013bb70d5', 1920, 700)
// REPLACE: Low angle from water level looking up at happy guests on cycle boat

export const BOOKING_CONFIRMATION = u('photo-1506905925346-21bda4d32df4', 1920, 900)
// REPLACE: Celebratory aerial — boat on Fourth Lake, everything looks perfect, triumphant

// ────────────────────────────────────────────────────────────────────────────
// INSTAGRAM GRID (12 posts — pull from real API, these are stand-ins)
// ────────────────────────────────────────────────────────────────────────────

export const IG_POST_1 = '/hero/hero-background.webp'
// Drift Upstate cycle boat — family, golden hour, Fourth Lake and Adirondack peaks

export const IG_POST_2 = '/gallery/flyer-main.jpeg'
// Drift Upstate cycle boat — dramatic red/orange Adirondack sunset

export const IG_POST_3 = '/favicon/favicon-2.png'
// Drift Upstate cycle boat — adult group, golden hour, Fourth Lake

export const IG_POST_4 = '/gallery/portrait-3.jpeg'
// Drift Upstate koozie + cocktail on boat table at sunset

export const IG_POST_5 = '/favicon/favicon-1.png'
// Drift Upstate cycle boat — golden hour, family, lake and mountains

export const IG_POST_6 = u('photo-1533577116850-9cc66cad8a9b', 600, 600)
// REPLACE: Bachelorette party celebrating on the water

export const IG_POST_7 = u('photo-1523580494863-6f3031224c94', 600, 600)
// REPLACE: Women laughing and toasting — Ladies Night energy

export const IG_POST_8 = u('photo-1560250097-0b93528c311a', 600, 600)
// REPLACE: Captain portrait — handsome, confident, Fourth Lake behind him

export const IG_POST_9 = u('photo-1478720568477-152d9b164e26', 600, 600)
// REPLACE: Family on the boat — kids pedaling, parents smiling

// ────────────────────────────────────────────────────────────────────────────
// VIDEOS
// ────────────────────────────────────────────────────────────────────────────

export const VIDEO_HIGHLIGHT_REEL_ID = 'dQw4w9WgXcQ'
// REPLACE: Your YouTube video ID for the 90-second cinematic highlight reel

export const VIDEO_THUMBNAIL = u('photo-1501854140801-50d01698950b', 1280, 720)
// REPLACE: Best frame from highlight reel — golden hour drone shot, the money shot

export const VIDEO_BEHIND_SCENES_ID = 'dQw4w9WgXcQ'
// REPLACE: Behind-the-scenes YouTube video — crew prep, dock life, candid moments

// ────────────────────────────────────────────────────────────────────────────
// BEFORE / AFTER SLIDER
// ────────────────────────────────────────────────────────────────────────────

export const LAKE_MORNING = u('photo-1470071459604-3b5ec3a7fe05', 1400, 800)
// REPLACE: Early morning on Fourth Lake — mist on the water, calm, quiet, golden dawn light

export const LAKE_SUNSET = '/favicon/favicon-1.png'
// Drift Upstate cycle boat at golden hour — Fourth Lake, Adirondack peaks, family on board

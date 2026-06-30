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

export const HOME_HERO_BACKGROUND = '/gallery/boat-sunset-crowd.jpeg'
// Drift Upstate tiki cycle boat packed with guests, blazing golden sunset, landscape

export const HOME_INTRO_LIFESTYLE = '/gallery/guests-laughing-boat.png'
// Mixed group of young adults laughing candidly with drinks on the boat

export const HOME_FINALCTA_SUNSET = '/gallery/boat-lake-wide-sunset.png'
// Wide establishing shot — full cycle boat on lake, birds, dock, golden sunset

// ── Hero Video (deferred after LCP image loads) ─────────────────────────────
export const HOME_HERO_VIDEO_MP4 = '/videos/hero-reel.mp4'
// 30-second 720p ad reel — Drift Upstate cycle boat on Fourth Lake

export const HOME_HERO_VIDEO_WEBM = '/videos/hero-reel.webm'
// REPLACE: WebM/VP9 encode of hero reel for Chrome/Firefox (not yet available)

export const HOME_HERO_VIDEO_POSTER = HOME_HERO_BACKGROUND
// Best frame from hero video — shows while video loads

// ────────────────────────────────────────────────────────────────────────────
// TOURS OVERVIEW PAGE
// ────────────────────────────────────────────────────────────────────────────

export const TOURS_HERO = '/gallery/boat-sunset-crowd.jpeg'
// Drift Upstate tiki cycle boat with crowd, blazing golden sunset

export const TOURS_COMPARISON_BG = '/gallery/boat-lake-wide-sunset.png'
// Wide golden hour establishing shot — full cycle boat on Fourth Lake

// ────────────────────────────────────────────────────────────────────────────
// PUBLIC TOUR — The Classic Drift
// ────────────────────────────────────────────────────────────────────────────

export const TOUR_PUBLIC_HERO = '/gallery/friends-group-toast.png'
// Six diverse young adults toasting drinks, lake and sunset backdrop

export const TOUR_PUBLIC_DETAIL_1 = '/gallery/couples-sunset-toast.png'
// Two older couples at table with lantern and drinks, sunset backdrop

export const TOUR_PUBLIC_DETAIL_2 = '/gallery/guests-laughing-boat.png'
// Mixed group laughing candidly with drinks on the boat

export const TOUR_PUBLIC_DETAIL_3 = u('photo-1506905925346-21bda4d32df4', 800, 600)
// REPLACE: Aerial view — cycle boat centered, Adirondack mountains framing the scene

export const TOUR_PUBLIC_CARD = '/gallery/boat-sunset-crowd.jpeg'
// Real Drift Upstate tiki boat, large group, blazing golden sunset

// ────────────────────────────────────────────────────────────────────────────
// PRIVATE CHARTER — Your Boat. Your Moment.
// ────────────────────────────────────────────────────────────────────────────

export const TOUR_PRIVATE_HERO = '/gallery/proposal-landscape.png'
// Proposal on boat — "She said YES!" sign, candles, flowers, audience, landscape

export const TOUR_PRIVATE_DETAIL_1 = '/gallery/friends-group-toast.png'
// Six young adults toasting — private group energy, sunset backdrop

export const TOUR_PRIVATE_DETAIL_2 = '/gallery/proposal-portrait.png'
// Proposal portrait crop — romantic, candles and flowers, intimate moment

export const TOUR_PRIVATE_DETAIL_3 = u('photo-1472213984618-c79aaec7fef0', 800, 600)
// REPLACE: Corporate team on private boat, professional but relaxed, lake in background

export const TOUR_PRIVATE_CARD = '/gallery/proposal-landscape.png'
// Proposal landscape — romantic, aspirational, golden hour

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

export const TOUR_LADIES_HERO = '/gallery/friends-group-toast.png'
// Six diverse young adults toasting at sunset — celebration energy

export const TOUR_LADIES_DETAIL_1 = '/gallery/guests-laughing-boat.png'
// Mixed group laughing candidly with drinks on the boat

export const TOUR_LADIES_DETAIL_2 = '/gallery/couples-sunset-toast.png'
// Two couples toasting with lantern, golden hour backdrop

export const TOUR_LADIES_DETAIL_3 = u('photo-1472213984618-c79aaec7fef0', 800, 600)
// REPLACE: Evening/sunset ladies night — fairy lights, women dancing/celebrating on boat

export const TOUR_LADIES_CARD = '/gallery/friends-group-toast.png'
// Diverse group toasting at sunset — joy, energy, Fourth Lake backdrop

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

export const TOUR_WEDDING_HERO = '/gallery/proposal-portrait.png'
// Proposal portrait — romantic, candles and flowers, intimate moment on boat

export const TOUR_WEDDING_DETAIL_1 = '/gallery/proposal-landscape.png'
// Proposal landscape — "She said YES!" sign, candles, flowers, audience

export const TOUR_WEDDING_DETAIL_2 = u('photo-1583939003579-730e3918a45a', 800, 600)
// REPLACE: Bridal party on the water — bridesmaids, bride, pure celebration

export const TOUR_WEDDING_DETAIL_3 = '/gallery/proposal-portrait.png'
// Proposal portrait — close, romantic, golden light

export const TOUR_WEDDING_CARD = '/gallery/proposal-landscape.png'
// Most romantic shot — proposal moment, golden hour, Fourth Lake backdrop

// ────────────────────────────────────────────────────────────────────────────
// FAMILY CRUISE
// ────────────────────────────────────────────────────────────────────────────

export const TOUR_FAMILY_HERO = '/gallery/family-sunset-boat.png'
// Family with kids on boat from behind, orange sunset, landscape

export const TOUR_FAMILY_DETAIL_1 = '/gallery/kids-little-helpers.png'
// Two girls in "Little Helper" Drift Upstate polo shirts waving

export const TOUR_FAMILY_DETAIL_2 = '/gallery/family-sunset-boat.png'
// Family together on the boat — parents and kids, orange sunset

export const TOUR_FAMILY_DETAIL_3 = u('photo-1506905925346-21bda4d32df4', 800, 600)
// REPLACE: Kids pointing at Adirondack scenery from the boat — wonder and discovery

export const TOUR_FAMILY_CARD = '/gallery/kids-little-helpers.png'
// Kids in Drift Upstate shirts — genuine, on-brand, memorable

// ────────────────────────────────────────────────────────────────────────────
// ABOUT PAGE
// ────────────────────────────────────────────────────────────────────────────

export const ABOUT_HERO = '/gallery/boat-lake-wide-sunset.png'
// Wide establishing shot — full cycle boat on lake, birds, dock, golden sunset

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

export const ABOUT_BOAT_PHOTO = '/gallery/boat-sunset-crowd.jpeg'
// Real Drift Upstate tiki boat, large group, blazing golden sunset — definitive hero shot

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

export const SEASONAL_SUMMER_BG = '/gallery/boat-sunset-crowd.jpeg'
// Peak summer day — full boat of guests, blazing golden sunset

export const SEASONAL_FALL_BG = u('photo-1474552226712-ac0f0961a954', 1920, 700)
// REPLACE: Fall foliage framing Fourth Lake — orange and red Adirondack peaks reflecting on water

export const SEASONAL_SUNSET_BG = '/gallery/sunset-watching-crowd.png'
// Group from behind watching blazing orange sunset from boat — atmospheric, cinematic

// ────────────────────────────────────────────────────────────────────────────
// CONTACT PAGE
// ────────────────────────────────────────────────────────────────────────────

export const CONTACT_HERO = '/gallery/eagle-bay-dock-sunset.png'
export const CONTACT_HERO_FALLBACK = '/gallery/eagle-bay-dock-sunset.png'
// Eagle Bay dock at dramatic red/orange sunset — silhouettes, American flag, welcoming

// ────────────────────────────────────────────────────────────────────────────
// BOOKING PAGE
// ────────────────────────────────────────────────────────────────────────────

export const BOOKING_HERO = '/gallery/eagle-bay-dock-sunset.png'
// Eagle Bay dock at sunset — aspirational, the destination they're booking

export const BOOKING_CONFIRMATION = '/gallery/boat-lake-wide-sunset.png'
// Wide establishing shot — boat on lake, golden sunset, celebratory feel

// ────────────────────────────────────────────────────────────────────────────
// INSTAGRAM GRID (12 posts — pull from real API, these are stand-ins)
// ────────────────────────────────────────────────────────────────────────────

export const IG_POST_1 = '/gallery/boat-sunset-crowd.jpeg'
// Real Drift Upstate tiki boat, large group, blazing golden sunset

export const IG_POST_2 = '/gallery/flyer-main.jpeg'
// Drift Upstate cycle boat — dramatic red/orange Adirondack sunset

export const IG_POST_3 = '/gallery/friends-group-toast.png'
// Six young adults toasting at sunset — celebration energy

export const IG_POST_4 = '/gallery/portrait-3.jpeg'
// Drift Upstate koozie + cocktail on boat table at sunset

export const IG_POST_5 = '/gallery/couples-sunset-toast.png'
// Two couples toasting with lantern and drinks, golden hour

export const IG_POST_6 = '/gallery/proposal-landscape.png'
// Proposal on boat — romantic moment, candles, flowers, "She said YES!"

export const IG_POST_7 = '/gallery/friends-group-toast.png'
// Six diverse young adults toasting — celebration, lake and sunset

export const IG_POST_8 = '/gallery/sunset-watching-crowd.png'
// Group silhouetted watching blazing orange sunset from the boat

export const IG_POST_9 = '/gallery/kids-little-helpers.png'
// Two girls in "Little Helper" Drift Upstate polo shirts waving

// ────────────────────────────────────────────────────────────────────────────
// VIDEOS
// ────────────────────────────────────────────────────────────────────────────

export const VIDEO_HIGHLIGHT_REEL_ID = 'dQw4w9WgXcQ'
// REPLACE: Your YouTube video ID for the 90-second cinematic highlight reel

export const VIDEO_THUMBNAIL = '/gallery/boat-lake-wide-sunset.png'
// Wide golden hour shot — full cycle boat on lake, birds, dock, sunset

export const VIDEO_BEHIND_SCENES_ID = 'dQw4w9WgXcQ'
// REPLACE: Behind-the-scenes YouTube video — crew prep, dock life, candid moments

// ────────────────────────────────────────────────────────────────────────────
// BEFORE / AFTER SLIDER
// ────────────────────────────────────────────────────────────────────────────

export const LAKE_MORNING = u('photo-1470071459604-3b5ec3a7fe05', 1400, 800)
// REPLACE: Early morning on Fourth Lake — mist on the water, calm, quiet, golden dawn light

export const LAKE_SUNSET = '/gallery/boat-lake-wide-sunset.png'
// Wide cycle boat shot at golden hour — Fourth Lake, Adirondack peaks, full boat visible

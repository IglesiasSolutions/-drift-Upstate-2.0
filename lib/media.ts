/**
 * DRIFT UPSTATE — Media Asset Registry
 *
 * All image/video URLs centralized here.
 * Replace placeholder URLs with actual Drift Upstate AI photography
 * and cinematic video when assets are delivered.
 *
 * Naming convention:
 *   PAGE_SECTION_DESCRIPTOR
 */

// ── Unsplash base helper ────────────────────────────────────────────────────
const u = (id: string, w = 1920, h = 1080, q = 85) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=${q}`

// ── HOME ────────────────────────────────────────────────────────────────────
export const HOME_HERO_BACKGROUND = u('photo-1506905925346-21bda4d32df4')
// REPLACE: Drone shot of Drift Upstate cycle boat on Fourth Lake, golden hour, Adirondack peaks bg

export const HOME_INTRO_LIFESTYLE = u('photo-1501854140801-50d01698950b', 900, 1125)
// REPLACE: Group laughing on the cycle boat, daytime, mountains visible, candid energy

export const HOME_FINALCTA_SUNSET = u('photo-1472213984618-c79aaec7fef0', 1920, 1080)
// REPLACE: Dramatic Adirondack sunset over Fourth Lake, warm golden tones

// ── TOURS OVERVIEW ──────────────────────────────────────────────────────────
export const TOURS_HERO = u('photo-1544551763-46a013bb70d5', 1920, 900)
// REPLACE: Aerial orbit shot of cycle boat from above, full lake visible

export const TOURS_COMPARISON_BG = u('photo-1506905925346-21bda4d32df4', 1920, 1080)
// REPLACE: Wide establishing shot of Eagle Bay dock and marina

// ── PUBLIC TOUR ─────────────────────────────────────────────────────────────
export const TOUR_PUBLIC_HERO = u('photo-1544551763-46a013bb70d5', 1920, 900)
// REPLACE: Wide shot, full boat of happy mixed-age group, Fourth Lake backdrop, daytime

export const TOUR_PUBLIC_DETAIL_1 = u('photo-1488188840666-e2308741a62f', 800, 600)
// REPLACE: Guests pedaling together, laughing, close perspective

export const TOUR_PUBLIC_DETAIL_2 = u('photo-1501854140801-50d01698950b', 800, 600)
// REPLACE: Captain at helm, confident smile, Fourth Lake stretching behind

export const TOUR_PUBLIC_DETAIL_3 = u('photo-1506905925346-21bda4d32df4', 800, 600)
// REPLACE: Aerial view of cycle boat with Adirondack mountains framing the scene

export const TOUR_PUBLIC_CARD = u('photo-1544551763-46a013bb70d5', 800, 600)

// ── PRIVATE CHARTER ─────────────────────────────────────────────────────────
export const TOUR_PRIVATE_HERO = u('photo-1533577116850-9cc66cad8a9b', 1920, 900)
// REPLACE: Intimate couple or small group on cycle boat at golden hour, dreamy light

export const TOUR_PRIVATE_DETAIL_1 = u('photo-1523580494863-6f3031224c94', 800, 600)
// REPLACE: Small private group toasting with drinks, boat deck, sunset bg

export const TOUR_PRIVATE_DETAIL_2 = u('photo-1533577116850-9cc66cad8a9b', 800, 600)
// REPLACE: Decorated boat for a bachelorette — balloons, signs, festive energy

export const TOUR_PRIVATE_DETAIL_3 = u('photo-1472213984618-c79aaec7fef0', 800, 600)
// REPLACE: Corporate team on private boat, smiling, lake in background

export const TOUR_PRIVATE_CARD = u('photo-1533577116850-9cc66cad8a9b', 800, 600)

// ── COFFEE CRUISE ───────────────────────────────────────────────────────────
export const TOUR_COFFEE_HERO = u('photo-1470071459604-3b5ec3a7fe05', 1920, 900)
// REPLACE: Still morning, mist on Fourth Lake, couple with coffee mugs, peaceful

export const TOUR_COFFEE_DETAIL_1 = u('photo-1470071459604-3b5ec3a7fe05', 800, 600)
// REPLACE: Close up: coffee mug in hand, steam rising, lake blurred in background

export const TOUR_COFFEE_DETAIL_2 = u('photo-1506905925346-21bda4d32df4', 800, 600)
// REPLACE: Early morning golden light over Fourth Lake, mist rising, no crowds

export const TOUR_COFFEE_DETAIL_3 = u('photo-1488188840666-e2308741a62f', 800, 600)
// REPLACE: Small intimate group of 4-6 people, morning, relaxed smiles, coffee

export const TOUR_COFFEE_CARD = u('photo-1470071459604-3b5ec3a7fe05', 800, 600)

// ── LADIES NIGHT ────────────────────────────────────────────────────────────
export const TOUR_LADIES_HERO = u('photo-1523580494863-6f3031224c94', 1920, 900)
// REPLACE: Group of women celebrating on the cycle boat, sunset light, festive

export const TOUR_LADIES_DETAIL_1 = u('photo-1523580494863-6f3031224c94', 800, 600)
// REPLACE: Bachelorette party on boat — sashes, balloons, everyone laughing

export const TOUR_LADIES_DETAIL_2 = u('photo-1533577116850-9cc66cad8a9b', 800, 600)
// REPLACE: Group of women toasting with drinks, golden hour, pure joy

export const TOUR_LADIES_DETAIL_3 = u('photo-1472213984618-c79aaec7fef0', 800, 600)
// REPLACE: Night tour, fairy lights on boat, women dancing/celebrating

export const TOUR_LADIES_CARD = u('photo-1523580494863-6f3031224c94', 800, 600)

// ── ABOUT ───────────────────────────────────────────────────────────────────
export const ABOUT_HERO = u('photo-1501854140801-50d01698950b', 1920, 900)
// REPLACE: Aerial drone, forward-tracking shot following cycle boat on Fourth Lake

export const ABOUT_STORY_IMAGE = u('photo-1506905925346-21bda4d32df4', 900, 1125)
// REPLACE: Founders/owners on the dock, casual, authentic, Eagle Bay in bg

export const ABOUT_TIMELINE_1 = u('photo-1488188840666-e2308741a62f', 600, 400)
// REPLACE: Early planning stages, map/sketches on a table

export const ABOUT_TIMELINE_2 = u('photo-1544551763-46a013bb70d5', 600, 400)
// REPLACE: The boat arriving for the first time at Eagle Bay dock

export const ABOUT_TIMELINE_3 = u('photo-1523580494863-6f3031224c94', 600, 400)
// REPLACE: First ever tour — crew and guests on Opening Day

export const ABOUT_TIMELINE_4 = u('photo-1506905925346-21bda4d32df4', 600, 400)
// REPLACE: Busy season shot — full calendar, happy guests, boat always moving

export const ABOUT_BOAT_PHOTO = u('photo-1544551763-46a013bb70d5', 1000, 700)
// REPLACE: The Drift Upstate cycle boat full frame, clean dock background, hero shot

// ── CREW ────────────────────────────────────────────────────────────────────
export const CREW_HERO = u('photo-1488188840666-e2308741a62f', 1920, 900)
// REPLACE: Full crew group photo on dock, casual/candid, everyone grinning

export const CREW_CAPTAIN_1 = u('photo-1560250097-0b93528c311a', 600, 750)
// REPLACE: Head captain portrait — editorial style, on or near the water, natural light

export const CREW_CAPTAIN_2 = u('photo-1568602471122-7832951cc4c5', 600, 750)
// REPLACE: Second captain — on the boat, confident, Fourth Lake in background

export const CREW_MEMBER_1 = u('photo-1494790108377-be9c29b29330', 400, 400)
// REPLACE: First mate — dock, sunny, smiling

export const CREW_MEMBER_2 = u('photo-1507003211169-0a1dd7228f2d', 400, 400)
// REPLACE: Guest experience lead — on the water, vibrant energy

export const CREW_MEMBER_3 = u('photo-1438761681033-6461ffad8d80', 400, 400)
// REPLACE: Events coordinator — dock with Adirondack trees in background

export const CREW_MEMBER_4 = u('photo-1500648767791-00dcc994a43e', 400, 400)
// REPLACE: Dock crew — candid laugh, casual uniform

// ── CONTACT ─────────────────────────────────────────────────────────────────
export const CONTACT_HERO = u('photo-1533682805518-4b4d4d4d4d4d', 1920, 700)
// REPLACE: Eagle Bay dock at golden morning light, peaceful, welcoming

// Fallback for contact hero
export const CONTACT_HERO_FALLBACK = u('photo-1506905925346-21bda4d32df4', 1920, 700)

// ── BOOKING ─────────────────────────────────────────────────────────────────
export const BOOKING_HERO = u('photo-1544551763-46a013bb70d5', 1920, 700)
// REPLACE: Low angle shot from water level looking up at happy guests on cycle boat

export const BOOKING_CONFIRMATION = u('photo-1506905925346-21bda4d32df4', 1920, 900)
// REPLACE: Celebratory aerial shot — boat on Fourth Lake, everything looks perfect

// ── VIDEO ───────────────────────────────────────────────────────────────────
// Replace with actual YouTube/Vimeo video IDs
export const VIDEO_HIGHLIGHT_REEL_ID = 'dQw4w9WgXcQ'
// REPLACE: Drift Upstate 90-second cinematic highlight reel

export const VIDEO_THUMBNAIL = u('photo-1501854140801-50d01698950b', 1280, 720)
// REPLACE: Best frame from the highlight reel — golden hour drone shot

import {
  CREW_CAPTAIN_1,
  CREW_CAPTAIN_2,
  CREW_MEMBER_1,
  CREW_MEMBER_2,
  CREW_MEMBER_3,
  CREW_MEMBER_4,
} from '@/lib/media'

export interface Captain {
  id: string
  name: string
  title: string
  yearsOnLake: number
  quote: string
  bio: string
  image: string
  imageAlt: string
  funFacts: {
    playlist: string
    coffee: string
    trail: string
    favoriteSpot: string
  }
}

export interface CrewMember {
  id: string
  name: string
  role: string
  quote: string
  image: string
  imageAlt: string
}

export const captains: Captain[] = [
  {
    id: 'captain-jake',
    name: 'Jake',
    title: 'Head Captain',
    yearsOnLake: 12,
    quote: '"Fourth Lake never gets old — every single morning out here is different."',
    bio: 'Jake grew up three miles from this dock and has been on Fourth Lake since before he could drive. He\'ll tell you every story about every inch of it, and you\'ll want to hear all of them. As head captain, Jake sets the tone for what a Drift Upstate tour is supposed to feel like: safe, smooth, and genuinely fun. His pre-trip safety briefings are somehow both thorough and entertaining.',
    image: CREW_CAPTAIN_1,
    imageAlt: 'Captain Jake — Head Captain at Drift Upstate',
    funFacts: {
      playlist: 'Classic Rock with a Country chaser',
      coffee: 'Black, always. No exceptions.',
      trail: 'Black Bear Mountain — for the summit view of Fourth Lake',
      favoriteSpot: 'The eastern cove just as the sun hits it in the morning',
    },
  },
  {
    id: 'captain-mike',
    name: 'Mike',
    title: 'Captain & Safety Officer',
    yearsOnLake: 8,
    quote: '"The look on a first-timer\'s face when the mountains come into view — that\'s why I do this."',
    bio: 'Mike came to Eagle Bay for a summer job and never left. Certified in everything that matters — Coast Guard license, First Aid, CPR, Wilderness First Responder — he\'s the person you want in charge when things need to go exactly right. Off the water, you\'ll find him hiking every trail between here and Old Forge, which makes him an exceptional local guide when guests want recommendations.',
    image: CREW_CAPTAIN_2,
    imageAlt: 'Captain Mike — Captain and Safety Officer at Drift Upstate',
    funFacts: {
      playlist: 'Indie folk transitioning into upbeat pop for the back half',
      coffee: 'Oat milk latte — don\'t judge him',
      trail: 'Bald Mountain fire tower — best views for the least effort',
      favoriteSpot: 'The middle of Fourth Lake when there\'s no wind and the water is glass',
    },
  },
]

export const crewMembers: CrewMember[] = [
  {
    id: 'sarah',
    name: 'Sarah',
    role: 'Guest Experience Lead',
    quote: '"If you leave without a smile, I haven\'t done my job."',
    image: CREW_MEMBER_1,
    imageAlt: 'Sarah, Guest Experience Lead at Drift Upstate',
  },
  {
    id: 'tom',
    name: 'Tom',
    role: 'First Mate & Dock Crew',
    quote: '"Best office in the Adirondacks. Not biased at all."',
    image: CREW_MEMBER_2,
    imageAlt: 'Tom, First Mate at Drift Upstate',
  },
  {
    id: 'casey',
    name: 'Casey',
    role: 'Events & Private Charters',
    quote: '"Every party deserves a perfect backdrop. We have one."',
    image: CREW_MEMBER_3,
    imageAlt: 'Casey, Events Coordinator at Drift Upstate',
  },
  {
    id: 'ryan',
    name: 'Ryan',
    role: 'Dock Crew & Operations',
    quote: '"The boat always leaves the dock in better shape than it arrived."',
    image: CREW_MEMBER_4,
    imageAlt: 'Ryan, Dock Crew at Drift Upstate',
  },
]

export const certifications = [
  { label: 'Coast Guard Licensed', icon: '⚓' },
  { label: 'First Aid & CPR Certified', icon: '🩹' },
  { label: 'Water Safety Certified', icon: '🌊' },
  { label: 'Wilderness First Responder', icon: '🏔️' },
]

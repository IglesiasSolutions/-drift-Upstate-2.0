import {
  CREW_CAPTAIN_1,
  CREW_CAPTAIN_2,
  CREW_MEMBER_1,
  CREW_MEMBER_2,
} from '@/lib/media'

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  imageAlt: string
}

export const teamIntro =
  'We are an owned and operated family business that takes pride in showing others the beauty of the Fulton chain of lakes. The only thing better than owning a boat is having friends who own boats. Well, consider us those friends!'

export const teamMembers: TeamMember[] = [
  {
    id: 'nate',
    name: 'Nate Larrea',
    role: 'Captain / Owner',
    bio: 'After a successful career in engineering and years spent traveling across central and south America, Captain Nate found his true home here in the Adirondacks. Combining their love for adventure, he and his wife started Drift Upstate to share the regions beauty and hidden stories with visitors and locals alike.',
    image: CREW_CAPTAIN_1,
    imageAlt: 'Nate Larrea, Captain and Owner of Drift Upstate Boat Tours',
  },
  {
    id: 'brittany',
    name: 'Brittany Larrea',
    role: 'Skipper / Owner',
    bio: 'Growing up spending summers in Old Forge, NY, Brittany developed a lifelong connection to the lakes and wilderness of the Adirondacks. After a career in teaching and travel with her husband, Nate, she returned to the mountains to turn her passion for storytelling, nature and adventure into Drift Upstate.',
    image: CREW_CAPTAIN_2,
    imageAlt: 'Brittany Larrea, Skipper and Owner of Drift Upstate Boat Tours',
  },
  {
    id: 'vannalee',
    name: 'Vannalee Larrea',
    role: 'First Mate',
    bio: 'As the daughter of the owners and proud first mate, Vannalee has grown up surrounded by lakes, the forest and the small-town charm of the Adirondack mountains. When aboard, she helps make each tour feel like a day on the lake with family!',
    image: CREW_MEMBER_1,
    imageAlt: 'Vannalee Larrea, First Mate at Drift Upstate Boat Tours',
  },
  {
    id: 'solay',
    name: 'Solay Larrea',
    role: 'Second Mate',
    bio: 'As the youngest member of the crew, Solay grew up exploring the lakes and trails alongside her family. As second mate, she brings energy, curiosity and a love for the outdoors to every tour!',
    image: CREW_MEMBER_2,
    imageAlt: 'Solay Larrea, Second Mate at Drift Upstate Boat Tours',
  },
]

export const certifications = [
  { label: 'Coast Guard Licensed', icon: '⚓' },
  { label: 'First Aid & CPR Certified', icon: '🩹' },
  { label: 'Water Safety Certified', icon: '🌊' },
  { label: 'Wilderness First Responder', icon: '🏔️' },
]

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, X, Heart, MessageCircle } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { siteConfig } from '@/config/site'
import {
  IG_POST_1, IG_POST_2, IG_POST_3,
  IG_POST_4, IG_POST_5, IG_POST_6,
  IG_POST_7, IG_POST_8, IG_POST_9,
} from '@/lib/media'

// Replace with real Instagram feed data via Elfsight, Curator.io, or Instagram Graph API
// API: https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=TOKEN
const posts = [
  { id: '1', src: IG_POST_1, alt: 'Guests at golden hour on cycle boat — Fourth Lake', likes: 312, comments: 28, caption: 'Golden hour on Fourth Lake hits different when you\'re in the middle of it. 🌅 #DriftUpstate #Adirondacks' },
  { id: '2', src: IG_POST_2, alt: 'Adirondack peaks reflected on Fourth Lake', likes: 489, comments: 42, caption: 'When the mountains hit the water just right ✨ #FourthLake #AdirondackViews' },
  { id: '3', src: IG_POST_3, alt: 'Aerial of cycle boat on Fourth Lake', likes: 621, comments: 55, caption: 'From above, Fourth Lake never disappoints 🚣 #CycleBoat #DroneShot' },
  { id: '4', src: IG_POST_4, alt: 'Morning mist on Fourth Lake during coffee cruise', likes: 244, comments: 19, caption: 'Morning coffee hits different on the lake ☕ #CoffeeCruise #EagleBay' },
  { id: '5', src: IG_POST_5, alt: 'Sunset from cycle boat — horizon on fire', likes: 782, comments: 68, caption: 'No filter needed when the Adirondacks do the work 🔥 #Sunset #ThirdCycleBoat' },
  { id: '6', src: IG_POST_6, alt: 'Bachelorette party celebrating on the water', likes: 398, comments: 37, caption: 'She said YES to the dress, and to the boat 👰 #Bachelorette #LadiesNight' },
  { id: '7', src: IG_POST_7, alt: 'Women laughing and toasting on Ladies Night cruise', likes: 531, comments: 48, caption: 'The girls are BACK in town 🥂 #DriftUpstate #LadiesNight #Adirondacks' },
  { id: '8', src: IG_POST_8, alt: 'Captain portrait on Fourth Lake', likes: 287, comments: 31, caption: 'Captain Jake with his office view 😎 #CaptainLife #FourthLake' },
  { id: '9', src: IG_POST_9, alt: 'Family with kids on cycle boat tour', likes: 415, comments: 36, caption: 'Best summer memories start on the water 👨‍👩‍👧‍👦 #FamilyTour #AdirondackFamily' },
]

// Variable grid sizes for visual interest (mimics Instagram's masonry feel)
const gridSpans = [
  'col-span-2 row-span-2', // post 1 — large feature
  'col-span-1 row-span-1', // post 2
  'col-span-1 row-span-1', // post 3
  'col-span-1 row-span-1', // post 4
  'col-span-1 row-span-1', // post 5
  'col-span-2 row-span-1', // post 6 — wide
  'col-span-1 row-span-1', // post 7
  'col-span-1 row-span-2', // post 8 — tall
  'col-span-1 row-span-1', // post 9
]

export function InstagramGrid() {
  const [lightbox, setLightbox] = useState<(typeof posts)[0] | null>(null)

  return (
    <section className="section-padding bg-white" aria-label="Instagram gallery">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block h-px w-8 bg-drift-gold" />
                <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                  Follow the Adventure
                </span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl text-drift-navy">
                Life Is Better From the Water
              </h2>
            </div>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-montserrat text-xs tracking-widest uppercase text-drift-navy hover:text-drift-gold transition-colors flex-shrink-0"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              {siteConfig.social.instagramHandle}
            </Link>
          </div>
        </ScrollReveal>

        {/* Masonry-style grid — desktop */}
        <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-2 auto-rows-[200px]">
          {posts.map((post, i) => (
            <motion.button
              key={post.id}
              onClick={() => setLightbox(post)}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`${gridSpans[i] ?? ''} relative overflow-hidden group cursor-pointer`}
              aria-label={`View: ${post.alt}`}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-drift-navy/0 group-hover:bg-drift-navy/50 transition-all duration-300 flex items-center justify-center gap-5">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-5">
                  <span className="flex items-center gap-1.5 text-white font-inter text-sm">
                    <Heart className="w-4 h-4 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 text-white font-inter text-sm">
                    <MessageCircle className="w-4 h-4 fill-white" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Mobile: simple 3-col grid */}
        <div className="md:hidden grid grid-cols-3 gap-1">
          {posts.slice(0, 9).map((post, i) => (
            <motion.button
              key={post.id}
              onClick={() => setLightbox(post)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative aspect-square overflow-hidden group"
              aria-label={`View: ${post.alt}`}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="33vw"
              />
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat text-xs tracking-widest uppercase text-drift-navy hover:text-drift-gold transition-colors"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            Follow @driftupstate for daily lake content →
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-lg w-full bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative aspect-square">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-cover"
                  sizes="500px"
                />
              </div>
              {/* Caption */}
              <div className="p-5">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#f09433] to-[#e6683c] to-[#dc2743] to-[#cc2366] to-[#bc1888] flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <span className="font-montserrat text-xs font-bold text-drift-navy tracking-wide">driftupstate</span>
                  <Link
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto font-montserrat text-xs text-blue-500 hover:text-blue-700 tracking-wide"
                  >
                    Follow
                  </Link>
                </div>
                <p className="font-inter text-sm text-drift-navy/80 leading-relaxed line-clamp-3">
                  <span className="font-bold text-drift-navy">driftupstate</span>{' '}
                  {lightbox.caption}
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="flex items-center gap-1 font-inter text-xs text-drift-navy/50">
                    <Heart className="w-3.5 h-3.5" /> {lightbox.likes} likes
                  </span>
                  <span className="flex items-center gap-1 font-inter text-xs text-drift-navy/50">
                    <MessageCircle className="w-3.5 h-3.5" /> {lightbox.comments} comments
                  </span>
                </div>
              </div>
              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-white hover:text-drift-gold transition-colors p-2"
                aria-label="Close"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

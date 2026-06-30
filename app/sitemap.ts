import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { getAllTourSlugs } from '@/data/tours'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/tours`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/crew`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/book`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/gift-cards`, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const tourRoutes: MetadataRoute.Sitemap = getAllTourSlugs().map((slug) => ({
    url: `${base}/tours/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  return [...staticRoutes, ...tourRoutes]
}

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  image: string
  imageAlt: string
  height?: 'sm' | 'md' | 'lg'
  overlay?: 'light' | 'medium' | 'heavy'
  breadcrumbs?: Breadcrumb[]
  className?: string
  children?: React.ReactNode
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  height = 'md',
  overlay = 'medium',
  breadcrumbs,
  className,
  children,
}: PageHeroProps) {
  const heightMap = {
    sm:  'min-h-[40vh]',
    md:  'min-h-[55vh]',
    lg:  'min-h-[70vh]',
  }

  const overlayMap = {
    light:  'bg-drift-navy/35',
    medium: 'bg-drift-navy/55',
    heavy:  'bg-drift-navy/75',
  }

  return (
    <section
      className={cn(
        'relative flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-24',
        heightMap[height],
        className
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className={cn('absolute inset-0 z-10', overlayMap[overlay])} />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 z-10 bg-gradient-to-t from-white/8 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-16 text-center text-white">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 mb-6">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="w-3 h-3 text-white/40" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="font-montserrat text-xs tracking-widest uppercase text-white/60 hover:text-drift-gold transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="block h-px w-10 bg-drift-gold/70" />
            <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
              {eyebrow}
            </span>
            <span className="block h-px w-10 bg-drift-gold/70" />
          </div>
        )}

        {/* Title */}
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight text-balance">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-5 font-inter text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}

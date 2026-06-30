import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'mb-16',
        isCenter && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <div className={cn('flex items-center gap-4 mb-5', isCenter && 'justify-center')}>
          <span className={cn('block h-px w-10', light ? 'bg-drift-gold/60' : 'bg-drift-gold')} />
          <span
            className={cn(
              'font-montserrat text-xs tracking-widest uppercase',
              light ? 'text-drift-gold' : 'text-drift-gold'
            )}
          >
            {eyebrow}
          </span>
          <span className={cn('block h-px w-10', light ? 'bg-drift-gold/60' : 'bg-drift-gold')} />
        </div>
      )}
      <h2
        className={cn(
          'font-playfair text-4xl md:text-5xl lg:text-6xl text-balance leading-tight',
          light ? 'text-white' : 'text-drift-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-5 text-lg md:text-xl max-w-2xl leading-relaxed',
            isCenter && 'mx-auto',
            light ? 'text-white/75' : 'text-drift-navy/70'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

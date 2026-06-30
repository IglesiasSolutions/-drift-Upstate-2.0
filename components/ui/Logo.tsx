import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'nav' | 'footer' | 'loading'
  className?: string
}

// Real logo aspect ratio: 2000×1357 (1.474:1)
const sizes = {
  nav:     { width: 80, height: 54 },
  footer:  { width: 110, height: 75 },
  loading: { width: 200, height: 136 },
}

export function Logo({ variant = 'nav', className }: LogoProps) {
  const { width, height } = sizes[variant]

  return (
    <Image
      src="/images/logo.webp"
      alt="Drift Upstate Boat Tours"
      width={width}
      height={height}
      className={cn('object-contain', className)}
      priority={variant === 'nav' || variant === 'loading'}
    />
  )
}

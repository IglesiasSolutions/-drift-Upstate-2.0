import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'nav' | 'footer' | 'loading'
  className?: string
}

const sizes = {
  nav:     { width: 140, height: 52 },
  footer:  { width: 160, height: 60 },
  loading: { width: 200, height: 74 },
}

export function Logo({ variant = 'nav', className }: LogoProps) {
  const { width, height } = sizes[variant]

  return (
    <Image
      src="/images/logo.svg"
      alt="Drift Upstate Boat Tours"
      width={width}
      height={height}
      className={cn('object-contain', className)}
      priority={variant === 'nav' || variant === 'loading'}
    />
  )
}

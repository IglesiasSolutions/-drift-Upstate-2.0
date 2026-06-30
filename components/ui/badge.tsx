import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center font-montserrat font-semibold uppercase tracking-widest text-xs transition-colors',
  {
    variants: {
      variant: {
        gold:    'bg-drift-gold text-drift-navy px-3 py-1.5',
        navy:    'bg-drift-navy text-white px-3 py-1.5',
        outline: 'border border-drift-gold text-drift-gold px-3 py-1.5',
        glass:   'bg-white/10 backdrop-blur-sm text-white border border-white/20 px-3 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'gold',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }

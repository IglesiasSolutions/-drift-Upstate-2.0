'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-montserrat font-semibold tracking-widest uppercase text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drift-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-drift-gold text-drift-navy hover:bg-drift-gold-dark hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0',
        outline:
          'border-2 border-white text-white bg-transparent hover:bg-white hover:text-drift-navy active:scale-95',
        'outline-navy':
          'border-2 border-drift-navy text-drift-navy bg-transparent hover:bg-drift-navy hover:text-white active:scale-95',
        ghost:
          'text-drift-navy hover:text-drift-gold bg-transparent',
        link:
          'text-drift-gold underline-offset-4 hover:underline bg-transparent p-0 h-auto',
      },
      size: {
        sm:      'h-9 px-5 text-xs',
        default: 'h-11 px-7',
        lg:      'h-14 px-10 text-sm',
        xl:      'h-16 px-12 text-base',
        icon:    'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

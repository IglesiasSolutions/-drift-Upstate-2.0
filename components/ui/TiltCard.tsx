'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  glare?: boolean
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
}: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glareX, setGlareX] = useState(50)
  const [glareY, setGlareY] = useState(50)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    const newRotateX = (y - 0.5) * -maxTilt * 2
    const newRotateY = (x - 0.5) * maxTilt * 2

    setRotateX(newRotateX)
    setRotateY(newRotateY)
    setGlareX(x * 100)
    setGlareY(y * 100)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlareX(50)
    setGlareY(50)
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <motion.div
      className={className}
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden"
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}

        {glare && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-[inherit]"
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(80% 80% at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 100%)`,
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

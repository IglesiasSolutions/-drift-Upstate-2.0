'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Ripple {
  x: number
  y: number
  radius: number
  opacity: number
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ripplesRef = useRef<Ripple[]>([])
  const animationFrameRef = useRef<number | null>(null)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const ringX = useSpring(cursorX, { damping: 20, stiffness: 300 })
  const ringY = useSpring(cursorY, { damping: 20, stiffness: 300 })

  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  // Hide default cursor on mount
  useEffect(() => {
    document.documentElement.classList.add('cursor-none')
    return () => {
      document.documentElement.classList.remove('cursor-none')
    }
  }, [])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY])

  // Track clicking state
  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Detect hover over interactive elements
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (!target) return
      const interactive = target.closest(
        'a, button, [role="button"], [data-cursor-hover]'
      )
      setIsHovering(!!interactive)
    }

    document.addEventListener('mouseover', handleMouseOver)
    return () => document.removeEventListener('mouseover', handleMouseOver)
  }, [])

  // Add ripples on mousedown
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        opacity: 0.7,
      })
    }

    window.addEventListener('mousedown', handleMouseDown)
    return () => window.removeEventListener('mousedown', handleMouseDown)
  }, [])

  // Canvas resize
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  // Canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ripplesRef.current = ripplesRef.current.filter(
        (ripple) => ripple.opacity > 0
      )

      for (const ripple of ripplesRef.current) {
        ripple.radius += 4
        ripple.opacity -= 0.03

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(204, 155, 32, ${ripple.opacity})`
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      animationFrameRef.current = requestAnimationFrame(loop)
    }

    animationFrameRef.current = requestAnimationFrame(loop)

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Canvas for ripple effects — desktop only */}
      <canvas
        ref={canvasRef}
        className="hidden lg:block fixed inset-0 z-[9998] pointer-events-none"
      />

      {/* Cursor dot and ring — desktop only */}
      <div className="hidden lg:block">
        {/* Cursor dot */}
        <motion.div
          className="fixed z-[9999] pointer-events-none w-2 h-2 rounded-full bg-drift-gold"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />

        {/* Cursor ring */}
        <motion.div
          className="fixed z-[9997] pointer-events-none rounded-full border-2 border-drift-gold/60"
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            opacity: isClicking ? 0.4 : 0.8,
            scale: isClicking ? 0.8 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </>
  )
}

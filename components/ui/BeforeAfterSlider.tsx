'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { GripVertical } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  beforeLabel?: string
  afterLabel?: string
  initialPosition?: number
  className?: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = 'Before',
  afterLabel = 'After',
  initialPosition = 50,
  className = '',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const getPositionFromEvent = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  useEffect(() => {
    if (!isDragging) return
    const onMouseMove = (e: MouseEvent) => getPositionFromEvent(e.clientX)
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      getPositionFromEvent(e.touches[0].clientX)
    }
    const stop = () => setIsDragging(false)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', stop)
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', stop)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', stop)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', stop)
    }
  }, [isDragging, getPositionFromEvent])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none cursor-col-resize ${className}`}
      onClick={(e) => getPositionFromEvent(e.clientX)}
      aria-label="Before and after comparison slider"
      role="slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* After image — full width underneath */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 768px) 100vw, 70vw"
        draggable={false}
      />

      {/* Before image — clipped to left side */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="relative w-full h-full" style={{ width: `${(100 / position) * 100}%` }}>
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 768px) 100vw, 70vw"
            draggable={false}
          />
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center z-10 hover:scale-110 transition-transform"
        style={{ left: `${position}%`, touchAction: 'none' }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <GripVertical className="w-5 h-5 text-drift-navy" strokeWidth={2} />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <span className="font-montserrat text-xs tracking-widest uppercase text-white bg-drift-navy/60 backdrop-blur-sm px-3 py-1.5">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <span className="font-montserrat text-xs tracking-widest uppercase text-white bg-drift-navy/60 backdrop-blur-sm px-3 py-1.5">
          {afterLabel}
        </span>
      </div>
    </div>
  )
}

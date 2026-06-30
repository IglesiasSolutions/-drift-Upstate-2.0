'use client'

import { useState, useEffect } from 'react'
import { Sunset } from 'lucide-react'

// Eagle Bay, NY coordinates
const LAT = 43.85
const LNG = -74.85

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  return Math.floor((date.getTime() - start.getTime()) / 86400000)
}

function calcSunset(date: Date): Date {
  const doy = getDayOfYear(date)

  // Solar declination (degrees)
  const declination = 23.45 * Math.sin(((360 / 365) * (doy - 81)) * (Math.PI / 180))

  // Hour angle at sunset
  const cosHA = -Math.tan(LAT * (Math.PI / 180)) * Math.tan(declination * (Math.PI / 180))
  // Clamp to avoid acos domain error outside Arctic/Antarctic circles
  const clamped = Math.max(-1, Math.min(1, cosHA))
  const hourAngleDeg = (Math.acos(clamped) * 180) / Math.PI

  // Equation of time (minutes)
  const B = ((2 * Math.PI) / 365) * (doy - 81)
  const eot = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B)

  // Solar noon in UTC minutes from midnight
  // For west longitude: lng is negative, so -4*LNG adds time to noon
  const solarNoonUTC = 720 - 4 * LNG - eot

  // Sunset UTC minutes from midnight
  const sunsetUTCMins = solarNoonUTC + hourAngleDeg * 4

  // Build a UTC Date for tonight's sunset
  const result = new Date(date)
  result.setUTCHours(0, 0, 0, 0)
  result.setTime(result.getTime() + sunsetUTCMins * 60 * 1000)
  return result
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/New_York',
  })
}

export function SunsetCountdown() {
  const [countdown, setCountdown] = useState<string>('')
  const [sunsetTime, setSunsetTime] = useState<string>('')

  useEffect(() => {
    function tick() {
      const now = new Date()
      const sunset = calcSunset(now)

      setSunsetTime(formatTime(sunset))

      const diffMs = sunset.getTime() - now.getTime()

      if (diffMs <= 0) {
        // Past sunset — show tomorrow's
        const tomorrow = new Date(now)
        tomorrow.setDate(tomorrow.getDate() + 1)
        const tomorrowSunset = calcSunset(tomorrow)
        setSunsetTime(formatTime(tomorrowSunset))
        setCountdown('After sunset tonight')
        return
      }

      const totalMins = Math.floor(diffMs / 60000)
      const hours = Math.floor(totalMins / 60)
      const mins = totalMins % 60

      if (hours > 0) {
        setCountdown(`${hours}h ${mins}m`)
      } else {
        setCountdown(`${mins} min`)
      }
    }

    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [])

  if (!sunsetTime) return null

  return (
    <div className="inline-flex items-center gap-3 bg-white/8 backdrop-blur-sm border border-white/15 px-5 py-2.5">
      <Sunset className="w-4 h-4 text-drift-gold flex-shrink-0" strokeWidth={1.5} />
      <span className="font-montserrat text-xs tracking-widest uppercase text-white/70">
        Tonight&apos;s Sunset
      </span>
      <span className="font-playfair text-sm text-drift-gold font-bold">{sunsetTime}</span>
      {countdown && countdown !== 'After sunset tonight' && (
        <>
          <span className="text-white/30">·</span>
          <span className="font-inter text-xs text-white/55">in {countdown}</span>
        </>
      )}
    </div>
  )
}

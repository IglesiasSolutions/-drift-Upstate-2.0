'use client'

import { useState, useEffect } from 'react'
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer } from 'lucide-react'

// ──────────────────────────────────────────────────────────────────────────────
// INTEGRATION NOTE: Replace mock data with OpenWeatherMap API
// Endpoint: https://api.openweathermap.org/data/2.5/weather
//   ?lat=43.85&lon=-74.85&units=imperial&appid=YOUR_API_KEY
//
// The API response maps directly to the WeatherData interface below.
// Store your API key in .env.local as NEXT_PUBLIC_OWM_API_KEY
// ──────────────────────────────────────────────────────────────────────────────

interface WeatherData {
  temp: number
  feelsLike: number
  description: string
  windSpeed: number
  humidity: number
  condition: 'sunny' | 'cloudy' | 'rainy' | 'partly-cloudy'
}

function lakeConditionRating(weather: WeatherData): { label: string; color: string } {
  if (weather.condition === 'rainy') return { label: 'Check Before Going', color: 'text-yellow-500' }
  if (weather.windSpeed > 20) return { label: 'Windy — Call Us', color: 'text-yellow-500' }
  if (weather.condition === 'sunny' && weather.temp > 65) return { label: 'Perfect Lake Day', color: 'text-emerald-400' }
  return { label: 'Great Conditions', color: 'text-emerald-400' }
}

function ConditionIcon({ condition }: { condition: WeatherData['condition'] }) {
  const cls = 'w-8 h-8 text-drift-gold'
  if (condition === 'sunny') return <Sun className={cls} strokeWidth={1.5} />
  if (condition === 'rainy') return <CloudRain className={cls} strokeWidth={1.5} />
  return <Cloud className={cls} strokeWidth={1.5} />
}

// Mock data — replace with real API fetch in production
function getMockWeather(): WeatherData {
  const month = new Date().getMonth()
  const isSummer = month >= 4 && month <= 8
  return {
    temp: isSummer ? 78 : 62,
    feelsLike: isSummer ? 76 : 60,
    description: isSummer ? 'Clear skies' : 'Partly cloudy',
    windSpeed: 8,
    humidity: 55,
    condition: isSummer ? 'sunny' : 'partly-cloudy',
  }
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    // Replace this mock with a real fetch:
    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.85&lon=-74.85&units=imperial&appid=${process.env.NEXT_PUBLIC_OWM_API_KEY}`)
    //   .then(r => r.json())
    //   .then(data => setWeather({ temp: Math.round(data.main.temp), ... }))
    setWeather(getMockWeather())
  }, [])

  if (!weather) return null

  const { label, color } = lakeConditionRating(weather)

  return (
    <div className="inline-flex items-center gap-6 bg-white/8 backdrop-blur-sm border border-white/15 px-6 py-3">
      <ConditionIcon condition={weather.condition} />

      <div className="flex items-center gap-5 divide-x divide-white/15">
        {/* Temp */}
        <div className="flex items-center gap-1.5">
          <Thermometer className="w-3.5 h-3.5 text-drift-gold/70" strokeWidth={1.5} />
          <span className="font-playfair text-xl font-bold text-white">{weather.temp}°F</span>
        </div>

        {/* Wind */}
        <div className="flex items-center gap-1.5 pl-5">
          <Wind className="w-3.5 h-3.5 text-drift-gold/70" strokeWidth={1.5} />
          <span className="font-inter text-sm text-white/70">{weather.windSpeed} mph</span>
        </div>

        {/* Humidity */}
        <div className="flex items-center gap-1.5 pl-5">
          <Droplets className="w-3.5 h-3.5 text-drift-gold/70" strokeWidth={1.5} />
          <span className="font-inter text-sm text-white/70">{weather.humidity}%</span>
        </div>

        {/* Lake conditions */}
        <div className="pl-5">
          <p className="font-montserrat text-xs tracking-widest uppercase text-white/40 mb-0.5">Lake Conditions</p>
          <p className={`font-inter text-sm font-semibold ${color}`}>{label}</p>
        </div>
      </div>
    </div>
  )
}

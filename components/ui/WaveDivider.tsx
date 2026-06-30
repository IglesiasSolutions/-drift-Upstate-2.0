interface WaveDividerProps {
  fromColor: string
  toColor: string
  flip?: boolean
  className?: string
}

export default function WaveDivider({
  fromColor,
  toColor,
  flip = false,
  className,
}: WaveDividerProps) {
  return (
    <div
      className={className}
      style={{ backgroundColor: fromColor }}
    >
      <div
        className="relative overflow-hidden h-16 md:h-24"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
      >
        {/* Wave 2 — back layer */}
        <svg
          className="absolute bottom-0 animate-wave-fast opacity-50"
          style={{ width: '200%', height: '100%' }}
          viewBox="0 0 2880 96"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,55 C480,0 960,80 1440,55 C1920,30 2400,70 2880,55 L2880,96 L0,96 Z"
            fill={toColor}
          />
        </svg>

        {/* Wave 1 — front layer */}
        <svg
          className="absolute bottom-0 animate-wave-slow"
          style={{ width: '200%', height: '100%' }}
          viewBox="0 0 2880 96"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C320,80 1120,0 1440,40 C1760,80 2080,40 2880,40 L2880,96 L0,96 Z"
            fill={toColor}
          />
        </svg>
      </div>
    </div>
  )
}

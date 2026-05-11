import { useState, useEffect } from 'react'
import { useInView, fadeInUp } from '../hooks/useInView'

function useWindowWidth() {
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280
  )
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return width
}

// ─── Firework burst ────────────────────────────────────────────────────────

function Firework({ size = 80, color = '#fa6400', spokes = 12 }) {
  const cx = size / 2
  const cy = size / 2
  // Each spoke is a trail of small particles at increasing distances and shrinking radii
  const stops = [
    { r: 0.20, dot: 0.045 },
    { r: 0.28, dot: 0.038 },
    { r: 0.36, dot: 0.030 },
    { r: 0.43, dot: 0.022 },
    { r: 0.49, dot: 0.014 },
  ]
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      {/* Bright core */}
      <circle cx={cx} cy={cy} r={size * 0.055} fill={color} />
      <circle cx={cx} cy={cy} r={size * 0.10} fill={color} fillOpacity="0.18" />
      {/* Particle trails along each spoke */}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i / spokes) * Math.PI * 2 + (i % 2 ? Math.PI / spokes / 2 : 0)
        return (
          <g key={i}>
            {stops.map((s, j) => {
              const x = cx + Math.cos(angle) * size * s.r
              const y = cy + Math.sin(angle) * size * s.r
              return (
                <circle
                  key={j}
                  cx={x}
                  cy={y}
                  r={size * s.dot}
                  fill={color}
                  fillOpacity={1 - j * 0.14}
                />
              )
            })}
          </g>
        )
      })}
    </svg>
  )
}

const fireworks = [
  { size: 110, top: '18%', left: '8%',  spokes: 12, color: '#fa6400', delay: 0,   dur: 4.6 },
  { size: 120, top: '20%', left: '80%', spokes: 12, color: '#fa6400', delay: 1.0, dur: 4.8 },
  { size: 80,  top: '62%', left: '50%', spokes: 10, color: '#fa6400', delay: 2.2, dur: 4.2 },
]

function FireworkField() {
  return (
    <>
      <style>{`
        @keyframes fw-burst {
          0%   { transform: translate(-50%, -50%) scale(0.25); opacity: 0; }
          20%  { opacity: 0.55; }
          55%  { transform: translate(-50%, -50%) scale(1.05); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
        }
        .cta-fw {
          position: absolute;
          transform-origin: center;
          animation: fw-burst var(--dur, 4s) ease-out infinite;
          will-change: transform, opacity;
        }
      `}</style>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {fireworks.map((f, i) => (
          <div
            key={i}
            className="cta-fw"
            style={{ top: f.top, left: f.left, '--dur': `${f.dur}s`, animationDelay: `${f.delay}s` }}
          >
            <Firework size={f.size} color={f.color} spokes={f.spokes} />
          </div>
        ))}
      </div>
    </>
  )
}

export default function CTABanner() {
  const width = useWindowWidth()
  const [ref, inView] = useInView()
  const headingClass = width < 800
    ? 'text-[28px] leading-[32px] tracking-[-0.84px]'
    : width < 1280
      ? 'text-[36px] leading-[40px] tracking-[-1.08px]'
      : 'text-[40px] leading-[44px] tracking-[-1.2px]'

  return (
    <section className="relative overflow-hidden w-full bg-white pt-[140px] pb-[96px] px-[24px]">
      <FireworkField />
      <div ref={ref} className="relative flex flex-col items-center gap-[16px] text-center max-w-[800px] mx-auto" style={fadeInUp(inView)}>
        <h2 className={`font-['Geist',sans-serif] font-medium text-[#171717] ${headingClass}`}>
          Say hello to your next big role!
        </h2>
        <p className="font-['Geist',sans-serif] font-normal text-[#525252] text-[18px] leading-[26px]">
          Join a community of product managers who are mastering their interview success.
        </p>
        <a
          href="https://interviewer.pmaccelerator.io/register"
          target="_blank"
          rel="noreferrer"
          className="mt-[32px] inline-flex items-center justify-center bg-[#171717] rounded-[8px] h-[42px] px-[24px] font-['Geist',sans-serif] font-medium text-[16px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#2a2a2a] transition-colors"
        >
          Get started today
        </a>
      </div>
    </section>
  )
}

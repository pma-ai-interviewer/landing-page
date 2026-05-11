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

function Firework({ size = 80, color = '#fa6400', spokes = 12, dotColor }) {
  const cx = size / 2
  const cy = size / 2
  const innerR = size * 0.16
  const outerR = size * 0.44
  const dotR = size * 0.034
  const tipR = outerR + size * 0.045
  const dCol = dotColor || color
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i / spokes) * Math.PI * 2
        const x1 = cx + Math.cos(angle) * innerR
        const y1 = cy + Math.sin(angle) * innerR
        const x2 = cx + Math.cos(angle) * outerR
        const y2 = cy + Math.sin(angle) * outerR
        const xDot = cx + Math.cos(angle) * tipR
        const yDot = cy + Math.sin(angle) * tipR
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={Math.max(1.4, size * 0.024)} strokeLinecap="round" />
            <circle cx={xDot} cy={yDot} r={dotR} fill={dCol} />
          </g>
        )
      })}
      <circle cx={cx} cy={cy} r={size * 0.038} fill={color} />
    </svg>
  )
}

const fireworks = [
  { size: 110, top: '12%', left: '8%',  spokes: 12, color: '#fa6400', delay: 0,   dur: 4.2 },
  { size: 70,  top: '34%', left: '20%', spokes: 10, color: '#ff9248', delay: 1.6, dur: 3.6 },
  { size: 90,  top: '70%', left: '12%', spokes: 12, color: '#fa6400', delay: 0.8, dur: 4.0 },
  { size: 60,  top: '88%', left: '28%', spokes: 8,  color: '#ff9248', delay: 2.4, dur: 3.4 },
  { size: 120, top: '14%', left: '78%', spokes: 14, color: '#fa6400', delay: 1.2, dur: 4.4 },
  { size: 80,  top: '42%', left: '90%', spokes: 10, color: '#ff9248', delay: 2.8, dur: 3.8 },
  { size: 100, top: '74%', left: '82%', spokes: 12, color: '#fa6400', delay: 0.4, dur: 4.2 },
  { size: 65,  top: '90%', left: '66%', spokes: 8,  color: '#ff9248', delay: 1.9, dur: 3.5 },
  { size: 85,  top: '8%',  left: '50%', spokes: 10, color: '#fa6400', delay: 3.0, dur: 4.0 },
]

function FireworkField() {
  return (
    <>
      <style>{`
        @keyframes fw-burst {
          0%   { transform: translate(-50%, -50%) scale(0.25); opacity: 0; }
          15%  { opacity: 1; }
          55%  { transform: translate(-50%, -50%) scale(1.05); opacity: 0.9; }
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
    <section
      className="relative overflow-hidden w-full py-[140px] px-[24px]"
      style={{ backgroundColor: '#efece6' }}
    >
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

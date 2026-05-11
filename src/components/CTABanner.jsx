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

// 4-point sparkle shape (lucide-style)
function Sparkle({ size = 24, color = '#fa6400', opacity = 1, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      <path d="M12 2 L13.6 9 a3 3 0 0 0 1.9 1.9 L22 12 l-6.5 1.6 a3 3 0 0 0 -1.9 1.9 L12 22 l-1.6 -6.5 a3 3 0 0 0 -1.9 -1.9 L2 12 l6.5 -1.1 a3 3 0 0 0 1.9 -1.9 z" />
    </svg>
  )
}

// Plus / spark shape
function PlusSpark({ size = 12, color = '#fa6400', opacity = 1, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      <path d="M6 1v10M1 6h10" />
    </svg>
  )
}

const sparkles = [
  { type: 's', size: 28, top: '14%',  left: '6%',  opacity: 0.55, color: '#fa6400', spin: 8 },
  { type: 's', size: 18, top: '70%',  left: '10%', opacity: 0.45, color: '#ffffff', spin: 11 },
  { type: 'p', size: 14, top: '32%',  left: '14%', opacity: 0.65, color: '#fa6400' },
  { type: 's', size: 22, top: '20%',  left: '88%', opacity: 0.55, color: '#ffffff', spin: 10 },
  { type: 'p', size: 12, top: '60%',  left: '92%', opacity: 0.6,  color: '#fa6400' },
  { type: 's', size: 16, top: '78%',  left: '82%', opacity: 0.5,  color: '#fa6400', spin: 9 },
  { type: 's', size: 14, top: '8%',   left: '46%', opacity: 0.4,  color: '#ffffff', spin: 12 },
  { type: 'p', size: 10, top: '85%',  left: '50%', opacity: 0.55, color: '#fa6400' },
  { type: 's', size: 12, top: '42%',  left: '3%',  opacity: 0.5,  color: '#ffffff', spin: 14 },
  { type: 's', size: 20, top: '50%',  left: '96%', opacity: 0.4,  color: '#fa6400', spin: 13 },
]

function SparkleField() {
  return (
    <>
      <style>{`
        @keyframes cta-twinkle {
          0%, 100% { transform: scale(0.85) rotate(0deg); opacity: 0.35; }
          50%      { transform: scale(1.1)  rotate(15deg); opacity: 1; }
        }
        .cta-sparkle { animation: cta-twinkle var(--dur, 8s) ease-in-out infinite; transform-origin: center; }
      `}</style>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {sparkles.map((s, i) => (
          <div
            key={i}
            className="cta-sparkle absolute"
            style={{ top: s.top, left: s.left, '--dur': `${s.spin || 9}s`, animationDelay: `${(i * 0.6) % 5}s` }}
          >
            {s.type === 's'
              ? <Sparkle size={s.size} color={s.color} opacity={s.opacity} />
              : <PlusSpark size={s.size} color={s.color} opacity={s.opacity} />}
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
    <section className="relative overflow-hidden w-full bg-gradient-to-br from-[#fde8d4] to-[#fac9a0] py-[140px] px-[24px]">
      <SparkleField />
      <div ref={ref} className="relative flex flex-col items-center gap-[16px] text-center max-w-[800px] mx-auto" style={fadeInUp(inView)}>
        <h2 className={`font-['Geist',sans-serif] font-medium text-[#171717] ${headingClass}`}>
          Say hello to your next big role!
        </h2>
        <p className="font-['Geist',sans-serif] font-normal text-[#737373] text-[16px] leading-[22px]">
          Join a community of product managers who are mastering their interview success.
        </p>
        <a
          href="https://interviewer.pmaccelerator.io/register"
          target="_blank"
          rel="noreferrer"
          className="mt-[8px] inline-flex items-center justify-center bg-[#171717] rounded-[8px] h-[42px] px-[24px] font-['Geist',sans-serif] font-medium text-[16px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#2a2a2a] transition-colors"
        >
          Get started today
        </a>
      </div>
    </section>
  )
}

import { useState, useEffect, useRef } from 'react'
import img1 from '../assets/values/value-1.jpg'
import img2 from '../assets/values/value-2.jpg'
import img3 from '../assets/values/value-3.jpg'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, inView]
}

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

// ─── Illustrations ─────────────────────────────────────────────────────────────

function IllustrationFlexible() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Background */}
      <rect width="400" height="260" fill="#fef3ee" rx="16" />

      {/* Floating dots */}
      <circle cx="48" cy="44" r="5" fill="#fa6400" opacity="0.18" />
      <circle cx="352" cy="210" r="7" fill="#fa6400" opacity="0.14" />
      <circle cx="370" cy="48" r="4" fill="#fa6400" opacity="0.2" />

      {/* Phone body */}
      <rect x="152" y="36" width="96" height="164" rx="14" fill="#fa6400" />
      {/* Phone screen */}
      <rect x="162" y="56" width="76" height="118" rx="6" fill="#fff8f5" />
      {/* Home bar */}
      <rect x="185" y="186" width="30" height="4" rx="2" fill="#fff8f5" opacity="0.5" />
      {/* Camera dot */}
      <circle cx="200" cy="47" r="3" fill="#fff8f5" opacity="0.4" />

      {/* Screen content - interview UI lines */}
      <rect x="172" y="68" width="56" height="6" rx="3" fill="#fa6400" opacity="0.3" />
      <rect x="172" y="82" width="42" height="4" rx="2" fill="#fa6400" opacity="0.2" />

      {/* Mic icon on screen */}
      <rect x="192" y="96" width="16" height="22" rx="8" fill="#fa6400" opacity="0.5" />
      <path d="M186 114 Q186 126 200 126 Q214 126 214 114" stroke="#fa6400" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <line x1="200" y1="126" x2="200" y2="133" stroke="#fa6400" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />

      {/* Play button circle below */}
      <rect x="175" y="140" width="50" height="22" rx="11" fill="#fa6400" opacity="0.15" />
      <text x="200" y="155" textAnchor="middle" fontSize="10" fill="#fa6400" fontFamily="Geist, sans-serif" fontWeight="600" opacity="0.7">Practice</text>

      {/* Clock badge - floating top right */}
      <circle cx="284" cy="80" r="28" fill="#fff8f5" />
      <circle cx="284" cy="80" r="22" fill="white" />
      <circle cx="284" cy="80" r="2" fill="#fa6400" />
      <line x1="284" y1="80" x2="284" y2="65" stroke="#fa6400" strokeWidth="2" strokeLinecap="round" />
      <line x1="284" y1="80" x2="294" y2="80" stroke="#fa6400" strokeWidth="2" strokeLinecap="round" />
      <circle cx="284" cy="80" r="22" stroke="#fa6400" strokeWidth="1.5" fill="none" opacity="0.2" />

      {/* Small floating badge - anytime */}
      <rect x="56" y="148" width="76" height="28" rx="14" fill="white" />
      <circle cx="74" cy="162" r="7" fill="#fef3ee" />
      <text x="86" y="166" fontSize="9" fill="#737373" fontFamily="Geist, sans-serif" fontWeight="500">Anytime</text>
    </svg>
  )
}

function IllustrationInterview() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Background */}
      <rect width="400" height="260" fill="#fef3ee" rx="16" />

      {/* Circular backdrop */}
      <circle cx="200" cy="130" r="106" fill="#fde0cc" />

      {/* Large speech bubble — interviewer (upper-left) */}
      <rect x="82" y="54" width="168" height="112" rx="20" fill="#d4784a" />
      {/* Tail pointing bottom-left */}
      <path d="M106 166 L88 190 L132 166Z" fill="#d4784a" />
      {/* Text lines */}
      <rect x="106" y="80" width="116" height="8" rx="4" fill="white" opacity="0.55" />
      <rect x="106" y="98" width="92" height="8" rx="4" fill="white" opacity="0.4" />
      <rect x="106" y="116" width="104" height="8" rx="4" fill="white" opacity="0.3" />
      <rect x="106" y="134" width="68" height="8" rx="4" fill="white" opacity="0.2" />

      {/* Small speech bubble — response (lower-right) */}
      <rect x="210" y="152" width="112" height="66" rx="18" fill="#a04020" />
      {/* Tail pointing upper-left */}
      <path d="M236 152 L218 132 L256 152Z" fill="#a04020" />
      {/* Typing dots */}
      <circle cx="244" cy="185" r="6" fill="white" />
      <circle cx="262" cy="185" r="6" fill="white" opacity="0.65" />
      <circle cx="280" cy="185" r="6" fill="white" opacity="0.35" />
    </svg>
  )
}

function IllustrationGrowth() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Background */}
      <rect width="400" height="260" fill="#fef3ee" rx="16" />

      {/* Floating dots */}
      <circle cx="50" cy="50" r="5" fill="#fa6400" opacity="0.18" />
      <circle cx="360" cy="54" r="6" fill="#fa6400" opacity="0.14" />

      {/* Grid lines */}
      <line x1="80" y1="52" x2="80" y2="196" stroke="#fa6400" strokeWidth="1" opacity="0.12" />
      <line x1="80" y1="196" x2="340" y2="196" stroke="#fa6400" strokeWidth="1.5" opacity="0.2" />
      <line x1="80" y1="156" x2="340" y2="156" stroke="#fa6400" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.15" />
      <line x1="80" y1="116" x2="340" y2="116" stroke="#fa6400" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.15" />
      <line x1="80" y1="76" x2="340" y2="76" stroke="#fa6400" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.15" />

      {/* Bars */}
      <rect x="104" y="168" width="34" height="28" rx="6" fill="#fa6400" opacity="0.2" />
      <rect x="158" y="148" width="34" height="48" rx="6" fill="#fa6400" opacity="0.35" />
      <rect x="212" y="116" width="34" height="80" rx="6" fill="#fa6400" opacity="0.55" />
      <rect x="266" y="80" width="34" height="116" rx="6" fill="#fa6400" />

      {/* Trend line */}
      <polyline
        points="121,165 175,142 229,110 283,74"
        stroke="#fa6400"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Dots on trend line */}
      <circle cx="121" cy="165" r="5" fill="white" stroke="#fa6400" strokeWidth="2" />
      <circle cx="175" cy="142" r="5" fill="white" stroke="#fa6400" strokeWidth="2" />
      <circle cx="229" cy="110" r="5" fill="white" stroke="#fa6400" strokeWidth="2" />
      <circle cx="283" cy="74" r="6" fill="#fa6400" />
      <circle cx="283" cy="74" r="3" fill="white" />

      {/* Score badge */}
      <rect x="256" y="44" width="72" height="28" rx="8" fill="white" />
      <text x="292" y="62" textAnchor="middle" fontSize="11" fill="#fa6400" fontFamily="Geist, sans-serif" fontWeight="700">+94%</text>
    </svg>
  )
}

// ─── Illustration map ──────────────────────────────────────────────────────────

const illustrations = [
  <IllustrationFlexible />,
  <IllustrationInterview />,
  <IllustrationGrowth />,
]

const cards = [
  {
    title: 'Flexible, on-demand practice',
    body: 'Fit your interview prep into real life — at home, between classes, after work.',
    illustration: null,
    photo: img1,
    objectPosition: 'center center',
  },
  {
    title: `Interview tomorrow? We'll get you ready tonight`,
    body: 'No scheduling needed — get fast feedback and boost your confidence when it matters most.',
    illustration: null,
    photo: img2,
    objectPosition: 'center center',
  },
  {
    title: 'Confidence that lasts',
    body: 'Walk into every interview prepared, composed, and confident.',
    illustration: null,
    photo: img3,
    objectPosition: 'center top',
  },
]

// ─── Card ─────────────────────────────────────────────────────────────────────

function ValueCard({ card, aspectClass = 'aspect-[4/5]', titleSize = 'text-[26px]', index = 0 }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`group relative flex-1 ${aspectClass} rounded-[20px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.10)]`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${index * 0.12}s, transform 0.55s ease ${index * 0.12}s`,
      }}
    >
      {card.photo
        ? <img
            src={card.photo}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            style={{ objectPosition: card.objectPosition }}
          />
        : <div className="absolute inset-0">{illustrations[card.illustration]}</div>
      }
      {/* Dark gradient overlay for text legibility */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      {/* Text overlay */}
      <div className="absolute inset-x-0 bottom-0 p-[24px] flex flex-col gap-[8px]">
        <p className={`font-['Geist',sans-serif] font-medium text-white ${titleSize} leading-[1.2] tracking-[-0.4px]`}>
          {card.title}
        </p>
        <p className="font-['Geist',sans-serif] font-normal text-white/85 text-[15px] leading-[1.5]">
          {card.body}
        </p>
      </div>
    </div>
  )
}

// ─── Mobile ────────────────────────────────────────────────────────────────────

function ValuesMobile() {
  return (
    <section className="w-full px-[16px] pt-[80px] pb-[48px]">
      <div className="flex flex-col gap-[32px] items-center w-full">
        <div className="flex flex-col gap-[8px] items-center text-center w-full">
          <p className="font-['Inter',sans-serif] font-semibold text-[#525252] text-[16px] leading-[18px] tracking-[-0.48px] uppercase">Why Practicely</p>
          <h2 className="font-['Geist',sans-serif] font-medium text-[#171717] text-[32px] leading-[36px] tracking-[-0.96px] w-full">Built for your career journey</h2>
        </div>
        <div className="flex flex-col gap-[20px] w-full">
          {cards.map((card, i) => (
            <ValueCard key={i} card={card} aspectClass="aspect-[4/5]" titleSize="text-[24px]" index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Tablet ────────────────────────────────────────────────────────────────────

function ValuesTablet() {
  return (
    <section className="w-full px-[40px] pt-[96px] pb-[56px]">
      <div className="flex flex-col gap-[48px] items-center w-full">
        <div className="flex flex-col gap-[8px] items-center text-center w-full">
          <p className="font-['Inter',sans-serif] font-semibold text-[#525252] text-[16px] leading-[18px] tracking-[-0.48px] uppercase">Why Practicely</p>
          <h2 className="font-['Geist',sans-serif] font-medium text-[#171717] text-[36px] leading-[40px] tracking-[-1.08px] w-full">Built for your career journey</h2>
        </div>
        <div className="flex gap-[20px] items-stretch w-full">
          {cards.map((card, i) => (
            <ValueCard key={i} card={card} aspectClass="aspect-[4/5]" titleSize="text-[22px]" index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Desktop ───────────────────────────────────────────────────────────────────

function ValuesDesktop() {
  return (
    <section className="w-full pt-[128px] pb-[80px]">
      <div className="flex flex-col gap-[56px] items-center max-w-[1200px] mx-auto px-[40px]">
        <div className="flex flex-col gap-[8px] items-center text-center w-full">
          <p className="font-['Inter',sans-serif] font-semibold text-[#525252] text-[16px] leading-[18px] tracking-[-0.48px] uppercase">Why Practicely</p>
          <h2 className="font-['Geist',sans-serif] font-medium text-[#171717] text-[48px] leading-[52px] tracking-[-1.44px] w-full">Built for your career journey</h2>
        </div>
        <div className="flex gap-[24px] items-stretch w-full">
          {cards.map((card, i) => (
            <ValueCard key={i} card={card} aspectClass="aspect-[4/5]" titleSize="text-[28px]" index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Export ────────────────────────────────────────────────────────────────────

export default function ValuesContainer() {
  const width = useWindowWidth()
  if (width < 800) return <ValuesMobile />
  if (width < 1280) return <ValuesTablet />
  return <ValuesDesktop />
}

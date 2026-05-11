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

const testimonials = [
  {
    quote: '"As I transition into product management, I\'ve been practicing interviews almost every day with the Practicely AI Interviewer. It\'s been incredibly effective at helping me refine, structure, and improve my answers."',
    name: 'Rita K.',
    role: 'Product Lead @ Startup',
    gender: 'female',
    avatarBg: '#fde0cc',
    avatarHair: '#1a0a00',
    avatarClothing: '#e05a00',
  },
  {
    quote: '"I found Practicely very intuitive and easy to use. I\'ve been using the product to refine my storytelling and I really liked the feedback I\'ve received from the product."',
    name: 'Uttarika S.',
    role: 'Sr. PM @ Marketing Tech',
    gender: 'female',
    avatarBg: '#d1fae5',
    avatarHair: '#1a0a00',
    avatarClothing: '#047857',
  },
  {
    quote: '"Even as an experienced PM, interviewing for senior roles felt like a different game. Practicely AI Interviewer helped me practice articulating strategy, leadership, and impact in a way that actually matched senior-level expectations."',
    name: 'Keith M.',
    role: 'Product Manager @ Fintech',
    gender: 'male',
    avatarBg: '#dbeafe',
    avatarHair: '#6b3a2a',
    avatarClothing: '#1d4ed8',
  },
  {
    quote: '"Practicely\'s AI Interviewer helped me level up my interview performance for director-level PM roles with realistic practice and feedback that was immediately actionable."',
    name: 'Nayana H.',
    role: 'Former Sr. PM @ Amazon',
    gender: 'female',
    avatarBg: '#ede9fe',
    avatarHair: '#1a0a00',
    avatarClothing: '#6d28d9',
  },
]

const SKIN = '#f0c09a'

function FemaleAvatar({ bg, hair, clothing }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill={bg} />
      {/* Back hair mass (behind head) */}
      <ellipse cx="20" cy="14" rx="9" ry="10.5" fill={hair} />
      {/* Long side strands */}
      <path d="M11.5 14 Q10 22 11 31 Q12.5 31 12.5 22 Q12.5 15 13 14Z" fill={hair} />
      <path d="M28.5 14 Q30 22 29 31 Q27.5 31 27.5 22 Q27.5 15 27 14Z" fill={hair} />
      {/* Clothing */}
      <path d="M7 40 Q8 30 20 28 Q32 30 33 40Z" fill={clothing} />
      {/* Neck */}
      <rect x="17.5" y="21" width="5" height="6" rx="1" fill={SKIN} />
      {/* Face */}
      <circle cx="20" cy="14.5" r="7.5" fill={SKIN} />
      {/* Top hair overlay */}
      <path d="M12.5 13 Q13.5 6 20 5.5 Q26.5 6 27.5 13 Q25 10 20 10 Q15 10 12.5 13Z" fill={hair} />
    </svg>
  )
}

function KeithAvatar() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Green background */}
      <circle cx="20" cy="20" r="20" fill="#60c055" />
      {/* Depth shadow behind figure */}
      <ellipse cx="20" cy="33" rx="14" ry="9" fill="#3a8c35" opacity="0.55" />
      {/* Dark jacket — broad shoulders, V-neck */}
      <path d="M3 40 Q4 27 13 24 L16.5 28.5 L20 34 L23.5 28.5 L27 24 Q36 27 37 40Z" fill="#35294e" />
      {/* Blue shirt visible at V */}
      <path d="M16.5 28.5 L20 34 L23.5 28.5 L22 26 Q20 27 18 26Z" fill="#4a8fd4" />
      {/* Neck */}
      <rect x="17.5" y="21" width="5" height="5.5" rx="1" fill={SKIN} />
      {/* Face */}
      <circle cx="20" cy="14.5" r="7.5" fill={SKIN} />
      {/* Short dark hair with slight side sweep */}
      <path d="M12.5 13 Q13 5.5 20 5 Q27 5.5 27.5 13 Q25 9 20 9 Q15 9 12.5 13Z" fill="#1a1a2e" />
      <path d="M12.5 11 Q11.5 8 13.5 6.5" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function Avatar({ bg, hair, clothing, gender, name }) {
  if (name === 'Keith M.') return <KeithAvatar />
  return gender === 'male'
    ? null
    : <FemaleAvatar bg={bg} hair={hair} clothing={clothing} />
}

function TestimonialCard({ quote, name, role, gender, avatarBg, avatarHair, avatarClothing }) {
  return (
    <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-[24px] flex flex-col gap-[14px] shrink-0 w-[360px]">
      <p className="font-['Geist',sans-serif] font-normal text-[#525252] text-[15px] leading-[1.6] flex-1">{quote}</p>
      <div className="flex items-center gap-[12px]">
        <Avatar bg={avatarBg} hair={avatarHair} clothing={avatarClothing} gender={gender} name={name} />
        <div>
          <p className="font-['Geist',sans-serif] font-medium text-[#171717] text-[14px] leading-[1.4]">{name}</p>
          <p className="font-['Geist',sans-serif] font-normal text-[#737373] text-[14px] leading-[1.4]">{role}</p>
        </div>
      </div>
    </div>
  )
}

function MarqueeTrack() {
  const all = [...testimonials, ...testimonials]
  return (
    <div className="w-full overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-track">
        {all.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  )
}

// ─── Section header ────────────────────────────────────────────────────────────

function Header({ labelSize, headingSize, headingLeading, headingTracking }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="flex flex-col gap-[8px] items-center text-center w-full" style={fadeInUp(inView)}>
      <p className={`font-['Inter',sans-serif] font-semibold not-italic text-white/90 uppercase tracking-[-0.48px] leading-[18px] ${labelSize}`}>TESTIMONIALS</p>
      <h3 className={`font-['Geist',sans-serif] font-medium text-white w-full ${headingSize} ${headingLeading} ${headingTracking}`}>Don't just take our word for it</h3>
      <p className="font-['Geist',sans-serif] font-normal text-white/85 text-[16px] leading-[1.6]">Tested and refined with input from hiring managers and ex-FAANG PMs.</p>
    </div>
  )
}

// ─── Star field background ────────────────────────────────────────────────────

function Star({ size = 16, opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" style={{ opacity }} aria-hidden="true">
      <path d="M12 2 L14.5 9 L22 9 L16 13.6 L18.2 21 L12 16.6 L5.8 21 L8 13.6 L2 9 L9.5 9 Z" />
    </svg>
  )
}

const testimonialStars = [
  { size: 22, top: '12%', left: '6%',  opacity: 0.30, dur: 9 },
  { size: 14, top: '36%', left: '12%', opacity: 0.40, dur: 11 },
  { size: 18, top: '70%', left: '5%',  opacity: 0.30, dur: 10 },
  { size: 12, top: '88%', left: '18%', opacity: 0.45, dur: 13 },
  { size: 16, top: '20%', left: '90%', opacity: 0.35, dur: 12 },
  { size: 24, top: '50%', left: '94%', opacity: 0.30, dur: 9 },
  { size: 14, top: '78%', left: '88%', opacity: 0.40, dur: 11 },
  { size: 12, top: '8%',  left: '48%', opacity: 0.30, dur: 14 },
  { size: 18, top: '92%', left: '52%', opacity: 0.30, dur: 10 },
  { size: 14, top: '24%', left: '34%', opacity: 0.30, dur: 12 },
  { size: 12, top: '64%', left: '70%', opacity: 0.35, dur: 11 },
]

function TestimonialStars() {
  return (
    <>
      <style>{`
        @keyframes test-twinkle {
          0%, 100% { transform: scale(0.85) rotate(0deg);  opacity: 0.25; }
          50%      { transform: scale(1.1)  rotate(20deg); opacity: 1; }
        }
        .test-star { animation: test-twinkle var(--dur, 10s) ease-in-out infinite; transform-origin: center; }
      `}</style>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {testimonialStars.map((s, i) => (
          <div
            key={i}
            className="test-star absolute"
            style={{ top: s.top, left: s.left, '--dur': `${s.dur}s`, animationDelay: `${(i * 0.55) % 5}s` }}
          >
            <Star size={s.size} opacity={s.opacity} />
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Export ────────────────────────────────────────────────────────────────────

export default function TestimonialsContainer() {
  const width = useWindowWidth()

  if (width < 800) {
    return (
      <section className="relative flex flex-col gap-[32px] items-center py-[48px] w-full overflow-hidden bg-gradient-to-br from-[#f07030] via-[#d95800] to-[#b03d00]"><TestimonialStars />
        <div className="px-[16px] w-full">
          <Header labelSize="text-[16px]" headingSize="text-[32px]" headingLeading="leading-[36px]" headingTracking="tracking-[-0.96px]" />
        </div>
        <MarqueeTrack />
      </section>
    )
  }

  if (width < 1280) {
    return (
      <section className="relative flex flex-col gap-[48px] items-center py-[56px] w-full overflow-hidden bg-gradient-to-br from-[#f07030] via-[#d95800] to-[#b03d00]"><TestimonialStars />
        <div className="px-[40px] w-full">
          <Header labelSize="text-[16px]" headingSize="text-[36px]" headingLeading="leading-[40px]" headingTracking="tracking-[-1.08px]" />
        </div>
        <MarqueeTrack />
      </section>
    )
  }

  return (
    <section className="relative flex flex-col gap-[48px] items-center py-[80px] w-full overflow-hidden bg-gradient-to-br from-[#f07030] via-[#d95800] to-[#b03d00]"><TestimonialStars />
      <div className="px-[40px] w-full max-w-[900px] mx-auto">
        <Header labelSize="text-[16px]" headingSize="text-[48px]" headingLeading="leading-[52px]" headingTracking="tracking-[-1.44px]" />
      </div>
      <MarqueeTrack />
    </section>
  )
}

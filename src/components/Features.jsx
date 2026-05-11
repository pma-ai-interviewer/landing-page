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

// ─── Placeholder icons ────────────────────────────────────────────────────────

function IconAnywhere() {
  return (
    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="112" height="112" rx="56" fill="#ED833B" fillOpacity="0.15" />
      <rect x="32" y="26" width="48" height="60" rx="6" fill="#ED833B" />
      <rect x="38" y="32" width="36" height="42" rx="3" fill="#fff0e6" />
      <circle cx="56" cy="79" r="3" fill="#fff0e6" opacity="0.7" />
      <rect x="44" y="38" width="24" height="3" rx="1.5" fill="#ED833B" opacity="0.5" />
      <rect x="44" y="45" width="18" height="3" rx="1.5" fill="#ED833B" opacity="0.4" />
      <rect x="44" y="52" width="20" height="3" rx="1.5" fill="#ED833B" opacity="0.35" />
    </svg>
  )
}

function IconFeedback() {
  return (
    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circular background */}
      <circle cx="56" cy="56" r="56" fill="#fde8d4" />
      {/* Large speech bubble */}
      <rect x="18" y="24" width="62" height="46" rx="10" fill="#d4784a" />
      {/* Tail bottom-left */}
      <path d="M28 70 L20 84 L44 70Z" fill="#d4784a" />
      {/* Text lines */}
      <rect x="28" y="36" width="42" height="5" rx="2.5" fill="white" opacity="0.6" />
      <rect x="28" y="47" width="32" height="5" rx="2.5" fill="white" opacity="0.4" />
      <rect x="28" y="58" width="38" height="5" rx="2.5" fill="white" opacity="0.3" />
      {/* Small speech bubble */}
      <rect x="58" y="60" width="38" height="30" rx="8" fill="#a04020" />
      {/* Tail upper-left */}
      <path d="M68 60 L58 50 L80 60Z" fill="#a04020" />
      {/* Typing dots */}
      <circle cx="69" cy="75" r="3" fill="white" />
      <circle cx="77" cy="75" r="3" fill="white" opacity="0.65" />
      <circle cx="85" cy="75" r="3" fill="white" opacity="0.35" />
    </svg>
  )
}

function IconProgress() {
  return (
    <svg width="143" height="112" viewBox="0 0 143 112" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="60" width="20" height="42" rx="4" fill="#E65C00" fillOpacity="0.5" />
      <rect x="38" y="44" width="20" height="58" rx="4" fill="#E65C00" fillOpacity="0.65" />
      <rect x="66" y="28" width="20" height="74" rx="4" fill="#E65C00" fillOpacity="0.8" />
      <rect x="94" y="12" width="20" height="90" rx="4" fill="#E65C00" />
      <rect x="8" y="105" width="127" height="3" rx="1.5" fill="#E65C00" opacity="0.3" />
      <polyline points="20,58 48,42 76,26 104,10" stroke="#c44f00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="20" cy="58" r="4" fill="#fff0e6" stroke="#c44f00" strokeWidth="2" />
      <circle cx="48" cy="42" r="4" fill="#fff0e6" stroke="#c44f00" strokeWidth="2" />
      <circle cx="76" cy="26" r="4" fill="#fff0e6" stroke="#c44f00" strokeWidth="2" />
      <circle cx="104" cy="10" r="4" fill="#c44f00" />
    </svg>
  )
}

// ─── Bento card ───────────────────────────────────────────────────────────────

function BentoCard({ icon, title, description, cardClass, index = 0 }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`shrink-0 ${cardClass}`} style={fadeInUp(inView, index * 0.1)}>
      <div
        className="bg-[#f5f5f5] relative rounded-[16px] flex flex-col items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.07)] transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_6px_16px_rgba(0,0,0,0.10),0_16px_40px_rgba(0,0,0,0.10)] w-full h-full"
      >
        <div className="flex flex-col gap-[16px] items-center justify-center p-[24px] w-full h-full">
          {icon}
          <p className="font-['Geist',sans-serif] font-medium leading-[20px] text-[#171717] text-[20px] text-center tracking-[-0.6px] w-full">
            {title}
          </p>
          <p className="font-['Geist',sans-serif] font-normal leading-[1.45] text-[#737373] text-[16px] text-center w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

const cards = [
  {
    icon: <IconAnywhere />,
    title: 'Interview practice anytime, anywhere',
    description: 'Accessible through web and on-the-go - intuitive design allowing you to practice PM interviews wherever, and whenever you want.',
  },
  {
    icon: <IconFeedback />,
    title: 'Feedback that moves you forward',
    description: 'Personalized feedback and actionable next steps - accelerating your interview skill improvement through every session.',
  },
  {
    icon: <IconProgress />,
    title: 'Track your progress over time',
    description: 'We keep a history of your transcripts and feedback - making it easy to track and understand your progress over time.',
  },
]

// ─── Mobile ────────────────────────────────────────────────────────────────────

function FeaturesMobile() {
  const [headingRef, headingInView] = useInView()
  return (
    <section className="w-full px-[16px] py-[48px]">
      <div className="flex flex-col gap-[48px] items-center w-full">
        <div ref={headingRef} className="flex flex-col gap-[8px] items-center w-full" style={fadeInUp(headingInView)}>
          <p className="font-['Inter',sans-serif] font-semibold not-italic text-[#525252] text-[16px] leading-[18px] text-center tracking-[-0.48px]">WHAT YOU GET</p>
          <h3 className="font-['Geist',sans-serif] font-medium text-[#171717] text-[32px] leading-[36px] text-center tracking-[-0.96px] w-full">Your interview success, on your schedule</h3>
        </div>
        <div className="flex flex-col gap-[24px] items-center w-full">
          {cards.map((card, i) => (
            <BentoCard key={i} {...card} cardClass="w-full max-w-[500px] min-w-[275px] h-[320px]" index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Tablet ────────────────────────────────────────────────────────────────────

function FeaturesTablet() {
  const [headingRef, headingInView] = useInView()
  return (
    <section className="w-full px-[40px] py-[56px]">
      <div className="flex flex-col gap-[48px] items-center w-full">
        <div ref={headingRef} className="flex flex-col gap-[8px] items-center w-full" style={fadeInUp(headingInView)}>
          <p className="font-['Inter',sans-serif] font-semibold not-italic text-[#525252] text-[16px] leading-[18px] text-center tracking-[-0.48px]">WHAT YOU GET</p>
          <h3 className="font-['Geist',sans-serif] font-medium text-[#171717] text-[36px] leading-[40px] text-center tracking-[-1.08px] w-full">Your interview success, on your schedule</h3>
        </div>
        <div className="flex flex-wrap gap-[48px] items-center justify-center w-full">
          {cards.map((card, i) => (
            <BentoCard key={i} {...card} cardClass="w-[368px] h-[324px]" index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Desktop ───────────────────────────────────────────────────────────────────

function FeaturesDesktop() {
  const [headingRef, headingInView] = useInView()
  return (
    <section className="w-full px-[120px] py-[80px]">
      <div className="flex flex-col gap-[48px] items-center max-w-[1500px] mx-auto">
        <div ref={headingRef} className="flex flex-col gap-[8px] items-center" style={fadeInUp(headingInView)}>
          <p className="font-['Inter',sans-serif] font-semibold not-italic text-[#525252] text-[16px] leading-[18px] text-center tracking-[-0.48px]">WHAT YOU GET</p>
          <h3 className="font-['Geist',sans-serif] font-medium text-[#171717] text-[40px] leading-[44px] text-center tracking-[-1.2px] max-w-[909px]">Your interview success, on your schedule</h3>
        </div>
        <div className="flex flex-row gap-[48px] items-start justify-center w-full">
          {cards.map((card, i) => (
            <BentoCard key={i} {...card} cardClass="w-[368px] h-[324px]" index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Export ────────────────────────────────────────────────────────────────────

export default function FeaturesContainer() {
  const width = useWindowWidth()
  if (width < 800) return <FeaturesMobile />
  if (width < 1280) return <FeaturesTablet />
  return <FeaturesDesktop />
}

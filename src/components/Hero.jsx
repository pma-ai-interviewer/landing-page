import { useState, useEffect } from 'react'
import { fadeInUp } from '../hooks/useInView'

const REGISTER_URL = 'https://interviewer.pmaccelerator.io/register'

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

// ─── Mobile ────────────────────────────────────────────────────────────────

function Frame2147236750Mobile() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <p className="font-['Geist',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#737373] text-[18px] text-center w-full">The first AI Interviewer built exclusively for product managers</p>
    </div>
  );
}

function Frame2147236704Mobile({ mounted }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" style={fadeInUp(mounted, 0.1)}>
      <Frame2147236750Mobile />
    </div>
  );
}

function Frame2147236703Mobile({ mounted }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <h1 className="block font-['Geist',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#171717] text-[36px] text-center tracking-[-1.08px] w-full" style={fadeInUp(mounted, 0)}>Turn every product manager interview into an <span className="bg-gradient-to-r from-[#fa6400] to-[#ff9248] bg-clip-text text-transparent">offer</span></h1>
      <Frame2147236704Mobile mounted={mounted} />
    </div>
  );
}

function Frame2147236706Mobile({ mounted }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center py-[24px] relative shrink-0 w-full">
      <Frame2147236703Mobile mounted={mounted} />
      <a
        href={REGISTER_URL}
        className="inline-flex items-center justify-center bg-[#171717] rounded-[8px] h-[42px] px-[24px] font-['Geist',sans-serif] font-medium text-[16px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#2a2a2a] transition-colors"
        style={fadeInUp(mounted, 0.15)}
      >
        Get started
      </a>
    </div>
  );
}

function HeaderMobile({ mounted }) {
  return (
    <header className="max-w-[1600px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] px-[16px] relative w-full">
          <Frame2147236706Mobile mounted={mounted} />
        </div>
      </div>
    </header>
  );
}

function Group11Mobile() {
  return (
    <div className="w-full px-[12px] py-[12px]">
      <div style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
          <source src="https://res.cloudinary.com/delf0movh/video/upload/demo_vqg72u.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function Frame2147236792Mobile({ mounted }) {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <HeaderMobile mounted={mounted} />
      <Group11Mobile />
    </div>
  );
}

// ─── Tablet ────────────────────────────────────────────────────────────────

function Frame2147236750Tablet() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Geist',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#737373] text-[20px] text-center whitespace-nowrap">The first AI Interviewer built exclusively for product managers</p>
    </div>
  );
}

function Frame2147236704Tablet({ mounted }) {
  return (
    <div className="relative shrink-0 w-full" style={fadeInUp(mounted, 0.1)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] relative w-full">
          <Frame2147236750Tablet />
        </div>
      </div>
    </div>
  );
}

function Frame2147236703Tablet({ mounted }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <h1 className="block font-['Geist',sans-serif] font-medium leading-[52px] relative shrink-0 text-[#171717] text-[48px] text-center tracking-[-1.44px] w-full" style={fadeInUp(mounted, 0)}>Turn every product manager interview into an <span className="bg-gradient-to-r from-[#fa6400] to-[#ff9248] bg-clip-text text-transparent">offer</span></h1>
      <Frame2147236704Tablet mounted={mounted} />
    </div>
  );
}

function Frame2147236706Tablet({ mounted }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center py-[36px] relative shrink-0 w-full">
      <Frame2147236703Tablet mounted={mounted} />
      <a
        href={REGISTER_URL}
        className="inline-flex items-center justify-center bg-[#171717] rounded-[8px] h-[42px] px-[24px] font-['Geist',sans-serif] font-medium text-[16px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#2a2a2a] transition-colors"
        style={fadeInUp(mounted, 0.15)}
      >
        Get started
      </a>
    </div>
  );
}

function HeaderTablet({ mounted }) {
  return (
    <header className="content-stretch flex flex-col items-center justify-center max-w-[1600px] relative shrink-0 w-[720px]" data-name="Header">
      <Frame2147236706Tablet mounted={mounted} />
    </header>
  );
}

function Group11Tablet() {
  return (
    <div className="w-full px-[16px] py-[16px]" style={{ maxWidth: '760px', margin: '0 auto' }}>
      <div style={{ aspectRatio: '16/9', borderRadius: 18, overflow: 'hidden', boxShadow: '0 6px 32px rgba(0,0,0,0.10)' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
          <source src="https://res.cloudinary.com/delf0movh/video/upload/demo_vqg72u.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function Frame2147236792Tablet({ mounted }) {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <HeaderTablet mounted={mounted} />
      <Group11Tablet />
    </div>
  );
}

// ─── Desktop ───────────────────────────────────────────────────────────────

function Frame2147236750Desktop() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[1064px]">
      <p className="font-['Geist',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#737373] text-[20px] text-center whitespace-nowrap">The first AI Interviewer built exclusively for product managers</p>
    </div>
  );
}

function Frame2147236704Desktop({ mounted }) {
  return (
    <div className="relative shrink-0 w-full" style={fadeInUp(mounted, 0.1)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[120px] relative w-full">
          <Frame2147236750Desktop />
        </div>
      </div>
    </div>
  );
}

function Frame2147236703Desktop({ mounted }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <h1 className="block font-['Geist',sans-serif] font-medium leading-[68px] relative shrink-0 text-[#171717] text-[64px] text-center tracking-[-1.92px] w-full" style={fadeInUp(mounted, 0)}>Turn every product manager interview into an <span className="bg-gradient-to-r from-[#fa6400] to-[#ff9248] bg-clip-text text-transparent">offer</span></h1>
      <Frame2147236704Desktop mounted={mounted} />
    </div>
  );
}

function Frame2147236706Desktop({ mounted }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center py-[64px] relative shrink-0 w-full">
      <Frame2147236703Desktop mounted={mounted} />
      <a
        href={REGISTER_URL}
        className="inline-flex items-center justify-center bg-[#171717] rounded-[8px] h-[42px] px-[24px] font-['Geist',sans-serif] font-medium text-[16px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#2a2a2a] transition-colors"
        style={fadeInUp(mounted, 0.15)}
      >
        Get started
      </a>
    </div>
  );
}

function HeaderDesktop({ mounted }) {
  return (
    <header className="content-stretch flex flex-col items-center justify-center max-w-[1500px] relative shrink-0 w-[1080px]" data-name="Header">
      <Frame2147236706Desktop mounted={mounted} />
    </header>
  );
}

function Group11Desktop() {
  return (
    <div className="w-full px-[24px] py-[24px]" style={{ maxWidth: '1160px', margin: '0 auto' }}>
      <div style={{ aspectRatio: '16/9', borderRadius: 22, overflow: 'hidden', boxShadow: '0 10px 48px rgba(0,0,0,0.12)' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
          <source src="https://res.cloudinary.com/delf0movh/video/upload/demo_vqg72u.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function Frame2147236792Desktop({ mounted }) {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <HeaderDesktop mounted={mounted} />
      <Group11Desktop />
    </div>
  );
}

// ─── Sparkles ──────────────────────────────────────────────────────────────

function HeroSparkle({ size = 24, color = '#fa6400', opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ opacity }} aria-hidden="true">
      <path d="M12 2 L13.6 9 a3 3 0 0 0 1.9 1.9 L22 12 l-6.5 1.6 a3 3 0 0 0 -1.9 1.9 L12 22 l-1.6 -6.5 a3 3 0 0 0 -1.9 -1.9 L2 12 l6.5 -1.1 a3 3 0 0 0 1.9 -1.9 z" />
    </svg>
  )
}

function HeroPlus({ size = 12, color = '#fa6400', opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" style={{ opacity }} aria-hidden="true">
      <path d="M6 1v10M1 6h10" />
    </svg>
  )
}

const heroSparkles = [
  { type: 's', size: 22, top: '8%',  left: '6%',  opacity: 0.45, color: '#fa6400', dur: 9 },
  { type: 'p', size: 14, top: '20%', left: '12%', opacity: 0.5,  color: '#fa6400', dur: 11 },
  { type: 's', size: 16, top: '54%', left: '4%',  opacity: 0.4,  color: '#ff9248', dur: 10 },
  { type: 's', size: 14, top: '78%', left: '9%',  opacity: 0.35, color: '#fa6400', dur: 12 },
  { type: 'p', size: 10, top: '88%', left: '18%', opacity: 0.5,  color: '#fa6400', dur: 8 },
  { type: 's', size: 24, top: '12%', left: '90%', opacity: 0.45, color: '#fa6400', dur: 10 },
  { type: 'p', size: 12, top: '34%', left: '94%', opacity: 0.55, color: '#fa6400', dur: 13 },
  { type: 's', size: 18, top: '60%', left: '92%', opacity: 0.4,  color: '#ff9248', dur: 9 },
  { type: 's', size: 14, top: '84%', left: '88%', opacity: 0.35, color: '#fa6400', dur: 11 },
  { type: 'p', size: 10, top: '6%',  left: '50%', opacity: 0.4,  color: '#fa6400', dur: 14 },
]

function HeroSparkles() {
  return (
    <>
      <style>{`
        @keyframes hero-twinkle {
          0%, 100% { transform: scale(0.8) rotate(0deg);  opacity: 0.3; }
          50%      { transform: scale(1.1) rotate(15deg); opacity: 1; }
        }
        .hero-sparkle { animation: hero-twinkle var(--dur, 10s) ease-in-out infinite; transform-origin: center; }
      `}</style>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {heroSparkles.map((s, i) => (
          <div
            key={i}
            className="hero-sparkle absolute"
            style={{ top: s.top, left: s.left, '--dur': `${s.dur}s`, animationDelay: `${(i * 0.7) % 6}s` }}
          >
            {s.type === 's'
              ? <HeroSparkle size={s.size} color={s.color} opacity={s.opacity} />
              : <HeroPlus size={s.size} color={s.color} opacity={s.opacity} />}
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Export ────────────────────────────────────────────────────────────────

export default function HeroContainer() {
  const width = useWindowWidth()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])
  const inner = width < 800
    ? <Frame2147236792Mobile mounted={mounted} />
    : width < 1280
      ? <Frame2147236792Tablet mounted={mounted} />
      : <Frame2147236792Desktop mounted={mounted} />
  return (
    <div className="relative w-full overflow-hidden">
      <HeroSparkles />
      <div className="relative">{inner}</div>
    </div>
  )
}

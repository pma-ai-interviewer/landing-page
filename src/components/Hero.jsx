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
      <p className="font-['Geist',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#737373] text-[16px] text-center w-full">The first AI Interviewer built exclusively for product managers</p>
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
      <h1 className="block font-['Geist',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#171717] text-[36px] text-center tracking-[-1.08px] w-full" style={fadeInUp(mounted, 0)}>Turn every product manager interview into an offer</h1>
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
        className="inline-flex items-center justify-center bg-[#210099] rounded-[8px] h-[42px] px-[24px] font-['Geist',sans-serif] font-medium text-[16px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#1a0080] transition-colors"
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

function BrowserMockup({ children, barHeight = 36, dotSize = 10, urlWidth = '40%', outerPad = 32, outerRadius = 24 }) {
  const innerRadius = outerRadius - 6
  const contentPad = Math.round(outerPad * 0.55)
  return (
    /* Outer gradient frame — this is also the browser window background */
    <div style={{
      background: 'linear-gradient(135deg, #fde8d4 0%, #fac9a0 100%)',
      borderRadius: outerRadius,
      padding: outerPad,
    }}>
      <div style={{ borderRadius: innerRadius, overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.10)', border: '1.5px solid rgba(255,255,255,0.5)' }}>
        {/* Toolbar — glass blurs the gradient behind it */}
        <div style={{
          background: 'rgba(255,255,255,0.38)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.35)',
          height: barHeight,
          display: 'flex',
          alignItems: 'center',
          padding: `0 ${barHeight * 0.44}px`,
          gap: barHeight * 0.33,
        }}>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ width: dotSize, height: dotSize, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: dotSize, height: dotSize, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: dotSize, height: dotSize, borderRadius: '50%', background: '#28c840' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{
              background: 'rgba(255,255,255,0.45)',
              border: '1px solid rgba(255,255,255,0.5)',
              borderRadius: barHeight * 0.22,
              height: barHeight * 0.58,
              width: urlWidth,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
            }}>
              <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
                <rect x="1.5" y="4.5" width="6" height="5" rx="1" stroke="#999" strokeWidth="1"/>
                <path d="M3 4.5V3a1.5 1.5 0 0 1 3 0v1.5" stroke="#999" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              <span style={{ color: '#555', fontSize: barHeight * 0.28, fontFamily: 'Geist, sans-serif' }}>
                app.interviewer.pmaccelerator.io
              </span>
            </div>
          </div>
          <div style={{ width: dotSize * 3 + 12, flexShrink: 0 }} />
        </div>
        {/* Content area — gradient shows through, video sits inset */}
        <div style={{ padding: `${contentPad}px`, background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
          <div style={{ borderRadius: innerRadius - 8, overflow: 'hidden', background: '#ffffff', padding: '8px' }}>
            <div style={{ borderRadius: innerRadius - 14, overflow: 'hidden' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Group11Mobile() {
  return (
    <div className="w-full px-[12px] py-[12px]">
      <BrowserMockup barHeight={30} dotSize={8} urlWidth="52%" outerPad={14} outerRadius={18}>
        <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
          <source src="https://res.cloudinary.com/delf0movh/video/upload/demo_vqg72u.mp4" type="video/mp4" />
        </video>
      </BrowserMockup>
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
      <p className="font-['Geist',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#737373] text-[18px] text-center whitespace-nowrap">The first AI Interviewer built exclusively for product managers</p>
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
      <h1 className="block font-['Geist',sans-serif] font-medium leading-[52px] relative shrink-0 text-[#171717] text-[48px] text-center tracking-[-1.44px] w-full" style={fadeInUp(mounted, 0)}>Turn every product manager interview into an offer</h1>
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
        className="inline-flex items-center justify-center bg-[#210099] rounded-[8px] h-[42px] px-[24px] font-['Geist',sans-serif] font-medium text-[16px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#1a0080] transition-colors"
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
    <div className="w-full px-[16px] py-[16px]">
      <BrowserMockup barHeight={34} dotSize={9} urlWidth="44%" outerPad={24} outerRadius={22}>
        <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
            <source src="https://res.cloudinary.com/delf0movh/video/upload/demo_vqg72u.mp4" type="video/mp4" />
          </video>
        </div>
      </BrowserMockup>
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
      <p className="font-['Geist',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#737373] text-[18px] text-center whitespace-nowrap">The first AI Interviewer built exclusively for product managers</p>
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
      <h1 className="block font-['Geist',sans-serif] font-medium leading-[68px] relative shrink-0 text-[#171717] text-[64px] text-center tracking-[-1.92px] w-full" style={fadeInUp(mounted, 0)}>Turn every product manager interview into an offer</h1>
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
        className="inline-flex items-center justify-center bg-[#210099] rounded-[8px] h-[42px] px-[24px] font-['Geist',sans-serif] font-medium text-[16px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#1a0080] transition-colors"
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
    <div className="w-full px-[24px] py-[24px]" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <BrowserMockup barHeight={40} dotSize={11} urlWidth="40%" outerPad={32} outerRadius={26}>
        <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
            <source src="https://res.cloudinary.com/delf0movh/video/upload/demo_vqg72u.mp4" type="video/mp4" />
          </video>
        </div>
      </BrowserMockup>
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

// ─── Export ────────────────────────────────────────────────────────────────

export default function HeroContainer() {
  const width = useWindowWidth()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])
  if (width < 800) return <Frame2147236792Mobile mounted={mounted} />
  if (width < 1280) return <Frame2147236792Tablet mounted={mounted} />
  return <Frame2147236792Desktop mounted={mounted} />
}

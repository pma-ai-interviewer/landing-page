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

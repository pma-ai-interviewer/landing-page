import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import FooterContainer from '../components/Footer'
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

// ─── Icons ────────────────────────────────────────────────────────────────────

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="3" stroke="#fa6400" strokeWidth="1.75" strokeLinecap="round" />
      <polyline points="2,4 12,13 22,4" stroke="#fa6400" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#fa6400" strokeWidth="1.75" />
      <path d="M12 7v5l3 3" stroke="#fa6400" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#fa6400" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Info card ────────────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#fa6400]">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="#fa6400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InfoCard({ icon, label, value, href, index = 0 }) {
  const [ref, inView] = useInView(0.1)
  const inner = (
    <div className="flex items-center gap-[14px]">
      <div className="shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-[12px] bg-[#fff4ee]">
        {icon}
      </div>
      <div className="flex flex-col gap-[2px] flex-1">
        <p className="font-['Geist',sans-serif] font-medium text-[#a3a3a3] text-[13px] leading-[1.4] uppercase tracking-[0.4px]">{label}</p>
        <p className="font-['Geist',sans-serif] font-medium text-[#171717] text-[16px] leading-[1.5]">{value}</p>
      </div>
      {href && <ArrowIcon />}
    </div>
  )
  return (
    <div ref={ref} style={fadeInUp(inView, index * 0.08)}>
      {href
        ? <a href={href} className="block p-[20px] rounded-[14px] border border-[#e5e5e5] hover:border-[#fa6400] hover:shadow-[0_2px_12px_rgba(250,100,0,0.08)] transition-all duration-200">{inner}</a>
        : <div className="p-[20px] rounded-[14px] border border-[#e5e5e5] bg-[#fafafa]">{inner}</div>
      }
    </div>
  )
}

function InfoDetails({ index = 0 }) {
  const [ref, inView] = useInView(0.1)
  return (
    <div ref={ref} style={fadeInUp(inView, index * 0.08)}>
      <div className="p-[20px] rounded-[14px] bg-gradient-to-br from-[#fff4ee] to-[#ffe8d6] flex flex-col gap-[20px]">
        <div className="flex items-center gap-[14px]">
          <div className="shrink-0 flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-white/60">
            <ClockIcon />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-['Geist',sans-serif] font-medium text-[#8a6650] text-[12px] leading-[1.4] uppercase tracking-[0.4px]">Response time</p>
            <p className="font-['Geist',sans-serif] font-normal text-[#5c3d2a] text-[14px] leading-[1.5]">We typically reply within 1–2 business days</p>
          </div>
        </div>
        <div className="h-px bg-[#fa6400] opacity-10" />
        <div className="flex items-center gap-[14px]">
          <div className="shrink-0 flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-white/60">
            <ChatIcon />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-['Geist',sans-serif] font-medium text-[#8a6650] text-[12px] leading-[1.4] uppercase tracking-[0.4px]">What to include</p>
            <p className="font-['Geist',sans-serif] font-normal text-[#5c3d2a] text-[14px] leading-[1.5]">Your name, question or feedback, and any relevant details</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main content ─────────────────────────────────────────────────────────────

function ContactContent({ headingClass, py, px }) {
  const [headerRef, headerInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  return (
    <main className={`flex-1 w-full ${py} ${px}`}>
      <div className="flex flex-col gap-[56px] items-center max-w-[640px] mx-auto">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col gap-[12px] items-center text-center" style={fadeInUp(headerInView)}>
          <p className="font-['Inter',sans-serif] font-semibold text-[#525252] text-[16px] leading-[18px] tracking-[-0.48px] uppercase">
            Contact
          </p>
          <h1 className={`font-['Geist',sans-serif] font-medium text-[#171717] tracking-[-1.44px] w-full ${headingClass}`}>
            We'd love to hear from you
          </h1>
          <p className="font-['Geist',sans-serif] font-normal text-[#737373] text-[16px] leading-[1.65] max-w-[480px]">
            Have a question, feedback, or need support? Send us a message and we'll get back to you shortly.
          </p>
        </div>

        {/* Info cards */}
        <div className="flex flex-col gap-[12px] w-full">
          <InfoCard
            icon={<MailIcon />}
            label="Email us"
            value="info@pmaccelerator.io"
            href="mailto:info@pmaccelerator.io"
            index={0}
          />
          <InfoDetails index={1} />
        </div>

        {/* CTA */}
        <div ref={ctaRef} style={fadeInUp(ctaInView, 0.1)}>
          <a
            href="mailto:info@pmaccelerator.io"
            className="inline-flex items-center justify-center bg-[#404040] rounded-[8px] h-[42px] px-[28px] font-['Geist',sans-serif] font-medium text-[16px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#262626] transition-colors"
          >
            Send us an email
          </a>
        </div>

      </div>
    </main>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function Contact() {
  const width = useWindowWidth()

  const props = width < 800
    ? { headingClass: 'text-[32px] leading-[36px] tracking-[-0.96px]',  py: 'py-[48px]', px: 'px-[16px]' }
    : width < 1280
    ? { headingClass: 'text-[36px] leading-[40px] tracking-[-1.08px]', py: 'py-[56px]', px: 'px-[40px]' }
    : { headingClass: 'text-[48px] leading-[52px] tracking-[-1.44px]', py: 'py-[80px]', px: 'px-[40px]' }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <ContactContent {...props} />
      <FooterContainer />
    </div>
  )
}

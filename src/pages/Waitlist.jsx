import { useEffect, useState } from 'react'
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

// ─── Check icon ───────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <div className="shrink-0 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#fff0e6]">
      <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
        <path d="M2.5 8.5L6 12L13.5 4.5" stroke="#fa6400" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="fill-none" />
      </svg>
    </div>
  )
}

// ─── Embedded form ────────────────────────────────────────────────────────────

function EmbeddedForm() {
  const [height, setHeight] = useState(900)

  useEffect(() => {
    const handler = (e) => {
      if (typeof e.data === 'object' && e.data.height) {
        setHeight(e.data.height)
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  return (
    <div style={{ overflow: 'hidden', margin: '-20px', padding: '20px' }}>
      <iframe
        src="https://drnancyli.activehosted.com/f/94"
        style={{ width: '100%', border: 'none', height: `${height}px`, display: 'block' }}
        scrolling="no"
        title="Join the waitlist"
      />
    </div>
  )
}

// ─── Value props ──────────────────────────────────────────────────────────────

const perks = [
  'AI-powered PM interview practice, available on demand',
  'Full coverage across behavioral, product sense, and more',
  'Detailed feedback and session transcripts',
  'Track your progress and improvement across every session',
]

// ─── Page layout ──────────────────────────────────────────────────────────────

function WaitlistContent({ headingClass, py, px }) {
  const [headerRef, headerInView] = useInView()
  const [formRef, formInView] = useInView()

  return (
    <main className={`flex-1 w-full ${py} ${px}`}>
      <div className="flex flex-col gap-[48px] items-center max-w-[480px] mx-auto">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col gap-[12px] items-center text-center" style={fadeInUp(headerInView)}>
          <p className="font-['Inter',sans-serif] font-semibold text-[#210099] text-[16px] leading-[18px] tracking-[-0.48px] uppercase">
            Join the waitlist
          </p>
          <h1 className={`font-['Geist',sans-serif] font-medium text-[#171717] w-full ${headingClass}`}>
            Be first in line
          </h1>
          <p className="font-['Geist',sans-serif] font-normal text-[#737373] text-[16px] leading-[1.65] max-w-[400px]">
            Practicely is invite-only for now. Reserve your spot and we'll notify you the moment access opens up.
          </p>
        </div>

        {/* Perks */}
        <div ref={formRef} className="w-full flex flex-col gap-[32px]" style={fadeInUp(formInView, 0.08)}>
          <ul className="flex flex-col gap-[10px]">
            {perks.map((perk, i) => (
              <li key={i} className="flex items-start gap-[10px]">
                <CheckIcon />
                <span className="font-['Geist',sans-serif] font-normal text-[#525252] text-[15px] leading-[1.55]">{perk}</span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="h-px bg-[#e5e5e5]" />

          {/* Embedded ActiveCampaign form */}
          <EmbeddedForm />
        </div>

      </div>
    </main>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function WaitlistPage() {
  const width = useWindowWidth()

  const props = width < 800
    ? { headingClass: 'text-[32px] leading-[36px] tracking-[-0.96px]',  py: 'py-[48px]', px: 'px-[16px]' }
    : width < 1280
    ? { headingClass: 'text-[36px] leading-[40px] tracking-[-1.08px]', py: 'py-[56px]', px: 'px-[40px]' }
    : { headingClass: 'text-[48px] leading-[52px] tracking-[-1.44px]', py: 'py-[80px]', px: 'px-[40px]' }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <WaitlistContent {...props} />
      <FooterContainer />
    </div>
  )
}

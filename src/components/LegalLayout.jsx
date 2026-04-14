import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import FooterContainer from './Footer'

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

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 bg-[#171717] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:opacity-75 transition-opacity"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 11V3M3 7l4-4 4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

function TOCSidebar({ toc, activeId }) {
  return (
    <aside className="hidden xl:block sticky top-[72px] self-start w-[200px] shrink-0">
      <p className="font-['Inter',sans-serif] font-semibold text-[11px] text-[#a3a3a3] uppercase tracking-[0.8px] mb-3">
        Contents
      </p>
      <nav className="flex flex-col">
        {toc.map((item, i) => {
          const id = `section-${i + 1}`
          const isActive = activeId === id
          return (
            <a
              key={i}
              href={`#${id}`}
              className={`font-['Geist',sans-serif] text-[13px] leading-[1.5] py-[5px] pl-3 border-l-2 transition-colors ${
                isActive
                  ? 'border-[#171717] text-[#171717] font-medium'
                  : 'border-[#e5e5e5] text-[#737373] hover:text-[#404040] hover:border-[#a3a3a3]'
              }`}
            >
              {i + 1}. {item}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}

function MobileTOC({ toc }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="xl:hidden mb-8 border border-[#e5e5e5] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 font-['Inter',sans-serif] font-semibold text-[14px] text-[#171717] bg-[#fafafa]"
      >
        On this page
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M4 6l4 4 4-4" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <nav className="flex flex-col px-4 py-3 gap-1 border-t border-[#e5e5e5]">
          {toc.map((item, i) => (
            <a
              key={i}
              href={`#section-${i + 1}`}
              onClick={() => setOpen(false)}
              className="font-['Geist',sans-serif] text-[14px] text-[#737373] hover:text-[#171717] py-1 transition-colors"
            >
              {i + 1}. {item}
            </a>
          ))}
        </nav>
      )}
    </div>
  )
}

export function SectionHeading({ number, title, id, isFirst = false }) {
  return (
    <div
      id={id}
      className={`scroll-mt-[80px] flex items-center gap-3 ${
        isFirst ? 'mb-1' : 'pt-8 mt-6 border-t border-[#e5e5e5] mb-1'
      }`}
    >
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#f5f5f5] font-['Inter',sans-serif] font-semibold text-[12px] text-[#525252] shrink-0">
        {number}
      </span>
      <h2 className="font-['Inter',sans-serif] font-semibold text-[#171717] text-[20px] leading-[1.2] tracking-[-0.4px]">
        {title}
      </h2>
    </div>
  )
}

export function SubHeading({ children }) {
  return (
    <p className="font-['Inter',sans-serif] font-semibold text-[#171717] text-[16px] leading-[1.3] tracking-[-0.32px] mt-5 mb-1">
      {children}
    </p>
  )
}

export default function LegalLayout({ title, subtitle, lastUpdated, toc, children }) {
  const width = useWindowWidth()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (!toc?.length) return
    const ids = toc.map((_, i) => `section-${i + 1}`)
    const handleScroll = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveId(ids[i])
          return
        }
      }
      setActiveId('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  let headingClass
  if (width < 800) {
    headingClass = 'text-[32px] leading-[36px] tracking-[-0.96px]'
  } else if (width < 1280) {
    headingClass = 'text-[36px] leading-[40px] tracking-[-1.08px]'
  } else {
    headingClass = 'text-[48px] leading-[52px] tracking-[-1.44px]'
  }

  const hasToc = toc && toc.length > 0

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: 'Geist, sans-serif' }}>
      <Navbar />
      <main className="flex-1 bg-white w-full">
        <header className="flex flex-col items-center text-center px-6 pt-12 pb-10 border-b border-[#f0f0f0]">
          <h1 className={`font-['Geist',sans-serif] font-medium text-[#171717] max-w-[720px] w-full ${headingClass}`}>
            {title}
          </h1>
          <p className="font-['Inter',sans-serif] font-medium text-[#737373] text-[15px] tracking-[-0.3px] mt-3">
            {subtitle}
          </p>
          {lastUpdated && (
            <span className="inline-flex items-center bg-[#f5f5f5] text-[#737373] font-['Inter',sans-serif] font-medium text-[13px] px-3 py-1 rounded-full mt-4">
              Last updated: {lastUpdated}
            </span>
          )}
        </header>

        <div className="w-full max-w-[1160px] mx-auto px-6 py-12 xl:flex xl:gap-16">
          {hasToc && <TOCSidebar toc={toc} activeId={activeId} />}
          <div className={`flex-1 min-w-0 ${!hasToc ? 'max-w-[680px] mx-auto' : ''}`}>
            {hasToc && <MobileTOC toc={toc} />}
            {children}
          </div>
        </div>
      </main>
      <FooterContainer />
      <BackToTop />
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'
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

const faqs = [
  {
    q: 'How does the AI create questions?',
    a: 'Our system uses advanced machine learning techniques and curated content from industry experts to generate both behavioral and product sense questions that reflect the real challenges faced by product managers.',
  },
  {
    q: 'What types of interviews can I practice?',
    a: "You can practice Behavioral and Product Sense interviews, so you're ready for every stage of the hiring process.",
  },
  {
    q: 'How do I get started?',
    a: 'Sign up, pick your question type, and start practicing — no setup or scheduling needed. Your first 7 days are completely free.',
  },
  {
    q: 'Can I review my feedback later?',
    a: 'Yes. Each session includes detailed feedback and transcripts you can revisit anytime from your dashboard.',
  },
  {
    q: 'How is progress tracked over time?',
    a: 'We keep a full history of your sessions, transcripts, and scores. You can see how your answers improve across sessions and identify the areas that need the most work.',
  },
  {
    q: 'Is my data secure on this platform?',
    a: 'Absolutely. We follow industry-leading security protocols to ensure that your personal information, practice sessions, and feedback remain confidential and secure at all times.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes, you can cancel at any time with no questions asked. Your access continues until the end of your current billing period.',
  },
]

// ─── Chevron ──────────────────────────────────────────────────────────────────

function Chevron({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
        flexShrink: 0,
      }}
    >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Accordion item ───────────────────────────────────────────────────────────

function FAQItem({ item, isOpen, onToggle, index }) {
  const [ref, inView] = useInView(0.1)
  const bodyRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div
      ref={ref}
      className="border-b border-[#e5e5e5]"
      style={fadeInUp(inView, index * 0.06)}
    >
      <button
        className="w-full text-left flex items-center justify-between gap-[16px] py-[22px] focus:outline-none group"
        onClick={onToggle}
      >
        <span className="font-['Geist',sans-serif] font-medium text-[#171717] text-[17px] leading-[1.5] tracking-[-0.04px] group-hover:text-[#fa6400] transition-colors">
          {item.q}
        </span>
        <Chevron open={isOpen} />
      </button>
      <div
        style={{
          maxHeight: `${height}px`,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <div ref={bodyRef} className="pb-[22px]">
          <p className="font-['Geist',sans-serif] font-normal text-[#737373] text-[16px] leading-[1.65]">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── FAQ list ─────────────────────────────────────────────────────────────────

function FAQList() {
  const [open, setOpen] = useState(0)
  return (
    <div className="w-full border-t border-[#e5e5e5]">
      {faqs.map((item, i) => (
        <FAQItem
          key={i}
          item={item}
          index={i}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────

function FAQHeader({ headingClass }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="flex flex-col gap-[8px] items-center text-center w-full" style={fadeInUp(inView)}>
      <p className="font-['Inter',sans-serif] font-semibold text-[#210099] text-[16px] leading-[18px] tracking-[-0.48px] uppercase">FAQ</p>
      <h1 className={`font-['Geist',sans-serif] font-medium text-[#171717] tracking-[-1.44px] w-full ${headingClass}`}>
        Got questions? We've got answers
      </h1>
    </div>
  )
}

// ─── Breakpoints ──────────────────────────────────────────────────────────────

function FAQMobile() {
  return (
    <article className="w-full px-[16px] py-[48px]">
      <div className="flex flex-col gap-[40px] items-center w-full">
        <FAQHeader headingClass="text-[32px] leading-[36px] tracking-[-0.96px]" />
        <FAQList />
      </div>
    </article>
  )
}

function FAQTablet() {
  return (
    <article className="w-full px-[40px] py-[56px]">
      <div className="flex flex-col gap-[48px] items-center w-full">
        <FAQHeader headingClass="text-[36px] leading-[40px] tracking-[-1.08px]" />
        <FAQList />
      </div>
    </article>
  )
}

function FAQDesktop() {
  return (
    <article className="w-full py-[80px]">
      <div className="flex flex-col gap-[56px] items-center max-w-[800px] mx-auto px-[40px]">
        <FAQHeader headingClass="text-[48px] leading-[52px] tracking-[-1.44px]" />
        <FAQList />
      </div>
    </article>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const width = useWindowWidth()
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      {width < 800 ? <FAQMobile /> : width < 1280 ? <FAQTablet /> : <FAQDesktop />}
      <FooterContainer />
    </div>
  )
}

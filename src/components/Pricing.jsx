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

// ─── Icon ──────────────────────────────────────────────────────────────────────

function Check() {
  return (
    <div className="shrink-0 mt-[1px] flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#fff0e6]">
      <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
        <path
          d="M2.5 8.5 L6 12 L13.5 4.5"
          stroke="#fa6400"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const plans = [
  {
    name: 'Free Trial',
    tag: null,
    subtitle: 'Free for 7 days, then $89/mo',
    price: '$0',
    period: '/ week',
    cta: 'Get started',
    ctaVariant: 'ghost',
    description: 'Perfect for trying out personalized AI coaching before you commit.',
    features: [
      '75 mock interview sessions during trial',
      'Access to unlimited practice questions',
      'Comprehensive AI feedback after every session',
      'All question categories & difficulty levels',
    ],
  },
  {
    name: 'Standard',
    tag: 'Most popular',
    subtitle: 'Competitive self-paced practice',
    price: '$89',
    period: '/ month',
    cta: 'Sign up',
    ctaVariant: 'dark',
    description: 'Ideal for candidates who want consistent, data-driven practice at their own pace.',
    features: [
      '300 mock interview sessions per month',
      'Access to unlimited practice questions',
      'Comprehensive AI feedback and improvement tips',
      'All question categories & difficulty levels',
    ],
  },
  {
    name: 'Premium',
    tag: null,
    subtitle: 'Intensive mastery-level preparation',
    price: '$149',
    period: '/ month',
    cta: 'Sign up',
    ctaVariant: 'dark',
    description: 'Best for candidates preparing intensively and aiming for consistent, measurable growth.',
    features: [
      'Unlimited mock interview sessions',
      'Unlimited practice questions',
      'Comprehensive AI feedback and improvement tips',
      'Performance analytics to track your growth',
      'All question categories & difficulty levels',
    ],
  },
]

// ─── Card ─────────────────────────────────────────────────────────────────────

function PricingCard({ plan, extraClass = '', index = 0 }) {
  const [ref, inView] = useInView()
  const featured = !!plan.tag

  const ctaClass = {
    primary: 'bg-[#fa6400] text-white hover:bg-[#e55a00]',
    dark:    'bg-[#171717] text-white hover:bg-[#2a2a2a]',
    ghost:   'bg-[#f4f4f5] text-[#18181b] hover:bg-[#e4e4e7]',
  }[plan.ctaVariant]

  return (
    <li ref={ref} className={`${extraClass}`} style={fadeInUp(inView, index * 0.1)}>
    <div
      className={`bg-white flex flex-col rounded-[14px] p-7 w-full h-full transition-all duration-300 ease-out hover:scale-[1.02] cursor-pointer ${
        featured
          ? 'ring-1 ring-[#e5e5e5] shadow-[0_4px_24px_rgba(0,0,0,0.09)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.13)]'
          : 'ring-1 ring-[#e5e5e5] hover:shadow-[0_6px_24px_rgba(0,0,0,0.09)]'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col gap-[6px]">
        {plan.tag && (
          <span className="self-start inline-flex items-center px-[8px] py-[3px] rounded-full bg-[#fff0e6] text-[#fa6400] font-['Geist',sans-serif] font-semibold text-[11px] tracking-[0.3px] uppercase mb-[2px]">
            {plan.tag}
          </span>
        )}
        <p className="font-['Geist',sans-serif] font-semibold text-[#171717] text-[18px] leading-[1.3] tracking-[-0.09px]">
          {plan.name}
        </p>
        <p className="font-['Geist',sans-serif] font-normal text-[#737373] text-[14px] leading-[1.4] tracking-[-0.07px]">
          {plan.subtitle}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-[5px] mt-6">
        <span className="font-['Geist',sans-serif] font-semibold text-[#171717] text-[28px] leading-[1] tracking-[-0.7px]">
          {plan.price}
        </span>
        <span className="font-['Geist',sans-serif] font-normal text-[#a3a3a3] text-[14px] leading-[1.4]">
          {plan.period}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#f0f0f0] my-6" />

      {/* Features */}
      <ul className="flex flex-col gap-[10px] flex-1">
        {plan.features.map((text, i) => (
          <li key={i} className="flex items-start gap-[8px]">
            <Check />
            <span className="font-['Geist',sans-serif] font-normal text-[#525252] text-[14px] leading-[1.5] tracking-[-0.07px]">
              {text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://app.interviewer.pmaccelerator.io/"
        target="_blank"
        rel="noreferrer"
        className={`mt-7 inline-flex items-center justify-center h-[42px] w-full rounded-[8px] font-['Geist',sans-serif] font-medium text-[15px] tracking-[-0.07px] transition-colors ${ctaClass}`}
      >
        {plan.cta}
      </a>

      {/* Note */}
      <p className="mt-4 font-['Geist',sans-serif] font-normal text-[#a3a3a3] text-[12px] leading-[1.5] text-center">
        {plan.description}
      </p>
    </div>
    </li>
  )
}

// ─── Section heading ──────────────────────────────────────────────────────────

function SectionHeader({ headingClass }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="flex flex-col gap-[8px] items-center w-full" style={fadeInUp(inView)}>
      <p className="font-['Inter',sans-serif] font-semibold text-[#210099] text-[16px] leading-[18px] text-center tracking-[-0.48px] uppercase">
        Pricing
      </p>
      <h2 className={`font-['Geist',sans-serif] font-medium text-[#171717] text-center tracking-[-0.96px] w-full ${headingClass}`}>
        Expert coaching, without the $200/hr price tag
      </h2>
    </div>
  )
}

// ─── Breakpoints ──────────────────────────────────────────────────────────────

function PricingMobile() {
  return (
    <section className="w-full px-[16px] py-[48px]">
      <div className="flex flex-col gap-[32px] items-center w-full">
        <SectionHeader headingClass="text-[32px] leading-[36px]" />
        <ul className="flex flex-col gap-[16px] w-full">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} extraClass="w-full" index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function PricingTablet() {
  return (
    <section className="w-full px-[40px] py-[56px]">
      <div className="flex flex-col gap-[48px] items-center w-full">
        <SectionHeader headingClass="text-[36px] leading-[40px] tracking-[-1.08px]" />
        <ul className="flex flex-wrap gap-[16px] justify-center items-stretch w-full">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} extraClass="w-[320px]" index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function PricingDesktop() {
  return (
    <section className="w-full py-[80px]">
      <div className="flex flex-col gap-[56px] items-center max-w-[1200px] mx-auto px-[40px]">
        <SectionHeader headingClass="text-[48px] leading-[52px] tracking-[-1.44px]" />
        <ul className="flex gap-[16px] items-stretch w-full">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} extraClass="flex-1" index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

// ─── Export ────────────────────────────────────────────────────────────────────

export default function PricingContainer() {
  const width = useWindowWidth()
  if (width < 800) return <PricingMobile />
  if (width < 1280) return <PricingTablet />
  return <PricingDesktop />
}

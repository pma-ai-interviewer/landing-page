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
    name: 'Free',
    tag: null,
    subtitle: 'PMA unlimited free access',
    price: '$0',
    period: '',
    cta: 'Get started',
    ctaVariant: 'ghost',
    description: 'Free unlimited access for verified PMA cohort members.',
    features: [
      'Unlimited mock interview sessions',
      'Access to unlimited practice questions',
      'Comprehensive AI feedback and improvement tips',
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
      'Performance analytics to track your growth over time',
      'All question categories & difficulty levels',
    ],
  },
  {
    name: 'Session Packs',
    tag: null,
    subtitle: 'Pay as you go for extra sessions',
    price: 'From $4',
    period: 'one-time',
    cta: 'Buy sessions',
    ctaVariant: 'dark',
    description: 'Add more mock interviews anytime. Pack credits apply after your monthly included sessions are used.',
    features: [
      '10 sessions — $4',
      '50 sessions — $18',
      '100 sessions — $30',
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
        <div className="flex items-center justify-between gap-[8px]">
          <p className="font-['Geist',sans-serif] font-semibold text-[#171717] text-[20px] leading-[1.3] tracking-[-0.1px]">
            {plan.name}
          </p>
          {plan.tag && (
            <span className="inline-flex items-center px-[8px] py-[3px] rounded-full bg-[#fff0e6] text-[#fa6400] font-['Geist',sans-serif] font-semibold text-[12px] tracking-[0.3px] uppercase shrink-0">
              {plan.tag}
            </span>
          )}
        </div>
        <p className="font-['Geist',sans-serif] font-normal text-[#737373] text-[15px] leading-[1.4] tracking-[-0.07px]">
          {plan.subtitle}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-[5px] mt-6">
        <span className="font-['Geist',sans-serif] font-semibold text-[#171717] text-[28px] leading-[1] tracking-[-0.7px]">
          {plan.price}
        </span>
        <span className="font-['Geist',sans-serif] font-normal text-[#a3a3a3] text-[15px] leading-[1.4]">
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
            <span className="font-['Geist',sans-serif] font-normal text-[#525252] text-[15px] leading-[1.5] tracking-[-0.07px]">
              {text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://interviewer.pmaccelerator.io/register"
        className={`mt-7 inline-flex items-center justify-center h-[42px] w-full rounded-[8px] font-['Geist',sans-serif] font-medium text-[16px] tracking-[-0.07px] transition-colors ${ctaClass}`}
      >
        {plan.cta}
      </a>

      {/* Note */}
      <p className="mt-6 min-h-[36px] font-['Geist',sans-serif] font-normal text-[#a3a3a3] text-[13px] leading-[1.5] text-center">
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
      <p className="font-['Inter',sans-serif] font-semibold text-[#525252] text-[16px] leading-[18px] text-center tracking-[-0.48px] uppercase">
        Pricing
      </p>
      <h2 className={`font-['Geist',sans-serif] font-medium text-[#171717] text-center tracking-[-0.96px] w-full ${headingClass}`}>
        Expert coaching, without the $800 price tag
      </h2>
    </div>
  )
}

// ─── Breakpoints ──────────────────────────────────────────────────────────────

function PricingMobile() {
  return (
    <section className="w-full px-[16px] pt-[80px] pb-[48px]" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      <div className="flex flex-col gap-[32px] items-center w-full">
        <SectionHeader headingClass="text-[32px] leading-[36px]" />
        <ul className="flex flex-col gap-[24px] w-full">
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
    <section className="w-full px-[40px] pt-[96px] pb-[56px]" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      <div className="flex flex-col gap-[48px] items-center w-full">
        <SectionHeader headingClass="text-[36px] leading-[40px] tracking-[-1.08px]" />
        <ul className="flex flex-wrap gap-[28px] justify-center items-stretch w-full">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} extraClass="w-[360px]" index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function PricingDesktop() {
  return (
    <section className="w-full pt-[128px] pb-[80px]" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      <div className="flex flex-col gap-[56px] items-center max-w-[1320px] mx-auto px-[40px]">
        <SectionHeader headingClass="text-[48px] leading-[52px] tracking-[-1.44px]" />
        <ul className="flex gap-[40px] items-stretch w-full">
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

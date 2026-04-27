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

export default function CTABanner() {
  const width = useWindowWidth()
  const [ref, inView] = useInView()
  const headingClass = width < 800
    ? 'text-[28px] leading-[32px] tracking-[-0.84px]'
    : width < 1280
      ? 'text-[36px] leading-[40px] tracking-[-1.08px]'
      : 'text-[40px] leading-[44px] tracking-[-1.2px]'

  return (
    <section className="w-full bg-gradient-to-br from-[#fff8f5] to-[#fde8d4] py-[80px] px-[24px]">
      <div ref={ref} className="flex flex-col items-center gap-[16px] text-center max-w-[800px] mx-auto" style={fadeInUp(inView)}>
        <h2 className={`font-['Geist',sans-serif] font-medium text-[#171717] ${headingClass}`}>
          Say hello to your next big role!
        </h2>
        <p className="font-['Geist',sans-serif] font-medium text-[#737373] text-[16px] leading-[20px]">
          Join a community of product managers who are mastering their interview success.
        </p>
        <a
          href="https://interviewer.pmaccelerator.io/register"
          target="_blank"
          rel="noreferrer"
          className="mt-[8px] inline-flex items-center justify-center bg-[#210099] rounded-[8px] h-[42px] px-[24px] font-['Geist',sans-serif] font-medium text-[16px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#1a0080] transition-colors"
        >
          Get started today
        </a>
      </div>
    </section>
  )
}

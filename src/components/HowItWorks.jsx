
import { useState, useEffect } from 'react'
import { useInView, fadeInUp } from '../hooks/useInView'

// ─── Asset imports ──────────────────────────────────────────────────────────
import imgGetStarted from '../assets/how-it-works/get-started.png'
import imgQuestions from '../assets/how-it-works/questions.png'
import imgInterview from '../assets/how-it-works/interview.png'
import imgFeedback from '../assets/how-it-works/feedback.png'

// ─── Replaces useActiveBreakpoint from figma:react ─────────────────────────
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

// ─── Replaces svgPaths from ./svg-obms5di7z3 ───────────────────────────────
// Lucide paths for the four step icons + browser search icon
const svgPaths = {
  // CircleCheck (circle arc portion) + checkmark handled separately below
  p1f023100: 'M22 11.08V12a10 10 0 1 1-5.93-9.14',
  // MessageCircleQuestion
  p39c7af00: 'M7.9 20A9 9 0 1 0 4 16.1L2 22ZM9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01',
  // AudioLines
  p13434f80: 'M2 10v3M6 6v11M10 3v18M14 8v7M18 5v13M22 10v3',
  // Sparkles
  p32df8c00: 'm12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3ZM5 3v4M19 17v4M3 5h4M17 19h4',
  // Search icon (browser URL bar)
  p3a9e41c0: 'M10.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0-1.5a4 4 0 1 0 2.87 6.827l1.9 1.9a.75.75 0 0 0 1.06-1.06l-1.9-1.9A4 4 0 0 0 10.5 6.5z',
  p2a739700: 'M10.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0-1.5a4 4 0 1 0 2.87 6.827l1.9 1.9a.75.75 0 0 0 1.06-1.06l-1.9-1.9A4 4 0 0 0 10.5 6.5z',
}

// ─── Mobile ─────────────────────────────────────────────────────────────────

function TitleMobile() {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[0] relative shrink-0 text-center w-full" data-name="Title" style={fadeInUp(inView)}>
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#525252] text-[16px] tracking-[-0.48px] uppercase whitespace-nowrap">
        <p className="leading-[18px]">How It Works</p>
      </div>
      <div className="flex flex-col font-['Geist',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#171717] text-[32px] tracking-[-0.96px] w-[min-content]">
        <p className="leading-[36px]">Practice until you're confident</p>
      </div>
    </div>
  )
}

function IconMobile() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p1f023100} stroke="white" strokeLinecap="round" strokeWidth="2" />
        <path d="M9 11L12 14L22 4" stroke="white" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  )
}


function StepCardMobile({ iconSlot, title, description, imageSlot }) {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full shadow-[0_2px_6px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.07)] transition-all duration-300 ease-out hover:-translate-y-[4px] hover:shadow-[0_8px_28px_rgba(0,0,0,0.11)]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <div className="bg-[#fa6400] content-stretch flex items-center p-[8px] relative rounded-[6px] shrink-0">
          {iconSlot}
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <p className="font-['Geist',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#171717] text-[20px] w-full">{title}</p>
          <div className="flex flex-col font-['Geist',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[16px] w-full">
            <p className="leading-[1.45]">{description}</p>
          </div>
        </div>
        {imageSlot}
      </div>
    </div>
  )
}

function HowItWorksContainerMobile() {
  const [row1Ref, row1InView] = useInView()
  const [row2Ref, row2InView] = useInView()
  return (
    <section className="content-stretch flex flex-col items-center justify-center px-[16px] py-[48px] relative w-full">
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
        <TitleMobile />
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
          {/* Row 1 */}
          <div ref={row1Ref} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" style={fadeInUp(row1InView, 0)}>
            <StepCardMobile
              iconSlot={<IconMobile />}
              title="Get Started"
              description="Create an account and enjoy the first 7 days for free."
              imageSlot={
                <div className="bg-[#fafafa] h-[226px] relative rounded-[16px] shrink-0 w-full overflow-hidden">
                  <img alt="Practicely app" className="w-full h-full object-contain pointer-events-none" style={{ transform: 'scale(1.18)', transformOrigin: 'center' }} src={imgGetStarted} />
                </div>
              }
            />
            <StepCardMobile
              iconSlot={
                <svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p39c7af00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              }
              title="Choose Your Questions"
              description="Focus on the areas you want to improve most by picking an interview question you want to practice, or letting your AI Interviewer choose a question for you."
              imageSlot={
                <div className="bg-[#fafafa] h-[226px] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-col items-center justify-center size-full p-[24px]">
                    <div className="h-[163.862px] relative shrink-0 w-full max-w-[264px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgQuestions} />
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          {/* Row 2 */}
          <div ref={row2Ref} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" style={fadeInUp(row2InView, 0.15)}>
            <StepCardMobile
              iconSlot={
                <svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p13434f80} stroke="white" strokeLinecap="round" strokeWidth="2" />
                </svg>
              }
              title="Mock interview with your AI coach"
              description="Engage with the AI Interviewer to sharpen your interview skills - simulates real interview conditions in a low-pressure, high-learning environment."
              imageSlot={
                <div className="bg-[#fafafa] h-[226.618px] relative rounded-[16px] shrink-0 w-full overflow-hidden">
                  <img alt="" className="w-full h-full object-contain pointer-events-none" style={{ transform: 'scale(1.18)', transformOrigin: 'center' }} src={imgInterview} />
                </div>
              }
            />
            <StepCardMobile
              iconSlot={
                <svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24">
                  <clipPath id="sparkles-clip-m"><rect fill="white" height="24" width="24" /></clipPath>
                  <path d={svgPaths.p32df8c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" clipPath="url(#sparkles-clip-m)" />
                </svg>
              }
              title="Get Personalized Feedback"
              description="Understand what you did well, what to improve, and exactly how to level up before your next interview."
              imageSlot={
                <div className="bg-[#fafafa] h-[226px] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-col items-center justify-center size-full p-[24px]">
                    <div className="h-[183.125px] relative shrink-0 w-full max-w-[289px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFeedback} />
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Tablet ──────────────────────────────────────────────────────────────────

function TitleTablet() {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[0] relative shrink-0 text-center w-full" style={fadeInUp(inView)}>
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#525252] text-[16px] tracking-[-0.48px] uppercase whitespace-nowrap">
        <p className="leading-[18px]">How It Works</p>
      </div>
      <div className="flex flex-col font-['Geist',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#171717] text-[36px] tracking-[-1.08px] w-[min-content]">
        <p className="leading-[40px]">Practice until you're confident</p>
      </div>
    </div>
  )
}



function StepCardTablet({ iconSlot, title, description, imageSlot, imageHeight = 350 }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[860px] shadow-[0_2px_6px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.07)] transition-all duration-300 ease-out hover:-translate-y-[4px] hover:shadow-[0_8px_28px_rgba(0,0,0,0.11)]" style={{ height: 570 }}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#fa6400] content-stretch flex items-center p-[8px] relative rounded-[6px] shrink-0">
        {iconSlot}
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" style={{ height: 84 }}>
        <p className="font-['Geist',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#171717] text-[20px] w-full">{title}</p>
        <div className="flex flex-col font-['Geist',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[16px] w-full">
          <p className="leading-[1.45]">{description}</p>
        </div>
      </div>
      {imageSlot}
    </div>
  )
}

function HowItWorksContainerTablet() {
  const [row1Ref, row1InView] = useInView()
  const [row2Ref, row2InView] = useInView()
  return (
    <section className="content-stretch flex flex-col items-center justify-center px-[40px] relative w-full">
      <div className="content-stretch flex flex-col gap-[48px] items-center justify-center py-[48px] relative shrink-0 w-full">
        <TitleTablet />
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full">
          <div ref={row1Ref} className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full" style={fadeInUp(row1InView, 0)}>
            <StepCardTablet
              iconSlot={<svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p1f023100} stroke="white" strokeLinecap="round" strokeWidth="2" /><path d="M9 11L12 14L22 4" stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>}
              title="Get Started"
              description="Create an account and enjoy the first 7 days for free."
              imageSlot={
                <div className="bg-[#fafafa] h-[350px] relative rounded-[16px] shrink-0 w-full overflow-hidden">
                  <img alt="Practicely app" className="w-full h-full object-contain pointer-events-none" style={{ transform: 'scale(1.18)', transformOrigin: 'center' }} src={imgGetStarted} />
                </div>
              }
            />
            <StepCardTablet
              iconSlot={<svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p39c7af00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
              title="Choose Your Questions"
              description="Focus on the areas you want to improve most by picking an interview question you want to practice, or letting your AI Interviewer choose a question for you."
              imageSlot={
                <div className="bg-[#fafafa] h-[350px] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-col items-center justify-center size-full p-[24px]">
                    <div className="h-[220px] relative shrink-0 w-full">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgQuestions} />
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div ref={row2Ref} className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full" style={fadeInUp(row2InView, 0.15)}>
            <StepCardTablet
              iconSlot={<svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p13434f80} stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>}
              title="Mock interview with your AI coach"
              description="Engage with the AI Interviewer to sharpen your interview skills - simulates real interview conditions in a low-pressure, high-learning environment."
              imageSlot={
                <div className="bg-[#fafafa] h-[350px] relative rounded-[16px] shrink-0 w-full overflow-hidden">
                  <img alt="" className="w-full h-full object-contain pointer-events-none" style={{ transform: 'scale(1.18)', transformOrigin: 'center' }} src={imgInterview} />
                </div>
              }
            />
            <StepCardTablet
              iconSlot={<svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24"><clipPath id="sparkles-clip-t"><rect fill="white" height="24" width="24" /></clipPath><path d={svgPaths.p32df8c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" clipPath="url(#sparkles-clip-t)" /></svg>}
              title="Get Personalized Feedback"
              description="Understand what you did well, what to improve, and exactly how to level up before your next interview."
              imageSlot={
                <div className="bg-[#fafafa] h-[350px] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-col items-center justify-center size-full p-[24px]">
                    <div className="h-[220px] relative shrink-0 w-full">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFeedback} />
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Desktop ─────────────────────────────────────────────────────────────────

function TitleDesktop() {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[0] relative shrink-0 text-center w-full" style={fadeInUp(inView)}>
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#525252] text-[16px] tracking-[-0.48px] uppercase whitespace-nowrap">
        <p className="leading-[18px]">How It Works</p>
      </div>
      <div className="flex flex-col font-['Geist',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#171717] text-[40px] tracking-[-1.2px] w-[min-content]">
        <p className="leading-[44px]">Practice until you're confident</p>
      </div>
    </div>
  )
}


function StepCardDesktop({ iconSlot, title, description, imageSlot }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[500px] items-start overflow-hidden p-[24px] relative rounded-[16px] shrink-0 w-[580px] shadow-[0_2px_6px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.07)] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_10px_32px_rgba(0,0,0,0.11)]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#fa6400] content-stretch flex items-center p-[8px] relative rounded-[6px] shrink-0">
        {iconSlot}
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[108px] items-start relative shrink-0 w-full">
        <p className="font-['Geist',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#171717] text-[20px] w-full">{title}</p>
        <div className="flex flex-col font-['Geist',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[16px] w-full">
          <p className="leading-[1.45]">{description}</p>
        </div>
      </div>
      {imageSlot}
    </div>
  )
}

function HowItWorksContainerDesktop() {
  const [row1Ref, row1InView] = useInView()
  const [row2Ref, row2InView] = useInView()
  return (
    <section className="content-stretch flex items-center justify-center relative w-full">
      <div className="content-stretch flex flex-1 flex-col gap-[64px] items-center justify-center py-[80px] relative">
        <TitleDesktop />
        <div className="content-stretch flex flex-col gap-[28px] items-center justify-center relative shrink-0 w-full">
          {/* Row 1 */}
          <div ref={row1Ref} className="content-stretch flex gap-[28px] items-start justify-center relative shrink-0 w-full" style={fadeInUp(row1InView, 0)}>
            <StepCardDesktop
              iconSlot={<svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p1f023100} stroke="white" strokeLinecap="round" strokeWidth="2" /><path d="M9 11L12 14L22 4" stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>}
              title="Get Started"
              description="Create an account and enjoy the first 7 days for free."
              imageSlot={
                <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full overflow-hidden">
                  <img alt="Practicely app" className="w-full h-full object-contain pointer-events-none" style={{ transform: 'scale(1.18)', transformOrigin: 'center' }} src={imgGetStarted} />
                </div>
              }
            />
            <StepCardDesktop
              iconSlot={<svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p39c7af00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
              title="Choose Your Questions"
              description="Focus on the areas you want to improve most by picking an interview question you want to practice, or letting your AI Interviewer choose a question for you."
              imageSlot={
                <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full">
                  <div className="flex flex-col items-center justify-center size-full p-[24px]">
                    <div className="h-[220px] relative shrink-0 w-full">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgQuestions} />
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          {/* Row 2 */}
          <div ref={row2Ref} className="content-stretch flex gap-[28px] items-start justify-center relative shrink-0 w-full" style={fadeInUp(row2InView, 0.15)}>
            <StepCardDesktop
              iconSlot={<svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p13434f80} stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>}
              title="Mock interview with your AI coach"
              description="Engage with the AI Interviewer to sharpen your interview skills - simulates real interview conditions in a low-pressure, high-learning environment."
              imageSlot={
                <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full overflow-hidden">
                  <img alt="" className="w-full h-full object-contain pointer-events-none" style={{ transform: 'scale(1.18)', transformOrigin: 'center' }} src={imgInterview} />
                </div>
              }
            />
            <StepCardDesktop
              iconSlot={<svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24"><clipPath id="sparkles-clip-d"><rect fill="white" height="24" width="24" /></clipPath><path d={svgPaths.p32df8c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" clipPath="url(#sparkles-clip-d)" /></svg>}
              title="Get Personalized Feedback"
              description="Understand what you did well, what to improve, and exactly how to level up before your next interview."
              imageSlot={
                <div className="bg-[#fafafa] content-stretch flex flex-col items-center justify-center p-[24px] relative rounded-[16px] flex-[1_0_0] min-h-0 w-full">
                  <div className="h-full w-full relative">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgFeedback} />
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Root export ─────────────────────────────────────────────────────────────

export default function HowItWorksContainer() {
  const width = useWindowWidth()
  if (width < 800) return <HowItWorksContainerMobile />
  if (width < 1280) return <HowItWorksContainerTablet />
  return <HowItWorksContainerDesktop />
}

import { useState, useEffect } from 'react'
import { Upload, FileText, Target, Wand2, ImageOff, AudioLines } from 'lucide-react'
import { useInView, fadeInUp } from '../hooks/useInView'
import imgStep1 from '../assets/resume-editor/step1-upload.png'
import imgStep2 from '../assets/resume-editor/step2-upload.png'
import imgStep3Main from '../assets/resume-editor/step3-upload1.png'
import imgStep3Hiring from '../assets/resume-editor/step3-upload2.png'
import imgStep4Main from '../assets/resume-editor/step4-upload1.png'
import imgStep4Intro from '../assets/resume-editor/step4-upload2.png'

// ─── NOTE ───────────────────────────────────────────────────────────────────
// All 4 steps now use real product screenshots. Steps 3 & 4 each pair a main
// screenshot with supporting detail shots (match score + hiring manager's
// take + missing keywords; next-steps actions + generated intro).
// ─────────────────────────────────────────────────────────────────────────────

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

// ─── Connectors (same dashed-wave language as HowItWorks) ─────────────────

const DOT_STROKE = '#fa6400'
const DOT_OPACITY = 0.55
const DOT_DASH = '2 7'

function ConnectorV({ height = 36 }) {
  const w = 26
  const amp = 6
  const path = `M ${w / 2} 0 Q ${w / 2 - amp} ${height * 0.25} ${w / 2} ${height * 0.5} T ${w / 2} ${height}`
  return (
    <div aria-hidden="true" className="self-center shrink-0" style={{ width: w, height }}>
      <svg width={w} height={height} viewBox={`0 0 ${w} ${height}`} fill="none">
        <path d={path} stroke={DOT_STROKE} strokeOpacity={DOT_OPACITY} strokeWidth="3" strokeDasharray={DOT_DASH} strokeLinecap="round" />
      </svg>
    </div>
  )
}

function ConnectorH({ width = 48 }) {
  const h = 26
  const amp = 6
  const path = `M 0 ${h / 2} Q ${width * 0.25} ${h / 2 - amp} ${width * 0.5} ${h / 2} T ${width} ${h / 2}`
  return (
    <div aria-hidden="true" className="self-center shrink-0" style={{ width, height: h }}>
      <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`} fill="none">
        <path d={path} stroke={DOT_STROKE} strokeOpacity={DOT_OPACITY} strokeWidth="3" strokeDasharray={DOT_DASH} strokeLinecap="round" />
      </svg>
    </div>
  )
}

// Meandering journey path from upper-right to lower-left across a row gap
// (desktop only) — mirrors the connector used in the AI Interview Coach part.
function ConnectorDiagonal({ height = 46 }) {
  const h = height
  const d = [
    `M 870 0`,
    `C 950 ${h * 0.20}, 850 ${h * 0.36}, 680 ${h * 0.40}`,
    `C 510 ${h * 0.44}, 530 ${h * 0.60}, 360 ${h * 0.64}`,
    `C 190 ${h * 0.68}, 50  ${h * 0.84}, 130 ${h}`,
  ].join(' ')
  return (
    <div aria-hidden="true" className="w-full self-stretch" style={{ height }}>
      <svg width="100%" height={height} viewBox={`0 0 1000 ${height}`} preserveAspectRatio="none" fill="none">
        <path d={d} stroke={DOT_STROKE} strokeOpacity={DOT_OPACITY} strokeWidth="3" strokeDasharray={DOT_DASH} strokeLinecap="round" />
      </svg>
    </div>
  )
}

// ─── Image slots ────────────────────────────────────────────────────────────
// `height` is a plain pixel number (not a Tailwind class) so it can be
// derived per-breakpoint without fighting Tailwind's static class scanning.

function PlaceholderShot({ label, height = 226, fill = false }) {
  return (
    <div
      className={`bg-[#fafafa] relative rounded-[16px] w-full border border-dashed border-[#d4d4d4] flex flex-col items-center justify-center gap-[8px] px-[16px] text-center ${fill ? 'flex-1 min-h-0' : 'shrink-0'}`}
      style={fill ? undefined : { height }}
    >
      <ImageOff className="w-5 h-5 text-[#a3a3a3]" strokeWidth={1.75} />
      <p className="font-['Geist',sans-serif] text-[#a3a3a3] text-[13px] leading-[1.4]">{label}</p>
    </div>
  )
}

function Shot({ src, alt, height, fill = false, row = false, rounded = 16 }) {
  // `row` shots sit side-by-side in a flex row (supplement screenshots) and
  // must share the available width instead of each claiming 100%.
  const sizing = fill ? 'w-full flex-1 min-h-0' : row ? 'flex-1 min-w-0' : 'w-full shrink-0'
  return (
    <div
      className={`relative border border-[#e5e5e5] overflow-hidden bg-[#fafafa] ${sizing}`}
      style={{ ...(fill ? {} : { height }), borderRadius: rounded }}
    >
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover object-top" />
    </div>
  )
}

// Main screenshot + a row of smaller supporting screenshots underneath.
// In `fill` mode the main shot grows to fill the card's remaining height
// (matching HowItWorks cards); otherwise it uses an explicit pixel height.
function StepShot({ step, height, fill = false, subHeight = 100 }) {
  if (!step.shot) return <PlaceholderShot label={step.shotLabel} height={height} fill={fill} />

  if (!step.supplements?.length) {
    return <Shot src={step.shot} alt={step.title} height={height} fill={fill} />
  }

  if (fill) {
    return (
      <div className="flex flex-col gap-[8px] w-full flex-1 min-h-0">
        <Shot src={step.shot} alt={step.title} fill />
        <div className="flex gap-[8px] w-full shrink-0" style={{ height: subHeight }}>
          {step.supplements.map((src, i) => (
            <Shot key={i} src={src} alt={`${step.title} — detail ${i + 1}`} height={subHeight} rounded={12} row />
          ))}
        </div>
      </div>
    )
  }

  const mainH = Math.round(height * 0.74)
  const subH = Math.round(height * 0.46)
  return (
    <div className="flex flex-col gap-[8px] w-full shrink-0">
      <Shot src={step.shot} alt={step.title} height={mainH} />
      <div className="flex gap-[8px] w-full">
        {step.supplements.map((src, i) => (
          <Shot key={i} src={src} alt={`${step.title} — detail ${i + 1}`} height={subH} rounded={12} row />
        ))}
      </div>
    </div>
  )
}

// ─── Step data ──────────────────────────────────────────────────────────────

const steps = [
  {
    icon: Upload,
    title: 'Upload or paste your resume',
    description: 'PDF, DOCX, or plain text, read in seconds.',
    shot: imgStep1,
    shotLabel: 'Screenshot: resume upload / paste screen',
  },
  {
    icon: FileText,
    title: 'Paste the job description',
    description: 'Score your fit against the actual role.',
    shot: imgStep2,
    shotLabel: 'Screenshot: job description input',
  },
  {
    icon: Target,
    title: 'Get your match score & gaps',
    description: "A 0–100 score across 4 dimensions, plus a hiring manager's honest take on your experience match.",
    shot: imgStep3Main,
    supplements: [imgStep3Hiring],
  },
  {
    icon: Wand2,
    title: 'Get a tailored, exportable resume',
    description: 'Weak bullets rewritten, ATS keyword match improved, downloadable as a polished .docx.',
    shot: imgStep4Main,
    supplements: [imgStep4Intro],
  },
]

// ─── Section heading + part title ─────────────────────────────────────────────

// Paired toggle shown beneath the subtitle — signals the two parts of the
// product up front and lets users jump straight to either one.
function PartToggle() {
  const [active, setActive] = useState('resume')
  const go = (id, key) => (e) => {
    e.preventDefault()
    setActive(key)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const base = 'flex items-center gap-[7px] px-[18px] py-[9px] text-[14px] font-medium transition-colors cursor-pointer whitespace-nowrap'
  const on = 'bg-[#fa6400] text-white'
  const off = 'bg-white text-[#c2410c] hover:bg-[#fff3ec]'
  return (
    <div className="flex justify-center w-full">
      <div className="inline-flex items-center rounded-full border border-[#fa6400] overflow-hidden">
        <a href="#resume-coach" onClick={go('resume-coach', 'resume')} className={`${base} ${active === 'resume' ? on : off}`}>
          <FileText className="w-[15px] h-[15px]" strokeWidth={2} /> Resume Coach
        </a>
        <a href="#interview-coach" onClick={go('interview-coach', 'interview')} className={`${base} ${active === 'interview' ? on : off}`}>
          <AudioLines className="w-[15px] h-[15px]" strokeWidth={2} /> Interview Coach
        </a>
      </div>
    </div>
  )
}

// Top-of-section heading (eyebrow + main title + part toggle) — shown once above part 1.
function SectionHeading({ headingClass }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="content-stretch flex flex-col gap-[8px] items-center justify-center text-center w-full" style={fadeInUp(inView)}>
      <p className="font-['Inter',sans-serif] font-semibold text-[#525252] text-[16px] tracking-[-0.48px] uppercase leading-[18px]">How It Works</p>
      <h2 className={`font-['Geist',sans-serif] font-medium text-[#171717] mx-auto ${headingClass}`}>
        Your personal PM job coach
      </h2>
      <div className="mt-[18px]">
        <PartToggle />
      </div>
    </div>
  )
}

// Per-part title — a bold product name with a muted tagline beneath.
function PartTitle({ id, name, tagline, nameClass, taglineClass }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} id={id} className="w-full text-center scroll-mt-[90px]" style={fadeInUp(inView)}>
      <h3 className={`font-['Geist',sans-serif] font-semibold text-[#171717] mx-auto ${nameClass}`}>{name}</h3>
      <p className={`font-['Geist',sans-serif] font-normal text-[#737373] mx-auto mt-[6px] ${taglineClass}`}>{tagline}</p>
    </div>
  )
}

// ─── Step card ──────────────────────────────────────────────────────────────

function StepCard({
  step,
  sizeClass,
  cardHeight = null,
  contentGap = 'gap-[24px]',
  padClass = 'p-[16px]',
  textHeight = null,
  textGap = 'gap-[12px]',
  fill = false,
  shotHeight = 226,
  subHeight = 100,
}) {
  const Icon = step.icon
  return (
    <div
      className={`bg-white relative rounded-[16px] shadow-[0_2px_6px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.07)] transition-all duration-300 ease-out hover:-translate-y-[4px] hover:shadow-[0_8px_28px_rgba(0,0,0,0.11)] ${sizeClass} ${fill ? 'overflow-hidden' : ''}`}
      style={cardHeight ? { height: cardHeight } : undefined}
    >
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className={`content-stretch flex flex-col ${contentGap} items-start ${padClass} relative w-full h-full`}>
        <div className="bg-[#fa6400] content-stretch flex items-center p-[8px] relative rounded-[6px] shrink-0">
          <Icon className="w-[24px] h-[24px] text-white" strokeWidth={2} />
        </div>
        <div
          className={`content-stretch flex flex-col ${textGap} items-start relative shrink-0 w-full`}
          style={textHeight ? { height: textHeight } : undefined}
        >
          <p className="font-['Geist',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#171717] text-[20px] w-full">{step.title}</p>
          <p className="font-['Geist',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#737373] text-[16px] w-full">{step.description}</p>
        </div>
        <StepShot step={step} height={shotHeight} fill={fill} subHeight={subHeight} />
      </div>
    </div>
  )
}

// ─── Mobile ─────────────────────────────────────────────────────────────────

function ResumeEditorMobile() {
  const [row1Ref, row1InView] = useInView()
  const [row2Ref, row2InView] = useInView()
  return (
    <section className="content-stretch flex flex-col items-center justify-center px-[16px] pt-[48px] pb-[24px] relative w-full">
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
        <SectionHeading headingClass="text-[32px] leading-[36px] tracking-[-0.96px]" />
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
          <PartTitle id="resume-coach" name="Resume Coach" tagline="Match your resume to the job description" nameClass="text-[22px] leading-[28px] tracking-[-0.5px]" taglineClass="text-[14px] leading-[20px]" />
          <div ref={row1Ref} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" style={fadeInUp(row1InView, 0)}>
            <StepCard step={steps[0]} sizeClass="w-full" shotHeight={226} />
            <ConnectorV height={28} />
            <StepCard step={steps[1]} sizeClass="w-full" shotHeight={226} />
          </div>
          <ConnectorV height={28} />
          <div ref={row2Ref} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" style={fadeInUp(row2InView, 0.15)}>
            <StepCard step={steps[2]} sizeClass="w-full" shotHeight={226} />
            <ConnectorV height={28} />
            <StepCard step={steps[3]} sizeClass="w-full" shotHeight={226} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Tablet ─────────────────────────────────────────────────────────────────

function ResumeEditorTablet() {
  const [row1Ref, row1InView] = useInView()
  const [row2Ref, row2InView] = useInView()
  return (
    <section className="content-stretch flex flex-col items-center justify-center px-[40px] relative w-full">
      <div className="content-stretch flex flex-col gap-[48px] items-center justify-center pt-[56px] pb-[28px] relative shrink-0 w-full">
        <SectionHeading headingClass="text-[36px] leading-[40px] tracking-[-1.08px]" />
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full">
          <PartTitle id="resume-coach" name="Resume Coach" tagline="Match your resume to the job description" nameClass="text-[24px] leading-[30px] tracking-[-0.72px]" taglineClass="text-[15px] leading-[22px]" />
          <div ref={row1Ref} className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full" style={fadeInUp(row1InView, 0)}>
            <StepCard step={steps[0]} sizeClass="w-[860px]" cardHeight={570} padClass="p-[24px]" textHeight={84} fill subHeight={150} />
            <ConnectorV height={36} />
            <StepCard step={steps[1]} sizeClass="w-[860px]" cardHeight={570} padClass="p-[24px]" textHeight={84} fill subHeight={150} />
          </div>
          <ConnectorV height={36} />
          <div ref={row2Ref} className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full" style={fadeInUp(row2InView, 0.15)}>
            <StepCard step={steps[2]} sizeClass="w-[860px]" cardHeight={570} padClass="p-[24px]" textHeight={84} fill subHeight={150} />
            <ConnectorV height={36} />
            <StepCard step={steps[3]} sizeClass="w-[860px]" cardHeight={570} padClass="p-[24px]" textHeight={84} fill subHeight={150} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Desktop ────────────────────────────────────────────────────────────────

function ResumeEditorDesktop() {
  const [row1Ref, row1InView] = useInView()
  const [row2Ref, row2InView] = useInView()
  return (
    <section className="content-stretch flex items-center justify-center relative w-full">
      <div className="content-stretch flex flex-1 flex-col gap-[48px] items-center justify-center pt-[80px] pb-[40px] relative">
        <SectionHeading headingClass="text-[40px] leading-[44px] tracking-[-1.2px] max-w-[860px]" />
        <PartTitle id="resume-coach" name="Resume Coach" tagline="Match your resume to the job description" nameClass="text-[28px] leading-[34px] tracking-[-0.84px]" taglineClass="text-[16px] leading-[24px]" />
        <div className="content-stretch flex flex-col gap-[28px] items-center justify-center relative shrink-0 w-full">
          <div ref={row1Ref} className="content-stretch flex gap-[28px] items-start justify-center relative shrink-0 w-full" style={fadeInUp(row1InView, 0)}>
            <StepCard step={steps[0]} sizeClass="w-[580px]" cardHeight={500} contentGap="gap-[16px]" padClass="p-[24px]" textHeight={108} textGap="gap-[8px]" fill subHeight={120} />
            <ConnectorH width={48} />
            <StepCard step={steps[1]} sizeClass="w-[580px]" cardHeight={500} contentGap="gap-[16px]" padClass="p-[24px]" textHeight={108} textGap="gap-[8px]" fill subHeight={120} />
          </div>
          <ConnectorDiagonal height={46} />
          <div ref={row2Ref} className="content-stretch flex gap-[28px] items-start justify-center relative shrink-0 w-full" style={fadeInUp(row2InView, 0.15)}>
            <StepCard step={steps[2]} sizeClass="w-[580px]" cardHeight={500} contentGap="gap-[16px]" padClass="p-[24px]" textHeight={108} textGap="gap-[8px]" fill subHeight={120} />
            <ConnectorH width={48} />
            <StepCard step={steps[3]} sizeClass="w-[580px]" cardHeight={500} contentGap="gap-[16px]" padClass="p-[24px]" textHeight={108} textGap="gap-[8px]" fill subHeight={120} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Export ─────────────────────────────────────────────────────────────────

export default function ResumeEditorContainer() {
  const width = useWindowWidth()
  if (width < 800) return <ResumeEditorMobile />
  if (width < 1280) return <ResumeEditorTablet />
  return <ResumeEditorDesktop />
}

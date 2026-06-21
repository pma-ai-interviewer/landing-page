import { useState, useEffect } from 'react'
import { Upload, FileText, Target, Wand2, ImageOff } from 'lucide-react'
import { useInView, fadeInUp } from '../hooks/useInView'
import imgStep1 from '../assets/resume-editor/step1-upload.png'
import imgStep2 from '../assets/resume-editor/step2-upload.png'
import imgStep3Main from '../assets/resume-editor/step3-upload1.png'
import imgStep3Hiring from '../assets/resume-editor/step3-upload2.png'
import imgStep3Keywords from '../assets/resume-editor/step3-upload3.png'
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

// ─── Image slots ────────────────────────────────────────────────────────────
// `height` is a plain pixel number (not a Tailwind class) so it can be
// derived per-breakpoint without fighting Tailwind's static class scanning.

function PlaceholderShot({ label, height = 226 }) {
  return (
    <div
      className="bg-[#fafafa] relative rounded-[16px] shrink-0 w-full border border-dashed border-[#d4d4d4] flex flex-col items-center justify-center gap-[8px] px-[16px] text-center"
      style={{ height }}
    >
      <ImageOff className="w-5 h-5 text-[#a3a3a3]" strokeWidth={1.75} />
      <p className="font-['Geist',sans-serif] text-[#a3a3a3] text-[13px] leading-[1.4]">{label}</p>
    </div>
  )
}

function Shot({ src, alt, height, rounded = 16 }) {
  return (
    <div
      className="relative shrink-0 w-full border border-[#e5e5e5] overflow-hidden bg-[#fafafa]"
      style={{ height, borderRadius: rounded }}
    >
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover object-top" />
    </div>
  )
}

// Main screenshot + a row of smaller supporting screenshots underneath.
function StepShot({ step, height }) {
  if (!step.shot) return <PlaceholderShot label={step.shotLabel} height={height} />

  if (!step.supplements?.length) {
    return <Shot src={step.shot} alt={step.title} height={height} />
  }

  const mainH = Math.round(height * 0.74)
  const subH = Math.round(height * 0.46)
  return (
    <div className="flex flex-col gap-[8px] w-full shrink-0">
      <Shot src={step.shot} alt={step.title} height={mainH} />
      <div className="flex gap-[8px] w-full">
        {step.supplements.map((src, i) => (
          <Shot key={i} src={src} alt={`${step.title} — detail ${i + 1}`} height={subH} rounded={12} />
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
    supplements: [imgStep3Hiring, imgStep3Keywords],
  },
  {
    icon: Wand2,
    title: 'Get a tailored, exportable resume',
    description: 'Weak bullets rewritten, ATS keyword match improved, downloadable as a polished .docx.',
    shot: imgStep4Main,
    supplements: [imgStep4Intro],
  },
]

// ─── Title ──────────────────────────────────────────────────────────────────

function Title({ headingClass }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="w-full text-center" style={fadeInUp(inView)}>
      <h2 className={`font-['Geist',sans-serif] font-medium text-[#171717] tracking-[-0.96px] ${headingClass}`}>
        AI Resume Coach — Match your resume to the job description
      </h2>
    </div>
  )
}

// ─── Step card ──────────────────────────────────────────────────────────────

function StepCard({ step, shotHeight, sizeClass }) {
  const [ref, inView] = useInView()
  const Icon = step.icon
  return (
    <div
      ref={ref}
      className={`bg-white relative rounded-[16px] shadow-[0_2px_6px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.07)] transition-all duration-300 ease-out hover:-translate-y-[4px] hover:shadow-[0_8px_28px_rgba(0,0,0,0.11)] ${sizeClass}`}
      style={fadeInUp(inView)}
    >
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] lg:p-[24px] relative w-full h-full">
        <div className="bg-[#fa6400] content-stretch flex items-center p-[8px] relative rounded-[6px] shrink-0">
          <Icon className="w-[24px] h-[24px] text-white" strokeWidth={2} />
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <p className="font-['Geist',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#171717] text-[20px] w-full">{step.title}</p>
          <p className="font-['Geist',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#737373] text-[16px] w-full">{step.description}</p>
        </div>
        <StepShot step={step} height={shotHeight} />
      </div>
    </div>
  )
}

// ─── Mobile ─────────────────────────────────────────────────────────────────

function ResumeEditorMobile() {
  const [row1Ref, row1InView] = useInView()
  const [row2Ref, row2InView] = useInView()
  return (
    <section className="content-stretch flex flex-col items-center justify-center px-[16px] pt-[8px] pb-[48px] relative w-full">
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
        <Title headingClass="text-[32px] leading-[36px]" />
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
          <div ref={row1Ref} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" style={fadeInUp(row1InView, 0)}>
            <StepCard step={steps[0]} shotHeight={226} sizeClass="w-full" />
            <ConnectorV height={28} />
            <StepCard step={steps[1]} shotHeight={226} sizeClass="w-full" />
          </div>
          <ConnectorV height={28} />
          <div ref={row2Ref} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" style={fadeInUp(row2InView, 0.15)}>
            <StepCard step={steps[2]} shotHeight={226} sizeClass="w-full" />
            <ConnectorV height={28} />
            <StepCard step={steps[3]} shotHeight={226} sizeClass="w-full" />
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
      <div className="content-stretch flex flex-col gap-[48px] items-center justify-center pt-[8px] pb-[56px] relative shrink-0 w-full">
        <Title headingClass="text-[36px] leading-[40px] tracking-[-1.08px]" />
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full">
          <div ref={row1Ref} className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full" style={fadeInUp(row1InView, 0)}>
            <StepCard step={steps[0]} shotHeight={280} sizeClass="w-[860px]" />
            <ConnectorV height={36} />
            <StepCard step={steps[1]} shotHeight={280} sizeClass="w-[860px]" />
          </div>
          <ConnectorV height={36} />
          <div ref={row2Ref} className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full" style={fadeInUp(row2InView, 0.15)}>
            <StepCard step={steps[2]} shotHeight={280} sizeClass="w-[860px]" />
            <ConnectorV height={36} />
            <StepCard step={steps[3]} shotHeight={280} sizeClass="w-[860px]" />
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
      <div className="content-stretch flex flex-1 flex-col gap-[64px] items-center justify-center pt-[8px] pb-[80px] relative">
        <Title headingClass="text-[40px] leading-[44px] tracking-[-1.2px] max-w-[860px]" />
        <div className="content-stretch flex flex-col gap-[28px] items-center justify-center relative shrink-0 w-full">
          <div ref={row1Ref} className="content-stretch flex gap-[28px] items-start justify-center relative shrink-0 w-full" style={fadeInUp(row1InView, 0)}>
            <StepCard step={steps[0]} shotHeight={220} sizeClass="w-[580px]" />
            <ConnectorH width={48} />
            <StepCard step={steps[1]} shotHeight={220} sizeClass="w-[580px]" />
          </div>
          <div ref={row2Ref} className="content-stretch flex gap-[28px] items-start justify-center relative shrink-0 w-full" style={fadeInUp(row2InView, 0.15)}>
            <StepCard step={steps[2]} shotHeight={220} sizeClass="w-[580px]" />
            <ConnectorH width={48} />
            <StepCard step={steps[3]} shotHeight={220} sizeClass="w-[580px]" />
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

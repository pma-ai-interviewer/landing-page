import LegalLayout, { SectionHeading } from '../components/LegalLayout'

const toc = [
  'Overview',
  'How AI Is Used',
  'Nature of AI-Generated Feedback',
  'No Professional Advice',
  'Data Processing',
  'Human Oversight',
  'Limitations of AI',
  'Updates',
]

const B = "mt-3 font-['Geist',sans-serif] font-normal text-[#171717] text-[18px] leading-[1.55] tracking-[-0.09px] flex flex-col gap-3"

export default function AITransparency() {
  return (
    <LegalLayout
      title="Practicely AI Transparency Statement"
      subtitle="Operated by Dr. Nancy Li International"
      lastUpdated="Feb 18, 2026"
      toc={toc}
    >
      <SectionHeading number={1} title="Overview" id="section-1" isFirst />
      <div className={B}>
        <p>Practicely is an AI-powered interview simulation platform designed to help users practice and improve their interview performance.</p>
        <p>This statement explains how artificial intelligence is used within Practicely.</p>
      </div>

      <SectionHeading number={2} title="How AI Is Used" id="section-2" />
      <div className={B}>
        <p>Practicely uses artificial intelligence technologies to:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Convert user-submitted audio recordings into text transcripts</li>
          <li className="ms-[27px]">Analyze interview responses</li>
          <li className="ms-[27px]">Generate automated feedback and performance insights</li>
        </ul>
        <p>AI-generated outputs are produced without human review unless explicitly stated.</p>
      </div>

      <SectionHeading number={3} title="Nature of AI-Generated Feedback" id="section-3" />
      <div className={B}>
        <p>Users should understand:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">AI feedback is automatically generated</li>
          <li className="ms-[27px]">Outputs may contain inaccuracies or subjective interpretations</li>
          <li className="ms-[27px]">The system does not evaluate users in a legally binding or employment context</li>
          <li className="ms-[27px]">AI-generated feedback is informational and educational only</li>
        </ul>
        <p>Practicely does not guarantee interview success or job placement.</p>
      </div>

      <SectionHeading number={4} title="No Professional Advice" id="section-4" />
      <div className={B}>
        <p>Practicely does not provide:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Legal advice</li>
          <li className="ms-[27px]">Career counseling</li>
          <li className="ms-[27px]">Employment placement services</li>
          <li className="ms-[27px]">Professional certification</li>
        </ul>
        <p>Users remain solely responsible for decisions based on AI-generated feedback.</p>
      </div>

      <SectionHeading number={5} title="Data Processing" id="section-5" />
      <div className={B}>
        <p>User-submitted content (including audio and transcripts) is processed using secure third-party AI infrastructure.</p>
        <p>We do not use facial recognition or biometric identification technologies.</p>
        <p>We may use anonymized or aggregated data to improve system performance.</p>
      </div>

      <SectionHeading number={6} title="Human Oversight" id="section-6" />
      <div className={B}>
        <p>At this time:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Feedback is fully AI-generated</li>
          <li className="ms-[27px]">No human reviewer evaluates individual interview sessions</li>
          <li className="ms-[27px]">We do not make automated decisions that produce legal or similarly significant effects</li>
        </ul>
      </div>

      <SectionHeading number={7} title="Limitations of AI" id="section-7" />
      <div className={B}>
        <p>Artificial intelligence systems:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">May reflect limitations in training data</li>
          <li className="ms-[27px]">May produce incomplete or imperfect analysis</li>
          <li className="ms-[27px]">Should not be relied upon as the sole basis for employment decisions</li>
        </ul>
        <p>We encourage users to use Practicely as a supplemental practice tool.</p>
      </div>

      <SectionHeading number={8} title="Updates" id="section-8" />
      <div className={B}>
        <p>We may update this AI Transparency Statement as our systems evolve.</p>
      </div>
    </LegalLayout>
  )
}

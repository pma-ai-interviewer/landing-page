import LegalLayout, { SectionHeading, SubHeading } from '../components/LegalLayout'

const toc = [
  'Acceptance of Terms',
  'Description of Service',
  'Eligibility',
  'Accounts',
  'Subscription, Free Trial & Billing',
  'Acceptable Use',
  'User Content',
  'Artificial Intelligence Disclaimer',
  'Intellectual Property',
  'Third-Party Services',
  'Disclaimer of Warranties',
  'Limitation of Liability',
  'Indemnification',
  'Termination',
  'Arbitration & Class Action Waiver',
  'Governing Law',
  'Modifications',
  'Contact',
]

const B = "mt-3 font-['Geist',sans-serif] font-normal text-[#171717] text-[18px] leading-[1.55] tracking-[-0.09px] flex flex-col gap-3"

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Practicely Terms of Service"
      subtitle="Operated by Dr. Nancy Li International"
      lastUpdated="Feb 18, 2026"
      toc={toc}
    >
      <SectionHeading number={1} title="Acceptance of Terms" id="section-1" isFirst />
      <div className={B}>
        <p>These Terms of Service ("Terms") govern your access to and use of Practicely, an AI-powered interview simulation platform operated by DR. NANCY LI INTERNATIONAL LLC ("Company," "we," "us," or "our").</p>
        <p>By accessing or using Practicely (the "Service"), you agree to be bound by these Terms.</p>
        <p>If you do not agree, you may not use the Service.</p>
        <p>These Terms apply only to Practicely and do not govern other services operated by the Company.</p>
      </div>

      <SectionHeading number={2} title="Description of Service" id="section-2" />
      <div className={B}>
        <p>Practicely provides AI-powered interview simulations and automated feedback designed for educational and interview preparation purposes.</p>
        <p>The Service:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Uses artificial intelligence to generate responses and feedback</li>
          <li className="ms-[27px]">Is fully automated unless otherwise stated</li>
          <li className="ms-[27px]">Does not provide employment placement services</li>
          <li className="ms-[27px]">Does not guarantee job offers or interview success</li>
        </ul>
      </div>

      <SectionHeading number={3} title="Eligibility" id="section-3" />
      <div className={B}>
        <p>You must be at least 18 years old (or the age of majority in your jurisdiction) to use Practicely.</p>
        <p>The Service is not intended for individuals under 16 years old.</p>
      </div>

      <SectionHeading number={4} title="Accounts" id="section-4" />
      <div className={B}>
        <p>To use Practicely, you must create an account using:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Your name</li>
          <li className="ms-[27px]">A valid email address</li>
          <li className="ms-[27px]">A password</li>
        </ul>
        <p>You are responsible for:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Maintaining account confidentiality</li>
          <li className="ms-[27px]">All activity under your account</li>
          <li className="ms-[27px]">Ensuring your information is accurate</li>
        </ul>
        <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>
      </div>

      <SectionHeading number={5} title="Subscription, Free Trial & Billing" id="section-5" />
      <SubHeading>A. Free Trial</SubHeading>
      <div className={B}>
        <p>Practicely may offer a 7-day free trial.</p>
        <p>At the end of the trial period, your subscription will automatically convert to a paid monthly subscription unless canceled before the trial ends.</p>
      </div>
      <SubHeading>B. Subscription Model</SubHeading>
      <div className={B}>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Subscriptions are billed monthly</li>
          <li className="ms-[27px]">Payments are processed via Stripe</li>
          <li className="ms-[27px]">Subscriptions automatically renew unless canceled</li>
        </ul>
        <p>You authorize us to charge your payment method for recurring subscription fees.</p>
      </div>
      <SubHeading>C. Cancellation</SubHeading>
      <div className={B}>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">You may cancel your subscription at any time through your account settings.</li>
          <li className="ms-[27px]">Cancellation prevents future billing but does not retroactively refund prior payments.</li>
        </ul>
      </div>
      <SubHeading>D. Refund Policy</SubHeading>
      <div className={B}>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">All payments are non-refundable unless required by law.</li>
          <li className="ms-[27px]">We may issue refunds at our sole discretion.</li>
        </ul>
      </div>

      <SectionHeading number={6} title="Acceptable Use" id="section-6" />
      <div className={B}>
        <p>You agree not to:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Use the Service for unlawful purposes</li>
          <li className="ms-[27px]">Upload harmful, defamatory, or illegal content</li>
          <li className="ms-[27px]">Attempt to reverse engineer the platform</li>
          <li className="ms-[27px]">Attempt to train competing AI systems using our outputs</li>
          <li className="ms-[27px]">Interfere with platform security</li>
        </ul>
        <p>Violation may result in account termination.</p>
      </div>

      <SectionHeading number={7} title="User Content" id="section-7" />
      <div className={B}>
        <p>You retain ownership of content you submit (including audio recordings and interview responses).</p>
        <p>By using the Service, you grant us a limited, non-exclusive license to:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Process your content</li>
          <li className="ms-[27px]">Convert audio into transcripts</li>
          <li className="ms-[27px]">Generate AI feedback</li>
          <li className="ms-[27px]">Improve service performance (in anonymized form)</li>
        </ul>
      </div>

      <SectionHeading number={8} title="Artificial Intelligence Disclaimer" id="section-8" />
      <div className={B}>
        <p>Practicely uses artificial intelligence technologies to generate interview simulations and feedback.</p>
        <p>You acknowledge and agree:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">AI-generated outputs may contain inaccuracies</li>
          <li className="ms-[27px]">Feedback is automated and may not reflect human judgment</li>
          <li className="ms-[27px]">The Service is informational and educational only</li>
          <li className="ms-[27px]">The Service does not provide legal, career, or employment advice</li>
          <li className="ms-[27px]">We do not guarantee interview success or employment outcomes</li>
        </ul>
        <p>AI feedback should not be relied upon as the sole basis for employment decisions.</p>
      </div>

      <SectionHeading number={9} title="Intellectual Property" id="section-9" />
      <div className={B}>
        <p>All rights, title, and interest in:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">The Practicely platform</li>
          <li className="ms-[27px]">Software</li>
          <li className="ms-[27px]">AI systems</li>
          <li className="ms-[27px]">Branding</li>
          <li className="ms-[27px]">Content</li>
        </ul>
        <p>Are owned by DR. NANCY LI INTERNATIONAL LLC.</p>
        <p>You may not copy, distribute, or create derivative works without written permission.</p>
      </div>

      <SectionHeading number={10} title="Third-Party Services" id="section-10" />
      <div className={B}>
        <p>The Service relies on third-party providers, including:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">AWS (hosting)</li>
          <li className="ms-[27px]">OpenAI (AI processing)</li>
          <li className="ms-[27px]">Stripe (payments)</li>
          <li className="ms-[27px]">Email Marketing Tools</li>
        </ul>
        <p>We are not responsible for the independent actions of third-party providers.</p>
      </div>

      <SectionHeading number={11} title="Disclaimer of Warranties" id="section-11" />
      <div className={B}>
        <p>The Service is provided "AS IS" and "AS AVAILABLE."</p>
        <p>We disclaim all warranties, express or implied, including:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Fitness for a particular purpose</li>
          <li className="ms-[27px]">Accuracy of AI outputs</li>
          <li className="ms-[27px]">Non-infringement</li>
          <li className="ms-[27px]">Uninterrupted service</li>
        </ul>
        <p>We do not guarantee that the Service will be error-free.</p>
      </div>

      <SectionHeading number={12} title="Limitation of Liability" id="section-12" />
      <div className={B}>
        <p>To the fullest extent permitted by law:</p>
        <p>The Company shall not be liable for:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Indirect or consequential damages</li>
          <li className="ms-[27px]">Lost employment opportunities</li>
          <li className="ms-[27px]">Data loss</li>
          <li className="ms-[27px]">Business interruption</li>
        </ul>
        <p>Our total liability shall not exceed the amount paid by you in the twelve (12) months preceding the claim.</p>
      </div>

      <SectionHeading number={13} title="Indemnification" id="section-13" />
      <div className={B}>
        <p>You agree to indemnify and hold harmless the Company from claims arising from:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Your misuse of the Service</li>
          <li className="ms-[27px]">Your violation of these Terms</li>
          <li className="ms-[27px]">Content you submit</li>
        </ul>
      </div>

      <SectionHeading number={14} title="Termination" id="section-14" />
      <div className={B}>
        <p>We may suspend or terminate your access if:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">You violate these Terms</li>
          <li className="ms-[27px]">We suspect misuse</li>
          <li className="ms-[27px]">Required by law</li>
        </ul>
        <p>Upon termination, your right to use the Service ceases immediately.</p>
      </div>

      <SectionHeading number={15} title="Arbitration & Class Action Waiver" id="section-15" />
      <div className={B}>
        <p>Any dispute arising from these Terms shall be resolved through binding arbitration in the State of Florida.</p>
        <p>You waive the right to participate in class action lawsuits.</p>
      </div>

      <SectionHeading number={16} title="Governing Law" id="section-16" />
      <div className={B}>
        <p>These Terms are governed by the laws of the State of Florida and the United States.</p>
      </div>

      <SectionHeading number={17} title="Modifications" id="section-17" />
      <div className={B}>
        <p>We may update these Terms at any time.</p>
        <p>Continued use of the Service constitutes acceptance of changes.</p>
      </div>

      <SectionHeading number={18} title="Contact" id="section-18" />
      <div className={B}>
        <p>DR. NANCY LI INTERNATIONAL LLC</p>
        <p>Email: support@pmaccelerator.io</p>
      </div>
    </LegalLayout>
  )
}

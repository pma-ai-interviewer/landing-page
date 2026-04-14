import LegalLayout, { SectionHeading, SubHeading } from '../components/LegalLayout'

const toc = [
  'Introduction',
  'Information We Collect',
  'How We Use Your Information',
  'Artificial Intelligence Disclosure',
  'Legal Basis for Processing (EU/UK Users GDPR)',
  'Data Sharing',
  'International Data Transfers',
  'Data Retention',
  'Your Privacy Rights',
  'Cookies and Similar Technologies',
  'Security',
  "Children's Privacy",
  'Changes to This Policy',
  'Contact Information',
]

const B = "mt-3 font-['Geist',sans-serif] font-normal text-[#171717] text-[18px] leading-[1.55] tracking-[-0.09px] flex flex-col gap-3"

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Practicely Privacy Policy"
      subtitle="Operated by Dr. Nancy Li International"
      lastUpdated="Mar 05, 2026"
      toc={toc}
    >
      <p className="font-['Geist',sans-serif] font-normal text-[#171717] text-[18px] leading-[1.55] tracking-[-0.09px] mb-8">
        Thank you for visiting Practicely! We value your privacy and want you to understand how we collect, use, and protect your personal data when you interact with our website, sign up for our services as a customer, receive marketing communications, or otherwise engage with us in a non-participant capacity.
      </p>

      <SectionHeading number={1} title="Introduction" id="section-1" isFirst />
      <div className={B}>
        <p>Practicely is an AI-powered interview simulation platform operated by DR. NANCY LI INTERNATIONAL LLC ("Company," "we," "us," or "our").</p>
        <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you access or use Practicely (the "Service").</p>
        <p>This Privacy Policy applies only to Practicely and does not govern other services or websites operated by the Company.</p>
        <p>By accessing Practicely, you consent to the practices described in this Policy.</p>
      </div>

      <SectionHeading number={2} title="Information We Collect" id="section-2" />
      <SubHeading>A. Information You Provide</SubHeading>
      <div className={B}>
        <p>When you create an account or use Practicely, we may collect:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">First and last name</li>
          <li className="ms-[27px]">Email address</li>
          <li className="ms-[27px]">Account login credentials</li>
          <li className="ms-[27px]">Audio recordings submitted during interview simulations</li>
          <li className="ms-[27px]">Text responses and interview transcripts</li>
          <li className="ms-[27px]">AI-generated feedback</li>
          <li className="ms-[27px]">Communications with us</li>
        </ul>
        <p>Payment information is processed securely via Stripe. We do not store full credit card details.</p>
      </div>
      <SubHeading>B. Automatically Collected Information</SubHeading>
      <div className={B}>
        <p>We may automatically collect:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">IP address</li>
          <li className="ms-[27px]">Device type and browser</li>
          <li className="ms-[27px]">Basic technical information necessary to operate the Service</li>
          <li className="ms-[27px]">Cookie identifiers</li>
          <li className="ms-[27px]">Approximate geographic location derived from IP</li>
        </ul>
      </div>
      <SubHeading>C. AI-Processed Information</SubHeading>
      <div className={B}>
        <p>Practicely uses artificial intelligence to:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Convert audio recordings into text transcripts</li>
          <li className="ms-[27px]">Analyze transcripts</li>
          <li className="ms-[27px]">Generate interview feedback</li>
        </ul>
        <p>We do not perform facial recognition or biometric analysis.</p>
        <p>AI-generated outputs are automated and may contain inaccuracies.</p>
      </div>

      <SectionHeading number={3} title="How We Use Your Information" id="section-3" />
      <div className={B}>
        <p>We use personal data to:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Provide AI-powered interview simulations</li>
          <li className="ms-[27px]">Generate personalized feedback</li>
          <li className="ms-[27px]">Manage user accounts</li>
          <li className="ms-[27px]">Process subscriptions and billing</li>
          <li className="ms-[27px]">Improve service performance</li>
          <li className="ms-[27px]">Analyze usage trends</li>
          <li className="ms-[27px]">Maintain platform security</li>
          <li className="ms-[27px]">Communicate with users</li>
        </ul>
        <p>We may use anonymized or aggregated data to improve the Service.</p>
        <p>We do not sell personal data.</p>
      </div>

      <SectionHeading number={4} title="Artificial Intelligence Disclosure" id="section-4" />
      <div className={B}>
        <p>Practicely uses automated artificial intelligence systems. Important:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Feedback is AI-generated</li>
          <li className="ms-[27px]">Outputs may contain errors</li>
          <li className="ms-[27px]">The Service is for educational purposes only</li>
          <li className="ms-[27px]">We do not guarantee employment or interview success</li>
          <li className="ms-[27px]">AI feedback does not constitute professional advice</li>
        </ul>
        <p>Unless explicitly stated, no human review is performed.</p>
      </div>

      <SectionHeading number={5} title="Legal Basis for Processing (EU/UK Users GDPR)" id="section-5" />
      <div className={B}>
        <p>If you are located in the European Economic Area (EEA) or United Kingdom, we process your personal data based on:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Performance of a contract (to provide the Service)</li>
          <li className="ms-[27px]">Legitimate interests (improving services and analytics)</li>
          <li className="ms-[27px]">Consent (for marketing communications and non-essential cookies)</li>
        </ul>
      </div>

      <SectionHeading number={6} title="Data Sharing" id="section-6" />
      <div className={B}>
        <p>We may share data with trusted service providers, including:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">AWS (cloud hosting and storage)</li>
          <li className="ms-[27px]">OpenAI (AI processing services)</li>
          <li className="ms-[27px]">Eleven Labs (text-to-speech processing)</li>
          <li className="ms-[27px]">Stripe (payment processing)</li>
          <li className="ms-[27px]">Email marketing providers</li>
          <li className="ms-[27px]">Analytics providers</li>
        </ul>
        <p>AI processing providers may process user-submitted content solely for the purpose of generating responses and improving system reliability. We do not permit these providers to use personal data for independent marketing purposes. All service providers are contractually obligated to protect personal data.</p>
        <p>We may also disclose information:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">In connection with business transfers</li>
          <li className="ms-[27px]">To comply with legal obligations</li>
          <li className="ms-[27px]">To protect rights or safety</li>
        </ul>
      </div>

      <SectionHeading number={7} title="International Data Transfers" id="section-7" />
      <div className={B}>
        <p>As we operate from the United States, your data may be transferred and processed in the U.S. By using the Service, you consent to such transfers.</p>
        <p>Where required, we implement appropriate safeguards.</p>
      </div>

      <SectionHeading number={8} title="Data Retention" id="section-8" />
      <div className={B}>
        <p>We retain personal data as follows:</p>
        <p><strong>Account Information</strong> — Retained while your account remains active.</p>
        <p><strong>Interview Audio Recordings & Transcripts</strong> — Retained for up to twenty-four (24) months after your last account activity unless you request deletion or retention is legally required.</p>
        <p><strong>Billing Records</strong> — Retained in accordance with tax and accounting laws.</p>
        <p><strong>Marketing Information</strong> — Retained until you unsubscribe or request deletion.</p>
        <p>After retention periods expire, data is securely deleted or anonymized.</p>
      </div>

      <SectionHeading number={9} title="Your Privacy Rights" id="section-9" />
      <div className={B}>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Access your data</li>
          <li className="ms-[27px]">Correct inaccuracies</li>
          <li className="ms-[27px]">Request deletion</li>
          <li className="ms-[27px]">Restrict or object to processing</li>
          <li className="ms-[27px]">Request data portability</li>
          <li className="ms-[27px]">Withdraw consent</li>
        </ul>
        <p>To exercise your rights, contact: support@pmaccelerator.io</p>
        <p>We may verify identity before processing requests.</p>
      </div>

      <SectionHeading number={10} title="Cookies and Similar Technologies" id="section-10" />
      <div className={B}>
        <p>Practicely uses strictly necessary cookies and similar technologies required to operate and secure the Service.</p>
        <p>Cookies are small text files stored on your device that allow websites to maintain sessions and provide core functionality.</p>
        <p>We use cookies for the following purposes:</p>
        <ul className="list-disc mt-1">
          <li className="ms-[27px]">Authentication – allowing users to log into their accounts securely</li>
          <li className="ms-[27px]">Session management – maintaining your session while using the Service</li>
          <li className="ms-[27px]">Security and fraud prevention – protecting against unauthorized access or abuse</li>
          <li className="ms-[27px]">Service functionality – ensuring the platform operates reliably</li>
        </ul>
        <p>These cookies <strong>do not track users for advertising purposes and do not collect marketing data</strong>.</p>
        <p>Because these cookies are necessary to provide the Service, they <strong>cannot be disabled through our platform</strong>.</p>
        <p>You may control or delete cookies through your browser settings. However, blocking essential cookies may prevent certain features of the Service from functioning properly.</p>
        <p>For users located in the <strong>European Economic Area or the United Kingdom</strong>, these cookies are processed based on our <strong>legitimate interest in operating and securing the Service</strong>, and consent is not required under applicable cookie laws.</p>
        <p>If Practicely introduces <strong>analytics or marketing cookies in the future</strong>, this Privacy Policy will be updated and a cookie consent mechanism will be implemented where legally required.</p>
      </div>

      <SectionHeading number={11} title="Security" id="section-11" />
      <div className={B}>
        <p>We implement commercially reasonable administrative, technical, and physical safeguards, including encryption and secure cloud infrastructure.</p>
        <p>No method of transmission is 100% secure.</p>
      </div>

      <SectionHeading number={12} title="Children's Privacy" id="section-12" />
      <div className={B}>
        <p>Practicely is not intended for individuals under 16 years old. We do not knowingly collect data from minors.</p>
      </div>

      <SectionHeading number={13} title="Changes to This Policy" id="section-13" />
      <div className={B}>
        <p>We may update this Privacy Policy periodically. The "Last Updated" date will reflect revisions.</p>
        <p>Continued use of the Service constitutes acceptance of changes.</p>
      </div>

      <SectionHeading number={14} title="Contact Information" id="section-14" />
      <div className={B}>
        <p>DR. NANCY LI INTERNATIONAL LLC</p>
        <p>Email: support@pmaccelerator.io</p>
      </div>
    </LegalLayout>
  )
}

import { Link } from 'react-router-dom'
import imgPmaLogo from '../assets/footer/social-icon-1.png'
import imgLogo from '../assets/footer/practicely-logo.png'
import imgXhs from '../assets/footer/xiaohongshu.svg'

// ─── Icons ─────────────────────────────────────────────────────────────────────

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.449-2.136 2.944v5.662H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="currentColor" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function XiaohongshuIcon() {
  return <img src={imgXhs} alt="小红书" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
}

// ─── Shared data ────────────────────────────────────────────────────────────────

const navColumns = [
  {
    heading: 'Information',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Cookie Policy', to: '/cookie-policy' },
      { label: 'Terms of Service', to: '/terms-and-conditions' },
      { label: 'AI Transparency Statement', to: '/ai-transparency-statement' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Contact', to: '/contact' },
    ],
  },
]

const socialLinks = [
  { href: 'https://www.pmaccelerator.io/', label: 'PMA', icon: <img src={imgPmaLogo} alt="PMA" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} /> },
  { href: 'https://www.linkedin.com/in/drnancyli/', label: 'LinkedIn', icon: <LinkedInIcon /> },
  { href: 'https://www.youtube.com/@DrNancyLi', label: 'YouTube', icon: <YouTubeIcon /> },
  { href: 'https://xhslink.com/m/ZaHuSeIoaF', label: 'Xiaohongshu', icon: <XiaohongshuIcon /> },
]

// ─── Sub-components ─────────────────────────────────────────────────────────────

function NavColumn({ heading, links }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-['Geist',sans-serif] font-medium text-[#a3a3a3] text-[14px] leading-[1.4] tracking-[-0.08px] uppercase">
        {heading}
      </p>
      {links.map(({ label, to }) => (
        <Link
          key={to}
          to={to}
          onClick={() => window.scrollTo(0, 0)}
          className="font-['Geist',sans-serif] font-normal text-[#d4d4d4] text-[15px] leading-[1.4] tracking-[-0.08px] hover:text-white transition-colors"
        >
          {label}
        </Link>
      ))}
    </div>
  )
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map(({ href, label, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex items-center justify-center w-5 h-5 text-white opacity-65 hover:opacity-100 transition-opacity"
        >
          {icon}
        </a>
      ))}
    </div>
  )
}

// ─── Footer ─────────────────────────────────────────────────────────────────────

export default function FooterContainer() {
  return (
    <footer className="bg-[#171717] w-full">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-12 flex flex-col gap-10">

        {/* Top: logo + nav columns */}
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} aria-label="Practicely home">
              <img
                src={imgLogo}
                alt="Practicely"
                style={{ height: '22px', width: 'auto', filter: 'brightness(0) invert(1)', display: 'block' }}
              />
            </Link>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:flex sm:gap-16 flex-1">
            {navColumns.map(col => (
              <NavColumn key={col.heading} {...col} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#2e2e2e] w-full" />

        {/* Bottom: social + copyright */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SocialIcons />
          <p className="font-['Inter',sans-serif] font-normal text-[#a3a3a3] text-[13px] tracking-[-0.07px]">
            © 2026 Dr. Nancy Li International
          </p>
        </div>

      </div>
    </footer>
  )
}

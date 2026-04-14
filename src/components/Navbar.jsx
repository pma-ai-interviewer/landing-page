import { Link } from 'react-router-dom'
import imgLogo from '../assets/footer/practicely-logo.png'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#e5e5e5]">
      <div className="flex items-center justify-between px-[24px] py-[14px] max-w-[1500px] mx-auto">
        {/* Logo */}
        <a href="/" aria-label="Practicely home">
          <img src={imgLogo} alt="Practicely" style={{ height: '22px', width: 'auto', display: 'block' }} />
        </a>

        {/* CTA */}
        <Link
          to="/waitlist"
          className="inline-flex items-center justify-center bg-[#210099] rounded-[8px] h-[38px] px-[16px] font-['Geist',sans-serif] font-medium text-[15px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#1a0080] transition-colors"
        >
          Join the waitlist
        </Link>
      </div>
    </nav>
  )
}

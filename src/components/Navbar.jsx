import imgLogo from '../assets/footer/practicely-logo.png'

const LOGIN_URL = 'https://interviewer.pmaccelerator.io/login'
const REGISTER_URL = 'https://interviewer.pmaccelerator.io/register'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#e5e5e5]">
      <div className="flex items-center justify-between px-[24px] py-[14px] max-w-[1500px] mx-auto">
        {/* Logo */}
        <a href="/" aria-label="Practicely home">
          <img src={imgLogo} alt="Practicely" style={{ height: '22px', width: 'auto', display: 'block' }} />
        </a>

        {/* CTAs */}
        <div className="flex items-center gap-[8px]">
          <a
            href={LOGIN_URL}
            className="inline-flex items-center justify-center rounded-[8px] h-[38px] px-[14px] font-['Geist',sans-serif] font-medium text-[15px] text-[#171717] tracking-[0.07px] whitespace-nowrap hover:bg-[#f4f4f5] transition-colors"
          >
            Log in
          </a>
          <a
            href={REGISTER_URL}
            className="inline-flex items-center justify-center bg-[#404040] rounded-[8px] h-[38px] px-[16px] font-['Geist',sans-serif] font-medium text-[15px] text-white tracking-[0.07px] whitespace-nowrap hover:bg-[#262626] transition-colors"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  )
}

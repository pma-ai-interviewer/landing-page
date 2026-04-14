import Navbar from '../components/Navbar'
import FooterContainer from '../components/Footer'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: 'Geist, sans-serif' }}>
      <Navbar />
      <main className="flex-1 max-w-[800px] mx-auto px-[24px] py-[64px] w-full">
        <h1 className="font-medium text-[#171717] text-[40px] leading-[44px] tracking-[-1.2px] mb-[32px]">Cookie Policy</h1>
        <p className="text-[#737373] text-[16px] leading-[1.6]">This page is coming soon.</p>
      </main>
      <FooterContainer />
    </div>
  )
}

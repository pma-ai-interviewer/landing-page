import React from 'react'
import Navbar from './components/Navbar'
import HeroContainer from './components/Hero'
import FeaturesContainer from './components/Features'
import HowItWorksContainer from './components/HowItWorks'
import ResumeEditorContainer from './components/ResumeEditor'
import ValuesContainer from './components/Values'
import TestimonialsContainer from './components/Testimonials'
import PricingContainer from './components/Pricing'
import CTABanner from './components/CTABanner'
import FooterContainer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Geist, sans-serif' }}>
      <Navbar />
      <HeroContainer />
      <HowItWorksContainer />
      <ResumeEditorContainer />
      <FeaturesContainer />
      <div className="bg-gradient-to-br from-[#fff8f5] to-[#fde8d4]"><TestimonialsContainer /></div>
      <ValuesContainer />
      <PricingContainer />
      <CTABanner />
      <FooterContainer />
    </div>
  )
}

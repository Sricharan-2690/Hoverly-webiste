import React from 'react'
import SiteNavbar from './components/SiteNavbar'
import Hero from './components/Hero'
import Work from './components/Work'
import TechStack from './components/TechStack'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="app">
      <SiteNavbar />
      <main>
        <Hero />
        <Work />
        <TechStack />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}

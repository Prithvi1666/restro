import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Stats from './sections/Stats'
import Dishes from './sections/Dishes'
import Features from './sections/Features'
import BookingProcess from './sections/BookingProcess'
import Timing from './sections/Timing'
import TestimonialSection from './sections/TestimonialSection'
import FAQs from './sections/FAQs'
import CTA from './sections/CTA'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing />
      <TestimonialSection />
      <FAQs />
      <CTA />
      <Footer />
    </>
  )
}

export default App
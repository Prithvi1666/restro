import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Stats from './sections/Stats'
import Dishes from './sections/Dishes'
import Features from './sections/Features'
import BookingProcess from './sections/BookingProcess'
import Timing from './sections/Timing'


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
    </>
  )
}

export default App
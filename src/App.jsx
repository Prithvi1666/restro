import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Stats from './sections/Stats'
import Dishes from './sections/Dishes'
import Features from './sections/Features'


const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
    </>
  )
}

export default App
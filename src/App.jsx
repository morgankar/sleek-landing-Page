import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Plan from '../components/Plan'
import Section4 from '../components/Section4'
import Reviews from '../components/Reviews'
import Faq from '../components/Faq'
import Section5 from '../components/Section5'
import EndingHero from '../components/EndingHero'
import Footer from '../components/Footer'



const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Plan/>
      <Section4/>
      <Reviews/>
      <Faq/>
      <Section5/>
      <EndingHero/>
      <Footer/>

    </>
  )
}

export default App
import React from 'react'
import CustomerReview from './CustomerReview '
import Hero from '../components/Hero/Hero'
import AboutUs from '../components/AboutUs'
import RegisterBanner from '../components/RegisterBanner'
import GrowBuisness from '../components/GrowBuisness'
import OurProducts from '../components/OurProducts/OurProducts'

const Landing = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <RegisterBanner/>
      <OurProducts/>
      <GrowBuisness/>
      <CustomerReview />


    </div>
  )
}

export default Landing
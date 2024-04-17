import React from 'react'
import CustomerReview from './CustomerReview '
import Hero from '../components/Hero/Hero'
import GrowBuissness from '../components/GrowBuisness'
import AboutUs from '../components/AboutUs'
import RegisterBanner from '../components/RegisterBanner'


const Landing = () => {
  return (
    <div>
      <Hero/>
      <CustomerReview />
      <GrowBuissness/>
      <AboutUs/>
      <RegisterBanner/>
    </div>
  )
}

export default Landing
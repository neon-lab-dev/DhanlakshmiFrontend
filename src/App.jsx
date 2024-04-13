import React from 'react';
import './styles.css';
import { Layout } from './components';
import GrowBuiseness from './components/GrowBuisness';
import Hero from './components/Hero/Hero';
import RegisterBanner  from './components/RegisterBanner';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Layout>
      <div className="flex justify-center flex-col items-center mt-[20%]">
        <h1 className="text-primary">Welcome to Dhanlakshmi</h1>
        <p className="text-heading w-[55%] text-center mt-4">
          Welcome to Dhanlakshmi Organics, your trusted partner in agriculture.
          One stop solution for Fertilisers, Pesticides and Cattlefeed
          supplements. Join us in harvesting prosperity.
        </p>
      </div>    <GrowBuiseness/>
    <Hero/>
    <RegisterBanner/>
    <AboutUs/>
    </Layout>
  );
};

export default App;

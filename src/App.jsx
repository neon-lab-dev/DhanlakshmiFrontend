import React from 'react';
import './styles.css'
import Hero from './components/Hero/Hero';
import RegisterBanner from './components/RegisterBanner';
import AboutUs from './components/AboutUs';
import GrowBuisness from './components/GrowBuisness';

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-primary">
        Welcome to Dhanlakshmi
      </h1>
      <p className='text-heading w-[55%] text-center mt-4'>Welcome to Dhanlakshmi Organics, your trusted partner in agriculture. One stop solution for Fertilisers, Pesticides and Cattlefeed supplements. Join us in harvesting prosperity.</p>
      
    </div>
  );
};

export default App;

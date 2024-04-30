import React, { useEffect } from "react";
import CustomerReview from "./CustomerReview ";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/AboutUs";
import RegisterBanner from "../components/RegisterBanner";
import GrowBuisness from "../components/GrowBuisness";
import OurProducts from "../components/OurProducts/OurProducts";
import GetInTouch from "../components/GetInTouch";
import { useGlobalContext } from "../context/GlobalContext";

const Landing = () => {
  const { setTriggerScroll, triggerScroll } = useGlobalContext();

  const scrollToAboutUs = () => {
    const aboutUs = document.getElementById("about-us");
    aboutUs?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (triggerScroll) {
      scrollToAboutUs();
      setTriggerScroll(false);
    }
  }, [triggerScroll]);

  return (
    <div>
      <Hero />
      <AboutUs />
      <RegisterBanner />
      <OurProducts />
      <GrowBuisness />
      <CustomerReview />
      <GetInTouch />
    </div>
  );
};

export default Landing;

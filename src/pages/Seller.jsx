import React from "react";
import { Button } from "../components";
import sellerHero from "../assets/images/seller_hero.svg";
import thumbsUp from "../assets/icons/thumbsup.svg";
import sellerCardsInfo from "../assets/data/sellerCardsInfo";
import InfoCard from "../components/InfoCard";
import bg from "../assets/images/dotdotdot.svg";
import TestimonialCard from "../components/TestimonialCard";
import GetInTouch from "../components/GetInTouch";
import { useGlobalContext } from "../context/GlobalContext";
import TESTIMONIALS from "../assets/data/testimonials";
import Marquee from "react-fast-marquee";

const Seller = () => {
  const { setIsSellerSignUpModalOpen } = useGlobalContext();
  return (
    <div className="flex flex-col">
      <section
        className="!bg-cover xs:!bg-center !bg-[-560px] h-full w-full"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(0deg, rgba(0, 71, 16, 0.30) 0%, rgba(0, 71, 16, 0.30) 100%), url(${sellerHero})`,
        }}
      >
        <div className="wrapper pt-[100px] sm:pt-[179px] pb-8 md:py-[70px] md:mt-[140px]">
          <div className="flex flex-col gap-4 md:gap-6 md:max-w-[750px]">
            <h1 className="text-white text-[48px] md:text-[64px] font-600 leading-[64px]">
              What is Dhanlakshmi Seller Program?
            </h1>
            <p className="text-base text-white">
              The Dhanlakshmi Seller Program offers agricultural suppliers and
              distributors the opportunity to partner with us and access our
              premium range of products at competitive prices. We provide
              comprehensive support to help sellers maximize their sales and
              grow their businesses. Join us today to unlock new opportunities
              for success in the agricultural industry.
            </p>
            <Button
              onClick={() => {
                setIsSellerSignUpModalOpen(true);
              }}
              className="w-full font-500 text-lg bg-surface text-bgGradient max-w-[400px] md:w-fit"
            >
              Become Our Seller
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-6 md:gap-12 xl:gap-14 py-12 bg-surface md:py-24">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={thumbsUp}
              alt="thumbs up"
              className="p-1.5 rounded-lg h-9 w-9 text-lg"
              style={{
                background: "rgba(223, 151, 24, 0.25)",
              }}
            />
            <span className="text-lg font-Poppins">Our Numbers</span>
          </div>
          <h3 className="text-[32px] font-700 text-center max-w-[350px] md:max-w-none">
            Why you should become our seller?
          </h3>
          <p className="text-base w-[90%] max-w-[600px] md:max-w-[750px] text-center text-bodyText">
            Access premium products and dedicated support to elevate your
            business. Join us now and unlock your potential for growth and
            success.
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-center w-full gap-6 px-6">
          {sellerCardsInfo.map((card, index) => (
            <InfoCard {...card} key={index} />
          ))}
        </div>
      </section>
      <section className="flex md:py-24 flex-col items-center justify-center gap-6 md:gap-12 xl:gap-14 py-12 bg-[#F0F6F2] relative">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat opacity-15"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />
        <div className="flex flex-col items-center gap-6 z-10">
          <div className="flex items-center gap-3">
            <img
              src={thumbsUp}
              alt="thumbs up"
              className="p-1.5 rounded-lg h-9 w-9 text-lg"
              style={{
                background: "rgba(223, 151, 24, 0.25)",
              }}
            />
            <span className="text-lg font-Poppins">Testimonials</span>
          </div>
          <h3 className="text-[32px] font-700 text-center max-w-[350px] md:max-w-none">
            Positive feedbacks from our sellers
          </h3>
          <p className="text-base w-[90%] max-w-[600px] md:max-w-[750px] text-center text-bodyText">
            Explore testimonials from satisfied Sellers and discover the impact
            of Dhanlakshmi Organics firsthand. Join us and experience the
            difference in agricultural excellence.
          </p>
          <div className="flex gap-6 items-center">
            <Button
              onClick={() => setIsSellerSignUpModalOpen(true)}
              className="py-2 md:py-3"
            >
              Become a Seller
            </Button>
            <Button
              onClick={() => {
                document
                  .getElementById("contact-us")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="secondary"
              className="py-2 md:py-3"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <Marquee>
          {TESTIMONIALS.map((card, index) => (
            <TestimonialCard {...card} key={index} />
          ))}
        </Marquee>
      </section>
      <GetInTouch />
    </div>
  );
};

export default Seller;

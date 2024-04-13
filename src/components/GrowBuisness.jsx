import React from "react";
import GrowYourBuisenessSVG from "../assets/images/grow_your_business_with_us.svg";
import ManCountingSVG from "../assets/images/man_counting_money.svg";


export default function GrowBuisness() {
  return (
    <section
      style={{
        backgroundImage:
          `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${GrowYourBuisenessSVG})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
      className="overflow-hidden my-12 px-20 max-md:px-5 full-width"
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
          <div className="flex py-14 flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl text-white font-bold capitalize max-md:max-w-full">
              Grow your business with us
            </h1>
            <p className="mt-6 text-white text-base leading-6 max-md:max-w-full">
              Elevate your business by becoming a trusted seller of our premium
              agricultural products. Join forces with Dhanlakshmi Organics and
              gain access to a vast network of farmers and agricultural
              enthusiasts seeking high-quality solutions. Expand your reach,
              boost your sales, and cultivate success with us as your partner in
              growth.
            </p>
            <button className="justify-center max-md:self-center self-start px-6 py-4 mt-6 text-lg font-medium text-center bg-white rounded text-green-950 max-md:px-5">
              Become a Seller
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${ManCountingSVG})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full"
        ></div>
      </div>
    </section>
  );
}

import React from "react";
import growYourBuisenessbg from "../assets/images/grow-your-business-bg.png";
import manCountingImg from "../assets/images/man-counting-money.png";
import { useGlobalContext } from "../context/GlobalContext";

export default function GrowBuisness() {
  const { setIsSellerSignUpModalOpen } = useGlobalContext();
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(${growYourBuisenessbg})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
      className="overflow-visible my-12 px-20 max-md:px-5 full-width"
    >
      <div>
        <div className="flex relative gap-5 max-md:flex-col max-md:gap-8">
          <div className="flex flex-col w-[66%] max-md:ml-0 pr-8 max-md:w-full max-md:pr-0">
            <div className="flex py-14 flex-col self-stretch my-auto text-white max-md:mt-3 max-md:max-w-full">
              <h1 className="text-[2.625rem] font-Inter font-700 text-white capitalize max-md:max-w-full">
                Grow your business with us
              </h1>
              <p className="mt-4 text-white font-Inter font-400 text-base leading-6 max-md:max-w-full">
                Elevate your business by becoming a trusted seller of our
                premium agricultural products. Join forces with Dhanlakshmi
                Organics and gain access to a vast network of farmers and
                agricultural enthusiasts seeking high-quality solutions. Expand
                your reach, boost your sales, and cultivate success with us as
                your partner in growth.
              </p>
              <button
                onClick={() => setIsSellerSignUpModalOpen(true)}
                className="justify-center max-md:self-center self-start px-6 py-4 mt-6 font-Inter text-lg font-500 text-center bg-white rounded text-bgGradient max-md:px-5"
              >
                Become a Seller
              </button>
            </div>
          </div>
          <img
            src={manCountingImg}
            className="h-[160%] w-[34%] max-md:hidden object-cover absolute right-0 bottom-0"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

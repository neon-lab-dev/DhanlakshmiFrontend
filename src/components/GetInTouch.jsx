import React from "react";
import thumbsUp from "../assets/icons/thumbsup.svg";
import getInTouch from "../assets/images/get-in-touch.png";
import Form from "./Form";

const GetInTouch = () => {
  return (
    <section 
    id="contact-us"
    className="wrapper">
      <div className="w-full py-12 flex flex-col gap-12">
        {/* Heading */}
        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-1 rounded-lg w-8 h-8 flex justify-center items-center bg-bgBox/25">
              <img src={thumbsUp} alt="" />
            </div>
            <span className="text-lg font-Poppins font-400">Contact us</span>
          </div>
          <h3 className="text-3xl font-700 text-center max-w-[350px] md:max-w-none">
            Get in touch with us
          </h3>
          <p className="text-base text-center text-bodyText font-400">
            Get in touch with us for inquiries, feedback, or collaboration
            opportunities. We're here to assist you with any questions or needs
            you may have. Let's start a conversation today.
          </p>
        </div>

        <div className="flex items-center justify-between gap-12 xl:gap-32">
          <Form />
          <div className="hidden lg:block min-w-[500px] max-w-[600px]">
            <img
              src={getInTouch}
              alt=""
              className="w-full h-full object-contain object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

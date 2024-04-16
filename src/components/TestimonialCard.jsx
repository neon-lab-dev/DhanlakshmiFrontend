import React from "react";
import profile_4 from "../assets/images/profile_4.svg";

const TestimonialCard = ({ name, image, desc, address }) => {
  return (
    <div className="h-[250px] shadow w-[300px] bg-white px-5 py-[21px] rounded-[10px] flex flex-col  items-start gap-6 shrink-0">
      <p className="w-[257px] text-bodyText font-Inter font-400 text-base leading-[26.656px]">
        {address ||
          "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco”"}
      </p>

      <div className="flex items-center gap-4">
        <div className="rounded-full h-[50px] w-[50px]">
          <img
            className="w-full h-full object-contain object-center"
            src={image || profile_4}
            alt=""
          />
        </div>
        <div className="">
          <h6 className="text-heading font-700 leading-[17.77px] text-base">
            {name || "Biru Yadav"}
          </h6>
          <p className="text-bodyText font-400 mt-[6px] leading-[17.77px] text-base">
            {address || "Jaipur, Rajasthan"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

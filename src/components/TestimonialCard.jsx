import React from "react";

const TestimonialCard = ({ name, image, review, location }) => {
  return (
    <div className="h-[250px] shadow w-[300px] bg-white mr-8 px-5 py-[21px] rounded-[10px] flex flex-col justify-between items-start gap-6 shrink-0">
      <p className="w-[257px] text-bodyText font-Inter font-400 text-base leading-[26.656px]">
        {review.length > 120 ? review.slice(0, 120) + "..." : review}
      </p>

      <div className="flex items-center gap-4">
        <div className="rounded-full h-[50px] w-[50px]">
          <img
            className="w-full h-full object-cover object-center rounded-full"
            src={image}
            alt=""
          />
        </div>
        <div className="">
          <h6 className="text-heading font-700 leading-[17.77px] text-base">
            {name}
          </h6>
          <p className="text-bodyText font-400 mt-[6px] leading-[17.77px] text-base">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

import React from "react";
import thumbsUp from "../../assets/icons/thumbsup.svg";
import getInTouch from "../../assets/images/get-in-touch.png";
import Form from "./Form";
import { useState } from "react";
import SellerSignUpModal from "../SignUpModal/SellerSignUpModal";
import UserSignUpModal from "../SignUpModal/UserSignUpModal";

const GetInTouch = () => {
  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);

  const handleSellerSignUpModal = () => {
    setIsSellerModalOpen(!isSellerModalOpen);
  };

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const handleUserSignUpModal = () => {
    setIsUserModalOpen(!isUserModalOpen);
  };
  return (
    <div>
      <div>
        {/* Heading */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="p-[6px] rounded-lg w-6 h-6 flex justify-center items-center bg-bgBox/25">
              <img src={thumbsUp} alt="" />
            </div>
            <p className="font-Inter text-heading text-lg font-400">
              Contact us
            </p>
          </div>

          <h1 className="font-Inter text-center lg:text-start font-700 text-[32px] text-heading capitalize">
            Get in touch with us
          </h1>

          <p className="font-Inter text-center lg:text-start font-400 text-base text-bodyText w-[489px]">
            Get in touch with us for inquiries, feedback, or collaboration
            opportunities. We're here to assist you with any questions or needs
            you may have. Let's start a conversation today.
          </p>
        </div>

        <div className="flex items-center justify-between">
        {/* <Form handleSellerSignUpModal={handleSellerSignUpModal}/> */}
        <Form handleUserSignUpModal={handleUserSignUpModal}/>
          
          <div className="hidden lg:block">
            <img src={getInTouch} alt="" />
          </div>
        </div>
      </div>
      {/* <SellerSignUpModal isSellerModalOpen={isSellerModalOpen} setIsSellerModalOpen={setIsSellerModalOpen}/> */}

      <UserSignUpModal isUserModalOpen={isUserModalOpen} setIsUserModalOpen={setIsUserModalOpen}/>
    </div>
  );
};

export default GetInTouch;

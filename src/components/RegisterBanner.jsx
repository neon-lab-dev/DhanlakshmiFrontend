import React from "react";
import RegCoverSVG from "../assets/images/grow-your-business-bg.png";
import { useGlobalContext } from "../context/GlobalContext";

export default function RegisterBanner() {
  const { setIsUserSignUpModalOpen } = useGlobalContext();
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(${RegCoverSVG})`,
        backgroundPosition: "bottom 81% left 30%",
        backgroundSize: "cover",
      }}
      className="text-white flex overflow-hidden relative flex-col justify-center items-center px-16 py-16 mt-16 full-width font-bold min-h-[363px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex relative justify-center items-center px-16 w-full max-w-[1079px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[819px]">
          <h2 className="text-white text-[2.625rem] text-center capitalize max-md:max-w-full">
            Register now to Get FREE sample
          </h2>
          <p className="text-white mx-4 mt-4 text-base leading-6 text-center max-md:mr-2.5 max-md:max-w-full">
            Be among the first to sign up and receive a complimentary product as
            our token of appreciation. Don't miss out on this opportunity to
            experience the best of our offerings before anyone else. Register
            now and claim your free gift!
          </p>
          <button
            onClick={() => setIsUserSignUpModalOpen(true)}
            className="flex items-center gap-3 self-center px-6 py-5 mt-6 text-xl leading-4 bg-red-500 rounded-md max-md:px-5"
          >
            <span>Register Now</span>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.84129 0.75L6.11328 2.47801L10.1361 6.5L6.11328 10.522L7.84129 12.25L13.5905 6.5L7.84129 0.75Z"
                fill="white"
              />
              <path
                d="M2.14012 12.25L7.88931 6.5L2.14012 0.75L0.412109 2.47801L4.43491 6.5L0.412109 10.522L2.14012 12.25Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

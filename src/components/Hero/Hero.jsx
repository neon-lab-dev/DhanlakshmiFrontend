import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import profile1 from "../../assets/images/img1.png";
import profile2 from "../../assets/images/img2.png";
import profile3 from "../../assets/images/img3.png";
import Button from "../Button";
import { useGlobalContext } from "../../context/GlobalContext";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [txts, setTxts] = useState([]);
  const txtsLen = txts.length;
  const textInTimer = 3000;
  const textOutTimer = 3000;
  const imageTimer = 6000;
  const imgSrcs = [profile1, profile2, profile3];
  const imageIndexRef = useRef(0);
  const { setIsUserSignUpModalOpen, setIsSellerSignUpModalOpen } =
    useGlobalContext();

  useEffect(() => {
    const animateText = () => {
      for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
      }
      txts[index].classList.add("text-in");

      setTimeout(function () {
        if (index === txtsLen - 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      }, textInTimer);
    };

    const intervalId = setInterval(() => {
      animateText();
    }, textOutTimer);

    return () => clearInterval(intervalId);
  }, [index, txts, txtsLen]);

  useEffect(() => {
    const animateText = () => {
      const animateTextElements = document.querySelectorAll(".animate-text");
      setTxts(Array.from(animateTextElements));
    };

    animateText();

    const handleResize = () => {
      animateText();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const animateImg = () => {
      if (imageIndexRef.current === 2) {
        imageIndexRef.current = 0;
      } else {
        imageIndexRef.current += 1;
      }
    };
    const intervalId = setInterval(() => {
      animateImg();
    }, imageTimer);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={
        window.innerWidth < 768
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${
                imgSrcs[imageIndexRef.current]
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : null
      }
      className="flex flex-col px-20 full-width max-md:px-5 max-md:max-w-full"
    >
      <div className="mx-2.5 mt-10 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-9 max-md:flex-col max-md:gap-0">
          <div className="flex grow w-[60%] flex-col max-md:ml-0 max-md:w-full">
            <div className="flex flex-col pt-3.5  max-md:max-w-full">
              <div className="-mt-2 font-[700] w-[76%] max-md:w-[100%] font-extrabold text-primary capitalize leading-[77px] text-[4.25rem] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                <div className="animate-text">
                  <span className="font-bold text-heading max-md:text-white">
                    Nothing Like{" "}
                  </span>
                  <br />
                  <span className="font-bold text-primary">Organic </span>
                </div>
                <div className="animate-text">
                  <span className="font-bold text-heading max-md:text-white">
                    Let's Build{" "}
                  </span>
                  <br />
                  <span className="font-bold text-primary">Organic </span>
                </div>
                <div className="animate-text text-in">
                  <span className="font-bold text-heading max-md:text-white">
                    A Step into{" "}
                  </span>
                  <br />
                  <span className="font-bold text-primary">Organic </span>
                  <span className="font-bold text-heading max-md:text-white">
                    World
                  </span>
                </div>
              </div>
              <div className="mt-7 w-[76%] max-md:w-[100%] text-base	font-Inter font-400  max-md:text-white leading-6 text-bodyText max-md:max-w-full">
                Welcome to Dhanlakshmi Organics, your trusted partner in
                agriculture. One stop solution for Fertilisers, Pesticides and
                Cattlefeed supplements. Join us in harvesting prosperity.
              </div>
              <div className="flex gap-3 max-md:w-[100%] max-md:flex-col self-start mt-8 text-lg font-medium text-center">
                <Button 
                variant="primary"
                className="text-white font-Inter font-500 text-lg" 
                onClick={() => setIsUserSignUpModalOpen(true)}>
                  Register as User
                </Button>
                <Button
                className="text-primary font-Inter font-500 text-lg"
                  variant="secondary"
                  onClick={() => setIsSellerSignUpModalOpen(true)}
                >
                  Become our Seller
                </Button>
              </div>
              <div className="max-md:hidden mt-16 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center p-4 w-full bg-white rounded-xl border border-heroBorders border-solid shadow-2xl max-md:mt-6">
                      <div
                        style={{ fontWeight: "bold" }}
                        className="text-2xl text-primary font-Inter font-700 tracking-tight bg-clip-text"
                      >
                        3,400+
                      </div>
                      <div className="mt-3 text-base font-500 font-Poppins font-medium text-heading">
                        Costumers
                      </div>
                      <div className="mt-1.5 text-xs font-400 font-Poppins text-bodyText">
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center p-4 w-full bg-white rounded-xl border border-heroBorders border-solid shadow-2xl max-md:mt-6">
                      <div
                        style={{ fontWeight: "bold" }}
                        className="text-2xl text-primary font-Inter font-700 tracking-tight bg-clip-text"
                      >
                        300+
                      </div>
                      <div className="mt-3 text-base font-500 font-Poppins font-medium text-heading">
                        Sellers
                      </div>
                      <div className="mt-1.5 text-xs font-400 font-Poppins text-bodyText">
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center p-4 w-full bg-white rounded-xl border border-heroBorders border-solid shadow-2xl max-md:mt-6">
                      <div
                        style={{ fontWeight: "bold" }}
                        className="text-2xl text-primary font-Inter font-700 tracking-tight bg-clip-text"
                      >
                        100+
                      </div>
                      <div className="mt-3 text-base font-500 font-Poppins font-medium text-heading">
                        Products
                      </div>
                      <div className="mt-1.5 text-xs font-400 font-Poppins text-bodyText">
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative max-md:hidden w-[40%] flex flex-col ml-5 max-md:ml-0 rounded-xl max-md:w-full ">
            {imgSrcs.map((imgSrc, index) => {
              return (
                <div
                  key={index}
                  className="imgMainDiv absolute animate-in max-md:hidden h-[100%] w-[100%] flex flex-col ml-5 max-md:ml-0 rounded-xl max-md:w-full "
                  style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    opacity: index === imageIndexRef.current ? 1 : 0,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

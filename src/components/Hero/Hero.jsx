import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import profile1 from '../../assets/images/profile_1.svg';
import profile2 from '../../assets/images/profile_2.svg';
import profile3 from '../../assets/images/profile_3.svg';
export default function Hero() {
  const [index, setIndex] = useState(0);
  const [txts, setTxts] = useState([]);
  const txtsLen = txts.length;
  const textInTimer = 3000;
  const textOutTimer = 3000;
  const imageTimer = 6000;
  const imgSrcs = [
    profile1,
    profile2,
    profile3,
  ];
  const imageIndexRef = useRef(0);

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
    const img = document.querySelector(".imgMainDiv");
    console.log(img);
    const animateImg = () => {
      img.classList.add("animate-out");
      setTimeout(function () {
        img.classList.remove("animate-out");
        img.classList.add("animate-in");
      }, 500);
      setTimeout(function () {
        img.classList.remove("animate-in");
        if (imageIndexRef.current === 2) {
          imageIndexRef.current = 0;
          console.log("animateImg1");
        } else {
          imageIndexRef.current += 1;
          
      console.log("animateImg");
        }
      }, 1100);
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
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(./Images/HeroImage1.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : null
      }
      className="flex flex-col px-20 py-9 w-full max-md:px-5 max-md:max-w-full MainContainer"
    >
      <div className="mx-2.5 mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-9 max-md:flex-col max-md:gap-0">
          <div className="flex grow w-[65%] flex-col max-md:ml-0 max-md:w-full">
            <div className="flex flex-col pt-3.5 mt-3.5 max-md:max-w-full">
              <div
                style={{ fontWeight: "bold" }}
                className="mt-3.5 w-[76%] max-md:w-[100%] text-7xl font-extrabold text-lime-600 capitalize leading-[77px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]"
              >
                <div className="animate-text">
                  <span className="font-bold text-zinc-800 max-md:text-white">
                    Nothing Like{" "}
                  </span>
                  <br />
                  <span className="font-bold">Organic </span>
                </div>
                <div className="animate-text">
                  <span className="font-bold text-zinc-800 max-md:text-white">
                    Let's Build{" "}
                  </span>
                  <br />
                  <span className="font-bold">Organic </span>
                </div>
                <div className="animate-text text-in">
                  <span className="font-bold text-zinc-800 max-md:text-white">
                    A Step into{" "}
                  </span>
                  <br />
                  <span className="font-bold">Organic </span>
                  <span className="font-bold text-zinc-800 max-md:text-white">
                    World
                  </span>
                </div>
              </div>
              <div className="mt-10 w-[76%] max-md:w-[100%] text-base  max-md:text-white  leading-6 text-stone-500 max-md:max-w-full">
                Welcome to Dhanlakshmi Organics, your trusted partner in
                agriculture. One stop solution for Fertilisers, Pesticides and
                Cattlefeed supplements. Join us in harvesting prosperity.
              </div>
              <div className="flex gap-3 max-md:w-[100%] max-md:flex-col self-start mt-10 text-lg font-medium text-center">
                <button className="justify-center px-6 py-4 text-white bg-lime-600 rounded max-md:px-5">
                  Register as User
                </button>
                <button className="justify-center px-6 py-4 text-lime-600 rounded border border-lime-600 border-solid max-md:px-5">
                  Become our Seller
                </button>
              </div>
              <div className="max-md:hidden mt-16 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center p-4 w-full bg-white rounded-xl border border-gray-100 border-solid shadow-2xl max-md:mt-6">
                      <div
                        style={{ fontWeight: "bold" }}
                        className="text-2xl text-lime-600 font-bold tracking-tight bg-clip-text"
                      >
                        3,400+
                      </div>
                      <div className="mt-3 text-base font-medium text-zinc-800">
                        Costumers
                      </div>
                      <div className="mt-1.5 text-xs text-neutral-400">
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center p-4 w-full bg-white rounded-xl border border-gray-100 border-solid shadow-2xl max-md:mt-6">
                      <div
                        style={{ fontWeight: "bold" }}
                        className="text-2xl text-lime-600 font-bold tracking-tight bg-clip-text"
                      >
                        300+
                      </div>
                      <div className="mt-3 text-base font-medium text-zinc-800">
                        Sellers
                      </div>
                      <div className="mt-1.5 text-xs text-neutral-400">
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center p-4 w-full bg-white rounded-xl border border-gray-100 border-solid shadow-2xl max-md:mt-6">
                      <div
                        style={{ fontWeight: "bold" }}
                        className="text-2xl text-lime-600 font-bold tracking-tight bg-clip-text"
                      >
                        100+
                      </div>
                      <div className="mt-3 text-base font-medium text-zinc-800">
                        Products
                      </div>
                      <div className="mt-1.5 text-xs text-neutral-400">
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Conditionally rendering the image based on screen size */}
          <div
            className="imgMainDiv max-md:hidden w-[40%] flex flex-col ml-5 max-md:ml-0 rounded-xl max-md:w-full "
            style={{
              backgroundImage: `url(${imgSrcs[imageIndexRef.current]})`,

              backgroundPosition: "top",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

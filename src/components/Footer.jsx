import dhanLakshamiLogo from "../assets/icons/dhanlakshami.svg";
import upArrowGreen from "../assets/icons/up_arrow_green.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import copyRight from "../assets/icons/copyright.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="wrapper">
      <hr style={{ color: "rgba(106, 106, 106, 0.40)" }} />

      <div className="w-full md:pt-[68px] py-[27px] px-4 md:px-[42px]  ">
        <div className="flex w-full flex-col lg:flex-row pb-[50.5px]  justify-center md:justify-evenly items-start   md:gap-[50.5px] gap-[52px]">
          <div className="md:max-w-[295px] w-full max-w-[378px] md:min-w-[295px] flex flex-col gap-4 justify-center items-start">
            <div className="flex items-center gap-[7.329px]">
              <img
                className="w-[53.526px] h-[43.258px]"
                src={dhanLakshamiLogo}
                alt=""
              />
              <div className="flex flex-col ">
                <h6 className="text-[20.253px] font-800 text-brown">
                  Dhanlakshmi Organics
                </h6>
                <span className="text-primary font-Inter text-[11.102px] font-500">
                  Let's Build Organic
                </span>
              </div>
            </div>
            <div className="">
              <p className="text-bodyText font-400 text-sm">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="text-black font-Inter text-base font-600">Pages</h6>
            <div className="flex flex-col gap-1">
              {[
                { name: "Home", link: "/" },
                { name: "Seller", link: "/seller" },
                { name: "Products", link: "/products" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-bodyText text-sm font-400 underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <h6 className="text-black font-Inter text-base font-600 ">
              Contact Us
            </h6>
            <div className="flex flex-col gap-2">
              {[
                { name: "rjdtkhx@gmail.com", link: "mailto:rjdtkhx@gmail.com" },
                { name: "91355675556", link: "tel:91355675556" },
                { name: "2118 Thornridge Cir. Syracuse, Connecticut 35624" },
              ].map((item, index) => (
                <>
                  {item.link ? (
                    <Link
                      to={item.link}
                      key={index}
                      target="_blank"
                      className="text-bodyText text-sm font-400 underline"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <p key={index} className="text-bodyText text-sm font-400">
                      {item.name}
                    </p>
                  )}
                </>
              ))}
            </div>
          </div>

          <div className="flex lg:flex-col w-full md:w-auto justify-between items-center  gap-[88px] shrink-0">
            <div className="flex items-start gap-[18px]">
              {[
                { icon: facebook, link: "https://www.facebook.com" },
                { icon: twitter, link: "https://www.twitter.com" },
                { icon: instagram, link: "https://www.instagram.com" },
                { icon: linkedin, link: "https://www.linkedin.com" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  target="_blank"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    className="w-6 h-6 min-w-6 min-h-6"
                    src={item.icon}
                    alt=""
                  />
                </Link>
              ))}
            </div>
            <div className="self-end">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                type="button"
                className="md:w-6 md:h-6"
              >
                <img className="w-full h-full" src={upArrowGreen} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* copyright  */}
        <hr
          style={{
            color: "rgba(82, 81, 81, 0.13)",
          }}
        />
        <div className="mt-[24.5px] w-full">
          <p className="flex items-center w-full gap-1 justify-center">
            <img src={copyRight} alt="" />
            <span className="text-bodyText font-Inter text-[11px] font-500 ">
              2023 Dhanlakshmi Organics. All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

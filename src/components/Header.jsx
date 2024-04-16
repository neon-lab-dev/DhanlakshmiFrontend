import React from "react";

import logo from "../assets/icons/dhanlakshami.svg";
import menu from "../assets/icons/menu.svg";
import { Link, useLocation } from "react-router-dom";

const HEADER_LINKS = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "Become A Seller",
    link: "/seller",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #FFF 0%, #FFF 49%, #FFF 100%)",
        boxShadow: "0px 0px 26px 0px rgba(0, 0, 0, 0.10)",
      }}
      className="flex justify-between md:rounded-[10px] py-4 px-4 sm:px-6 items-center md:wrapper"
    >
      <div className="flex items-center justify-center gap-4">
        <img
          src={logo}
          alt="Dhanlakshmi"
          className="w-[51px] md:w-[78px] h-[41px] md:h-[63px] object-contain object-center"
        />
        <div className="flex flex-col md:gap-1">
          <p className="text-accent font-800 text-lg md:text-xl lg:text-[30px] lg:leading-[24.527px]">
            Dhanlakshmi Organics
          </p>
          <p className="text-primary text-xs sm:text-sm md:text-[16px] md:leading-[24.527px] font-500 font-Inter">
            Let’s Build Organic
          </p>
        </div>
      </div>

      <div className="hidden md:block font-Inter">
        <ul className="flex gap-5 items-center justify-center">
          {HEADER_LINKS.map(({ label, link }) => (
            <li
              key={label}
              className={`text-base xl:text-lg transition-colors ${
                pathname === link
                  ? "text-primary underline font-600 underline-offset-8"
                  : "text-heading hover:text-primary"
              }`}
            >
              <Link to={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-[16px] w-[16px] self-center md:hidden">
        <img src={menu} alt="Hamburger Menu" />
      </div>
    </nav>
  );
};

export default Header;

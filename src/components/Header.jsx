import React, { useEffect, useRef, useState } from "react";

import logo from "../assets/icons/dhanlakshami.svg";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close-svgrepo-com.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const Header = () => {
  const mobileMenu = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setTriggerScroll } = useGlobalContext();

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
      action: () => {
        navigate("/");
        setTriggerScroll(true);
      },
    },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
      mobileMenu.current.classList.remove("translate-x-full");
    } else {
      document.body.style.overflowY = "auto";
      mobileMenu.current.classList.add("translate-x-full");
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`flex justify-between md:rounded-[10px] py-4 z-50 px-4 sm:px-6 items-center md:wrapper transition-transform ${
          pathname === "/seller"
            ? "md:absolute md:text-white md:top-6 md:left-1/2 md:-translate-x-1/2 navShadow md:shadow-none md:bg-none"
            : "navShadow"
        }`}
      >
        <Link to="/" className="flex items-center justify-center gap-4">
          <img
            src={logo}
            alt="Dhanlakshmi"
            className="w-[51px] md:w-[78px] h-[41px] md:h-[63px] object-contain object-center"
          />
          <div className="flex flex-col md:gap-1">
            <p className="text-accent font-Foco font-800 text-lg md:text-xl lg:text-[30px] lg:leading-[24.527px]">
              Dhanlakshmi Organics
            </p>
            <p className="text-primary text-xs sm:text-sm md:text-[16px] md:leading-[24.527px] font-500 font-Inter">
              Let&apos;s Build Organic
            </p>
          </div>
        </Link>

        <div className="hidden md:block font-Inter">
          <ul className="flex gap-5 xl:gap-9 items-center justify-center">
            {HEADER_LINKS.map(({ label, link, action }) => (
              <li
                key={label}
                className={`text-base xl:text-lg transition-colors min-w-fit ${
                  pathname === link
                    ? "text-primary underline font-600 underline-offset-8"
                    : "hover:text-primary"
                }`}
              >
                {link ? (
                  <Link to={link}>{label}</Link>
                ) : (
                  <button onClick={action}>{label}</button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="h-[16px] w-[16px] self-center md:hidden text-accent"
        >
          <img src={isMenuOpen ? close : menu} alt="Hamburger Menu" />
        </button>
      </nav>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden w-screen h-screen bg-surface opacity-80 backdrop-blur-xl fixed top-0 left-0 z-30"
        />
      )}
      <aside
        ref={mobileMenu}
        style={{
          background: "linear-gradient(90deg, #FFF 0%, #FFF 49%, #FFF 100%)",
          boxShadow: "0px 0px 26px 0px rgba(0, 0, 0, 0.10)",
        }}
        className="md:hidden h-screen w-[200px] z-40 fixed top-0 right-0 pt-[120px] px-6 pb-4 translate-x-full transition-transform"
      >
        <ul className="flex gap-10 flex-col justify-center">
          {HEADER_LINKS.map(({ label, link, action }) => (
            <li
              onClick={() => setIsMenuOpen(false)}
              key={label}
              className={`text-base xl:text-lg transition-colors ${
                pathname === link
                  ? "text-primary underline font-600 underline-offset-8"
                  : "text-heading hover:text-primary"
              }`}
            >
              {link ? (
                <Link to={link}>{label}</Link>
              ) : (
                <button onClick={action}>{label}</button>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Header;

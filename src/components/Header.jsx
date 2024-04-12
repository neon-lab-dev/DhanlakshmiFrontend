import React from 'react';

import logo from '../assets/icons/dhanlakshami.svg';
import menu from '../assets/icons/menu.svg';

const Header = () => {
  return (
    <nav className="flex justify-between border py-[0.625rem] shadow md:my-[40px]">
      <div className="flex items-center">
        <img src={logo} alt="Dhanlakshmi" />
        <div className="W-[12.0625rem] ml-[0.85rem]">
          <p className="text-accent font-800 text-[20px] leading-[16.15px] mb-1">
            Dhanlakshmi Organics
          </p>
          <p className="text-primary text-[0.6875rem] leading-[16.15px] font-500">
            Let’s Build Organic
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <ul className="flex">
          <li>Home</li>
          <li>Products</li>
          <li>Become a Seller</li>
          <li>About us</li>
        </ul>
      </div>

      <div className="h-[16px] w-[16px] self-center md:hidden">
        <img src={menu} alt="Hamburger Menu" />
      </div>
    </nav>
  );
};

export default Header;

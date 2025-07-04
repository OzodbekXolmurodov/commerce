import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Frame 168.svg";
import { CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-[185px] h-[41px]" />
        </div>
        <nav className="flex gap-[75px]">
          <NavLink className="w-[48px] h-[28px] text-[16px] font-medium" to="/">
            Home
          </NavLink>
          <NavLink
            className="w-[48px] h-[28px] text-[16px] font-medium"
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className="w-[48px] h-[28px] text-[16px] font-medium"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="w-[48px] h-[28px] text-[16px] font-medium"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-[45px]">
          <CiSearch className="text-gray-900 hover:text-gray-900 transition text-[28px]" />
          <CiHeart className="text-gray-900 hover:text-gray-900 transition text-[28px]" />
          <CiShoppingCart className="text-gray-900 hover:text-gray-900 transition text-[28px]" />
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);

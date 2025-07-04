import React from "react";
import futerlogo from "@/images/Funiro..svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-12  pt-10 pb-4">
      <hr className="border-gray-300 mb-8" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <img src={futerlogo} alt="Logo" className="mb-15 w-32" />
          <p className="text-gray-600 text-sm">
            400 University Drive Suite 200
            <br />
            Coral Gables, FL 33134 USA
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3 text-[#B88E2F]">Links</h2>
          <ul className="flex flex-col gap-5">
            <li>
              <NavLink
                className="text-gray-700 hover:text-[#B88E2F] transition"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-gray-700 hover:text-[#B88E2F] transition"
                to="/shop"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-gray-700 hover:text-[#B88E2F] transition"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-gray-700 hover:text-[#B88E2F] transition"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3 text-[#B88E2F]">Help</h2>
          <ul className="flex flex-col gap-5 text-gray-700">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3 text-[#B88E2F]">
            Newsletter
          </h2>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#B88E2F]"
            />
            <button className="bg-[#B88E2F] text-white px-3 py-2 rounded hover:bg-[#a07623] transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="border-gray-300 my-8 w-[1250px] mx-auto" />
      <div className="container mx-auto text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default React.memo(Footer);

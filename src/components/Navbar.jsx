import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/constants.js";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} h-[100px] w-full flex items-center py-5 z-20 sticky top-0 bg-primary`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex flex-1 items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[75%] sm:w-[55%] object-cover"
          />
          <p className="text-white text-[16px] sm:text-[18px] xs:text-[14px] font-bold cursor-pointer">
            Chirag Jhajjaria
          </p>
        </Link>
        <ul className="list-none hidden flex-1 sm:flex justify-end flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menu}
            alt="Menu"
            className="w-[25px] h-[25px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } flex-col h-[100vh] p-6 black-gradient absolute z-10  top-0 right-0 min-w-[25vh] rounded-xl`}
          >
            <img
              src={close}
              alt="Close"
              className="w-[25px] h-[25px] object-contain cursor-pointer mb-8 "
              onClick={() => setToggle(!toggle)}
            />
            <ul className="list-none flex flex-col justify-end items-start gap-5">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={` text-secondary text-[18px] font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

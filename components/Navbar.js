"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between pt-10 pb-14 px-5 sm:py-14 text-2xl w-full">
      <div className="text-3xl">Deepanshu</div>
      <div className="hidden sm:block">
        <ul className="sm:flex gap-8">
          <li>About</li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <RxHamburgerMenu
        className="sm:hidden w-7 cursor-pointer"
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 right-5 bg-white shadow-md rounded-lg p-5">
          <ul className="flex flex-col gap-4">
            <li>About</li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

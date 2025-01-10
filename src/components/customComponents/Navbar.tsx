"use client";

import React, { useState, useEffect, useRef } from "react";
import { List } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a `utils` file with `cn` from shadcn
import Image from "next/image";
import LOGO from "../../../public/assets/saviourLogo2.png" // Adjust path if necessary


const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-colors duration-300 ",
        scrolled ? "bg-white " : "bg-white"
      )}
    >
      <div className="container  mx-auto flex bg-white bg-opacity-100  items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="#Hero" className="flex items-center space-x-2">
          <Image
            src={LOGO}
            alt="Logo"
            width={110} // You can set the width
            height={32} // You can set the height
            className="object-contain overflow-hidden" // Ensures the logo doesn't get distorted
          /> 
          {/* <h2 className="text-white font-bold">Winter Program</h2> */}
        </a>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="text-black hover:text-[#ff0000]">
                Home
              </a>
            </li>
            <li>
              <a href="#mentor" className="text-black hover:text-[#ff0000]">
              About Us 

              </a>
            </li>
            <li>
              <a href="#trainingcontent" className="text-black hover:text-[#ff0000]">
              Training Content
              </a>
            </li>
            <li>
              <a href="#projects" className="text-black hover:text-[#ff0000]">
              Projects
              </a>
            </li>
            <li>
              <a href="#placements" className="text-black hover:text-[#ff0000]">
              Placements 
              </a>
            </li>
            <li>
              <a href="#careertransformation" className="text-black hover:text-[#ff0000]">
              Career Transition

              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <List className="h-6 w-6" />
        </button> 

        {/* Call to Action Button */}
        <a
          href="https://rzp.io/rzp/R36lbP1" target="blank"
          className="hidden lg:block bg-[#ff0000] text-white px-4 py-2 rounded-lg hover:shadow-black hover:shadow-md"
        >
          Apply Now
        </a>
      </div>

{/* Mobile Menu */}
{isMobileMenuOpen && (
  <div
    ref={menuRef}
    className="lg:hidden absolute right-4 top-full bg-white w-64 shadow-md z-40"
  >
    <div className="p-4">
      <ul className="space-y-4">
        <li>
          <a
            href="#hero"
            className="block hover:text-red-600"
            onClick={closeMobileMenu}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#mentor"
            className="block hover:text-red-600"
            onClick={closeMobileMenu}
          >
           About Us 
          </a>
        </li>
        <li>
          <a
            href="#trainingcontent"
            className="block hover:text-red-600"
            onClick={closeMobileMenu}
          >
            Training Content
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="block hover:text-red-600"
            onClick={closeMobileMenu}
          >
              Projects
          </a>
        </li>
        <li>
          <a
            href="#placements"
            className="block hover:text-red-600"
            onClick={closeMobileMenu}
          >
            Placements 
          </a>
        </li>
        <li>
          <a
            href="#careertransformation"
            className="block hover:text-red-600"
            onClick={closeMobileMenu}
          >
             Career Transition 
          </a>
        </li>
      </ul>
      <a
        href="#participatenow"
        className="block mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-center"
        onClick={closeMobileMenu}
      >
        Apply Now
      </a>
    </div>
  </div>
)}

    </header>
  );
};

export default Navbar;

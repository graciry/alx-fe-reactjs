import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-[#3E2723] text-white shadow-lg z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-2xl font-bold">Pure Treats Cakes & Bakery</div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-[#3E2723] md:bg-transparent md:flex items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 text-lg">
            <li className="w-full md:w-auto">
              <a
                href="#home"
                className="block px-6 py-2 text-white hover:text-[#D6A679] transition"
              >
                Home
              </a>
            </li>
            <li className="w-full md:w-auto">
              <a
                href="#products"
                className="block px-6 py-2 text-white hover:text-[#D6A679] transition"
              >
                Products
              </a>
            </li>
            <li className="w-full md:w-auto">
              <a
                href="#about"
                className="block px-6 py-2 text-white hover:text-[#D6A679] transition"
              >
                About Us
              </a>
            </li>
            <li className="w-full md:w-auto">
              <a
                href="#menu"
                className="block px-6 py-2 text-white hover:text-[#D6A679] transition"
              >
                Menu
              </a>
            </li>
            <li className="w-full md:w-auto">
              <a
                href="#contact"
                className="block px-6 py-2 text-white hover:text-[#D6A679] transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

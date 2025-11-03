import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-full relative overflow-hidden">
      <header className="container mx-auto max-w-7xl relative bg-white shadow-md z-50 rounded-bl-[2rem]">
        {/* Left Vertical Orange Curve with Gradient */}
        <div className="absolute top-0 left-0 h-full w-2 bg-orange-400 rounded-tl-[2rem] rounded-bl-[2rem] z-0" />

        {/* Top Bar */}
        <div className="relative z-10 flex items-center justify-between px-4 md:px-16 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/">
              <img
                src="/images/logo.webp"
                alt="Inventive Logo"
                className="h-8 md:h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-10 font-medium text-black text-lg">
            <Link
              to="/about"
              className="hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <Link
              to="/retrofit-emission-control-device-recd"
              className="hover:text-orange-500 transition-colors"
            >
              Vayu Pure RECD
            </Link>
            <Link
              to="/dual-fuel-kit"
              className="hover:text-orange-500 transition-colors"
            >
              Dual-Fuel Kit
            </Link>
            <Link
              to="/gas-ganset"
              className="hover:text-orange-500 transition-colors"
            >
              Gas Ganset
            </Link>
            <Link
              to="/biogas"
              className="hover:text-orange-500 transition-colors"
            >
              Bio Gas
            </Link>
            <Link
              to="/career"
              className="hover:text-orange-500 transition-colors"
            >
              Career
            </Link>
            <Link
              to="/Contact"
              className="hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop CTA Button */}
          <Link to="/contact" className="hidden md:block">
            <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white text-xl px-5 py-2 rounded-xl font-semibold shadow hover:scale-105 transition-transform">
              Get in touch
            </button>
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <img
                src="/images/logo.webp"
                alt="Inventive Logo"
                className="h-8 w-auto"
              />
              <button
                onClick={toggleMenu}
                className="w-8 h-8 flex items-center justify-center"
                aria-label="Close menu"
              >
                <span className="w-6 h-0.5 bg-black rotate-45 absolute"></span>
                <span className="w-6 h-0.5 bg-black -rotate-45 absolute"></span>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex flex-col p-6 space-y-6">
              <Link
                to="/about"
                className="text-lg font-medium text-black hover:text-orange-500 transition-colors border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/retrofit-emission-control-device-recd"
                className="text-lg font-medium text-black hover:text-orange-500 transition-colors border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Vayur Pure RECD
              </Link>
              <Link
                to="/dual-fuel-kit"
                className="text-lg font-medium text-black hover:text-orange-500 transition-colors border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Dual-Fuel Kit
              </Link>
              <Link
                to="/career"
                className="text-lg font-medium text-black hover:text-orange-500 transition-colors border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Career
              </Link>
              <Link
                to="/gas-ganset"
                className="text-lg font-medium text-black hover:text-orange-500 transition-colors border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Gas Ganset
              </Link>
              <Link
                to="/biogas"
                className="text-lg font-medium text-black hover:text-orange-500 transition-colors border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Bio Gas
              </Link>
              <Link
                to="/Contact"
                className="text-lg font-medium text-black hover:text-orange-500 transition-colors border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Contact
              </Link>

              {/* Mobile CTA Button */}
              <Link to="/contact" onClick={toggleMenu}>
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white text-lg px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform mt-6">
                  Get in touch
                </button>
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Orange Bar with Gradient and Curve */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-400 rounded-bl-[2rem] rounded-br-[2rem] z-0" />
      </header>
    </div>
  );
};

export default Navbar;

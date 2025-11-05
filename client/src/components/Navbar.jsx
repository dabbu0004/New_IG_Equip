import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items configuration
  const navItems = [
    { path: "/about", label: "About" },
    { path: "/retrofit-emission-control-device-recd", label: "Vayu Pure RECD" },
    { path: "/dual-fuel-kit", label: "Dual-Fuel Kit" },
    { path: "/gas-ganset", label: "Gas Ganset" },
    { path: "/biogas", label: "Bio Gas" },
    { path: "/career", label: "Career" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Reusable Navigation Link Component
  const NavLink = ({ item, className = "", onClick = null }) => (
    <Link
      to={item.path}
      className={`hover:text-orange-500 transition-colors ${className}`}
      onClick={onClick}
    >
      {item.label}
    </Link>
  );

  // Reusable CTA Button Component
  const CTAButton = ({ className = "", onClick = null }) => (
    <Link to="/contact" className={className} onClick={onClick}>
      <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-5 py-2 rounded-xl font-semibold shadow hover:scale-105 transition-transform">
        Get in touch
      </button>
    </Link>
  );

  // Hamburger Menu Icon Component
  const HamburgerIcon = () => (
    <button
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none z-20"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen
              ? index === 0
                ? "rotate-45 translate-y-2"
                : index === 1
                ? "opacity-0"
                : "-rotate-45 -translate-y-2"
              : ""
          }`}
        />
      ))}
    </button>
  );

  // Close Menu Icon Component
  const CloseIcon = () => (
    <button
      onClick={toggleMenu}
      className="w-8 h-8 flex items-center justify-center"
      aria-label="Close menu"
    >
      <span className="w-6 h-0.5 bg-black rotate-45 absolute" />
      <span className="w-6 h-0.5 bg-black -rotate-45 absolute" />
    </button>
  );

  return (
    <div className="max-w-full relative overflow-hidden">
      <header className="container mx-auto max-w-7xl relative bg-white shadow-md z-50 rounded-bl-[2rem]">
        {/* Left Vertical Orange Curve */}
        <div className="absolute top-0 left-0 h-full w-2 bg-orange-300 rounded-tl-[2rem] rounded-bl-[2rem] z-0" />

        {/* Top Bar */}
        <div className="relative z-10 flex items-center justify-between px-4 md:px-16 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="/images/logo.webp"
                alt="Inventive Logo"
                className="h-8 md:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 font-medium text-black text-lg">
            {navItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <HamburgerIcon />

          {/* Desktop CTA Button */}
          <CTAButton className="hidden md:block" />
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
              <CloseIcon />
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex flex-col p-6 space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  item={item}
                  className="text-xl font-medium text-black pb-1 mb-2 border-b-2 w-fit border-gray-800"
                  onClick={closeMenu}
                />
              ))}

              {/* Mobile CTA Button */}
              <CTAButton className="w-full mt-3" onClick={closeMenu} />
            </nav>
          </div>
        </div>

        {/* Bottom Orange Bar */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-300 rounded-bl-[2rem] rounded-br-[2rem] z-0" />
      </header>
    </div>
  );
};

export default Navbar;

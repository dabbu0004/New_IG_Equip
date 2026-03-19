import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { path: "/about", label: "About" },
    { path: "/retrofit-emission-control-device-recd", label: "Vayu Pure RECD" },
    { path: "/dual-fuel-kit", label: "Dual-Fuel Kit" },
    { path: "/gas-ganset", label: "Gas Ganset" },
  ];

  const careerDropdownItems = [
    { path: "/ocems", label: "OCEMS" },
    { path: "/blogs", label: "Blogs/News" },
    { path: "/gallery", label: "Gallery" },
    { path: "/career", label: "Career" },
  ];

  const productsDropdownItems = [
    { path: "/products/flare-system", label: "Flare System" },
    {
      path: "/products/biogas-membrane-holder",
      label: "Biogas Membrane Holder",
    },
    { path: "/products/digester-technology", label: "Digester & Technology" },
    { path: "/products/co2-removal", label: "Co2 Removal" },
    { path: "/products/cbg-plant-support", label: "CBG Plant & Support" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
    setIsCareerOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const NavLink = ({ item, className = "", onClick = null }) => (
    <Link
      to={item.path}
      className={`hover:text-orange-500 transition-colors ${className}`}
      onClick={onClick}
    >
      {item.label}
    </Link>
  );

  const CTAButton = ({ className = "", onClick = null }) => (
    <Link to="/contact" className={className} onClick={onClick}>
      <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-5 py-2 rounded-xl font-semibold shadow hover:scale-105 transition-transform">
        Get in touch
      </button>
    </Link>
  );

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

  const CareerDropdown = () => (
    <div
      className="relative career-dropdown"
      style={{ zIndex: 60 }}
      onMouseEnter={() => setIsCareerOpen(true)}
      onMouseLeave={() => setIsCareerOpen(false)}
    >
      <button
        className="hover:text-orange-500 transition-colors flex items-center space-x-1 focus:outline-none career-dropdown-btn"
        aria-haspopup="menu"
        aria-expanded={isCareerOpen}
        onClick={() => setIsCareerOpen((v) => !v)}
        type="button"
      >
        <span>Other</span>
        <IoChevronDown
          className={`w-4 h-4 transition-transform ${isCareerOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute top-4 left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 z-[70] ${isCareerOpen ? "" : "hidden"}`}
        role="menu"
      >
        <div className="py-2">
          {careerDropdownItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const ProductsDropdown = () => (
    <div
      className="relative products-dropdown"
      style={{ zIndex: 60 }}
      onMouseEnter={() => setIsProductsOpen(true)}
      onMouseLeave={() => setIsProductsOpen(false)}
    >
      <button
        className="hover:text-orange-500 transition-colors flex items-center space-x-1 focus:outline-none products-dropdown-btn"
        aria-haspopup="menu"
        aria-expanded={isProductsOpen}
        onClick={() => setIsProductsOpen((v) => !v)}
        type="button"
      >
        <span>Products</span>
        <IoChevronDown
          className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute top-4 left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 z-[70] ${isProductsOpen ? "" : "hidden"}`}
        role="menu"
      >
        <div className="py-2">
          {productsDropdownItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const MobileProductsDropdown = () => (
    <div className="w-full">
      <button
        className="flex items-center justify-between w-full text-xl font-medium text-black pb-1 mb-2 border-b-2 border-gray-800"
        onClick={toggleDropdown}
      >
        <span>Products</span>
        <IoChevronDown
          className={`w-4 h-4 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4 space-y-2 mb-4">
          {productsDropdownItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-lg font-medium text-gray-600 hover:text-orange-500 transition-colors py-1"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const MobileCareerDropdown = () => (
    <div className="w-full">
      <button
        className="flex items-center justify-between w-full text-xl font-medium text-black pb-1 mb-2 border-b-2 border-gray-800"
        onClick={toggleDropdown}
      >
        <span>Other</span>
        <IoChevronDown
          className={`w-4 h-4 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4 space-y-2 mb-4">
          {careerDropdownItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-lg font-medium text-gray-600 hover:text-orange-500 transition-colors py-1"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-full relative">
      <header className="container mx-auto max-w-full relative bg-white shadow-md rounded-bl-[2rem]">
        <div className="relative z-10 flex items-center justify-between px-4 md:px-16 py-4">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="/images/logo.webp"
                alt="Inventive Logo"
                className="h-8 md:h-12 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-10 font-medium text-black text-lg">
            {navItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
            <ProductsDropdown />
            <CareerDropdown />
          </nav>

          <HamburgerIcon />

          <CTAButton className="hidden md:block" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-300  z-0" />
      </header>
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full flex flex-col overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
              <img
                src="/images/logo.webp"
                alt="Inventive Logo"
                className="h-8 w-auto"
              />
              <CloseIcon />
            </div>
            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col p-6 space-y-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    item={item}
                    className="text-xl font-medium text-black pb-1 mb-2 border-b-2 w-fit border-gray-800"
                    onClick={closeMenu}
                  />
                ))}
                <MobileCareerDropdown />
                <MobileProductsDropdown />
                <div className="pt-4">
                  <CTAButton className="w-full" onClick={closeMenu} />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-4 md:px-20 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img
            src="/images/logo.webp"
            alt="Inventive Logo"
            className="w-28 md:w-36"
          />
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-center md:text-left text-sm font-medium text-gray-800">
          <span className="font-bold">Quick Links</span>
          <a href="/about" className="hover:text-orange-600">
            About
          </a>
          <a href="/dual-fuel-kit" className="hover:text-orange-600">
            Dual-Fuel Kit
          </a>
          <a
            href="/retrofit-emission-control-device-recd"
            className="hover:text-orange-600"
          >
            Vayu Pure RECD
          </a>
          <a href="/gas-ganset" className="hover:text-orange-600">
            Gas Ganset
          </a>
          <a href="/biogas" className="hover:text-orange-600">
            Bio Gas
          </a>
          <a href="/contact" className="hover:text-orange-600">
            Contact
          </a>
          <a href="/terms-and-conditions" className="hover:text-orange-600">
            Terms & Conditions
          </a>
          <a href="/privacy-policy" className="hover:text-orange-600">
            Privacy Policy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="text-sm text-gray-600">Follow Us</span>
          <a href="https://www.facebook.com/">
            <FaFacebookF className="text-blue-600 hover:scale-110" />
          </a>
          <a href="https://www.instagram.com/igequipment/">
            <FaInstagram className="text-pink-600 hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/company/igequipment-com/">
            <FaLinkedinIn className="text-blue-800 hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="border-t border-orange-200 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Address */}
          <div className="text-center md:text-left text-sm font-medium text-gray-800 mb-3 md:mb-0">
            21, Udyog Vihar, Ecotech-II, Udyog Vihar, Greater Noida, Uttar Pradesh 201306
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
              <FaPhone className="text-orange-600 text-xs" />
              <a href="tel:+918830317796" className="hover:text-orange-600">
                +91 8830317796
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
              <FaPhone className="text-orange-600 text-xs" />
              <a href="tel:+917042100426" className="hover:text-orange-600">
                +91 7042100426
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

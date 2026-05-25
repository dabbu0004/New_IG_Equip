import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-100 pt-10 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 lg:gap-20 mb-8">
          
          {/* Left Column: Logo & Brand Info (Takes up 2 columns) */}
          <div className="lg:col-span-2 flex flex-col">
            <Link to="/" className="mb-6 cursor-pointer">
              <img
                src="/images/logo.webp"
                alt="Inventive Logo"
                className="h-[5rem] w-auto"
              />
            </Link>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm mb-6">
              India's Leading Gas Energy Solutions Provider. Powering your business with clean, efficient, and future-ready energy systems.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-5 text-gray-400 mb-8">
              <a href="https://www.facebook.com/InventiveGasEquipment" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors cursor-pointer">
                <FiFacebook className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.instagram.com/igequipment/" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors cursor-pointer">
                <FiInstagram className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.linkedin.com/company/igequipment-com/" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors cursor-pointer">
                <FiLinkedin className="w-[18px] h-[18px]" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors cursor-pointer">
                <FiTwitter className="w-[18px] h-[18px]" />
              </a>
            </div>

          
          </div>

          {/* Column 1: Products */}
          <div className="flex md:pt-6 flex-col">
            <h4 className="text-[15px] font-bold text-gray-700 mb-6">Products</h4>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link to="/products/vayu-pure-recd" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors flex items-center gap-2 cursor-pointer">
                  Vayu Pure RECD <span className="text-[10px] font-bold bg-green-50 text-green-600 px-2 py-0.5 rounded-full">New</span>
                </Link>
              </li>
              <li><Link to="/products/dfk" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Dual-Fuel Kits</Link></li>
              <li><Link to="/products/gas-genset" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Gas Gensets</Link></li>
              <li><Link to="/products/double-membrane-gas-holder" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Biogas Holders</Link></li>
              <li><Link to="/products/flaring-system" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Flaring Systems</Link></li>
            </ul>
          </div>

          {/* Column 2: Services & Solutions */}
          <div className="flex md:pt-6  flex-col">
            <h4 className="text-[15px] font-bold text-gray-700 mb-6">Services</h4>
            <ul className="flex flex-col space-y-3">
              <li><Link to="/services/air-pollution" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Air Pollution Control</Link></li>
              <li><Link to="/services/water-pollution" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Water Treatment</Link></li>
              <li><Link to="/services/biogas" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Biogas Solutions</Link></li>
              <li><Link to="/services/amc" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">AMC Support</Link></li>
              <li><Link to="/services/consulting" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Engineering Consulting</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex  md:pt-6 flex-col">
            <h4 className="text-[15px] font-bold text-gray-700 mb-6">Company</h4>
            <ul className="flex flex-col space-y-3">
              <li><Link to="/about" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">About Inventive</Link></li>
              <li><Link to="/careers" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Careers</Link></li>
              <li><Link to="/gallery" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Project Gallery</Link></li>
              <li><Link to="/contact" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Contact Us</Link></li>
              <li><Link to="/partner" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Partner with us</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources & Support */}
          <div className="flex  md:pt-6 flex-col">
            <h4 className="text-[15px] font-bold text-gray-700 mb-6">Explore</h4>
            <ul className="flex flex-col space-y-3">
              <li><Link to="/blogs" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Official Blog</Link></li>
              <li><Link to="/case-studies" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Case Studies</Link></li>
              <li><Link to="/newsletter" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer">Newsletter</Link></li>
              <li><a href="tel:+918830317796" className="text-[14px] text-gray-500 hover:text-[#f48131] transition-colors cursor-pointer flex items-center gap-1">Support Docs <span className="text-[11px] ml-1">↗</span></a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-gray-500">
            © {new Date().getFullYear()} Inventive Gas Equipment — All rights reserved.
          </p>
          <a
            href="https://creativeoncoffee.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] md:text-sm font-semibold text-gray-500 hover:text-[#f48131] transition-colors"
          >
            Developed by Creative On Coffee
          </a>

          
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-[13px] text-gray-500 hover:text-[#111111] transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-[13px] text-gray-500 hover:text-[#111111] transition-colors cursor-pointer">
              Terms
            </Link>
            <Link to="/code-of-conduct" className="text-[13px] text-gray-500 hover:text-[#111111] transition-colors cursor-pointer">
              Code of conduct
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import React from "react";

const Navbar2 = () => {
  return (
    <header className="relative">
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        {/* Left Logo */}
        <div className="flex items-center">
          <img
            src="/images/vayu-pure.png"
            alt="Vayu pure logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-medium text-black">
          <li className="cursor-pointer hover:text-blue-600">Company</li>
          <li className="cursor-pointer hover:text-blue-600">
            Emission Control Device
          </li>
          <li className="cursor-pointer hover:text-blue-600">Resources</li>
        </ul>

        {/* Right Button */}
        <button className="bg-gradient-to-r from-blue-700 to-green-400 text-white px-6 py-2 rounded-xl font-medium shadow-md hover:opacity-90">
          Get in touch
        </button>
      </nav>

      {/* Bottom Border Gradient */}
      <div className="h-2 w-full rounded-bl-3xl bg-gradient-to-r from-blue-500 to-green-400"></div>
    </header>
  );
};

export default Navbar2;

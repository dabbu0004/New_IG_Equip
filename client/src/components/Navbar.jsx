import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { 
  FiWind, FiLayers, FiZap, FiDatabase, FiAlertCircle, 
  FiFilter, FiDroplet, FiCloudOff, FiBox, FiTarget, 
  FiBriefcase, FiFileText, FiMail, FiInfo 
} from "react-icons/fi";
import homeProductsRangeData from "../data/HomeProductsRangeData";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  let closeTimeout;

  const handleMouseEnter = (menu) => {
    clearTimeout(closeTimeout);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    // 200ms delay ensures the menu doesn't flicker close when moving the mouse from the button to the menu
    closeTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); 
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
    setActiveDropdown(null);
  };

  const getProductIcon = (title) => {
    switch (title) {
      case "Vayu Pure RECD":
      case "RECD Device":
        return <FiWind className="w-6 h-6" />;
      case "DFK":
      case "Dual-Fuel Kits":
        return <FiLayers className="w-6 h-6" />;
      case "GAS GENSET":
      case "Gas Gensets":
        return <FiZap className="w-6 h-6" />;
      case "Double Membrane Gas Holder":
        return <FiDatabase className="w-6 h-6" />;
      case "Flaring System":
        return <FiAlertCircle className="w-6 h-6" />;
      case "H2S Scrubber":
      case "H₂S Scrubber":
        return <FiFilter className="w-6 h-6" />;
      case "Dehumidifier":
        return <FiDroplet className="w-6 h-6" />;
      case "CO2 Removal System":
        return <FiCloudOff className="w-6 h-6" />;
      case "RO+UF Plant":
        return <FiBox className="w-6 h-6" />;
      default:
        return <FiTarget className="w-6 h-6" />;
    }
  };

  const productNavItems = homeProductsRangeData.map((product) => ({
    path: product.link,
    label: product.title,
    desc: product.description,
    icon: getProductIcon(product.title),
  }));

  const getProductByTitle = (title) =>
    productNavItems.find((item) => item.label === title);

  const productGroups = [
      {
      title: "Biogas Equipment",
      items: [
        "Double Membrane Gas Holder",
        "CO2 Removal System",
        "Flaring System",
        "H₂S Scrubber",
        "H2S Scrubber",
        "Dehumidifier",
      ].map(getProductByTitle).filter(Boolean),
    },
    {
      title: "Air Pollution",
      items: [
        "Gas Gensets",
        "Dual-Fuel Kits",
        "RECD Device",
      ].map(getProductByTitle).filter(Boolean),
    },
  
    {
      title: "Others",
      items: ["RO+UF Plant"].map(getProductByTitle).filter(Boolean),
    },
  ];

  // --- Navigation Data Structure (Exact matches to your request) ---
  const navData = {
    about: {
      title: "ABOUT US",
      items: [
        { path: "/about", label: "Company Profile", desc: "Building the trust infrastructure for a seamless clean energy economy.", icon: <FiInfo className="w-6 h-6" /> },
                { path: "/gallery", label: "Gallery", desc: "Explore our projects and achievements.", icon: <FiInfo className="w-6 h-6" /> },
      ],
      columns: "grid-cols-1 md:grid-cols-3"
    },
    products: {
      title: "OUR PRODUCTS",
      items: productNavItems,
      groups: productGroups,
      columns: "grid-cols-1 md:grid-cols-3"
    },
    services: {
      title: "OUR SERVICES",
      items: [
        { path: "/services/air-pollution", label: "Air Pollution Reduction Solutions", desc: "Comprehensive emission control and monitoring.", icon: <FiWind className="w-6 h-6" /> },
        { path: "/services/water-pollution", label: "Water Pollution", desc: "Advanced industrial water treatment solutions.", icon: <FiDroplet className="w-6 h-6" /> },
        { path: "/services/biogas", label: "Biogas Solutions", desc: "End-to-end biogas generation and management.", icon: <FiTarget className="w-6 h-6" /> },
      ],
      columns: "grid-cols-1 md:grid-cols-3"
    },
    other: {
      title: "OTHER LINKS",
      items: [
        { path: "/careers", label: "Careers", desc: "Forge your path in a high-growth environment.", icon: <FiBriefcase className="w-6 h-6" /> },
        { path: "/blogs", label: "Blogs", desc: "Latest updates, case studies, and industry insights.", icon: <FiFileText className="w-6 h-6" /> },
        { path: "/newsletter", label: "News Letter", desc: "Subscribe to our monthly updates and news.", icon: <FiMail className="w-6 h-6" /> },
      ],
      columns: "grid-cols-1 md:grid-cols-3"
    }
  };

  // --- Reusable Mega Menu Component ---
  const MegaMenu = ({ data, activeKey }) => {
    if (activeDropdown !== activeKey) return null;

    const isProductsMenu = activeKey === "products";

    return (
      <div 
        // top-full forces it to strictly sit BELOW the header bar, avoiding any overlap
        className="absolute top-full left-0 w-full z-50 cursor-default bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-t border-gray-100"
        onMouseEnter={() => handleMouseEnter(activeKey)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1300px] mx-auto px-8 py-10  md:-mt-5 relative">
          <h3 className="text-xl font-bold text-[#F26413] uppercase tracking-wider mb-3">
            {data.title}
          </h3>
          
          {isProductsMenu ? (
            <div className={`grid ${data.columns} gap-x-12 gap-y-8`}>
              {data.groups.map((group, groupIndex) => (
                <div
                  key={group.title}
                  className={`${groupIndex === 0 ? "" : "md:border-l md:border-gray-200 md:pl-8"}`}
                >
                  <h4 className="text-md font-semibold text-gray-800 uppercase tracking-wider mb-2">
                    {group.title}
                  </h4>
                  <div className="space-y-1">
                    {group.items.map((item, idx) => (
                      <Link
                        key={`${group.title}-${idx}`}
                        to={item.path}
                        onClick={closeMenu}
                        className="flex items-start gap-4 p-2 -ml-2 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className="text-gray-400 group-hover:text-[#F26413] transition-colors mt-1">
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="text-[16px] font-semibold text-gray-700 mb-1 group-hover:text-[#F26413] transition-colors">
                            {item.label}
                          </h5>
                          <p className="text-sm text-gray-500 leading-relaxed font-medium line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`grid ${data.columns} gap-x-12 gap-y-5`}>
              {data.items.map((item, idx) => (
                <Link 
                  key={idx} 
                  to={item.path}
                  onClick={closeMenu}
                  className="flex items-start gap-4 p-2 -ml-2 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="text-gray-400 group-hover:text-[#F26413] transition-colors mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-1 group-hover:text-[#F26413] transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    // Outer relative wrapper ensures the absolute Mega Menu aligns exactly with this header
    <header className="w-full relative z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" onClick={closeMenu}>
            <img
              src="/images/logo.webp"
              alt="Inventive Logo"
              className="h-10 md:h-14 w-auto"
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-0.5 h-full">
          
          <Link 
            to="/" 
            className="px-4 py-2 text-gray-600 font-medium md:font-semibold hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
          >
            Home
          </Link>

          <div 
            // The padding here acts as a bridge so the mouse doesn't fall off when moving to the menu
            className="relative flex items-center py-4 px-0.5 -my-4"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 px-4 py-2 font-medium md:font-semibold rounded-lg transition-colors ${activeDropdown === 'about' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100'}`}>
              About Us <IoChevronDown className={`transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div 
            className="relative flex items-center py-4 px-0.5 -my-4"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 px-4 py-2 font-medium md:font-semibold rounded-lg transition-colors ${activeDropdown === 'products' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100'}`}>
              Products <IoChevronDown className={`transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div 
            className="relative flex items-center py-4 px-0.5 -my-4"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 px-4 py-2 font-medium md:font-semibold rounded-lg transition-colors ${activeDropdown === 'services' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100'}`}>
              Services <IoChevronDown className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div 
            className="relative flex items-center py-4 px-0.5 -my-4"
            onMouseEnter={() => handleMouseEnter('other')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 px-4 py-2 font-medium md:font-semibold rounded-lg transition-colors ${activeDropdown === 'other' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100'}`}>
              Other <IoChevronDown className={`transition-transform duration-300 ${activeDropdown === 'other' ? 'rotate-180' : ''}`} />
            </button>
          </div>

        </nav>

        {/* Right: CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/contact">
            <button className="bg-[#f48131] text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-[#F26413] hover:shadow-lg transition-all">
              Get call
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {/* Render the active Mega Menu component DIRECTLY inside the header so top-full works */}
      {activeDropdown && (
        <MegaMenu data={navData[activeDropdown]} activeKey={activeDropdown} />
      )}

      {/* --- Mobile Menu Drawer --- */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <img src="/images/logo.webp" alt="Inventive Logo" className="h-8 w-auto" />
            <button onClick={closeMenu} className="w-8 h-8 flex items-center justify-center">
              <span className="w-6 h-0.5 bg-black rotate-45 absolute" />
              <span className="w-6 h-0.5 bg-black -rotate-45 absolute" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto p-6 space-y-1">
            <Link to="/" onClick={closeMenu} className="block py-3 text-lg font-semibold  text-gray-900 border-b border-gray-100">
              Home
            </Link>

            {/* Mobile Accordions */}
            {Object.keys(navData).map((key) => (
              <div key={key} className="border-b border-gray-100">
                <button 
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                  className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-900"
                >
                  <span className="capitalize">{key === 'other' ? 'Other' : navData[key].title.toLowerCase().replace('our ', '')}</span>
                  <IoChevronDown className={`transition-transform ${mobileExpanded === key ? "rotate-180" : ""}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === key ? "max-h-[800px]" : "max-h-0"}`}>
                  <div className="pb-4 pl-4 space-y-3">
                    {key === "products" ? (
                      navData.products.groups.map((group, groupIndex) => (
                        <div
                          key={group.title}
                          className={`${groupIndex === 0 ? "" : "border-t border-gray-200 pt-3"}`}
                        >
                          <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                            {group.title}
                          </p>
                          <div className="space-y-2">
                            {group.items.map((item, idx) => (
                              <Link
                                key={`${group.title}-${idx}`}
                                to={item.path}
                                onClick={closeMenu}
                                className="block text-gray-600 hover:text-[#f48131] font-medium"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      navData[key].items.map((item, idx) => (
                        <Link 
                          key={idx} 
                          to={item.path} 
                          onClick={closeMenu}
                          className="block text-gray-600 hover:text-[#f48131] font-medium"
                        >
                          {item.label}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <Link to="/contact" onClick={closeMenu}>
              <button className="w-full bg-[#f48131] text-white py-3 rounded-xl font-bold shadow hover:bg-[#F26413]">
                Book a Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const HomeProductRange = () => {
  const productsButtonRef = useRef(null);

  useEffect(() => {
    const button = productsButtonRef.current;

    if (!button) return undefined;

    const handleEnter = () => {
      gsap.to(button, { scale: 1.04, y: -2, duration: 0.25, ease: "power2.out" });
    };

    const handleLeave = () => {
      gsap.to(button, { scale: 1, y: 0, duration: 0.25, ease: "power2.out" });
    };

    const handleDown = () => {
      gsap.to(button, { scale: 0.98, duration: 0.12, ease: "power2.out" });
    };

    const handleUp = () => {
      gsap.to(button, { scale: 1.04, duration: 0.12, ease: "power2.out" });
    };

    button.addEventListener("mouseenter", handleEnter);
    button.addEventListener("mouseleave", handleLeave);
    button.addEventListener("mousedown", handleDown);
    button.addEventListener("mouseup", handleUp);

    return () => {
      button.removeEventListener("mouseenter", handleEnter);
      button.removeEventListener("mouseleave", handleLeave);
      button.removeEventListener("mousedown", handleDown);
      button.removeEventListener("mouseup", handleUp);
    };
  }, []);

  // Product Data based on your image
  const products = [
    {
      id: 1,
      category: "Power Generation",
      title: "Gas Gensets",
      description: "15 KVA to 500 KVA natural gas and biogas-powered generators for industrial and commercial use.",
      image: "/images/image/NewHomeHero.png", // Replace with your actual image path
      link: "/products/gas-gensets"
    },
    {
      id: 2,
      category: "Fuel Conversion",
      title: "Dual-Fuel Kits",
      description: "Convert existing diesel generators to run on gas + diesel simultaneously. Save up to 40% on fuel costs.",
      image:  "/images/image/NewHomeHero.png", 
      link: "/products/dual-fuel-kits"
    },
    {
      id: 3,
      category: "Emission Control",
      title: "RECD Device",
      description: "CPCB-approved Retrofit Emission Control Devices to reduce particulate matter by up to 99%.",
      image:  "/images/image/NewHomeHero.png", 
      link: "/products/recd-device"
    },
    {
      id: 4,
      category: "Biogas Solutions",
      title: "Biogas Equipment",
      description: "Membrane gas holders, digesters, biogas conditioning and storage systems for sustainable energy.",
      image:  "/images/image/NewHomeHero.png", 
      link: "/products/biogas-equipment"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-gray-600 font-semibold text-sm tracking-wide block mb-2">
              Our Product Range
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-4">
              Core Solutions
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              End-to-end gas energy products engineered for reliability and fuel efficiency.
            </p>
          </div>
          
          <Link
            ref={productsButtonRef}
            to="/products"
            className="inline-flex items-center justify-center bg-[#f48131] text-white px-6 py-4 rounded-md text-xl font-extrabold shadow-md transition-shadow duration-300 will-change-transform"
          >
            View All Products
          </Link>
        </div>

        {/* Product Grid / Slider Track */}
        <div className="relative w-full group">
          
          {/* Optional: Left/Right decorative arrows just like the image */}
          <button className="hidden xl:flex absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-all z-10">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
             </svg>
          </button>
          <button className="hidden xl:flex absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-all z-10">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
               <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
             </svg>
          </button>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1  md:grid-cols-4 gap-4 md:gap-5">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex flex-col bg-white rounded-2xl overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-transparent hover:border-gray-100 transform transition-transform hover:scale-[1.03] origin-center"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-gray-50 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    {product.category}
                  </span>
                  <h4 className="text-xl md:text-2xl font-extrabold text-[#111111] mb-3">
                    {product.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-sm leading-relaxed mb-3 flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <Link 
                    to={product.link} 
                    className="inline-flex items-center gap-2 text-[#333333] font-bold text-sm md:text-sm hover:text-[#f48131] transition-colors mt-auto w-max"
                  >
                    Learn More 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-[#f48131]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeProductRange;
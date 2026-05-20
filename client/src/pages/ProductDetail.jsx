// src/pages/ProductDetail.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiCheckCircle, FiDownload, FiChevronLeft, FiChevronRight, FiMapPin, FiSettings, FiTool, FiHeadphones } from "react-icons/fi";
import { BsLightningCharge, BsDroplet, BsGearWideConnected, BsShieldCheck } from "react-icons/bs";
import { BiWrench } from "react-icons/bi";
import gsap from "gsap";

import homeProductsRangeData from "../data/HomeProductsRangeData";

const ProductDetail = () => {
  const { slug } = useParams();
  const product =
    homeProductsRangeData.find((item) => item.link === `/products/${slug}`) ||
    homeProductsRangeData[0];

  // Simple GSAP fade-in on mount
  useEffect(() => {
    gsap.fromTo(".fade-in-section", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, [slug]);


  // Map string icon names to actual React Icons
  const renderFeatureIcon = (iconName) => {
    switch(iconName) {
      case "capacity": return <BsLightningCharge className="text-3xl text-[#f48131]" />;
      case "emissions": return <BsDroplet className="text-3xl text-[#f48131]" />;
      case "efficiency": return <BsGearWideConnected className="text-3xl text-[#f48131]" />;
      case "reliability": return <BsShieldCheck className="text-3xl text-[#f48131]" />;
      case "maintenance": return <BiWrench className="text-3xl text-[#f48131]" />;
      default: return <FiSettings className="text-3xl text-[#f48131]" />;
    }
  };

  // Get 4 related products excluding the current one
  const relatedProducts = homeProductsRangeData
    .filter((item) => item.link !== product?.link)
    .slice(0, 4);

  return (
    <div className="w-full bg-[#fcfcfc] font-sans pb-20">
      
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full text-white pt-24 pb-16 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('${product?.heroBanner || "/images/ProductsBanner/gas-geset-banner.png"}')`
        }}
      >
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start fade-in-section">
            <div className="flex items-center text-gray-400 text-sm mb-6 font-medium tracking-wide">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/products" className="hover:text-white transition">Products</Link>
              <span className="mx-2">›</span>
              <span className="text-white">{product?.title}</span>
            </div>

            <span className="border border-gray-600 text-gray-300 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4">
              {product?.heroBadge}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {product?.title}
            </h1>
            
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              {product?.description}
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {(product?.heroChecklist || []).map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-200">
                  <FiCheckCircle className="text-[#f48131] w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#f48131] hover:bg-[#e06d1f] text-white px-8 py-3.5 rounded-md font-bold transition-all shadow-lg hover:shadow-[#f48131]/20">
                Request a Quote
              </button>
              <button className="flex items-center gap-2 border border-white hover:bg-white hover:text-black text-white px-8 py-3.5 rounded-md font-bold transition-all">
                Download Brochure <FiDownload />
              </button>
            </div>
          </div>

          {/* Right: Main Image & Thumbnails removed for banner-only hero */}

        </div>
      </section>

      {/* ================= FEATURES BAR ================= */}
      <section className="max-w-8xl mx-auto px-6 lg:px-12 -mt-8 relative z-20 fade-in-section">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          {(product?.features || []).map((feat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center w-full sm:w-[45%] lg:w-full pt-4 lg:pt-0 first:pt-0">
              <div className="mb-3">{renderFeatureIcon(feat.icon)}</div>
              <h4 className="font-bold text-gray-900 mb-1">{feat.title}</h4>
              <p className="text-sm text-gray-500">{feat.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OVERVIEW & SPECS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 fade-in-section">
        
        {/* Left: Overview */}
        <div className="lg:col-span-5 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100 w-max">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {product?.overviewText}
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                <BsDroplet className="text-[#f48131] text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Fuel Options</h4>
                <p className="text-gray-600 text-sm">{product?.fuelOptions}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                <FiSettings className="text-[#f48131] text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Applications</h4>
                <p className="text-gray-600 text-sm">{product?.applications}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(product?.keyBenefits || []).map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-[#f48131]">
                    <FiCheckCircle className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-medium text-gray-700 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Technical Specs (Expanded to fill space) */}
        <div className="lg:col-span-7 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100 w-max">Technical Specifications</h2>
          <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-gray-200 w-1/3">Parameter</th>
                  <th className="px-6 py-4 font-bold border-b border-gray-200">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {(product?.technicalSpecs || []).map((spec, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition">
                    <td className="px-6 py-3.5 font-medium text-gray-700">{spec.parameter}</td>
                    <td className="px-6 py-3.5 text-gray-600">{spec.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= INSTALLATION & SERVICE PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 fade-in-section">
        
        {/* Left: Where We Install */}
        <div className="lg:col-span-4 bg-[#f8fafc] rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Where We Install</h2>
          <ul className="flex flex-col gap-3 relative z-10">
            {(product?.installationRegions || []).map((region, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                <FiChevronRight className="text-[#f48131]" /> {region}
              </li>
            ))}
            <li className="text-[#f48131] font-bold text-sm mt-2 ml-1">...and many more</li>
          </ul>
          {/* Abstract Map Graphic Representation */}
          <div className="absolute right-[-20%] bottom-[-10%] w-[250px] opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="text-gray-900">
              <path d="M50 0 C 20 0, 0 20, 0 50 C 0 80, 20 100, 50 100 C 80 100, 100 80, 100 50 C 100 20, 80 0, 50 0 Z" />
            </svg>
          </div>
        </div>

        {/* Right: Service Process */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-gray-100 w-max">Our Service Process</h2>
          
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 w-full">
            {/* Process Steps */}
            {[
              { id: 1, title: "Consultation", desc: "Understanding your power needs.", icon: <FiSettings className="text-2xl" /> },
              { id: 2, title: "Solution Design", desc: "Recommending the right model.", icon: <BsGearWideConnected className="text-2xl" /> },
              { id: 3, title: "Manufacturing", desc: "Built with advanced tech.", icon: <FiTool className="text-2xl" /> },
              { id: 4, title: "Installation", desc: "On-site installation.", icon: <FiMapPin className="text-2xl" /> },
              { id: 5, title: "Support", desc: "24/7 technical support.", icon: <FiHeadphones className="text-2xl" /> }
            ].map((step, idx, arr) => (
              <div key={idx} className="flex flex-col items-center text-center w-[45%] md:w-1/5 relative">
                <div className="w-16 h-16 rounded-full bg-orange-50 border-2 border-orange-100 text-[#f48131] flex items-center justify-center mb-4 z-10 relative">
                  {step.icon}
                </div>
                {/* Connecting Line (Hidden on mobile wrapping) */}
                {idx !== arr.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] border-t-2 border-dashed border-gray-200 z-0"></div>
                )}
                <h4 className="font-bold text-gray-900 text-sm mb-1">{step.id}. {step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed px-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RELATED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-gray-200 fade-in-section">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#f48131] hover:text-white hover:border-[#f48131] transition">
              <FiChevronLeft />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#f48131] hover:text-white hover:border-[#f48131] transition">
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relProduct) => (
            <Link to={relProduct.link} key={relProduct.id} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-full aspect-[4/3] bg-gray-50 overflow-hidden relative">
                <img 
                  src={relProduct.image} 
                  alt={relProduct.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-900 mb-2">{relProduct.title}</h4>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{relProduct.description}</p>
                <span className="text-[#f48131] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <FiChevronRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;
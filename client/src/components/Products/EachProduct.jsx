import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiDownload,
  FiChevronRight,
  FiMapPin,
  FiSettings,
  FiTool,
  FiHeadphones,
  FiGrid,
  FiLayers,
  FiShield,
  FiUsers
} from "react-icons/fi";
import {
  BsLightningCharge,
  BsDroplet,
  BsGearWideConnected,
  BsShieldCheck,
} from "react-icons/bs";
import { BiWrench } from "react-icons/bi";
import gsap from "gsap";

import homeProductsRangeData from "../../data/HomeProductsRangeData";
import Faq from "../Faq";
import KeyFeatures from "./KeyFeatures";
import Clients from "../Clients";
import CtaBanner from "../CtaBanner";

const EachProduct = () => {
  const { slug } = useParams();
  const product =
    homeProductsRangeData.find((item) => item.link === `/products/${slug}`) ||
    homeProductsRangeData[0];

  useEffect(() => {
    gsap.fromTo(
      ".fade-in-section",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, [slug]);

  const renderFeatureIcon = (iconName) => {
    switch (iconName) {
      case "capacity":
        return <BsLightningCharge className="text-3xl text-[#f48131]" />;
      case "emissions":
        return <BsDroplet className="text-3xl text-[#f48131]" />;
      case "efficiency":
        return <BsGearWideConnected className="text-3xl text-[#f48131]" />;
      case "reliability":
        return <BsShieldCheck className="text-3xl text-[#f48131]" />;
      case "maintenance":
        return <BiWrench className="text-3xl text-[#f48131]" />;
      default:
        return <FiSettings className="text-3xl text-[#f48131]" />;
    }
  };

  const renderOverviewIcon = (iconName) => {
    switch (iconName) {
      case "service":
        return <FiTool className="text-[#f48131] text-xl" />;
      case "support":
        return <FiHeadphones className="text-[#f48131] text-xl" />;
      case "reliability":
        return <BsShieldCheck className="text-[#f48131] text-xl" />;
      case "performance":
        return <BsGearWideConnected className="text-[#f48131] text-xl" />;
      case "capacity":
        return <BsLightningCharge className="text-[#f48131] text-xl" />;
      default:
        return <FiSettings className="text-[#f48131] text-xl" />;
    }
  };

  // --- Auto-Hover Animation Logic for Service Process ---
  const processRef = useRef(null);
  const [autoActiveStep, setAutoActiveStep] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let currentStep = 1;
          setAutoActiveStep(currentStep);

          const interval = setInterval(() => {
            currentStep += 1;
            if (currentStep > 5) {
              clearInterval(interval);
              setAutoActiveStep(null);
            } else {
              setAutoActiveStep(currentStep);
            }
          }, 600);
        }
      },
      { threshold: 0.5 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      if (processRef.current) observer.unobserve(processRef.current);
    };
  }, [hasAnimated]);

  // --- Static Hardcoded Data for Why Choose Us Section ---
  const whyChooseUsData = [
    {
      icon: <FiLayers className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Strong In-house Manufacturing",
      desc: "Advanced manufacturing capabilities ensuring top-quality and durability in every product.",
      image: "/images/gallery/img1.webp"
    },
    {
      icon: <FiTool className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Proven Execution",
      desc: "Successfully delivered large-scale infrastructure projects with excellence and on-time performance.",
      image: "/images/HomeHero/GasEnergy.png"
    },
    {
      icon: <FiSettings className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Customized Engineering Solutions",
      desc: "Tailored solutions designed to meet unique operational needs and industry challenges.",
      image: "/images/HomeProductRange/GasGenset.webp"
    },
    {
      icon: <FiGrid className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Complete System Integration",
      desc: "Expertise in complete biogas system integration from concept to commissioning.",
      image: "/images/HomeProductRange/CO2Remover.jpg"
    },
    {
      icon: <FiShield className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Reliable After-sales Support",
      desc: "Dedicated support and maintenance ensuring uninterrupted performance and long-term reliability.",
      image: "/images/HomeProductRange/wtp.jpg"
    },
    {
      icon: <FiUsers className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Focus on Client Success",
      desc: "Building long-term relationships through trust, transparency, and a commitment to your success.",
      image: "/images/gallery/img2.webp"
    }
  ];

  return (
    <div className="w-full bg-[#fcfcfc] font-sans pb-20">
      
      <section
        className="relative w-full text-white pt-24 pb-16 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('${product?.heroBanner || "/images/ProductsBanner/gas-geset-banner.png"}')`,
        }}
      >
        <img
          src={
            product?.heroBannerMobile ||
            product?.heroBanner ||
            "/images/ProductsBanner/gas-geset-banner.png"
          }
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover sm:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent w-full md:w-[80%] lg:w-[60%] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 flex md:-mt-5 flex-col items-start fade-in-section">
            <span className="border border-gray-300 text-gray-900 px-3 py-1 bg-gray-100 rounded text-xs font-bold uppercase tracking-widest mb-4">
              {product?.heroBadge}
            </span>

            <h1 className="text-4xl text-gray-700 md:text-5xl font-bold mb-4">
              {product?.title}
            </h1>

            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
              {product?.description}
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {(product?.heroChecklist || []).map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <FiCheckCircle className="text-[#f48131] w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#f48131] hover:bg-[#e06d1f] text-white px-8 py-3.5 rounded-md font-bold transition-all shadow-lg hover:shadow-[#f48131]/20">
                Request a Quote
              </button>
              <button className="flex items-center gap-2 border border-gray-600 hover:bg-white hover:text-black text-gray-700 px-8 py-3.5 rounded-md font-bold transition-all">
                Download Brochure <FiDownload />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 -mt-8 relative z-20 fade-in-section">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          {(product?.features || []).map((feat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center w-full sm:w-[45%] lg:w-1/5 pt-4 lg:pt-0 first:pt-0"
            >
              <div className="mb-3">{renderFeatureIcon(feat.icon)}</div>
              <h4 className="font-bold text-gray-900 mb-1">{feat.title}</h4>
              <p className="text-sm text-gray-500">{feat.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-20 pb-10 flex flex-col md:flex-row gap-10 fade-in-section">
        <div className="w-full md:w-7/12 flex flex-col">
          <p className="text-sm font-bold text-[#f48131] md:-mt-5 mb-4 border-b-2 border-gray-100 w-max">
            About Product
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-2 self-start border-b-2 border-gray-100 w-full">
            {product?.overviewTitle}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-2">
            {product?.overviewText}
          </p>
          <p className="text-gray-600 md:mb-5 leading-relaxed">
            {product?.overviewExtraText}
          </p>

          <div className="flex flex-wrap gap-4">
            {(product?.overviewOptions || []).map((option, idx) => (
              <div key={idx} className="flex w-full sm:w-[calc(50%-12px)] gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                  {renderOverviewIcon(option.icon)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{option.label}</h4>
                  <p className="text-gray-600 text-sm">{option.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-5/12 flex flex-col md:items-end">
          <h2 className="text-2xl font-bold text-gray-900 md:mt-5 mb-6 self-start border-b-2 border-gray-100 w-max">
            Technical Specifications
          </h2>
          <div className="w-full">
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-5 py-3 font-bold border-b border-gray-200 w-2/5 whitespace-nowrap">
                      Parameter
                    </th>
                    <th className="px-5 py-3 font-bold border-b border-gray-200">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {(product?.technicalSpecs || []).map((spec, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition">
                      <td className="px-5 py-3 font-medium text-gray-700 whitespace-nowrap">
                        {spec.parameter}
                      </td>
                      <td className="px-5 py-3 text-gray-600">{spec.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative md:mb-10 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ProductsBanner/LowerBanner.png')" }}
      >
        <img
          src={product?.lowerBannerMobile || "/images/ProductsBanner/LowerBanner.png"}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover sm:hidden"
        />
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src={product?.bannerImage || "/images/HomeHero/GasEnergy.png"}
                alt={product?.title}
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl md:mt-2 font-bold text-gray-900 mb-4">
                {product?.bannerHeading}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                {product?.bannerLongDescription}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {(product?.keyBenefits || []).slice(0, 3).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 text-[#f48131]">
                      <FiCheckCircle className="h-4 w-4" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={processRef}
        className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:-mt-10 fade-in-section"
      >
        <style>{`
          @keyframes running-line {
            0% { stroke-dashoffset: 24; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-running-line {
            animation: running-line 1.5s linear infinite;
          }
        `}</style>

        <div className="mb-4 border-b border-gray-100 pb-4 inline-block w-full md:w-auto text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Our Service Process
          </h2>
        </div>

        <div className="relative flex flex-wrap md:flex-nowrap justify-between gap-12 md:gap-4 w-full">
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] z-0 pointer-events-none">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6, 6" />
              <line 
                x1="0" y1="1" x2="100%" y2="1" 
                stroke="#f48131" 
                strokeWidth="2" 
                strokeDasharray="6, 6" 
                className="animate-running-line opacity-80" 
              />
            </svg>
          </div>

          {[
            { id: 1, title: "Consultation", desc: "Detailed analysis of your power needs and site requirements.", icon: <FiSettings className="text-2xl md:text-3xl" /> },
            { id: 2, title: "Solution Design", desc: "Engineering a customized model for maximum efficiency.", icon: <BsGearWideConnected className="text-2xl md:text-3xl" /> },
            { id: 3, title: "Manufacturing", desc: "Built in-house using advanced technology and quality checks.", icon: <FiTool className="text-2xl md:text-3xl" /> },
            { id: 4, title: "Installation", desc: "Seamless on-site integration by expert technicians.", icon: <FiMapPin className="text-2xl md:text-3xl" /> },
            { id: 5, title: "Support", desc: "Round-the-clock maintenance and technical assistance.", icon: <FiHeadphones className="text-2xl md:text-3xl" /> },
          ].map((step, idx) => {
            const isActive = autoActiveStep === step.id;

            return (
              <div key={idx} className="flex flex-col items-center text-center w-full md:w-1/5 relative group cursor-default">
                <div
                  className={`w-20 h-20 rounded-full border-2 flex items-center justify-center mb-5 z-10 relative transition-all duration-400 ease-out group-hover:bg-[#f48131] group-hover:text-white group-hover:border-[#f48131] group-hover:shadow-[0_8px_20px_rgba(244,129,49,0.3)] group-hover:-translate-y-1 ${
                    isActive
                      ? "bg-[#f48131] text-white border-[#f48131] shadow-[0_8px_20px_rgba(244,129,49,0.3)] -translate-y-1"
                      : "bg-[#fffcf5] border-[#fce3d0] text-[#f48131]"
                  }`}
                >
                  <div className={`transform transition-transform duration-300 group-hover:scale-110 ${isActive ? "scale-110" : ""}`}>
                    {step.icon}
                  </div>
                </div>

                {idx !== 4 && (
                  <div className="md:hidden absolute top-20 left-1/2 w-[2px] h-12 border-l-2 border-dashed border-[#f48131]/40 -translate-x-1/2 z-0"></div>
                )}

                <h4
                  className={`font-bold text-base md:text-lg mb-2 transition-colors duration-300 group-hover:text-[#f48131] ${
                    isActive ? "text-[#f48131]" : "text-gray-900"
                  }`}
                >
                  {step.id}. {step.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed px-2 font-medium">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      
      <KeyFeatures items={product?.keyFeatures} />

      {/* ================= STATIC WHY CHOOSE US SECTION ================= */}
     <section className="max-w-7xl mx-auto px-4 md:px-12 pt-5 pb-10 fade-in-section relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-bold text-[#f48131] uppercase tracking-widest mb-3 block">
            THE INVENTIVE ADVANTAGE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6 tracking-tight">
            Why Choose <span className="text-[#f48131] relative">Inventive</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We deliver reliable, efficient, and future-ready energy solutions with an unwavering commitment to quality, innovation, and long-term value.
          </p>
        </div>

        {/* Staggered Image Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:pb-12">
          {whyChooseUsData.map((item, idx) => (
            <div 
              key={idx} 
              className={`
                relative rounded-[2rem] overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
                hover:shadow-[0_20px_50px_rgba(244,129,49,0.2)] transition-all duration-500 ease-out 
                transform hover:-translate-y-3 flex flex-col justify-end min-h-[380px] md:min-h-[420px]
                /* Stagger the middle column on large screens */
                ${idx % 3 === 1 ? 'lg:mt-12' : ''}
              `}
            >
              {/* Background Image with Hover Zoom */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content Box (Z-10 brings it above the image and gradient) */}
              <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                
                {/* Frosted Glass Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6 group-hover:bg-[#f48131] group-hover:border-[#f48131] transition-all duration-500">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#f48131] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-300 leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* Animated Bottom Line */}
                <div className="mt-8 pt-6 border-t border-white/20 w-full flex items-center">
                  <div className="w-10 h-[3px] rounded-full bg-[#f48131] group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="md:-mt-10">
        <Faq faqs={product?.faqs} />
      </div>
      <Clients />
      <CtaBanner />

    </div>
  );
};

export default EachProduct;
import React, { useEffect } from "react";
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
import HomeProductRange from "../NewHome/HomeProductsRange";
import Faq from "../Faq";
import KeyFeatures from "./KeyFeatures";

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

  // --- Compile dynamic cards for the unified "Why Choose Us" section ---
  const advantageCards = [];
  
  if (product?.whySection) {
    advantageCards.push({
      id: "why",
      icon: <FiSettings className="text-3xl text-[#f48131]" />,
      title: product.whySection.heading || "Why Choose Us",
      subtitle: "We deliver excellence through innovation and commitment.",
      points: product.whySection.points || [],
    });
  }

  if (product?.advantage) {
    advantageCards.push({
      id: "advantage",
      icon: <BsShieldCheck className="text-3xl text-[#f48131]" />,
      title: product.advantage.heading || "Double Membrane Advantage",
      subtitle: product.advantage.description 
        ? (product.advantage.description.length > 75 ? product.advantage.description.substring(0, 75) + '...' : product.advantage.description)
        : "Stable storage, enhanced safety and long-lasting performance.",
      points: product.advantage.points || [],
    });
  }

  if (product?.applicationsList?.length > 0) {
    advantageCards.push({
      id: "applications",
      icon: <FiGrid className="text-3xl text-[#f48131]" />,
      title: "Applications",
      subtitle: "Versatile solutions for multiple industries and use cases.",
      points: product.applicationsList,
    });
  }

  const gridColsClass = advantageCards.length === 1 ? "md:grid-cols-1" : advantageCards.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

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

        <div className="max-w-7xl mx-auto px-4  md:px-12 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 flex md:-mt-5 flex-col items-start fade-in-section">
            <span className="border border-gray-600 text-gray-300 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4">
              {product?.heroBadge}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
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

      {/* ================= OVERVIEW & TECH SPECS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-20 pb-10 flex flex-col md:flex-row gap-10 fade-in-section">
        
        {/* Adjusted from w-8/12 to w-7/12 to give table more room */}
        <div className="w-full md:w-7/12 flex flex-col">
          <p className="text-sm font-bold text-[#f48131]  md:-mt-5 mb-4 border-b-2 border-gray-100 w-max">
            About Product
          </p>
          <h className="text-2xl font-bold text-gray-900 mb-2 self-start border-b-2 border-gray-100 w-max">
            {product?.overviewTitle}
          </h>

          <p className="text-gray-600 leading-relaxed mb-2">
            {product?.overviewText}
          </p>
          <p className="text-gray-600 md:mb-5 leading-relaxed">
            {product?.overviewExtraText}
          </p>

          <div className="flex flex-wrap gap-6">
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

        {/* Adjusted from w-4/12 to w-5/12 for more width */}
        <div className="w-full md:w-5/12 flex flex-col md:items-end">
          <h2 className="text-2xl font-bold text-gray-900 md:mt-5 mb-6 self-start border-b-2 border-gray-100 w-max">
            Technical Specifications
          </h2>
          {/* Removed max-w-lg and replaced with w-full so table takes all available space */}
          <div className="w-full">
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    {/* Added whitespace-nowrap and slightly wider width to force single line */}
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
                      {/* Added whitespace-nowrap to prevent parameter lines from wrapping */}
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-1 flex flex-col lg:flex-row gap-12 fade-in-section">
        <div className="w-full lg:w-5/12 bg-[#f8fafc] rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Where We Install</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <ul className="flex flex-col gap-3 relative z-10">
              {(product?.installationRegions || []).map((region, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <FiChevronRight className="text-[#f48131]" /> {region}
                </li>
              ))}
              <li className="text-[#f48131] font-bold text-sm mt-2 ml-1">
                ...and many more
              </li>
            </ul>
            <div className="relative w-full max-w-[700px] md:max-w-[760px] mx-auto">
              <img
                src="/images/ProductsBanner/MapEachProduct.png"
                alt="Installation map"
                className="w-full h-auto"
              />
              {(product?.mapLocations || []).map((location, idx) => (
                <span
                  key={idx}
                  className="absolute -translate-x-1/2 -translate-y-full"
                  style={{ top: location.top, left: location.left }}
                  title={location.name}
                >
                  <svg width="26" height="32" viewBox="0 0 26 32" fill="none" aria-hidden="true">
                    <path
                      d="M13 1C7.48 1 3 5.48 3 11c0 6.3 8.2 16.8 9.1 17.9.48.56 1.32.56 1.8 0C14.8 27.8 23 17.3 23 11 23 5.48 18.52 1 13 1Z"
                      fill="#FFFFFF"
                      stroke="#46505A"
                      strokeWidth="2"
                    />
                    <circle cx="13" cy="11" r="4" stroke="#46505A" strokeWidth="2" fill="#FFFFFF" />
                  </svg>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-gray-100 w-max">
            Our Service Process
          </h2>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 w-full">
            {[
              {
                id: 1,
                title: "Consultation",
                desc: "Understanding your power needs.",
                icon: <FiSettings className="text-2xl" />,
              },
              {
                id: 2,
                title: "Solution Design",
                desc: "Recommending the right model.",
                icon: <BsGearWideConnected className="text-2xl" />,
              },
              {
                id: 3,
                title: "Manufacturing",
                desc: "Built with advanced tech.",
                icon: <FiTool className="text-2xl" />,
              },
              {
                id: 4,
                title: "Installation",
                desc: "On-site installation.",
                icon: <FiMapPin className="text-2xl" />,
              },
              {
                id: 5,
                title: "Support",
                desc: "24/7 technical support.",
                icon: <FiHeadphones className="text-2xl" />,
              },
            ].map((step, idx, arr) => (
              <div key={idx} className="flex flex-col items-center text-center w-[45%] md:w-1/5 relative">
                <div className="w-16 h-16 rounded-full bg-orange-50 border-2 border-orange-100 text-[#f48131] flex items-center justify-center mb-4 z-10 relative">
                  {step.icon}
                </div>
                {idx !== arr.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] border-t-2 border-dashed border-gray-200 z-0"></div>
                )}
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  {step.id}. {step.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed px-1">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <KeyFeatures items={product?.keyFeatures} />

      {/* ================= UNIFIED ADVANTAGES & APPLICATIONS GRID ================= */}
      {advantageCards.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-20 fade-in-section">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#f48131] uppercase tracking-widest mb-3 block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Why Choose <span className="text-[#f48131]">Inventive Gas Equipment?</span>
            </h2>
            <div className="w-12 h-1 bg-[#f48131] mx-auto mb-5"></div>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto text-sm md:text-base">
              Delivering reliable, efficient and future-ready solutions for your energy needs.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className={`grid grid-cols-1 ${gridColsClass} gap-6 md:gap-8`}>
            {advantageCards.map((card) => (
              <div 
                key={card.id} 
                className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(244,129,49,0.08)] transition-shadow duration-300"
              >
                
                {/* Orange Theme Icon */}
                <div className="w-16 h-16 rounded-full bg-orange-50 border-2 border-orange-100 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                
                {/* Titles */}
                <h3 className="text-xl line-clamp-1 font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-sm text-gray-500 font-medium mb-6 h-10 overflow-hidden">
                  {card.subtitle}
                </p>
                
                <div className="w-full h-px bg-gray-100 mb-6"></div>
                
                {/* Custom Solid Checkmark List */}
                <ul className="flex flex-col gap-4 w-full text-left flex-grow">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium leading-snug">
                      <span className="mt-[2px] flex-shrink-0 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#f48131] text-white">
                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-[12px] w-[12px]" strokeWidth="3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Bottom Dots */}
                <div className="mt-8 pt-4 flex flex-col items-center gap-1.5 opacity-30">
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => <div key={`r1-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#f48131]"></div>)}
                  </div>
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => <div key={`r2-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#f48131]"></div>)}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>
      )}

      <div className="md:-mt-10">
        <Faq faqs={product?.faqs} />
      </div>

    </div>
  );
};

export default EachProduct;
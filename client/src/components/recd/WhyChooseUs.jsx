import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaTruck, FaLeaf, FaGauge, FaRecycle, FaGlobe } from "react-icons/fa6";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import icat from "../../assets/icat.jpeg";
import cpcb from "../../assets/cpcb.jpeg";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "Drastically Reduces Emissions",
    content:
      "VayuPure RECD significantly lowers harmful emissions, achieving up to 99.6% reduction in HC, CO, and PM pollutants.",
    icon: FaLeaf,
  },
  {
    title: "CPCB & NGT Compliant",
    content:
      "Designed and approved in accordance with CPCB and NGT emission norms, ensuring full regulatory compliance.",
    icon: FaGauge,
  },
  {
    title: "Zero Back Pressure",
    content:
      "Engineered to operate without increasing exhaust back pressure, maintaining optimal DG performance.",
    icon: FaTruck,
  },
  {
    title: "Self-Cleaning Technology",
    content:
      "Advanced self-cleaning mechanism minimizes manual intervention and extends operational efficiency.",
    icon: FaRecycle,
  },
  {
    title: "Environmentally Responsible",
    content:
      "Supports sustainable operations by improving air quality and reducing environmental impact.",
    icon: FaGlobe,
  },
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const itemsRef = useRef([]);
  const leftRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, { opacity: 0, x: -50 });
      gsap.set(itemsRef.current, { opacity: 0, x: 30 });

      gsap.to(leftRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });

      gsap.to(itemsRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });
    }, contentRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={contentRef} className="w-full py-10 pt-4 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl text-gray-700 font-bold text-center mb-14">
          Why Choose{" "}
          <span className="text-orange-500">
            VayuPure Retrofit Emission <br className="hidden md:block" />
            Control Device{" "}
          </span>{" "}
          (RECD)
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div ref={leftRef} className="flex-1 space-y-4 text-gray-700">
            <p className="leading-normal text-justify">
              VayuPure RECD is a reliable emission control solution that reduces
              harmful pollutants by up to{" "}
              <strong className="text-orange-600">99.6%</strong> while complying
              with CPCB and NGT norms. Looking for Retrofit Emission Control
              Device (RECD) pricing? Get competitive rates on CPCB-approved
              solutions designed for all DG sets.
            </p>

            <div className="pt-1">
              <p className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <span className="text-orange-500">✓</span> Approved By:
              </p>
              <div className="flex items-center gap-6">
                <div className="md:h-32 h-20 border-2 border-orange-300 p-2 bg-white rounded-md hover:shadow-lg transition duration-300">
                  <img
                    src={cpcb}
                    className="h-full w-full object-contain"
                    alt="CPCB"
                  />
                </div>
                <div className="md:h-32 h-20 border-2 border-orange-300 p-2 bg-white rounded-md hover:shadow-lg transition duration-300">
                  <img
                    src={icat}
                    className="h-full w-full object-contain"
                    alt="ICAT"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full space-y-2">
            {reasons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="rounded-xl bg-gray-100 overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <button
                    onClick={() =>
                      setActiveIndex(index === activeIndex ? -1 : index)
                    }
                    className="w-full flex items-center justify-between px-6 py-4 text-left font-medium hover:bg-orange-50 transition duration-300 group"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition duration-300">
                        <IconComponent className="text-lg" />
                      </div>
                      <span className="text-gray-800 group-hover:text-orange-600 transition duration-300">
                        {item.title}
                      </span>
                    </div>
                    <FaChevronDown
                      className={`text-orange-600 transition-transform duration-300 flex-shrink-0 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`px-6 text-sm text-gray-600 transition-all duration-300 ${
                      activeIndex === index
                        ? "max-h-40 pb-4 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

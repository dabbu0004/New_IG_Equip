import React, { useEffect, useRef } from "react";
import {
  FaArrowUpRightFromSquare,
  FaLeaf,
  FaThumbsUp,
  FaGauge,
} from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CtaBanner = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const chipsRef = useRef([]);
  const statsRef = useRef([]);

  const features = [
    { text: "High Efficiency", icon: FaLeaf },
    { text: "Low Maintenance", icon: FaThumbsUp },
    { text: "Air Quality Improvement", icon: FaRegCheckCircle },
    { text: "Compact Design", icon: FaGauge },
  ];

  const stats = [
    { value: "99.6%", label: "Emission Reduction" },
    { value: "100%", label: "Compliance Ready" },
    { value: "24/7", label: "Support Service" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      gsap.fromTo(
        chipsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-10 px-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-orange-50 via-orange-100 to-orange-50 rounded-2xl px-6 sm:px-10 py-8 sm:py-10 overflow-hidden relative">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div ref={leftRef} className="flex-1 w-full">
            <div className="flex items-center gap-2 mb-4">
              <FaRegCheckCircle className="text-orange-500 text-lg" />
              <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                CPCB Approved Solution
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
              Upgrade Your RECD with{" "}
              <span className="text-orange-500">Vayu Pure™</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base max-w-xl">
              High-performance retrofit emission control device ensuring
              compliance, efficiency, and cleaner air across all environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    ref={(el) => (chipsRef.current[i] = el)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm text-gray-700 text-xs sm:text-sm border border-orange-200 hover:bg-orange-50 hover:text-orange-600 transition"
                  >
                    <Icon className="text-orange-500 text-sm" />
                    <span>{f.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            ref={rightRef}
            className="flex-1 w-full flex flex-col items-center lg:items-end justify-center gap-4"
          >
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {stats.map((s, i) => (
                <div
                  key={i}
                  ref={(el) => (statsRef.current[i] = el)}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-2 text-center border border-orange-200"
                >
                  <div className="text-lg md:text-3xl font-bold text-orange-500">
                    {s.value}
                  </div>
                  <div className="text-base md:text-base text-gray-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center lg:text-right">
              Contact Us Now
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 shadow-md"
            >
              Get Quote
              <FaArrowUpRightFromSquare />
            </button>

            <span className="text-xs sm:text-sm text-gray-500 text-center lg:text-right">
              Quick response • Expert support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;

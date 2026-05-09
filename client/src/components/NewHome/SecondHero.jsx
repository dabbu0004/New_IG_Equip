import React, { useEffect, useRef, useState } from "react";
import { FaBolt, FaLeaf, FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SecondHero = () => {
  const navigate = useNavigate();

  const featuresContainerRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);

  useEffect(() => {
    const container = featuresContainerRef.current;
    if (!container) return undefined;

    let fired = false;
    const timeouts = [];

    const applyHoverSim = (el, delay = 0) => {
      if (!el) return;
      const icon = el.querySelector('div');
      // prepare transitions
      el.style.transition = 'all 280ms ease';
      if (icon) icon.style.transition = 'all 360ms ease';

      const t = setTimeout(() => {
        // apply hover-like styles
        el.style.backgroundColor = '#ffffff';
        el.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
        el.style.borderColor = 'rgba(243,244,246,1)';
        el.style.transform = 'translateY(-2px) scale(1.02)';
        if (icon) {
          icon.style.backgroundColor = '#f48131';
          const svg = icon.querySelector('svg');
          if (svg) svg.style.color = '#ffffff';
        }

        // revert after short time so hover isn't permanent
        const revert = setTimeout(() => {
          el.style.transform = '';
          el.style.boxShadow = '';
          el.style.borderColor = '';
          el.style.backgroundColor = '';
          if (icon) {
            icon.style.backgroundColor = '';
            const svg = icon.querySelector('svg');
            if (svg) svg.style.color = '';
          }
        }, 900);
        timeouts.push(revert);
      }, delay);

      timeouts.push(t);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !fired) {
          fired = true;
          // staggered apply
          applyHoverSim(feature1Ref.current, 0);
          // start the next after the first has finished (900ms revert + small gap)
          applyHoverSim(feature2Ref.current, 800);
          // third starts after second finishes
          applyHoverSim(feature3Ref.current, 1600);
        }
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -80px 0px' });

    observer.observe(container);

    return () => {
      observer.disconnect();
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, []);

  // Animation variants for smooth revealing
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Small counter component that animates from 0 -> end when in view
  const StatCounter = ({ end = 0, suffix = "", duration = 1400, className = "" }) => {
    const ref = useRef(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
      const el = ref.current;
      if (!el) return undefined;
      let started = false;
      let rafId = null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const loop = (now) => {
              const t = Math.min(1, (now - start) / duration);
              const current = Math.floor(t * end);
              setValue(current);
              if (t < 1) rafId = requestAnimationFrame(loop);
              else setValue(end);
            };
            rafId = requestAnimationFrame(loop);
            observer.disconnect();
          }
        });
      }, { threshold: 0.4 });

      observer.observe(el);

      return () => {
        observer.disconnect();
        if (rafId) cancelAnimationFrame(rafId);
      };
    }, [end, duration]);

    return (
      <div ref={ref} className={`flex flex-col items-center ${className}`}>
        <p className="text-4xl sm:text-5xl font-bold leading-none">
          {value}
          {suffix}
        </p>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#fcfcfc] py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* ======================================= */}
        {/* HEADER SECTION                          */}
        {/* ======================================= */}
        <motion.div 
          className="text-center md:-mt-10 max-w-4xl mx-auto mb-16 md:mb-15"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#111111] leading-[1.1] tracking-tight mb-6">
            Shaping the Future of <span className=" text-[#f48131] italic">Clean Energy</span>
            <br className="hidden md:block" />
            <span className="text-2xl md:text-2xl font-bold text-gray-400 mt-2 block not-italic">
                Smarter Gas Solutions for a Better Tomorrow
            </span>
          </h2>
        </motion.div>

      

        {/* ======================================= */}
        {/* MAIN CONTENT SPLIT (WHO WE ARE & SPECS) */}
        {/* ======================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 md:gap-10 mb-16">
          
          {/* Left: Who We Are */}
          <motion.div 
            className="w-full lg:w-[45%] flex flex-col items-center text-center lg:items-start lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="inline-block bg-orange-50 text-[#f48131] border border-orange-100 px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider mb-8 w-max">
              Who We Are
            </span>
            
            <h3 className="text-3xl md:text-4xl font-black text-[#111111] leading-tight mb-4">
              Inventive Gas Equipment
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-snug mb-6 max-w-xl">
              is committed to shaping the future of the <span className="font-bold text-[#111111]">clean energy in India</span> and worldwide.
            </p>
            
            <p className="text-base md:text-lg text-gray-500 font-medium mb-10 leading-relaxed max-w-xl">
              Offering Smarter Gas Solutions for a Better Future. We design, manufacture, and deploy cutting-edge systems tailored for industrial excellence.
            </p>
            
            <button
              onClick={() => navigate("/about")}
              className="inline-flex w-auto items-center justify-center bg-[#f48131] text-white px-6 py-4 rounded-md text-base md:text-xl font-extrabold shadow-md transition-all duration-300 will-change-transform hover:shadow-xl hover:scale-105 mx-auto lg:mx-0"
            >
               More About Us
            </button>
          </motion.div>

          {/* Right: Specializations */}
          <motion.div 
            className="w-full lg:w-[50%] flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
            }}
          >
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#111111]  border-b-2 border-gray-100 pb-4">
              We Specialize in:
            </h4>

            <div ref={featuresContainerRef} className="flex flex-col gap-3">
              {/* Feature 1 */}
              <div ref={feature1Ref} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f48131] transition-colors duration-300">
                  <FaBolt className="text-[#f48131] text-2xl group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col pt-1">
                  <h5 className="text-xl font-bold text-[#111111] mb-1">Gas Gensets</h5>
                  <p className="text-gray-600 font-medium">Uninterrupted & eco-friendly power supply tailored for industrial loads.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div ref={feature2Ref} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f48131] transition-colors duration-300">
                  <FaArrowUp className="text-[#f48131] text-2xl group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col pt-1">
                  <h5 className="text-xl font-bold text-[#111111] mb-1">Dual-Fuel Kits</h5>
                  <p className="text-gray-600 font-medium">Maximize efficiency by utilizing natural gas alongside existing diesel infrastructure.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div ref={feature3Ref} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f48131] transition-colors duration-300">
                  <FaLeaf className="text-[#f48131] text-2xl group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col pt-1">
                  <h5 className="text-xl font-bold text-[#111111] mb-1">Vayu Pure RECD</h5>
                  <p className="text-gray-600 font-medium">Drastically reduce harmful diesel emissions and ensure CPCB compliance.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ======================================= */}
        {/* LEGACY & CLOSING STATEMENT              */}
        {/* ======================================= */}
        <motion.div 
          className="w-full bg-[#fff9f5] border border-orange-100 rounded-2xl p-8 md:p-10 overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex flex-col gap-8">
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full">
              <div className="text-center flex flex-col items-center">
                <StatCounter end={900} suffix="+" duration={1400} />
                <p className="text-base sm:text-lg font-semibold text-gray-700 mt-2">Happy Clients</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <StatCounter end={12} suffix="+" duration={1400} />
                <p className="text-base sm:text-lg font-semibold text-gray-700 mt-2">Year of Experience</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <StatCounter end={100} suffix="%" duration={1400} />
                <p className="text-base sm:text-lg font-semibold text-gray-700 mt-2">Customer Satisfaction</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-orange-100"></div>

            {/* Closing Statement */}
            <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed text-center">
              At Inventive Gas Equipment, we combine <span className="text-[#f48131]">engineering excellence</span> with sustainability to deliver solutions that save money, protect the environment, and power industries reliably.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SecondHero;
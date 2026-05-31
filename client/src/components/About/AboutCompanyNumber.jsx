import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Importing icons that match the design closely
import { RiLeafLine } from "react-icons/ri";
import { BsDatabase, BsFire } from "react-icons/bs";
import { MdOutlineFactory } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const companyStats = [
  { 
    id: 1, 
    value: 1000, 
    suffix: "+", 
    label: "Vayu-pure\nOperational",
    icon: RiLeafLine
  },
  { 
    id: 2, 
    value: 30, 
    suffix: "+", 
    label: "Membrane\nGas Holders",
    icon: BsDatabase 
  },
  { 
    id: 3, 
    value: 3000, 
    suffix: "+", 
    label: "Dual Fuel\nSystems",
    icon: BsFire 
  },
  { 
    id: 4, 
    value: 100, 
    suffix: "+", 
    label: "Flare\nSystems",
    icon: MdOutlineFactory 
  },
  { 
    id: 5, 
    value: 300, 
    suffix: "+", 
    label: "Customers\nWorldwide",
    icon: HiOutlineUsers 
  },
];

const AboutCompanyNumber = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Fade up animation for the cards
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // 2. Number counting animation (Plays when scrolled into view)
      const counters = gsap.utils.toArray(".counter-value");
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target"));
        
        gsap.to(counter, {
          innerHTML: target,
          duration: 2.5,
          snap: { innerHTML: 1 }, // Snaps to whole numbers
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-white py-8 md:pt-8  md:pb-20 overflow-hidden font-sans"
    >
      {/* Subtle Background Pattern (Curved lines imitation) */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full border-[1px] border-orange-100 border-dashed"></div>
        <div className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] rounded-full border-[1px] border-orange-50 border-dashed"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full border-[1px] border-orange-50 border-dashed"></div>
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          
          {/* Eyebrow / Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[2px] bg-[#f48131]/30"></div>
            <span className="text-[#f48131] text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              Our Impact in Numbers
            </span>
            <div className="w-10 h-[2px] bg-[#f48131]/30"></div>
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1f2937] leading-tight mb-5 tracking-tight">
            Engineering Impact. <span className="text-[#f48131]">Delivering Results.</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-500 max-w-2xl text-[15px] md:text-lg font-medium leading-relaxed">
            From advanced biogas solutions to emission control systems, our numbers reflect our commitment to excellence.
          </p>
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
          {companyStats.map((stat) => {
            const Icon = stat.icon;
            
            return (
              <div 
                key={stat.id} 
                className="stat-card bg-white rounded-3xl p-8 xl:p-10 flex flex-col items-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-50 hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Icon Circle */}
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#fff6ef] border border-[#ffecd9] flex items-center justify-center text-[#f48131] mb-8 shadow-sm">
                  <Icon className="text-3xl" />
                </div>
                
                {/* Number & Suffix */}
                <div className="flex items-baseline justify-center mb-5 text-[#f48131]">
                  <span 
                    className="counter-value text-[40px] xl:text-[44px] font-black tracking-tight leading-none"
                    data-target={stat.value}
                  >
                    0
                  </span>
                  <span className="text-3xl xl:text-4xl font-black ml-0.5 leading-none">
                    {stat.suffix}
                  </span>
                </div>
                
                {/* Small Divider */}
                <div className="w-8 h-[3px] bg-[#f48131]/20 rounded-full mb-5"></div>
                
                {/* Text Label */}
                <p className="text-[#1f2937] text-[15px] font-bold leading-snug whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutCompanyNumber;
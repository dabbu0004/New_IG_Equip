import React, { useEffect, useRef } from "react";
import ClientsData from "../data/ClientsData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const splitWords = (text) =>
  text.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden">
      <span className="inline-block word">{word}&nbsp;</span>
    </span>
  ));

const Clients = () => {
  const columnsRef = useRef([]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const words = titleRef.current.querySelectorAll(".word");

      gsap.fromTo(
        words,
        { y: "120%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        columnsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef.current);

    let animationId;
    let startTime;
    const animationDuration = 90000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % animationDuration) / animationDuration;

      columnsRef.current.forEach((col, index) => {
        if (!col) return;

        const container = col.parentElement;
        if (!container) return;

        const containerHeight = container.clientHeight;
        const contentHeight = col.scrollHeight;

        if (contentHeight > containerHeight) {
          const maxScroll = contentHeight - containerHeight;

          let scrollAmount =
            index % 2 === 0 ? progress * maxScroll : (1 - progress) * maxScroll;

          col.style.transform = `translateY(-${scrollAmount}px)`;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#fcfcfc] py-24 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left: Text Content */}
        <div ref={titleRef} className="w-full lg:w-1/3 flex flex-col justify-center">
          <span className="text-xs font-bold text-[#f48131] uppercase tracking-widest mb-3 block">
            {splitWords("OUR REFERENCES")}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#111111] mb-6">
            {splitWords("Proud of")}{" "}
            <span className="text-[#f48131]">
              {splitWords("Our Clients")}
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium">
            {splitWords(
              "We collaborate with leading businesses across industries, powering mission critical operations with reliable solutions."
            )}
          </p>
        </div>

        {/* Right: Scrolling Columns */}
        <div className="w-full lg:w-2/3">
          {/* The mask-image creates a smooth fade at the top and bottom of the scrolling area */}
          <div 
            className="flex gap-4 md:gap-6 h-[400px] md:h-[500px]"
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
          >
            {ClientsData.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`flex-1 h-full overflow-hidden ${
                  colIndex > 1 ? "hidden sm:flex" : "flex"
                }`}
              >
                <div
                  ref={(el) => (columnsRef.current[colIndex] = el)}
                  className="flex flex-col gap-4 md:gap-6 py-4"
                >
                  {[...Array(3)].map((_, dupIndex) => (
                    <React.Fragment key={dupIndex}>
                      {column.map((client) => (
                        <div
                          key={`${client.logo}-${dupIndex}`}
                          className="flex items-center justify-center bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl h-24 md:h-32 p-4 md:p-6 w-full group hover:border-orange-100 hover:shadow-md transition-all duration-300"
                        >
                          <img
                            src={client.logo}
                            alt="Client Logo"
                            className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                          />
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
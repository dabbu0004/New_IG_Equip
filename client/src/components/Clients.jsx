import React, { useEffect, useRef } from "react";
import ClientsData from "../data/ClientsData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";

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
        },
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
        },
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
      className="w-full bg-gradient-to-br from-white via-orange-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12 md:gap-24">
        <div ref={titleRef} className="md:w-1/4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-orange-500 text-sm" />
                ))}
              </span>
            </div>

            <p className="uppercase tracking-wide text-xs font-semibold text-gray-600 mb-3">
              {splitWords("Our References")}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-normal text-gray-800 mb-4">
              {splitWords("Proud of")}{" "}
              <span className="text-orange-600">
                {splitWords("Our Clients")}
              </span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 max-w-xs">
              {splitWords(
                "We collaborate with leading businesses across industries, powering mission critical operations with reliable solutions.",
              )}
            </p>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="flex gap-4">
            {ClientsData.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`flex-1 h-96 overflow-hidden ${
                  colIndex > 1 ? "hidden md:flex" : ""
                }`}
              >
                <div
                  ref={(el) => (columnsRef.current[colIndex] = el)}
                  className="flex flex-col gap-4 py-2"
                >
                  {[...Array(3)].map((_, dupIndex) => (
                    <React.Fragment key={dupIndex}>
                      {column.map((client) => (
                        <div
                          key={`${client.logo}-${dupIndex}`}
                          className="flex items-center justify-center group"
                        >
                          <div className="w-full flex items-center justify-center p-4 transition duration-300">
                            <img
                              src={client.logo}
                              alt="Client Logo"
                              className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110"
                            />
                          </div>
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

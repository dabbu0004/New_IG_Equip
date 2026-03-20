import React, { useEffect, useRef } from "react";
import recdImage from "../../assets/recd.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIsRecd = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, { opacity: 0, y: 50 });
      gsap.set(contentRef.current, { opacity: 0, y: 50 });

      gsap.to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });

      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gray-50 py-10 md:py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">
          <div ref={imageRef} className="w-full md:w-1/2 md:block hidden">
            <div className="relative h-full">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-orange-400 rounded-xl"></div>
              <div className="relative overflow-hidden rounded-xl shadow-xl h-full bg-white group">
                <img
                  src={recdImage}
                  alt="RECD Retrofit Emission Control Device"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>
            </div>
          </div>

          <div ref={contentRef} className="w-full md:w-1/2 flex flex-col">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Understanding RECD
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                What is <span className="text-orange-500">RECD?</span>
              </h2>
              <p className="text-lg text-orange-600 font-medium">
                Retrofit Emission Control Device
              </p>
            </div>

            <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mb-6 rounded"></div>

            <div className="space-y-5 grow flex flex-col justify-center">
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg hover:border-orange-600 transition duration-300 transform hover:scale-102">
                <p className="text-gray-700 leading-relaxed text-justify text-base">
                  A{" "}
                  <span className="font-semibold text-orange-600">
                    Retrofit Emission Control Device (RECD)
                  </span>{" "}
                  is an advanced pollution control system installed in diesel
                  generators (DG sets) to reduce harmful exhaust emissions.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg hover:border-orange-600 transition duration-300 transform hover:scale-102">
                <p className="text-gray-700 leading-relaxed text-justify text-base">
                  It is designed to control{" "}
                  <span className="font-semibold text-orange-600">
                    particulate matter (PM), black smoke, and toxic gases
                  </span>{" "}
                  released during generator operation. RECD helps diesel
                  generators meet environmental standards set by the{" "}
                  <span className="font-semibold text-orange-600">
                    Central Pollution Control Board (CPCB)
                  </span>{" "}
                  in India.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <p className="text-white md:text-lg leading-relaxed font-medium">
                  The term "retrofit" means it can be installed in existing
                  generators without modifying the engine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsRecd;

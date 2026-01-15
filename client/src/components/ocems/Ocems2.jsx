import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ocemsImg from "../../assets/services/ocems.png";

gsap.registerPlugin(ScrollTrigger);

const Service2 = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 w-full text-white bg-gradient-to-r from-red-500 to-orange-400"
    >
      <div className="relative max-w-7xl mx-auto flex justify-center items-center px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div ref={textRef} className="flex-1">
            <span className="inline-block mb-3 text-sm font-bold tracking-wider uppercase">
              System Overview
            </span>

            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              What is OCEMS?
            </h3>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-5">
              Online Continuous Emission Monitoring System (OCEMS) is a
              real-time monitoring solution mandated by CPCB / SPCB to
              continuously measure industrial emissions or effluent parameters
              and transmit data directly to pollution control board servers.
            </p>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              OCEMS enables industries to maintain uninterrupted regulatory
              compliance by ensuring accurate, tamper-proof, and real-time
              emission data reporting for audits and environmental governance.
            </p>
          </div>

          <div ref={imageRef} className="flex-1 flex justify-center mx-auto">
            <div className="max-h-[400px] flex items-center mx-auto">
              <img src={ocemsImg} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service2;

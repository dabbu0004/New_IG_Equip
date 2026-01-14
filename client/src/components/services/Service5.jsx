import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import analyzerImg from "../../assets/services/sensors.jpeg";
import samplingImg from "../../assets/services/stack.jpeg";
import dahsImg from "../../assets/services/dahs.jpeg";
import serverImg from "../../assets/services/server.jpeg";
import calibrationImg from "../../assets/services/calibration.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Service5 = () => {
  const headerRef = useRef(null);
  const rowsRef = useRef(null);
  const sectionRef = useRef(null);

  const components = [
    {
      image: analyzerImg,
      title: "Gas / Effluent Analyzers (Sensors)",
      points: [
        "Continuous measurement of stack emissions & effluent parameters.",
        "Monitors PM, SO₂, NOx, CO, O₂, pH, COD, BOD, TSS, etc.",
        "Ensures high accuracy and reliable real-time pollution data.",
      ],
    },
    {
      image: samplingImg,
      title: "Stack / Effluent Sampling System",
      points: [
        "Stack probes and sampling lines extract representative samples.",
        "Sample conditioning removes moisture, dust, and impurities.",
        "Protects analysers and improves measurement accuracy.",
      ],
    },
    {
      image: dahsImg,
      title: "Data Acquisition & Handling System (DAHS)",
      points: [
        "Collects real-time data from all analysers.",
        "Stores, processes, and displays emission values.",
        "Generates alarms and reports for compliance monitoring.",
      ],
    },
    {
      image: serverImg,
      title: "Real-Time Data Transfer / Server Connectivity",
      points: [
        "Automatic transmission of emission data to CPCB / SPCB servers.",
        "Ensures continuous regulatory compliance and transparency.",
        "Secure and uninterrupted data communication.",
      ],
    },
    {
      image: calibrationImg,
      title: "Calibration & Validation System",
      points: [
        "Periodic calibration using certified standard gases or solutions.",
        "Maintains measurement accuracy and system reliability.",
        "Ensures acceptance during audits and regulatory inspections.",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
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
        rowsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: rowsRef.current,
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
      className="w-full py-16 text-white bg-gradient-to-r from-red-500 to-orange-400"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-2">
            OCEMS System Components
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto">
            An OCEMS solution consists of integrated components working together
            to ensure accurate measurement, secure data handling, and continuous
            regulatory compliance.
          </p>
        </div>

        <div ref={rowsRef} className="flex flex-col gap-20">
          {components.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row ${
                  isReverse ? "lg:flex-row-reverse" : ""
                } gap-6 items-center rounded-2xl`}
              >
                <div className="max-w-xl flex-shrink-0 w-full">
                  <div className="w-full md:h-[400px] flex items-center justify-center rounded-3xl md:p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full rounded-xl object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl font-bold text-black mb-5">
                    {item.title}
                  </h3>
                  <ul className="space-y-3 text-gray-800 text-xl list-disc pl-5">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service5;

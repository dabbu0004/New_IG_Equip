import React, { useEffect, useRef } from "react";
import {
  FaCheck,
  FaBroadcastTower,
  FaCloudUploadAlt,
  FaExclamationTriangle,
  FaLeaf,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nplLogo from "../../assets/services/npl.png";

gsap.registerPlugin(ScrollTrigger);

const Service3 = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const sectionRef = useRef(null);

  const mandatoryPoints = [
    {
      icon: FaCheck,
      title: "Mandatory as per CPCB & SPCB Guidelines",
      description:
        "OCEMS installation is compulsory for designated industries under CPCB and respective State Pollution Control Board regulations.",
    },
    {
      icon: FaBroadcastTower,
      title: "Continuous Real-Time Monitoring",
      description:
        "Ensures uninterrupted measurement of emission and effluent parameters without manual intervention or data gaps.",
    },
    {
      icon: FaCloudUploadAlt,
      title: "Direct Online Data Transfer to Authorities",
      description:
        "Emission data is automatically transmitted to CPCB / SPCB servers, ensuring transparency and regulatory oversight.",
    },
    {
      icon: FaExclamationTriangle,
      title: "Prevents Penalties & Plant Shutdowns",
      description:
        "Reduces the risk of legal actions, financial penalties, and forced shutdowns caused by non-compliance.",
    },
    {
      icon: FaLeaf,
      title: "Environmental Transparency & Responsibility",
      description:
        "Demonstrates environmental accountability and supports sustainable industrial operations.",
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
        cardsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
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
    <section ref={sectionRef} className="relative w-full py-20 bg-gray-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="relative mb-14">
          <div className="absolute max-h-40 max-w-40 left-0 top-1/2 -translate-y-1/2 hidden md:block">
            <img src={nplLogo} className="w-full h-full opacity-90" />
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
              Why OCEMS is Mandatory
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              OCEMS is mandated by regulatory authorities to ensure continuous
              emission monitoring, data integrity, and environmental compliance
              across industrial operations.
            </p>
          </div>

          <div className="absolute max-h-40 max-w-40 right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <img src={nplLogo} className="w-full h-full opacity-90" />
          </div>
        </div>

        <div ref={cardsRef} className="flex flex-wrap justify-center gap-8">
          {mandatoryPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white cursor-pointer hover:shadow-lg hover:-translate-y-2 duration-300 transition-all border border-gray-200 rounded-xl p-8 w-full sm:w-[320px] lg:w-[360px] text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-orange-500 text-4xl" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service3;

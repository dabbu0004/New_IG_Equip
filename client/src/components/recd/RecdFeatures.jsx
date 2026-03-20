import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaLeaf, FaCog, FaCompactDisc, FaWrench, FaWind } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "High Efficiency",
    description: "Reduces HC, CO, and PM emissions by over 99.6%.",
    icon: FaLeaf,
  },
  {
    title: "Compliance",
    description:
      "Available for DG from 15 to 1500 KVA CPCB & ICAT Approved RECD Device.",
    icon: BiCheckShield,
  },
  {
    title: "Compatibility",
    description: "Vayu-Pure RECD device is compatible with all DG brands.",
    icon: FaCog,
  },
  {
    title: "Compact Design",
    description:
      "Space-saving structure allows easy installation even in limited areas.",
    icon: FaCompactDisc,
  },
  {
    title: "Low Maintenance",
    description:
      "Designed for hassle-free operation with minimal servicing needs.",
    icon: FaWrench,
  },
  {
    title: "Improves Air Quality",
    description:
      "RECD captures harmful particulates to keep surrounding air cleaner.",
    icon: FaWind,
  },
];

const splitWords = (text) =>
  text.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden">
      <span className="inline-block word">{word}&nbsp;</span>
    </span>
  ));

const RecdFeatures = () => {
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleEls = titleRef.current.children;

      gsap.fromTo(
        titleEls,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      cardsRef.current.forEach((card) => {
        const icon = card.querySelector("svg");
        const words = card.querySelectorAll(".word");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play reverse play reverse",
          },
        });

        tl.fromTo(
          icon,
          {
            opacity: 0,
            scale: 0.8,
            y: 10,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
        ).fromTo(
          words,
          {
            y: "100%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 0.35,
            stagger: 0.03,
            ease: "power2.out",
          },
          "-=0.2",
        );

        const hoverAnim = gsap.to(card, {
          y: -6,
          duration: 0.25,
          ease: "power1.out",
          paused: true,
        });

        card.addEventListener("mouseenter", () => hoverAnim.play());
        card.addEventListener("mouseleave", () => hoverAnim.reverse());
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <p className="bg-orange-100 text-lg font-bold mx-auto my-2 tracking-wider w-fit px-4 ">
            Inventive Gas Equipment
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-2">
            Features of <span className="text-orange-500">Retrofit Emission Control Device  </span> (RECD)
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Comprehensive features designed for maximum efficiency and
            compliance
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center -mx-4">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="w-full sm:w-1/3 lg:w-1/4 px-4 mb-10 flex"
              >
                <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white transition-all duration-300 w-full">
                  <div className="rounded-full bg-transparent flex items-center justify-center mb-4">
                    <IconComponent className="text-orange-500" size={90} />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900">
                    {splitWords(item.title)}
                  </h3>

                  <p className="text-gray-600 text-base leading-tight">
                    {splitWords(item.description)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecdFeatures;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../assets/services/sensors.jpeg";
import img2 from "../../assets/services/stack.jpeg";
import img3 from "../../assets/services/dahs.jpeg";
import img4 from "../../assets/services/server.jpeg";
import img5 from "../../assets/services/calibration.jpeg";

gsap.registerPlugin(ScrollTrigger);

const recdImages = [img1, img2, img3, img4, img5];

const slides = [
  recdImages[recdImages.length - 1],
  ...recdImages,
  recdImages[0],
];

const ServicesHero = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);

  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sliderRef.current,
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
        contentRef.current,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 700);
    }
    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length - 2);
      }, 700);
    }
  }, [current]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  return (
    <section ref={sectionRef} className="w-full bg-white pb-10 md:py-10">
      <div className="container max-w-7xl bg-gray-50 md:border-2 md:shadow-md border-gray-100 md:p-12 rounded-none md:rounded-3xl mx-auto md:px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="flex-1" ref={sliderRef}>
            <div className="relative w-full aspect-[4/3] overflow-hidden md:rounded-lg">
              <div
                className={`flex h-full ${
                  transition
                    ? "transition-transform duration-700 ease-in-out"
                    : ""
                }`}
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className="w-full h-full rounded-none md:rounded-3xl shrink-0 object-fill"
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            ref={contentRef}
            className="flex-1 m-auto flex flex-col justify-center h-full px-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Compliance Made Simple NPL Approved Systems
            </h2>

            <p className="text-gray-700 mb-5 text-lg md:text-xl">
              Inventive Gas Equipment offers reliable and regulation-compliant
              Online Continuous Emission Monitoring Systems (OCEMS) designed to
              help industries achieve real-time environmental compliance with
              confidence.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-400 text-white px-5 py-2 rounded-lg text-lg font-extrabold shadow-md hover:scale-105 transition-transform duration-300 w-fit"
            >
              Get Quote
              <FaArrowUpRightFromSquare className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

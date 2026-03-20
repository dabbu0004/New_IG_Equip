import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaFilter, FaVial, FaCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const HowRecdWork = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const stepsRef = useRef([]);
  const resultRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
        .fromTo(
          stepsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .fromTo(
          resultRef.current,
          { opacity: 0, y: 20, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2",
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-base uppercase tracking-wider">
            Working Principle
          </span>
          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4"
          >
            How <span className="text-orange-500">(RECD) </span> Works
          </h2>
          <p ref={descRef} className="text-gray-600 text-base md:text-lg">
            A Retrofit Emission Control Device cleans diesel generator exhaust
            using advanced filtration and catalytic conversion technologies.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          <div className="flex-1 flex flex-col gap-8">
            <div
              ref={(el) => (stepsRef.current[0] = el)}
              className="flex items-start gap-5 p-6 rounded-2xl border border-gray-200 hover:border-orange-300 transition bg-white"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 text-lg">
                <FaFilter />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  Filtration Stage
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  High-efficiency filters capture soot and particulate matter,
                  reducing visible smoke and pollutants.
                </p>
              </div>
            </div>

            <div
              ref={(el) => (stepsRef.current[1] = el)}
              className="flex items-start gap-5 p-6 rounded-2xl border border-gray-200 hover:border-orange-300 transition bg-white"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 text-lg">
                <FaVial />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  Catalytic Conversion
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Harmful gases like CO and HC are converted into safer
                  emissions through catalytic processes.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center">
            <div
              ref={resultRef}
              className="w-full bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 md:p-10 border border-orange-200"
            >
              <div className="flex items-start gap-4 mb-6">
                <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Result
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Significantly cleaner exhaust emissions with full compliance
                    to CPCB environmental standards.
                  </p>
                </div>
              </div>

              <div className="border-t border-orange-200 pt-6">
                <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                  RECD acts as a{" "}
                  <span className="text-orange-600 font-semibold">
                    pollution control shield
                  </span>{" "}
                  for diesel generators, ensuring cleaner air and safer
                  environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowRecdWork;

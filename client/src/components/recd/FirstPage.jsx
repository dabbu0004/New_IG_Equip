import React from "react";
import { motion } from "framer-motion";

const FirstPage = () => {
  const handleButtonClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-11563726235",
      });
    } else {
      console.warn("gtag not loaded yet");
    }
  };

  return (
    <div className="w-full py-6">
      <div className="w-[90%] mx-auto container rounded-lg overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-8">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-10"
          >
            <div className="mb-5 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2 leading-tight">
                CPCB & ICAT Approved
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-orange-600 mb-1">
                Vayu Pure{" "}
                <span className="text-black font-normal block sm:inline">
                  Retrofit Emission Control
                </span>
              </h2>
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-black">
                Device (RECD)
              </h3>
            </div>

            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed text-gray-700">
              Revolutionizing clean air solutions for diesel gensets through
              advanced retrofit technology.
            </p>

            {/* Stats Pills */}
            <div className="flex flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center bg-gradient-to-r from-red-500 to-orange-400 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full flex-1 min-w-[150px]">
                <span className="text-xl sm:text-2xl font-extrabold mr-2">
                  99%
                </span>
                <div className="text-xs sm:text-sm leading-snug">
                  <div className="font-semibold">Emission Reduction</div>
                  <div className="text-[10px] sm:text-xs opacity-90">
                    EPA Standards Compliant
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-gradient-to-r from-red-500 to-orange-400 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full flex-1 min-w-[150px]">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                </div>
                <div className="text-xs sm:text-sm leading-snug">
                  <div className="font-semibold">Quick Installation</div>
                  <div className="text-[10px] sm:text-xs opacity-90">
                    Minimum Downtime
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <img
              src="/images/image/1.png"
              alt="Vayu Pure RECD Device"
              className="w-full max-w-[400px] sm:max-w-none h-auto lg:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;

import React from "react";
import { motion } from "framer-motion";

const slideLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const FourthPage = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white">
      <div className="max-w-7xl mx-auto ml-22 py-20 px-4 sm:px-6 md:px-20 relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20 relative z-10">
          {/* Mission Box */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideLeftToRight}
          >
            <div className="inline-block bg-gradient-to-r from-red-600 to-orange-300 px-5 py-2 rounded-lg mb-4">
              <h2 className="text-white font-bold text-lg md:text-xl">
                Our Mission
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-2xl leading-relaxed">
              We are committed to providing energy-efficient, cost-effective,
              and reliable energy solutions that will revolutionize the
              industrial gas industry. Our goal is to give industries the power
              of an innovative suite of technologies that drive productivity
              while being part of global sustainability efforts. At IG
              Equipment, we strive to offer products that create a real impact
              for our clients and our planet.
            </p>
          </motion.div>

          {/* Vision Box */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideLeftToRight}
          >
            <div className="inline-block bg-gradient-to-r from-red-600 to-orange-300 px-5 py-2 rounded-lg mb-4">
              <h2 className="text-white font-bold text-lg md:text-xl">
                Our Vision
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-2xl leading-relaxed">
              We see a world in which industries are powered by clean and
              sustainable energy solutions. As a key enabler of this global
              evolution, we strive to lead with the highest standards in
              innovation, quality, reliability, and environmental
              sustainability—empowering businesses to embrace cleaner
              technologies, reduce their carbon footprint, and transition
              confidently toward a smarter, greener, and more resilient future.
            </p>
          </motion.div>
        </div>

        {/* Slanted Divider Line (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px transform rotate-[10deg] bg-white z-0" />
      </div>
    </div>
  );
};

export default FourthPage;

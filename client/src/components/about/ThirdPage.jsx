import React from "react";
import { motion } from "framer-motion";

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ThirdPage = () => {
  return (
    <div className="w-full bg-gradient-to-r from-red-500 to-orange-400">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-12 text-white gap-10">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideLeft}
        >
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-400 px-4 py-2 rounded-xl mb-4">
            <h2 className="text-white font-bold text-lg md:text-xl">
              Why Choose Us?
            </h2>
          </div>
          <p className="mb-6 text-base sm:text-lg">
            Some of the benefits offered by IGE are:
          </p>

          <ul className="space-y-6 text-base sm:text-lg lg:text-2xl">
            <li>
              <span className="text-white">● </span>
              <span className="font-bold">Customized Solutions:</span> Every
              business is unique, and so are we.{" "}
              <br className="hidden lg:block" />
              We design systems tailor-made for you.
            </li>
            <li>
              <span className="text-white">● </span>
              <span className="font-bold">Uncompromising Quality:</span> From
              design to delivery, <br className="hidden lg:block" />
              quality is our highest priority.
            </li>
            <li>
              <span className="text-white">● </span>
              <span className="font-bold">Sustainability Focused:</span> Our
              products help lower the <br className="hidden lg:block" />
              carbon footprint and improve energy efficiency.
            </li>
            <li>
              <span className="text-white">● </span>
              <span className="font-bold">Expert Support:</span> Our trained
              experts will always <br className="hidden lg:block" />
              guide you for the smooth working of our systems.
            </li>
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-[40%] flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideRight}
        >
          <img
            src="/images/image/abou2.png"
            alt="Engineer working"
            className="w-72 sm:w-96 h-auto rounded-bl-[2rem] rounded-tl-[2rem] shadow-lg border-4 border-white"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ThirdPage;

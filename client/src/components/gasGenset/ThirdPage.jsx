import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ThirdPage = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 md:px-16 py-12 relative overflow-hidden">
      <section className="max-w-7xl mx-auto container px-4 md:px-20 py-8 text-white">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-10">
          Gas Gensets Built for Every Purpose
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: " Wide Power Range",
              desc: "Power output from kW to 2500 kW, supporting both small and large-scale energy needs with flexible voltage options.",
              link: "/retrofit-emission-control-device-recd",
            },
            {
              title: "Fully Tested Units",
              desc: "Each PSI GENSET is examined, tested, and fully operational, with options for rebuilding, reconditioning, and custom packing.    ",
              link: "/dual-fuel-kit",
            },
            {
              title: "Top Brands",
              desc: "Inventory includes top-performing engines from Cummins, Waukesha, and Caterpillar — ensuring long-term performance and reliability.",
              link: "/",
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white text-black rounded-2xl p-6 shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg md:text-4xl font-bold mb-3">
                  {product.title}
                </h3>
                <p className="text-xl text-gray-900 font-medium">
                  {product.desc}
                </p>
              </div>
              <div className="mt-6 text-orange-500 font-semibold flex items-center gap-2">
                <a href={product.link}>Know More</a>
                <FaAngleDoubleRight className="text-black" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-red-300/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default ThirdPage;

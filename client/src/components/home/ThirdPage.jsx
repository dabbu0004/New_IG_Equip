import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ThirdPage = () => {
  return (
    <div className="max-w-full bg-gradient-to-r from-red-500 to-orange-400">
      <section className="max-w-7xl mx-auto container px-4 md:px-20 py-12 text-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-400 font-semibold px-5 py-2 rounded-xl text-2xl mb-2">
            Our Products
          </div>
          <h2 className="text-xl md:text-4xl font-bold">
            Gas Equipment Solutions for Every Industry{" "}
          </h2>
          <h3 className="text-xl md:text-2xl font-extralight">
            Comprehensive Products for Industrial & Commercial Applications
          </h3>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Vayu Pure RECD – Retrofit Emission Control Device",
              desc: "Reduce diesel generator emissions with our CPCB-approved RECD technology. Ensure compliance, minimize air pollution, and support India’s clean energy mission",
              link: "/retrofit-emission-control-device-recd",
            },
            {
              title: "Dual-Fuel Kits for Diesel Generators",
              desc: "Switch between diesel and natural gas with our dual-fuel conversion kits. Save fuel costs, lower emissions, and extend generator life.",
              link: "/dual-fuel-kit",
            },
            {
              title: "PSI Gas Gensets",
              desc: "Our industrial gas gensets deliver reliable, efficient, and eco-friendly power for manufacturing, healthcare, and commercial applications.",
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
                <h3 className="text-lg md:text-2xl font-bold mb-3">
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
    </div>
  );
};

export default ThirdPage;

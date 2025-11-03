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
          <h2 className="text-xl md:text-2xl font-extralight">
            Comprehensive Solutions for
          </h2>
          <h2 className="text-xl md:text-2xl font-extralight">
            Diverse Industries
          </h2>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "RECD",
              desc: "In a time of growing environmental concerns, Vayu Pure RECD offers an advanced solution to reduce harmful emissions from diesel generators. It ensures cleaner air, strict compliance, and strong performance without compromising reliability or operational standards.",
              link: "/retrofit-emission-control-device-recd",
            },
            {
              title: "Dual Fuel Kit",
              desc: "Our Dual Fuel Technology uses both diesel and natural gas to boost fuel efficiency, lower emissions, and reduce costs. It's a smart and cleaner alternative that enhances engine performance while promoting sustainability for industrial operations.",
              link: "/dual-fuel-kit",
            },
            {
              title: "Gas Gen Set",
              desc: "We provide Gas Gensets designed for clean, uninterrupted power. Operating on biogas or natural gas, our PSI Gensets deliver consistent output, reduce emissions, and help industries worldwide meet modern energy and sustainability standards efficiently.",
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
    </div>
  );
};

export default ThirdPage;

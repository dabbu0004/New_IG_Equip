import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ThirdPage = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 md:px-16 py-12 relative overflow-hidden">
      {/* Product Cards Section */}
      <section className="max-w-7xl mx-auto container px-4 md:px-20 py-8 text-white">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-10">
        BIOGAS MONITORING MEASURING INSTRUMENTS
       
        </h1> 

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Efficient Digestion",
              desc: "Analyzes biogas composition in real-time to fine-tune the digestion process for maximum efficiency. Improves overall system control, resulting in higher and more consistent methane output.",
              link: "/retrofit-emission-control-device-recd",
            },
            {
              title: "CHP Protection",
              desc: "Continuously monitors harmful elements like H₂S and moisture in biogas. This protection reduces corrosion, prevents damage, and significantly extends the operational life of CHP Gensets.",
              link: "/dual-fuel-kit",
            },
            {
              title: "Trouble-Free ",
              desc: "Delivers accurate, real-time data that enables quick and precise adjustments to the biogas process. This proactive monitoring minimizes downtime, prevents potential failures.",
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-red-300/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

     
    </div>
  );
};

export default ThirdPage;

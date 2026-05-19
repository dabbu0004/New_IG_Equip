import React from "react";
import { motion } from "framer-motion";
import { 
  FiSettings, 
  FiCheckCircle, 
  FiTool, 
  FiZap, 
  FiBriefcase, 
  FiShield, 
  FiTrendingUp,
  FiClock
} from "react-icons/fi";

const FAQ = () => {
  // Custom FAQ Data tailored to Inventive Gas Equipment
  const faqs = [
    {
      question: "Are your RECD systems CPCB approved?",
      answer: "Yes, absolutely. All our Retrofit Emission Control Devices (RECD) are strictly tested and certified by the Central Pollution Control Board (CPCB), ensuring 100% regulatory compliance for your business.",
      icon: FiCheckCircle,
    },
    {
      question: "How much can I save with a Dual-Fuel Kit?",
      answer: "By utilizing natural gas alongside your existing diesel infrastructure, our clients typically observe a 30% to 40% reduction in overall fuel costs, with a very quick return on investment.",
      icon: FiTrendingUp,
    },
    {
      question: "Do you provide installation and after-sales support?",
      answer: "Yes, we handle end-to-end turnkey projects. From the initial site survey to engineering, installation, and ongoing Annual Maintenance Contracts (AMC), our Pan-India team has you covered.",
      icon: FiTool,
    },
    {
      question: "Can your gas gensets run on Biogas?",
      answer: "Yes! We manufacture specialized power generation systems that can operate seamlessly on Biogas, making them perfect for agricultural, sugar, and food processing industries.",
      icon: FiZap,
    },
    {
      question: "How long does a typical installation take?",
      answer: "Timeline varies by project scale, but a standard Dual-Fuel Kit or RECD retrofit can often be installed and commissioned within a few days to minimize your operational downtime.",
      icon: FiClock,
    },
    {
      question: "Do I need to replace my existing diesel generator?",
      answer: "Not at all. Our Dual-Fuel Kits and RECD systems are designed to be retrofitted directly onto your existing diesel generators, upgrading them rather than replacing them.",
      icon: FiSettings,
    },
    {
      question: "Is there a warranty on your equipment?",
      answer: "Yes, all our manufactured equipment comes with a comprehensive standard warranty covering parts and performance. Extended warranty and maintenance packages are also available.",
      icon: FiShield,
    },
    {
      question: "What industries do you typically serve?",
      answer: "We serve a wide spectrum of heavy industries including Manufacturing, Construction, Hospitals, Food & Beverage, Oil & Gas, and Water Treatment facilities across India.",
      icon: FiBriefcase,
    },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#fcfcfc] py-20 md:py-20 overflow-hidden font-sans border-t border-gray-100">
      <div className="max-w-[1250px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 tracking-tight mb-5">
            Frequently asked questions
          </h2>
          <p className="text-base md:text-base text-gray-600 font-medium leading-relaxed">
            Stuck on something? We're here to help with all your queries regarding our gas energy solutions, compliance, and installations in one place.
          </p>
        </div>

        {/* FAQ Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex items-start gap-5 md:gap-6 group cursor-default"
              >
                {/* Icon Container with Hover Animation */}
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#fff6f0] flex items-center justify-center text-[#f48131] group-hover:bg-[#f48131] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_8px_20px_rgba(244,129,49,0.25)] group-hover:-translate-y-1">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-300" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col pt-1 transition-transform duration-300 group-hover:translate-x-1">
                  <h4 className="text-lg md:text-md font-bold text-gray-700 mb-2 leading-snug">
                    {faq.question}
                  </h4>
                  <p className="text-gray-500 text-[15px] md:text-md font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA (Optional, matches the reference vibe) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 p-8 md:p-10 bg-[#fff9f5] rounded-3xl border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h4 className="text-xl font-bold text-[#111111] mb-2">Still have questions?</h4>
            <p className="text-gray-600 font-medium">Can't find the answer you're looking for? Please chat with our team.</p>
          </div>
          <button className="whitespace-nowrap bg-[#f48131] hover:bg-[#e06d1f] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
            Get in touch
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
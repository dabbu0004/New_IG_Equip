import React, { useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const faqs = [
  {
    question:
      "Why should industries use gas gensets from Inventive Gas Equipment?",
    answer:
      "Our gas gensets provide eco-friendly, cost-efficient, and reliable power, making them ideal for industries seeking clean energy solutions.",
  },
  {
    question: "What is a Retrofit Emission Control Device (RECD)?",
    answer:
      "The Vayu Pure RECD reduces diesel generator emissions, ensures CPCB compliance, and helps industries meet environmental regulations.",
  },
  {
    question: "How do dual-fuel kits work?",
    answer:
      "Dual-fuel kits allow generators to run on both diesel and natural gas, offering cost savings and reduced emissions.",
  },
  {
    question: "Do you provide customized energy solutions?",
    answer:
      "Yes. Our experts design custom gas genset systems, dual-fuel kits, and RECDs to match industry-specific requirements.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 md:px-20 flex flex-col items-center bg-gradient-to-r from-red-500 to-orange-400">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 py-1 rounded-md mb-8 self-start md:self-center">
        FAQ – Gas Gensets, Dual-Fuel Kits & RECD{" "}
      </h2>

      {/* FAQ Boxes */}
      <div className="w-full max-w-6xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md shadow-gray-600 transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left text-black font-medium"
            >
              <span className="text-base sm:text-lg">{faq.question}</span>
              <MdKeyboardDoubleArrowDown
                className={`transform transition-transform duration-300 text-3xl sm:text-4xl ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;

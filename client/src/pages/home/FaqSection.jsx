import React, { useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const faqs = [
  {
    question:
      "Why should you choose biogas solutions from IG Equipment for your industrial settings?",
    answer:
      "With our biogas system, industries can efficiently cut down operational costs and contribute less carbon to the atmosphere. Our solutions allow on-site biogas production using organic waste.",
  },
  {
    question:
      "What should industries consider before switching to different cleaner energy systems by Inventive Gas Equipment?",
    answer:
      "We recommend evaluating infrastructure compatibility for the usage of technology, regulatory requirements, and your current fuel usage.",
  },
  {
    question:
      "How do you ensure customized solutions for different industry needs?",
    answer:
      "Inventive Gas Equipment offers solutions tailored to your specific operational goals, fuel types, and environmental targets.",
  },
  {
    question: "What industries does Inventive Gas Equipment serve?",
    answer:
      "We serve a variety of sectors, including manufacturing, agriculture, power generation, and food processing. IG Equipment provides gas-based solutions that are energy-efficient and environmentally responsible.",
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
        Frequently Asked Questions
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

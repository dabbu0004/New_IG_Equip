import React from 'react';
import { motion } from 'framer-motion';

const fadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const SecondPage = () => {
  return (
    <div className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white py-10 px-4 md:px-20">
      {/* Heading Section */}
      <motion.div
        className="text-center max-w-7xl mx-auto mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeDown}
      >
        <h2 className="italic text-xl md:text-5xl font-semibold">
          Shaping the Future of{' '}
          <span className="font-extrabold">Industrial Gas Solutions</span>
        </h2>
        <p className="mt-4 md:mt-6 text-sm md:text-3xl leading-relaxed">
          Welcome to <span className="font-semibold">Inventive Gas Equipment</span>, where innovation meets sustainability.
          <br className="hidden md:block" />
          We develop advanced industrial gas systems that enable businesses to flourish
          <br className="hidden md:block" />
          while creating a more resilient planet. Whether it's through energy-efficient
          <br className="hidden md:block" />
          systems or tailored products, we're committed to providing quality that meets
          <br className="hidden md:block" />
          the diverse needs of our clients while remaining eco-conscious.
        </p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeDown}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/images/image/abou1.png"
            alt="Workers"
            className="w-72 md:w-96 h-auto rounded-bl-[2rem] rounded-tl-[2rem] shadow-lg border-4 border-white md:ml-56"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white">
          <div className="bg-gradient-to-r from-red-600 to-orange-300 px-5 py-2 inline-block rounded-lg mb-4">
            <h3 className="text-white font-bold text-lg md:text-xl">Who We Are?</h3>
          </div>
          <p className="text-sm md:text-2xl leading-relaxed">
            At <span className="font-bold">IG Equipment</span>, we are not just industrial gas equipment suppliers;
            we are your partner for innovation and sustainability.
            With decades of in-depth experience and a forward-thinking attitude,
            our team develops tailored solutions designed to meet your unique requirements.
            From modifying emission control devices to improving biogas system efficiency through generator refurbishment,
            we’ve made our mark in terms of reliability, efficiency, and care.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SecondPage;

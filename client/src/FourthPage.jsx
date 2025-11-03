import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-b from-orange-700 to-slate-900 text-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section with Animated Border */}
        <div className="mb-16 text-center relative">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full"></div>
          </div>
          <h2 className="text-2xl font-semibold uppercase tracking-wider pt-6 text-orange-300">
            Excellence in Every Detail
          </h2>
          <h1 className="text-5xl font-bold mb-6 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
            Why Choose Us?
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We combine innovative technology with customer-focused solutions to
            deliver exceptional gas equipment that exceeds industry standards.
          </p>
        </div>

        {/* Features Grid with Hexagonal Design Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Industry-Leading Expertise */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 shadow-xl border-l-4 border-orange-500 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center shadow-lg transform -rotate-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="ml-6 text-2xl font-bold text-white">
                Industry-Leading Expertise
              </h3>
            </div>

            <div className="h-56 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-6 mb-6 transform rotate-1 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/images/biogas-equipment.svg"
                alt="Gas Equipment Range"
                className="h-full w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Our unrivaled success stems from extensive technical knowledge,
              cutting-edge manufacturing technology, and the industry's most
              comprehensive equipment range, delivering exceptional performance
              in every solution.
            </p>
          </div>

          {/* Tailored Engineering Solutions */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 shadow-xl border-l-4 border-orange-500 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center shadow-lg transform -rotate-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="ml-6 text-2xl font-bold text-white">
                Tailored Engineering Solutions
              </h3>
            </div>

            <div className="h-56 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-6 mb-6 transform -rotate-1 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/images/customized-solutions.svg"
                alt="Customized Solutions"
                className="h-full w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              We engineer solutions precisely for your unique requirements. Each
              custom-built system delivers superior durability, extended
              operational lifespan, and consistently flawless performance in
              your specific environment.
            </p>
          </div>

          {/* Uncompromising Quality Standards */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 shadow-xl border-l-4 border-orange-500 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center shadow-lg transform -rotate-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="ml-6 text-2xl font-bold text-white">
                Uncompromising Quality Standards
              </h3>
            </div>

            <div className="h-56 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-6 mb-6 transform rotate-1 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/images/quality-work.svg"
                alt="Quality Standards"
                className="h-full w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Quality defines our entire operation. We maintain meticulous
              oversight across our entire supply chain, implementing rigorous
              testing at every stage to ensure each component delivers
              unwavering reliability and performance.
            </p>
          </div>

          {/* Client-Centric Control Systems */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 shadow-xl border-l-4 border-orange-500 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center shadow-lg transform -rotate-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="ml-6 text-2xl font-bold text-white">
                Client-Centric Control Systems
              </h3>
            </div>

            <div className="h-56 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-6 mb-6 transform -rotate-1 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/images/customer-control.svg"
                alt="Client Control Systems"
                className="h-full w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Experience complete operational mastery with our intuitive control
              systems. Every interface is engineered for optimal usability,
              giving you precise command over your equipment with advanced
              monitoring capabilities and simplified management.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 p-10 border border-orange-500/30">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-red-500 rounded-full opacity-10 blur-3xl"></div>

          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join industry leaders who've revolutionized their efficiency and
            sustainability with our cutting-edge solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Schedule a Consultation
            </button>
            <button className="bg-transparent border-2 border-orange-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-orange-500/10 transition-all duration-300">
              Explore Our Solutions
            </button>
          </div>

          <div className="mt-8 flex justify-center items-center space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-orange-500">350+</span>
              <span className="text-gray-300">Satisfied Clients</span>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-orange-500">15+</span>
              <span className="text-gray-300">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-orange-500">100%</span>
              <span className="text-gray-300">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 sm:px-6 md:px-20 py-12 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold inline-block bg-gradient-to-r from-red-500 to-orange-400 px-4 py-1 rounded-md mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-4xl font-medium mb-8 max-w-lg leading-relaxed">
            Why Industries Trust Inventive Gas Equipment{" "}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 relative z-10">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-2">
                Proven Expertise
              </h3>
              <p className="text-sm sm:text-base md:text-xl font-semibold leading-relaxed text-black">
                12+ years of delivering clean energy solutions{" "}
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-2">
                Customized Systems{" "}
              </h3>
              <p className="text-sm sm:text-base md:text-xl font-semibold leading-relaxed text-black">
                tailored power solutions for your needs
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-2">
                Sustainability First{" "}
              </h3>
              <p className="text-sm sm:text-base md:text-xl font-semibold leading-relaxed text-black">
                eco-friendly products reducing emissions{" "}
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-2">
                Customer Focused
              </h3>
              <p className="text-sm sm:text-base md:text-xl font-semibold leading-relaxed text-black">
                900+ satisfied clients across industries
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex justify-center md:justify-end order-first md:order-none">
          <img
            src="/images/WhatsApp Image 2025-07-04 at 5.46.18 PM.jpeg"
            alt="Worker"
            className="w-full h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

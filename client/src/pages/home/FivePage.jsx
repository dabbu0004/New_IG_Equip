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
          <p className="text-lg sm:text-xl md:text-3xl mb-8 max-w-lg leading-relaxed">
            Out of all industrial gas <br className="hidden sm:block" />
            equipment suppliers, Inventive <br className="hidden sm:block" />
            Gas Equipment is your most <br className="hidden sm:block" />
            preferred supplier:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 relative z-10">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-2">
                Expertise in Products
              </h3>
              <p className="text-sm sm:text-base md:text-xl font-semibold leading-relaxed text-black">
                With cutting-edge tech and expertise, we lead in biogas
                solutions—innovative, reliable, and future-ready.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-2">
                Customized Solutions
              </h3>
              <p className="text-sm sm:text-base md:text-xl font-semibold leading-relaxed text-black">
                We tailor solutions to your unique needs, delivering custom
                products with top performance, durability, and smooth operation.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-2">
                Quality Work
              </h3>
              <p className="text-sm sm:text-base md:text-xl font-semibold leading-relaxed text-black">
                Quality is at our core. From raw materials to final checks,
                every step meets strict standards—ensuring products you can
                trust.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-2">
                Customer Approach
              </h3>
              <p className="text-sm sm:text-base md:text-xl font-semibold leading-relaxed text-black">
                Our satisfaction drives us. At IG Equipment, we craft custom
                solutions and work closely with you to ensure perfect alignment
                with your operational needs.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex justify-center md:justify-end order-first md:order-none">
          <img
            src="/images/WhatsApp Image 2025-07-04 at 5.46.18 PM.jpeg"
            alt="Worker"
            className="w-full h-[650px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

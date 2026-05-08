import React from "react";

const clientLogos = [
  "/images/1.jpeg",
  "/images/10.jpeg",
  "/images/11.jpeg",
  "/images/13.jpeg",
  "/images/1.jpeg",
  "/images/10.jpeg",
  "/images/11.jpeg",
  "/images/13.jpeg",
  "/images/1.jpeg",
  "/images/10.jpeg",
  "/images/11.jpeg",
  "/images/13.jpeg",
  "/images/1.jpeg",
  "/images/10.jpeg",
  "/images/11.jpeg",
  "/images/13.jpeg",
];

const NewClientsPage = () => {
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="w-full bg-[#FFF3EB] md:mb-10 py-8 px-3 sm:px-6">
      <div className="max-w-full mx-auto">
        <h2 className="text-center text-black font-extrabold text-2xl md:text-5xl  italic mb-10">
          Our Clients Who Trust Us
        </h2>
        <style>
          {`
            @keyframes client-marquee {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-client-marquee {
              display: flex;
              width: max-content;
              animation: client-marquee 40s linear infinite;
            }
            .animate-client-marquee:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="relative w-full overflow-hidden">
          <div className="animate-client-marquee gap-4 sm:gap-5 md:gap-6 px-2 sm:px-3">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-40 lg:h-28 bg-white flex items-center rounded-3xl justify-center overflow-hidden flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClientsPage;

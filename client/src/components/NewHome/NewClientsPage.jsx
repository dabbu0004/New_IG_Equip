import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

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
  return (
    <div className="w-full bg-[#FFF3EB] md:mb-10 py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-black font-extrabold text-2xl md:text-5xl  italic mb-10">
          Our Clients Who Trust Us
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={3} // 👈 Default: Mobile view
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 18 }, // small tablets
            768: { slidesPerView: 5, spaceBetween: 20 }, // medium screens
            1024: { slidesPerView: 6, spaceBetween: 24 }, // laptops
            1280: { slidesPerView: 7, spaceBetween: 28 }, // desktops
          }}
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-40 lg:h-28 bg-white l flex items-center rounded-3xl justify-center  overflow-hidden mx-auto">
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewClientsPage;

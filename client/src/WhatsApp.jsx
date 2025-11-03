import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const phoneNumber = "918830317796";
  const message = "Hello, I would like to know more about your services!";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg cursor-pointer z-50 md:hidden flex items-center justify-center"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </div>
  );
};

export default WhatsApp;

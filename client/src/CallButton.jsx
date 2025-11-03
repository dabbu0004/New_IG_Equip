import React from "react";
import { Phone } from "lucide-react";

const CallButton = () => {
  return (
    <a
      href="tel:+918830317796"
      className="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 md:hidden"
      title="Call Now"
    >
      <Phone size={24} />
    </a>
  );
};

export default CallButton;

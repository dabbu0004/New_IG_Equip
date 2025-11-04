import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-50 to-white px-6 py-10">
      <div className="bg-white shadow-2xl rounded-3xl p-8 sm:p-12 max-w-4xl w-full text-center animate-fade-in-up border border-orange-200">
        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center shadow-inner mb-6">
          <CheckCircle className="text-green-500 w-10 h-10" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
          Thank You!
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Your message has been successfully sent. Our team will get back to you
          as soon as possible.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-orange-500 to-red-400 hover:from-orange-600 hover:to-red-500 text-white px-8 py-3 rounded-full text-sm font-semibold transition shadow-md hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;

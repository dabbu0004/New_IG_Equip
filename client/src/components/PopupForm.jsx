import React, { useState, useEffect } from "react";
import {
  IoSend,
  IoCheckmarkCircle,
  IoSparkles,
  IoPerson,
  IoCall,
  IoMail,
  IoChatbubble,
  IoClose,
} from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import {
  handleError,
  handleSuccess,
  handleWarning,
} from "../components/handleUtils";

const PopupForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const shownRoutes = JSON.parse(
      localStorage.getItem("popupShownRoutes") || "[]"
    );
    const currentRoute = location.pathname;
    if (!shownRoutes.includes(currentRoute)) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        const updatedRoutes = [...shownRoutes, currentRoute];
        localStorage.setItem("popupShownRoutes", JSON.stringify(updatedRoutes));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setSubmitted(false);
    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      handleWarning("Please fill all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/query/shortquerypost`,
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        }
      );

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      handleSuccess("Your equipment inquiry has been submitted successfully!");
      setSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err) {
      handleError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden relative transform transition-all duration-300 animate-bounce-in">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 text-xl hover:text-red-500 z-10 transition-colors duration-200"
          aria-label="Close popup"
        >
          <IoClose className="w-6 h-6" />
        </button>

        {/* Image - Always Visible */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/CPCB & ICAT Approved.png"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form - Hidden on mobile */}
        <div className="w-full md:w-1/2 p-6 md:p-8 hidden md:block">
          {submitted ? (
            <div className="text-center py-6 space-y-3 flex items-center justify-center flex-col">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <IoCheckmarkCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Message Sent!</h3>
              <p className="text-gray-600 text-sm">
                Thank you! We'll connect with you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center space-y-1">
                <h2 className="text-2xl font-bold text-gray-800">
                  Talk to Our Expert
                </h2>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-2.5 pointer-events-none">
                    <IoPerson
                      className={`w-4 h-4 ${
                        focusedField === "name" || form.name.length > 0
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-orange-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-2.5 pointer-events-none">
                    <IoCall
                      className={`w-4 h-4 ${
                        focusedField === "phone" || form.phone.length > 0
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your phone number"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-orange-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-2.5 pointer-events-none">
                    <IoMail
                      className={`w-4 h-4 ${
                        focusedField === "email" || form.email.length > 0
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-orange-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-2.5 pointer-events-none">
                    <IoChatbubble
                      className={`w-4 h-4 ${
                        focusedField === "message" || form.message.length > 0
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleFormChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your equipment requirements"
                    rows={3}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-orange-500 outline-none resize-none"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs bg-gray-50 p-3 rounded-md border border-gray-200">
                <p className="text-gray-700">
                  By Submitting the Form, you agree to our{" "}
                  <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
                    privacy policy
                  </span>
                  .
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-80 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <IoSend className="w-4 h-4" />
                    <span>Submit</span>
                    <IoSparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            transform: scale(0.3) translateY(-50px);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PopupForm;

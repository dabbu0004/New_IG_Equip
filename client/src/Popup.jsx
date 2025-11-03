import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init("WY_Qj_U52qx43oUia");
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.privacy) return;

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.firstName,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send("service_hawndof", "template_oq9wtp3", templateParams);

      setSubmitted(true);
      setFormData({
        firstName: "",
        phone: "",
        email: "",
        message: "",
        privacy: false,
      });

      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    }

    setIsSubmitting(false);
  };

  const formFields = [
    {
      label: "Name",
      name: "firstName",
      type: "text",
      icon: User,
      placeholder: "Enter your name",
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "tel",
      icon: Phone,
      placeholder: "+91 12345 67890",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      icon: Mail,
      placeholder: "email@example.com",
    },
    {
      label: "Location of your Plot",
      name: "message",
      type: "text",
      icon: MapPin,
      placeholder: "Enter location",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl hover:text-red-500 z-10"
        >
          ×
        </button>

        {/* Image - Always Visible */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/CPCB & ICAT Approved.png"
            alt="Popup Visual"
            className="w-full h-full object-conver"
          />
        </div>

        {/* Form - Hidden on mobile */}
        <div className="w-full md:w-1/2 p-6 md:p-8 hidden md:block">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7 text-green-600" />
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

              {formFields.map((field) => {
                const Icon = field.icon;
                const isFilled = formData[field.name].length > 0;

                return (
                  <div key={field.name}>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-2.5 pointer-events-none">
                        <Icon
                          className={`w-4 h-4 ${
                            focusedField === field.name || isFilled
                              ? "text-orange-500"
                              : "text-gray-400"
                          }`}
                        />
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        placeholder={field.placeholder}
                        required
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-orange-500 outline-none"
                      />
                    </div>
                  </div>
                );
              })}

              <div className="flex items-start gap-2 text-xs bg-gray-50 p-3 rounded-md border border-gray-200">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 text-orange-500 border-2 border-gray-300 rounded"
                  required
                />
                <p className="text-gray-700">
                  I agree to the{" "}
                  <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
                    privacy policy
                  </span>
                  .
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-80 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;

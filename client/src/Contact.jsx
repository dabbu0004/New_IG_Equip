import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ For navigation
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  User,
  Building,
  Globe,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const navigate = useNavigate(); // ✅ useNavigate hook

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    location: "",
    phone: "",
    email: "",
    message: "",
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Optional visual effect
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      from_name: `${formData.firstName} ${formData.lastName}`,
      company: formData.company,
      location: formData.location,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_hawndof",
        "template_oq9wtp3",
        templateParams,
        "WY_Qj_U52qx43oUia"
      );

      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-11563726235",
        });
      }

      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        location: "",
        phone: "",
        email: "",
        message: "",
        privacy: false,
      });

      navigate("/thank-you"); // ✅ Redirect after success
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    }

    setIsSubmitting(false);
  };

  const formFields = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      icon: User,
      placeholder: "Enter your first name",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      icon: User,
      placeholder: "Enter your last name",
    },
    {
      label: "Company Name",
      name: "company",
      type: "text",
      icon: Building,
      placeholder: "Your company name",
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      icon: MapPin,
      placeholder: "City, Country",
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "tel",
      icon: Phone,
      placeholder: "+91 12345 67890",
    },
    {
      label: "Company Email",
      name: "email",
      type: "email",
      icon: Mail,
      placeholder: "email@company.com",
    },
  ];

  const features = [
    {
      icon: Phone,
      text: "+918830317796 , +917042100426",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: MessageCircle,
      text: "Quick Response Time",
      color: "from-green-400 to-emerald-400",
    },
    { icon: Globe, text: "Global Reach", color: "from-purple-400 to-pink-400" },
    {
      icon: MapPin,
      text: "Plot No.65, Udyog Vihar, Ecotech II, Greater Noida, 201306 India",
      color: "from-yellow-400 to-orange-400",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-red-500 via-orange-500 to-orange-400 py-6 px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Premium Support Experience</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-snug sm:leading-tight">
              Let's{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-white bg-clip-text text-transparent animate-pulse">
                Talk
              </span>
            </h1>
            <p className="text-base sm:text-lg font-light opacity-90 leading-relaxed">
              Transform your business with our expert guidance. We're here to
              make it happen!
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3 sm:space-y-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center sm:justify-start gap-3 text-sm sm:text-base transition-all duration-300"
                >
                  <div
                    className={`p-2 sm:p-3 bg-gradient-to-r ${feature.color} rounded-full backdrop-blur-sm shadow-lg`}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 max-w-lg">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 space-y-4 border border-white/30">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center space-y-1">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Send us a message
                </h2>
                <p className="text-sm text-gray-600">
                  We'd love to hear from you and help grow your business.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formFields.map((field) => {
                  const IconComponent = field.icon;
                  const isFieldFilled = formData[field.name].length > 0;
                  return (
                    <div key={field.name}>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {field.label} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <IconComponent
                            className={`w-4 h-4 ${
                              focusedField === field.name || isFieldFilled
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
                          className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:border-orange-500 outline-none"
                        />
                        {isFieldFilled && (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Additional Information
                </label>
                <div className="relative">
                  <div className="absolute top-2 left-3 pointer-events-none">
                    <MessageCircle
                      className={`w-4 h-4 ${
                        focusedField === "message" ||
                        formData.message.length > 0
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows="3"
                    placeholder="Tell us about your project..."
                    className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:border-orange-500 outline-none resize-none"
                  />
                  {formData.message.length > 0 && (
                    <div className="absolute top-2 right-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                  className="mt-0.5 h-4 w-4 text-orange-500 border-2 border-gray-300 rounded"
                />
                <p className="text-xs text-gray-700">
                  I agree to the{" "}
                  <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
                    privacy policy
                  </span>{" "}
                  and acknowledge that my information will remain confidential
                  and secure.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white font-bold text-base px-6 py-3 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

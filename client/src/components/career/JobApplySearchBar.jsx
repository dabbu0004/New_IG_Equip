import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Upload,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  X,
  CheckCircle,
} from "lucide-react";

const JobApplySearchBar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const uploadToTmpFiles = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://tmpfiles.org/api/v1/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      return data.data?.url || null;
    } catch (err) {
      console.error("File upload error:", err);
      return null;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone required";
    if (!resume) newErrors.resume = "Resume required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setErrors((prev) => ({ ...prev, resume: "PDF only" }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: "Max 5MB" }));
        return;
      }
      setResume(file);
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  const removeFile = () => {
    setResume(null);
    setErrors((prev) => ({ ...prev, resume: "" }));
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    if (!serviceId || !templateId || !publicKey) {
      alert("Email service is not configured. Please contact support.");
      setLoading(false);
      return;
    }

    const resumeLink = await uploadToTmpFiles(resume);

    if (!resumeLink) {
      setErrors((prev) => ({ ...prev, resume: "Upload failed" }));
      setLoading(false);
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || "N/A",
      resumeUrl: resumeLink,
      jobTitle: "Job Application",
    };

    emailjs
      .send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      .then(() => {
        alert("Application sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setResume(null);
        setErrors({});
      })
      .catch((err) => {
        console.error("Email send error:", err);
        alert("Failed to send application: " + err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-4">
      <div className="bg-white shadow-xl rounded-xl px-10 py-6">
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4">
          {/* Name Input */}
          <div className="flex-1 min-w-0 w-full lg:w-auto">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-full border transition-all duration-200 text-sm ${
                  errors.name
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-orange-500 focus:ring-orange-200"
                } focus:ring-2 focus:ring-opacity-50 outline-none`}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 ml-3">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="flex-1 min-w-0 w-full lg:w-auto">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-full border transition-all duration-200 text-sm ${
                  errors.email
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-orange-500 focus:ring-orange-200"
                } focus:ring-2 focus:ring-opacity-50 outline-none`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-3">{errors.email}</p>
            )}
          </div>

          {/* Phone Input */}
          <div className="flex-1 min-w-0 w-full lg:w-auto">
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-full border transition-all duration-200 text-sm ${
                  errors.phone
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-orange-500 focus:ring-orange-200"
                } focus:ring-2 focus:ring-opacity-50 outline-none`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 ml-3">{errors.phone}</p>
            )}
          </div>

          {/* File Upload */}
          <div className="relative">
            <label
              className={`flex items-center px-4 py-3 rounded-full cursor-pointer transition-all duration-200 text-sm font-medium ${
                resume
                  ? "bg-green-100 text-green-700 border-2 border-green-300"
                  : errors.resume
                  ? "bg-red-100 text-red-700 border-2 border-red-300"
                  : "bg-orange-100 text-orange-700 border-2 border-orange-300 hover:bg-orange-200"
              } whitespace-nowrap`}
            >
              {resume ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  CV Uploaded
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload CV
                </>
              )}
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {resume && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg p-3 z-10 min-w-[200px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700 truncate max-w-[120px]">
                      {resume.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
            {errors.resume && (
              <p className="text-red-500 text-xs mt-1 absolute top-full left-0 whitespace-nowrap">
                {errors.resume}
              </p>
            )}
          </div>

          {/* Message Input */}
          <div className="flex-1 min-w-0 w-full lg:w-auto">
            <div className="relative">
              <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="message"
                placeholder="Looking For (Optional)"
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50 outline-none transition-all duration-200 text-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200 text-sm whitespace-nowrap ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            }`}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobApplySearchBar;

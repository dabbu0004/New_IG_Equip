import React, { useState } from "react";
import emailjs from "emailjs-com";
import Contact from "./Contact";
import { Helmet } from "react-helmet-async"; 
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  Star,
} from "lucide-react";

const ContactPages = () => {
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
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitMessage(
        "आपका संदेश सफलतापूर्वक भेज दिया गया है! हम जल्दी ही आपसे संपर्क करेंगे।"
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);

      setTimeout(() => setSubmitMessage(""), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Helmet>
        <title>
          {" "}
          Contact Us | Inventive Gas Equipment – We're Here to Help
        </title>
        <meta
          name="description"
          content="Get in touch with Inventive Gas Equipment for inquiries, support, or partnership opportunities.
Reach out via phone, email, or our contact form. We're happy to assist you!"
        />
      </Helmet>

      <Contact />
    </div>
  );
};

export default ContactPages;

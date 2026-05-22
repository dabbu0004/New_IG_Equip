import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import NewHomepage from "./pages/NewHomepage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ThankYouPage from "./pages/ThankYouPage";
import WhatsApp from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import Popup from "./components/PopupForm";
import Footer from "./components/Footer";
import TopMarquee from "./components/TopMarquee";
import NewContactForm from "./pages/ContactPage.jsx";
import CookieStrip from "./components/CookieStrip";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import ProductDetail from "./pages/ProductDetail";
import CareerPage from "./pages/CareerPage";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
      easing: "ease-in-out",
    });

    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <HelmetProvider>
          <TopMarquee />
          <Navbar />
          <div className="relative">
            <Breadcrumb />
            <Routes>
              <Route path="/" element={<NewHomepage />} />
              <Route path="/new-home" element={<NewHomepage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditionsPage />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="*" element={<NewHomepage />} />
              <Route path="/contact" element={<NewContactForm />} /> 
              <Route path="/blogs" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              {/* <Route path="/careers" element={<CareerPage />} /> */}
            </Routes>
          </div>
          <CallButton />
          <CookieStrip />
          <Footer />
          <WhatsApp />
          <Popup />
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RecdPage from "./pages/RecdPage";
import DualFuelPage from "./pages/DualFuelPage";
import CareerPage from "./pages/CareerPage";
import GasPage from "./pages/GasPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ThankYouPage from "./pages/ThankYouPage";
import WhatsApp from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import Popup from "./components/PopupForm";
import Footer from "./components/Footer";
import BlogsPage from "./pages/BlogsPage";
import EachBlogs from "./components/blogs/EachBlogs";
import GalleryPage from "./pages/GalleryPage";
import TopMarquee from "./components/TopMarquee";
import OcemsPage from "./pages/OcemsPage";
import ProductsPage from "./pages/ProductsPage";
import CookieStrip from "./components/CookieStrip";

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dual-fuel-kit" element={<DualFuelPage />} />
            <Route path="/gas-ganset" element={<GasPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsPage />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route
              path="/retrofit-emission-control-device-recd"
              element={<RecdPage />}
            />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/blogs/:slug" element={<EachBlogs />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/ocems" element={<OcemsPage />} />
            <Route path="/products/:slug" element={<ProductsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
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

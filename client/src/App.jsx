import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RecdPage from "./pages/RecdPage";
import DualFuelPage from "./pages/DualFuelPage";
import CareerPage from "./pages/CareerPage";
import GasPage from "./pages/GasPage";
import BiogasPage from "./pages/BiogasPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ThankYouPage from "./pages/ThankYouPage";
import WhatsApp from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import Popup from "./components/PopupForm";
import Footer from "./components/Footer";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

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
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
        <Route path="/biogas" element={<BiogasPage />} />
        <Route
          path="/retrofit-emission-control-device-recd"
          element={<RecdPage />}
        />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
      <CallButton />
      <Footer />
      <WhatsApp />
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default App;

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeMain from "./pages/home/HomeMain";
import AboutMain from "./pages/about/AboutMain";
import Recd from "./pages/Recd";
import Dual from "./pages/dual/Dual";
import ContactPages from "./ContactPages";
import WhatsApp from "./WhatsApp";
import CallButton from "./CallButton";
import TermsAndCondition from "./TermsAndConditionsPage";

import CareerPage from "./pages/career/CareerPage";
import GasMain from "./pages/gas/GasMain";
import Popup from "./Popup"; // Adjust path as needed
import BioGas from "./pages/Biogas/BioGas"; // Adjust path as needed
import PrivacyPage from "./PrivacyPage";
import TermsAndConditionsPage from "./TermsAndConditionsPage";
import ThankYou from "./pages/ThankYou";

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

    // ✅ Show popup only if it hasn't been shown before in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 5000); // show after 5 seconds

      return () => clearTimeout(timer);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/dual-fuel-kit" element={<Recd />} />
        <Route path="/gas-ganset" element={<GasMain />} />
        <Route path="/Contact" element={<ContactPages />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/biogas" element={<BioGas />} />
        <Route
          path="/retrofit-emission-control-device-recd"
          element={<Dual />}
        />
        <Route path="/career" element={<CareerPage />} />
      </Routes>

      <CallButton />
      <Footer />
      <WhatsApp />

      {/* Show the popup once per session */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default App;

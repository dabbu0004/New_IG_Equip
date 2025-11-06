import React from "react";
import FirstPage from "../components/home/FirstPage";
import SecondPage from "../components/home/SecondPage";
import FourthPage from "../components/home/FourthPage";
import FivePage from "../components/home/FivePage";
import FaqSection from "../components/home/FaqSection";
import Gallery from "../components/home/Gallery";
import ClientPage from "../components/home/ClientsSection";
import ThirdPage from "../components/home/ThirdPage";
import Contact from "../components/ContactForm";

const HomeMain = () => {
  return (
    <div>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FivePage />
      <ClientPage />
      <Gallery />
      <FaqSection />
      <Contact />
    </div>
  );
};

export default HomeMain;

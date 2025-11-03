import React from "react";
import FirstPage from "./FirstPage";
import Contact from "../../Contact";
import SecondPage from "./SecondPage";
import FourthPage from "./FourthPage";
import FivePage from "./FivePage";
import FaqSection from "./FaqSection";
import Gallery from "../gallery/Gallery";
import ClientPage from "../dual/ClientPage";
import ThirdPage from "./ThirdPage";

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

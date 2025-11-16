import React from "react";
import { Helmet } from "react-helmet-async";
import FirstPage from "../components/gas/FirstPage";
import SecondPage from "../components/home/SecondPage";
import ThirdPage from "../components/gas/ThirdPage";
import FourthPage from "../components/gas/FourthPage";
import ClientPage from "../components/home/ClientsSection";
import SixPage from "../components/gas/SixPage";
import SevenPage from "../components/gas/SevenPage";
import Contact from "../components/ContactForm";
import AddressMap from "../components/AddressMap";

const GasMain = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Gas Genset Solutions | Reliable & Clean Power by Inventive Gas
            Equipment
          </title>
          <meta
            name="description"
            content="Explore advanced gas genset solutions by Inventive Gas Equipment—designed for clean,
efficient, and cost-effective power generation. Power smarter, the sustainable way."
          />
        </Helmet>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <SixPage />
        <SevenPage />
        <ClientPage />
        <Contact />
      </>
    </div>
  );
};

export default GasMain;

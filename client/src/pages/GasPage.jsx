import React from "react";
import { Helmet } from "react-helmet-async";
import GasGensetHero from "../components/gasGenset/gasGensetHero";
import SecondPage from "../components/biogas/SecondPage";
import ThirdPage from "../components/gasGenset/ThirdPage";
import FourthPage from "../components/gasGenset/FourthPage";
import ClientPage from "../components/home/ClientsSection";
import SixPage from "../components/gasGenset/SixPage";
import SevenPage from "../components/gasGenset/SevenPage";
import Contact from "../components/ContactForm";

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
        <GasGensetHero />
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

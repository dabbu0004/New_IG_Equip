import React from "react";
import { Helmet } from "react-helmet-async";
import FirstPage from "../components/biogas/FirstPage";
import SecondPage from "../components/biogas/SecondPage";
import ThirdPage from "../components/biogas/ThirdPage";
import Contact from "../components/ContactForm";
import ClientPage from "../components/home/ClientsSection";
import ProductPage from "../components/biogas/ProductPage";
import NinePage from "../components/biogas/NinePage";
const BioGas = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Biogas Solutions | Renewable & Sustainable Energy by Inventive
          </title>
          <meta
            name="description"
            content="Inventive Gas Equipment offers reliable biogas solutions to convert organic waste into clean,renewable energy. Powering a greener, sustainable future across India."
          />
        </Helmet>
        <FirstPage />
        <SecondPage />
        <ProductPage />
        <ThirdPage />
        <NinePage />
        <ClientPage />
        <Contact />
      </>
    </div>
  );
};

export default BioGas;

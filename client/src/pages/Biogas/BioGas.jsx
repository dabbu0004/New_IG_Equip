import React from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

import ThirdPage from "./ThirdPage";
import Contact from "../../Contact";
import ClientPage from "../dual/ClientPage";
import { Helmet } from "react-helmet-async"; // ✅ Helmet import
import ProductPage from "./ProductPage";

import NinePage from "./NinePage";

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

import React from "react";
import FirstPage from "./FirstPage";
import SecondPage from "../home/SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import { Helmet } from "react-helmet-async"; // ✅ Helmet import

import Contact from "../../Contact";
import ClientPage from "../dual/ClientPage";
import SixPage from "./SixPage";
import SevenPage from "./SevenPage";

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

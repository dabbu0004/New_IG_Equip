import React from "react";
import { Helmet } from "react-helmet-async"; 

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import SevenPage from "../SevenPage";
import EightPage from "./EightPage";
import Contact from "../../Contact";
import ClientPage from "./ClientPage";
import EkPage from "./EkPage";

const Dual = () => {
  return (
    <div>
      <Helmet>
        <title>Vayu Pure RECD – Retrofit Emission Control Device | CPCB Approved Solution by Inventive
Gas Equipment
</title>
        <meta name="description" content="Inventive Gas Equipment is India’s No.1 RECD Device Manufacturer. Discover CPCB-approved
Vayu pure Retrofit Emission Control Devices to reduce diesel generator emissions and ensure
compliance." />
      </Helmet>

      <EkPage />
      {/* <FirstPage /> */}
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <EightPage />
      <SevenPage />
      <ClientPage />
      <Contact />
    </div>
  );
};

export default Dual;

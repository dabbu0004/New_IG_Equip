import React from "react";
import OnePage from "./OnePage";
import TwoPage from "./TwoPage";
import ThreePage from "./ThreePage";
import FourPage from "./FourPage";
import PanchPage from "./PanchPage";
import { Helmet } from "react-helmet-async"; // ✅ Helmet import

import SixPage from "./SixPage";
import SevenPage from "./SevenPage";
import Contact from "../Contact";

const Recd = () => {
  return (
    <div>
      <Helmet>
        <title>
          Dual Fuel Kit for Diesel Generators | Gas Conversion Solutions by
          Inventive Gas Equipment
        </title>
        <meta
          name="description"
          content="Upgrade your diesel generators with our advanced Dual Fuel Kit. Convert to gas and reduce
emissions, fuel costs & maintenance. Trusted solution by Inventive Gas Equipment."
        />
      </Helmet>
      <OnePage />
      <TwoPage />
      <ThreePage />
      <Contact />
      {/* <FourPage/>
      <SevenPage/>
      <SixPage/>
      <PanchPage/> */}
    </div>
  );
};

export default Recd;

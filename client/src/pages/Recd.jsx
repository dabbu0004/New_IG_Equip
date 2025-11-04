import React from "react";
import OnePage from "./OnePage";
import TwoPage from "./TwoPage";
import ThreePage from "./ThreePage";
import { Helmet } from "react-helmet-async";
import Contact from "../Contact";

const Recd = () => {
  return (
    <div>
      <Helmet>
        <title>
          Dual Fuel Kits for Diesel Gensets | Save Fuel, Cut Emissions, Boost
          Efficiency
        </title>
        <meta
          name="description"
          content="Switch your diesel genset to a Dual Fuel Kit by Inventive Gas
Equipment. Save energy costs, reduce emissions, and ensure reliable 24/7 clean power."
        />
      </Helmet>
      <OnePage />
      <TwoPage />
      <ThreePage />
      <Contact />
    </div>
  );
};

export default Recd;

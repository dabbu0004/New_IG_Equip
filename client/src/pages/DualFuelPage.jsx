import React from "react";
import { Helmet } from "react-helmet-async";
import OnePage from "../components/dualFuelKit/DualFuelKitHero";
import TwoPage from "../components/dualFuelKit/TwoPage";
import ThreePage from "../components/dualFuelKit/ThreePage";
import Contact from "../components/ContactForm";

const DualFuelPage = () => {
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

export default DualFuelPage;

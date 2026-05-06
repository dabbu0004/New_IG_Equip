import React from "react";
import HomeHero from "../components/NewHome/HomeHero";
import HomeProductRange from "../components/NewHome/HomeProductsRange";
import Certified from "../components/NewHome/Certified";
import WhyUs from "../components/NewHome/WhyUs";
import HowWeWork from "../components/NewHome/HowWeWork";

const NewHomepage = () => {
  return (
    <div>
      <HomeHero />
        <Certified />
            <HomeProductRange />
            <WhyUs/>
            <HowWeWork/>

    </div>
  );
};

export default NewHomepage;

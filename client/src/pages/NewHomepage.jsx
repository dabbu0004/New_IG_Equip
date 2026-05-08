import React from "react";
import HomeHero from "../components/NewHome/HomeHero";
import HomeProductRange from "../components/NewHome/HomeProductsRange";
import Certified from "../components/NewHome/Certified";
import WhyUs from "../components/NewHome/WhyUs";
import HowWeWork from "../components/NewHome/HowWeWork";
import Industries from "../components/NewHome/Industries";
import NewContactForm from "../components/NewContactForm";
import NewClientsPage from "../components/NewHome/NewClientsPage";
import NewGallery from "../components/NewHome/NewGallery";
import PanIndiaMap from "../components/NewHome/PanIndiaMap";


const NewHomepage = () => {
  return (
    <div>
      <HomeHero />
        <Certified />
            <HomeProductRange />
            <WhyUs/>
            <HowWeWork/>
            <Industries/>
          <NewClientsPage/>
          <PanIndiaMap/>
          <NewGallery/>
          <NewContactForm/>

    </div>
  );
};

export default NewHomepage;

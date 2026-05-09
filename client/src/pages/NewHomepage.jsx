import React from "react";
import { Helmet } from "react-helmet-async";
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
import SecondHero from "../components/NewHome/SecondHero";


const NewHomepage = () => {
  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <HomeHero />
      <SecondHero />
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

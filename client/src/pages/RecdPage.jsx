import React, { useEffect } from "react";
import RecdHero from "../components/recd/RecdHero";
import RecdFeatures from "../components/recd/RecdFeatures";
import WhyChooseUs from "../components/recd/WhyChooseUs";
import RecdGuidelines from "../components/recd/RecdGuidelines";
import BlogsSection from "../components/blogs/BlogsSection";
import CtaBanner from "../components/recd/CtaBanner";
import RecdApplications from "../components/recd/RecdApplications";
import Clients from "../components/recd/Clients";
import Faqs from "../components/recd/Faqs";
import WhatIsRecd from "../components/recd/WhatIsRecd";
import HowRecdWork from "../components/recd/HowRecdWork";
import { Helmet } from "react-helmet-async";

const RecdPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-0">
      <Helmet>
        <title>
          Retrofit Emission Control Device (RECD) | Emission Control Device by
          IGE
        </title>
        <meta
          name="description"
          content="Retrofit Emission Control Device (RECD) by Inventive Gas Equipment ensures CPCB & ICAT compliance with advanced technology for cleaner air."
        />
      </Helmet>
      <RecdHero />
      <WhatIsRecd />
      <HowRecdWork />
      <RecdFeatures />
      <RecdApplications />
      <WhyChooseUs />
      <Clients />
      <CtaBanner />
      <RecdGuidelines />
      <BlogsSection />
      <Faqs />
    </div>
  );
};

export default RecdPage;

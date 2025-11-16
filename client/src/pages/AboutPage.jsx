import React from "react";
import { Helmet } from "react-helmet-async";
import FirstPage from "../components/about/FirstPage";
import ContactForm from "../components/ContactForm";
import SecondPage from "../components/about/SecondPage";
import FourthPage from "../components/about/FourthPage";
import ThirdPage from "../components/about/ThirdPage";
import FivePage from "../components/about/FivePage";
import AddressMap from "../components/AddressMap";
const AboutMain = () => {
  return (
    <div>
      <Helmet>
        <title>
          About Us | Inventive Gas Equipment – Leaders in Clean Energy
          Innovation
        </title>
        <meta
          name="description"
          content="Learn about Inventive Gas Equipment – a forward-thinking company dedicated to sustainable energy, environmental responsibility, and industrial innovation."
        />
      </Helmet>

      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FivePage />
      <ContactForm />
    </div>
  );
};

export default AboutMain;

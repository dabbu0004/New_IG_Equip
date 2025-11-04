import React from "react";
import { Helmet } from "react-helmet-async";
import SecondPage from "../home/SecondPage";
import ThirdPage from "./ThirdPage";
import SevenPage from "../SevenPage";
import EightPage from "./EightPage";
import Contact from "../../Contact";
import ClientPage from "./ClientPage";
import EkPage from "./EkPage";
import SectionData from "../../data/SectionData";
import Section from "../../pages/dual/SectionPage";

const Dual = () => {
  return (
    <div>
      <Helmet>
        <title>
          Retrofit Emission Control Device (RECD) | Emission Control Device by
          IGE
        </title>
        <meta
          name="description"
          content="Retrofit Emission Control Device (RECD) by Inventive Gas Equipment ensures CPCB &
ICAT compliance with advanced technology for cleaner air."
        />
      </Helmet>

      <EkPage />
      <SecondPage />
      <ThirdPage />
      {SectionData.map((section) => (
        <Section key={section.id} section={section} />
      ))}
      <EightPage />
      <SevenPage />
      <ClientPage />
      <Contact />
    </div>
  );
};

export default Dual;

import React from "react";
import { Helmet } from "react-helmet-async";
import SecondPage from "../components/home/SecondPage";
import ThirdPage from "../components/recd/ThirdPage";
import SevenPage from "../components/recd/SevenPage";
import EightPage from "../components/recd/EightPage";
import ClientSection from "../components/home/ClientsSection";
import EkPage from "../components/recd/EkPage";
import SectionData from "../data/SectionData";
import Section from "../components/recd/SectionPage";
import ContactForm from "../components/ContactForm";
import AddressMap from "../components/AddressMap";

const RecdPage = () => {
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
      <ClientSection />
      <ContactForm />
    </div>
  );
};

export default RecdPage;

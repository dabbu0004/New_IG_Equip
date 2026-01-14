import React, { useEffect } from "react";
import ServicesHero from "../components/services/ServicesHero";
import Service2 from "../components/services/Service2";
import Service3 from "../components/services/Service3";
import Service4 from "../components/services/Service4";
import Service5 from "../components/services/Service5";
import ContactForm from "../components/ContactForm";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ServicesHero />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <ContactForm />
    </div>
  );
};

export default ServicesPage;

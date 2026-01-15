import React, { useEffect } from "react";
import OcemsHero from "../components/ocems/OcemsHero";
import Ocems2 from "../components/ocems/Ocems2";
import Ocems3 from "../components/ocems/Ocems3";
import Ocems4 from "../components/ocems/Ocems4";
import Ocems5 from "../components/ocems/Ocems5";
import ContactForm from "../components/ContactForm";

const OcemsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <OcemsHero />
      <Ocems2 />
      <Ocems3 />
      <Ocems4 />
      <Ocems5 />
      <ContactForm />
    </div>
  );
};

export default OcemsPage;

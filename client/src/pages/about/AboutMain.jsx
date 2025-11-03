import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ Import Helmet
import FirstPage from "./FirstPage";
import Contact from "../../Contact";
import SecondPage from "./SecondPage";
import FourthPage from "./FourthPage";
import ThirdPage from "./ThirdPage";
import FivePage from "./FivePage";

const AboutMain = () => {
  return (
    <div>
      {/* ✅ Add meta tags for About Us page */}
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
      <Contact />
    </div>
  );
};

export default AboutMain;

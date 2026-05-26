import React from "react";
import AboutHero from "../components/About/AboutHero";
import EndToEndSolutions from "../components/About/EndToEndSolutions";
import AboutTeam from "../components/About/AboutTeam";
import AboutTimeline from "../components/About/AboutTimeline";
import AboutResults from "../components/About/AboutResults";

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <AboutHero />
      <EndToEndSolutions />
      <AboutTeam />
      <AboutTimeline />
      <AboutResults />
    </div>
  );
};

export default AboutPage;
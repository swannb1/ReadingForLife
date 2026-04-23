import FindTutorSection from "./Components/About/FindTutorSection";
import HeroBanner from "./Components/About/HeroBanner";
import MissionSection from "./Components/About/MissionSection";
import ResourcesSection from "./Components/About/ResourcesSection";
import AboutDyslexiaIllustration from "./assets/Images/AboutDyslexia.svg";
import WhatIsDyslexia from "./Components/About/WhatIsDyslexia";
import SignsOfDyslexia from "./Components/About/SignsOfDyslexia";
import Treatment from "./Components/About/Treatment";

const AboutDyslexia = () => {
  return (
    <div className="bg-white">
      <HeroBanner />
      <MissionSection text="Reading for Life Southern Utah is committed to increasing public understanding of dyslexia and expanding access to evidence-based resources, information, and tutoring for students and families across Southern Utah." />
      <FindTutorSection />
      <div className="w-full py-8 px-0 bg-white">
        <img src={AboutDyslexiaIllustration} alt="About Dyslexia overview" className="w-full h-auto" />
      </div>
      <WhatIsDyslexia />
      <SignsOfDyslexia />
      <Treatment />
      <ResourcesSection />
    </div>
  );
};

export default AboutDyslexia;

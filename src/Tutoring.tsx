import TutorHero from "./assets/Images/Tutor.svg";
import Disclaimer from "./Components/Tutoring/Disclaimer";
import TutorContactSection from "./Components/Tutoring/TutorContactSection";
import Scholarships from "./Components/Tutoring/Scholarships";

const Tutoring = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-full overflow-hidden">
        <img src={TutorHero} alt="Tutor supporting a student" className="w-full h-full object-cover" />
      </div>
      <Disclaimer />
      <TutorContactSection />
      <Scholarships />
    </div>
  );
};

export default Tutoring;

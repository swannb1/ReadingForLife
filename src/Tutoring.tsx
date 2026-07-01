import TutorHero from "./assets/Images/Tutor.svg";
import Disclaimer from "./Components/Tutoring/Disclaimer";
import Scholarships from "./Components/Tutoring/Scholarships";
import TutorCardList from "./Components/Tutoring/TutorCardList";

const Tutoring = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-full overflow-hidden">
        <img src={TutorHero} alt="Tutor supporting a student" className="w-full h-full object-cover" />
      </div>
      <Disclaimer />
      <TutorCardList />
      <Scholarships />
    </div>
  );
};

export default Tutoring;

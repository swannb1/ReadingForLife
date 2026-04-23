import DonateHero from "./assets/Images/Donate.svg";
import ContactCard from "./Components/Donate/ContactCard";

const Donate = () => {
  return (
    <div className="bg-white">
      <div className="w-full">
        <img src={DonateHero} alt="Donate" className="w-full h-auto" />
      </div>
      <ContactCard />
    </div>
  );
};

export default Donate;

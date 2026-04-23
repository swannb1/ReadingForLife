import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import Logo from "../../assets/Images/Logo.svg";

const NAV_LINKS = [
  { name: "ABOUT DYSLEXIA", to: "/" },
  { name: "RESOURCES", to: "/resources" },
  { name: "TUTORING", to: "/tutoring" },
];

const NavBar = () => {
  return (
    <nav className="w-full bg-white py-0 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Reading for Life Southern Utah logo" className="h-24 sm:h-36 w-auto" />
        </Link>

        <div className="flex flex-wrap sm:flex-1 items-center justify-center gap-4 sm:gap-6">
          {NAV_LINKS.map((link) => (
            <NavButton key={link.to} name={link.name} to={link.to} />
          ))}
        </div>

        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <NavButton name="DONATE" to="/donate" variant="donate" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

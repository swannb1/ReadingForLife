import { NavLink } from "react-router-dom";

type ButtonProps = {
  name: string;
  to: string;
  variant?: "primary" | "donate";
};

const NavButton: React.FC<ButtonProps> = ({ name, to, variant = "primary" }) => {
  const baseStyles = "font-cubano text-lg tracking-wide uppercase px-6 py-2 rounded-xl transition-colors duration-200 whitespace-nowrap";

  const primaryStyles = "text-[color:var(--color-blue)] hover:bg-[color:var(--color-softBlue)] hover:text-white";
  const donateStyles = "text-[color:var(--color-orange)] bg-[color:var(--color-softOrange)] hover:brightness-95";

  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) => {
        const activePrimary = isActive && variant === "primary" ? "bg-[color:var(--color-softBlue)] text-white" : "";
        const activeDonate = isActive && variant === "donate" ? "ring-2 ring-[color:var(--color-orange)] ring-opacity-40" : "";
        const variantStyles = variant === "donate" ? donateStyles : primaryStyles;

        return [baseStyles, variantStyles, activePrimary || activeDonate].filter(Boolean).join(" ");
      }}
    >
      {name}
    </NavLink>
  );
};

export default NavButton;

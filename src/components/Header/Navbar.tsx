import { useLenis } from "@studio-freight/react-lenis";
import MyNavLink from "./MyNavLink";
import { useLocation } from "react-router-dom";

type NavbarProps = { style?: "row" | "col"; handleClick?: () => void };

function Navbar({ style = "row", handleClick }: NavbarProps) {
  const lenis = useLenis();
  const location = useLocation();

  function handleClickCol() {
    if (style === "row") return;
    handleClick?.();
  }

  function scrollToWorks() {
    lenis?.scrollTo("#about");
    handleClick?.();
  }

  return (
    <nav className={`${style === "row" ? "h-full" : ""}`}>
      <ul
        className={`${
          style === "row" ? "flex-row" : "flex-col"
        } flex h-full gap-12`}
      >
        <MyNavLink to="/" onClick={handleClickCol}>
          Page d'accueil
        </MyNavLink>
        {location.pathname === "/" && (
          <MyNavLink to="/#about" onClick={scrollToWorks}>
            A propos
          </MyNavLink>
        )}
        <MyNavLink to="/contact" onClick={handleClickCol}>
          Contact
        </MyNavLink>
      </ul>
    </nav>
  );
}

export default Navbar;

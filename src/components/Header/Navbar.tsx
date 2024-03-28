import MyNavLink from "./MyNavLink";

type NavbarProps = { style?: "row" | "col"; handleClick?: () => void };

function Navbar({ style = "row", handleClick }: NavbarProps) {
  function handleClickCol() {
    if (style === "row") return;
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
        <MyNavLink to="/contact" onClick={handleClickCol}>
          Contact
        </MyNavLink>
      </ul>
    </nav>
  );
}

export default Navbar;

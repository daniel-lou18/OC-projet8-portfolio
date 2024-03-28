import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

function Header() {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  useEffect(() => {
    function toggleHamburger() {
      window.scrollY > 150 ? setShowHamburger(true) : setShowHamburger(false);
      window.scrollY < 50 ? setShowHeader(true) : setShowHeader(false);
    }
    window.addEventListener("scroll", toggleHamburger);

    return () => window.removeEventListener("scroll", toggleHamburger);
  }, [showHamburger]);

  return (
    <>
      <HeaderDesktop
        showHeader={showHeader}
        showHamburger={showHamburger}
        handleClick={toggleMenu}
        showMenu={showMenu}
      />
      <HeaderMobile
        showHeader={showHeader}
        showMenu={showMenu}
        handleClick={toggleMenu}
      />
      <HamburgerMenu isVisible={showMenu} handleClick={toggleMenu} />
    </>
  );
}

export default Header;

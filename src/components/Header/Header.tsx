import { AnimatePresence, motion } from "framer-motion";
import Name from "./Name";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";

function Header() {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);

  useEffect(() => {
    function toggleHamburger() {
      window.scrollY > 350 ? setShowHamburger(true) : setShowHamburger(false);
      window.scrollY < 250 ? setShowHeader(true) : setShowHeader(false);
    }
    window.addEventListener("scroll", toggleHamburger);

    return () => window.removeEventListener("scroll", toggleHamburger);
  }, [showHamburger]);

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            className="justify-between w-full h-16 top-0 z-20 p-4 pr-8 flex items-center fixed"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
          >
            <Name />
            <Navbar />
          </motion.header>
        )}
      </AnimatePresence>
      <Hamburger isVisible={showHamburger} />
    </>
  );
}

export default Header;

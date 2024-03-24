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
      window.scrollY > 150 ? setShowHamburger(true) : setShowHamburger(false);
      window.scrollY < 50 ? setShowHeader(true) : setShowHeader(false);
    }
    window.addEventListener("scroll", toggleHamburger);

    return () => window.removeEventListener("scroll", toggleHamburger);
  }, [showHamburger]);

  return (
    <>
      <div className="lg:block hidden">
        <AnimatePresence initial={false}>
          {showHeader && (
            <motion.header
              className="justify-between w-full h-16 top-4 z-20 px-[8%] flex items-center fixed"
              initial={{ y: -125 }}
              animate={{ y: 0 }}
              exit={{ y: -125 }}
              transition={{ damping: 50, stiffness: 200 }}
            >
              <Name />
              <Navbar />
            </motion.header>
          )}
        </AnimatePresence>
        <Hamburger isVisible={showHamburger} />
      </div>
      <div className="lg:hidden flex justify-between items-center fixed">
        <div className="relative top-12 left-4">
          <Name />
        </div>
        <Hamburger isVisible={true} size={70} />
      </div>
    </>
  );
}

export default Header;

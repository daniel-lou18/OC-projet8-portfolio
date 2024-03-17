import { AnimatePresence, motion } from "framer-motion";
import Name from "./Name";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";
import PhotoBall from "../ui/TrackBall/PhotoBall";
import image from "../../assets/images/PHOTO UP-20211120-Vermogen-82.jpg";

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
            className="justify-between w-full h-16 top-10 z-20 px-[8%] flex items-center fixed"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
          >
            <motion.div
              className="text-4xl text-nowrap flex gap-8 items-center"
              style={{ fontFamily: "Bebas Neue" }}
            >
              <PhotoBall linkTo="/contact" size={75}>
                <div className="w-[75px] h-[75px] overflow-hidden bg-white opacity-75">
                  <motion.img
                    src={image}
                    className="w-full h-full"
                    initial={{ filter: "grayscale(80%)" }}
                    whileHover={{ filter: "grayscale(0%)" }}
                  />
                </div>
              </PhotoBall>
              <Name />
            </motion.div>
            <Navbar />
          </motion.header>
        )}
      </AnimatePresence>
      <Hamburger isVisible={showHamburger} />
    </>
  );
}

export default Header;

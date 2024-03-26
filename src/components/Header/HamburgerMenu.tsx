import { MouseEvent, useRef } from "react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";

type HamburgerMenuProps = {
  isVisible: boolean;
  handleClick: () => void;
};

function HamburgerMenu({ isVisible, handleClick }: HamburgerMenuProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  function clickOutside(e: MouseEvent<HTMLDivElement>) {
    if (!backdropRef.current?.contains(e.target as Node)) return;
    handleClick();
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed left-0 top-0 w-0 md:w-full h-full z-40 backdrop-filter backdrop-brightness-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.7, ease: "easeOut" }}
            ref={backdropRef}
            onClick={clickOutside}
          ></motion.div>
          <motion.div
            className="fixed h-screen w-screen lg:w-1/3 px-8 md:px-12 pt-40 pb-16 right-0 bg-gray-900 text-slate-100 text-3xl z-40"
            initial={{ translateX: 1500 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 1500 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          >
            <Navbar style="col" handleClick={handleClick} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default HamburgerMenu;

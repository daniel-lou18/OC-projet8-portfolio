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
            className="fixed left-0 top-0 z-40 h-full w-0 text-slate-950 backdrop-brightness-50 backdrop-filter md:w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.7, ease: "easeOut" }}
            ref={backdropRef}
            onClick={clickOutside}
          ></motion.div>
          <motion.div
            className="fixed right-0 z-40 h-screen w-screen bg-gray-900 px-8 pb-16 pt-40 text-3xl text-slate-100 md:px-12 lg:w-1/3"
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

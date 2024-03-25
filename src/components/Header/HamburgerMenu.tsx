import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";

function HamburgerMenu({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div className="fixed left-0 top-0 w-full h-full z-40 backdrop-filter backdrop-brightness-50"></motion.div>
          <motion.div
            className="fixed h-screen w-1/4 px-8 py-16 right-0 bg-gray-900 text-slate-100 z-40"
            initial={{ translateX: 500 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 500 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          >
            <Navbar style="col" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default HamburgerMenu;

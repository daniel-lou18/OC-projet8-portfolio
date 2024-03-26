import { AnimatePresence, motion } from "framer-motion";
import Name from "./NameV1";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";

export type HeaderProps = {
  showHeader: boolean;
  handleClick: () => void;
};

type HeaderDesktopProps = HeaderProps & { showHamburger: boolean };

function HeaderDesktop({
  showHeader,
  showHamburger,
  handleClick,
}: HeaderDesktopProps) {
  return (
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
      <Hamburger isVisible={showHamburger} onClick={handleClick} />
    </div>
  );
}

export default HeaderDesktop;

import { AnimatePresence, motion } from "framer-motion";
import Name from "./Name";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";

export type HeaderProps = {
  showHeader: boolean;
  showMenu: boolean;
  handleClick: () => void;
};

type HeaderDesktopProps = HeaderProps & { showHamburger: boolean };

function HeaderDesktop({
  showHeader,
  showHamburger,
  showMenu,
  handleClick,
}: HeaderDesktopProps) {
  return (
    <div className="hidden text-slate-950 lg:block">
      <AnimatePresence initial={false}>
        {showHeader && (
          <motion.header
            className="fixed top-4 z-20 flex h-16 w-full items-center justify-between px-[8%]"
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
      <Hamburger
        isVisible={showHamburger || showMenu}
        showMenu={showMenu}
        onClick={handleClick}
      />
    </div>
  );
}

export default HeaderDesktop;

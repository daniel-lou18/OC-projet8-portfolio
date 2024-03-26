import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "./Hamburger";
import Name from "./NameV1";
import { HeaderProps } from "./HeaderDesktop";

type HeaderMobileProps = HeaderProps & { showMenu: boolean };

function HeaderMobile({
  showHeader,
  showMenu,
  handleClick,
}: HeaderMobileProps) {
  return (
    <div className="lg:hidden flex justify-between items-center fixed z-50 pl-[8%] pt-8">
      <AnimatePresence>
        {showHeader && !showMenu && (
          <motion.div
            className="h-[70px] flex items-center"
            initial={{ y: -125, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -125, opacity: 0 }}
            transition={{ damping: 50, stiffness: 200 }}
          >
            <Name />
          </motion.div>
        )}
      </AnimatePresence>
      <Hamburger isVisible={true} onClick={handleClick} size={70} />
    </div>
  );
}

export default HeaderMobile;

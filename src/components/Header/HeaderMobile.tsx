import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "./Hamburger";
import Name from "./Name";
import { HeaderProps } from "./HeaderDesktop";

type HeaderMobileProps = HeaderProps;

function HeaderMobile({
  showHeader,
  showMenu,
  handleClick,
}: HeaderMobileProps) {
  return (
    <div className="fixed z-50 flex items-center justify-between pl-[8%] pt-8 text-slate-950 lg:hidden">
      <AnimatePresence>
        {showHeader && !showMenu && (
          <motion.div
            className="flex h-[70px] items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <Name />
          </motion.div>
        )}
      </AnimatePresence>
      <Hamburger
        isVisible={true}
        showMenu={showMenu}
        onClick={handleClick}
        size={70}
      />
    </div>
  );
}

export default HeaderMobile;

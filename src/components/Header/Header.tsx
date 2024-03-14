import { motion } from "framer-motion";
import Name from "./Name";
import Navbar from "./Navbar";

function Header() {
  return (
    <motion.header className="justify-between w-full h-16 top-0 z-20 p-4 pr-8 flex items-center fixed">
      <Name />
      <Navbar />
    </motion.header>
  );
}

export default Header;

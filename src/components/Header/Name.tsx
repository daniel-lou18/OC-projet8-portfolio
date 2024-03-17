import { motion } from "framer-motion";
import PhotoBall from "../ui/TrackBall/PhotoBall";
import image from "../../assets/images/PHOTO UP-20211120-Vermogen-82.jpg";

function Name() {
  const variants = {
    hidden: { y: -200 },
    visible: { y: 0 },
    transition: {
      type: "spring",
      bounce: 1,
    },
  };
  return (
    <motion.div
      className="relative flex items-center gap-6"
      initial="hidden"
      whileHover="visible"
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
      <span>© Daniel</span>
      <motion.span
        variants={variants}
        transition={{ type: "spring", duration: 0.2 }}
      >
        D
      </motion.span>
      <motion.span
        variants={variants}
        transition={{ type: "spring", duration: 0.2 }}
      >
        e
      </motion.span>
      <motion.span
        variants={variants}
        transition={{ type: "spring", duration: 0.2 }}
      >
        r
      </motion.span>
      <motion.span
        variants={variants}
        transition={{ type: "spring", duration: 0.3 }}
      >
        u
      </motion.span>
      <motion.span
        variants={variants}
        transition={{ type: "spring", duration: 0.4 }}
      >
        d
      </motion.span>
      <motion.span
        variants={variants}
        transition={{ type: "spring", duration: 0.5 }}
      >
        d
      </motion.span>
      <motion.span
        variants={variants}
        transition={{ type: "spring", duration: 0.6 }}
      >
        e
      </motion.span>
      <motion.span
        variants={variants}
        transition={{ type: "spring", duration: 0.7 }}
      >
        r
      </motion.span>
    </motion.div>
  );
}

export default Name;

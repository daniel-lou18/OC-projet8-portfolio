import { motion } from "framer-motion";
import PhotoBall from "../ui/TrackBall/PhotoBall";
import image from "../../assets/images/PHOTO UP-20211120-Vermogen-82.jpg";
import { Link } from "react-router-dom";

function Name() {
  const variants = {
    hidden: { y: -200 },
    visible: { y: 0 },
    transition: {
      type: "spring",
      bounce: 1,
    },
  };

  const wordVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        type: "tween",
        duration: 2,
      },
    },
  };
  return (
    <Link to="/">
      <motion.div
        className="relative flex items-center gap-6 text-xl"
        initial="hidden"
        whileHover="visible"
      >
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-white opacity-75 lg:block hidden shrink-0">
          <motion.img
            src={image}
            className="w-full h-full"
            initial={{ filter: "grayscale(80%)" }}
            whileHover={{ filter: "grayscale(0%)" }}
          />
        </div>
        <motion.div className="overflow-hidden" variants={wordVariants}>
          <span>D</span>
          <motion.span
            className="w-fit"
            variants={variants}
            transition={{ type: "spring", delay: 0.2, duration: 0.2 }}
          >
            a
          </motion.span>
          <motion.span
            className="w-fit"
            variants={variants}
            transition={{ type: "spring", delay: 0.2, duration: 0.2 }}
          >
            n
          </motion.span>
          <motion.span
            className="w-fit"
            variants={variants}
            transition={{ type: "spring", duration: 0.3 }}
          >
            i
          </motion.span>
          <motion.span
            className="w-fit"
            variants={variants}
            transition={{ type: "spring", duration: 0.4 }}
          >
            e
          </motion.span>
          <motion.span
            className="w-fit"
            variants={variants}
            transition={{ type: "spring", duration: 0.5 }}
          >
            l
          </motion.span>
        </motion.div>
        <span>D</span>
        <motion.span
          className="w-fit"
          variants={variants}
          transition={{ type: "spring", delay: 0.2, duration: 0.2 }}
        >
          e
        </motion.span>
        <motion.span
          className="w-fit"
          variants={variants}
          transition={{ type: "spring", delay: 0.2, duration: 0.2 }}
        >
          r
        </motion.span>
        <motion.span
          className="w-fit"
          variants={variants}
          transition={{ type: "spring", delay: 0.2, duration: 0.3 }}
        >
          u
        </motion.span>
        <motion.span
          className="w-fit"
          variants={variants}
          transition={{ type: "spring", delay: 0.2, duration: 0.4 }}
        >
          d
        </motion.span>
        <motion.span
          className="w-fit"
          variants={variants}
          transition={{ type: "spring", delay: 0.2, duration: 0.5 }}
        >
          d
        </motion.span>
        <motion.span
          className="w-fit"
          variants={variants}
          transition={{ type: "spring", delay: 0.2, duration: 0.6 }}
        >
          e
        </motion.span>
        <motion.span
          className="w-fit"
          variants={variants}
          transition={{ type: "spring", delay: 0.2, duration: 0.7 }}
        >
          r
        </motion.span>
      </motion.div>
    </Link>
  );
}

export default Name;

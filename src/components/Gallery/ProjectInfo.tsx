import { MotionValue, Variants, motion } from "framer-motion";

type ProjectInfoProps = {
  description: string;
  backdropFilter: MotionValue;
  scale: MotionValue;
  filter: MotionValue;
};

const cardVariants: Variants = {
  offscreen: {
    x: 200,
    opacity: 0,
  },

  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

function ProjectInfo({
  description,
  backdropFilter,
  scale,
  filter,
}: ProjectInfoProps) {
  return (
    <motion.div
      className="hidden md:block w-4/5 top-[30%] md:w-[22%] p-6 xl:p-8 absolute md:left-[65%] md:top-32 rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "rgba(255,255,255,0.2)",
        backdropFilter,
        scale,
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
    >
      <motion.div
        style={{
          filter,
        }}
      >
        <p className="text-sm xl:text-base">{description}</p>
        <div className="flex justify-end gap-4 h-6">
          <span className="text-xl hover:scale-125 hover:cursor-pointer transition delay-100 duration-250 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-arrow-up-right"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
          <span className="hover:scale-125 hover:cursor-pointer text-slate-300 hover:text-white transition delay-100 duration-250 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectInfo;

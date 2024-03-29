import { MotionValue, Variants, motion } from "framer-motion";
import Button from "../ui/Button/Button";

type ProjectInfoProps = {
  description: string;
  websiteUrl: string;
  gitHubUrl: string;
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
  websiteUrl,
  gitHubUrl,
}: ProjectInfoProps) {
  return (
    <motion.div
      className="absolute top-[30%] hidden w-4/5 overflow-hidden rounded-2xl p-6 md:left-[65%] md:top-32 md:block md:w-[22%] xl:p-8"
      style={{
        backgroundColor: "rgba(100,100,100,0.3)",
        backdropFilter,
        scale,
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: window.innerWidth >= 1280 ? 0.8 : 0.5 }}
      variants={cardVariants}
    >
      <motion.div
        style={{
          filter,
        }}
      >
        <p className="text-sm xl:text-base">{description}</p>
        <div className="flex h-6 justify-end gap-4">
          <Button
            type="anchor"
            href={websiteUrl}
            target="_blank"
            className="transparent"
          >
            <span className="duration-250 text-xl transition delay-100 ease-in-out hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-up-right"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </Button>
          <Button
            type="anchor"
            href={gitHubUrl}
            target="_blank"
            className="transparent"
          >
            <span className="duration-250 text-slate-300 transition delay-100 ease-in-out hover:cursor-pointer">
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
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectInfo;

import { motion } from "framer-motion";

function SkillBar({ rating }: { rating: number }) {
  return (
    <div className="h-4 w-full overflow-hidden rounded-lg bg-slate-300 sm:h-6 lg:h-8 xl:h-10">
      <motion.span
        className="inline-block h-[110%] bg-gray-700"
        initial={{ width: `0%` }}
        whileInView={{ width: `${rating * 10}%` }}
        viewport={{ once: true }}
        transition={{
          delay: 0.25,
          type: "spring",
          bounce: 0.4,
        }}
      />
      <span
        className="inline-block h-full bg-gray-300"
        style={{ width: `${(10 - rating) * 10}%` }}
      />
    </div>
  );
}

export default SkillBar;

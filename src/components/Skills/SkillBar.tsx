import { motion } from "framer-motion";

function SkillBar({ rating }: { rating: number }) {
  return (
    <div className="h-8 w-full overflow-hidden rounded-lg bg-slate-300 md:h-full">
      <motion.span
        className="inline-block h-full bg-gray-700"
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

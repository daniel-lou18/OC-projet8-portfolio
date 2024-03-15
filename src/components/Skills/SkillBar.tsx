import { motion } from "framer-motion";

function SkillBar({ rating }: { rating: number }) {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden bg-slate-300">
      <motion.span
        className="bg-slate-700 h-full inline-block"
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
        className="bg-slate-300 h-full inline-block"
        style={{ width: `${(10 - rating) * 10}%` }}
      />
    </div>
  );
}

export default SkillBar;

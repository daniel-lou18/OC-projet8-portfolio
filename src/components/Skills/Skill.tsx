import SkillBar from "./SkillBar";
import SkillName from "./SkillName";

type SkillProps = {
  name: string;
  rating: number;
};

function Skill({ name, rating }: SkillProps) {
  return (
    <li className="grid grid-cols-2 py-12 h-40 border-t-2 border-slate-300 border-solid">
      <SkillName name={name} />
      <SkillBar rating={rating} />
    </li>
  );
}

export default Skill;

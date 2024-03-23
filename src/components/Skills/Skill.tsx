import SkillBar from "./SkillBar";
import SkillName from "./SkillName";

type SkillProps = {
  name: string;
  rating: number;
};

function Skill({ name, rating }: SkillProps) {
  return (
    <li className="grid grid-cols-1 md:grid-cols-2 py-6 md:py-12 md:h-36 border-t-2 border-neutral-300 border-solid">
      <SkillName name={name} />
      <SkillBar rating={rating} />
    </li>
  );
}

export default Skill;

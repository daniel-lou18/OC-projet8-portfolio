import SkillBar from "./SkillBar";
import SkillName from "./SkillName";

type SkillProps = {
  name: string;
  rating: number;
};

function Skill({ name, rating }: SkillProps) {
  return (
    <li className="grid grid-cols-1 gap-y-2 border-t-2 border-solid border-neutral-300 py-6 md:grid-cols-2 md:py-12 lg:h-32 xl:h-36">
      <SkillName name={name} />
      <SkillBar rating={rating} />
    </li>
  );
}

export default Skill;

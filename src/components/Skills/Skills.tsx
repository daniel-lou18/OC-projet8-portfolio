import Skill from "./Skill";
import { skills } from "../../data/data";

function Skills() {
  return (
    <div className="bg-neutral-100 px-[8%] pb-8 pt-16">
      <h3>Mon stack</h3>
      <ul>
        {skills.map((skill, id) => (
          <Skill {...skill} key={id} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;

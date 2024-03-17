import Skill from "./Skill";

const skills = [
  { name: "HTML/CSS", rating: 8 },
  { name: "JavaScript/React", rating: 8 },
  { name: "NodeJS/Express", rating: 7 },
  { name: "MongoDB/Mongoose", rating: 6 },
  { name: "TypeScript", rating: 5 },
  { name: "Sass/Tailwind", rating: 5 },
];

function Skills() {
  return (
    <div className="bg-slate-200 py-8 px-[8%]">
      <h2 className="text-xl">Mon stack</h2>
      <ul>
        {skills.map((skill, id) => (
          <Skill {...skill} key={id} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;

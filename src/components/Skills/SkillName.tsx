function SkillName({ name }: { name: string }) {
  return (
    <div className="text-2xl md:text-4xl font-bold flex items-center">
      {name}
    </div>
  );
}

export default SkillName;

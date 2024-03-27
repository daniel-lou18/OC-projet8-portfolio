function SkillName({ name }: { name: string }) {
  return (
    <div className="flex items-center text-2xl font-bold lg:text-4xl">
      {name}
    </div>
  );
}

export default SkillName;

function SkillName({ name }: { name: string }) {
  return (
    <div className="flex items-center text-2xl font-bold lg:text-3xl">
      {name}
    </div>
  );
}

export default SkillName;

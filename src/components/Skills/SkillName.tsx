function SkillName({ name }: { name: string }) {
  return (
    <div className="flex items-center text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl">
      {name}
    </div>
  );
}

export default SkillName;

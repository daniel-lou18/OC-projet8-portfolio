import HorMovText from "../HorizMovText/HorMovText";

function Footer() {
  return (
    <footer className="h-screen w-full bg-slate-200 pt-56 relative overflow-hidden">
      <div className="px-48 w-full">
        <h3 className="text-8xl pb-28 border-b-slate-300 border-b-2 border-solid relative">
          Me contacter
        </h3>
        <div className="flex pt-16 gap-8">
          <button className="px-8 py-4 border-slate-300 border-2 border-solid rounded-full">
            info@danielderudder.com
          </button>
          <button className="px-8 py-4 border-slate-300 border-2 border-solid rounded-full">
            +33 (0)6 58 42 46 50{" "}
          </button>
        </div>
      </div>
      <HorMovText>Travaillons ensemble !</HorMovText>
    </footer>
  );
}

export default Footer;

import image from "../../assets/images/Daniel_Derudder.jpg";

function LeftHanger() {
  return (
    <div className="w-52 h-28 bg-slate-900 rounded-r-full absolute left-0 flex items-center justify-end pr-4">
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img src={image} className="" />
      </div>
    </div>
  );
}

export default LeftHanger;

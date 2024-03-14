import picture from "../../assets/images/PHOTO UP-20211120-Vermogen-14.jpg";

function HeroLeft() {
  return (
    <div className="w-1/4">
      <div
        className="w-40 h-48 absolute top-1/2 overflow-hidden -z-10 left-[120%]"
        style={{ transform: "translateY(-50%)" }}
      >
        <img src={picture} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default HeroLeft;

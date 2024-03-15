import image from "../../assets/images/PHOTO UP-20211120-Vermogen-82.jpg";
import PhotoBall from "../ui/TrackBall/PhotoBall";

function LeftHanger() {
  return (
    <div className="w-52 h-28 bg-slate-900 rounded-r-full absolute left-0 flex items-center justify-end pr-4 top-[28%]">
      <PhotoBall linkTo="/contact">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={image} className="w-full h-full" />
        </div>
      </PhotoBall>
    </div>
  );
}

export default LeftHanger;

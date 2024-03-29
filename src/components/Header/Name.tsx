import image from "../../assets/images/PHOTO UP-20211120-Vermogen-82.jpg";
import { Link } from "react-router-dom";
import styles from "./name.module.css";

function Name() {
  return (
    <Link to="/">
      <div className="relative flex items-center gap-6 text-xl">
        <div className="hidden h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full bg-white opacity-75 lg:block">
          <img
            src={image}
            className="h-full w-full"
            alt="photo de profil de Daniel Derudder"
          />
        </div>
        <div className={`flex ${styles.fullName} uppercase`}>
          <div>D</div>
          <div className={`flex overflow-hidden ${styles.name}`}>
            aniel <div className="w-1"></div>
          </div>
          <div>D</div>
          <div className={`overflow-hidden ${styles.name}`}>erudder</div>
        </div>
      </div>
    </Link>
  );
}

export default Name;

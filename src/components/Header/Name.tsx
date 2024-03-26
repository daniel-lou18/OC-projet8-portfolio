import image from "../../assets/images/PHOTO UP-20211120-Vermogen-82.jpg";
import { Link } from "react-router-dom";
import styles from "./name.module.css";

function Name() {
  return (
    <Link to="/">
      <div className="relative flex items-center gap-6 text-xl">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-white opacity-75 lg:block hidden shrink-0">
          <img src={image} className="w-full h-full" />
        </div>
        <div className={`flex ${styles.fullName} uppercase`}>
          <div>D</div>
          <div className={`overflow-hidden flex ${styles.name}`}>
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

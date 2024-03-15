import { PropsWithChildren } from "react";
import styles from "./trackball.module.css";
import { Link } from "react-router-dom";

type PhotoBallProps = PropsWithChildren<{
  size?: number | string;
  linkTo?: string;
}>;

function PhotoBall({ children, size = "5rem", linkTo = "/" }: PhotoBallProps) {
  return (
    <Link to={linkTo} className="relative">
      <div
        className={`rounded-full overflow-hidden bg-slate-700 flex justify-center items-center hover:cursor-pointer relative z-30 ${styles.trackball} ${styles.photo}`}
        style={{ width: size, height: size }}
      >
        {children}
      </div>
    </Link>
  );
}

export default PhotoBall;

import { PropsWithChildren } from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

type ButtonProps = PropsWithChildren<{
  linkTo?: string;
  px?: number;
  py?: number;
  className?: string;
}>;

function Button({
  children,
  linkTo = "/",
  className = "regular",
}: ButtonProps) {
  return (
    <Link to={linkTo}>
      <button
        className={`z-30 border-neutral-300 border-2 border-solid rounded-full relative overflow-hidden ${styles.button} ${styles[className]}`}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;

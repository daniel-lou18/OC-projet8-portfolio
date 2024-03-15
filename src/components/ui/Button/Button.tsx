import { PropsWithChildren } from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

type ButtonProps = PropsWithChildren<{
  linkTo?: string;
}>;

function Button({ children, linkTo = "/" }: ButtonProps) {
  return (
    <Link to={linkTo}>
      <button
        className={`px-8 py-4 border-slate-300 border-2 border-solid rounded-full relative overflow-hidden ${styles.button}`}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;

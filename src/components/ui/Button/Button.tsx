import { PropsWithChildren } from "react";
import styles from "./button.module.css";

type ButtonProps = PropsWithChildren<{
  px?: number;
  py?: number;
  className?: string;
}>;

function Button({ children, className = "regular" }: ButtonProps) {
  return (
    <button
      className={`z-30 border-neutral-400 border border-solid rounded-full relative overflow-hidden ${styles.button} ${styles[className]}`}
    >
      {children}
    </button>
  );
}

export default Button;

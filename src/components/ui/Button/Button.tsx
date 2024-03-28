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
      className={`relative z-30 overflow-hidden whitespace-nowrap rounded-full border border-solid border-neutral-400 text-sm lg:text-base ${styles.button} ${styles[className]}`}
    >
      {children}
    </button>
  );
}

export default Button;

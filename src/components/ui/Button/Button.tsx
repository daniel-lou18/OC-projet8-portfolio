import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

function Button({ children }: PropsWithChildren) {
  return (
    <button
      className={`px-8 py-4 border-slate-300 border-2 border-solid rounded-full relative overflow-hidden ${styles.button}`}
    >
      {children}
    </button>
  );
}

export default Button;

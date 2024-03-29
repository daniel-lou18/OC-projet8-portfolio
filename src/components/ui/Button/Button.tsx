import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./button.module.css";

type ButtonProps = PropsWithChildren<{
  className: string;
  type: "button";
}> &
  ComponentPropsWithoutRef<"button">;

type AnchorProps = PropsWithChildren<{
  className: string;
  type: "anchor";
}> &
  ComponentPropsWithoutRef<"a">;

function Button(props: ButtonProps | AnchorProps) {
  const { className, children, ...otherProps } = props;
  if (otherProps.type === "button") {
    return (
      <button
        className={`relative z-30 overflow-hidden whitespace-nowrap rounded-full border border-solid border-neutral-400 text-sm lg:text-base ${styles.button} ${styles[className]}`}
        {...otherProps}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      className={`relative z-30 inline-flex w-fit items-center justify-center overflow-hidden whitespace-nowrap rounded-full border border-solid border-neutral-400 text-sm lg:text-base ${styles.button} ${styles[className]}`}
      {...otherProps}
    >
      {children}
    </a>
  );
}

export default Button;

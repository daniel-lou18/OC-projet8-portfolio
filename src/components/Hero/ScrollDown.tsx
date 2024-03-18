import styles from "./scrollDown.module.css";

function ScrollDown() {
  return (
    <div className={styles.bounce}>
      <svg
        width="36px"
        height="36px"
        viewBox="0 0 14 14"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>arrow-down</title>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g stroke="currentColor" stroke-width="1.5">
            <path d="M6.5,1.5 L6.5,11.5" id="Path"></path>
            <polyline id="Path" points="3 8.5 6.5 12 10 8.5"></polyline>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default ScrollDown;

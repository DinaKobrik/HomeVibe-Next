import styles from "./star.module.css";

export const Star = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.starIcon}>
    <path
      d="M10 1.5L12.88 6.88L19 7.82L14.82 11.76L15.88 18L10 15.14L4.12 18L5.18 11.76L1 7.82L7.12 6.88L10 1.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={styles.starStroke}
    />
    <path
      d="M10 1.5L12.88 6.88L19 7.82L14.82 11.76L15.88 18L10 15.14L4.12 18L5.18 11.76L1 7.82L7.12 6.88L10 1.5Z"
      fill="currentColor"
      className={styles.starFill}
    />
  </svg>
);

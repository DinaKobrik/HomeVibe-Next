"use client";

import { useState } from "react";
import styles from "./product-card.module.css";

export const HeartIcon = () => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsFilled(!isFilled)}
      className={styles.favoriteButton}>
      <svg
        className={`${styles.favoriteIcon} ${isFilled ? styles.filled : ""}`}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)">
          <path
            d="M230 851 c-69 -21 -130 -73 -166 -141 -30 -55 -25 -188 8 -260 51
-111 135 -194 335 -329 l93 -63 101 69 c215 145 302 238 340 365 56 183 -41
347 -215 365 -67 7 -125 -10 -181 -52 l-45 -35 -45 35 c-67 50 -152 68 -225
46z"
          />
        </g>
      </svg>
    </button>
  );
};

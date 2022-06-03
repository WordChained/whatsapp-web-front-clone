import React from 'react';
import styles from './Loader.module.css';
export const Loader = ({ size = 20 }) => {
  return (
    <div className={styles.startup}>
      <svg
        className={styles.spinnerContainer}
        width={`${size}px`}
        height={`${size}px`}
        viewBox='0 0 52 52'
      >
        <circle
          className={styles.path}
          cx='26px'
          cy='26px'
          r='20px'
          fill='none'
          strokeWidth='4px'
        />
      </svg>
    </div>
  );
};

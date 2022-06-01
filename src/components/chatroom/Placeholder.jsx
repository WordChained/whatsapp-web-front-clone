import React from "react";
import styles from "./Placeholder.module.css";
import placeholderScreenshot from "../../assets/imgs/placeholder-screenshot.png";
export const Placeholder = () => {
  return (
    <div className={styles.placeholderContainer}>
      <img src={placeholderScreenshot} alt="" />
    </div>
  );
};

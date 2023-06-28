import React from "react";
import styles from "./styles.module.css";
const layout = ({ children }) => {
  return (
    <div className={styles.common}>
      <h1 className={styles.work}>Our Works</h1>
      {children}
    </div>
  );
};

export default layout;

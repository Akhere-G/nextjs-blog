import React from "react";
import styles from "../../styles/Skeleton.module.css";
const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.sbanner}></div>
      <div className={styles.sheader}></div>
      <div className={styles.scontent}></div>
      <div className={styles.scontent}></div>
      <div className={styles.scontent}></div>
    </div>
  );
};

export default Skeleton;

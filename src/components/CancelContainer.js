import { memo } from "react";
import styles from "./CancelContainer.module.css";

const CancelContainer = memo(() => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.cancel}>Cancel</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.continue}>Continue</div>
      </div>
    </div>
  );
});

export default CancelContainer;

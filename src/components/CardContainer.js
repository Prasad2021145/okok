import { memo } from "react";
import styles from "./CardContainer.module.css";

const CardContainer = memo(() => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWithText}>
          <img
            className={styles.frameWithTextChild}
            alt=""
            src="/rectangle-351@2x.png"
          />
          <div className={styles.rectangleGroup} />
          <div className={styles.sampleImage}>Sample image</div>
        </div>
      </div>
    </div>
  );
});

export default CardContainer;

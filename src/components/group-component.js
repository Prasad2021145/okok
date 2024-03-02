import { memo } from "react";
import styles from "./group-component.module.css";

const GroupComponent = memo(() => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.quizIconframe}>
        <h1 className={styles.quiz1}>Quiz 1</h1>
        <div className={styles.quizIcon}>
          <div className={styles.createdOnLabel}>667</div>
          <img
            className={styles.iconParkOutlineeyes}
            loading="eager"
            alt=""
            src="/iconparkoutlineeyes1.svg"
          />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.createdOn}>Created on : 04 Sep, 2023</div>
      </div>
    </div>
  );
});

export default GroupComponent;

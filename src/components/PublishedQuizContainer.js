import { memo } from "react";
import styles from "./PublishedQuizContainer.module.css";

const PublishedQuizContainer = memo(() => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <img className={styles.charmcrossIcon} alt="" src="/charmcross2.svg" />
      <div className={styles.congratsYourQuiz}>
        Congrats your Quiz is Published!
      </div>
      <div className={styles.groupWrapper}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.share}>Share</div>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.yourLinkIs}>your link is here</div>
      </div>
    </div>
  );
});

export default PublishedQuizContainer;

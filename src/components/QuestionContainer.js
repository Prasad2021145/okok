import { memo } from "react";
import styles from "./QuestionContainer.module.css";

const QuestionContainer = memo(() => {
  return (
    <div className={styles.yourQuestion}>
      <b className={styles.yourQuestionText}>
        Your question text comes here, its a sample text.
      </b>
      <div className={styles.sampleImages}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameChild}
              loading="eager"
              alt=""
              src="/group-1061@2x.png"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.sampleImage}>Sample image</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.sampleImage1}>Sample image</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <div className={styles.sampleImage2}>Sample image</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default QuestionContainer;

import { memo } from "react";
import styles from "./QuizzieFormContainer.module.css";

const QuizzieFormContainer = memo(() => {
  return (
    <div className={styles.innerFrame}>
      <div className={styles.innerFrameChild} />
      <h1 className={styles.quizzie}>QUIZZIE</h1>
      <div className={styles.analyticsLabel}>
        <div className={styles.createQuizButton}>
          <button className={styles.questionsFrame}>
            <div className={styles.questionsFrameChild} />
            <div className={styles.dashboard}>Dashboard</div>
          </button>
          <div className={styles.analyticsFrame}>
            <h2 className={styles.analytics}>Analytics</h2>
          </div>
        </div>
        <h2 className={styles.createQuiz}>Create Quiz</h2>
      </div>
      <div className={styles.vectorArrow}>
        <img
          className={styles.secondaryFrameIcon}
          loading="eager"
          alt=""
          src="/vector-11.svg"
        />
        <h2 className={styles.logout}>Logout</h2>
      </div>
    </div>
  );
});

export default QuizzieFormContainer;

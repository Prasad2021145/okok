import { memo } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = memo(() => {
  return (
    <div className={styles.fRAME}>
      <div className={styles.fRAMEChild} />
      <h1 className={styles.quizzie}>QUIZZIE</h1>
      <div className={styles.analyticsTextParent}>
        <button className={styles.analyticsText}>
          <div className={styles.analyticsTextChild} />
          <div className={styles.dashboard}>Dashboard</div>
        </button>
        <div className={styles.vectorIcon}>
          <h2 className={styles.analytics}>Analytics</h2>
        </div>
        <div className={styles.createQuizWrapper}>
          <h2 className={styles.createQuiz}>Create Quiz</h2>
        </div>
        <div className={styles.createdFrameK}>
          <img
            className={styles.createdFrameKChild}
            loading="eager"
            alt=""
            src="/vector-11.svg"
          />
          <h2 className={styles.logout}>Logout</h2>
        </div>
      </div>
    </div>
  );
});

export default FrameComponent2;

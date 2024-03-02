import { memo } from "react";
import AnalyticsForm from "./AnalyticsForm";
import styles from "./QuizCard.module.css";

const QuizCard = memo(() => {
  return (
    <div className={styles.mainFRAME}>
      <div className={styles.mainFRAMEChild} />
      <h1 className={styles.quizzie}>QUIZZIE</h1>
      <nav className={styles.dashboardText}>
        <div className={styles.analyticsText}>
          <div className={styles.dashboard}>Dashboard</div>
        </div>
        <AnalyticsForm />
        <div className={styles.optionGroupFrames}>
          <img
            className={styles.sepImpressionsFrame}
            loading="eager"
            alt=""
            src="/vector-1.svg"
          />
          <b className={styles.logout}>Logout</b>
        </div>
      </nav>
    </div>
  );
});

export default QuizCard;

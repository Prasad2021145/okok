import { memo } from "react";
import styles from "./AnalyticsForm.module.css";

const AnalyticsForm = memo(() => {
  return (
    <div className={styles.vectorMarker}>
      <button className={styles.logoutText}>
        <div className={styles.logoutTextChild} />
        <div className={styles.analytics}>Analytics</div>
      </button>
      <div className={styles.createQuiz}>Create Quiz</div>
    </div>
  );
});

export default AnalyticsForm;

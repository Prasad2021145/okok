import { memo } from "react";
import AnalyticsForm from "./AnalyticsForm";
import styles from "./CreateFrameContainer.module.css";

const CreateFrameContainer = memo(() => {
  return (
    <div className={styles.createFrame}>
      <div className={styles.createFrameChild} />
      <h1 className={styles.quizzie}>QUIZZIE</h1>
      <nav className={styles.logoutFrame}>
        <div className={styles.dashboardFrame}>
          <div className={styles.dashboard}>Dashboard</div>
        </div>
        <AnalyticsForm />
        <div className={styles.vectorFrame}>
          <img
            className={styles.impressionsFrameIcon}
            loading="eager"
            alt=""
            src="/vector-1.svg"
          />
          <div className={styles.quizQuestionAnalysis}>
            <b className={styles.logout}>Logout</b>
          </div>
        </div>
      </nav>
    </div>
  );
});

export default CreateFrameContainer;

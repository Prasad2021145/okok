import { memo } from "react";
import styles from "./DashboardContainer.module.css";

const DashboardContainer = memo(() => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.dashboardParent}>
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.analytics}>Analytics</div>
        <div className={styles.createQuiz}>Create Quiz</div>
      </div>
    </div>
  );
});

export default DashboardContainer;

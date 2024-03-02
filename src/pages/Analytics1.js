import ContainerForm1 from "../components/ContainerForm1";
import DashboardContainer from "../components/DashboardContainer";
import ConfirmDeleteForm from "../components/ConfirmDeleteForm";
import styles from "./Analytics1.module.css";

const Analytics1 = () => {
  return (
    <div className={styles.analytics}>
      <div className={styles.analyticsChild} />
      <div className={styles.quizAnalysis}>Quiz Analysis</div>
      <ContainerForm1 />
      <div className={styles.analyticsItem} />
      <div className={styles.analyticsInner} />
      <DashboardContainer />
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <div className={styles.quizzie}>QUIZZIE</div>
      <div className={styles.logoutWrapper}>
        <b className={styles.logout}>Logout</b>
      </div>
      <div className={styles.rectangleDiv} />
      <ConfirmDeleteForm />
    </div>
  );
};

export default Analytics1;

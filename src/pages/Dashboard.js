import QuizzieFormContainer from "../components/QuizzieFormContainer";
import FrameComponent11 from "../components/FrameComponent1";
import FrameComponent1 from "../components/frame-component3";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.frameMain}>
        <QuizzieFormContainer />
        <section className={styles.questionsGroup}>
          <div className={styles.questionsGroupChild} />
          <FrameComponent11 k="989" />
          <FrameComponent1 quiz1Width="907px" />
        </section>
      </main>
      <div className={styles.rectangleShape} />
    </div>
  );
};

export default Dashboard;

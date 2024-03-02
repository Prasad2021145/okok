import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent11 from "../components/FrameComponent1";
import FrameComponent1 from "../components/FrameComponent";
import styles from "./Dashboard1.module.css";

const Dashboard1 = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.fRAMEParent}>
        <FrameComponent2 />
        <section className={styles.createdFrame}>
          <div className={styles.createdFrameChild} />
          <FrameComponent11 k="1.4K" />
          <FrameComponent1 />
        </section>
      </main>
      <div className={styles.dashboardChild} />
    </div>
  );
};

export default Dashboard1;

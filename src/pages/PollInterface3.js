import QuestionFormContainer1 from "../components/QuestionFormContainer1";
import styles from "./PollInterface3.module.css";

const PollInterface3 = () => {
  return (
    <div className={styles.pollInterface}>
      <main className={styles.pollFrame}>
        <div className={styles.pollFrameChild} />
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.emptyFrameWrapper}>
            <b className={styles.emptyFrame}>04/04</b>
          </div>
          <QuestionFormContainer1 buttonText="SUBMIT" />
        </section>
      </main>
    </div>
  );
};

export default PollInterface3;

import QuestionContainer from "../components/QuestionContainer";
import styles from "./PollInterface1.module.css";

const PollInterface1 = () => {
  return (
    <div className={styles.pollInterface}>
      <main className={styles.questionFrame}>
        <div className={styles.questionFrameChild} />
        <section className={styles.frameGroup}>
          <div className={styles.frameGroupChild} />
          <div className={styles.imageFrame}>
            <b className={styles.textArea}>01/04</b>
          </div>
          <QuestionContainer />
          <footer className={styles.buttonFrame}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.next}>{`NEXT `}</div>
            </button>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default PollInterface1;

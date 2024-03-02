import QuestionFormContainer from "../components/QuestionFormContainer";
import styles from "./PollInterface.module.css";

const PollInterface = () => {
  return (
    <div className={styles.pollInterface}>
      <main className={styles.pollFrame}>
        <div className={styles.pollFrameChild} />
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.textAreaWrapper}>
            <b className={styles.textArea}>01/04</b>
          </div>
          <QuestionFormContainer />
          <footer className={styles.frameWrapper}>
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.next}>{`NEXT `}</div>
            </button>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default PollInterface;

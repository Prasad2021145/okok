import QuestionContainer from "../components/QuestionContainer";
import styles from "./QuizInterface1.module.css";

const QuizInterface1 = () => {
  return (
    <div className={styles.quizInterface}>
      <main className={styles.questionFrame}>
        <div className={styles.questionFrameChild} />
        <section className={styles.questionTextFrame}>
          <div className={styles.questionTextFrameChild} />
          <div className={styles.answerFramesGroup}>
            <b className={styles.sampleImageFrame}>01/04</b>
          </div>
          <QuestionContainer />
          <footer className={styles.lastFrame}>
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

export default QuizInterface1;

import ImageGroupContainer from "../components/ImageGroupContainer";
import styles from "./PollQuiz.module.css";

const PollQuiz = () => {
  return (
    <div className={styles.pollQuiz}>
      <div className={styles.questionFrame}>
        <b className={styles.blankFrame}>01/04</b>
      </div>
      <section className={styles.inputFrame}>
        <b className={styles.yourQuestionText}>
          Your question text comes here, its a sample text.
        </b>
        <ImageGroupContainer />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.next}>{`NEXT `}</div>
        </div>
      </section>
    </div>
  );
};

export default PollQuiz;

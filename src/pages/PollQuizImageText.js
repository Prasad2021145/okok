import CardContainer from "../components/CardContainer";
import styles from "./PollQuizImageText.module.css";

const PollQuizImageText = () => {
  return (
    <div className={styles.pollQuizImageText}>
      <div className={styles.frameParent}>
        <b className={styles.questionTextFrame}>01/04</b>
      </div>
      <section className={styles.questionFrame}>
        <div className={styles.yourQuestion}>
          <h2 className={styles.yourQuestionText}>
            Your question text comes here, its a sample text.
          </h2>
          <div className={styles.frameGroup}>
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.next}>{`NEXT `}</div>
        </div>
      </section>
    </div>
  );
};

export default PollQuizImageText;

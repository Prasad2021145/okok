import CardContainer2 from "../components/CardContainer2";
import CardContainer1 from "../components/CardContainer1";
import styles from "./QuizInterface.module.css";

const QuizInterface = () => {
  return (
    <div className={styles.quizInterface}>
      <main className={styles.questionFrame}>
        <div className={styles.questionFrameChild} />
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <div className={styles.parent}>
              <b className={styles.b}>01/04</b>
              <b className={styles.s}>00:10s</b>
            </div>
          </div>
          <b className={styles.yourQuestionText}>
            Your question text comes here, its a sample text.
          </b>
          <div className={styles.frameContainer}>
            <div className={styles.sampleImageGroupParent}>
              <CardContainer2
                propBorder="5px solid #5076ff"
                propBorder1="5px solid #5076ff"
              />
              <CardContainer1 propMinHeight="165px" />
              <footer className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.next}>{`NEXT `}</div>
              </footer>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuizInterface;

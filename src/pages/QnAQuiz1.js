import ImageGroupContainer from "../components/ImageGroupContainer";
import styles from "./QnAQuiz1.module.css";

const QnAQuiz1 = () => {
  return (
    <div className={styles.qnaQuiz}>
      <header className={styles.questionFrame}>
        <b className={styles.frameEmpty}>01/04</b>
        <b className={styles.s}>00:10s</b>
      </header>
      <section className={styles.yourQuestion}>
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

export default QnAQuiz1;

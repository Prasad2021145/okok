import CardWithImage from "../components/CardWithImage";
import styles from "./QnAQuiz.module.css";

const QnAQuiz = () => {
  return (
    <div className={styles.qnaQuiz}>
      <div className={styles.questionFrame}>
        <b className={styles.emptyFrame}>01/04</b>
      </div>
      <section className={styles.textFrame}>
        <b className={styles.yourQuestionText}>
          Your question text comes here, its a sample text.
        </b>
        <div className={styles.imageGroup}>
          <CardWithImage />
          <CardWithImage
            propBorder="none"
            propPadding="10px 18px 9px 24px"
            propBorder1="unset"
          />
          <CardWithImage
            propBorder="none"
            propPadding="10px 18px 9px 24px"
            propBorder1="unset"
          />
          <CardWithImage
            propBorder="none"
            propPadding="10px 18px 9px 24px"
            propBorder1="unset"
          />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.next}>{`NEXT `}</div>
        </div>
      </section>
    </div>
  );
};

export default QnAQuiz;

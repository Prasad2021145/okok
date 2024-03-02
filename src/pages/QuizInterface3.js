import QuestionFormContainer1 from "../components/QuestionFormContainer1";
import styles from "./QuizInterface3.module.css";

const QuizInterface3 = () => {
  return (
    <div className={styles.quizInterface}>
      <main className={styles.frameA}>
        <div className={styles.frameAChild} />
        <section className={styles.frameB}>
          <div className={styles.frameBChild} />
          <div className={styles.frameC}>
            <div className={styles.optionHolder}>
              <b className={styles.semicolonFrame}>04/04</b>
              <b className={styles.s}>00:10s</b>
            </div>
          </div>
          <QuestionFormContainer1
            buttonText="SUBMIT"
            option1Border="5px solid #5076ff"
            groupButtonBorder="5px solid #5076ff"
            propWidth="unset"
            propPadding="6px 86px 5px 122px"
            propFlex="unset"
          />
        </section>
      </main>
    </div>
  );
};

export default QuizInterface3;

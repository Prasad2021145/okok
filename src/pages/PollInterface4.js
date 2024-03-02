import QuestionFormContainer1 from "../components/QuestionFormContainer1";
import styles from "./PollInterface4.module.css";

const PollInterface4 = () => {
  return (
    <div className={styles.pollInterface}>
      <main className={styles.frameA}>
        <div className={styles.frameAChild} />
        <section className={styles.frameB}>
          <div className={styles.frameBChild} />
          <div className={styles.frameC}>
            <b className={styles.textInput}>01/04</b>
          </div>
          <QuestionFormContainer1
            buttonText="NEXT "
            option1Border="unset"
            groupButtonBorder="unset"
            propWidth="352px"
            propPadding="6px 5px 5px"
            propFlex="1"
          />
        </section>
      </main>
    </div>
  );
};

export default PollInterface4;

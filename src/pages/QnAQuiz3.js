import styles from "./QnAQuiz3.module.css";

const QnAQuiz3 = () => {
  return (
    <div className={styles.qnaQuiz}>
      <header className={styles.questionFrame}>
        <b className={styles.frameEmpty}>04/04</b>
        <b className={styles.s}>00:10s</b>
      </header>
      <section className={styles.textQuestion}>
        <b className={styles.yourQuestionText}>
          Your question text comes here, its a sample text.
        </b>
        <div className={styles.frameParent}>
          <button className={styles.frameWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.option1}>Option 1</div>
            </div>
          </button>
          <button className={styles.frameContainer}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.option11}>Option 1</div>
            </div>
          </button>
          <button className={styles.groupButton}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.option12}>Option 1</div>
            </div>
          </button>
          <button className={styles.frameWrapper1}>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.option13}>Option 1</div>
            </div>
          </button>
        </div>
      </section>
      <button className={styles.rectangleParent1}>
        <div className={styles.frameChild1} />
        <div className={styles.submit}>{`SUBMIT `}</div>
      </button>
    </div>
  );
};

export default QnAQuiz3;

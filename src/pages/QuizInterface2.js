import styles from "./QuizInterface2.module.css";

const QuizInterface2 = () => {
  return (
    <div className={styles.quizInterface}>
      <main className={styles.frameA}>
        <div className={styles.frameAChild} />
        <section className={styles.frameB}>
          <div className={styles.frameBChild} />
          <div className={styles.frameC}>
            <div className={styles.imageArea}>
              <img
                className={styles.image2Icon}
                loading="eager"
                alt=""
                src="/image-2@2x.png"
              />
              <b className={styles.congratsQuizIs}>
                Congrats Quiz is completed
              </b>
            </div>
          </div>
          <div className={styles.frameD}>
            <div className={styles.frameE}>
              <b className={styles.yourScoreIsContainer}>
                <span>{`Your Score is `}</span>
                <span className={styles.span}>03/04</span>
              </b>
              <div className={styles.next}>{`NEXT `}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuizInterface2;

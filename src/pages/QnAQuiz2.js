import styles from "./QnAQuiz2.module.css";

const QnAQuiz2 = () => {
  return (
    <div className={styles.qnaQuiz}>
      <section className={styles.answerFrame}>
        <b className={styles.congratsQuizIs}>Congrats Quiz is completed</b>
        <img
          className={styles.image2Icon}
          loading="eager"
          alt=""
          src="/image-2@2x.png"
        />
      </section>
      <section className={styles.yourScoreIsContainer}>
        <span>{`Your Score is `}</span>
        <span className={styles.span}>03/04</span>
      </section>
    </div>
  );
};

export default QnAQuiz2;

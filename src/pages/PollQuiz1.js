import styles from "./PollQuiz1.module.css";

const PollQuiz1 = () => {
  return (
    <div className={styles.pollQuiz}>
      <section className={styles.thankYouForContainer}>
        <p className={styles.thankYou}>{`Thank you `}</p>
        <p className={styles.forParticipatingIn}>
          for participating in the Poll
        </p>
      </section>
    </div>
  );
};

export default PollQuiz1;

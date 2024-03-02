import styles from "./PollInterface2.module.css";

const PollInterface2 = () => {
  return (
    <div className={styles.pollInterface}>
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <section className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <b className={styles.thankYouForContainer}>
            <p className={styles.thankYou}>{`Thank you `}</p>
            <p className={styles.forParticipatingIn}>
              for participating in the Poll
            </p>
          </b>
        </section>
      </main>
    </div>
  );
};

export default PollInterface2;

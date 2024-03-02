import SectionCardForm from "../components/SectionCardForm";
import styles from "./PollQuiz2.module.css";

const PollQuiz2 = () => {
  return (
    <div className={styles.pollQuiz}>
      <header className={styles.pollQuizFrame}>
        <b className={styles.emptyFrame}>04/04</b>
        <b className={styles.s}>00:10s</b>
      </header>
      <SectionCardForm />
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.submit}>SUBMIT</div>
      </button>
    </div>
  );
};

export default PollQuiz2;

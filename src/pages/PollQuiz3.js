import SectionCardForm from "../components/SectionCardForm";
import styles from "./PollQuiz3.module.css";

const PollQuiz3 = () => {
  return (
    <div className={styles.pollQuiz}>
      <div className={styles.questionFrame}>
        <b className={styles.emptyFrame}>01/04</b>
      </div>
      <SectionCardForm groupDivBorder="unset" rectangleDivBorder="unset" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.next}>{`NEXT `}</div>
      </div>
    </div>
  );
};

export default PollQuiz3;

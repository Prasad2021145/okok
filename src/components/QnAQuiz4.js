import { memo } from "react";
import SectionCardForm from "./SectionCardForm";
import styles from "./QnAQuiz4.module.css";

const QnAQuiz4 = memo(() => {
  return (
    <div className={styles.qnaQuiz}>
      <header className={styles.questionFrame}>
        <b className={styles.fRA}>01/04</b>
        <b className={styles.s}>00:10s</b>
      </header>
      <SectionCardForm
        groupDivBorder="3px solid #5076ff"
        rectangleDivBorder="3px solid #5076ff"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.next}>{`NEXT `}</div>
      </div>
    </div>
  );
});

export default QnAQuiz4;

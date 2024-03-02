import { memo } from "react";
import CardContainer2 from "./CardContainer2";
import CardContainer1 from "./CardContainer1";
import styles from "./QuestionFormContainer.module.css";

const QuestionFormContainer = memo(() => {
  return (
    <div className={styles.yourQuestionFrame}>
      <b className={styles.yourQuestionText}>
        Your question text comes here, its a sample text.
      </b>
      <div className={styles.frameGroupWrapper}>
        <div className={styles.frameGroup}>
          <CardContainer2 />
          <CardContainer1 />
        </div>
      </div>
    </div>
  );
});

export default QuestionFormContainer;

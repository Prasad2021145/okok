import { memo, useMemo } from "react";
import styles from "./QuestionFormContainer2.module.css";

const QuestionFormContainer2 = memo(({ propMinHeight }) => {
  const questionPlaceholderStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className={styles.questionPlaceholder}
      style={questionPlaceholderStyle}
    >
      <div
        className={styles.q1QuestionPlace}
      >{`Q.1 Question place holder for analysis ? `}</div>
      <div className={styles.correctPeople}>
        <div className={styles.incorrectPeople}>
          <div className={styles.incorrectPeopleChild} />
          <div className={styles.createdFrame}>60</div>
          <div className={styles.peopleAttemptedThe}>
            people Attempted the question
          </div>
        </div>
        <div className={styles.impressionsPeople}>
          <div className={styles.impressionsPeopleChild} />
          <div className={styles.createdSep}>38</div>
          <div className={styles.peopleAnsweredCorrectly}>
            people Answered Correctly
          </div>
        </div>
        <div className={styles.questionAnalysis}>
          <div className={styles.questionAnalysisChild} />
          <div className={styles.questionPlaceholderWrapper}>
            <div className={styles.questionPlaceholder1}>22</div>
          </div>
          <div className={styles.peopleAnsweredIncorrectly}>
            people Answered Incorrectly
          </div>
        </div>
      </div>
    </div>
  );
});

export default QuestionFormContainer2;

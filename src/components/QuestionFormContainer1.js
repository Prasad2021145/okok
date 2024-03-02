import { memo, useMemo } from "react";
import styles from "./QuestionFormContainer1.module.css";

const QuestionFormContainer1 = memo(
  ({
    buttonText,
    option1Border,
    groupButtonBorder,
    propWidth,
    propPadding,
    propFlex,
  }) => {
    const groupDiv2Style = useMemo(() => {
      return {
        border: option1Border,
      };
    }, [option1Border]);

    const rectangleDiv3Style = useMemo(() => {
      return {
        border: groupButtonBorder,
      };
    }, [groupButtonBorder]);

    const submitButtonStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    const groupButton1Style = useMemo(() => {
      return {
        padding: propPadding,
        flex: propFlex,
      };
    }, [propPadding, propFlex]);

    return (
      <div className={styles.yourQuestionText}>
        <b className={styles.yourQuestionText1}>
          Your question text comes here, its a sample text.
        </b>
        <div className={styles.firstOptionGroup}>
          <div className={styles.splitFrameParent}>
            <div className={styles.splitFrame}>
              <button className={styles.splitFrameInner}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.option1}>Option 1</div>
                </div>
              </button>
              <button className={styles.splitFrameChild}>
                <div className={styles.rectangleGroup} style={groupDiv2Style}>
                  <div
                    className={styles.frameItem}
                    style={rectangleDiv3Style}
                  />
                  <div className={styles.option11}>Option 1</div>
                </div>
              </button>
            </div>
            <div className={styles.splitFrame1}>
              <button className={styles.groupButton}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <div className={styles.option12}>Option 1</div>
                </div>
              </button>
              <button className={styles.splitFrameInner1}>
                <div className={styles.groupDiv}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.option13}>Option 1</div>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.submitButton} style={submitButtonStyle}>
            <button
              className={styles.rectangleParent1}
              style={groupButton1Style}
            >
              <div className={styles.frameChild1} />
              <div className={styles.submit}>{buttonText}</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default QuestionFormContainer1;

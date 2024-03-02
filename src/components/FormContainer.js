import { memo, useMemo } from "react";
import styles from "./FormContainer.module.css";

const FormContainer = memo(({ propAlignSelf, propWidth }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={styles.q2QuestionPlaceHolderForParent}
      style={frameDiv1Style}
    >
      <div
        className={styles.q2QuestionPlace}
      >{`Q.2 Question place holder for analysis ? `}</div>
      <div className={styles.groupOptionsGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.optionOptionOption}>60</div>
          <div className={styles.option1}>Option 1</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.div}>23</div>
          <div className={styles.option2}>Option 2</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <div className={styles.div1}>45</div>
          <div className={styles.option3}>Option 3</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.div2}>11</div>
          <div className={styles.option4}>Option 4</div>
        </div>
      </div>
    </div>
  );
});

export default FormContainer;

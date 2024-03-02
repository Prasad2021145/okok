import { memo, useMemo } from "react";
import styles from "./SectionCardForm.module.css";

const SectionCardForm = memo(({ groupDivBorder, rectangleDivBorder }) => {
  const groupDivStyle = useMemo(() => {
    return {
      border: groupDivBorder,
    };
  }, [groupDivBorder]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  return (
    <section className={styles.yourQuestionTextComesHereParent}>
      <h3 className={styles.yourQuestionText}>
        Your question text comes here, its a sample text.
      </h3>
      <div className={styles.frameParent}>
        <button className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.option1}>Option 1</div>
          </div>
        </button>
        <button className={styles.frameContainer}>
          <div className={styles.rectangleGroup} style={groupDivStyle}>
            <div className={styles.frameItem} style={rectangleDiv1Style} />
            <div className={styles.option11}>Option 1</div>
          </div>
        </button>
        <button className={styles.groupButton}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.option12}>Option 1</div>
          </div>
        </button>
        <button className={styles.frameWrapper1}>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.option13}>Option 1</div>
          </div>
        </button>
      </div>
    </section>
  );
});

export default SectionCardForm;

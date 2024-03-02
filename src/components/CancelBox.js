import { memo } from "react";
import styles from "./CancelBox.module.css";

const CancelBox = memo(() => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.cancel}>Cancel</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.createQuiz}>Create Quiz</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.imageUrl}>image URL</div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.imageUrl1}>image URL</div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild1} />
        <img
          className={styles.materialSymbolsdeleteIcon}
          alt=""
          src="/materialsymbolsdelete.svg"
        />
        <div className={styles.imageUrl2}>Image URL</div>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild2} />
        <div className={styles.addOption}>Add Option</div>
      </div>
      <div className={styles.optionTypeParent}>
        <div className={styles.optionType}>{`Option Type `}</div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild3} />
          <div className={styles.pollQuestion}>{`Poll Question `}</div>
        </div>
        <div className={styles.max5QuestionsParent}>
          <div className={styles.max5Questions}>Max 5 questions</div>
          <div className={styles.groupContainer}>
            <div className={styles.ellipseParent}>
              <div className={styles.ellipseDiv} />
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.ellipseGroup}>
              <div className={styles.groupChild4} />
              <img
                className={styles.charmcrossIcon}
                alt=""
                src="/charmcross1.svg"
              />
              <div className={styles.div1}>2</div>
            </div>
            <img
              className={styles.icbaselinePlusIcon}
              alt=""
              src="/icbaselineplus.svg"
            />
          </div>
        </div>
        <div className={styles.textParent}>
          <div className={styles.text}>Text</div>
          <img className={styles.groupIcon} alt="" src="/group-73.svg" />
        </div>
        <div className={styles.imageUrlParent}>
          <div className={styles.imageUrl3}>Image URL</div>
          <img className={styles.groupChild5} alt="" src="/group-73-2.svg" />
        </div>
        <div className={styles.textImageUrlParent}>
          <div className={styles.textImage}>{`Text & Image URL`}</div>
          <img className={styles.groupChild6} alt="" src="/group-73.svg" />
        </div>
      </div>
    </div>
  );
});

export default CancelBox;

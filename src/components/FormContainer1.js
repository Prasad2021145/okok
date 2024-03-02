import { memo } from "react";
import styles from "./FormContainer1.module.css";

const FormContainer1 = memo(
  ({
    displayText,
    displayTextImageUrl,
    displayTextText,
    displayTextImageUrl2,
    textImageUrl,
    imageTextUrl,
  }) => {
    return (
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.cancel}>Cancel</div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupInner} />
            <div className={styles.createQuiz}>Create Quiz</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.text}>{displayText}</div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild1} />
            <div className={styles.text1}>{displayTextImageUrl}</div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild2} />
            <img
              className={styles.materialSymbolsdeleteIcon}
              alt=""
              src="/materialsymbolsdelete.svg"
            />
            <div className={styles.text2}>{displayTextText}</div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild3} />
            <img
              className={styles.materialSymbolsdeleteIcon1}
              alt=""
              src="/materialsymbolsdelete.svg"
            />
            <div className={styles.text3}>{displayTextImageUrl2}</div>
          </div>
          <div className={styles.optionTypeParent}>
            <div className={styles.optionType}>{`Option Type `}</div>
            <div className={styles.rectangleParent4}>
              <div className={styles.groupChild4} />
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
                  <div className={styles.groupChild5} />
                  <img
                    className={styles.charmcrossIcon}
                    alt=""
                    src="/charmcross11.svg"
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
              <div className={styles.text4}>Text</div>
              <img className={styles.groupIcon} alt="" src={textImageUrl} />
            </div>
            <div className={styles.imageUrlParent}>
              <div className={styles.imageUrl}>Image URL</div>
              <img className={styles.groupChild6} alt="" src={imageTextUrl} />
            </div>
            <div className={styles.textImageUrlParent}>
              <div className={styles.textImage}>{`Text & Image URL`}</div>
              <img className={styles.groupChild7} alt="" src="/group-73.svg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default FormContainer1;

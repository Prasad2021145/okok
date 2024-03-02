import ContainerForm from "../components/ContainerForm";
import DashboardContainer from "../components/DashboardContainer";
import TimerFormContainer from "../components/TimerFormContainer";
import styles from "./CreateQuizOnContinueImage.module.css";

const CreateQuizOnContinueImage = () => {
  return (
    <div className={styles.createQuizOnContinueImage}>
      <div className={styles.createQuizOnContinueImageChild} />
      <div className={styles.quizAnalysis}>Quiz Analysis</div>
      <ContainerForm />
      <div className={styles.createQuizOnContinueImageItem} />
      <div className={styles.createQuizOnContinueImageInner} />
      <DashboardContainer />
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <div className={styles.quizzie}>QUIZZIE</div>
      <div className={styles.logoutWrapper}>
        <b className={styles.logout}>Logout</b>
      </div>
      <div className={styles.rectangleDiv} />
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
            <div className={styles.groupChild1} />
            <div className={styles.text}>Text</div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild2} />
            <div className={styles.text1}>Text</div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild3} />
            <img
              className={styles.materialSymbolsdeleteIcon}
              alt=""
              src="/materialsymbolsdelete.svg"
            />
            <div className={styles.text2}>Text</div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild4} />
            <img
              className={styles.materialSymbolsdeleteIcon1}
              alt=""
              src="/materialsymbolsdelete.svg"
            />
            <div className={styles.addOption}>Add option</div>
          </div>
          <div className={styles.optionTypeParent}>
            <div className={styles.optionType}>{`Option Type `}</div>
            <div className={styles.rectangleParent4}>
              <div className={styles.groupChild5} />
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
                  <div className={styles.groupChild6} />
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
              <div className={styles.text3}>Text</div>
              <img className={styles.groupIcon} alt="" src="/group-73-2.svg" />
            </div>
            <div className={styles.imageUrlParent}>
              <div className={styles.imageUrl}>Image URL</div>
              <img className={styles.groupChild7} alt="" src="/group-73.svg" />
            </div>
            <div className={styles.textImageUrlParent}>
              <div className={styles.textImage}>{`Text & Image URL`}</div>
              <img className={styles.groupChild8} alt="" src="/group-73.svg" />
            </div>
          </div>
        </div>
        <div className={styles.groupParent1}>
          <img className={styles.groupChild9} alt="" src="/group-73.svg" />
          <img className={styles.groupChild10} alt="" src="/group-101.svg" />
          <img className={styles.groupChild11} alt="" src="/group-73.svg" />
        </div>
      </div>
      <TimerFormContainer />
    </div>
  );
};

export default CreateQuizOnContinueImage;

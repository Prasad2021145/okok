import QuizCard from "../components/QuizCard";
import FormContainer from "../components/FormContainer";
import styles from "./QuestionWisePollTypeQuesti.module.css";

const QuestionWisePollTypeQuesti = () => {
  return (
    <div className={styles.questionWisePollTypeQuesti}>
      <main className={styles.questionFrame}>
        <QuizCard />
        <section className={styles.quizQuestionFrame}>
          <div className={styles.quizQuestionFrameChild} />
          <div className={styles.groupLabel}>
            <div className={styles.questionGroupFrames}>
              <div className={styles.optionLabels}>
                <div className={styles.quiz2Question}>
                  Quiz 2 Question Analysis
                </div>
                <div className={styles.qQuestionAnalysis}>
                  <div
                    className={styles.q1QuestionPlace}
                  >{`Q.1 Question place holder for analysis ? `}</div>
                </div>
                <div className={styles.groupOptionPane}>
                  <div className={styles.frameParent}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.optionSemicolon}>60</div>
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
                  </div>
                </div>
              </div>
              <div className={styles.questionImpressionsParent}>
                <div className={styles.questionImpressions}>
                  <div className={styles.createdOn04Sep2023Parent}>
                    <div className={styles.createdOn}>
                      Created on : 04 Sep, 2023
                    </div>
                    <div className={styles.impressions667}>
                      Impressions : 667
                    </div>
                  </div>
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.div2}>11</div>
                  <div className={styles.option4}>Option 4</div>
                </div>
              </div>
            </div>
            <div className={styles.groupLabelInner}>
              <img
                className={styles.vectorIcon}
                loading="eager"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className={styles.quizQuestionFrameInner}>
            <div className={styles.frameGroup}>
              <FormContainer />
              <img
                className={styles.vectorFrameIcon}
                loading="eager"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className={styles.quizAnalysisGroup}>
            <FormContainer propAlignSelf="unset" propWidth="828px" />
          </div>
        </section>
      </main>
      <div className={styles.createQuizButton} />
    </div>
  );
};

export default QuestionWisePollTypeQuesti;

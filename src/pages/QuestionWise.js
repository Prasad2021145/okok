import CreateFrameContainer from "../components/CreateFrameContainer";
import QuestionFormContainer2 from "../components/QuestionFormContainer2";
import styles from "./QuestionWise.module.css";

const QuestionWise = () => {
  return (
    <div className={styles.questionWise}>
      <main className={styles.questionFrame}>
        <CreateFrameContainer />
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.correctAnswersPeople}>
            <div className={styles.createdOnSep}>
              <div className={styles.impressions}>
                <div className={styles.createdOn}>
                  Created on : 04 Sep, 2023
                </div>
                <div className={styles.impressions667}>Impressions : 667</div>
              </div>
              <div className={styles.quizQuestion}>
                <div className={styles.quiz2Question}>
                  Quiz 2 Question Analysis
                </div>
                <div className={styles.peopleAttemptedCorrectly}>
                  <div
                    className={styles.q1QuestionPlace}
                  >{`Q.1 Question place holder for analysis ? `}</div>
                </div>
              </div>
            </div>
            <div className={styles.framePeopleAnalysis}>
              <div className={styles.frameParent}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.blankFrame}>60</div>
                  <div className={styles.peopleAttemptedThe}>
                    people Attempted the question
                  </div>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <div className={styles.div}>38</div>
                  <div className={styles.peopleAnsweredCorrectly}>
                    people Answered Correctly
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.peopleAttemptedCorrectlyIncWrapper}>
                    <div className={styles.peopleAttemptedCorrectly1}>22</div>
                  </div>
                  <div className={styles.peopleAnsweredIncorrectly}>
                    people Answered Incorrectly
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.questionPlaceholder}>
            <img
              className={styles.questionPlaceholderChild}
              loading="eager"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <QuestionFormContainer2 />
          <div className={styles.questionPlaceholder1}>
            <img
              className={styles.questionPlaceholderItem}
              loading="eager"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <QuestionFormContainer2 propMinHeight="unset" />
        </section>
      </main>
      <div className={styles.rectanglePlaceholder} />
    </div>
  );
};

export default QuestionWise;

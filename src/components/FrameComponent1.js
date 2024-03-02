import { memo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent11 = memo(({ k }) => {
  return (
    <nav className={styles.trendingQuizzesText}>
      <div className={styles.frameContainingQuizQuestion}>
        <div className={styles.frameContainingCreatedQuiz}>
          <div className={styles.frameContainingCreatedQuizChild} />
          <div className={styles.quizFrame}>
            <div className={styles.frameWithQuestionsInfo}>
              <div className={styles.textNodeWith}>12</div>
            </div>
            <h1 className={styles.quiz}>Quiz</h1>
          </div>
          <div className={styles.quiz1}>
            <h1 className={styles.created}>{`Created `}</h1>
          </div>
        </div>
      </div>
      <div className={styles.groupQuizIcons}>
        <div className={styles.groupQuizIconsChild} />
        <div className={styles.createdOnLabel}>
          <div className={styles.quiz2}>110</div>
          <div className={styles.totalImpressionsText}>
            <h1 className={styles.questions}>questions</h1>
          </div>
        </div>
        <div className={styles.quizCreatorFrame}>
          <h1 className={styles.created1}>{`Created `}</h1>
        </div>
      </div>
      <div className={styles.groupQuizIcons1}>
        <div className={styles.groupQuizIconsItem} />
        <div className={styles.kParent}>
          <div className={styles.k}>{k}</div>
          <div className={styles.createdKText}>
            <h1 className={styles.total}>Total</h1>
          </div>
        </div>
        <div className={styles.impressionsCount}>
          <h1 className={styles.impressions}>Impressions</h1>
        </div>
      </div>
    </nav>
  );
});

export default FrameComponent11;
